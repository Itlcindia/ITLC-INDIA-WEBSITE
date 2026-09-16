import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Search, Smartphone, DollarSign, Rocket, Building, ShoppingCart, GraduationCap, Factory, BarChart, Smile, Clock, Shield, Users, Bot, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SeoFaq } from '@/components/seo-faq';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Digital Marketing & SEO Services | ITLC INDIA PVT LTD',
  description: 'Boost your brand visibility with data-driven digital marketing, SEO strategies, and PPC management by ITLC INDIA PVT LTD. We help you reach more customers and drive ROI.',
}

const marketingServices = [
    {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: "SEO & Content Strategy",
        description: "Improve search rankings and attract high-quality organic traffic with data-backed strategies.",
        features: [
            "Keyword research & on-page SEO",
            "Technical SEO optimization",
            "Blog & content marketing",
            "Local SEO for businesses",
        ],
    },
    {
        icon: <Smartphone className="h-8 w-8 text-primary" />,
        title: "Social Media Management",
        description: "Build a strong online presence and engage your target audience effectively.",
        features: [
            "Content planning & creatives",
            "Instagram, Facebook, LinkedIn management",
            "Audience engagement & messaging",
            "Brand reputation management",
        ],
    },
    {
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        title: "PPC Campaigns (Paid Ads)",
        description: "Maximize ROI with targeted pay-per-click advertising across all major platforms.",
        features: [
            "Google Ads & Meta Ads",
            "Audience targeting & retargeting",
            "Budget optimization",
            "Conversion tracking & reports",
        ],
    },
];

const digitalMarketingFaqs = [
  {
    question: "What are the benefits of Digital Marketing for businesses?",
    answer: "Digital marketing from ITLC India provides a cost-effective way to reach a global audience while targeting specific customer demographics with precision. Unlike traditional marketing, digital strategies allow for real-time tracking of ROI, enabling you to optimize campaigns on the fly. By leveraging SEO, PPC, and social media, businesses can significantly increase brand awareness, generate high-quality leads, and build lasting customer relationships through interactive engagement, ultimately leading to sustainable revenue growth and market leadership."
  },
  {
    question: "Why choose ITLC India for Digital Marketing services?",
    answer: "ITLC India combines a data-driven approach with creative excellence to deliver results-oriented marketing strategies. Since 2015, we have helped businesses in diverse sectors dominate their digital niche. Our team uses advanced AI tools for market research and sentiment analysis, ensuring your message resonates with the right audience. We focus on transparency, providing detailed monthly reports and focusing on metrics that matter—conversions, sales, and long-term brand equity."
  },
  {
    question: "How much does Digital Marketing cost in India?",
    answer: "The cost of digital marketing in India varies depending on your business goals, target platforms, and ad spend. ITLC India offers flexible service packages starting from basic SEO and social media management for local businesses to comprehensive national multi-channel growth strategies. We focus on optimizing your budget to ensure maximum return on ad spend (ROAS). Contact us for a free digital audit where we can provide a customized marketing roadmap and pricing based on your growth targets."
  },
  {
    question: "How long does it take to see results from Digital Marketing?",
    answer: "The timeframe for results depends on the marketing channel. PPC campaigns like Google Ads can drive traffic and leads almost instantly. However, SEO and organic social media growth are long-term strategies that typically show significant measurable impact within 3 to 6 months. At ITLC India, we focus on a balanced approach—delivering quick wins through paid media while building a solid organic foundation that reduces your customer acquisition cost over time."
  },
  {
    question: "What technologies and tools do you use for marketing?",
    answer: "We use a high-end tech stack for digital marketing, including Google Analytics 4 (GA4), SEMrush, Ahrefs, and Meta Business Suite. We also integrate AI tools for content generation and audience segmentation. For CRM integration, we ensure your leads flow directly into systems like Salesforce or HubSpot. Our data visualization is powered by custom Looker Studio dashboards, providing you with real-time visibility into your campaign performance and overall digital growth metrics."
  },
  {
    question: "Do you provide monthly reports and analysis?",
    answer: "Yes, ITLC India provides transparent and detailed monthly performance reports for all our digital marketing clients. These reports cover key performance indicators (KPIs) such as keyword rankings, website traffic, conversion rates, and social media engagement levels. More than just data, we provide strategic analysis and recommendations for the upcoming month, ensuring your marketing strategy remains agile and aligned with changing market trends and customer behaviors."
  }
];

