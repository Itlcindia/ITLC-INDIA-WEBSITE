import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Headset, 
  Monitor, 
  Server, 
  Network, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Settings, 
  LifeBuoy,
  Database,
  Lock,
  Search,
  Sparkles
} from 'lucide-react';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Managed IT Services Company | ITLC India',
  description: 'Reliable managed IT services including infrastructure monitoring, support, maintenance, and security solutions for modern businesses.',
  openGraph: {
    title: 'Managed IT Services Company | ITLC India',
    description: 'Proactive IT management and 24/7 technical support for your enterprise.',
    url: 'https://itlcindia.com/services/managed-it-services',
    type: 'website',
  },
};

const itServicesList = [
  {
    title: "24/7 IT Monitoring",
    description: "Real-time surveillance of your entire network and server infrastructure to catch issues before they impact business.",
    icon: <Monitor className="h-8 w-8 text-primary" />
  },
  {
    title: "Help Desk Support",
    description: "Responsive technical assistance for your employees to resolve hardware and software queries instantly.",
    icon: <Headset className="h-8 w-8 text-primary" />
  },
  {
    title: "Server & Network Management",
    description: "Optimization and maintenance of on-premise and cloud servers to ensure peak performance.",
    icon: <Server className="h-8 w-8 text-primary" />
  },
  {
    title: "Endpoint Management",
    description: "Securing and managing all company devices including laptops, mobiles, and workstations.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />
  },
  {
    title: "Patch & Asset Management",
    description: "Automated software updates and lifecycle tracking of all your hardware assets.",
    icon: <Settings className="h-8 w-8 text-primary" />
  },
  {
    title: "IT Security Monitoring",
    description: "Continuous threat detection and incident response to protect your business data.",
    icon: <Lock className="h-8 w-8 text-primary" />
  }
];

const serviceProcess = [
  { step: "01", title: "Infrastructure Assessment", desc: "A deep audit of your current tech stack and pain points." },
  { step: "02", title: "IT Strategy Planning", desc: "Developing a tailored roadmap for long-term scalability and cost-efficiency." },
  { step: "03", title: "Monitoring Setup", desc: "Deploying enterprise-grade tools for 24/7 system visibility." },
  { step: "04", title: "Security Configuration", desc: "Hardening your perimeter and implementing zero-trust policies." },
  { step: "05", title: "Ongoing Management", desc: "Proactive maintenance and real-time troubleshooting." },
  { step: "06", title: "Reporting & Optimization", desc: "Monthly performance reviews and strategic adjustments." }
];

const faqs = [
  {
    q: "What are Managed IT Services?",
    a: "Managed IT services involve outsourcing the responsibility for maintaining, monitoring, and supporting your technology infrastructure to an expert partner like ITLC India, ensuring better uptime and reduced costs."
  },
  {
    q: "Do you provide 24/7 support?",
    a: "Yes, we provide round-the-clock monitoring and technical help desk support to ensure your business operations never stop, regardless of the time zone."
  },
  {
    q: "Can you manage cloud infrastructure?",
    a: "Absolutely. We specialize in managing and optimizing AWS, Azure, Google Cloud, and private cloud environments to ensure they are secure and cost-effective."
  },
  {
    q: "How quickly do you respond to issues?",
    a: "Our response time is defined by the SLA you choose. However, critical infrastructure issues are typically addressed within 15–30 minutes."
  },
  {
    q: "Is Managed IT suitable for small businesses?",
    a: "Yes, Managed IT is highly beneficial for small businesses as it provides access to enterprise-grade tools and expert support at a predictable monthly cost, without the need for a full internal IT department."
  }
];

export default function ManagedITServicesPage() {
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Comprehensive IT Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We take the complexity out of technology so you can focus on growing your business.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServicesList.map((service, i) => (
              <Card key={i} className="border-none shadow-xl bg-slate-50/50 hover:bg-white transition-all group p-4 rounded-[32px]">
                <CardHeader>
                  <div className="mb-4 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-center bg-slate-900 rounded-[40px] p-12 text-white shadow-2xl">
            {[
              { label: "Reduced Downtime", icon: <Zap className="h-6 w-6 text-primary" /> },
              { label: "Improved Productivity", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
              { label: "Predictable IT Costs", icon: <Database className="h-6 w-6 text-primary" /> },
              { label: "Enhanced Security", icon: <ShieldCheck className="h-6 w-6 text-primary" /> },
              { label: "Expert IT Support", icon: <LifeBuoy className="h-6 w-6 text-primary" /> }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="p-3 bg-white/10 rounded-full">{benefit.icon}</div>
                <span className="font-bold text-xs uppercase tracking-widest leading-tight">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Service Process</h2>
            <p className="text-muted-foreground">A structured approach to managing your technology ecosystem.</p>
          </div>
          <div className="relative">
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 hidden lg:block -translate-y-1/2" />
             <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
                {serviceProcess.map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-4">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black shadow-lg shadow-primary/20">{step.step}</div>
                        <h4 className="font-bold text-slate-900 text-sm leading-tight">{step.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Why Choose ITLC India */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why Choose ITLC India?</h2>
                <div className="grid gap-6">
                  {[
                    { title: "Experienced IT Professionals", desc: "A team of certified engineers with decades of combined experience." },
                    { title: "24/7 Monitoring & Support", desc: "Round-the-clock eyes on your critical business systems." },
                    { title: "Fast Issue Resolution", desc: "Industry-leading response times and rapid troubleshooting." },
                    { title: "Scalable IT Solutions", desc: "Technology that grows and flexes with your business needs." },
                    { title: "Security-Focused Approach", desc: "Data protection and compliance are built into every service." },
                    { title: "Dedicated Support Team", desc: "A consistent point of contact who understands your business." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 p-1 bg-primary/10 rounded-full text-primary">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                  <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full" />
                  <div className="relative bg-slate-900 rounded-[40px] overflow-hidden aspect-square flex items-center justify-center p-12 text-center group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-40" />
                      <div className="relative space-y-6">
                          <Monitor className="h-32 w-32 text-primary mx-auto opacity-80 group-hover:scale-110 transition-transform duration-500" />
                          <h3 className="text-2xl font-bold text-white">Your IT Partner for <br /> the Digital Age</h3>
                          <Button asChild size="lg" className="rounded-full font-bold">
                            <Link href="/contact">Book Discovery Call</Link>
                          </Button>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Managed IT FAQs</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-2xl border border-slate-200 mb-4 overflow-hidden shadow-sm">
                <AccordionTrigger className="text-left font-bold hover:no-underline py-6">{faq.q}</AccordionTrigger>
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Stop Worrying About IT.</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">Partner with ITLC India for reliable, secure, and professional managed IT services that fuel your growth.</p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              <Link href="/contact">Get Your Free IT Audit</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-14 font-bold border-white/20 hover:bg-white/10 transition-all hover:-translate-y-1">
              <Link href="/contact" className="flex items-center gap-2">Talk to an Expert <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
