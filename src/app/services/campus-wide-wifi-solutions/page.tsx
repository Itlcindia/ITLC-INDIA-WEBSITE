import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Wifi, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Layout,
  Radio,
  Globe,
  Lock,
  Signal
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';

export const metadata: Metadata = {
  title: 'Campus Wide WiFi Solutions Company | ITLC India',
  description: 'Deploy secure, high-speed, and scalable campus-wide WiFi solutions for institutions, offices, and smart campuses.',
};

const wifiServices = [
  { title: "Campus WiFi Design & Planning", icon: <Layout className="h-6 w-6" /> },
  { title: "Enterprise Access Point Deployment", icon: <Radio className="h-6 w-6" /> },
  { title: "Indoor & Outdoor WiFi Solutions", icon: <Globe className="h-6 w-6" /> },
  { title: "Secure Authentication Systems", icon: <Lock className="h-6 w-6" /> },
  { title: "High-Density User Deployments", icon: <Signal className="h-6 w-6" /> },
  { title: "Managed WiFi Services", icon: <Activity className="h-6 w-6" /> },
];

const faqs = [
  {
    q: "Can the network support thousands of users simultaneously?",
    a: "Yes. Our enterprise WiFi solutions are specifically designed for high-density environments, supporting thousands of concurrent users."
  }
];

export default function CampusWifiSolutionsPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Ubiquitous Wireless Excellence"
        title={<>Seamless Wireless Connectivity <br /> <span className="text-primary">Across Your Entire Campus</span></>}
        description="Deliver uninterrupted, high-speed wireless access across campuses and offices. We design enterprise WiFi that ensures reliability and security."
        primaryCta={{ text: "Request WiFi Assessment", href: "/contact" }}
        secondaryCta={{ text: "Talk to WiFi Expert", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative bg-slate-50 rounded-[40px] border border-slate-100 p-8 shadow-2xl flex flex-col items-center text-center space-y-6">
              <div className="p-6 bg-white rounded-full shadow-lg">
                  <Signal className="h-24 w-24 text-primary animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Smart Wireless</h3>
          </div>
        }
      />

      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Enterprise Wireless Networking Solutions</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {wifiServices.map((item, i) => (
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
            <h2 className="text-3xl font-bold text-slate-900">WiFi Solutions FAQs</h2>
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
