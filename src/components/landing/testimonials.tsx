"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const testimonials = [
  {
    quote: "ITLC India Pvt Ltd delivered exactly what we needed. Their development services are reliable, well-structured, and highly professional.",
    author: "CCTNS"
  },
  {
    quote: "ITLC India Pvt Ltd helped Bindals, Lucknow strengthen its digital presence through effective SEO and digital marketing strategies. We saw clear improvement in online visibility and customer reach.",
    author: "Bindals, Lucknow"
  }
];

const testimonialVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
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

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="w-full py-16 md:py-24">
      <motion.div
        className="container max-w-screen-xl mx-auto px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center space-y-4 text-center mb-12"
          variants={titleVariants}
        >
          <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="max-w-xl text-muted-foreground sm:text-lg">
            See how we've helped businesses like yours succeed.
          </p>
        </motion.div>

        <motion.div className="mx-auto max-w-2xl" variants={testimonialVariants}>
           <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-8 text-center">
                        <blockquote className="text-xl italic text-foreground/90 relative">
                          <p className="mb-4">
                            “{testimonial.quote}”
                          </p>
                          <footer className="text-base font-medium text-muted-foreground not-italic">
                            — {testimonial.author}
                          </footer>
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  );
}
