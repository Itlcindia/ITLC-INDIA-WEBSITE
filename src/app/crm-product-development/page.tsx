import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Target, BarChart, Zap, Shield, ArrowRight, Clock, Rocket, Smile, Bot, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';
import { SeoFaq } from "@/components/seo-faq";
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'CRM Product Development | ITLC INDIA PVT LTD',
  description: 'Custom-built CRM solutions to manage leads, automate sales, and drive customer intelligence. Specialized CRM development by ITLC INDIA PVT LTD.',
}

const crmFeatures = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Lead Management",
        description: "Capture, track, and nurture leads from multiple sources automatically.",
        features: ["Auto-lead assignment", "Scoring & prioritization", "Pipeline visualization", "Conversion tracking"],
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Sales Automation",
        description: "Eliminate repetitive tasks and focus on closing deals.",
        features: ["Automated follow-ups", "Email sequences", "Task reminders", "Meeting scheduling"],
    },
    {
        icon: <BarChart className="h-8 w-8 text-primary" />,
        title: "Customer Intelligence",
        description: "Gain deep insights into customer behavior and preferences.",
        features: ["Activity history", "Sentiment analysis", "Purchase patterns", "Predictive churn"],
    },
];

const crmFaqs = [
  {
    question: "What are the benefits of Custom CRM Development for businesses?",
    answer: "Custom CRM development from ITLC India offers significant benefits including streamlined sales pipelines, improved customer retention through personalized engagement, and centralized data management. Unlike generic solutions, a custom CRM is built around your specific business logic, eliminating unnecessary features and focusing on tools that drive productivity. This leads to better team collaboration, more accurate forecasting, and a significant increase in overall sales efficiency and customer satisfaction."
  },
  {
    question: "Why choose ITLC India for CRM Product Development?",
    answer: "ITLC India specializes in building bespoke CRM solutions that offer total ownership without recurring per-user licensing fees. Our development team focuses on creating intuitive, scalable architectures using modern stacks like Next.js and high-performance databases. We ensure that your CRM integrates perfectly with your existing marketing tools and internal workflows, providing a unified source of truth for all your customer interactions and business intelligence needs."
  },
  {
    question: "How much does CRM Product Development cost in India?",
    answer: "The cost of developing a custom CRM in India with ITLC India depends on the depth of features required, such as AI-driven lead scoring, multi-platform integrations, and advanced reporting modules. We offer competitive, project-based pricing that provides a much better long-term ROI compared to monthly subscription models. We can start with a Minimum Viable Product (MVP) for startups and scale to comprehensive enterprise-grade systems as your business requirements evolve."
  },
  {
    question: "How long does it take to build a custom CRM?",
    answer: "A standard custom CRM project at ITLC India typically takes between 10 to 20 weeks. This includes the initial discovery phase, UI/UX design, core module development, integration testing, and final deployment. We follow an agile development lifecycle, allowing you to see functional modules early in the process. More complex systems with advanced AI automation or legacy system migrations may require a longer timeframe for thorough quality assurance and optimization."
  },
  {
    question: "What technologies are used in your CRM development?",
    answer: "We use a high-performance technology stack for CRM development, typically including Next.js and React for the frontend, Node.js or Python for the backend, and scalable SQL or NoSQL databases. We also integrate advanced security protocols like role-based access control (RBAC) and data encryption. For modern intelligence, we can integrate OpenAI or Google Gemini APIs to provide automated sentiment analysis, predictive sales insights, and intelligent lead qualifying capabilities."
  },
  {
    question: "Do you provide support and maintenance after the CRM launch?",
    answer: "Yes, ITLC India provides ongoing maintenance and support to ensure your custom CRM stays updated with the latest security patches and technology trends. Our support services include bug fixes, performance monitoring, and regular feature updates based on your growing business needs. We also provide user training and technical documentation to ensure your sales and support teams can fully leverage the power of the platform from day one."
  }
];

export default function CrmProductDevelopmentPage() {
  return (
    <>
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[76px] text-white leading-tight">
            Custom CRM Development <br /> <span className="text-primary">Built for Your Growth</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-base text-white/80 md:text-lg lg:text-2xl">
            Empower your sales and support teams with a bespoke CRM system that fits your unique business processes like a glove.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold shadow-2xl transition-all hover:-translate-y-1">
              <Link href="/contact">Get a CRM Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white font-bold transition-all hover:-translate-y-1">
              <Link href="/services">View Capabilities</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-b">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">Core CRM Capabilities</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Scalable features designed to streamline your entire customer lifecycle.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {crmFeatures.map((feature) => (
              <Card key={feature.title} className="flex flex-col border-border/50 shadow-sm hover:shadow-xl transition-all">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SeoFaq serviceName="CRM Product Development" faqs={crmFaqs} />

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Why a Custom CRM?</h2>
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { title: "No Per-User Fees", text: "Own your software without monthly licensing headaches." },
                    { title: "Custom Workflows", text: "Map every field and process to your specific operations." },
                    { title: "Data Security", text: "Complete control over your sensitive customer data." },
                    { title: "Seamless Integration", text: "Connect with your website, apps, and legacy systems." }
                ].map((item, i) => (
                    <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                        <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-400">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
          <div className="container max-w-screen-md mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Centralize Your Data?</h2>
              <p className="text-muted-foreground text-lg mb-10">Let's build a CRM that actually works for your team, not the other way around.</p>
              <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-xl transition-all hover:-translate-y-1">
                  <Link href="/contact">Talk to a CRM Expert</Link>
              </Button>
          </div>
      </section>
    </>
  );
}
