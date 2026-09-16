'use client';

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  CodeXml, 
  Link as LinkIcon, 
  Database, 
  Cloud, 
  Zap, 
  ShieldCheck, 
  Lock, 
  Activity, 
  Globe, 
  Smartphone, 
  LayoutGrid, 
  Settings, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Rocket, 
  Users, 
  Briefcase, 
  ExternalLink, 
  ChevronLeft, 
  Sparkles, 
  MessageSquare, 
  ArrowUpRight, 
  FileCheck, 
  Trophy, 
  History, 
  Search, 
  Map, 
  Scale, 
  RefreshCcw, 
  Palette, 
  Monitor 
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';
import { SeoFaq } from '@/components/seo-faq';
import { cn } from '@/lib/utils';

const apiServices = [
  {
    title: "Custom API Development",
    description: "Build secure and scalable APIs tailored to your specific business requirements and logic.",
    icon: <CodeXml className="h-8 w-8 text-primary" />
  },
  {
    title: "REST API Development",
    description: "Modern, high-performance RESTful APIs for seamless web and mobile application connectivity.",
    icon: <Globe className="h-8 w-8 text-primary" />
  },
  {
    title: "Third-Party API Integration",
    description: "Connect external platforms and services seamlessly to extend your application capabilities.",
    icon: <LinkIcon className="h-8 w-8 text-primary" />
  },
  {
    title: "Payment Gateway Integration",
    description: "Secure implementation of Razorpay, Stripe, PayPal, and custom financial transaction systems.",
    icon: <Zap className="h-8 w-8 text-primary" />
  },
  {
    title: "CRM & ERP Integration",
    description: "Bridge the gap between your CRM, ERP, and HRMS platforms for a unified data source.",
    icon: <Briefcase className="h-8 w-8 text-primary" />
  },
  {
    title: "Cloud API Integration",
    description: "Harness the power of AWS, Google Cloud, and Firebase with cloud-native API architectures.",
    icon: <Cloud className="h-8 w-8 text-primary" />
  },
  {
    title: "API Modernization",
    description: "Transform legacy system silos into modern, agile, and API-driven digital architectures.",
    icon: <RefreshCcw className="h-8 w-8 text-primary" />
  },
  {
    title: "API Maintenance & Monitoring",
    description: "24/7 performance surveillance, security updates, and ongoing technical optimization.",
    icon: <Activity className="h-8 w-8 text-primary" />
  }
];

const specializedIntegrations = [
  "Payment Gateways", "CRM Platforms", "ERP Systems", "HRMS Software",
  "E-Commerce Platforms", "Marketing Automation", "Accounting Software", "Cloud Services",
  "SMS Gateways", "WhatsApp APIs", "Email Platforms", "Analytics Systems"
];

const apiSolutions = [
  "SaaS Platform APIs", "Mobile App APIs", "E-Commerce APIs", "Enterprise APIs",
  "Multi-Tenant APIs", "Authentication APIs", "Data Exchange APIs", "Webhook Systems",
  "Reporting APIs", "Financial APIs", "Logistics APIs", "Healthcare APIs"
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "Understanding your data exchange needs and integration goals." },
  { step: "02", title: "API Architecture Design", desc: "Defining endpoints, data structures, and security layers." },
  { step: "03", title: "Development & Documentation", desc: "Clean coding with comprehensive Swagger/OpenAPI docs." },
  { step: "04", title: "Security Implementation", desc: "Enforcing OAuth, JWT, and high-level data encryption." },
  { step: "05", title: "Testing & Deployment", desc: "Rigorous load testing followed by cloud-native deployment." },
  { step: "06", title: "Monitoring & Support", desc: "Ongoing performance tracking and proactive maintenance." }
];

