'use client';

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Lock, 
  Search, 
  FileCheck, 
  ClipboardCheck, 
  LayoutGrid, 
  Zap, 
  Activity, 
  Eye, 
  Users2, 
  Database, 
  Shield, 
  Fingerprint, 
  Network, 
  Cloud, 
  RefreshCcw, 
  Landmark, 
  HeartPulse, 
  GraduationCap, 
  Factory, 
  ShoppingCart, 
  Truck, 
  Briefcase, 
  Globe, 
  Phone, 
  Mail, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  FileText,
  UserCheck,
  CheckCircle2,
  Trophy,
  History,
  Smartphone
} from 'lucide-react';
import { ServiceHero } from '@/components/service-hero';
import { SeoFaq } from '@/components/seo-faq';
import { cn } from "@/lib/utils";

const securityServices = [
  {
    title: "IT Security Audit",
    description: "Comprehensive review of your systems, infrastructure, and internal security controls.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />
  },
  {
    title: "Vulnerability Assessment",
    description: "Deep-scan identification of technical weaknesses and potential security threats.",
    icon: <Search className="h-8 w-8 text-primary" />
  },
  {
    title: "Risk Assessment Services",
    description: "In-depth business risk analysis and strategic mitigation planning for long-term safety.",
    icon: <ShieldAlert className="h-8 w-8 text-primary" />
  },
  {
    title: "Compliance Gap Analysis",
    description: "Evaluation of your current compliance readiness compared to industrial standards.",
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />
  },
  {
    title: "Data Protection Assessment",
    description: "Review of sensitive data handling, encryption, storage, and privacy protocols.",
    icon: <Lock className="h-8 w-8 text-primary" />
  },
  {
    title: "Cloud Security Audit",
    description: "Assessment of cloud configurations in AWS, Azure, or GCP for maximum protection.",
    icon: <Cloud className="h-8 w-8 text-primary" />
  },
  {
    title: "Security Policy Development",
    description: "Creation and review of robust security governance and internal policy frameworks.",
    icon: <FileText className="h-8 w-8 text-primary" />
  },
  {
    title: "Compliance Consulting",
    description: "Expert guidance on regulatory and industry-specific compliance requirements.",
    icon: <Landmark className="h-8 w-8 text-primary" />
  }
];

const assessmentAreas = [
  { title: "Network Security", icon: <Network className="h-5 w-5" /> },
  { title: "Application Security", icon: <LayoutGrid className="h-5 w-5" /> },
  { title: "Endpoint Security", icon: <Smartphone className="h-5 w-5" /> },
  { title: "Cloud Security", icon: <Cloud className="h-5 w-5" /> },
  { title: "Identity & Access", icon: <Fingerprint className="h-5 w-5" /> },
  { title: "Data Security", icon: <Database className="h-5 w-5" /> },
  { title: "Backup Controls", icon: <RefreshCcw className="h-5 w-5" /> },
  { title: "Security Monitoring", icon: <Eye className="h-5 w-5" /> },
  { title: "Infrastructure", icon: <Shield className="h-5 w-5" /> },
  { title: "Email Security", icon: <Mail className="h-5 w-5" /> },
  { title: "Vendor Risk", icon: <Users2 className="h-5 w-5" /> },
  { title: "Governance", icon: <ShieldCheck className="h-5 w-5" /> }
];

const complianceFocus = [
  { title: "Security Governance", desc: "Aligning IT strategies with business objectives and regulatory needs." },
  { title: "Data Privacy Controls", desc: "Implementing robust measures to protect personal and sensitive information." },
  { title: "Framework Alignment", desc: "Ensuring your organization meets ISO 27001, SOC2, and GDPR standards." },
  { title: "Risk Management", desc: "Continuous identification and mitigation of operational and technical risks." },
  { title: "Access Control", desc: "Strict verification and monitoring of user access to critical resources." },
  { title: "Incident Readiness", desc: "Building proactive response plans for rapid containment of security events." }
];

