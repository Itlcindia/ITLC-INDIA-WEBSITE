"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { 
  Menu, 
  Briefcase, 
  CodeXml, 
  BrainCircuit, 
  Bot, 
  Globe, 
  GraduationCap, 
  BarChart3, 
  Palette, 
  ArrowRight, 
  Smartphone, 
  Headset, 
  PenTool, 
  ExternalLink, 
  Building2, 
  Home, 
  Key, 
  HardHat, 
  ChevronLeft, 
  ShieldCheck, 
  Cloud, 
  LayoutGrid, 
  Cpu, 
  Lock, 
  Network, 
  Server, 
  Settings, 
  Terminal, 
  Zap, 
  ShoppingCart,
  Link as LinkIcon,
  TrendingUp,
  LifeBuoy,
  FileCheck,
  ArrowUpRight,
  Wifi
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/industries', label: 'Industries' },
    { href: '/portfolio', label: 'Work' },
    { href: '/careers', label: 'Careers' },
];

const itServiceCategories = [
    {
        title: "Product & Development",
        services: [
            { href: '/crm-product-development', title: 'CRM Product Development', description: 'Custom customer relationship platforms.', icon: Briefcase },
            { href: '/erp-development', title: 'ERP Development', description: 'Enterprise resource planning systems.', icon: Settings },
            { href: '/custom-development', title: 'Custom Software Development', description: 'Bespoke enterprise software solutions.', icon: CodeXml },
            { href: '/website-development', title: 'Website Development', description: 'High-performance Next.js websites.', icon: Globe },
            { href: '/e-commerce-development', title: 'E-Commerce Development', description: 'Scalable online retail platforms.', icon: ShoppingCart },
            { href: '/mobile-app-development', title: 'Mobile App Development', description: 'Native & cross-platform applications.', icon: Smartphone },
            { href: '/saas-product-development', title: 'SaaS Product Development', description: 'Cloud-native multi-tenant apps.', icon: Cloud },
            { href: '/services/api-development-integration', title: 'API & Integration', description: 'Seamless system connectivity.', icon: LinkIcon },
        ]
    },
    {
        title: "AI & Automation",
        services: [
            { href: '/ai-automation-services', title: 'AI Automation Services', description: 'Intelligent business workflows.', icon: BrainCircuit },
            { href: '/services/ai-chatbot-development', title: 'AI Chatbots', description: '24/7 automated customer support.', icon: Zap },
            { href: '/services/generative-ai-solutions', title: 'Generative AI Solutions', description: 'Custom LLM and content solutions.', icon: Bot },
            { href: '/technology-and-ai-consulting', title: 'AI Consulting', description: 'Strategic AI adoption roadmaps.', icon: LayoutGrid },
        ]
    },
    {
        title: "Design & Creative",
        services: [
            { href: '/ui-ux-design', title: 'UI/UX Design', description: 'User-centric digital experiences.', icon: Palette },
            { href: '/logo-and-branding', title: 'Logo & Branding', description: 'Iconic brand identity design.', icon: PenTool },
            { href: '/services/graphic-design-services', title: 'Graphic Design', description: 'Professional visual communication.', icon: LayoutGrid },
            { href: '/services/corporate-identity-design', title: 'Corporate Identity', description: 'Full-scale brand systems.', icon: Briefcase },
        ]
    },
    {
        title: "Digital Growth",
        services: [
            { href: '/digital-marketing', title: 'Digital Marketing', description: 'Data-driven growth strategies.', icon: BarChart3 },
            { href: '/services/seo-services', title: 'SEO Services', description: 'Dominate search engine rankings.', icon: Globe },
            { href: '/political-campaign-services', title: 'Political Campaigns', description: 'Digital outreach for leadership.', icon: Terminal },
            { href: '/services/performance-marketing', title: 'Performance Marketing', description: 'ROI-driven ad management.', icon: TrendingUp },
        ]
    },
    {
        title: "Enterprise IT Solutions",
        services: [
            { href: '/services/managed-it-services', title: 'Managed IT Services', description: 'Proactive 24/7 technical support.', icon: Headset },
            { href: '/professional-consulting-services', title: 'Professional Consulting', description: 'Expert technical infrastructure planning.', icon: Settings },
            { href: '/hr-training', title: 'HR Training with AI', description: 'Upskilling modern workforces.', icon: GraduationCap },
            { href: '/services/it-support-services', title: 'IT Support Services', description: 'On-demand technical assistance.', icon: LifeBuoy },
        ]
    },
    {
        title: "Security Solutions",
        services: [
            { href: '/services/advanced-security-solutions', title: 'Advanced Security', description: 'Enterprise-grade cyber protection.', icon: ShieldCheck },
            { href: '/services/network-security-solutions', title: 'Network Security', description: 'Hardening your digital perimeter.', icon: Lock },
            { href: '/services/cyber-security-consulting', title: 'Security Consulting', description: 'Audit, compliance, and strategy.', icon: ShieldCheck },
            { href: '/services/security-audit-compliance', title: 'Audit & Compliance', description: 'Regulatory security certifications.', icon: FileCheck },
        ]
    },
    {
        title: "Cloud & Datacentre",
        services: [
            { href: '/services/cloud-datacentre-consulting', title: 'Cloud Consulting', description: 'Migration and optimization strategy.', icon: Cloud },
            { href: '/services/software-defined-datacentre', title: 'Software Defined DC', description: 'Efficient infrastructure management.', icon: Server },
            { href: '/services/disaster-recovery-business-continuity', title: 'Business Continuity & DR', description: 'Ensuring 100% uptime.', icon: Zap },
            { href: '/services/cloud-migration-services', title: 'Cloud Migration', description: 'Safe cloud transition expertise.', icon: ArrowUpRight },
        ]
    },
    {
        title: "Infrastructure Solutions",
        services: [
            { href: '/services/end-user-computing', title: 'End User Computing', description: 'Modern workspace solutions.', icon: Cpu },
            { href: '/services/cctv-surveillance-solutions', title: 'CCTV & Surveillance', description: 'Smart perimeter monitoring.', icon: LayoutGrid },
            { href: '/services/campus-wide-networking-solutions', title: 'Campus Networking', description: 'High-speed campus connectivity.', icon: Network },
            { href: '/services/campus-wide-wifi-solutions', title: 'Campus WiFi Solutions', description: 'Ubiquitous enterprise wireless.', icon: Wifi },
        ]
    }
];

