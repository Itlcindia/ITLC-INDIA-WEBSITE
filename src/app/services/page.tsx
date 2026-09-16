
"use client";

import { CodeXml, PenTool, CloudCog, BarChart3, Palette, BrainCircuit, Smartphone, Globe, Headset, Shield, Megaphone, Users as UsersIcon, GraduationCap, Server, ShieldCheck, Cloud, Cpu, Lock, Network, Terminal, Zap, LayoutGrid, Settings, Box, Bot } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

const services = [
    {
        id: "product-development",
        title: "Product & Development",
        description: "Transforming ideas into high-performance software products with enterprise-grade architectures.",
        image: "/ser/1.png",
        imageHint: "saas dashboard",
        link: "/custom-development",
        features: [
            { icon: <Box className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "CRM & ERP Systems", description: "Custom-built platforms for seamless business operations." },
            { icon: <CodeXml className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "SaaS & Web Apps", description: "Scalable cloud-native applications for global markets." },
            { icon: <Smartphone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Mobile Development", description: "Intuitive native and cross-platform mobile experiences." },
        ]
    },
    {
        id: "ai-automation",
        title: "AI & Automation",
        description: "Leverage artificial intelligence to automate complex workflows and gain data-driven insights.",
        image: "/ser/8.png",
        imageHint: "AI automation",
        link: "/ai-automation-services",
        features: [
            { icon: <BrainCircuit className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Process Automation", description: "Eliminate repetitive tasks with smart AI workflows." },
            { icon: <Bot className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Generative AI", description: "Custom LLM integrations and generative solutions." },
            { icon: <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Intelligent Chatbots", description: "Advanced NLP bots for automated communication." },
        ]
    },
    {
        id: "design-creative",
        title: "Design & Creative",
        description: "Crafting visually stunning and highly functional brand identities and user experiences.",
        image: "/ser/9.png",
        imageHint: "design wireframe",
        link: "/ui-ux-design",
        features: [
            { icon: <Palette className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "UI/UX Design", description: "Intuitive interfaces designed for maximum engagement." },
            { icon: <PenTool className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Logo & Branding", description: "Creating iconic brands with consistent visual language." },
            { icon: <LayoutGrid className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Corporate Identity", description: "End-to-end design systems for enterprise brands." },
        ]
    },
    {
        id: "digital-growth",
        title: "Digital Growth",
        description: "Data-driven marketing and strategy to amplify your presence and drive measurable ROI.",
        image: "/ser/10.png",
        imageHint: "marketing chart",
        link: "/digital-marketing",
        features: [
            { icon: <BarChart3 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Digital Marketing & SEO", description: "Dominating search results and driving organic growth." },
            { icon: <Megaphone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Performance Marketing", description: "Strategic paid campaigns optimized for conversion." },
            { icon: <Terminal className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Political Campaigns", description: "Strategic digital outreach for modern leadership." },
        ]
    },
    {
        id: "enterprise-it",
        title: "Enterprise IT Solutions",
        description: "Comprehensive IT support and consulting to keep your business running smoothly.",
        image: "/ser/12.png",
        imageHint: "it support team working",
        link: "/contact",
        features: [
            { icon: <Headset className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Managed IT Services", description: "Proactive monitoring and 24/7 technical support." },
            { icon: <Settings className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "IT Consulting", description: "Strategic planning for your technology ecosystem." },
            { icon: <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "AI HR Training", description: "Modernizing HR operations with advanced AI tools." },
        ]
    },
    {
        id: "security-solutions",
        title: "Security Solutions",
        description: "Protecting your enterprise from evolving digital threats with advanced security frameworks.",
        image: "/ser/5.png",
        imageHint: "security center",
        link: "/contact",
        features: [
            { icon: <ShieldCheck className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Advanced Security", description: "End-to-end protection for data and applications." },
            { icon: <Lock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Network Security", description: "Hardening your digital perimeter against attacks." },
            { icon: <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Audit & Compliance", description: "Ensuring regulatory and industrial security compliance." },
        ]
    },
    {
        id: "cloud-dc",
        title: "Cloud & Datacentre",
        description: "Modernizing infrastructure with scalable cloud solutions and software-defined data centres.",
        image: "/ser/2.png",
        imageHint: "server room",
        link: "/technology-and-ai-consulting",
        features: [
            { icon: <Cloud className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Cloud Consulting", description: "Expert migration and optimization strategies." },
            { icon: <Server className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Software Defined DC", description: "Efficient and flexible data centre architectures." },
            { icon: <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Business Continuity", description: "Disaster recovery and resilient systems." },
        ]
    },
    {
        id: "infrastructure",
        title: "Infrastructure Solutions",
        description: "Building the physical and digital foundation for a connected and secure campus.",
        image: "/ser/7.png",
        imageHint: "networking site",
        link: "/contact",
        features: [
            { icon: <Cpu className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "End User Computing", description: "Managed workspace and device solutions." },
            { icon: <LayoutGrid className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "CCTV & Surveillance", description: "Smart monitoring and perimeter security." },
            { icon: <Network className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Campus Networking", description: "Robust wired and WiFi infrastructure." },
        ]
    },
];

export default function ServicesPage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
    <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              Enterprise Technology & <br/> <span className="text-primary">Infrastructure Solutions</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Leading the way in AI, Software, Security, and Modern Infrastructure since 2015.
            </p>
            <div className="mt-8">
               <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all">
                  <Link href="/contact">Book Strategy Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-4 space-y-32">
            {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className="grid gap-12 md:grid-cols-2 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
            >
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl"></div>
                <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="relative w-full h-auto rounded-2xl object-cover shadow-2xl border-4 border-background/10"
                    data-ai-hint={service.imageHint}
                />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="space-y-6">
                        <h2 className="font-bold text-3xl tracking-tight">{service.title}</h2>
                        <p className="text-lg text-muted-foreground">{service.description}</p>
                        <div className="grid gap-6">
                            {service.features.map(feature => (
                                <div key={feature.title} className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                                    {feature.icon}
                                    <div>
                                        <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {service.link && (
                        <Button asChild className="mt-4 rounded-full bg-primary text-primary-foreground font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all">
                            <Link href={service.link}>Learn More About {service.title}</Link>
                        </Button>
                        )}
                    </div>
                </div>
            </motion.div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container max-w-screen-xl mx-auto px-4">
           <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a custom enterprise solution?</h2>
           <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Our team of experts is ready to help you navigate your digital transformation journey.</p>
           <Button asChild size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100">
             <Link href="/contact">Talk to our experts</Link>
           </Button>
        </div>
      </section>
    </>
  );
}