const whoCanBenefit = [
    { icon: <Rocket className="h-8 w-8" />, name: "Startups" },
    { icon: <Building className="h-8 w-8" />, name: "Small & Medium Businesses" },
    { icon: <ShoppingCart className="h-8 w-8" />, name: "E-commerce Stores" },
    { icon: <GraduationCap className="h-8 w-8" />, name: "Educational Institutes" },
    { icon: <Factory className="h-8 w-8" />, name: "Local & Service Businesses" },
];

export default function DigitalMarketingPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
                <PolygonHeroBackground />
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[76px] text-white leading-tight">
                        Digital Marketing by <br /> <span className="text-primary">ITLC INDIA PVT LTD</span>
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-base text-white/80 md:text-lg lg:text-2xl">
                        Amplify your brand’s reach and drive business growth with data-driven digital marketing strategies that deliver measurable results.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild size="lg" className="rounded-full bg-primary text-white shadow-xl hover:bg-primary/90 h-14 px-8 transition-all hover:-translate-y-1">
                            <Link href="/services">Learn More</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full bg-white/10 text-white border-white/20 backdrop-blur-md hover:bg-white/20 h-14 px-8 transition-all hover:-translate-y-1">
                            <Link href="/contact">Get Marketing Audit</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Digital Marketing Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl text-foreground">
                            Why Digital Marketing is Important?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">Smart marketing = Smart growth 📈</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto text-center">
                        <div className="flex flex-col items-center gap-2"><Check className="h-8 w-8 text-primary" /><h3 className="font-semibold text-lg">Reach more customers online</h3></div>
                        <div className="flex flex-col items-center gap-2"><Check className="h-8 w-8 text-primary" /><h3 className="font-semibold text-lg">Cost-effective vs traditional ads</h3></div>
                        <div className="flex flex-col items-center gap-2"><Check className="h-8 w-8 text-primary" /><h3 className="font-semibold text-lg">Track real-time performance</h3></div>
                        <div className="flex flex-col items-center gap-2"><Check className="h-8 w-8 text-primary" /><h3 className="font-semibold text-lg">Improve brand awareness</h3></div>
                        <div className="flex flex-col items-center gap-2"><Check className="h-8 w-8 text-primary" /><h3 className="font-semibold text-lg">Increase qualified leads</h3></div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-background">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">Our Marketing Services</h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {marketingServices.map((service) => (
                            <Card key={service.title} className="flex flex-col border-border/50 shadow-sm hover:shadow-xl transition-all">
                                <CardHeader className="flex-row items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground mb-6">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                                                <Check className="h-4 w-4 text-primary" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <div className="p-6 pt-0">
                                    <Button asChild variant="outline" className="w-full rounded-full border-primary/20 hover:border-primary text-primary">
                                        <Link href="/contact" className="flex items-center gap-2">
                                            Get in Touch <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <SeoFaq serviceName="Digital Marketing & SEO" faqs={digitalMarketingFaqs} />

            {/* Benefit Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl mb-16">Who Can Benefit?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
                        {whoCanBenefit.map((who) => (
                            <div key={who.name} className="flex flex-col items-center gap-4 group">
                                <div className="p-5 bg-white/10 rounded-2xl border border-white/10 group-hover:bg-primary transition-all">
                                    {React.cloneElement(who.icon as React.ReactElement<any>, { className: "h-8 w-8 text-white" })}
                                </div>
                                <p className="font-bold">{who.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">Why Choose ITLC INDIA PVT LTD?</h2>
                        <p className="mt-4 text-muted-foreground">A decade of innovation, trust, and marketing excellence.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                          { icon: <Clock className="h-8 w-8" />, value: "10+", label: "Years Experience" },
                          { icon: <Rocket className="h-8 w-8" />, value: "250+", label: "Projects Delivered" },
                          { icon: <Smile className="h-8 w-8" />, value: "120+", label: "Happy Clients" },
                          { icon: <BarChart className="h-8 w-8" />, value: "99.9%", label: "Project Success Rate" },
                        ].map((stat, i) => (
                            <Card key={i} className="text-center p-8 bg-white border-none shadow-sm hover:shadow-md transition-all">
                                <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary mb-4">
                                    {stat.icon}
                                </div>
                                <p className="text-4xl font-bold text-primary mb-1">{stat.value}</p>
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