const constructionCategories = [
    {
        title: "Infra-Vision Projects",
        services: [
            { href: 'https://infra-vision.itlcindia.com/', title: 'Civil Construction', description: 'Major infrastructure and structural work.', icon: HardHat },
            { href: 'https://infra-vision.itlcindia.com/', title: 'Residential Projects', description: 'Bespoke homes and residential complexes.', icon: Home },
            { href: 'https://infra-vision.itlcindia.com/', title: 'Commercial Projects', description: 'Premium office and retail spaces.', icon: Building2 },
            { href: 'https://infra-vision.itlcindia.com/', title: 'Turnkey Solutions', description: 'Concept to completion management.', icon: Key },
        ]
    }
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'IT' | 'Construction' | null>(null);
  const [navigationValue, setNavigationValue] = useState<string>("");

  const isSolid = isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (navigationValue || activeCategory || isMobileMenuOpen) {
        setNavigationValue("");
        setActiveCategory(null);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationValue, activeCategory, isMobileMenuOpen]);

  useEffect(() => {
    if (navigationValue === "") {
      setActiveCategory(null);
    }
  }, [navigationValue]);

  const closeMenu = () => {
    setActiveCategory(null);
    setNavigationValue("");
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
      isSolid 
        ? "bg-white/80 backdrop-blur-lg shadow-md h-24" 
        : "bg-transparent h-40"
    )}>
      <div className="container flex h-full max-w-screen-xl mx-auto items-center px-6">
        {/* Left Section: Logo */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Logo className={cn("transition-all duration-300", !isSolid && "brightness-0 invert")} />
          </Link>
        </div>
        
        {/* Center Section: Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-[2] space-x-1">
            <Link 
                href="/"
                onClick={closeMenu}
                prefetch={true}
                className={cn(
                    "text-sm font-bold transition-all duration-300 whitespace-nowrap px-4 py-2 nav-underline relative z-20 cursor-pointer",
                    isSolid ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                )}
            >
                Home
            </Link>

            <NavigationMenu 
              value={navigationValue} 
              onValueChange={setNavigationValue} 
              className="max-w-none"
            >
                <NavigationMenuList>

                    <NavigationMenuItem value="services">
                        <NavigationMenuTrigger className={cn(
                            "bg-transparent transition-all duration-300 font-bold text-sm nav-underline",
                            isSolid ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                        )}>
                            Services
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out data-[state=open]:slide-in-from-top-4 data-[state=closed]:slide-out-to-top-4 duration-300">
                            <div className="w-screen bg-white shadow-2xl border-y border-border/50 overflow-hidden h-[50vh] flex flex-col relative">
                                <div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.05]">
                                    <Image 
                                        src="/logo/lo.png" 
                                        alt="" 
                                        fill 
                                        className="object-center scale-150 grayscale"
                                    />
                                </div>

                                <ScrollArea className="w-full h-full">
                                    <div className="flex flex-col relative h-full">
                                        <AnimatePresence mode="wait">
                                            {!activeCategory ? (
                                                <motion.div 
                                                    key="default"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="grid grid-cols-2 h-full min-h-[400px]"
                                                >
                                                    <button 
                                                        onClick={() => setActiveCategory('IT')}
                                                        className="group relative flex flex-col items-center justify-center p-8 transition-all hover:bg-slate-50 border-r border-border/50 overflow-hidden"
                                                    >
                                                        <Image 
                                                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                                                            alt="IT Services Background" 
                                                            fill 
                                                            className="object-cover opacity-[0.8] group-hover:opacity-[0.9] transition-opacity duration-500"
                                                            data-ai-hint="circuit board"
                                                        />
                                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity" />
                                                        <div className="relative z-10 text-center space-y-4">
                                                            <div className="mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-2xl backdrop-blur-md border border-white/20">
                                                                <BrainCircuit className="w-10 h-10" />
                                                            </div>
                                                            <div>
                                                                <h3 className="text-xl font-black text-slate-900 mb-1 drop-shadow-sm tracking-tighter">IT & Digital Services</h3>
                                                                <p className="text-slate-800 font-bold max-w-[250px] mx-auto bg-white/40 p-2 rounded-lg backdrop-blur-md text-[10px]">Comprehensive enterprise software and IT solutions.</p>
                                                            </div>
                                                            <div className="inline-flex items-center text-primary font-black bg-white px-6 py-2.5 rounded-full shadow-lg border border-primary/20 text-xs">
                                                                Discover IT <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                            </div>
                                                        </div>
                                                    </button>

                                                    <button 
                                                        onClick={() => setActiveCategory('Construction')}
                                                        className="group relative flex flex-col items-center justify-center p-8 transition-all hover:bg-slate-50 overflow-hidden"
                                                    >
                                                        <Image 
                                                            src="/real/5.png" 
                                                            alt="Infra-Vision" 
                                                            fill 
                                                            className="object-cover opacity-[0.8] group-hover:opacity-[0.9] transition-opacity duration-500"
                                                        />
                                                        <div className="relative z-10 text-center space-y-4">
                                                            <div className="mx-auto w-20 h-20 rounded-2xl bg-slate-900/10 flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform shadow-2xl backdrop-blur-md border border-white/20">
                                                                <Building2 className="w-10 h-10" />
                                                            </div>
                                                            <div>
                                                                <h3 className="text-xl font-black bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent mb-1 drop-shadow-sm tracking-tighter">Infra-Vision</h3>
                                                                <p className="text-slate-800 font-bold max-w-[250px] mx-auto bg-white/40 p-2 rounded-lg backdrop-blur-md text-[10px]">Building strong foundations with turnkey project execution.</p>
                                                            </div>
                                                            <div className="inline-flex items-center text-slate-900 font-black bg-white px-6 py-2.5 rounded-full shadow-lg border border-slate-900/20 hover:text-primary transition-all duration-300 text-xs">
                                                                Explore Infra-Vision <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                            </div>
                                                        </div>
                                                    </button>
                                                </motion.div>
                                            ) : activeCategory === 'IT' ? (
                                                <motion.div 
                                                    key="it-details"
                                                    initial={{ opacity: 0, x: 50 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -50 }}
                                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                                    className="p-8 w-full relative h-full flex flex-col"
                                                >
                                                    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                                                        <Image 
                                                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                                                            alt="" 
                                                            fill 
                                                            className="object-cover opacity-[0.03]" 
                                                            data-ai-hint="tech world"
                                                        />
                                                    </div>

                                                    <div className="container max-w-screen-xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-border/50">
                                                        <button 
                                                            onClick={() => setActiveCategory(null)}
                                                            className="flex items-center gap-2 text-slate-500 hover:text-primary transition-all font-black group text-xs"
                                                        >
                                                            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back
                                                        </button>
                                                        <div className="text-right">
                                                            <h2 className="text-xl font-black text-slate-900 tracking-tight">IT & Digital Solutions</h2>
                                                            <p className="text-[9px] text-primary uppercase font-black tracking-[0.2em]">Engineering Excellence Since 2015</p>
                                                        </div>
                                                    </div>

                                                    <div className="container max-w-screen-xl mx-auto grid grid-cols-4 gap-x-8 gap-y-6">
                                                        {itServiceCategories.map((col) => (
                                                            <div key={col.title} className="space-y-3">
                                                                <h4 className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-2 border-b border-primary/10 pb-1">
                                                                    {col.title}
                                                                </h4>
                                                                <div className="space-y-2">
                                                                    {col.services.map((s) => (
                                                                        <NavigationMenuLink key={s.title} asChild>
                                                                            <Link 
                                                                                href={s.href}
                                                                                onClick={closeMenu}
                                                                                className="group flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
                                                                            >
                                                                                <div className="flex-shrink-0 p-1.5 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                                                    <s.icon className="h-4 w-4" />
                                                                                </div>
                                                                                <div className="space-y-0.5">
                                                                                    <div className="text-[11px] font-black text-slate-900 group-hover:text-primary transition-colors leading-tight">{s.title}</div>
                                                                                    <p className="text-[9px] text-slate-500 leading-tight line-clamp-1">{s.description}</p>
                                                                                </div>
                                                                            </Link>
                                                                        </NavigationMenuLink>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            ) : (
                                                <motion.div 
                                                    key="con-details"
                                                    initial={{ opacity: 0, x: -50 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 50 }}
                                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                                    className="p-8 w-full h-full flex flex-col"
                                                >
                                                    <div className="container max-w-screen-xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-border/50">
                                                        <button 
                                                            onClick={() => setActiveCategory(null)}
                                                            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-all font-black group text-xs"
                                                        >
                                                            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back
                                                        </button>
                                                        <div className="text-right">
                                                            <h2 className="text-xl font-black text-slate-900 tracking-tight">Infra-Vision & Infrastructure</h2>
                                                            <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em]">Building Tomorrow's Foundations</p>
                                                        </div>
                                                    </div>

                                                    <div className="container max-w-screen-xl mx-auto grid lg:grid-cols-12 gap-8 flex-1">
                                                        <div className="lg:col-span-8 grid grid-cols-2 gap-4">
                                                            {constructionCategories[0].services.map((s) => (
                                                                <NavigationMenuLink key={s.title} asChild>
                                                                    <Link 
                                                                        href={s.href}
                                                                        target="_blank"
                                                                        onClick={closeMenu}
                                                                        className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-border hover:bg-slate-50 transition-all duration-300"
                                                                    >
                                                                        <div className="flex-shrink-0 p-2 rounded-lg bg-slate-900/5 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                                                            <s.icon className="h-5 w-5" />
                                                                        </div>
                                                                        <div className="space-y-0.5">
                                                                            <div className="text-[11px] font-black text-slate-900 leading-tight">{s.title}</div>
                                                                            <p className="text-[9px] text-slate-500 leading-relaxed line-clamp-2">{s.description}</p>
                                                                        </div>
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            ))}
                                                        </div>
                                                        <div className="lg:col-span-4">
                                                            <NavigationMenuLink asChild>
                                                                <Link 
                                                                    href="https://infra-vision.itlcindia.com/" 
                                                                    target="_blank" 
                                                                    onClick={closeMenu}
                                                                    className="group relative block h-full min-h-[200px] overflow-hidden rounded-2xl bg-slate-900 transition-all duration-300 shadow-2xl"
                                                                >
                                                                    <Image 
                                                                        src="/real/1.png" 
                                                                        alt="Infra-Vision Portal" 
                                                                        fill 
                                                                        className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                                                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                                                        <h3 className="text-xl font-black text-white mb-1 tracking-tight">Infra-Vision Portal</h3>
                                                                        <p className="text-[10px] text-white/80 mb-4 line-clamp-2 leading-relaxed">Manage and track your construction projects in real-time with our advanced digital portal.</p>
                                                                        <Button className="w-fit h-10 rounded-full bg-white text-slate-900 font-black hover:bg-primary hover:text-white transition-all duration-300 px-6 text-xs">
                                                                            Access Portal <ExternalLink className="ml-2 w-3 h-3" />
                                                                        </Button>
                                                                    </div>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </ScrollArea>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {navLinks.map((link) => (
                <Link 
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    prefetch={true}
                    className={cn(
                        "text-sm font-bold transition-all duration-300 whitespace-nowrap px-4 py-2 nav-underline relative z-20 cursor-pointer",
                        isSolid ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                    )}
                >
                    {link.label}
                </Link>
            ))}
        </nav>

        <div className="flex-1 flex items-center justify-end">
            <Button asChild className={cn(
                "rounded-full px-6 font-bold shadow-lg transition-all duration-300 hidden md:flex",
                isSolid ? "bg-primary text-white" : "bg-white text-primary hover:bg-white/90"
            )}>
                <Link href="/contact" onClick={closeMenu}>Get Started</Link>
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className={cn("md:hidden ml-4 transition-all duration-300", isSolid ? "text-foreground" : "text-white")}>
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full p-0 border-none transition-all duration-300">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <SheetDescription className="sr-only">Site Navigation</SheetDescription>
                    <div className="flex flex-col h-full p-6 bg-white">
                        <div className="flex items-center justify-between mb-8">
                            <Logo />
                        </div>
                        <ScrollArea className="flex-1">
                            <div className="space-y-4">
                                <Link href="/" onClick={closeMenu} className="block text-lg font-bold nav-underline w-fit">Home</Link>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="it-services" className="border-none">
                                        <AccordionTrigger className="py-4 text-lg font-bold hover:no-underline">IT Services</AccordionTrigger>
                                        <AccordionContent className="space-y-4 pl-4">
                                            {itServiceCategories.map((cat) => (
                                                <div key={cat.title} className="space-y-2">
                                                    <div className="text-sm font-bold text-slate-900">{cat.title}</div>
                                                    <div className="pl-4 space-y-2 border-l border-slate-100">
                                                        {cat.services.map((s) => (
                                                            <Link key={s.title} href={s.href} onClick={closeMenu} className="block text-sm text-slate-500 hover:text-primary transition-colors duration-300">{s.title}</Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="con-services" className="border-none">
                                        <AccordionTrigger className="py-4 text-lg font-bold hover:no-underline">Infra-Vision</AccordionTrigger>
                                        <AccordionContent className="space-y-4 pl-4">
                                            {constructionCategories[0].services.map((s) => (
                                                <Link key={s.title} href={s.href} target="_blank" onClick={closeMenu} className="block text-sm text-slate-500 hover:text-primary transition-colors duration-300">{s.title}</Link>
                                            ))}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                {navLinks.map((link) => (
                                    <Link key={link.href} href={link.href} onClick={closeMenu} className="block text-lg font-bold nav-underline w-fit">{link.label}</Link>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="pt-6 border-t border-border/50">
                            <Button asChild className="w-full rounded-full bg-primary py-6 text-lg font-bold transition-all duration-300">
                                <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
