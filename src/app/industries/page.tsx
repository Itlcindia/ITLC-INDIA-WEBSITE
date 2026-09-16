import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck, Scale, Users, Repeat, Briefcase, HardDrive, Bike, RectangleHorizontal, Home, Building2, Camera, Wind, ShoppingBasket, Cake, Book, Shirt, Monitor, Sofa, HardHat, Hammer, Leaf, Sun, Container, Gift, Car, Fuel, Beer, Scissors, Dumbbell, Hand, Palette } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Industries We Serve | ITLC INDIA PVT LTD',
  description: 'Specialized technology solutions for over 30 sectors including retail, manufacturing, professional services, and construction by ITLC INDIA PVT LTD.',
}

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Industry = {
  title: string;
  services: Service[];
};

const industries: Industry[] = [
  {
    title: 'Professional Services',
    services: [
      { icon: ShieldCheck, title: 'Audit & Certification', description: 'Ensuring compliance and quality standards.' },
      { icon: Scale, title: 'Law Firm', description: 'Legal solutions for modern businesses.' },
      { icon: Users, title: 'Talent Acquisition', description: 'Finding the right people for your team.' },
      { icon: Repeat, title: 'Software Reseller', description: 'Distributing cutting-edge software solutions.' },
      { icon: Briefcase, title: 'Odoo Partner', description: 'Custom ERP solutions with Odoo.' },
      { icon: HardDrive, title: 'IT Hardware & Support', description: 'Reliable hardware and technical support.' },
    ],
  },
  {
    title: 'Business & Rental Services',
    services: [
      { icon: Bike, title: 'Bike Leasing', description: 'Flexible and affordable bike rental services.' },
      { icon: RectangleHorizontal, title: 'Billboard Rental', description: 'High-impact outdoor advertising solutions.' },
      { icon: Home, title: 'Property Owner Association', description: 'Managing and supporting property owners.' },
      { icon: Building2, title: 'Real Estate', description: 'Technology-driven real estate services.' },
      { icon: Camera, title: 'Photography', description: 'Professional photography for all your needs.' },
      { icon: Wind, title: 'Environmental Agency', description: 'Solutions for a sustainable future.' },
    ],
  },
  {
    title: 'Retail & Store Solutions',
    services: [
      { icon: ShoppingBasket, title: 'Grocery Store', description: 'Modern solutions for grocery retail.' },
      { icon: Cake, title: 'Bakery', description: 'Sweet solutions for your bakery business.' },
      { icon: Book, title: 'Book Store', description: 'Digital solutions for the modern bookstore.' },
      { icon: Shirt, title: 'Clothing Store', description: 'E-commerce and retail tech for fashion.' },
      { icon: Monitor, title: 'Electronics Store', description: 'Powering electronics retail with tech.' },
      { icon: Sofa, title: 'Furniture Store', description: 'Solutions for furniture retailers.' },
      { icon: HardHat, title: 'Hardware Store', description: 'Streamlining operations for hardware stores.' },
      { icon: Hammer, title: 'Toy Store', description: 'Fun and engaging solutions for toy retailers.' },
      { icon: Leaf, title: 'Agriculture Store', description: 'Tech for the agricultural sector.' },
      { icon: Palette, title: 'Arts & Crafts Store', description: 'Creative solutions for creative businesses.' },
    ],
  },
  {
    title: 'Construction & Infrastructure',
    services: [
      { icon: HardHat, title: 'Construction Company', description: 'Building the future with technology.' },
      { icon: Building2, title: 'Architecture Firm', description: 'Innovative design and planning tools.' },
      { icon: Leaf, title: 'Gardening Services', description: 'Greener solutions for landscaping businesses.' },
      { icon: Sun, title: 'Solar Energy Solutions', description: 'Powering a sustainable future.' },
      { icon: Container, title: 'Supply Chain Management', description: 'Optimizing logistics and supply chains.' },
    ],
  },
  {
    title: 'Manufacturing & Distribution',
    services: [
      { icon: Beer, title: 'Beverage Distributor', description: 'Streamlining beverage distribution.' },
      { icon: Gift, title: 'Corporate Gifts Supplier', description: 'Solutions for the corporate gifting industry.' },
      { icon: Car, title: 'Custom Furniture Production', description: 'Tech for bespoke furniture manufacturing.' },
      { icon: Fuel, title: 'Fossil Fuel Trading', description: 'Digital platforms for energy trading.' },
      { icon: Beer, title: 'Micro Brewery', description: 'Crafting success for microbreweries.' },
    ],
  },
  {
    title: 'Health & Lifestyle',
    services: [
      { icon: Scissors, title: 'Hair Salon', description: 'Modernizing the salon experience.' },
      { icon: Dumbbell, title: 'Health & Fitness Centers', description: 'Tech solutions for the fitness industry.' },
      { icon: Hand, title: 'Handyman Services', description: 'Connecting handymen with customers.' },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="text-foreground">
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Industries We Serve
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/80 md:text-xl">
            Empowering growth across diverse sectors with specialized technology solutions.
          </p>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-4 pb-16 space-y-16 mt-16">
        {industries.map((industry) => (
          <section key={industry.title}>
            <h2 className="font-bold text-3xl tracking-tighter mb-8 border-l-4 border-primary pl-4">{industry.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {industry.services.map((service) => (
                <Card key={service.title} className="flex flex-col transform hover:-translate-y-2 transition-transform duration-300 bg-white/80 backdrop-blur-sm shadow-lg rounded-lg border border-border/30 hover:border-primary">
                  <CardHeader className="flex-row items-center gap-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild className="w-full rounded-full border-primary/20 hover:border-primary/50 text-primary">
                        <Link href="/contact">Get in Touch</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="w-full py-20 border-t border-slate-100">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl mb-4">
            Need a Specialized Industry Solution?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-8">
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
