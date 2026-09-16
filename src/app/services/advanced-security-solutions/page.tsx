import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  ShieldCheck, 
  Eye, 
  Lock, 
  Activity, 
  Zap, 
  CheckCircle2, 
  Radar,
  ShieldAlert,
  Fingerprint,
  Globe
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';

export const metadata: Metadata = {
  title: 'Advanced Security Solutions Company | ITLC India',
  description: 'Enterprise advanced security solutions including threat protection, endpoint security, identity management, SIEM, Zero Trust security, and compliance support.',
};

const securityServices = [
  { title: "Security Architecture Design", icon: <ShieldCheck className="h-6 w-6" /> },
  { title: "Endpoint Protection", icon: <Lock className="h-6 w-6" /> },
  { title: "Threat Intelligence", icon: <Radar className="h-6 w-6" /> },
  { title: "Security Monitoring", icon: <Eye className="h-6 w-6" /> },
  { title: "Email Security Solutions", icon: <Activity className="h-6 w-6" /> },
  { title: "Identity & Access (IAM)", icon: <Fingerprint className="h-6 w-6" /> },
  { title: "Data Loss Prevention (DLP)", icon: <Globe className="h-6 w-6" /> },
  { title: "Zero Trust Security", icon: <ShieldAlert className="h-6 w-6" /> },
  { title: "SIEM Solutions", icon: <Activity className="h-6 w-6" /> },
  { title: "Cloud Security Solutions", icon: <Zap className="h-6 w-6" /> },
];

const faqs = [
  {
    q: "What is Zero Trust Security?",
    a: "Zero Trust is a security model that requires strict identity verification for every person and device trying to access resources on a private network, regardless of whether they are sitting inside or outside of the network perimeter."
  },
  {
    q: "Do you provide 24/7 security monitoring?",
    a: "Yes, we implement continuous monitoring and threat detection services through our Security Operations Center (SOC) to identify and respond to potential threats in real-time."
  }
];

export default function AdvancedSecuritySolutionsPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Enterprise Digital Defense"
        title={<>Enterprise-Grade Security for a <br /> <span className="text-primary">Safer Digital Future</span></>}
        description="Protect your business, users, applications, and infrastructure with advanced security solutions designed to defend against modern cyber threats."
        primaryCta={{ text: "Get Security Assessment", href: "/contact" }}
        secondaryCta={{ text: "Talk to Security Expert", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative bg-slate-50 rounded-[40px] border border-slate-100 p-8 shadow-2xl flex flex-col items-center text-center space-y-6">
              <div className="p-6 bg-white rounded-full shadow-lg">
                  <Radar className="h-24 w-24 text-primary animate-spin-slow" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Security Operations Center</h3>
              <p className="text-slate-500 max-w-xs mx-auto text-sm leading-relaxed">Our 24/7 SOC provides real-time threat intelligence and rapid incident response.</p>
          </div>
        }
      />

      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Comprehensive Security Protection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Strategically engineered defense layers to protect every asset in your digital estate.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {securityServices.map((item, i) => (
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
            <h2 className="text-3xl font-bold">Advanced Security FAQs</h2>
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

      <section className="py-24 bg-slate-950 text-white text-center">
        <div className="container max-w-screen-xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Strengthen Your Security Today</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Partner with ITLC India to implement enterprise-grade security solutions that protect your infrastructure.</p>
          <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
            <Link href="/contact">Schedule Security Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
