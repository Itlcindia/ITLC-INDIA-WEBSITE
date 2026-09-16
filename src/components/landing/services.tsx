
"use client";

import { BrainCircuit, CodeXml, BarChart3, PenTool, ArrowRight, GraduationCap, Megaphone, ShieldCheck, Cloud, Network, Server, Zap } from 'lucide-react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { motion } from "framer-motion";

const services = [
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "Intelligent AI workflows, custom ML models, and generative solutions for the modern enterprise.",
    link: "/ai-automation-services",
  },
  {
    icon: CodeXml,
    title: "Product & Development",
    description: "Enterprise CRM/ERP systems and bespoke software tailored to your specific business requirements.",
    link: "/custom-development",
  },
  {
    icon: ShieldCheck,
    title: "Security Solutions",
    description: "Advanced cybersecurity, network hardening, and compliance audits for mission-critical systems.",
    link: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud & Datacentre",
    description: "Scalable cloud migration, infrastructure consulting, and software-defined data centres.",
    link: "/technology-and-ai-consulting",
  },
  {
    icon: Network,
    title: "Infrastructure Solutions",
    description: "Campus-wide networking, WiFi solutions, and enterprise-grade surveillance systems.",
    link: "/services",
  },
  {
    icon: BarChart3,
    title: "Digital Growth",
    description: "Data-driven marketing, SEO strategy, and performance-based lead generation.",
    link: "/digital-marketing",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">What We Offer</h2>
          <p className="max-w-3xl text-muted-foreground md:text-xl">
            Empowering your success with a comprehensive suite of enterprise-grade IT and infrastructure solutions.
          </p>
        </motion.div>
        
        <motion.div 
          className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:grid-cols-3 lg:max-w-none lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.title} 
                variants={cardVariants} 
                className="h-full"
              >
                <Card className="h-full flex flex-col group transition-all duration-300 hover:shadow-2xl border-border/50">
                  <Link href={service.link} className="flex flex-col flex-grow">
                    <CardHeader>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                          <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                  </Link>
                  <CardFooter>
                      <Button asChild variant="outline" className="w-full rounded-full font-bold group border-primary/20 hover:border-primary text-primary hover:text-white hover:bg-primary">
                          <Link href={service.link}>
                              Explore Solutions <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                      </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button asChild size="lg" className="rounded-full px-12 font-bold shadow-xl">
            <Link href="/services">View Comprehensive Service List</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
