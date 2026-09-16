import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  ShieldAlert, 
  RefreshCw, 
  Database, 
  CloudDownload, 
  Zap, 
  Activity, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Server,
  Lock,
  Search,
  Layout,
  Layers,
  Settings,
  HeartPulse,
  GraduationCap,
  Landmark,
  Factory,
  ShoppingCart,
  Package,
  Code
} from 'lucide-react';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Disaster Recovery & Business Continuity Services | ITLC India',
  description: 'Protect your business from downtime, cyber threats, system failures, and disasters with comprehensive Disaster Recovery and Business Continuity solutions from ITLC India.',
  keywords: 'Disaster Recovery, Business Continuity, Data Backup, Cloud Replication, Failover Infrastructure, ITLC India Recovery',
  openGraph: {
    title: 'Disaster Recovery & Business Continuity Services | ITLC India',
    description: 'Keep your business running no matter what happens. Enterprise-grade resilience solutions.',
    url: 'https://itlcindia.com/services/disaster-recovery-business-continuity',
    type: 'website',
  },
};

const recoveryServices = [
  { title: "Disaster Recovery Planning", icon: <ShieldAlert className="h-6 w-6" /> },
  { title: "Business Continuity Strategy", icon: <RefreshCw className="h-6 w-6" /> },
  { title: "Data Backup Solutions", icon: <Database className="h-6 w-6" /> },
  { title: "Cloud Backup & Replication", icon: <CloudDownload className="h-6 w-6" /> },
  { title: "Failover Infrastructure", icon: <Zap className="h-6 w-6" /> },
  { title: "Recovery Testing & Validation", icon: <Activity className="h-6 w-6" /> },
  { title: "High Availability Solutions", icon: <CheckCircle2 className="h-6 w-6" /> },
  { title: "Data Centre Redundancy", icon: <Server className="h-6 w-6" /> },
  { title: "Cyber Recovery Planning", icon: <Lock className="h-6 w-6" /> },
  { title: "Risk Assessment", icon: <Search className="h-6 w-6" /> },
];

const recoveryMethodology = [
  { step: "01", title: "Business Impact Analysis", desc: "Identifying and evaluating the potential effects of an interruption to critical business operations." },
  { step: "02", title: "Risk Assessment", desc: "Analyzing potential threats and vulnerabilities to determine the likelihood and impact of various disaster scenarios." },
  { step: "03", title: "Recovery Strategy Design", desc: "Crafting a bespoke technical and operational roadmap for rapid system and data restoration." },
  { step: "04", title: "Backup & Replication Setup", desc: "Implementing automated data protection and real-time infrastructure replication across redundant sites." },
  { step: "05", title: "Disaster Recovery Testing", desc: "Regular simulation of disaster scenarios to validate recovery time objectives (RTO) and point objectives (RPO)." },
  { step: "06", title: "Monitoring & Optimization", desc: "Continuous 24/7 surveillance of protection systems and iterative performance tuning." }
];

const industries = [
  { name: "Government", icon: <Landmark className="h-6 w-6" /> },
  { name: "Healthcare", icon: <HeartPulse className="h-6 w-6" /> },
  { name: "Education", icon: <GraduationCap className="h-6 w-6" /> },
  { name: "Banking & Finance", icon: <Landmark className="h-6 w-6" /> },
  { name: "Manufacturing", icon: <Factory className="h-6 w-6" /> },
  { name: "Retail", icon: <ShoppingCart className="h-6 w-6" /> },
  { name: "Logistics", icon: <Package className="h-6 w-6" /> },
  { name: "IT Services", icon: <Code className="h-6 w-6" /> },
];

const faqs = [
  {
    q: "What is Disaster Recovery?",
    a: "Disaster Recovery is the process of restoring critical systems, applications, and data after an unexpected disruption such as cyber attacks, hardware failures, or natural disasters."
  },
  {
    q: "What is Business Continuity Planning?",
    a: "Business Continuity Planning ensures that essential business functions continue operating during and after a disruption."
  },
  {
    q: "How often should disaster recovery plans be tested?",
    a: "Organizations should test recovery plans regularly, typically every 6–12 months or after major infrastructure changes."
  },
  {
    q: "What is the difference between backup and disaster recovery?",
    a: "Backups protect data, while disaster recovery includes the complete process of restoring systems, applications, and business operations."
  },
  {
    q: "Can cloud infrastructure improve disaster recovery capabilities?",
    a: "Yes. Cloud-based recovery solutions provide faster restoration, better scalability, and improved business resilience."
  }
];

