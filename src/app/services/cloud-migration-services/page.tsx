import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Cloud, 
  RefreshCcw, 
  Database, 
  Server, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Search,
  LayoutGrid, 
  Code,
  TrendingUp,
  Globe
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Cloud Migration Services Company | ITLC India',
  description: 'Seamlessly migrate applications, databases, servers, and workloads to the cloud with ITLC India\'s secure and scalable cloud migration services.',
};

const migrationServices = [
  { title: "Cloud Readiness Assessment", icon: <Search className="h-6 w-6" /> },
  { title: "Application Migration", icon: <Code className="h-6 w-6" /> },
  { title: "Database Migration", icon: <Database className="h-6 w-6" /> },
  { title: "Server Migration", icon: <Server className="h-6 w-6" /> },
  { title: "Data Migration", icon: <LayoutGrid className="h-6 w-6" /> },
  { title: "Hybrid Cloud Migration", icon: <Cloud className="h-6 w-6" /> },
  { title: "Multi-Cloud Migration", icon: <Globe className="h-6 w-6" /> },
  { title: "Cloud Security Configuration", icon: <ShieldCheck className="h-6 w-6" /> },
  { title: "Performance Optimization", icon: <TrendingUp className="h-6 w-6" /> },
  { title: "Post-Migration Support", icon: <Settings className="h-6 w-6" /> },
];

function Settings(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

const faqs = [
  {
    q: "How long does a cloud migration project take?",
    a: "The timeline depends on infrastructure complexity, applications, and business requirements. Enterprise migrations can take several months."
  }
];

export default function CloudMigrationServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Digital Transformation Accelerator"
        title={<>Move to the Cloud with <br /> <span className="text-primary">Confidence & Zero Disruption</span></>}
        description="Accelerate your digital transformation with expert cloud migration services that ensure security, performance, and business continuity."
        primaryCta={{ text: "Get Free Assessment", href: "/contact" }}
        secondaryCta={{ text: "Talk to Cloud Expert", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
           <div className="relative bg-slate-50 rounded-[40px] border border-slate-100 p-8 shadow-2xl flex flex-col items-center text-center space-y-6">
              <div className="p-6 bg-white rounded-full shadow-lg">
                  <RefreshCcw className="h-24 w-24 text-primary animate-spin-slow" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Zero-Downtime Migration</h3>
          </div>
        }
      />

      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">End-to-End Cloud Migration Solutions</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {migrationServices.map((item, i) => (
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
            <h2 className="text-3xl font-bold">Cloud Migration FAQs</h2>
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
