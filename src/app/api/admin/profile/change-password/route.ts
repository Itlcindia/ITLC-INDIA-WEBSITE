import { NextResponse } from 'next/server.js';
import { prisma } from '@/lib/prisma';
import { getSessionUser, verifyPassword, hashPassword } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    // 1. Check authenticated session
    const session = await getSessionUser();
    if (!session || !['SUPER_ADMIN', 'STAFF'].includes(session.role)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized. Admin session required.' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { currentPassword, newPassword, confirmPassword } = body;

    // 2. Validate input fields
    if (!currentPassword || !newPassword || !confirmPassword) {
      return NextResponse.json(
        { success: false, error: 'All fields (current password, new password, confirm password) are required.' },
        { status: 400 }
      );
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        { success: false, error: 'New password and confirmation do not match.' },
        { status: 400 }
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { success: false, error: 'New password must be at least 8 characters long.' },
        { status: 400 }
      );
    }

    // 3. Fetch user record from database (or handle offline fallback)
    if (session.id === 'admin_local_fallback') {
      const defaultAdminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';
      if (currentPassword !== defaultAdminPassword) {
        return NextResponse.json(
          { success: false, error: 'The current password you entered is incorrect.' },
          { status: 400 }
        );
      }
      return NextResponse.json({
        success: true,
        message: 'Password successfully verified and simulated! (Note: Connect live MySQL via npm run db:push to permanently persist changes).',
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.id },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User account not found in database.' },
        { status: 404 }
      );
    }

    // 4. Verify existing password
    const isCurrentValid = await verifyPassword(currentPassword, user.password);
    if (!isCurrentValid) {
      return NextResponse.json(
        { success: false, error: 'The current password you entered is incorrect.' },
        { status: 400 }
      );
    }

    // 5. Prevent reusing identical password
    const isSamePassword = await verifyPassword(newPassword, user.password);
    if (isSamePassword) {
      return NextResponse.json(
        { success: false, error: 'The new password must be different from your current password.' },
        { status: 400 }
      );
    }

    // 6. Hash new password and update in MySQL database
    const hashedNewPassword = await hashPassword(newPassword);
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedNewPassword,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Password updated successfully! Your account is now secured.',
    });
  } catch (error) {
    console.error('Change Password Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while updating password.' },
      { status: 500 }
    );
  }
}
