
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lock, Eye, ShieldAlert, Zap, Search, ArrowRight, Clock, Rocket, Smile, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';
import { SeoFaq } from "@/components/seo-faq";
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Advanced Security Solutions | ITLC INDIA PVT LTD',
  description: 'Enterprise-grade cybersecurity, SOC management, network hardening, and security audits by ITLC INDIA PVT LTD.',
}

const securityServices = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Managed SOC",
        description: "24/7 Security Operations Center monitoring your entire digital estate.",
        features: ["Threat hunting", "Incident response", "Real-time alerting", "SIEM management"],
    },
    {
        icon: <Lock className="h-8 w-8 text-primary" />,
        title: "Network Hardening",
        description: "Securing your digital perimeter with advanced firewall and zero-trust policies.",
        features: ["IPS/IDS deployment", "VPN & Secure Access", "DDoS protection", "Network segmentation"],
    },
    {
        icon: <Eye className="h-8 w-8 text-primary" />,
        title: "Penetration Testing",
        description: "Identifying vulnerabilities before attackers do with ethical hacking.",
        features: ["Web app testing", "Network audits", "Vulnerability scans", "Compliance reporting"],
    },
];

const advancedSecurityFaqs = [
  {
    question: "What are the benefits of Advanced Security Solutions for businesses?",
    answer: "Advanced security solutions from ITLC India provide a multi-layered defense mechanism that safeguards your enterprise against sophisticated cyber threats. By implementing cutting-edge threat intelligence and 24/7 monitoring, we ensure that your critical data remains secure and your operations stay uninterrupted. This proactive approach not only protects your assets but also builds trust with your customers and partners, ensuring long-term business continuity and a robust digital reputation in an increasingly hostile online environment."
  },
  {
    question: "Why choose ITLC India for Advanced Security Solutions?",
    answer: "ITLC India is a leader in cybersecurity with over a decade of experience protecting government and enterprise systems. Our team of certified security experts uses a 'Security by Design' philosophy, integrating protection into every layer of your infrastructure. We provide tailored security frameworks that comply with global standards like ISO and MSME regulations. With ITLC India, you get a dedicated security partner committed to staying ahead of emerging threats, providing you with peace of mind and ironclad digital defense."
  },
  {
    question: "How much does Advanced Security Solutions cost in India?",
    answer: "The cost of advanced security solutions in India varies significantly based on the scale of your infrastructure, the complexity of your requirements, and the level of monitoring needed. At ITLC India, we offer flexible pricing models starting from basic security audits to comprehensive 24/7 SOC management. We focus on providing high ROI by identifying and mitigating risks before they become costly breaches. Contact our compliance team for a customized quote tailored to your specific business needs and risk profile."
  },
  {
    question: "How long does it take to implement Advanced Security Solutions?",
    answer: "Implementation timelines depend on the scope of the project. A standard security audit and initial hardening can take 2-4 weeks, while the deployment of a full Security Operations Center (SOC) and Zero Trust architecture may take 3-6 months. ITLC India follows a phased implementation approach to ensure that security measures are deployed systematically without disrupting your ongoing business operations, allowing for gradual integration and thorough testing of all security protocols."
  },
  {
    question: "What technologies are used for Advanced Security Solutions?",
    answer: "ITLC India utilizes an industry-leading technology stack for advanced security, including AI-powered SIEM (Security Information and Event Management) tools, next-generation firewalls (NGFW), and automated endpoint detection and response (EDR) systems. We leverage cloud-native security features from AWS, Azure, and Google Cloud, combined with proprietary threat intelligence algorithms. Our focus is on integrating best-of-breed technologies that provide real-time visibility, automated response capabilities, and deep forensic analysis to protect your digital estate."
  },
  {
    question: "Do you provide support and maintenance after deployment?",
    answer: "Yes, ITLC India provides comprehensive post-deployment support and 24/7 continuous monitoring for all our advanced security solutions. Cyber threats are constantly evolving, and our maintenance services include regular security patches, periodic vulnerability assessments, and ongoing threat intelligence updates. We offer managed security services that act as an extension of your IT team, providing expert guidance, incident response, and performance tuning to ensure your defenses remain impenetrable and efficient in the long run."
  }
];

export default function AdvancedSecuritySolutionsPage() {
  return (
    <>
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4">
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-[76px] text-white leading-tight">
            Ironclad Cybersecurity <br /> <span className="text-primary">For the Modern Enterprise</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-base text-white/80 md:text-lg lg:text-2xl">
            Protect your assets, data, and reputation with advanced security frameworks and proactive monitoring that evolves with modern threats.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold shadow-2xl transition-all hover:-translate-y-1">
              <Link href="/contact">Get a Security Audit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white font-bold transition-all hover:-translate-y-1">
              <Link href="/services">View Frameworks</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">Security Pillars</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Proactive protection across every layer of your technology ecosystem.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {securityServices.map((service) => (
              <Card key={service.title} className="flex flex-col border-border/50 shadow-sm hover:shadow-xl transition-all">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                        <CheckCircle className="h-4 w-4 text-primary" />
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

      <SeoFaq serviceName="Advanced Security Solutions" faqs={advancedSecurityFaqs} />

      <section className="py-24 bg-red-950 text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
                <ShieldAlert className="h-16 w-16 text-primary mx-auto" />
                <h2 className="text-3xl font-bold">Don't Wait for a Breach</h2>
                <p className="text-red-100 text-lg">In today's digital landscape, security is not an option—it's a foundation. Our experts implement Zero Trust Architectures to ensure your data stays where it belongs.</p>
                <Button asChild size="lg" className="rounded-full bg-white text-red-950 hover:bg-slate-100">
                    <Link href="/contact">Speak to a Security Officer</Link>
                </Button>
            </div>
        </div>
      </section>
    </>
  );
}