const assessmentProcess = [
  { step: "01", title: "Discovery & Scope", desc: "Defining the audit boundaries, critical assets, and compliance objectives." },
  { step: "02", title: "Infrastructure Review", desc: "A technical deep-dive into your hardware, software, and cloud setup." },
  { step: "03", title: "Security Assessment", desc: "Executing active vulnerability scanning and security control testing." },
  { step: "04", title: "Risk Analysis", desc: "Evaluating findings based on likelihood, impact, and business context." },
  { step: "05", title: "Compliance Evaluation", desc: "Mapping security posture against specific regulatory requirements." },
  { step: "06", title: "Final Reporting", desc: "Delivering prioritized remediation roadmaps and executive summaries." }
];

const deliverables = [
  { title: "Executive Report", desc: "High-level summary for leadership and stakeholders." },
  { title: "Risk Assessment", desc: "Detailed matrix of identified risks and impacts." },
  { title: "Vulnerability Audit", desc: "Technical breakdown of security flaws and patches." },
  { title: "Compliance Analysis", desc: "Gap analysis vs. specific industrial standards." },
  { title: "Remediation Roadmap", desc: "Prioritized step-by-step fix recommendations." },
  { title: "Security Roadmap", desc: "Long-term strategy for infrastructure hardening." }
];

const faqs = [
  {
    question: "What is a security audit?",
    answer: "A security audit is a systematic evaluation of your organization's technical infrastructure, policies, and practices. At ITLC India, our audits go beyond simple scanning; we conduct a deep-dive analysis into your network, applications, and data management workflows to ensure they meet global safety standards. This process helps identify hidden vulnerabilities, misconfigurations, and non-compliance issues that could be exploited by attackers, providing you with a clear roadmap to harden your digital perimeter."
  },
  {
    question: "Why does my business need a security assessment?",
    answer: "In an era of sophisticated cyber threats, a proactive security assessment is no longer optional—it's a business necessity. ITLC India's assessments help you stay ahead of attackers by identifying risks before they lead to costly breaches. Beyond protection, these assessments build trust with your clients and partners, showing them that you take data privacy seriously. They also prevent financial penalties associated with regulatory non-compliance, ensuring that your organization remains resilient and reputable."
  },
  {
    question: "What is included in a compliance review?",
    answer: "Our compliance review is a comprehensive service where we map your current IT operations against specific regulatory frameworks such as ISO 27001, GDPR, SOC2, or HIPAA. ITLC India's experts analyze your security policies, data encryption methods, access control logs, and incident response plans. We identify specific gaps where your organization falls short of mandatory standards and provide detailed technical and operational recommendations to achieve full compliance and certification readiness."
  },
  {
    question: "Can you assess cloud environments?",
    answer: "Yes, ITLC India specialized in auditing modern cloud-native and hybrid infrastructures. Whether you are using AWS, Microsoft Azure, or Google Cloud Platform, we conduct thorough reviews of your cloud configurations, IAM roles, storage bucket permissions, and network security groups. Cloud environments often have complex security layers that are easily misconfigured; our audit ensures that your cloud-based assets are as secure as your on-premise hardware, if not more."
  },
  {
    question: "Do you provide remediation recommendations?",
    answer: "Absolutely. We believe that an audit report is only as valuable as the actions it triggers. Every ITLC India security audit concludes with a detailed, prioritized remediation roadmap. We don't just list problems; we explain exactly how to fix them, providing technical guidance and strategic advice. Our team can also work alongside your internal IT department or provide our own specialized security engineering squads to implement the necessary patches and infrastructure improvements."
  },
  {
    question: "How often should security audits be conducted?",
    answer: "We recommend conducting a full security audit at least once a year. However, if your organization undergoes significant infrastructure changes, launches new applications, or migrates to the cloud, an immediate assessment is advised. Many compliance frameworks also require periodic audits to maintain certification. ITLC India offers ongoing security governance partnerships where we conduct regular quarterly vulnerability assessments to ensure your defenses evolve alongside the ever-changing global threat landscape."
  },
  {
    question: "Can audits help reduce cybersecurity risks?",
    answer: "Yes, systematic audits are the single most effective way to reduce your cybersecurity risk profile. By identifying and patching vulnerabilities, hardening network policies, and educating your workforce through the audit process, you significantly reduce the attack surface available to hackers. ITLC India's risk-based approach ensures that you focus your resources on the most critical threats first, creating a layered defense that makes it exponentially harder for breaches to occur or propagate."
  },
  {
    question: "Do you provide ongoing compliance consulting?",
    answer: "Yes, ITLC India provides long-term compliance and governance consulting services. Achieving compliance is often easier than maintaining it as regulations and your infrastructure evolve. We offer 'Compliance-as-a-Service' models where our consultants act as your external Data Protection Officers or Security Leads, providing monthly reviews, continuous policy updates, and employee awareness training. This ensures that your organization stays continuously compliant and ready for any unannounced external audits."
  }
];

