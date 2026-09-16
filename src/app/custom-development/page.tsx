import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Globe, Smartphone, Link as LinkIcon, Rocket, Building, ShoppingCart, Banknote, GraduationCap, ArrowRight, Clock, Smile, BarChart, Shield, Users, CheckCircle, Bot } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SeoFaq } from '@/components/seo-faq';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Custom Software Development | ITLC INDIA PVT LTD',
  description: 'Bespoke software development solutions including web apps, mobile apps, and API integrations tailored to your business requirements by ITLC INDIA PVT LTD.',
}

const whatWeBuild = [
    {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "Web Applications",
        description: "Robust, scalable, and secure web applications using modern technologies.",
        features: [
            "React & Next.js frontends",
            "Node.js & Python backends",
            "Cloud hosting & DevOps",
            "Enterprise-grade security",
        ],
    },
    {
        icon: <Smartphone className="h-8 w-8 text-primary" />,
        title: "Mobile Applications",
        description: "Engaging native or cross-platform mobile apps for iOS and Android.",
        features: [
            "Flutter & React Native",
            "Native iOS & Android",
            "App Store deployment",
            "Performance optimization",
        ],
    },
    {
        icon: <LinkIcon className="h-8 w-8 text-primary" />,
        title: "API & System Integrations",
        description: "Custom APIs and third-party integrations to streamline operations.",
        features: [
            "Payment gateway setup",
            "CRM & ERP integration",
            "REST & GraphQL APIs",
            "Automation workflows",
        ],
    },
];

const customDevFaqs = [
  {
    question: "What are the benefits of Custom Software Development for businesses?",
    answer: "Custom software development allows businesses to build tools that align perfectly with their unique operational requirements, providing a competitive edge that off-the-shelf software cannot match. ITLC India helps enterprises eliminate manual work, improve data accuracy, and integrate disparate systems into a unified platform. This results in significant efficiency gains, reduced long-term costs, and the flexibility to scale features as the business grows, ensuring that your technology investment always supports your strategic goals."
  },
  {
    question: "Why choose ITLC India for Custom Software Development?",
    answer: "Partnering with ITLC India means gaining access to a decade of experience in building secure, enterprise-grade software. We prioritize performance, security, and scalability in every project. Our dedicated team of developers uses modern frameworks like Next.js and Node.js to deliver high-quality code. We offer a transparent development process, dedicated project managers, and a commitment to delivering solutions on time and within budget, ensuring a high-value outcome for your investment."
  },
  {
    question: "How much does Custom Software Development cost in India?",
    answer: "The cost of custom software development at ITLC India is highly dependent on the project scope, feature complexity, and required integrations. We provide fixed-price quotes for well-defined projects and flexible engagement models for evolving requirements. Our Indian-based development center allows us to offer world-class quality at competitive global rates. We focus on providing high ROI by building robust systems that reduce operational overhead and drive business growth through technology."
  },
  {
    question: "How long does the development process take?",
    answer: "Timeline for custom software varies based on complexity. A standard Minimum Viable Product (MVP) can be delivered in 8-12 weeks, while complex enterprise platforms may take 6 months or more. ITLC India follows an agile methodology, providing functional builds every few weeks so you can track progress and provide feedback. This ensures that the final product meets your exact specifications and allows for course correction as project requirements are refined."
  },
  {
    question: "What technology stack do you use for custom solutions?",
    answer: "We use a modern and versatile technology stack tailored to the project needs. For web apps, we favor Next.js, React, and Tailwind CSS. For backends, we utilize Node.js, Python, and Go, combined with high-performance databases like PostgreSQL or MongoDB. We also specialize in Flutter and React Native for mobile apps. Our cloud infrastructure is built on AWS and Azure, incorporating the latest in AI and machine learning integrations where relevant."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, ITLC India offers comprehensive post-launch support and maintenance packages. Software requires regular updates for security, performance tuning, and compatibility with new operating systems. We provide dedicated support teams to handle bug fixes, feature enhancements, and server management. Our goal is to be your long-term technology partner, ensuring your custom software remains a reliable and powerful asset as your business evolves over time."
  }
];

const whoIsThisFor = [
    { icon: <Rocket className="h-8 w-8" />, name: "Startups building MVPs" },
    { icon: <Building className="h-8 w-8" />, name: "Enterprises modernizing" },
    { icon: <ShoppingCart className="h-8 w-8" />, name: "E-commerce platforms" },
    { icon: <Banknote className="h-8 w-8" />, name: "Fintech solutions" },
    { icon: <GraduationCap className="h-8 w-8" />, name: "Education platforms" },
];

export default function CustomDevelopmentPage() {
  return (
    <>
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[76px] text-white leading-tight">
            Custom Software Development by <br /> <span className="text-primary">ITLC INDIA PVT LTD</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base text-white/80 md:text-lg lg:text-2xl">
            Bring your unique ideas to life with bespoke software development services, built exactly to your business requirements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-primary text-white shadow-xl hover:bg-primary/90 transition-all hover:-translate-y-1 h-14 px-8">
              <Link href="/services">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-white/10 text-white border-white/20 backdrop-blur-md hover:bg-white/20 transition-all hover:-translate-y-1 h-14 px-8">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">What We Build</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {whatWeBuild.map((service) => (
              <Card key={service.title} className="flex flex-col border-border/50 shadow-sm hover:shadow-xl transition-all">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full rounded-full border-primary/20 hover:border-primary text-primary group">
                    <Link href="/contact" className="flex items-center gap-2">
                      Get in Touch <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SeoFaq serviceName="Custom Software Development" faqs={customDevFaqs} />

      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl mb-16">Who Is This For?</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            {whoIsThisFor.map((who) => (
              <div key={who.name} className="flex flex-col items-center gap-4 group">
                <div className="p-5 bg-white/10 rounded-2xl border border-white/10 group-hover:bg-primary transition-all">
                  {React.cloneElement(who.icon as React.ReactElement<any>, { className: "h-8 w-8 text-white" })}
                </div>
                <p className="font-bold text-sm tracking-tight">{who.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl text-foreground">Why Choose ITLC INDIA PVT LTD?</h2>
            <p className="mt-4 text-muted-foreground">A decade of trust and technology excellence.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock className="h-8 w-8" />, value: "10+", label: "Years Experience" },
              { icon: <Rocket className="h-8 w-8" />, value: "250+", label: "Projects Delivered" },
              { icon: <Smile className="h-8 w-8" />, value: "120+", label: "Happy Clients" },
              { icon: <BarChart className="h-8 w-8" />, value: "99.9%", label: "Success Rate" },
            ].map((stat, i) => (
              <Card key={i} className="text-center p-8 bg-white border-none shadow-sm hover:shadow-md transition-all">
                <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
