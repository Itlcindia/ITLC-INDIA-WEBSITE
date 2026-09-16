import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Server, 
  Database, 
  Network, 
  Cpu, 
  Zap, 
  LayoutGrid, 
  Box,
  Activity,
  Cloud
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';

export const metadata: Metadata = {
  title: 'Software Defined Datacentre Solutions Company | ITLC India',
  description: 'Transform your traditional infrastructure into a modern Software Defined Datacentre with virtualization, automation, and centralized management.',
};

const sddcCapabilities = [
  { title: "Compute Virtualization", icon: <Cpu className="h-8 w-8 text-primary" /> },
  { title: "Storage Virtualization", icon: <Database className="h-8 w-8 text-primary" /> },
  { title: "Network Virtualization", icon: <Network className="h-8 w-8 text-primary" /> },
  { title: "Infrastructure Automation", icon: <Zap className="h-8 w-8 text-primary" /> },
  { title: "Centralized Resource Management", icon: <LayoutGrid className="h-8 w-8 text-primary" /> },
  { title: "Hyper-Converged Infrastructure", icon: <Box className="h-8 w-8 text-primary" /> },
  { title: "Private Cloud Deployment", icon: <Cloud className="h-8 w-8 text-primary" /> },
  { title: "Intelligent Workload Management", icon: <Activity className="h-8 w-8 text-primary" /> },
];

const faqs = [
  {
    q: "What is a Software Defined Datacentre?",
    a: "A Software Defined Datacentre (SDDC) is an infrastructure model where computing, networking, storage, and security resources are virtualized and managed through software."
  },
  {
    q: "How does SDDC improve operational efficiency?",
    a: "By automating infrastructure management, reducing manual processes, and optimizing resource allocation."
  }
];

export default function SoftwareDefinedDatacentrePage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Software Defined Datacentre"
        title={<>Intelligent Infrastructure Built for <br /> <span className="text-primary">Modern Enterprises</span></>}
        description="Modernize your IT infrastructure with Software Defined Datacentre solutions that combine virtualization, automation, scalability, and centralized management."
        primaryCta={{ text: "Get Free Consultation", href: "/contact" }}
        secondaryCta={{ text: "Schedule Assessment", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative bg-slate-900 rounded-[40px] overflow-hidden aspect-square flex items-center justify-center p-12 text-center shadow-2xl">
              <div className="relative space-y-6">
                  <Server className="h-32 w-32 text-primary mx-auto opacity-80" />
                  <h3 className="text-xl font-bold text-white">SDDC Intelligence</h3>
              </div>
          </div>
        }
      />

      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Transform Your Datacentre</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Strategically engineered SDDC layers to drive enterprise operational excellence.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sddcCapabilities.map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all text-center space-y-4">
                <div className="mx-auto p-4 bg-white rounded-2xl w-fit shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg tracking-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">SDDC FAQs</h2>
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
