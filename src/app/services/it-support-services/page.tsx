'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
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
  Smartphone,
  Layout,
  MessageSquare,
  Activity,
  Wifi,
  Cloud,
  FileCheck,
  Cpu,
  RefreshCcw,
  Clock,
  Briefcase,
  Users2,
  Trophy,
  History,
  Globe
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';
import { SeoFaq } from '@/components/seo-faq';
import { cn } from "@/lib/utils";

const itServicesList = [
  {
    title: "Managed IT Services",
    description: "Complete IT infrastructure management and support for seamless business operations.",
    icon: <Settings className="h-8 w-8 text-primary" />
  },
  {
    title: "Helpdesk Support",
    description: "Technical assistance for users and business teams to resolve issues instantly.",
    icon: <Headset className="h-8 w-8 text-primary" />
  },
  {
    title: "Remote IT Support",
    description: "Fast troubleshooting and issue resolution remotely for minimal disruption.",
    icon: <Monitor className="h-8 w-8 text-primary" />
  },
  {
    title: "Onsite Technical Support",
    description: "Physical support for hardware, network, and infrastructure issues at your location.",
    icon: <Briefcase className="h-8 w-8 text-primary" />
  },
  {
    title: "Network Management",
    description: "Monitoring, optimization, and maintenance of business networks for peak performance.",
    icon: <Network className="h-8 w-8 text-primary" />
  },
  {
    title: "Cloud Support Services",
    description: "Infrastructure management, migration, and ongoing support for cloud platforms.",
    icon: <Cloud className="h-8 w-8 text-primary" />
  },
  {
    title: "Cybersecurity Support",
    description: "Security monitoring, threat prevention, and incident response assistance.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />
  },
  {
    title: "Hardware & Software Support",
    description: "Installation, maintenance, upgrades, and troubleshooting for all assets.",
    icon: <Cpu className="h-8 w-8 text-primary" />
  }
];

const solutionsGrid = [
  { title: "Desktop & Laptop Support", icon: <Monitor className="h-5 w-5" /> },
  { title: "Server Management", icon: <Server className="h-5 w-5" /> },
  { title: "Network Administration", icon: <Network className="h-5 w-5" /> },
  { title: "Cloud Infrastructure Support", icon: <Cloud className="h-5 w-5" /> },
  { title: "Software Installation", icon: <Settings className="h-5 w-5" /> },
  { title: "Email Support Systems", icon: <MessageSquare className="h-5 w-5" /> },
  { title: "Data Backup Management", icon: <Database className="h-5 w-5" /> },
  { title: "Security Monitoring", icon: <ShieldCheck className="h-5 w-5" /> },
  { title: "Wi-Fi Optimization", icon: <Wifi className="h-5 w-5" /> },
  { title: "Printer & Device Support", icon: <Activity className="h-5 w-5" /> },
  { title: "Microsoft 365 Support", icon: <Layout className="h-5 w-5" /> },
  { title: "Business Application Support", icon: <Zap className="h-5 w-5" /> }
];

const supportProcess = [
  { step: "01", title: "Assessment & Audit", desc: "A deep dive into your current IT infrastructure and identifying pain points." },
  { step: "02", title: "Issue Identification", desc: "Pinpointing technical gaps, security risks, and performance bottlenecks." },
  { step: "03", title: "Strategy Planning", desc: "Developing a tailored support roadmap aligned with your business goals." },
  { step: "04", title: "Implementation", desc: "Executing the resolution plan and hardening your technical environment." },
  { step: "05", title: "Monitoring", desc: "Continuous 24/7 surveillance to ensure stability and early threat detection." },
  { step: "06", title: "Continuous Support", desc: "Ongoing maintenance, updates, and rapid troubleshooting assistance." }
];

const supportedTech = [
  "Microsoft Windows", "Linux Servers", "Microsoft 365", "Google Workspace", 
  "AWS", "Google Cloud", "Azure", "VMware", 
  "Networking Infrastructure", "Firewall Systems", "Database Servers", "Business Applications"
];

