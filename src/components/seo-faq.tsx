
'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * @fileOverview A reusable, SEO-optimized FAQ component for service pages.
 * Includes automatic JSON-LD FAQPage schema generation.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

interface SeoFaqProps {
  serviceName: string;
  faqs: FaqItem[];
}

export function SeoFaq({ serviceName, faqs }: SeoFaqProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container max-w-screen-md mx-auto px-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Common Questions About <br /> <span className="text-primary">{serviceName}</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Get detailed insights into our {serviceName} processes, pricing, and how ITLC India ensures maximum ROI for your business.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-white px-6 rounded-2xl border border-slate-200 mb-4 shadow-sm hover:shadow-md transition-all overflow-hidden group">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-6 text-slate-900 group-data-[state=open]:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
