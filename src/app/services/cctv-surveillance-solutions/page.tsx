import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Cctv, 
  Eye, 
  Video, 
  Zap, 
  Monitor,
  Lock,
  Smartphone,
  Building2,
  Activity
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';

export const metadata: Metadata = {
  title: 'CCTV & Surveillance Solutions Company | ITLC India',
  description: 'Protect your business, facilities, employees, and assets with advanced CCTV and surveillance solutions. End-to-end security camera systems and intelligent monitoring.',
};

const surveillanceServices = [
  { title: "IP CCTV Camera Systems", icon: <Cctv className="h-6 w-6" /> },
  { title: "HD Surveillance Cameras", icon: <Video className="h-6 w-6" /> },
  { title: "Video Management (VMS)", icon: <Activity className="h-6 w-6" /> },
  { title: "Network Recorders (NVR)", icon: <Monitor className="h-6 w-6" /> },
  { title: "Access Control Integration", icon: <Lock className="h-6 w-6" /> },
  { title: "AI-Based Video Analytics", icon: <Zap className="h-6 w-6" /> },
  { title: "Remote Monitoring", icon: <Smartphone className="h-6 w-6" /> },
  { title: "Centralized Surveillance", icon: <Building2 className="h-6 w-6" /> },
];

const faqs = [
  {
    q: "What types of CCTV systems do you provide?",
    a: "We provide IP cameras, PTZ cameras, HD cameras, DVR/NVR-based systems, and AI-powered surveillance solutions."
  }
];

export default function CctvSurveillanceSolutionsPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Intelligent Perimeter Security"
        title={<>Smart Surveillance for <br /> <span className="text-primary">Safer & More Secure Operations</span></>}
        description="Enhance security, improve monitoring, and protect critical assets with enterprise-grade CCTV and surveillance systems."
        primaryCta={{ text: "Get Free Site Survey", href: "/contact" }}
        secondaryCta={{ text: "Request Security Consultation", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative bg-slate-50 rounded-[40px] border border-slate-100 p-8 shadow-2xl flex flex-col items-center text-center space-y-6">
              <div className="p-6 bg-white rounded-full shadow-lg">
                  <Cctv className="h-24 w-24 text-primary animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">AI Surveillance</h3>
          </div>
        }
      />

      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Comprehensive CCTV & Security Solutions</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {surveillanceServices.map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all text-center space-y-4">
                <div className="mx-auto p-3 bg-white rounded-xl w-fit shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm tracking-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Surveillance FAQs</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-bold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
