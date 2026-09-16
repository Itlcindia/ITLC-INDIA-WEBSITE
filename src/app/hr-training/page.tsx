"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Star, Users, BrainCircuit, Bot, FileText, BarChart, Briefcase, Phone, Mail, Building as BuildingIcon, Laptop, Projector, UserCheck, Group, FileSearch, AreaChart, LayoutGrid, BarChart3, MessageSquare, Video, Banknote, Trophy } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from 'framer-motion';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.523.074-.797.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );

const courseModules = [
    { title: "HR Fundamentals", icon: <Briefcase className="h-8 w-8" /> },
    { title: "Recruitment & ATS Tools", icon: <Users className="h-8 w-8" /> },
    { title: "Payroll Management", icon: <Banknote className="h-8 w-8" /> },
    { title: "HR Analytics & Reporting", icon: <BarChart className="h-8 w-8" /> },
    { title: "AI Automation in HR", icon: <Bot className="h-8 w-8" /> },
    { title: "Resume Screening with AI", icon: <FileText className="h-8 w-8" /> },
    { title: "ChatGPT for HR Operations", icon: <MessageSquare className="h-8 w-8" /> },
    { title: "Interview Automation Tools", icon: <Video className="h-8 w-8" /> },
];

const aiTools = [
    { name: "ChatGPT", icon: <Bot className="h-8 w-8 text-primary" />, description: "Automate HR communication." },
    { name: "Resume AI Scanner", icon: <FileSearch className="h-8 w-8 text-primary" />, description: "Screen candidates faster." },
    { name: "HR Automation Bots", icon: <BrainCircuit className="h-8 w-8 text-primary" />, description: "Handle repetitive tasks." },
    { name: "Excel + AI Analytics", icon: <AreaChart className="h-8 w-8 text-primary" />, description: "Generate data insights." },
    { name: "ATS Systems", icon: <LayoutGrid className="h-8 w-8 text-primary" />, description: "Manage applicant lifecycle." },
    { name: "Power BI AI Reports", icon: <BarChart3 className="h-8 w-8 text-primary" />, description: "Visualize HR metrics." },
];

const hiringPartners = [
    { name: "TechCorp", image: "/hr/a.jpg", hint: "techcorp logo" },
    { name: "Innovate AI", image: "/hr/b.jpg", hint: "innovate ai logo" },
    { name: "DataSolutions", image: "/hr/c.jpg", hint: "datasolutions logo" },
    { name: "FutureWorks", image: "/hr/d.jpg", hint: "futureworks logo" },
    { name: "CloudNova", image: "/hr/e.jpg", hint: "cloudnova logo" },
    { name: "NexaSoft", image: "/hr/f.jpg", hint: "nexasoft logo" },
    { name: "BrightAI", image: "/hr/g.jpg", hint: "brightai logo" },
    { name: "FinTechPro", image: "/hr/h.jpg", hint: "fintechpro logo" },
    { name: "RoboSys", image: "/hr/i.jpg", hint: "robosys logo" },
    { name: "DataEdge", image: "/hr/j.jpg", hint: "dataedge logo" },
    { name: "TalentFlow", image: "/hr/k.png", hint: "talentflow logo" },
    { name: "HireSmart", image: "/hr/l.png", hint: "hiresmart logo" },
];

const whyChooseUs = [
    { title: "100% Practical Training", description: "Gain hands-on experience with real-world projects and case studies.", icon: <Laptop className="h-8 w-8 text-primary" /> },
    { title: "Live Projects", description: "Work on industry-relevant projects to build a strong portfolio.", icon: <Projector className="h-8 w-8 text-primary" /> },
    { title: "Industry Mentors", description: "Learn from seasoned HR professionals with years of experience.", icon: <UserCheck className="h-8 w-8 text-primary" /> },
    { title: "Placement Assistance", description: "Get dedicated support for resume building, interviews, and job placement.", icon: <Award className="h-8 w-8 text-primary" /> },
    { title: "Certification Provided", description: "Receive an industry-recognized certificate upon course completion.", icon: <FileText className="h-8 w-8 text-primary" /> },
    { title: "Small Batch Size", description: "Benefit from personalized attention and interactive learning in small groups.", icon: <Group className="h-8 w-8 text-primary" /> },
];

