"use client";

import React, { useState } from "react";
import {
  Lock,
  Mail,
  Building,
  KeyRound,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Shield,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ProductLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    tagline?: string;
    externalWebsiteUrl?: string | null;
  } | null;
}

export default function ProductLoginModal({
  isOpen,
  onClose,
  product,
}: ProductLoginModalProps) {
  const { toast } = useToast();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen || !product) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          role: "CLIENT",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        toast({
          title: `Welcome to ${product.name}!`,
          description: "Authenticated successfully. Redirecting to your workspace...",
        });

        setTimeout(() => {
          if (product.externalWebsiteUrl) {
            window.location.href = product.externalWebsiteUrl;
          } else {
            router.push("/client/dashboard");
          }
        }, 1200);
      } else {
        setErrorMsg(data.error || "Invalid credentials. Please check your email and password.");
      }
    } catch {
      setErrorMsg("Network error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in font-sans">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-100 p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors text-sm"
        >
          ✕
        </button>

        {/* Product Brand Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3 border border-blue-100 shadow-sm">
            <Layers className="w-7 h-7" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2 border border-blue-100">
            <Shield className="w-3.5 h-3.5" />
            Direct Workspace Login
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            {product.name}
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
            {product.tagline || "Enter your client or organization credentials to access your dashboard."}
          </p>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Success Alert */}
        {success && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Login verified! Loading product dashboard...</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Work Email / Client ID
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@organization.com"
                className="pl-10 h-11 rounded-xl border-slate-200 focus-visible:ring-blue-500 bg-slate-50/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="pl-10 h-11 rounded-xl border-slate-200 focus-visible:ring-blue-500 bg-slate-50/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center justify-between">
              <span>Organization Code</span>
              <span className="text-[10px] lowercase text-slate-400">(optional)</span>
            </label>
            <div className="relative">
              <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <Input
                type="text"
                value={companyCode}
                onChange={(e) => setCompanyCode(e.target.value)}
                placeholder="e.g. ITLC-ORG-01"
                className="pl-10 h-11 rounded-xl border-slate-200 focus-visible:ring-blue-500 bg-slate-50/50 uppercase text-xs font-mono"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading || success}
            className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all mt-2"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Lock className="w-4 h-4 mr-2" />
            )}
            Sign In to {product.name}
          </Button>
        </form>

        {/* Dual Mode Switch: External Website Link */}
        {product.externalWebsiteUrl && (
          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400 mb-2">Prefer opening the full standalone portal?</p>
            <a
              href={product.externalWebsiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Open {product.name} in Dedicated Tab
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
