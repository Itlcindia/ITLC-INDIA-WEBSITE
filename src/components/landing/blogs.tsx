
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'The Future of AI in Business',
    category: 'AI & ML',
    description: 'Explore how artificial intelligence is revolutionizing industries from SaaS to custom software development and what it means for your business.',
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'artificial intelligence brain',
    link: '#',
  },
  {
    title: 'Crafting the Perfect User Experience',
    category: 'UI/UX Design',
    description: 'A deep dive into the principles of user-centric design and how to create interfaces that are both beautiful and intuitive.',
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'design wireframe sketch',
    link: '#',
  },
  {
    title: 'Digital Marketing Trends to Watch',
    category: 'Marketing',
    description: 'Stay ahead of the curve with our breakdown of the most important digital marketing trends for the upcoming year.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'digital marketing team',
    link: '#',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
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

export default function Blogs() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <motion.div 
        className="container max-w-screen-xl mx-auto px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div className="space-y-2" variants={titleVariants}>
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">Latest Insights & Tech Updates</h2>
            <p className="max-w-3xl text-[#5f6f86] md:text-xl">
              AI, Automation, SaaS & Business Growth
            </p>
          </motion.div>
        </div>
        <motion.div 
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.title} variants={itemVariants}>
              <Card className="overflow-hidden flex flex-col group rounded-2xl border-blue-200/50">
                <CardHeader className="p-0">
                  <div className="relative h-56 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      data-ai-hint={post.imageHint}
                    />
                    <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col bg-white/60 backdrop-blur-sm">
                  <Badge variant="default" className="w-fit mb-4 bg-gradient-to-r from-[#00b4ff] to-[#0077ff] text-white font-semibold shadow-md">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl mb-2 text-[#0b1f3a]">{post.title}</CardTitle>
                  <p className="text-[#5f6f86] flex-grow">{post.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 bg-white/60 backdrop-blur-sm rounded-b-2xl">
                  <Button asChild variant="outline" className="w-full rounded-full bg-gradient-to-r from-[#00b4ff] to-[#0077ff] text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all">
                      <Link href={post.link}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