const placedStudents = [
    { name: "Nivedita Yadav", company: "Recruiter Recruiter Negocious IT Solutions ", role: " Recruiter", lpa: "18 LPA", image: "/hr/15.jpg", hint: "female student" },
    { name: "Shreya Asthana", company: "Quantum World Technologies", role: "US Technical Recruiter", lpa: "7.5 LPA", image: "/hr/2.jpg", hint: "female student" },
    { name: "Yashvendra Singh", company: "VBeyond Corporation", role: "HR Executive", lpa: "3.5 LPA", image: "/hr/3.jpg", hint: "male student" },
    { name: "Himanshi Singh", company: "Power Grid Corporation of India Limited", role: "HR Apprentice Executive ", lpa: "3.6 LPA", image: "/hr/4.jpg", hint: "female student" },
    { name: "Garima Singh ", company: " Basmati Sewa Sansthan", role: "HR Executive", lpa: "3.2 LPA", image: "/hr/5.jpg", hint: "female student" },
    { name: "Rimjhim Saxena", company: "India Mart", role: "HR Executive ", lpa: "4.4 LPA", image: "/hr/6.jpg", hint: "female student" },
    { name: "Rajnish Maurya", company: "Unicode Systems", role: "HR Executive", lpa: "3.2 LPA", image: "/hr/7.jpg", hint: "male student" },
    { name: "Vindhya Pratap Singh", company: "VD Tech", role: "HR Executive", lpa: "3.0 LPA", image: "/hr/8.jpg", hint: "male student" },
    { name: "Prakhar Saini", company: "Human Unity Movement", role: "Workforce Analyst", lpa: "3.5", image: "/hr/9.jpg", hint: "male student" },
    { name: "Saransha Shukla", company: "Square Yards", role: "Marketing Management Trainee", lpa: "3. LPA", image: "/hr/10.jpg", hint: "female student" },
    { name: "Namrata Singh", company: "MANI SHANTI INFRACITY PRIVATE LIMITED", role: "Operations Manager Operations Manager", lpa: "3.5 LPA", image: "/hr/11.jpg", hint: "female student" },
    { name: "Artika Mohey ", company: "Tech Mahindra", role: "CSE", lpa: "3.5 LPA", image: "/hr/12.jpg", hint: "female student" },
    { name: "Shilpa Singh", company: "Consultant Stanley David and Associates", role: "Technical Consultant Technical", lpa: "3.3 LPA", image: "/hr/13.jpg", hint: "female student" },
    { name: "Shivam Maddheshiya", company: "PeopleFirst", role: "Technical Recruiter (US Staffing)", lpa: "3.5 LPA", image: "/hr/14.jpg", hint: "female student" },
    { name: "Akansha Jaiswal", company: "Genpact", role: "Talent Acquisition Specialist", lpa: "5 LPA", image: "/hr/1.jpg", hint: "male student" },
];


const testimonials = [
    "The AI tools training was a game-changer for my career. I can now automate so many manual tasks!",
    "Excellent curriculum and the trainers are industry experts. The live projects were incredibly helpful.",
    "I got placed within a month of completing the course. The placement support team is fantastic.",
    "This is the best course for any HR professional looking to upgrade their skills for the AI era."
];

const trainingModes = [
    { 
        title: "Online Live Classes", 
        icon: <Laptop className="h-10 w-10 text-primary" />,
        description: "Interactive live sessions with real-time mentor support and recordings."
    },
    { 
        title: "Offline Classroom Training", 
        icon: <BuildingIcon className="h-10 w-10 text-primary" />,
        description: "Hands-on classroom learning with practical lab access."
    },
    { 
        title: "Corporate Training", 
        icon: <Briefcase className="h-10 w-10 text-primary" />,
        description: "Customized enterprise HR AI training programs for organizations."
    },
];

