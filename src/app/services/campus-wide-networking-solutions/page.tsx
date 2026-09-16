import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Network, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Globe,
  Settings,
  Layers,
  Cpu
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';

export const metadata: Metadata = {
  title: 'Campus Wide Networking Solutions Company | ITLC India',
  description: 'Design, deploy, and manage secure high-performance campus-wide networking solutions for institutions and industrial facilities.',
};

const networkingServices = [
  { title: "LAN Network Design & Deployment", icon: <Network className="h-6 w-6" /> },
  { title: "Fiber Optic Infrastructure", icon: <Zap className="h-6 w-6" /> },
  { title: "Structured Cabling Solutions", icon: <Layers className="h-6 w-6" /> },
  { title: "Core & Distribution Switching", icon: <Cpu className="h-6 w-6" /> },
  { title: "Router Configuration", icon: <Settings className="h-6 w-6" /> },
  { title: "Network Security Integration", icon: <ShieldCheck className="h-6 w-6" /> },
  { title: "Smart Campus Connectivity", icon: <Globe className="h-6 w-6" /> },
  { title: "Network Management", icon: <Activity className="h-6 w-6" /> },
];

const faqs = [
  {
    q: "What is a Campus Wide Network?",
    a: "A campus-wide network connects multiple buildings, departments, users, and devices within a single organization through a centralized networking infrastructure."
  }
];

export default function CampusNetworkingPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Next-Generation Connectivity"
        title={<>Build a High-Speed, <br /> <span className="text-primary">Secure & Scalable Campus</span></>}
        description="Connect people, devices, and buildings through reliable campus-wide networking solutions that support seamless communication."
        primaryCta={{ text: "Request Network Assessment", href: "/contact" }}
        secondaryCta={{ text: "Talk to Networking Expert", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative bg-slate-50 rounded-[40px] border border-slate-100 p-8 shadow-2xl flex flex-col items-center text-center space-y-6">
              <div className="p-6 bg-white rounded-full shadow-lg">
                  <Network className="h-24 w-24 text-primary animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Campus Infrastructure</h3>
          </div>
        }
      />

      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Comprehensive Campus Networking Services</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {networkingServices.map((item, i) => (
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
            <h2 className="text-3xl font-bold text-slate-900">Networking FAQs</h2>
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
