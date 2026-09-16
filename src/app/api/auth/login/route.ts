import { NextResponse } from 'next/server.js';
import { prisma } from '@/lib/prisma';
import { verifyPassword, hashPassword, signToken, AUTH_COOKIE_NAME } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // 1. Check if user exists in database
    let user = null;
    let isOfflineAuth = false;

    try {
      user = await prisma.user.findUnique({
        where: { email: normalizedEmail },
      });

      // Initial setup helper: If zero users exist in the database, automatically seed the first Super Admin
      if (!user) {
        const userCount = await prisma.user.count();
        const defaultAdminEmail = (process.env.ADMIN_EMAIL || 'admin@itlcindia.com').trim().toLowerCase();
        const defaultAdminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';

        if (userCount === 0 && normalizedEmail === defaultAdminEmail) {
          const hashedPassword = await hashPassword(defaultAdminPassword);
          user = await prisma.user.create({
            data: {
              name: 'ITLC Super Admin',
              email: defaultAdminEmail,
              password: hashedPassword,
              role: 'SUPER_ADMIN',
              status: 'ACTIVE',
            },
          });
        }
      }
    } catch (dbError) {
      console.warn('Database offline/unreachable. Using local fallback admin authentication.');
      const defaultAdminEmail = (process.env.ADMIN_EMAIL || 'admin@itlcindia.com').trim().toLowerCase();
      const defaultAdminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';

      if (normalizedEmail === defaultAdminEmail && password === defaultAdminPassword) {
        user = {
          id: 'admin_local_fallback',
          name: 'ITLC Super Admin',
          email: defaultAdminEmail,
          password: '',
          role: 'SUPER_ADMIN',
          status: 'ACTIVE',
        };
        isOfflineAuth = true;
      }
    }

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    if (user.status !== 'ACTIVE') {
      return NextResponse.json(
        { success: false, error: 'Your account has been deactivated. Contact ITLC administration.' },
        { status: 403 }
      );
    }

    // 2. Verify password (only if not already verified in offline fallback)
    if (!isOfflineAuth) {
      const isPasswordValid = await verifyPassword(password, user.password);
      if (!isPasswordValid) {
        return NextResponse.json(
          { success: false, error: 'Invalid email or password' },
          { status: 401 }
        );
      }
    }

    // 3. Generate JWT Token
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role as 'SUPER_ADMIN' | 'STAFF' | 'STUDENT' | 'CLIENT',
    };
    const token = await signToken(payload);

    // 4. Determine redirect path based on user role
    let redirectTo = '/admin/dashboard';
    if (user.role === 'STUDENT') {
      redirectTo = '/student/dashboard';
    } else if (user.role === 'CLIENT') {
      redirectTo = '/products';
    }

    // 5. Create response with secure HTTP-only cookie
    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      redirectTo,
    });

    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error('Login API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error during authentication' },
      { status: 500 }
    );
  }
}
