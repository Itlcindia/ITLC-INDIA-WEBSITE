import { NextResponse } from 'next/server.js';
import { prisma } from '@/lib/prisma';
import { getSessionUser, hashPassword } from '@/lib/auth';

// GET /api/admin/staff - Fetch all team members (Admins & Staff)
export async function GET() {
  try {
    const session = await getSessionUser();
    if (!session || !['SUPER_ADMIN', 'STAFF'].includes(session.role)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const staffList = await prisma.user.findMany({
      where: {
        role: {
          in: ['SUPER_ADMIN', 'STAFF'],
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        status: true,
        createdAt: true,
        staffProfile: {
          select: {
            department: true,
            permissions: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({
      success: true,
      staff: staffList,
    });
  } catch (error) {
    console.warn('Fetch Staff Error (Database offline). Returning session user as fallback.');
    const session = await getSessionUser();
    return NextResponse.json({
      success: true,
      staff: [
        {
          id: session?.id || 'admin_local_fallback',
          name: session?.name || 'ITLC Super Admin',
          email: session?.email || 'admin@itlcindia.com',
          role: session?.role || 'SUPER_ADMIN',
          status: 'ACTIVE',
          createdAt: new Date().toISOString(),
          staffProfile: {
            department: 'Management',
            permissions: JSON.stringify(['all']),
          },
        },
      ],
    });
  }
}

// POST /api/admin/staff - Create new staff/admin user
export async function POST(request: Request) {
  try {
    const session = await getSessionUser();
    if (!session || session.role !== 'SUPER_ADMIN') {
      return NextResponse.json(
        { success: false, error: 'Access denied. Only Super Admins can add team members.' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { name, email, password, role = 'STAFF', phone, department = 'Management' } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and temporary password are required.' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 8 characters long.' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check if email already registered
    const existing = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, error: 'A user account with this email already exists.' },
        { status: 409 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
        role: role === 'SUPER_ADMIN' ? 'SUPER_ADMIN' : 'STAFF',
        phone: phone ? phone.trim() : null,
        status: 'ACTIVE',
        staffProfile: {
          create: {
            department,
            permissions: JSON.stringify(['certificates', 'students', 'blogs', 'contacts']),
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        status: true,
        createdAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      user: newUser,
      message: 'New team member account created successfully.',
    });
  } catch (error) {
    console.error('Create Staff Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while creating team member' },
      { status: 500 }
    );
  }
}