export default function HRTrainingWithAIPage() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    };
    
    const logoItemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      },
    };

    return (
        <div className="text-foreground">
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center overflow-hidden"
            >
                <PolygonHeroBackground />
                <div className="relative z-10 max-w-screen-xl auto px-4">
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white"
                    >
                        Master HR Skills with AI-Powered Training
                    </motion.h1>
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-4 max-w-3xl mx-auto text-lg text-white/80 md:text-xl"
                    >
                        Learn Recruitment, Payroll, HR Analytics, and Automation using real AI tools. Become a Future-Ready HR Professional with AI Skills.
                    </motion.p>
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full h-14 px-10 font-bold text-lg">
                            <Link href="/student-registration">Get Free Demo Class</Link>
                        </Button>
                        <Button asChild size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full h-14 px-10 font-bold text-lg">
                            <Link href="https://wa.me/919532341000" target="_blank">
                                <WhatsAppIcon className="mr-2 h-6 w-6" /> Connect on WhatsApp
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.section>

            <section id="courses" className="py-24 bg-white">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-4xl md:text-5xl tracking-tighter">Course Modules</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5f6f86]">A comprehensive curriculum designed for modern HR professionals.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {courseModules.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="text-center p-8 border-slate-100 shadow-lg hover:shadow-xl transition-shadow rounded-3xl group">
                                    <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-4 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-300">{item.icon}</div>
                                    <h3 className="font-bold text-xl text-slate-900">{item.title}</h3>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="ai-tools" className="py-24 bg-slate-50 rounded-[60px] my-24 mx-4">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.h2 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            className="font-bold text-4xl md:text-5xl tracking-tighter"
                        >
                            AI Tools You Will Master
                        </motion.h2>
                        <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-4 max-w-2xl mx-auto text-lg text-[#5f6f86]"
                        >
                           Learn Industry-Ready AI Tools Used by Modern HR Teams
                        </motion.p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {aiTools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="group text-center p-6 flex flex-col items-center gap-4 h-full rounded-2xl border shadow-sm hover:shadow-xl transition-all">
                                    <div className="mb-2 inline-block p-4 bg-white rounded-full border border-slate-100 shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {tool.icon}
                                    </div>
                                    <h3 className="font-bold text-lg text-[#0b1f3a]">{tool.name}</h3>
                                    <p className="text-sm text-[#5f6f86] flex-grow">{tool.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.h2 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            className="font-bold text-4xl md:text-5xl tracking-tighter"
                        >
                            Why Choose Us?
                        </motion.h2>
                        <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-4 max-w-2xl mx-auto text-lg text-[#5f6f86]"
                        >
                           Your Success Starts With the Right Training Partner
                        </motion.p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="group text-center p-10 flex flex-col items-center gap-4 h-full rounded-[32px] border-slate-50 bg-slate-50/30 shadow-sm hover:bg-white hover:shadow-2xl transition-all">
                                    <div className="mb-4 inline-block p-5 bg-white rounded-2xl shadow-md group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-bold text-2xl text-[#0b1f3a]">{feature.title}</h3>
                                    <p className="text-slate-600 flex-grow leading-relaxed">{feature.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Plans Section */}
            <section id="pricing" className="py-24 bg-slate-50 rounded-[60px] mx-4">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <motion.h2 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            className="font-bold text-4xl md:text-5xl tracking-tighter"
                        >
                            Special Training Plans
                        </motion.h2>
                        <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
                        >
                           Choose the plan that fits your career goals.
                        </motion.p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Basic Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="relative flex flex-col h-full border-none shadow-2xl bg-white rounded-[40px] overflow-hidden group">
                                <CardHeader className="text-center pb-10 border-b bg-slate-50/50 p-10">
                                    <CardTitle className="text-3xl font-black text-slate-900">Basic Plan</CardTitle>
                                    <div className="mt-6 flex flex-col items-center">
                                        <div className="flex items-baseline">
                                            <span className="text-5xl font-black text-primary">₹5,000</span>
                                        </div>
                                        <span className="text-sm font-bold text-muted-foreground mt-2 uppercase tracking-widest">30 Days Practical Training</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow pt-10 px-10">
                                    <div className="space-y-8">
                                        <div>
                                            <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-6">Core Training Features</p>
                                            <ul className="space-y-4">
                                                {[
                                                    "Recruitment Process Training",
                                                    "IT & Non-IT Hiring Basics",
                                                    "JD Understanding",
                                                    "Resume Screening",
                                                    "Sourcing Techniques",
                                                    "Interview Scheduling",
                                                    "Live Practice Tasks",
                                                    "Certificate Provided"
                                                ].map((feature) => (
                                                    <li key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                                        <CheckCircle2Custom className="h-5 w-5 text-blue-500 shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                                <div className="p-10 pt-0">
                                    <Button asChild className="w-full rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black py-8 text-lg shadow-xl transition-all">
                                        <Link href="/student-registration">Enroll Now</Link>
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Pro Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Card className="relative flex flex-col h-full border-4 border-primary shadow-2xl bg-white rounded-[40px] overflow-hidden ring-12 ring-primary/5">
                                <div className="absolute top-0 right-0 bg-primary text-white text-[11px] font-black px-6 py-2.5 rounded-bl-[20px] uppercase tracking-[0.2em]">
                                    Recommended
                                </div>
                                <CardHeader className="text-center pb-10 border-b bg-blue-50/50 p-10">
                                    <CardTitle className="text-3xl font-black text-primary">Pro Placement</CardTitle>
                                    <div className="mt-6 flex flex-col items-center">
                                        <div className="flex items-baseline">
                                            <span className="text-5xl font-black text-primary">₹10,000</span>
                                        </div>
                                        <span className="text-sm font-bold text-muted-foreground mt-2 uppercase tracking-widest">30 Days + Support</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow pt-10 px-10">
                                    <div className="space-y-8">
                                        <div>
                                            <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-6">Everything in Basic Plus:</p>
                                            <ul className="space-y-4">
                                                {[
                                                    "100% Placement Assistance",
                                                    "English Communication Training",
                                                    "Mock Calls Practice",
                                                    "HR Interview Preparation",
                                                    "Client Interaction Training"
                                                ].map((feature) => (
                                                    <li key={feature} className="flex items-center gap-3 text-sm font-bold text-slate-900">
                                                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="p-5 bg-primary/5 rounded-2xl border border-primary/10 mt-6">
                                            <p className="text-xs text-primary font-black uppercase tracking-widest text-center">Bonus: Career Mentoring Included</p>
                                        </div>
                                    </div>
                                </CardContent>
                                <div className="p-10 pt-0">
                                    <Button asChild className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black py-8 text-lg shadow-2xl shadow-blue-200 transition-all">
                                        <Link href="/student-registration">Join With Placement</Link>
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.h2 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            className="font-bold text-4xl md:text-5xl tracking-tighter"
                        >
                          Achieve Your Dream Job at
                        </motion.h2>
                    </div>
                    <motion.div 
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                        {hiringPartners.map((partner) => (
                          <motion.div 
                            key={partner.name}
                            className="group relative flex items-center justify-center p-8 bg-white rounded-3xl shadow-md border border-slate-50 transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20"
                            variants={logoItemVariants}
                          >
                            <Image
                                src={partner.image}
                                alt={`${partner.name} Logo`}
                                width={120}
                                height={40}
                                className="object-contain w-full h-auto transition-all duration-300"
                                data-ai-hint={partner.hint}
                            />
                          </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section id="placements" className="py-24 bg-white">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <motion.h2 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            className="font-bold text-4xl md:text-5xl tracking-tighter"
                        >
                            Our Placed Students
                        </motion.h2>
                        <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-4 max-w-2xl mx-auto text-lg text-[#5f6f86]"
                        >
                            100+ Successful HR Professionals Trained with AI Tools
                        </motion.p>
                    </div>
                    <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {placedStudents.map((student, index) => (
                            <motion.div
                                key={student.name}
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
                            >
                                <Card className="group text-center p-8 flex flex-col items-center gap-4 h-full rounded-3xl border-slate-100 shadow-lg hover:shadow-2xl transition-all">
                                    <div className="relative inline-block mb-2">
                                        <Image src={student.image} alt={student.name} width={100} height={100} className="rounded-full object-cover border-4 border-white shadow-xl" data-ai-hint={student.hint} />
                                        <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 group-hover:scale-125 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-900 flex-grow">{student.name}</h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest -mt-2">@{student.company}</p>
                                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 border border-blue-100 self-center">
                                        <Trophy className="h-4 w-4 text-primary" />
                                        <span className="font-black text-sm text-primary">{student.lpa}</span>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full max-w-xs mx-auto"
                            opts={{ align: "start", loop: true }}
                        >
                            <CarouselContent>
                                {placedStudents.map((student, index) => (
                                    <CarouselItem key={index} className="basis-full">
                                        <Card className="text-center p-8 flex flex-col items-center gap-4 h-full rounded-3xl border-slate-100 shadow-lg">
                                            <Image src={student.image} alt={student.name} width={100} height={100} className="rounded-full object-cover border-4 border-white shadow-xl" />
                                            <h3 className="font-bold text-lg text-slate-900">{student.name}</h3>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">@{student.company}</p>
                                            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 border border-blue-100 self-center">
                                                <Trophy className="h-4 w-4 text-primary" />
                                                <span className="font-black text-sm text-primary">{student.lpa}</span>
                                            </div>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>

                    <motion.div 
                        className="text-center mt-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-black px-12 h-16 text-lg shadow-2xl hover:shadow-blue-200 transition-all">
                            <Link href="/student-registration">Start Your Career Journey</Link>
                        </Button>
                        <p className="mt-6 text-sm font-bold text-slate-400 uppercase tracking-widest">Limited Batch Intake Only</p>
                    </motion.div>
                </div>
            </section>

            <section id="testimonials" className="py-24 bg-slate-50 rounded-[60px] mx-4 my-24">
                <div className="max-w-screen-md mx-auto px-4 text-center">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-4xl md:text-5xl tracking-tighter">Student Voices</h2>
                    </div>
                    <Carousel className="w-full" opts={{ loop: true }}>
                        <CarouselContent>
                            {testimonials.map((text, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-4">
                                        <Card className="border-none bg-white/50 backdrop-blur-md rounded-[32px] p-10">
                                            <CardContent className="flex flex-col items-center justify-center p-0">
                                                <Star className="text-yellow-400 fill-yellow-400 w-10 h-10 mb-8" />
                                                <p className="text-2xl font-medium text-slate-700 leading-relaxed italic">"{text}"</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel>
                </div>
            </section>
            
            <section className="py-24 bg-white">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.h2 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            className="font-bold text-4xl md:text-5xl tracking-tighter"
                        >
                            Flexible Learning
                        </motion.h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {trainingModes.map((mode, index) => (
                            <motion.div
                                key={mode.title}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="group text-center p-10 flex flex-col items-center gap-4 h-full rounded-[32px] border-slate-50 shadow-sm hover:shadow-2xl transition-all">
                                    <div className="mb-6 inline-block p-5 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {mode.icon}
                                    </div>
                                    <h3 className="font-bold text-2xl text-slate-900">{mode.title}</h3>
                                    <p className="text-slate-500 leading-relaxed">{mode.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="py-24 md:py-32 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
                <div className="container max-w-screen-xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">Ready to Master <br/><span className="text-primary">AI in HR?</span></h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">Join the industry's most advanced practical training program. Your transformation from traditional HR to AI-powered expert starts here.</p>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row justify-center items-center gap-6"
                        >
                            <Button asChild size="lg" className="rounded-full px-12 h-16 font-black text-xl shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1 w-full sm:w-auto">
                                <Link href="/student-registration">Enroll Now - Limited Batch</Link>
                            </Button>
                            <div className="flex items-center gap-6">
                                <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] hidden sm:block">OR</span>
                                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-16 border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-black text-lg transition-all hover:-translate-y-1 w-full sm:w-auto">
                                    <Link href="https://wa.me/919532341000" target="_blank" className="flex items-center gap-3">
                                        <WhatsAppIcon className="h-6 w-6" /> Chat Counselor
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>

                        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                            {[
                                { icon: <ShieldCheckCustom className="w-8 h-8" />, text: "Secure Process" },
                                { icon: <CheckCircle2Custom className="w-8 h-8" />, text: "Verified Badge" },
                                { icon: <MessageSquare className="w-8 h-8" />, text: "Live Guidance" },
                                { icon: <Users className="w-8 h-8" />, text: "Expert Alumni" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-3">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10">{item.icon}</div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ShieldCheckCustom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckCircle2Custom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
