'use client';

import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  ArrowRight, 
  Loader2,
  KeyRound
} from 'lucide-react';
import { motion } from 'framer-motion';

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const from = searchParams.get('from');
  const errorParam = searchParams.get('error');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: 'Required Fields',
        description: 'Please provide both admin email and password.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Admin authentication failed');
      }

      if (data.user.role !== 'SUPER_ADMIN' && data.user.role !== 'STAFF') {
        throw new Error('Access denied. Administrator privileges required.');
      }

      toast({
        title: 'Authentication Successful',
        description: `Welcome to ITLC Command Center, ${data.user.name}`,
      });

      const destination = from || '/admin/dashboard';
      router.push(destination);
      router.refresh();
    } catch (error: any) {
      toast({
        title: 'Access Denied',
        description: error.message || 'Invalid credentials or insufficient permissions.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-white relative overflow-hidden font-body">
      {/* Subtle Background Elements matching Homepage */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-50">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Admin Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 group mb-4">
            <div className="relative w-12 h-12 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
              <Image 
                src="/logo/lo.png" 
                alt="ITLC INDIA PVT LTD Logo" 
                width={40} 
                height={40} 
                className="object-contain" 
              />
            </div>
            <div className="text-left">
              <span className="font-headline font-black text-xl tracking-tight text-slate-900 block leading-tight">
                ITLC INDIA
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary block">
                ADMINISTRATION
              </span>
            </div>
          </Link>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Staff & Super Admin Gateway</span>
          </div>

          <h1 className="font-headline text-3xl font-black text-slate-900 tracking-tight">
            Control Center
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Sign in to manage certificates, admissions, products and content
          </p>
        </div>

        {errorParam === 'unauthorized' && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-3">
            <KeyRound className="h-5 w-5 shrink-0 text-red-500" />
            <span>Administrative privileges are required to access this resource. Please sign in with an authorized account.</span>
          </div>
        )}

        {/* Login Card */}
        <Card className="rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xl shadow-slate-200/50">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="admin-email" className="text-sm font-bold text-slate-800">
                  Admin Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="admin-email"
                    type="email"
                    placeholder="admin@itlcindia.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-11 h-12 rounded-xl border-slate-200 focus-visible:ring-primary text-slate-900 bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="admin-password" className="text-sm font-bold text-slate-800">
                    Master Password
                  </Label>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="admin-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-11 pr-11 h-12 rounded-xl border-slate-200 focus-visible:ring-primary text-slate-900 bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-xl font-bold text-base bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Verifying Credentials...
                  </>
                ) : (
                  <>
                    Sign In to Dashboard
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400">
                Authorized ITLC INDIA Personnel Only
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link 
            href="/" 
            className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
          >
            ← Return to ITLC Website
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    }>
      <AdminLoginForm />
    </Suspense>
  );
}
