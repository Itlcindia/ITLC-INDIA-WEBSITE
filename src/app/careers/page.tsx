"use client";

import React, { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Search, Briefcase, IndianRupee, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

interface PublicJob {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience?: string;
  salary?: string;
  description: string;
  requirements?: string;
  status: string;
}

const companyValues = [
    { title: "Innovation", description: "We are constantly pushing the boundaries of what's possible." },
    { title: "Client Success", description: "Our clients are at the heart of everything we do." },
    { title: "Team Collaboration", description: "We believe in the power of working together." },
    { title: "Continuous Learning", description: "We encourage and support professional growth." },
];

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  position: z.string().min(1, "Please select a position."),
  resume: z.any().refine(files => files?.length === 1, 'Resume is required.'),
  message: z.string().optional(),
});

export default function CareersPage() {
  const { toast } = useToast();
  const [jobs, setJobs] = useState<PublicJob[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      message: "",
      resume: undefined,
    },
  });

  const fileRef = form.register("resume");

  useEffect(() => {
    let isMounted = true;
    async function fetchActiveJobs() {
      try {
        const res = await fetch("/api/careers?status=ACTIVE");
        const data = await res.json();
        if (isMounted && data.success && Array.isArray(data.jobs)) {
          setJobs(data.jobs);
        }
      } catch (err) {
        console.error("Failed to load jobs:", err);
      } finally {
        if (isMounted) setLoadingJobs(false);
      }
    }
    fetchActiveJobs();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleApplyNow = (jobTitle: string) => {
    form.setValue("position", jobTitle);
    const applySection = document.getElementById("apply-now");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const file = values.resume?.[0];

      // Find matching job details if selected
      const matchedJob = jobs.find(
        (j) => j.title.toLowerCase() === values.position.toLowerCase()
      );

      // 1. Submit directly to local server API for Admin Panel recording
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("phone", values.phone || "");
      formData.append("position", values.position);
      formData.append("message", values.message || "");
      if (matchedJob) {
        formData.append("jobId", matchedJob.id);
        formData.append("jobTitle", matchedJob.title);
        formData.append("jobDept", matchedJob.department);
      }
      if (file) {
        formData.append("resume", file);
      }

      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Submission failed");
      }

      // 2. Also forward to existing Google Script in background
      if (file) {
        try {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const base64 = reader.result as string;
            fetch("https://script.google.com/macros/s/AKfycbzgfMxitiJOxOjipSJ5vzvKfsOyhYsz6DYW4BmRcCqK63Yj9D0Eo4_OTkAMTEZNvvOg/exec", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams({
                fullName: values.fullName,
                email: values.email,
                phone: values.phone || "",
                position: values.position,
                message: values.message || "",
                resume: base64,
              }),
            }).catch(() => {});
          };
        } catch {
          // non-blocking background sync
        }
      }

      toast({
        title: "Application Sent 🎉",
        description: "Your application has been received and saved. Our team will review your profile.",
      });

      form.reset();

    } catch (error) {
      toast({
        title: "Submission Failed ❌",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Build Your Career with ITLC INDIA PVT LTD
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            Work on AI, SaaS & Enterprise Systems. Be part of a passionate team that is building the future of technology. We are looking for talented individuals to join us on our mission.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#current-openings">View Open Positions</Link>
            </Button>
             <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link href="#apply-now">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                     <Image
                        src="/a1.jpg"
                        alt="ITLC Team"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-2xl"
                        data-ai-hint="diverse team working together"
                    />
                </div>
                 <div>
                    <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl mb-6">
                        Why Work at ITLC India?
                    </h2>
                    <p className="text-lg text-[#5f6f86] mb-8">
                        At ITLC, we foster a culture of innovation, collaboration, and growth. We believe in empowering our employees to do their best work and make a real impact.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {companyValues.map((value) => (
                            <div key={value.title} className="p-6 bg-blue-50/50 rounded-lg border border-blue-100 transform transition-transform hover:-translate-y-2 hover:shadow-xl">
                                <h3 className="font-bold text-lg text-primary mb-2">{value.title}</h3>
                                <p className="text-sm text-[#5f6f86]">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section id="current-openings" className="py-16 md:py-24 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl text-slate-900">
              Current Openings
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5f6f86]">
              Find your next career opportunity with us.
            </p>
          </div>

          {loadingJobs ? (
            <div className="py-16 flex flex-col items-center justify-center gap-3 text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              <p className="text-sm font-medium">Loading open positions...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="max-w-xl mx-auto text-center py-12 px-6 bg-slate-50 rounded-2xl border border-slate-200/80">
              <Briefcase className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-slate-800 mb-1">No Active Openings Right Now</h3>
              <p className="text-sm text-slate-500 mb-6">
                We are not actively hiring for specific roles today, but we are always interested in connecting with passionate talent. Submit an open application below!
              </p>
              <Button
                onClick={() => handleApplyNow("General Application")}
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5"
              >
                Submit General Application
              </Button>
            </div>
          ) : (
            <div className="space-y-6 max-w-4xl mx-auto">
              {jobs.map((job) => (
                <Card key={job.id} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-blue-200/50">
                  <CardContent className="p-6 sm:p-8 grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                          {job.department}
                        </span>
                        {job.experience && (
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                            {job.experience}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-xl sm:text-2xl text-slate-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#5f6f86] mb-4">
                        <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-blue-600" /> {job.location}</div>
                        <div className="flex items-center gap-1.5"><Briefcase className="h-4 w-4 text-blue-600" /> {job.type}</div>
                        {job.salary && (
                          <div className="flex items-center gap-1.5"><IndianRupee className="h-4 w-4 text-emerald-600" /> {job.salary}</div>
                        )}
                      </div>
                      <p className="text-[#5f6f86] text-sm sm:text-base leading-relaxed">{job.description}</p>
                    </div>
                    <div className="flex md:justify-end">
                      <Button
                        onClick={() => handleApplyNow(job.title)}
                        size="lg"
                        className="rounded-full bg-gradient-to-r from-[#00b4ff] to-[#0077ff] text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="apply-now" className="py-16 md:py-24 bg-blue-50/50">
        <div className="container max-w-screen-md mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
              Apply Now
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5f6f86]">
              Ready to join our team? Fill out the form below.
            </p>
          </div>
          <Card className="p-8 shadow-2xl border-blue-200/50">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                      <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Your Full Name" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="your.email@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="+91 12345 67890" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="position" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Position Applying For</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || ""}>
                            <FormControl>
                                <SelectTrigger><SelectValue placeholder="Select a position" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {jobs.map((job) => (
                                  <SelectItem key={job.id} value={job.title}>
                                    {job.title} ({job.department})
                                  </SelectItem>
                                ))}
                                <SelectItem value="Other / General Application">Other / General Application</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                  )} />
                </div>
                 <FormField
                  control={form.control}
                  name="resume"
                  render={() => {
                    return (
                      <FormItem>
                        <FormLabel>Upload Resume (PDF)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input type="file" accept=".pdf" {...fileRef} className="w-full" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel>Short Message</FormLabel><FormControl><Textarea placeholder="Anything else you'd like to share?" className="min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <Button type="submit" size="lg" className="w-full rounded-full bg-gradient-to-r from-[#00b4ff] to-[#0077ff] text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all">
                  Submit Application
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </section>

    </>
  );
}
