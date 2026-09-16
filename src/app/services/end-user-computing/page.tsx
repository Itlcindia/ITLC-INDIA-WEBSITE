import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Cpu, 
  Monitor, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  Layout, 
  Users, 
  CheckCircle2, 
  Sparkles,
  Settings,
  LifeBuoy,
  Globe,
  Code
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';

export const metadata: Metadata = {
  title: 'End User Computing Solutions Company | ITLC India',
  description: 'Empower your workforce with secure, scalable, and modern End User Computing solutions including desktops, laptops, virtual workspaces, and device management.',
};

const eucServices = [
  { title: "Desktop & Laptop Management", icon: <Monitor className="h-6 w-6" /> },
  { title: "Virtual Desktop Infrastructure (VDI)", icon: <Layout className="h-6 w-6" /> },
  { title: "Device Lifecycle Management", icon: <Settings className="h-6 w-6" /> },
  { title: "Endpoint Security Solutions", icon: <ShieldCheck className="h-6 w-6" /> },
  { title: "Mobile Device Management (MDM)", icon: <Smartphone className="h-6 w-6" /> },
  { title: "Digital Workplace Solutions", icon: <Globe className="h-6 w-6" /> },
  { title: "Remote Workforce Enablement", icon: <Users className="h-6 w-6" /> },
  { title: "Application Delivery", icon: <Zap className="h-6 w-6" /> },
  { title: "Software Deployment", icon: <Code className="h-6 w-6" /> },
  { title: "User Support & Helpdesk", icon: <LifeBuoy className="h-6 w-6" /> },
];

const faqs = [
  {
    q: "What is End User Computing (EUC)?",
    a: "End User Computing refers to technologies and services that enable employees to securely access applications, devices, and data from anywhere."
  }
];

export default function EndUserComputingPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Modern Digital Workspace"
        title={<>Empower Your Workforce with <br /> <span className="text-primary">Secure & Modern Workspaces</span></>}
        description="Deliver seamless user experiences with End User Computing (EUC) solutions designed to improve productivity, security, and device management."
        primaryCta={{ text: "Get Free Consultation", href: "/contact" }}
        secondaryCta={{ text: "Talk to Workplace Expert", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative bg-slate-50 rounded-[40px] border border-slate-100 p-8 shadow-2xl flex flex-col items-center text-center space-y-6">
              <div className="p-6 bg-white rounded-full shadow-lg">
                  <Cpu className="h-24 w-24 text-primary animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Digital Workspace</h3>
          </div>
        }
      />

      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Comprehensive Workforce Technology Solutions</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {eucServices.map((item, i) => (
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
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
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
