"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Layers,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Shield,
  Zap,
  Lock,
  Eye,
  Sparkles,
  Users,
  BrainCircuit,
  Building2,
  ChevronRight,
  Loader2,
  Check,
  Server,
  Headphones,
  Calculator,
  TrendingUp,
  PenTool,
  Bot,
  FileText,
  CheckSquare,
  Repeat,
  HardHat,
  GraduationCap,
  ShoppingCart,
  MessageSquare,
  Clock,
  Sparkle,
  ArrowUpRight,
  Smile,
  Quote,
  Flame,
  Code2,
  Database,
  Coins,
  Heart,
  SlidersHorizontal,
  FolderLock,
  Send,
  CornerDownRight,
  RefreshCw,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import PolygonHeroBackground from "@/components/ui/polygon-hero-background";
import { initialProducts } from "@/lib/initial-products";

interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  icon?: string | null;
  features: string; // JSON string
  directLoginUrl?: string | null;
  externalWebsiteUrl?: string | null;
  demoUrl?: string | null;
  isLive: boolean;
  sortOrder: number;
}

// Icon mapper for dynamic app tiles
const renderProductIcon = (iconName?: string | null, size = "w-6 h-6") => {
  switch (iconName) {
    case "Calculator":
      return <Calculator className={size} />;
    case "Users":
      return <Users className={size} />;
    case "TrendingUp":
      return <TrendingUp className={size} />;
    case "Layers":
      return <Layers className={size} />;
    case "PenTool":
      return <PenTool className={size} />;
    case "Bot":
      return <Bot className={size} />;
    case "FileText":
      return <FileText className={size} />;
    case "CheckSquare":
      return <CheckSquare className={size} />;
    case "Repeat":
      return <Repeat className={size} />;
    case "HardHat":
      return <HardHat className={size} />;
    case "GraduationCap":
      return <GraduationCap className={size} />;
    case "ShoppingCart":
      return <ShoppingCart className={size} />;
    case "Building2":
      return <Building2 className={size} />;
    case "BrainCircuit":
      return <BrainCircuit className={size} />;
    default:
      return <Layers className={size} />;
  }
};

// Pastel vibrant color accents for app icon boxes matching Poppins modern style
const appColorPalette = [
  "bg-blue-50 text-blue-600 border-blue-100 hover:border-blue-300 hover:bg-blue-100/60",
  "bg-indigo-50 text-indigo-600 border-indigo-100 hover:border-indigo-300 hover:bg-indigo-100/60",
  "bg-emerald-50 text-emerald-600 border-emerald-100 hover:border-emerald-300 hover:bg-emerald-100/60",
  "bg-violet-50 text-violet-600 border-violet-100 hover:border-violet-300 hover:bg-violet-100/60",
  "bg-sky-50 text-sky-600 border-sky-100 hover:border-sky-300 hover:bg-sky-100/60",
  "bg-amber-50 text-amber-600 border-amber-100 hover:border-amber-300 hover:bg-amber-100/60",
  "bg-teal-50 text-teal-600 border-teal-100 hover:border-teal-300 hover:bg-teal-100/60",
  "bg-rose-50 text-rose-600 border-rose-100 hover:border-rose-300 hover:bg-rose-100/60",
];

