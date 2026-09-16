import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  ShieldCheck, 
  Lock, 
  Activity, 
  Network, 
  Wifi, 
  Zap, 
  Search, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Server,
  Monitor,
  Eye,
  Settings
} from 'lucide-react';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Network Security Solutions Company | ITLC India',
  description: 'Enterprise network security solutions including firewall deployment, VPN security, threat detection, network monitoring, and cyber threat protection services.',
  keywords: 'Network Security Solutions, Firewall Implementation, VPN Security, Intrusion Prevention, ITLC India Security, Network Protection',
  openGraph: {
    title: 'Network Security Solutions Company | ITLC India',
    description: 'Secure, monitor, and protect your enterprise network infrastructure with ITLC India.',
    url: 'https://itlcindia.com/services/network-security-solutions',
    type: 'website',
  },
};

const networkServices = [
  { title: "Firewall Implementation", icon: <ShieldCheck className="h-6 w-6" /> },
  { title: "Next-Gen Firewall (NGFW)", icon: <Zap className="h-6 w-6" /> },
  { title: "Intrusion Detection (IDS)", icon: <Eye className="h-6 w-6" /> },
  { title: "Intrusion Prevention (IPS)", icon: <Lock className="h-6 w-6" /> },
  { title: "VPN Solutions", icon: <Globe className="h-6 w-6" /> },
  { title: "Network Access Control", icon: <Settings className="h-6 w-6" /> },
  { title: "Secure Remote Access", icon: <Wifi className="h-6 w-6" /> },
  { title: "Network Monitoring", icon: <Monitor className="h-6 w-6" /> },
  { title: "Traffic Analysis", icon: <Activity className="h-6 w-6" /> },
  { title: "Threat Detection & Response", icon: <Search className="h-6 w-6" /> },
];

const securityFramework = [
  { step: "01", title: "Network Security Assessment", desc: "Evaluating current network architecture and identifying potential weak points." },
  { step: "02", title: "Risk & Vulnerability Analysis", desc: "Pinpointing specific threats and technical vulnerabilities across the infrastructure." },
  { step: "03", title: "Security Architecture Design", desc: "Crafting a bespoke multi-layer security roadmap for your organization." },
  { step: "04", title: "Firewall & Security Deployment", desc: "Overseeing the technical implementation of hardware and software security controls." },
  { step: "05", title: "Monitoring & Threat Detection", desc: "Continuous surveillance and real-time incident alerting mechanisms." },
  { step: "06", title: "Continuous Optimization", desc: "Regular updates, patches, and iterative improvements to maintain peak security." }
];

const faqs = [
  {
    q: "What is Network Security?",
    a: "Network security protects systems, devices, and data from unauthorized access, cyber attacks, and security threats through layered protection mechanisms like firewalls, VPNs, and monitoring tools."
  },
  {
    q: "Why is a firewall important for business security?",
    a: "Firewalls act as the first line of defense, monitoring and controlling incoming and outgoing traffic to help prevent unauthorized access and cyber threats from reaching your internal network."
  },
  {
    q: "Do you provide VPN and remote access security?",
    a: "Yes, we implement secure VPN and Zero-Trust remote access solutions to ensure your hybrid and remote workforce can connect safely to company resources."
  },
  {
    q: "Can network security solutions help prevent ransomware attacks?",
    a: "Absolutely. Layered security controls, such as IPS/IDS and robust firewall policies, significantly reduce the attack surface and can detect/block ransomware before it propagates."
  },
  {
    q: "Do you provide ongoing network monitoring?",
    a: "Yes, we offer 24/7 continuous monitoring, proactive threat detection, and managed security services to ensure your network remains resilient against evolving threats."
  }
];

export default function NetworkSecuritySolutionsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PolygonHeroBackground />
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Comprehensive Network Protection Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Layered defense strategies to safeguard every node and endpoint in your corporate network.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {networkServices.map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all text-center space-y-4">
                <div className="mx-auto p-3 bg-white rounded-xl w-fit shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm tracking-tight">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-6 gap-8 text-center bg-slate-900 rounded-[40px] p-12 text-white">
            {[
              { label: "Enhanced Protection", icon: <ShieldCheck className="h-6 w-6 text-primary" /> },
              { label: "Reduced Risk", icon: <Lock className="h-6 w-6 text-primary" /> },
              { label: "Secure Remote Work", icon: <Wifi className="h-6 w-6 text-primary" /> },
              { label: "Real-Time Detection", icon: <Activity className="h-6 w-6 text-primary" /> },
              { label: "Improved Compliance", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
              { label: "Business Continuity", icon: <Zap className="h-6 w-6 text-primary" /> }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="p-3 bg-white/10 rounded-full">{benefit.icon}</div>
                <span className="font-bold text-[10px] uppercase tracking-wider leading-tight">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Network Security Framework</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A data-driven methodology for building and maintaining ironclad network environments.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFramework.map((step, i) => (
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
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2"><Settings className="text-primary" /> Key Deliverables</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {["Audit Report", "Firewall Config", "Policy Framework", "Risk Assessment", "Network Roadmap"].map((item) => (
                    <div key={item} className="flex items-center gap-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                        <span className="text-xs font-bold text-slate-700">{item}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why Businesses Trust ITLC India</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Certified Security Professionals",
                  "Enterprise Security Expertise",
                  "Multi-Layer Security Approach",
                  "24/7 Monitoring Capabilities",
                  "Compliance-Driven Security",
                  "Customized Security Solutions",
                  "Real-time Incident Analysis",
                  "Legacy Infrastructure Hardening"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-bold text-slate-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-slate-900 rounded-3xl text-white space-y-6">
                <h4 className="font-bold text-lg border-b border-white/10 pb-4">Key Industries Served:</h4>
                <div className="flex flex-wrap gap-3">
                  {['Government', 'Healthcare', 'Education', 'Banking & Finance', 'Manufacturing', 'Retail', 'Logistics', 'IT Services'].map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold border border-white/5">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-10 bg-blue-500/5 blur-[120px] rounded-full" />
                <div className="relative bg-slate-50 rounded-[40px] border border-slate-100 p-8 shadow-2xl flex flex-col items-center text-center space-y-6">
                    <div className="p-6 bg-white rounded-full shadow-lg">
                        <Server className="h-24 w-24 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Hardware & Software Synergy</h3>
                    <p className="text-slate-500 max-w-xs mx-auto">We provide full-stack protection from physical hardware firewalls to cloud-native application security.</p>
                    <Button asChild size="lg" className="rounded-full font-bold">
                        <Link href="/contact">Get System Audit</Link>
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
            <h2 className="text-3xl font-bold text-slate-900">Network Security FAQs</h2>
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
      <section className="py-24 bg-slate-950 text-white text-center">
        <div className="container max-w-screen-xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Protect Your Network Before Threats Strike</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">Partner with ITLC India to build a secure, resilient, and future-ready network security infrastructure.</p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              <Link href="/contact">Book Security Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-14 font-bold border-white/20 hover:bg-white/10 transition-all hover:-translate-y-1">
              <Link href="/contact" className="flex items-center gap-2">Request Network Audit <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
