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
  ArrowRight, 
  ShieldCheck, 
  GraduationCap, 
  Briefcase, 
  Building2,
  Loader2
} from 'lucide-react';
import { motion } from 'framer-motion';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const from = searchParams.get('from');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: 'Missing Fields',
        description: 'Please enter both email and password.',
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
        throw new Error(data.error || 'Authentication failed');
      }

      toast({
        title: 'Welcome Back!',
        description: `Signed in as ${data.user.name} (${data.user.role.replace('_', ' ')})`,
      });

      // Redirect to destination or role-default dashboard
      const destination = from || data.redirectTo || '/admin/dashboard';
      router.push(destination);
      router.refresh();
    } catch (error: any) {
      toast({
        title: 'Sign In Failed',
        description: error.message || 'Invalid credentials. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-white relative overflow-hidden font-body">
      {/* Subtle Background Elements matching Homepage */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Brand Header */}
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
                PVT LTD
              </span>
            </div>
          </Link>
          <h1 className="font-headline text-3xl font-black text-slate-900 tracking-tight">
            Sign In
          </h1>
          <p className="text-slate-600 text-sm mt-2">
            Access your unified workspace, certificates, or client portals
          </p>
        </div>

        {/* Supported Roles Bar */}
        <div className="grid grid-cols-4 gap-2 mb-6 p-1.5 bg-slate-50 border border-slate-200/80 rounded-2xl text-[11px] font-bold text-slate-600 text-center">
          <div className="flex flex-col items-center py-1.5 px-1 rounded-xl bg-white shadow-xs text-primary">
            <ShieldCheck className="h-4 w-4 mb-1" />
            <span>Admin</span>
          </div>
          <div className="flex flex-col items-center py-1.5 px-1">
            <Briefcase className="h-4 w-4 mb-1 text-slate-400" />
            <span>Staff</span>
          </div>
          <div className="flex flex-col items-center py-1.5 px-1">
            <GraduationCap className="h-4 w-4 mb-1 text-slate-400" />
            <span>Student</span>
          </div>
          <div className="flex flex-col items-center py-1.5 px-1">
            <Building2 className="h-4 w-4 mb-1 text-slate-400" />
            <span>Client</span>
          </div>
        </div>

        {/* Login Card */}
        <Card className="rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-xl shadow-slate-200/50">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-bold text-slate-800">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-11 h-12 rounded-xl border-slate-200 focus-visible:ring-primary text-slate-900 bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-bold text-slate-800">
                    Password
                  </Label>
                  <Link 
                    href="/contact" 
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    Need help?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="password"
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
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center space-y-3">
              <p className="text-xs text-slate-500">
                New candidate or student?{' '}
                <Link href="/student-registration" className="font-bold text-primary hover:underline">
                  Apply for Admission
                </Link>
              </p>
              <p className="text-xs text-slate-500">
                Verifying a certificate?{' '}
                <Link href="/verify-certificate" className="font-bold text-slate-700 hover:underline">
                  Verify Credentials
                </Link>
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
            ← Back to Homepage
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
