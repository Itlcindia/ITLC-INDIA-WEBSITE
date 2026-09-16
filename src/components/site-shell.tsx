'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/landing/header';
import Footer from '@/app/footer';
import Chatbot from '@/components/chatbot';

/**
 * SiteShell conditionally renders the public website Header, Footer,
 * Chatbot widget, and decorative background ONLY for public pages.
 * On all `/admin` routes, it renders children cleanly with zero public chrome.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="site-dot-grid min-h-screen flex flex-col">
      {/* Public Header Navbar */}
      <Header />

      {/* Public Main Content */}
      <div className="flex-1 w-full">
        {children}
      </div>

      {/* Public Footer */}
      <Footer />

      {/* Public AI Chatbot Widget */}
      <Chatbot />
    </div>
  );
}
