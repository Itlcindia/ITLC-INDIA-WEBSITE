import React from 'react';
import { getSessionUser } from '@/lib/auth';
import { AdminLayoutWrapper } from '@/components/admin/admin-layout-wrapper';

export const metadata = {
  title: 'ITLC INDIA - Admin Control Center',
  description: 'Enterprise administration portal for ITLC INDIA PVT LTD',
};

export default async function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSessionUser();

  // If user is not signed in or on /admin/login, render children cleanly without sidebar
  if (!user) {
    return <div className="min-h-screen bg-white font-body">{children}</div>;
  }

  return (
    <AdminLayoutWrapper user={user}>
      {children}
    </AdminLayoutWrapper>
  );
}
