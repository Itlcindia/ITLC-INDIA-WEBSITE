
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Award, Users, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "10+ Years of Excellence",
        description: "Delivering high-quality solutions and services."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Client-Centric",
        description: "Building strong partnerships for client success."
    },
    {
        icon: <Building className="h-8 w-8 text-primary" />,
        title: "Innovation-Driven",
        description: "Solving challenges with modern technology."
    },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

const fadeRightVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeLeftVariants}
          >
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">About ITLC INDIA PVT LTD</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2015, ITLC INDIA PVT LTD is a passionate team of developers, designers, and strategists dedicated to empowering businesses with transformative technology. We help our clients innovate, build, and grow through AI, custom software, and digital marketing.
            </p>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4"
              variants={containerVariants}
            >
              {values.map((value) => (
                <motion.div 
                  key={value.title} 
                  className="text-center p-4 rounded-lg transition-all duration-300 hover:bg-gray-50/50"
                  variants={itemVariants}
                >
                  <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full border border-primary/20">{value.icon}</div>
                  <h3 className="font-bold text-lg">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
            <Button asChild size="lg" className="mt-6 rounded-full font-bold">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
          
          <motion.div 
            className="relative flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeRightVariants}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-blob"></div>
            <Image
              src="/ab1.png"
              alt="ITLC Team"
              width={500}
              height={500}
              className="rounded-full object-cover shadow-2xl border-8 border-white transition-transform duration-700 hover:scale-105"
              data-ai-hint="professional team working together"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