const successMetrics = [
  { val: "500+", label: "Support Requests Resolved", icon: <FileCheck className="h-8 w-8 text-primary" /> },
  { val: "100+", label: "Business Clients Supported", icon: <Users2 className="h-8 w-8 text-primary" /> },
  { val: "99%", label: "Issue Resolution Rate", icon: <Trophy className="h-8 w-8 text-primary" /> },
  { val: "24/7", label: "Support Availability", icon: <Clock className="h-8 w-8 text-primary" /> }
];

const supportPlans = [
  { 
    name: "Basic IT Support", 
    desc: "Remote assistance and troubleshooting for minor issues.",
    features: ["Remote Troubleshooting", "Software Installation", "Email Support", "Business Hours Access"]
  },
  { 
    name: "Business IT Support", 
    desc: "Managed support for growing organizations with higher needs.",
    features: ["Everything in Basic", "Network Monitoring", "Antivirus Management", "Priority Response"]
  },
  { 
    name: "Enterprise IT Support", 
    desc: "Comprehensive infrastructure and security management.",
    features: ["Everything in Business", "Server Management", "Security Audits", "24/7 Support"]
  },
  { 
    name: "Dedicated IT Team", 
    desc: "Full-scale outsourced IT department services.",
    features: ["Custom SLA", "Onsite Resource", "Strategic CIO Advisory", "Project Management"]
  }
];

const caseStudies = [
  {
    title: "Infrastructure Optimization",
    challenge: "High downtime due to aging server hardware and poor network layout.",
    solution: "Full infrastructure audit followed by server virtualization and network re-cabling.",
    outcome: "99.9% Uptime achieved.",
    benefits: "Reduced maintenance costs by 30% and improved employee productivity."
  },
  {
    title: "Managed IT Transformation",
    challenge: "Internal IT team overwhelmed by growing user support requests.",
    solution: "Implemented a 24/7 helpdesk and proactive system monitoring tools.",
    outcome: "Average resolution time dropped to under 15 minutes.",
    benefits: "Executive team focused on growth rather than troubleshooting."
  }
];

