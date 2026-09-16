import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Brain, Palette, Beaker, Globe, Smartphone, Monitor, ShoppingCart, CaseLower, ArrowRight, Star, BarChart, ThumbsUp, Heart, Target, Clock, Rocket, Smile, Shield, Users, Bot, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'UI/UX Design Services | ITLC INDIA PVT LTD',
  description: 'Elevate user experience with professional UI/UX design services by ITLC INDIA PVT LTD. We create visually stunning and intuitive interfaces for web and mobile applications.',
}

const uiUxServices = [
    {
        icon: <Brain className="h-8 w-8 text-primary" />,
        title: "User Experience (UX) Design",
        description: "User-centric flows based on in-depth research and analysis.",
        features: [
            "User research & personas",
            "Customer journey mapping",
            "Wireframes & flow design",
            "Usability-focused layouts",
        ],
    },
    {
        icon: <Palette className="h-8 w-8 text-primary" />,
        title: "User Interface (UI) Design",
        description: "Visually stunning, brand-consistent, and engaging interfaces.",
        features: [
            "Modern dashboard designs",
            "Mobile & web app UI",
            "Brand color & typography usage",
            "Pixel-perfect layouts",
        ],
    },
    {
        icon: <Beaker className="h-8 w-8 text-primary" />,
        title: "Prototyping & Testing",
        description: "Validating designs through real user feedback.",
        features: [
            "Clickable prototypes (Figma)",
            "User testing sessions",
            "Design improvements",
            "Final design validation",
        ],
    },
];

const platforms = [
    { icon: <Globe className="h-8 w-8 text-primary" />, name: "Websites" },
    { icon: <Smartphone className="h-8 w-8 text-primary" />, name: "Mobile Apps (Android & iOS)" },
    { icon: <Monitor className="h-8 w-8 text-primary" />, name: "SaaS Dashboards" },
    { icon: <ShoppingCart className="h-8 w-8 text-primary" />, name: "E-commerce Platforms" },
    { icon: <CaseLower className="h-8 w-8 text-primary" />, name: "Enterprise Systems" },
];

const designProcess = [
    { name: "Requirement & Business Understanding", description: "Analyzing goals, target audience, and project scope." },
    { name: "User Research & Flow Design", description: "Creating user personas, journey maps, and initial user flows." },
    { name: "Wireframes & UI Concepts", description: "Developing low-fidelity wireframes and high-fidelity UI mockups." },
    { name: "Prototype & Testing", description: "Building interactive prototypes for user testing and feedback sessions." },
    { name: "Final Design Handover", description: "Delivering developer-ready assets, style guides, and design systems." },
];

const stats = [
    { icon: <Clock className="h-8 w-8" />, value: "10+", label: "Years Experience" },
    { icon: <Rocket className="h-8 w-8" />, value: "250+", label: "Projects Delivered" },
    { icon: <Smile className="h-8 w-8" />, value: "120+", label: "Happy Clients" },
    { icon: <BarChart className="h-8 w-8" />, value: "99.9%", label: "Project Success Rate" },
];

const valueProps = [
    { icon: <Bot className="h-8 w-8" />, title: "AI-First Approach", description: "Smart automation and data-driven solutions." },
    { icon: <Shield className="h-8 w-8" />, title: "Enterprise-Grade Security", description: "Secure cloud and compliance-ready systems." },
    { icon: <Users className="h-8 w-8" />, title: "Dedicated Project Teams", description: "Agile squads for faster delivery." },
    { icon: <CheckCircle className="h-8 w-8" />, title: "End-to-End Support", description: "From planning to post-launch growth." },
];


