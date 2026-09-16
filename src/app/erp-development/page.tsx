import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Settings, LayoutGrid, BarChart3, Database, Shield, ArrowRight, Clock, Rocket, Smile, Building2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ERP Development Services | ITLC INDIA PVT LTD',
  description: 'Enterprise Resource Planning (ERP) solutions for manufacturing, retail, and services. Custom ERP development by ITLC INDIA PVT LTD.',
}

const erpModules = [
    {
        icon: <BarChart3 className="h-8 w-8 text-primary" />,
        title: "Finance & Accounting",
        description: "Automated billing, invoicing, and real-time financial reporting.",
    },
    {
        icon: <LayoutGrid className="h-8 w-8 text-primary" />,
        title: "Inventory & Supply Chain",
        description: "Manage stocks, warehouses, and procurement workflows seamlessly.",
    },
    {
        icon: <Building2 className="h-8 w-8 text-primary" />,
        title: "Human Resources (HRM)",
        description: "Payroll, attendance, and employee performance management.",
    },
    {
        icon: <Settings className="h-8 w-8 text-primary" />,
        title: "Manufacturing (MRP)",
        description: "Production planning, quality control, and shop floor management.",
    },
];

export default function ErpDevelopmentPage() {
  return (
    <>
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4">
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white leading-tight">
            Custom ERP Solutions <br /> <span className="text-primary">Unify Your Enterprise</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-base text-white/80 md:text-lg">
            Streamline every department, from finance to manufacturing, with a single, secure source of truth tailored to your industry.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold shadow-2xl">
              <Link href="/contact">Request ERP Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white font-bold">
              <Link href="/portfolio">Our Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">Integrated ERP Modules</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Modules that communicate with each other to eliminate data silos.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {erpModules.map((module) => (
              <Card key={module.title} className="flex flex-col border-border/50 shadow-sm hover:shadow-xl transition-all">
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 bg-primary/10 rounded-2xl mb-4 border border-primary/20 w-fit">
                    {module.icon}
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground text-sm">
                  {module.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">ERP Built for Scale</h2>
                    <p className="text-muted-foreground">Our ERP systems are designed to grow with your business. Whether you are managing 10 employees or 10,000, our architecture ensures high performance and security.</p>
                    <ul className="space-y-3">
                        {["Cloud-native or On-premise", "Real-time Data Sync", "Mobile Accessibility", "Advanced Security Protocols"].map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <Button asChild size="lg" className="rounded-full h-12 px-8">
                        <Link href="/contact">Talk to our Architects</Link>
                    </Button>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" 
                        alt="ERP Analytics" 
                        width={600} 
                        height={400} 
                        className="object-cover"
                        data-ai-hint="data analytics dashboard"
                    />
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';