// Sample avatars for Social Proof Wall
const userAvatars = [
  { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80", name: "Ananya", role: "Product Lead" },
  { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80", name: "Rahul", role: "CTO" },
  { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80", name: "Pooja", role: "HR Director" },
  { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80", name: "Vikram", role: "Operations" },
  { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80", name: "Kritika", role: "Founder" },
  { img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80", name: "Devansh", role: "Enterprise Client" },
  { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80", name: "Simran", role: "Finance Manager" },
  { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80", name: "Aditya", role: "VP Engineering" },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(() => (initialProducts as unknown as Product[]) || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (data.success) {
          setProducts(data.products || []);
        }
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* ============================================================ */}
      {/* 1. HERO SECTION (Tech Dark Blue Polygon Wireframe & Dots)    */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-14 md:pt-36 md:pb-16 overflow-hidden bg-[#060813] text-white border-b border-slate-800/80">
        <PolygonHeroBackground />

        <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-6 shadow-xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            ITLC Enterprise SaaS Suite
          </div>

          {/* Structured Headline matching reference style */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.2] max-w-3xl mx-auto">
            All your business on one platform.
            <span className="block mt-1.5 text-slate-100 font-bold">
              Simple, efficient, yet affordable!
            </span>
          </h1>

          {/* Balanced Structured Subtitle matching reference */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Streamline operations, automate complex workflows, and empower your enterprise with ITLC&apos;s modern modular business software suite.
          </p>

          {/* CTA Buttons & Pricing Callout */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 relative max-w-xl mx-auto">
            {/* Primary Button */}
            <Link href="#apps-grid">
              <Button className="h-12 px-7 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Start now - It&apos;s free
              </Button>
            </Link>

            {/* Secondary Button */}
            <Link href="/contact">
              <Button
                variant="outline"
                className="h-12 px-7 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-medium text-sm sm:text-base transition-all hover:border-slate-600"
              >
                Meet an advisor
              </Button>
            </Link>

            {/* Side Curved Arrow & Pricing Badge */}
            <div className="sm:absolute sm:left-full sm:ml-4 mt-3 sm:mt-0 flex items-center gap-2 text-left animate-in fade-in slide-in-from-bottom-2">
              <span className="text-2xl text-blue-400 select-none">↳</span>
              <div className="bg-blue-950/70 border border-blue-500/30 px-3.5 py-1.5 rounded-xl shadow-xs backdrop-blur-sm">
                <p className="text-xs font-bold text-blue-200 whitespace-nowrap">
                  ₹580.00 / month
                </p>
                <p className="text-[11px] font-medium text-blue-400 whitespace-nowrap">
                  for ALL modular apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. MODULAR APP ICONS GRID (Image 2 Style - Dynamic Apps)     */}
      {/* ============================================================ */}
      <section id="apps-grid" className="relative pt-12 pb-20 border-b border-slate-100">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              One Integrated Suite for Every Department
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Click any modular app to sign in directly, launch live workspaces, or request an enterprise demo.
            </p>
          </div>

          {/* Dynamic App Grid */}
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              <p className="text-sm font-medium">Loading modular apps catalogue...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
              {products.map((product, idx) => {
                const colorClass = appColorPalette[idx % appColorPalette.length];
                const signInUrl = product.directLoginUrl || "/admin/login";
                const viewUrl = product.externalWebsiteUrl || product.demoUrl || "/contact";

                return (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl p-4 sm:p-5 border border-blue-100/90 shadow-md shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between min-h-[220px] relative overflow-hidden"
                  >
                    {/* Soft ambient blue glow in card background */}
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-100/40 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 group-hover:opacity-80" />
                    <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-blue-50/60 rounded-full blur-2xl pointer-events-none" />

                    {/* Top: Category Badge & Live Indicator */}
                    <div className="flex items-center justify-between gap-2 mb-1 relative z-10">
                      <span className="text-[10px] sm:text-[11px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50/90 px-3 py-0.5 rounded-full border border-blue-200/70 shadow-xs">
                        {product.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-emerald-600">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Live
                      </span>
                    </div>

                    {/* Center: Visible Product Icon (Kept exact same current size) */}
                    <div className="flex-1 flex flex-col items-center justify-center my-3 sm:my-4 relative z-10">
                      <div
                        className={cn(
                          "w-20 h-20 rounded-2xl flex items-center justify-center border shadow-md shadow-blue-500/10 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300",
                          colorClass
                        )}
                      >
                        {renderProductIcon(product.icon, "w-10 h-10")}
                      </div>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2.5 relative z-10">
                      {/* Bottom-Left: Sign In Button */}
                      <a
                        href={signInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 h-9 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs shadow-blue-600/20 transition-all hover:shadow-md hover:shadow-blue-600/30 active:scale-[0.98]"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>Sign In</span>
                      </a>

                      {/* Bottom-Right: View Button */}
                      <a
                        href={viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 h-9 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-all hover:border-slate-300 active:scale-[0.98]"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. OPTIMIZED FOR PRODUCTIVITY & UI MOCKUP (Image 3 Style)    */}
      {/* ============================================================ */}
      <section className="py-24 border-b border-slate-100 overflow-hidden relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Heading with Underline */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Optimized for{" "}
              <span className="relative inline-block text-blue-600">
                productivity
                <span className="absolute left-0 -bottom-2 w-full h-1.5 bg-amber-400 rounded-full"></span>
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-600">
              A lightning-fast, clutter-free workspace that unifies projects, team collaboration, and autonomous AI intelligence.
            </p>
          </div>

          {/* Interactive Software Window Mockup */}
          <div className="bg-slate-900 rounded-3xl p-3 sm:p-4 shadow-2xl border border-slate-800 relative max-w-5xl mx-auto">
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs text-slate-400 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                <span className="ml-3 font-mono text-[11px] text-slate-400">
                  itlc-suite.app / workspace / enterprise-hub
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-[10px] text-emerald-400 border-emerald-500/30 bg-emerald-950/40">
                  ● Real-time Sync Active
                </Badge>
              </div>
            </div>

            {/* Inner Dashboard Canvas */}
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[460px] relative">
              {/* Left Mini Sidebar */}
              <div className="hidden sm:block lg:col-span-3 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                    ITLC
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">ITLC Suite Hub</h4>
                    <p className="text-[10px] text-slate-400">Enterprise Edition</p>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50 text-blue-700 font-semibold">
                    <span className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5" /> Workspace Board
                    </span>
                    <span className="bg-blue-200/60 px-1.5 py-0.5 rounded text-[10px]">12</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg text-slate-600 hover:bg-slate-50">
                    <span className="flex items-center gap-2">
                      <Calculator className="w-3.5 h-3.5" /> Invoices & GST
                    </span>
                    <span className="text-[10px] text-slate-400">₹4.8M</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg text-slate-600 hover:bg-slate-50">
                    <span className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5" /> Active Staff (HR)
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold">98.4%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg text-slate-600 hover:bg-slate-50">
                    <span className="flex items-center gap-2">
                      <HardHat className="w-3.5 h-3.5" /> Infra Site DPR
                    </span>
                    <span className="text-[10px] text-amber-600">Pending 2</span>
                  </div>
                </div>
              </div>

              {/* Center Kanban Board */}
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Column 1: In Progress */}
                <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs flex flex-col">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span> In Progress
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">3 tasks</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-blue-600 mb-1">
                        <span>GST Billing Run</span>
                        <span className="text-slate-400">Due Today</span>
                      </div>
                      <p className="text-xs font-bold text-slate-800">
                        Monthly E-Invoice Generation & IRN Verification
                      </p>
                      <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                        <span>Accounting Module</span>
                        <span className="text-emerald-600 font-bold">● 85% Reconciled</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-indigo-600 mb-1">
                        <span>Biometric Sync</span>
                        <span className="text-slate-400">HRMS Engine</span>
                      </div>
                      <p className="text-xs font-bold text-slate-800">
                        Geo-fenced Shift Roster Check-In Audit
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 2: To Review */}
                <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs flex flex-col">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span> To Review
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">2 tasks</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-amber-200 hover:shadow-xs transition-all">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-amber-600 mb-1">
                        <span>Infra Project</span>
                        <span className="text-slate-400">Civil DPR</span>
                      </div>
                      <p className="text-xs font-bold text-slate-800">
                        Site Floorplan & Contractor Measurement Book (MB)
                      </p>
                      <div className="mt-2 text-[10px] text-slate-400">
                        Approved by Project Manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating "Ask AI" Assistant Window (Image 3 Highlight) */}
              <div className="absolute -bottom-6 right-4 sm:right-8 bg-white rounded-2xl p-4 border border-slate-200 shadow-2xl max-w-sm w-full z-20 animate-in fade-in slide-in-from-bottom-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">ITLC Copilot AI</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                    Online
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="bg-slate-100 rounded-xl p-2.5 text-slate-700 font-medium">
                    "What's my best selling product and its current margin?"
                  </div>
                  <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-2.5 text-blue-900">
                    <p className="text-[11px] font-semibold flex items-center gap-1.5 text-blue-700 mb-1">
                      <Sparkles className="w-3 h-3" /> AI Analysis:
                    </p>
                    <p className="text-[11px] leading-relaxed">
                      ITLC Smart HRMS has the highest retention (96.4%) with an operating margin of 41.2%.
                    </p>
                  </div>
                </div>

                <div className="mt-3 relative">
                  <Input
                    readOnly
                    value="Message ITLC AI Copilot..."
                    className="h-8 text-xs pr-8 rounded-lg border-slate-200 bg-slate-50 cursor-default"
                  />
                  <Send className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>
          </div>

          {/* Speed & Performance Callout Banner */}
          <div className="mt-20 text-center max-w-3xl mx-auto pt-8 border-t border-slate-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
              Experience true speed, reduced data entry, smart AI, and a fast UI. All operations are done in{" "}
              <span className="text-blue-600 font-extrabold bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100">
                less than 90ms
              </span>{" "}
              — faster than a blink.
            </h3>

            {/* Micro metrics */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <span className="text-2xl font-black text-slate-900">&lt; 90ms</span>
                <p className="text-xs text-slate-500 font-semibold mt-1">Average Response Time</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <span className="text-2xl font-black text-blue-600">80% Less</span>
                <p className="text-xs text-slate-500 font-semibold mt-1">Manual Data Entry via AI</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <span className="text-2xl font-black text-emerald-600">100%</span>
                <p className="text-xs text-slate-500 font-semibold mt-1">Full Data Ownership & Export</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. ENTERPRISE SOFTWARE DONE RIGHT (6 Value Cards)            */}
      {/* ============================================================ */}
      <section className="py-24 border-b border-slate-100">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Enterprise software done right.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              A transparent, powerful, and modular technology foundation built without corporate complications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Open Architecture & Community */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Open Architecture</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Behind the technology is a nationwide network of 100k+ developers collaborating together. We are united by a common vision:{" "}
                  <em>"to transform companies and empower employees."</em>
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Available in <strong>Community</strong> (Free & Essential) & <strong>Enterprise</strong> (Cloud & SLA).
              </div>
            </div>

            {/* Card 2: Open Source + AI = ❤️ */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5 border border-rose-100">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise Software + AI = ❤️</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Use ITLC Studio to develop or vibe-code tailored modules. With native open architectures, intelligent LLM agents are pre-trained on business schemas to automate tasks automatically.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Native workflow automation with autonomous copilots.
              </div>
            </div>

            {/* Card 3: 40k+ Community Apps */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 border border-indigo-100">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Modular Business Apps</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Thanks to our modular architecture, ITLC brings an integrated ecosystem of apps covering CRM, HRMS, Accounts, ERP, Field Ops, and Invoicing. An app for every business need.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Install only what you need, expand as you scale.
              </div>
            </div>

            {/* Card 4: No Corporate Bullsh*t */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 border border-amber-100">
                  <Sparkle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Zero Corporate Red Tape</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <em>"With most legacy enterprise systems, you get 70% of what you hoped. With ITLC Suite, you get more than what you expected."</em> Built for agility, speed, and real operational leverage.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                100% transparent delivery with direct engineer support.
              </div>
            </div>

            {/* Card 5: No Vendor Lock-in */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No Vendor Lock-in</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No proprietary trapped formats: you own your data 100%. Standard relational export (MySQL / PostgreSQL / JSON), open APIs, and total flexibility to host on ITLC Cloud or on-premise.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Your data, your servers, your sovereign rights.
              </div>
            </div>

            {/* Card 6: Fair Pricing */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 border border-sky-100">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fair & Predictable Pricing</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No arbitrary usage price traps, no feature upselling, no long-term restrictive contracts, no hidden hosting limits. Just a single predictable price per user — all inclusive.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Designed for Indian businesses to scale effortlessly.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. SOCIAL PROOF AVATAR WALL & TESTIMONIAL (Image 4 Style)    */}
      {/* ============================================================ */}
      <section className="py-24 border-b border-slate-100 overflow-hidden relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          {/* Avatar Mosaic Social Proof (Image 4) */}
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            {/* Hand-drawn style happy arrow */}
            <div className="inline-flex items-center gap-1.5 text-amber-500 font-bold text-xs mb-3">
              <span>happy</span>
              <span className="text-base">↓</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Join <span className="text-blue-600">50,000+ businesses</span>
              <br />
              who grow their enterprise with ITLC Suite
            </h2>

            {/* Mosaic of Rounded Avatar Tiles */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
              {userAvatars.map((user, i) => (
                <div
                  key={i}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-white shadow-md hover:scale-110 transition-transform relative group"
                >
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[9px] text-white font-bold text-center p-1">
                    {user.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Testimonial Card */}
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs relative">
            <Quote className="w-12 h-12 text-amber-500/80 mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed">
                  "The processing time for accounting documents and compliance has been noticeably reduced, in certain cases even from{" "}
                  <strong className="text-blue-600 font-bold">2 days to only 5 hours</strong>. As a result, our executive leadership can now focus on what matters most: strategic growth and advising clients."
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col items-center sm:items-start border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-md mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
                    alt="Executive Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Harry Van Donink</h4>
                <p className="text-xs text-slate-500 font-medium">CEO & Enterprise Director</p>
                <div className="mt-3 bg-white px-3 py-1 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 tracking-wider">
                  ENTERPRISE AUDIT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. UNLEASH YOUR GROWTH POTENTIAL (Image 5 Style Final CTA)   */}
      {/* ============================================================ */}
      <section className="py-24 text-center relative overflow-hidden border-b border-slate-100">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-block p-1 rounded-2xl bg-blue-100/60 mb-6">
            <div className="px-5 py-2 rounded-xl bg-white border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider">
              Ready for Next-Level Efficiency?
            </div>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Unleash your{" "}
            <span className="relative inline-block px-3 py-1 rounded-xl bg-blue-100/80 text-blue-700">
              growth potential
            </span>
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center">
            <Link href="#apps-grid">
              <Button className="h-14 px-10 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-xl shadow-slate-900/20 transition-all hover:scale-105 active:scale-95">
                Start now - It's free
              </Button>
            </Link>

            {/* Little pointer arrow */}
            <div className="mt-4 flex flex-col items-center text-xs font-semibold text-slate-500">
              <span className="text-emerald-500 text-lg">↑</span>
              <p>No credit card required • Instant access</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
