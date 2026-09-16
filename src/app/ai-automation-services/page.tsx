
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Cog, FileText, Bot, Building, HeartPulse, GraduationCap, ShoppingCart, Banknote, Factory, ArrowRight, Clock, Rocket, Smile, BarChart, Shield, CheckCircle, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SeoFaq } from "@/components/seo-faq";
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

const solutions = [
  {
    icon: <Cog className="h-8 w-8 text-primary" />,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks and connect all your apps to work seamlessly.",
    features: [
      "Auto task assignments",
      "Approval workflows",
      "CRM, ERP & API integrations",
      "Zero manual follow-ups",
    ],
    result: "Faster processes & fewer errors",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Intelligent Document Processing",
    description: "Extract and process data from documents automatically with AI.",
    features: [
      "OCR + AI data extraction",
      "PDFs, invoices & resumes",
      "Auto validation systems",
      "Compliance-ready reports",
    ],
    result: "Save hours of manual data entry",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI-Powered Chatbots",
    description: "Automate customer support, sales, and lead qualification 24/7.",
    features: [
      "Website & WhatsApp bots",
      "Natural Language Processing",
      "Lead generation flows",
      "CRM integrated chats",
    ],
    result: "Higher conversions, lower costs",
  },
];

const industries = [
    { icon: <Building className="h-8 w-8" />, name: "Enterprises & SMEs" },
    { icon: <HeartPulse className="h-8 w-8" />, name: "Healthcare" },
    { icon: <GraduationCap className="h-8 w-8" />, name: "Education" },
    { icon: <ShoppingCart className="h-8 w-8" />, name: "E-commerce" },
    { icon: <Banknote className="h-8 w-8" />, name: "Finance & Insurance" },
    { icon: <Factory className="h-8 w-8" />, name: "Manufacturing" },
];

const aiAutomationFaqs = [
  {
    question: "What are the benefits of AI Automation Services for businesses?",
    answer: "AI Automation Services from ITLC India enable businesses to scale operations without a linear increase in headcount. By automating repetitive, data-intensive tasks, organizations can significantly reduce operational costs, minimize human error, and accelerate time-to-market. Our AI solutions provide 24/7 efficiency, allowing your human talent to focus on high-value creative and strategic initiatives. This digital transformation leads to improved customer experiences through faster response times and more personalized interactions, ultimately driving higher ROI and sustainable competitive advantage."
  },
  {
    question: "Why choose ITLC India for AI Automation Services?",
    answer: "Choosing ITLC India means partnering with an innovation-driven team that has been at the forefront of digital transformation since 2015. We don't just provide off-the-shelf bots; we build custom AI agents tailored to your specific industry workflows. Our approach combines deep technical expertise in machine learning with a practical understanding of business operations. We ensure that our AI automation is secure, scalable, and easy to integrate with your existing CRM and ERP systems, providing a seamless transition to a smarter workplace."
  },
  {
    question: "How much does AI Automation Services cost in India?",
    answer: "The investment for AI automation varies based on the complexity of the workflows being automated and the volume of data processed. ITLC India offers competitive pricing starting from pilot projects for small automation tasks to enterprise-wide automation strategies. We focus on transparency and value, ensuring that every automation project we undertake has a clear path to profitability. Our solutions often pay for themselves within months through saved labor hours and increased throughput. Contact us for a detailed feasibility study and cost-benefit analysis."
  },
  {
    question: "How long does it take to implement AI Automation Services?",
    answer: "A typical AI automation project at ITLC India begins with a discovery phase of 1-2 weeks. Initial automation prototypes can be deployed within 4-6 weeks, allowing for early feedback and quick wins. Full-scale enterprise automation workflows usually take 3-5 months for complete integration and testing. We use an agile development methodology, ensuring that you see progress at every stage and that the final solution perfectly aligns with your evolving business requirements and operational goals."
  },
  {
    question: "What technologies are used for AI Automation Services?",
    answer: "ITLC India utilizes a robust technology stack for AI automation, including Python, TensorFlow, and PyTorch for machine learning models. We leverage advanced Generative AI APIs from OpenAI and Google Gemini, combined with RAG (Retrieval-Augmented Generation) for accurate data handling. For process automation, we use specialized RPA tools and custom middleware to connect with legacy systems. Our cloud integrations are powered by AWS and Azure, ensuring that your automated workflows are resilient, high-performing, and geographically distributed for maximum uptime."
  },
  {
    question: "Do you provide support and maintenance after deployment?",
    answer: "Absolutely. ITLC India provides ongoing support and maintenance to ensure your AI automation workflows continue to perform at peak efficiency. As your business data changes and technology evolves, we provide regular model fine-tuning, performance monitoring, and security updates. Our support team is available 24/7 to handle any technical issues, and we provide proactive optimization suggestions to help you further scale your automated operations as your business grows and your requirements become more complex."
  }
];

export default function AiAutomationServicesPage() {
  return (
    <>
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />

        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-[76px] text-white max-w-5xl mx-auto leading-tight">
              AI Automation Services by <br /> <span className="text-primary">ITLC INDIA PVT LTD</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-base text-white/70 md:text-lg lg:text-2xl leading-relaxed">
              Automate your business processes using AI-powered solutions to save time, reduce costs, and boost productivity.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-2xl transition-all hover:-translate-y-1">
                <Link href="/contact">Get Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 font-bold text-lg transition-all hover:-translate-y-1">
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">Our AI Automation Solutions</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {solutions.map((solution) => (
              <Card key={solution.title} className="flex flex-col border-border/50 shadow-sm hover:shadow-xl transition-all">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full rounded-full border-primary/20 hover:border-primary text-primary group">
                    <Link href="/contact" className="flex items-center gap-2">
                      Get Started <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SeoFaq serviceName="AI Automation Services" faqs={aiAutomationFaqs} />

      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl mb-16">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12">
            {industries.map((industry) => (
              <div key={industry.name} className="flex flex-col items-center gap-4 group">
                <div className="p-5 bg-white/10 rounded-2xl border border-white/10 group-hover:bg-primary transition-all">
                  {React.cloneElement(industry.icon as React.ReactElement<any>, { className: "h-8 w-8 text-white" })}
                </div>
                <p className="font-bold text-sm tracking-tight">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">Why Choose Our AI Solutions?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Bot className="h-8 w-8" />, title: "AI-First Approach", text: "Smart automation built-in." },
              { icon: <Shield className="h-8 w-8" />, title: "Secure Systems", text: "Enterprise-grade protection." },
              { icon: <Users className="h-8 w-8" />, title: "Dedicated Teams", text: "Agile expert squads." },
              { icon: <CheckCircle className="h-8 w-8" />, title: "24/7 Support", text: "Continuous optimization." },
            ].map((prop, i) => (
              <div key={i} className="space-y-4">
                <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary border border-primary/20">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-bold">{prop.title}</h3>
                <p className="text-muted-foreground text-sm">{prop.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