export default function DisasterRecoveryPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Schema Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Disaster Recovery & Business Continuity Services",
            "provider": {
              "@type": "Organization",
              "name": "ITLC India Pvt Ltd"
            },
            "description": "Enterprise-grade disaster recovery and business continuity solutions to protect your critical systems and data."
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PolygonHeroBackground />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Comprehensive Recovery & Continuity Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Strategically engineered defense and restoration layers to protect your enterprise.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {recoveryServices.map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all text-center space-y-4">
                <div className="mx-auto p-3 bg-white rounded-xl w-fit shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm tracking-tight">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-6 gap-8 text-center bg-slate-900 rounded-[40px] p-12 text-white shadow-2xl">
            {[
              { label: "Minimized Downtime", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
              { label: "Faster Recovery Time", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
              { label: "Continuity Assurance", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
              { label: "Reduced Financial Loss", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
              { label: "Improved Trust", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
              { label: "Data Protection", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="p-3 bg-white/10 rounded-full">{benefit.icon}</div>
                <span className="font-bold text-[10px] uppercase tracking-wider leading-tight">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Our Recovery & Continuity Methodology</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A proven framework for building and maintaining enterprise-grade business resilience.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recoveryMethodology.map((step, i) => (
              <Card key={i} className="border-none shadow-lg rounded-3xl bg-white hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <CardHeader className="p-8 pb-0">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl font-black text-slate-100">{step.step}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2"><FileCheck className="text-primary" /> Key Deliverables</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {["Recovery Plan", "BCP Framework", "Procedures Doc", "Risk Report", "Testing Report"].map((item) => (
                    <div key={item} className="flex items-center gap-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                        <span className="text-[10px] font-bold text-slate-700 leading-tight uppercase">{item}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Trusted Recovery & Resilience Experts</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Enterprise Continuity Expertise",
                  "Rapid Recovery Planning",
                  "Secure Backup Architecture",
                  "Compliance-Oriented Approach",
                  "Proactive Risk Management",
                  "Long-Term Support Services"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-bold text-slate-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-slate-900 rounded-3xl text-white space-y-6 shadow-2xl">
                <h4 className="font-bold text-lg border-b border-white/10 pb-4">Key Industries Served:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map(ind => (
                    <div key={ind.name} className="flex items-center gap-2 text-xs font-bold text-slate-300">
                        <div className="p-1.5 bg-white/10 rounded-lg text-primary">{ind.icon}</div>
                        <span>{ind.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full" />
                <div className="relative bg-slate-50 rounded-[40px] border border-slate-100 p-8 shadow-2xl flex flex-col items-center text-center space-y-6">
                    <div className="p-6 bg-white rounded-full shadow-lg">
                        <Activity className="h-24 w-24 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Business Continuity Intelligence</h3>
                    <p className="text-slate-500 max-w-xs mx-auto text-sm leading-relaxed">We provide full-stack protection and rapid restoration capabilities to ensure your business remains resilient against any threat.</p>
                    <Button asChild size="lg" className="rounded-full font-bold h-14 px-8">
                        <Link href="/contact">Speak to a Resilience Expert</Link>
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Disaster Recovery FAQs</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-2xl border border-slate-200 mb-4 overflow-hidden shadow-sm">
                <AccordionTrigger className="font-bold text-left hover:no-underline py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="container max-w-screen-xl mx-auto px-4 space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Prepare Today. Recover Tomorrow.</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">Protect your business from unexpected disruptions with ITLC India's Disaster Recovery and Business Continuity solutions.</p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              <Link href="/contact">Request Recovery Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-14 font-bold border-white/20 hover:bg-white/10 transition-all hover:-translate-y-1">
              <Link href="/contact" className="flex items-center gap-2">Schedule Consultation <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
