'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { MobileAdminSidebar } from './admin-sidebar';
import { useToast } from '@/hooks/use-toast';
import { 
  LogOut, 
  ExternalLink, 
  ShieldCheck, 
  User, 
  Bell,
  Loader2
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface AdminHeaderProps {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

export function AdminHeader({ user }: AdminHeaderProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      toast({
        title: 'Logged Out',
        description: 'You have been safely signed out.',
      });
      router.push('/admin/login');
      router.refresh();
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to log out. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="h-20 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 md:px-8 flex items-center justify-between z-20 font-body shrink-0">
      <div className="flex items-center gap-3">
        <MobileAdminSidebar />
        <div>
          <h2 className="font-headline font-black text-slate-900 text-lg md:text-xl tracking-tight hidden sm:block">
            Management Portal
          </h2>
          <p className="text-slate-500 text-xs hidden md:block">
            Control center for ITLC INDIA PVT LTD operations
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* View Public Website Link */}
        <Button
          asChild
          variant="outline"
          size="sm"
          className="hidden sm:inline-flex rounded-xl font-bold border-slate-200 text-slate-700 hover:text-primary hover:border-primary/40 gap-1.5"
        >
          <Link href="/" target="_blank">
            <ExternalLink className="h-3.5 w-3.5" />
            <span>View Website</span>
          </Link>
        </Button>

        {/* User Account Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="flex items-center gap-3 px-3 py-2 rounded-2xl hover:bg-slate-50 border border-slate-100/80 transition-all cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-primary text-white font-black flex items-center justify-center text-sm shadow-xs">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="text-left hidden md:block">
                <span className="font-bold text-slate-900 text-xs block leading-tight">
                  {user.name}
                </span>
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider block">
                  {user.role.replace('_', ' ')}
                </span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-2xl shadow-xl border-slate-200 font-body p-2">
            <DropdownMenuLabel className="font-bold text-xs text-slate-500 uppercase tracking-wider px-3 py-2">
              Signed in as
            </DropdownMenuLabel>
            <div className="px-3 py-1.5 mb-2 bg-slate-50 rounded-xl">
              <p className="font-bold text-sm text-slate-900 truncate">{user.name}</p>
              <p className="text-xs text-slate-500 truncate">{user.email}</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/admin/staff" className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer">
                <User className="h-4 w-4 text-slate-400" />
                <span>Account & Staff</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/" target="_blank" className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer">
                <ExternalLink className="h-4 w-4 text-slate-400" />
                <span>Open Public Website</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold text-red-600 hover:text-red-700 hover:bg-red-50 cursor-pointer"
            >
              {isLoggingOut ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogOut className="h-4 w-4" />}
              <span>Sign Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
