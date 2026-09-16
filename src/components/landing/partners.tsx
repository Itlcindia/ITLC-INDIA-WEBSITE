
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'AWS', hint: 'aws logo', image: "/patner/1.png" },
  { name: 'Azure', hint: 'azure logo', image: "/patner/3.png" },
  { name: 'Google Cloud', hint: 'google cloud logo', image: "/patner/4.png" },
  { name: 'OpenAI', hint: 'openai logo', image: "/patner/2.jpg" },
  { name: 'Firebase', hint: 'firebase logo', image: "/patner/2.png" },
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

const titleVariants = {
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

export default function Partners() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <motion.div 
        className="max-w-screen-xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="text-center space-y-4 mb-12" variants={titleVariants}>
          <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
            Our Technology Partners
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-[#333333]">
            We collaborate with trusted technology leaders to deliver secure and scalable digital solutions.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
          variants={containerVariants}
        >
          {partners.map((partner) => (
            <motion.div 
              key={partner.name} 
              className="group relative flex items-center justify-center p-4 bg-[#f8fbff] rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-105"
              variants={itemVariants}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary transition-all duration-300"></div>
              <Image
                  src={partner.image}
                  alt={`${partner.name} Logo`}
                  width={120}
                  height={40}
                  className="object-contain w-3/4 h-3/4 transition-all duration-300"
                  data-ai-hint={partner.hint}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="text-center mt-12" variants={titleVariants}>
          <p className="text-muted-foreground">Trusted partnerships. Powerful technology. Real business impact.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