const caseStudies = [
  {
    title: "Enterprise Security Audit",
    challenge: "A leading financial firm faced potential non-compliance and unpatched network vulnerabilities.",
    approach: "Full NIST-based security audit and infrastructure vulnerability assessment.",
    recommendations: "Implemented zero-trust architecture and hardened firewall policies.",
    outcome: "Achieved 100% compliance score and zero breaches since implementation."
  },
  {
    title: "Cloud Infrastructure Review",
    challenge: "Manufacturing client migrated to cloud with insecure storage and access controls.",
    approach: "Multi-account AWS security audit focused on IAM and S3 bucket protection.",
    recommendations: "Automated security scanning and strict role-based access control.",
    outcome: "Reduced risk exposure by 85% and optimized cloud security spend."
  }
];

export default function SecurityAuditCompliancePage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero 
        badge="Enterprise Security Intelligence"
        title={<>Strengthen Your Defense with <br /> <span className="text-primary">Professional Security Audits</span></>}
        description="ITLC INDIA helps organizations identify vulnerabilities, ensure industrial compliance, and build a resilient cybersecurity foundation through data-driven assessments."
        primaryCta={{ text: "Request Assessment", href: "/contact" }}
        secondaryCta={{ text: "Talk to Compliance Expert", href: "/contact" }}
        backgroundVideo="/vio/bg.mp4"
        illustration={
          <div className="relative group max-w-lg w-full">
            <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-slate-900 border-8 border-slate-800 rounded-[40px] shadow-2xl p-8 overflow-hidden aspect-square flex flex-col gap-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                        <div className="h-4 bg-white/10 rounded w-32" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Activity className="h-5 w-5 text-primary animate-pulse" />
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="flex justify-between items-end">
                        <div className="space-y-2">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Compliance Score</div>
                            <div className="text-4xl font-black text-green-500">98%</div>
                        </div>
                        <Fingerprint className="h-16 w-16 text-primary opacity-50" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Vulnerabilities</div>
                            <div className="text-xl font-bold text-red-400">0 High</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Last Audit</div>
                            <div className="text-xl font-bold text-white">Mar 2025</div>
                        </div>
                    </div>
                    <div className="h-24 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center p-4">
                        <div className="w-full space-y-2">
                            <div className="h-2 bg-white/10 rounded w-full" />
                            <div className="h-2 bg-white/10 rounded w-3/4" />
                            <div className="h-2 bg-primary/20 rounded w-1/2" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        }
      />

      {/* Section 1: Why it matters */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-sm font-bold border border-red-500/20">
                        <ShieldAlert className="h-4 w-4" /> <span>Proactive Protection</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-slate-900">
                        Protect Your Business From <br /> <span className="text-primary">Risks & Compliance Gaps</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Organizations face increasing cybersecurity threats and data privacy regulations. Regular security audits and compliance assessments help identify vulnerabilities, prevent breaches, and maintain customer trust.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        {[
                            { title: "Risk", desc: "Reduced Security Risks" },
                            { title: "Readiness", desc: "Compliance Preparedness" },
                            { title: "Privacy", desc: "Stronger Data Protection" },
                            { title: "Uptime", desc: "Enhanced Continuity" }
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
                            src="https://images.unsplash.com/photo-1550751827-41378a3d34ee?q=80&w=2070&auto=format&fit=crop" 
                            alt="Cybersecurity Operations" 
                            className="object-cover w-full h-full"
                            data-ai-hint="cybersecurity center"
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Section 2: Core Services */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Audit & Compliance Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">End-to-end security guidance tailored for every enterprise tier.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityServices.map((service, i) => (
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

      {/* Section 3: Assessment Areas Grid */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Security Areas We Assess</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">A multi-layered audit framework protecting every node in your organization.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {assessmentAreas.map((item, i) => (
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

      {/* Section 4: Compliance Focus */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Compliance & Governance Focus</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFocus.map((col, i) => (
              <Card key={i} className="border border-slate-100 shadow-sm bg-slate-50/50 hover:bg-white transition-all p-8 rounded-3xl">
                <div className="h-1 w-12 bg-primary rounded-full mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{col.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{col.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Industries */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {["Healthcare", "Education", "Manufacturing", "Real Estate", "Retail", "Finance", "Hospitality", "Logistics", "Technology", "Government"].map((ind, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white border border-slate-100 hover:bg-primary transition-all duration-500 shadow-sm">
                <span className="font-bold text-sm text-slate-800 group-hover:text-white">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Process */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Our Assessment Process</h2>
          </div>
          <div className="relative">
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 hidden lg:block -translate-y-1/2" />
             <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
                {assessmentProcess.map((step, i) => (
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

      {/* Section 8: Deliverables */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Audit Deliverables</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">Actionable insights and strategic roadmaps for your IT team.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <FileCheck className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Metrics */}
      <section className="py-24 bg-white">
          <div className="container max-w-screen-xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                  {[
                      { val: "250+", label: "Assessments Completed", icon: <ClipboardCheck className="h-8 w-8 text-primary" /> },
                      { val: "100+", label: "Organizations Supported", icon: <Users2 className="h-8 w-8 text-primary" /> },
                      { val: "98%", label: "Client Satisfaction", icon: <Trophy className="h-8 w-8 text-primary" /> },
                      { val: "20+", label: "Industry Verticals", icon: <Globe className="h-8 w-8 text-primary" /> }
                  ].map((stat, i) => (
                      <div key={i} className="space-y-4">
                          <div className="mx-auto w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center">{stat.icon}</div>
                          <div>
                              <div className="text-4xl font-black text-primary tracking-tighter">{stat.val}</div>
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Section 10: Case Studies */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Success Stories</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.map((study, i) => (
                    <Card key={i} className="border-none shadow-lg rounded-[40px] overflow-hidden bg-white hover:-translate-y-2 transition-all">
                        <div className="p-8 bg-slate-900 text-white">
                            <h4 className="text-xl font-bold leading-tight">{study.title}</h4>
                        </div>
                        <CardContent className="p-8 space-y-6">
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Challenge</p>
                                <p className="text-sm text-slate-700 font-medium">{study.challenge}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recommendations</p>
                                <p className="text-sm text-slate-700 font-medium">{study.recommendations}</p>
                            </div>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Impact</p>
                                <p className="text-lg font-black text-slate-900">{study.outcome}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <SeoFaq serviceName="Security Audit & Compliance" faqs={faqs} />

      {/* Final CTA */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="container relative z-10 max-w-screen-xl mx-auto px-6 space-y-10">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ready To Strengthen Your <br /> <span className="text-primary">Security Posture?</span></h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">Partner with ITLC INDIA to identify security risks, improve compliance readiness, and build a stronger foundation for your organization.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button asChild size="lg" className="rounded-full px-12 h-16 font-black text-xl shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1">
                    <Link href="/contact">Request Security Audit</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-16 border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-black text-xl transition-all hover:-translate-y-1">
                    <Link href="/contact">Schedule Consultation</Link>
                </Button>
            </div>

            <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto border-t border-white/10">
                <div className="flex items-center justify-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl"><Phone className="h-6 w-6 text-primary" /></div>
                    <div className="text-left"><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Call Us</p><p className="font-bold">+91 9532341000</p></div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl"><Mail className="h-6 w-6 text-primary" /></div>
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
