"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          preload="auto"
        >
          <source src="/vio/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1]"
            variants={itemVariants}
          >
            Empowering Your <br/> <span className="text-primary">Digital Future</span>
          </motion.h1>
          <motion.p
            className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl leading-relaxed"
            variants={itemVariants}
          >
            ITLC INDIA provides cutting-edge AI, SaaS, and enterprise software solutions to accelerate your growth and streamline your operations with unmatched precision.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            variants={itemVariants}
          >
            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1">
              <Link href="/contact">Get Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-full bg-white/10 text-white backdrop-blur-md border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1">
              <Link href="/services">Our Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
