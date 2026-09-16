'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

interface ServiceHeroProps {
  badge?: string;
  title: string | React.ReactNode;
  description: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  illustration?: React.ReactNode;
  backgroundVideo?: string;
  backgroundImage?: string;
  className?: string;
}

/**
 * @fileOverview Standardized Hero component for all ITLC India service pages.
 * Updated padding: Desktop (242px), Tablet (212px), Mobile (202px) to shift content lower.
 * Text sizes reduced: H1 (76px max), P (24px max).
 */
export function ServiceHero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  illustration,
  backgroundVideo,
  backgroundImage,
  className,
}: ServiceHeroProps) {
  return (
    <section className={cn(
      "relative flex items-center bg-slate-950 text-white overflow-hidden",
      "pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-14 lg:pb-16",
      className
    )}>
      {/* Background Layer: Polygon Hero Wireframe with Blue Dots */}
      <PolygonHeroBackground />

      <div className="container relative z-20 max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold border border-primary/30 mb-5 w-fit">
                <Sparkles className="h-4 w-4" /> <span>{badge}</span>
              </div>
            )}
            
            <h1 className="text-[32px] sm:text-[42px] lg:text-[64px] xl:text-[76px] font-black tracking-tighter leading-[1.1] mb-[22px] max-w-[800px]">
              {title}
            </h1>
            
            <p className="text-[17px] lg:text-[24px] text-slate-300 leading-relaxed mb-[32px] max-w-[700px]">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-5">
              {primaryCta && (
                <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg shadow-xl shadow-primary/20">
                  <Link href={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10">
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          </motion.div>

          {/* Illustration Column */}
          {illustration && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              {illustration}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