const techStack = [
  { category: "Frontend Integration", items: ["React.js", "Next.js", "Angular", "Vue.js", "Flutter", "React Native"] },
  { category: "Backend Development", items: ["Node.js", "Express.js", "NestJS", "Laravel", "PHP", "Python"] },
  { category: "Database Technologies", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { category: "Cloud Platforms", items: ["AWS", "Google Cloud", "Microsoft Azure", "Firebase"] }
];

const securityFeatures = [
  { title: "OAuth Authentication", icon: <ShieldCheck className="h-6 w-6" /> },
  { title: "JWT Security", icon: <Lock className="h-6 w-6" /> },
  { title: "API Rate Limiting", icon: <Activity className="h-6 w-6" /> },
  { title: "Role-Based Access", icon: <Users className="h-6 w-6" /> },
  { title: "Data Encryption", icon: <ShieldCheck className="h-6 w-6" /> },
  { title: "Secure Endpoints", icon: <Lock className="h-6 w-6" /> },
  { title: "Audit Logs", icon: <History className="h-6 w-6" /> },
  { title: "Real-Time Monitoring", icon: <Monitor className="h-6 w-6" /> }
];

const successMetrics = [
  { val: "500+", label: "API Integrations Completed", icon: <FileCheck className="h-8 w-8 text-primary" /> },
  { val: "200+", label: "Applications Connected", icon: <LinkIcon className="h-8 w-8 text-primary" /> },
  { val: "99.9%", label: "API Uptime Reliability", icon: <Zap className="h-8 w-8 text-primary" /> },
  { val: "98%", label: "Client Satisfaction", icon: <Trophy className="h-8 w-8 text-primary" /> }
];

const caseStudies = [
  {
    title: "CRM & ERP Integration",
    challenge: "Fragmented data silos causing operational delays in a large retail chain.",
    solution: "Custom middleware API to synchronize Odoo ERP with Salesforce CRM.",
    impact: "Real-time inventory visibility and 30% reduction in order processing time."
  },
  {
    title: "Payment Gateway Automation",
    challenge: "Manual reconciliation of international payments for a SaaS provider.",
    solution: "Secure multi-gateway API integration with Stripe and Razorpay.",
    impact: "100% automated billing and zero reconciliation errors."
  },
  {
    title: "Multi-System Data Sync",
    challenge: "Inconsistent student data across legacy LMS and new mobile portals.",
    solution: "Centralized Data Exchange API with real-time webhook triggers.",
    impact: "Seamless user experience across all digital touchpoints."
  }
];

const faqs = [
  {
    question: "What is API development?",
    answer: "API (Application Programming Interface) development is the process of creating a set of rules and protocols that allow different software applications to communicate with each other. At ITLC India, we focus on building secure, scalable, and efficient APIs that serve as the glue between your frontend applications, backend databases, and third-party services, enabling seamless data flow and functional extensibility."
  },
  {
    question: "Why does my business need API integration?",
    answer: "API integration is critical for modern businesses to eliminate data silos and automate manual workflows. By connecting your CRM, ERP, payment gateways, and other third-party tools, you can ensure real-time data synchronization, reduce human error, and provide a unified experience for both your employees and customers. It allows your business to scale faster by easily adding new functionalities through external services."
  },
  {
    question: "Can you integrate third-party services?",
    answer: "Yes, ITLC India specializes in integrating a wide array of third-party services including popular CRMs like Salesforce and HubSpot, ERPs like SAP and Odoo, social media platforms, SMS gateways, and specialized industry APIs. We ensure that these integrations are secure, optimized for performance, and maintain a consistent data structure across your entire ecosystem."
  },
  {
    question: "Do you provide payment gateway integrations?",
    answer: "Absolutely. We have extensive experience in integrating secure payment gateways such as Razorpay, Stripe, PayPal, and PayU. We ensure that these integrations are PCI-DSS compliant, handle multi-currency transactions, support recurring billing models, and provide robust error handling for a seamless and trustworthy checkout experience for your users."
  },
  {
    question: "Can APIs connect ERP and CRM systems?",
    answer: "Yes, connecting ERP and CRM systems is one of our core integration services. By bridging these two critical platforms, we allow your sales and operations teams to share real-time data on inventory, customer orders, and financial status. This leads to improved forecasting, faster lead-to-order cycles, and a significantly higher level of operational efficiency across your entire organization."
  },
  {
    question: "How do you secure APIs?",
    answer: "Security is built into our API development process from day one. We implement industry-standard authentication and authorization protocols such as OAuth 2.0 and JWT (JSON Web Tokens). We also enforce API rate limiting to prevent abuse, utilize SSL/TLS encryption for all data in transit, and conduct regular security audits and penetration tests to ensure your endpoints remain ironclad against potential threats."
  },
  {
    question: "Do you provide API documentation?",
    answer: "Yes, we believe that an API is only as good as its documentation. We provide comprehensive, easy-to-understand API documentation using tools like Swagger and OpenAPI. This ensures that your internal developers or third-party partners can easily understand how to interact with the API, including detailed information on endpoints, request/response formats, authentication requirements, and error codes."
  },
  {
    question: "Can you modernize legacy systems using APIs?",
    answer: "Yes, ITLC India can help you breathe new life into legacy systems by wrapping them in modern API layers. This 'API-led connectivity' approach allows your old systems to communicate with modern web and mobile applications without needing a complete and costly system overhaul. This strategy provides a cost-effective path to digital transformation while preserving your existing business logic and data investments."
  }
];

export default function ApiDevelopmentIntegrationPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Enterprise Connectivity Excellence"
        title={<>Connected Ecosystems With <br /> <span className="text-primary">Powerful API Solutions</span></>}
        description="ITLC INDIA builds, secures, and integrates high-performance APIs that bridge the gap between applications, automate complex workflows, and accelerate your digital transformation."
        primaryCta={{ text: "Start Integration Project", href: "/contact" }}
        secondaryCta={{ text: "Request API Consultation", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative group max-w-lg w-full">
            <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-slate-900 border-8 border-slate-800 rounded-[40px] shadow-2xl p-8 overflow-hidden aspect-[4/3] flex flex-col gap-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                        <Terminal className="h-5 w-5 text-primary" />
                        <div className="h-4 bg-white/10 rounded w-24" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-primary animate-pulse" />
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="flex justify-between items-end">
                        <div className="space-y-2">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">API Response Time</div>
                            <div className="text-3xl font-black text-primary">120ms</div>
                        </div>
                        <div className="flex items-end gap-1 h-12">
                            {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="w-2 bg-primary/30 rounded-t-sm" />
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Integrations</div>
                            <div className="text-xl font-bold text-white">500+</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Reliability</div>
                            <div className="text-xl font-bold text-primary">99.9%</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        }
      />

      {/* Trust Badges */}
      <div className="bg-slate-50 py-10 border-b border-slate-100">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {["REST API Expert", "Third-Party Integration", "Secure OAuth 2.0", "Legacy Modernization", "Cloud-Native API"].map(badge => (
                    <div key={badge} className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{badge}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Section 1: Result Focus */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                        <Zap className="h-4 w-4" /> <span>Digital Acceleration</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-slate-900">
                        Connect Systems. <br /> <span className="text-primary">Automate Processes. Scale Faster.</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        APIs are the foundation of modern digital transformation. They allow applications, websites, SaaS platforms, ERPs, and third-party services to communicate seamlessly, enabling automation, scalability, and operational efficiency.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        {[
                            { title: "Faster", desc: "System Integration" },
                            { title: "Improved", desc: "Data Accessibility" },
                            { title: "Reduced", desc: "Manual Workflows" },
                            { title: "Enhanced", desc: "Business Efficiency" }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all shadow-sm group">
                                <div className="text-2xl font-black text-primary mb-1 group-hover:scale-105 transition-transform">{stat.title}</div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <div className="relative">
                    <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full" />
                    <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                        <img 
                            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2074&auto=format&fit=crop" 
                            alt="API Connectivity Illustration" 
                            className="object-cover w-full h-full"
                            data-ai-hint="digital connectivity"
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Section 2: Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">API Development & Integration Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">End-to-end expertise in creating secure and scalable digital bridges.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiServices.map((service, i) => (
              <Card key={i} className="border-none shadow-xl bg-white/60 backdrop-blur-md hover:bg-white transition-all group p-4 rounded-[32px]">
                <CardHeader>
                  <div className="mb-4 p-4 bg-primary/5 rounded-2xl w-fit shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-black tracking-tight text-slate-900 leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Specialized Integrations */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="text-center mb-12">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Integrations We Specialize In</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                {specializedIntegrations.map(item => (
                    <span key={item} className="px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 hover:border-primary hover:text-primary transition-all cursor-default">{item}</span>
                ))}
            </div>
        </div>
      </section>

      {/* Section 4: Solutions Grid */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">API Solutions We Build</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">Specialized API architectures for every digital business model.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {apiSolutions.map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="p-2 bg-white/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="font-bold text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Process */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Our API Development Process</h2>
          </div>
          <div className="relative">
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 hidden lg:block -translate-y-1/2" />
             <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
                {processSteps.map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-4">
                        <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl shadow-xl shadow-primary/20">{step.step}</div>
                        <h4 className="font-black text-slate-900 text-sm leading-tight">{step.title}</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">{step.desc}</p>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Section 6: Tech Stack */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Our Technology Stack</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, i) => (
              <div key={i} className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 space-y-6">
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map(item => (
                    <span key={item} className="px-3 py-1.5 rounded-lg bg-slate-50 text-[11px] font-bold text-slate-700 border border-slate-100">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Security Features */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Security & Performance Features</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feat, i) => (
              <div key={i} className="flex flex-col items-center gap-4 text-center p-8 bg-slate-50/50 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {feat.icon}
                </div>
                <h3 className="font-bold text-sm tracking-tight">{feat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Why Choose ITLC */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Why Choose ITLC INDIA?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    "Experienced API Architects",
                    "Enterprise-Grade Solutions",
                    "Secure Development Practices",
                    "Scalable Infrastructure Design",
                    "Comprehensive Documentation",
                    "Integration Expertise",
                    "Agile Development Approach",
                    "Long-Term Support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 p-1 bg-primary/10 rounded-full text-primary">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <span className="font-bold text-slate-800 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                  <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full" />
                  <div className="relative bg-slate-900 rounded-[50px] p-12 text-white shadow-2xl text-center space-y-8">
                     <div className="grid grid-cols-2 gap-8">
                        {successMetrics.map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-4xl font-black text-primary tracking-tighter">{stat.val}</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                            </div>
                        ))}
                     </div>
                     <div className="pt-8 border-t border-white/10">
                        <p className="text-slate-400 text-sm font-medium mb-8">Trusted by global enterprises for seamless digital connectivity.</p>
                        <Button asChild size="lg" className="rounded-full px-10 h-14 font-black text-lg">
                          <Link href="/contact">Request API Audit</Link>
                        </Button>
                     </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* Section 9: Case Studies */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Integration Success Stories</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {caseStudies.map((study, i) => (
                    <Card key={i} className="border-none shadow-lg rounded-[40px] overflow-hidden bg-slate-50/50 hover:bg-white transition-all">
                        <div className="p-8 bg-slate-900 text-white">
                            <h4 className="text-xl font-bold leading-tight">{study.title}</h4>
                        </div>
                        <CardContent className="p-8 space-y-6">
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Challenge</p>
                                <p className="text-sm text-slate-700 font-medium">{study.challenge}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Integration Scope</p>
                                <p className="text-sm text-slate-700 font-medium">{study.solution}</p>
                            </div>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Impact</p>
                                <p className="text-lg font-black text-slate-900">{study.impact}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <SeoFaq serviceName="API Development & Integration" faqs={faqs} />

      {/* Final CTA */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="container relative z-10 max-w-screen-xl mx-auto px-6 space-y-10">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ready To Connect Your <br /> <span className="text-primary">Systems With Powerful APIs?</span></h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">Partner with ITLC INDIA to build secure, scalable, and high-performance APIs that automate processes, improve connectivity, and accelerate digital transformation.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button asChild size="lg" className="rounded-full px-12 h-16 font-black text-xl shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1">
                    <Link href="/contact">Request API Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-16 border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-black text-xl transition-all hover:-translate-y-1">
                    <Link href="/contact">Start Integration Project</Link>
                </Button>
            </div>

            <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto border-t border-white/10">
                <div className="flex items-center justify-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl"><Smartphone className="h-6 w-6 text-primary" /></div>
                    <div className="text-left"><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Call Us</p><p className="font-bold">+91 9532341000</p></div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl"><MessageSquare className="h-6 w-6 text-primary" /></div>
                    <div className="text-left"><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email Us</p><p className="font-bold">info@itlcindia.com</p></div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl"><Globe className="h-6 w-6 text-primary" /></div>
                    <div className="text-left"><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Website</p><p className="font-bold">www.itlcindia.com</p></div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
