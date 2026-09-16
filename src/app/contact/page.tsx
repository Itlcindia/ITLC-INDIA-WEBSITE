"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Building2, Headset, Handshake, ShieldCheck, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const services = [
  "SaaS Products",
  "Custom Development",
  "Digital Marketing",
  "UI/UX Design",
  "Logo & Branding",
  "Technology & AI Consulting",
  "AI Automation Services",
];

const officeInfo = [
  { icon: <Building2 className="h-8 w-8 text-primary" />, title: "Corporate Office", description: "Lucknow, Uttar Pradesh" },
  { icon: <Headset className="h-8 w-8 text-primary" />, title: "Technical Support", description: "24/7 Online Assistance" },
  { icon: <Handshake className="h-8 w-8 text-primary" />, title: "Business Partnerships", description: "Enterprise & Govt Projects" },
];

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwXSIqNpsSWn3ugl71vPKo7VQq-0Q4EvjK8xn2jpPnUcG5f8HkJWmnFmvwqIdNl1yR7/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Our team will contact you soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Submission failed. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
            <div className="mx-auto flex max-w-4xl flex-col items-center space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Let’s Build Something Great Together
                </h1>
                <p className="max-w-2xl leading-normal text-white/80 sm:text-lg sm:leading-7">
                    Talk to our experts and start your digital transformation today.
                </p>
            </div>
        </div>
      </section>
    
      <section className="w-full py-16 md:py-24 bg-white">
          <div className="container max-w-screen-xl mx-auto px-4">
              <div className="grid lg:grid-cols-3 gap-12">
                  <div className="space-y-8">
                      <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-lg border border-blue-200/50">
                          <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.815933575924!2d80.9990130752003!3d26.78201646543949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be56b23ad8b41%3A0xe533c2a4a581e2b5!2sITLC%20INDIA%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1700030155555!5m2!1sen!2sin"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen={false}
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title="ITLC India Office Location"
                          ></iframe>
                      </div>
                      <div className="space-y-4 text-sm text-[#5f6f86] p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-200/50 shadow-lg">
                          <h3 className="font-bold text-lg text-[#0b1f3a]">Head Office</h3>
                          <div className="flex items-start gap-3">
                              <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                              <span>G1/0049, Olive Wood Villa, Golf City, Lucknow, Uttar Pradesh – 226030</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                              <a href="tel:+919532341000" className="hover:text-primary">(+91) 953 234 1000</a>
                          </div>
                          <div className="flex items-start gap-3">
                              <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                              <div>
                                  <a href="mailto:info@itlcindia.com" className="hover:text-primary block">info@itlcindia.com</a>
                              </div>
                          </div>
                      </div>
                       <div className="flex flex-col sm:flex-row gap-4">
                          <Button asChild className="w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition-all">
                              <Link href="https://maps.app.goo.gl/uP9b9y2v9L6N4aT96" target="_blank">Get Directions</Link>
                          </Button>
                          <Button asChild variant="outline" className="w-full sm:w-auto rounded-full border-blue-500 text-blue-500 font-semibold px-6 py-3 shadow-lg hover:bg-blue-500 hover:text-white transition-all">
                              <Link href="tel:+919532341000">Call Now</Link>
                          </Button>
                      </div>
                  </div>

                  <div className="space-y-8">
                     {officeInfo.map((info) => (
                       <div key={info.title} className="group relative p-8 bg-[#f8fbff] rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                           <div className="absolute -inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300">
                               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 blur-xl"></div>
                           </div>
                           <div className="relative flex items-center gap-6">
                              <div className="relative inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20">
                                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-lg transition-all duration-300 group-hover:opacity-40 group-hover:scale-110"></div>
                                  {info.icon}
                              </div>
                              <div>
                                  <h3 className="text-xl font-bold text-[#0b1f3a]">{info.title}</h3>
                                  <p className="text-[#5f6f86]">{info.description}</p>
                              </div>
                           </div>
                       </div>
                     ))}
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-blue-200/50 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-2xl">
                      <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                              <FormField control={form.control} name="name" render={({ field }) => (
                                  <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                               <FormField control={form.control} name="company" render={({ field }) => (
                                  <FormItem><FormLabel>Company Name</FormLabel><FormControl><Input placeholder="Your Company" {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="email" render={({ field }) => (
                                  <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="your.email@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="phone" render={({ field }) => (
                                  <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="+91 12345 67890" {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                               <FormField control={form.control} name="service" render={({ field }) => (
                                  <FormItem>
                                      <FormLabel>Service Interested In</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                          <FormControl>
                                              <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                              {services.map(service => <SelectItem key={service} value={service}>{service}</SelectItem>)}
                                          </SelectContent>
                                      </Select>
                                      <FormMessage />
                                  </FormItem>
                               )} />
                              <FormField control={form.control} name="message" render={({ field }) => (
                                  <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Tell us about your project..." className="min-h-[120px]" {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                              <Button type="submit" size="lg" className="w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all">Request Consultation</Button>
                          </form>
                      </Form>
                       <div className="mt-6 text-center">
                          <div className="flex justify-center items-center gap-4 mb-2">
                             <ShieldCheck className="h-5 w-5 text-green-500" />
                             <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="text-xs text-[#5f6f86]">Your data is secure. We follow strict privacy standards.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
