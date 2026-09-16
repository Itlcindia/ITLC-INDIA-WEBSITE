
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Zap, 
  CreditCard, 
  Phone, 
  Clock, 
  Timer, 
  TrendingUp,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const automationCards = [
  { icon: <Users className="h-6 w-6" />, title: "CRM & Lead Automation" },
  { icon: <MessageSquare className="h-6 w-6" />, title: "Chatbot Automation" },
  { icon: <Zap className="h-6 w-6" />, title: "Sales Funnel Optimization" },
  { icon: <CreditCard className="h-6 w-6" />, title: "Appointment & Payment Automation" },
];

const stats = [
  { icon: <Clock className="h-5 w-5" />, text: "50% Reduction in Manual Work" },
  { icon: <Zap className="h-5 w-5" />, text: "2× Faster Response" },
  { icon: <Timer className="h-5 w-5" />, text: "70% Time Saved" },
  { icon: <TrendingUp className="h-5 w-5" />, text: "Higher Conversions" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeLeftVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUpVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AiAutomationHighlight() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/50">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeftVariants}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Future-Ready Business</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Intelligent AI Automation <br />
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                That Works 24/7
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Streamline your business with AI-driven workflows that eliminate manual errors, reduce operational costs, and boost overall productivity across every department. Experience seamless execution without the human overhead.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20 transition-all">
                <Link href="/contact">Get Automation Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 rounded-2xl border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-bold text-lg transition-all">
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Consult an Expert
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Side: Grid of Cards */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {automationCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group p-8 rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all"
              >
                <div className="mb-6 p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all w-fit">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  {card.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-slate-200/60"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="flex-shrink-0 p-2.5 rounded-xl bg-primary/5 text-primary group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <span className="text-sm font-bold text-slate-700 tracking-tight">
                  {stat.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
