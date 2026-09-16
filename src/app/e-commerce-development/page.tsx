import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShoppingCart, CreditCard, Box, Zap, Shield, ArrowRight, Clock, Rocket, Smile, Laptop, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Commerce Development | ITLC INDIA PVT LTD',
  description: 'Scalable online retail platforms, custom storefronts, and seamless payment integrations. Expert E-commerce development by ITLC INDIA PVT LTD.',
}

const shopFeatures = [
    {
        icon: <ShoppingCart className="h-8 w-8 text-primary" />,
        title: "Custom Storefronts",
        description: "Bespoke designs that reflect your brand identity and drive sales.",
    },
    {
        icon: <CreditCard className="h-8 w-8 text-primary" />,
        title: "Secure Payments",
        description: "Integrated global payment gateways with multi-currency support.",
    },
    {
        icon: <Box className="h-8 w-8 text-primary" />,
        title: "Catalog Management",
        description: "Easy-to-use tools for inventory, variants, and price management.",
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Conversion Engine",
        description: "Optimized checkout flows and Abandoned Cart recovery systems.",
    },
];

export default function EcommerceDevelopmentPage() {
  return (
    <>
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4">
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white leading-tight">
            Sell Everywhere <br /> <span className="text-primary">With a High-Growth Store</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-base text-white/80 md:text-lg">
            From single-product stores to massive marketplaces, we build e-commerce solutions that scale infinitely and convert effectively.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold shadow-2xl">
              <Link href="/contact">Build My Store</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white font-bold">
              <Link href="/portfolio">E-Commerce Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">E-Commerce Essentials</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Everything you need to run a successful online business.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {shopFeatures.map((feature) => (
              <Card key={feature.title} className="flex flex-col border-border/50 shadow-sm hover:shadow-xl transition-all">
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 bg-primary/10 rounded-2xl mb-4 border border-primary/20 w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground text-sm">
                  {feature.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold">Platforms We Master</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {["Shopify Plus", "WooCommerce", "Magento / Adobe Commerce", "Custom Next.js Storefronts"].map((plat) => (
                    <div key={plat} className="p-8 bg-white rounded-2xl shadow-sm text-center border border-slate-100 font-bold text-slate-700">
                        {plat}
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';
