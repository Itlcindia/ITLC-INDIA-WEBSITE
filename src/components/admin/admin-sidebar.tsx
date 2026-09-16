'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Award,
  GraduationCap,
  Package,
  Briefcase,
  Mail,
  FileText,
  Image as ImageIcon,
  Layers,
  Users,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const adminNavItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/certificates', label: 'Certificates', icon: Award },
  { href: '/admin/students', label: 'Student Admissions', icon: GraduationCap },
  { href: '/admin/products', label: 'Products Suite', icon: Package },
  { href: '/admin/careers', label: 'Careers & Jobs', icon: Briefcase },
  { href: '/admin/contacts', label: 'Inquiries & Leads', icon: Mail },
  { href: '/admin/blogs', label: 'Blogs & CMS', icon: FileText },
  { href: '/admin/gallery', label: 'Photo Gallery', icon: ImageIcon },
  { href: '/admin/portfolio', label: 'Case Studies', icon: Layers },
  { href: '/admin/staff', label: 'Staff & Roles', icon: Users },
];

export function AdminSidebar({ isCollapsed, toggleCollapse }: { isCollapsed: boolean; toggleCollapse: () => void }) {
  const pathname = usePathname();

  return (
    <aside 
      className={cn(
        "hidden md:flex flex-col bg-white border-r border-slate-200/80 transition-all duration-300 z-30 font-body select-none relative",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Brand Header */}
      <div className="h-20 flex items-center justify-between px-4 border-b border-slate-100">
        <Link href="/admin/dashboard" className="flex items-center gap-3 overflow-hidden">
          <div className="relative w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-1.5 shadow-xs">
            <Image 
              src="/logo/lo.png" 
              alt="ITLC Logo" 
              width={32} 
              height={32} 
              className="object-contain" 
            />
          </div>
          {!isCollapsed && (
            <div className="truncate">
              <span className="font-headline font-black text-slate-900 text-base tracking-tight block leading-tight">
                ITLC INDIA
              </span>
              <span className="text-[10px] uppercase font-bold text-primary tracking-wider block">
                Command Center
              </span>
            </div>
          )}
        </Link>

        <button
          onClick={toggleCollapse}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-5 px-3 space-y-1.5 overflow-y-auto">
        {adminNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              className={cn(
                "flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold transition-all group",
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/20 font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className={cn("h-5 w-5 shrink-0 transition-transform group-hover:scale-105", isActive ? "text-white" : "text-slate-400 group-hover:text-slate-700")} />
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </div>

      {/* Live Site Link Footer */}
      <div className="p-3 border-t border-slate-100">
        <Link
          href="/"
          target="_blank"
          className={cn(
            "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:text-primary hover:bg-primary/5 transition-colors border border-dashed border-slate-200",
            isCollapsed && "justify-center px-0"
          )}
          title="Visit Public Website"
        >
          <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" />
          {!isCollapsed && <span>View Public Site</span>}
        </Link>
      </div>
    </aside>
  );
}

export function MobileAdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden rounded-xl text-slate-700">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Admin Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-72 bg-white flex flex-col font-body">
        {/* Brand Header */}
        <div className="h-20 flex items-center gap-3 px-6 border-b border-slate-100">
          <div className="relative w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-1.5 shadow-xs">
            <Image 
              src="/logo/lo.png" 
              alt="ITLC Logo" 
              width={32} 
              height={32} 
              className="object-contain" 
            />
          </div>
          <div>
            <span className="font-headline font-black text-slate-900 text-base tracking-tight block leading-tight">
              ITLC INDIA
            </span>
            <span className="text-[10px] uppercase font-bold text-primary tracking-wider block">
              Control Panel
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-5 px-4 space-y-1.5 overflow-y-auto">
          {adminNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all",
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20 font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                <Icon className={cn("h-5 w-5 shrink-0", isActive ? "text-white" : "text-slate-400")} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-primary bg-slate-50 border border-slate-200 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Open Public Website</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