const faqs = [
  {
    question: "What IT support services do you provide?",
    answer: "ITLC India provides a comprehensive suite of IT support services including managed IT infrastructure, technical helpdesk, remote and onsite troubleshooting, and network management. We handle server maintenance, cloud support, cybersecurity monitoring, and hardware lifecycle management. Our goal is to provide a single point of accountability for all your technology needs, ensuring your systems are always updated, secure, and performing at their peak to support your business objectives."
  },
  {
    question: "Do you offer remote and onsite support?",
    answer: "Yes, we provide both remote and onsite IT support services. Our remote support team uses secure tools to resolve over 90% of software and configuration issues instantly. For hardware failures, network cabling projects, or complex infrastructure deployments, our certified onsite engineers visit your location to provide hands-on assistance. This hybrid approach ensures that your team gets the fastest possible resolution for everyday issues while having expert physical support for mission-critical hardware events."
  },
  {
    question: "Can you manage our complete IT infrastructure?",
    answer: "Absolutely. ITLC India specializes in full-scale Managed IT Services where we act as your outsourced IT department. This includes managing your servers, networks, workstations, cloud environments, and security protocols. We handle proactive monitoring, automated patching, regular backups, and vendor management. By taking full responsibility for your infrastructure, we allow your leadership team to focus on strategic business growth while we ensure your technology foundation is resilient and scalable."
  },
  {
    question: "Do you provide cybersecurity support?",
    answer: "Yes, cybersecurity is integrated into every IT support service we offer. We provide security monitoring, threat detection, firewall management, and endpoint protection. Our team ensures that your systems are patched against latest vulnerabilities and that your data is backed up securely. In the event of a security incident, our incident response team provides rapid assistance to contain threats and restore operations, following industry best practices to protect your business reputation and sensitive data."
  },
  {
    question: "What industries do you support?",
    answer: "We support a wide range of industries including Healthcare, Education, Manufacturing, Real Estate, Finance, and Government Organizations. Each industry has unique technical and compliance requirements—such as HIPAA for healthcare or secure data handling for finance. Our engineers are experienced in tailoring IT support frameworks to meet these specific sectoral standards, ensuring that your technology not only works efficiently but also complies with relevant regulatory frameworks."
  },
  {
    question: "Do you offer 24/7 monitoring?",
    answer: "Yes, ITLC India provides 24/7 infrastructure monitoring services through our Network Operations Center (NOC). We use enterprise-grade surveillance tools to track the health of your servers, networks, and applications in real-time. This proactive approach allows us to detect and resolve potential issues—such as failing hardware or unusual traffic patterns—before they can impact your business operations. Our round-the-clock monitoring is essential for maintaining business continuity in today's always-on digital economy."
  },
  {
    question: "Can you help with cloud migration and support?",
    answer: "Yes, we are experts in cloud infrastructure and can guide you through the entire lifecycle of cloud adoption. We help businesses migrate legacy on-premise systems to platforms like AWS, Azure, or Google Cloud with zero downtime. Once migrated, we provide ongoing cloud management including performance optimization, cost control, and security hardening. Whether you need a simple email migration or a complex multi-cloud hybrid architecture, our support team ensures your cloud environment is reliable and efficient."
  },
  {
    question: "How quickly can support requests be resolved?",
    answer: "Our resolution times are governed by strict Service Level Agreements (SLAs) tailored to your business needs. For critical infrastructure failures, we provide an immediate response with a target resolution time of under 30 minutes. General user helpdesk requests are typically acknowledged within 15 minutes and resolved within 1-2 hours. We prioritize issues based on their impact on your business operations, ensuring that mission-critical systems always receive the fastest possible attention from our expert engineering team."
  }
];