export default function UiUxDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl leading-tight">
            UI/UX Design by ITLC INDIA PVT LTD
          </h1>
          <p className="mt-4 max-w-3xl mx-auto px-4 text-base text-white/80 md:text-lg">
            We design intuitive and beautiful user interfaces that deliver exceptional user experience and achieve business goals.
          </p>
          <p className="mt-4 font-semibold text-cyan-300">
            Better Design. Better Engagement. Better Results.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/services">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link href="/contact">Get Free Design Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Good UI/UX Matters Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
              Why Good UI/UX Matters?
            </h2>
             <p className="mt-4 max-w-2xl mx-auto text-lg text-[#333333]">Good design = Better business 📈</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center gap-2"><Star className="h-8 w-8 text-green-500" /><h3 className="font-semibold text-lg">Users stay longer</h3></div>
            <div className="flex flex-col items-center gap-2"><BarChart className="h-8 w-8 text-green-500" /><h3 className="font-semibold text-lg">Higher conversion rates</h3></div>
            <div className="flex flex-col items-center gap-2"><ThumbsUp className="h-8 w-8 text-green-500" /><h3 className="font-semibold text-lg">Fewer user complaints</h3></div>
            <div className="flex flex-col items-center gap-2"><Heart className="h-8 w-8 text-green-500" /><h3 className="font-semibold text-lg">Strong brand perception</h3></div>
            <div className="flex flex-col items-center gap-2"><Target className="h-8 w-8 text-green-500" /><h3 className="font-semibold text-lg">Better customer satisfaction</h3></div>
          </div>
        </div>
      </section>

      {/* Our UI/UX Services Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
              Our UI/UX Services
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {uiUxServices.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-[#333333] mb-4">{service.description}</p>
                  <ul className="space-y-2 text-sm flex-grow">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                   <div className="mt-6">
                        <Button asChild variant="outline" className="w-full bg-gradient-to-r from-[#00aaff] to-[#0088cc] text-white font-semibold rounded-lg px-6 py-3 shadow-md hover:from-[#33c4ff] hover:to-[#0077aa] hover:shadow-lg transition transform hover:-translate-y-1">
                            <Link href="/contact">
                                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms We Design For Section */}
      <section className="py-16 bg-[#292019] text-primary-foreground">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Platforms We Design For
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex flex-col items-center gap-3 transform hover:scale-110 transition-transform duration-300">
                {React.cloneElement(platform.icon, { className: "h-8 w-8 text-primary-foreground"})}
                <p className="font-semibold">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
                    Our Design Process
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5f6f86]">
                    From idea to launch — we build secure, scalable, and future-ready solutions.
                </p>
            </div>
            <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00b4ff] to-[#0077ff] hidden md:block"></div>
                {designProcess.map((step, index) => (
                    <div key={index} className={`flex items-center w-full mb-8 md:mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        <div className="hidden md:flex w-5/12"></div>
                        <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#0077ff] shadow-lg">
                           <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b4ff] to-[#0077ff] flex items-center justify-center text-white font-bold">
                                {String(index + 1).padStart(2, '0')}
                           </div>
                        </div>
                        <div className="w-full md:w-5/12 px-4 md:px-8">
                            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <h3 className="font-bold text-lg text-[#0b1f3a] mb-2">{step.name}</h3>
                                <p className="text-[#5f6f86] text-sm">{step.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#00b4ff] to-[#0077ff] text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all">
                    <Link href="/contact">Start Your Project with ITLC</Link>
                </Button>
            </div>
        </div>
    </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
          <div className="max-w-screen-xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
                      Why Choose ITLC INDIA PVT LTD?
                  </h2>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5f6f86]">
                      A decade of innovation, trust, and technology excellence.
                  </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                  {stats.map((stat, index) => (
                      <div key={index} className="text-center p-6 bg-[#f8fbff] rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                          <div className="inline-block relative mb-4 text-primary">
                              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-lg transition-all duration-300 group-hover:opacity-40 group-hover:scale-110"></div>
                              <div className="relative inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20">
                                  {stat.icon}
                              </div>
                          </div>
                          <p className="text-4xl font-bold bg-gradient-to-r from-[#00aaff] to-[#0088cc] bg-clip-text text-transparent mb-1">{stat.value}</p>
                          <p className="text-sm font-medium text-[#5f6f86]">{stat.label}</p>
                      </div>
                  ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {valueProps.map((prop, index) => (
                      <div key={index} className="group relative p-8 bg-[#f8fbff] rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                          <div className="absolute -inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300">
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00b4ff] to-[#0077ff] opacity-0 group-hover:opacity-10 blur-xl"></div>
                          </div>
                          <div className="relative text-center">
                              <div className="inline-block relative mb-4 text-primary">
                                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-lg transition-all duration-300 group-hover:opacity-40 group-hover:scale-110"></div>
                                  <div className="relative inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20">
                                      {prop.icon}
                                  </div>
                              </div>
                              <h3 className="text-xl font-bold text-[#0b1f3a] mb-2">{prop.title}</h3>
                              <p className="text-[#5f6f86]">{prop.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl mb-4">
            About ITLC INDIA PVT LTD
          </h2>
          <p className="text-lg text-[#333333]">
            ITLC INDIA PVT LTD provides UI/UX design, AI solutions, software development, and digital services to help businesses build world-class digital products.
          </p>
          <p className="mt-4 font-semibold text-[#33c4ff]">We design with purpose, not just beauty.</p>
        </div>
      </section>
    </>
  );
}
