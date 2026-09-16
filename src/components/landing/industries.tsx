"use client";

import { Banknote, Heart, GraduationCap, ShoppingCart, Factory, Landmark, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const industries: {
  name: string;
  description: string;
  icon: LucideIcon;
}[] = [
  { icon: Banknote, name: "Banking & Finance", description: "Secure, scalable solutions for the financial sector." },
  { icon: Heart, name: "Healthcare", description: "HIPAA-compliant software for modern healthcare providers." },
  { icon: GraduationCap, name: "Education", description: "Transforming learning with EdTech and management platforms." },
  { icon: ShoppingCart, name: "E-commerce & Retail", description: "Powering online stores with AI and custom features." },
  { icon: Factory, name: "Manufacturing", description: "Smart factory solutions and supply chain automation." },
  { icon: Landmark, name: "Government", description: "Digital transformation for public sector efficiency." },
  { icon: Users, name: "HR Tech", description: "Automating HR processes from recruitment to payroll." },
  { icon: Briefcase, name: "Professional Services", description: "Custom software for legal, accounting, and consulting firms." }
];

const duplicatedIndustries = [...industries, ...industries];

const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
};

const marqueeVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        },
      },
    },
};

export default function Industries() {
  return (
    <section className="py-16 md:py-24 bg-white text-foreground">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <motion.div 
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={titleVariants}
          >
              <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">Industries We Serve</h2>
              <p className="max-w-3xl text-muted-foreground md:text-xl">
                  We deliver tailored technology solutions across diverse sectors, driving innovation and efficiency.
              </p>
          </motion.div>
      </div>

      <div 
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
      >
        <motion.div 
            className="flex w-max"
            variants={marqueeVariants}
            animate="animate"
        >
          {duplicatedIndustries.map((industry, i) => (
            <div key={i} className="flex-shrink-0 w-80 mx-4">
                <div className="group p-6 rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm shadow-lg h-full flex flex-col items-center text-center transition-all duration-300 hover:border-primary hover:-translate-y-2">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                        <industry.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                    <p className="text-muted-foreground">{industry.description}</p>
                </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