export default function ItSupportServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Enterprise Reliability"
        title={<>Reliable IT Support For <br /> <span className="text-primary">Modern Business Growth</span></>}
        description="ITLC INDIA provides proactive IT support and managed services to keep your business running efficiently, securely, and without technical disruptions."
        primaryCta={{ text: "Get IT Support", href: "/contact" }}
        secondaryCta={{ text: "Free IT Assessment", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative group max-w-lg w-full">
            <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-slate-900 border-8 border-slate-800 rounded-[40px] shadow-2xl p-8 overflow-hidden aspect-square flex flex-col gap-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="h-4 bg-white/10 rounded w-24" />
                </div>
                <div className="space-y-6">
                    <div className="flex justify-between items-end">
                        <div className="space-y-2">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Network Uptime</div>
                            <div className="text-3xl font-black text-primary">99.99%</div>
                        </div>
                        <Activity className="h-12 w-12 text-primary opacity-50 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Tickets Resolved</div>
                            <div className="text-xl font-bold text-white">5,000+</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Response Time</div>
                            <div className="text-xl font-bold text-primary">&lt; 15m</div>
                        </div>
                    </div>
                    <div className="h-20 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
                        <History className="h-10 w-10 text-primary opacity-50" />
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
                {["24/7 Assistance", "Managed IT", "Remote & Onsite", "Infrastructure Monitoring", "BCP Solutions"].map(badge => (
                    <div key={badge} className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{badge}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Section 1: Importance */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                        <Zap className="h-4 w-4" /> <span>Maximize Efficiency</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-slate-900">
                        Minimize Downtime. <br /> <span className="text-primary">Maximize Productivity.</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Technology is the backbone of modern business operations. Professional IT support helps organizations reduce downtime, improve security, optimize infrastructure, and ensure employees can work efficiently without technical disruptions.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        {[
                            { title: "Resolution", desc: "Faster Problem Solving" },
                            { title: "Stability", desc: "Reduced System Downtime" },
                            { title: "Security", desc: "Hardened Cyber Defense" },
                            { title: "Output", desc: "Higher Team Productivity" }
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
                            src="https://images.unsplash.com/photo-1573163281538-50704029eeac?q=80&w=2070&auto=format&fit=crop" 
                            alt="IT Support Center" 
                            className="object-cover w-full h-full"
                            data-ai-hint="it support desk"
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
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Our IT Support Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">Expert technical assistance across the full technology lifecycle.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itServicesList.map((service, i) => (
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

      {/* Section 3: Solutions Grid */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">IT Solutions We Provide</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">Comprehensive support for every node in your digital ecosystem.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {solutionsGrid.map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    {item.icon}
                </div>
                <span className="font-bold text-sm text-slate-300">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Industries */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {["Healthcare", "Education", "Manufacturing", "Real Estate", "Retail", "Finance", "Hospitality", "Logistics", "Technology", "Government"].map((ind, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-50/50 hover:bg-primary transition-all duration-500">
                <span className="font-bold text-sm text-slate-800 group-hover:text-white">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Process */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Our IT Support Process</h2>
          </div>
          <div className="relative">
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 hidden lg:block -translate-y-1/2" />
             <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
                {supportProcess.map((step, i) => (
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

      {/* Section 8: Tech Stack */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Technologies We Support</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {supportedTech.map(tech => (
              <span key={tech} className="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs font-black text-slate-700">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Metrics */}
      <section className="py-24 bg-slate-900 text-white">
          <div className="container max-w-screen-xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                  {successMetrics.map((stat, i) => (
                      <div key={i} className="space-y-4">
                          <div className="mx-auto w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">{stat.icon}</div>
                          <div>
                              <div className="text-4xl md:text-5xl font-black text-primary tracking-tighter">{stat.val}</div>
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Section 10: Plans */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">IT Support Plans</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">Scalable support models designed for every business size.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportPlans.map((plan, i) => (
              <Card key={i} className={cn("border-none shadow-xl flex flex-col rounded-[32px] overflow-hidden", i === 2 ? "bg-primary text-white scale-105" : "bg-white")}>
                <div className="p-8 space-y-6 flex-grow">
                    <h3 className="text-xl font-black tracking-tight">{plan.name}</h3>
                    <p className={cn("text-sm font-medium leading-relaxed", i === 2 ? "text-white/80" : "text-slate-500")}>{plan.desc}</p>
                    <ul className="space-y-3 pt-6 border-t border-slate-100">
                        {plan.features.map(f => (
                            <li key={f} className="flex items-center gap-2 text-xs font-bold">
                                <CheckCircle2 className={cn("h-4 w-4", i === 2 ? "text-white" : "text-primary")} />
                                <span>{f}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-8 pt-0">
                    <Button asChild className={cn("w-full rounded-2xl font-black", i === 2 ? "bg-white text-primary hover:bg-slate-50" : "")}>
                        <Link href="/contact">Inquire Now</Link>
                    </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Case Studies */}
      <section className="py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Support Success Stories</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
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
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Solution</p>
                                <p className="text-sm text-slate-700 font-medium">{study.solution}</p>
                            </div>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Impact</p>
                                <p className="text-lg font-black text-slate-900">{study.outcome}</p>
                                <p className="text-xs text-slate-500 mt-1">{study.benefits}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <SeoFaq serviceName="IT Support Services" faqs={faqs} />

      {/* Final CTA */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="container relative z-10 max-w-screen-xl mx-auto px-6 space-y-10">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Need Reliable IT Support <br /> <span className="text-primary">For Your Business?</span></h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">Partner with ITLC INDIA for proactive IT support, managed services, and technology solutions that keep your business secure and productive.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button asChild size="lg" className="rounded-full px-12 h-16 font-black text-xl shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1">
                    <Link href="/contact">Request IT Support</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-16 border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-black text-xl transition-all hover:-translate-y-1">
                    <Link href="/contact">Schedule Consultation</Link>
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
