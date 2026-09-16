import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Cloud, 
  Server, 
  Settings, 
  Zap, 
  ShieldCheck, 
  BarChart, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Database,
  LayoutGrid,
  RefreshCcw,
  Network,
  Cpu,
  Layers
} from 'lucide-react';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Cloud & Datacentre Consulting Services | ITLC India',
  description: 'Professional cloud and datacentre consulting services including cloud migration, hybrid cloud solutions, infrastructure modernization, virtualization, and optimization.',
  keywords: 'Cloud Consulting, Datacentre Modernization, Cloud Migration, Hybrid Cloud, Infrastructure Optimization, ITLC India Cloud',
  openGraph: {
    title: 'Cloud & Datacentre Consulting Services | ITLC India',
    description: 'Transform your enterprise infrastructure with secure and scalable cloud solutions.',
    url: 'https://itlcindia.com/services/cloud-datacentre-consulting',
    type: 'website',
  },
};

const cloudServices = [
  { title: "Cloud Strategy & Planning", icon: <Cloud className="h-6 w-6" /> },
  { title: "Cloud Migration Consulting", icon: <RefreshCcw className="h-6 w-6" /> },
  { title: "Hybrid Cloud Solutions", icon: <Layers className="h-6 w-6" /> },
  { title: "Multi-Cloud Architecture", icon: <Network className="h-6 w-6" /> },
  { title: "Datacentre Modernization", icon: <Server className="h-6 w-6" /> },
  { title: "Infrastructure Optimization", icon: <Settings className="h-6 w-6" /> },
  { title: "Virtualization Consulting", icon: <Cpu className="h-6 w-6" /> },
  { title: "Storage & Backup Solutions", icon: <Database className="h-6 w-6" /> },
  { title: "Capacity Planning", icon: <BarChart className="h-6 w-6" /> },
  { title: "Infrastructure Security Assessment", icon: <ShieldCheck className="h-6 w-6" /> },
];

const transformationProcess = [
  { step: "01", title: "Infrastructure Assessment", desc: "Evaluating current systems, workloads, and potential cloud readiness." },
  { step: "02", title: "Business Requirement Analysis", desc: "Aligning technical strategy with core business objectives and goals." },
  { step: "03", title: "Cloud & Datacentre Strategy", desc: "Defining the optimal mix of public, private, and hybrid environments." },
  { step: "04", title: "Architecture Design", desc: "Crafting a scalable, secure, and cost-effective infrastructure blueprint." },
  { step: "05", title: "Migration & Implementation Planning", desc: "Detailed roadmapping for low-risk, zero-downtime transitions." },
  { step: "06", title: "Optimization & Support", desc: "Continuous performance tuning and proactive management." }
];

const faqs = [
  {
    q: "What is Cloud & Datacentre Consulting?",
    a: "Cloud and datacentre consulting helps organizations plan, optimize, and modernize their IT infrastructure using cloud technologies and modern datacentre architectures."
  },
  {
    q: "Can you help migrate existing infrastructure to the cloud?",
    a: "Yes, we provide migration planning, risk assessment, architecture design, and implementation support for cloud transformation projects."
  },
  {
    q: "What cloud platforms do you support?",
    a: "We support major cloud environments including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud infrastructures."
  },
  {
    q: "How can cloud consulting reduce costs?",
    a: "Cloud consulting helps optimize infrastructure usage, eliminate waste, improve resource allocation, and reduce operational expenses."
  },
  {
    q: "Do you provide datacentre modernization services?",
    a: "Yes, we help organizations upgrade legacy infrastructure, improve performance, increase scalability, and enhance security."
  }
];

export default function CloudDatacentreConsultingPage() {
  return (
    <div className="flex flex-col w-full">
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Comprehensive Infrastructure Consulting</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Expert engineering across the full cloud and datacentre stack.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {cloudServices.map((item, i) => (
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
              { label: "Improved Scalability", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
              { label: "Reduced Costs", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
              { label: "Better Performance", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
              { label: "Enhanced Security", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
              { label: "Simplified Operations", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
              { label: "Faster Growth", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="p-3 bg-white/10 rounded-full">{benefit.icon}</div>
                <span className="font-bold text-[10px] uppercase tracking-wider leading-tight">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Our Infrastructure Transformation Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A proven methodology for seamless digital transformation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationProcess.map((step, i) => (
              <Card key={i} className="border-none shadow-lg rounded-3xl bg-white hover:-translate-y-2 transition-all duration-300">
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
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2"><LayoutGrid className="text-primary" /> Key Deliverables</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {["Assessment Report", "Readiness Analysis", "Architecture Blueprint", "Migration Roadmap", "Optimization Plan"].map((item) => (
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why Businesses Choose ITLC India</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Certified Infrastructure Experts",
                  "Cloud-First Consulting Approach",
                  "Vendor-Neutral Recommendations",
                  "Enterprise Datacentre Expertise",
                  "Security & Compliance Focus",
                  "End-to-End Project Support",
                  "Global Migration Mastery",
                  "24/7 Managed Operations"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-bold text-slate-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-slate-900 rounded-3xl text-white space-y-6">
                <h4 className="font-bold text-lg border-b border-white/10 pb-4">Key Industries We Serve:</h4>
                <div className="flex flex-wrap gap-3">
                  {['Government', 'Healthcare', 'Education', 'Manufacturing', 'Banking & Finance', 'Retail', 'Logistics', 'IT & Technology'].map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold border border-white/5">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full" />
                <div className="relative bg-slate-50 rounded-[40px] border border-slate-100 p-8 shadow-2xl flex flex-col items-center text-center space-y-6">
                    <div className="p-6 bg-white rounded-full shadow-lg">
                        <Cloud className="h-24 w-24 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Hybrid Cloud Experts</h3>
                    <p className="text-slate-500 max-w-xs mx-auto">We bridge the gap between on-premise hardware and cloud-native services for optimal flexibility.</p>
                    <Button asChild size="lg" className="rounded-full font-bold">
                        <Link href="/contact">Speak to an Architect</Link>
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
            <h2 className="text-3xl font-bold text-slate-900">Infrastructure Consulting FAQs</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-2xl border border-slate-200 mb-4 shadow-sm overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Build a Future-Ready Cloud Infrastructure</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">Partner with ITLC India to design, optimize, and modernize your cloud and datacentre environment for long-term business success.</p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              <Link href="/contact">Request Infrastructure Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-14 font-bold border-white/20 hover:bg-white/10 transition-all hover:-translate-y-1">
              <Link href="/contact" className="flex items-gap-2">Schedule Cloud Assessment <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
