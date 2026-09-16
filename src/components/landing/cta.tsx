
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CTA() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Ready to start your project"
          fill
          className="object-cover"
          data-ai-hint="abstract technology background"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <motion.div 
        className="relative z-10 max-w-screen-xl mx-auto grid items-center justify-center gap-4 px-4 py-16 text-center md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <div className="space-y-3">
          <motion.h2 
            className="text-3xl font-bold font-headline tracking-tighter md:text-4xl/tight text-white"
            variants={itemVariants}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p 
            className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed"
            variants={itemVariants}
          >
            Let's build something amazing together. Reach out to us to discuss your ideas and see how we can help you achieve your goals.
          </motion.p>
        </div>
        <motion.div 
          className="mx-auto w-full max-w-sm space-y-2"
          variants={itemVariants}
        >
           <Button asChild size="lg" className="w-full">
            <Link href="/contact">
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
