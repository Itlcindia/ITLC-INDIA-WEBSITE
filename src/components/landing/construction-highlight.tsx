
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Building, 
  Home, 
  Building2, 
  Key,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import imageData from '@/app/lib/placeholder-images.json';

const constructionCards = [
  { 
    icon: <Building className="h-6 w-6" />, 
    title: "Civil Construction", 
    image: imageData.construction[0]
  },
  { 
    icon: <Home className="h-6 w-6" />, 
    title: "Residential Projects", 
    image: imageData.construction[1]
  },
  { 
    icon: <Building2 className="h-6 w-6" />, 
    title: "Commercial Projects", 
    image: imageData.construction[2]
  },
  { 
    icon: <Key className="h-6 w-6" />, 
    title: "Turnkey Projects", 
    image: imageData.construction[3]
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeRightVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ConstructionHighlight() {
  return (
    <section className="relative py-24 overflow-hidden bg-white border-t border-slate-100 flex items-center">
      {/* Section Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/real/5.png" 
          alt="Construction Background" 
          fill 
          className="object-cover opacity-40"
          data-ai-hint="construction site"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </div>
      
      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Grid of Cards */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-6 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {constructionCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-[32px] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all min-h-[280px] flex flex-col justify-end"
              >
                {/* Card Image */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={card.image.src} 
                    alt={card.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={card.image.hint}
                  />
                  <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/40" />
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Section Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRightVariants}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Future-Ready Construction</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
              Smart Construction & Turnkey Execution <br />
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                That Delivers On Time
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Streamline your construction projects with expert planning, quality materials, and end-to-end turnkey execution. From foundation to final handover, we ensure precision, safety, and on-time delivery without hidden costs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-12 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20 transition-all">
                <Link href="https://infra-vision.itlcindia.com/" target="_blank" rel="noopener noreferrer">View More</Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
