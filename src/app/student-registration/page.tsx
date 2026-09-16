"use client";

import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Users, 
  Copy, 
  FileText, 
  Briefcase,
  Loader2,
  Lock
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

// Schema for registration form
const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  fatherName: z.string().min(2, "Father's name is required."),
  email: z.string().email("Please enter a valid email address."),
  mobileNumber: z.string().min(10, "Please enter a valid 10-digit number."),
  whatsappNumber: z.string().min(10, "Please enter a valid 10-digit number."),
  dob: z.string().min(1, "Date of birth is required."),
  gender: z.string().min(1, "Please select gender."),
  collegeName: z.string().min(2, "College name is required."),
  courseApplied: z.string().min(1, "Please select a course."),
  qualification: z.string().min(1, "Qualification is required."),
  yearSemester: z.string().min(1, "Year/Semester is required."),
  address: z.string().min(5, "Full address is required."),
  city: z.string().min(2, "City is required."),
  state: z.string().min(2, "State is required."),
  pincode: z.string().min(6, "Valid pincode required."),
  // File fields handled manually via FormData
  passportPhoto: z.any().optional(),
  resume: z.any().optional(),
  aadhaarCard: z.any().optional(),
  collegeIdCard: z.any().optional(),
});

interface Course {
  id: string;
  course_name: string;
}

export default function StudentRegistrationPage() {
    const { toast } = useToast();
    const [submitted, setSubmitted] = useState(false);
    const [appId, setAppId] = useState("");
    const [courses, setCourses] = useState<Course[]>([]);
    const [loadingCourses, setLoadingCourses] = useState(true);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            fatherName: "",
            email: "",
            mobileNumber: "",
            whatsappNumber: "",
            dob: "",
            gender: "",
            collegeName: "",
            courseApplied: "",
            qualification: "",
            yearSemester: "",
            address: "",
            city: "",
            state: "",
            pincode: "",
        },
    });

    // Fetch dynamic courses from backend via proxy
    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await fetch("/api/courses");
                if (response.ok) {
                    const data = await response.json();
                    setCourses(data);
                } else {
                    console.error("Failed to fetch courses");
                }
            } catch (error) {
                console.error("Error fetching courses:", error);
            } finally {
                setLoadingCourses(false);
            }
        }
        fetchCourses();
    }, []);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const formData = new FormData();
            
            // Map React fields to backend expected field names
            formData.append('student_name', values.fullName);
            formData.append('father_name', values.fatherName);
            formData.append('email', values.email);
            formData.append('mobile_number', values.mobileNumber);
            formData.append('whatsapp_number', values.whatsappNumber);
            // STANDARD KEY: Using 'date_of_birth' as required by PHP backend save logic
            formData.append('date_of_birth', values.dob);
            formData.append('gender', values.gender);
            formData.append('college_name', values.collegeName);
            formData.append('course_id', values.courseApplied);
            formData.append('qualification', values.qualification);
            formData.append('year_semester', values.yearSemester);
            formData.append('address', values.address);
            formData.append('city', values.city);
            formData.append('state', values.state);
            formData.append('pincode', values.pincode);

            // Handle File Uploads
            const photoInput = document.querySelector('input[name="passportPhoto"]') as HTMLInputElement;
            if (photoInput?.files?.[0]) formData.append('student_photo', photoInput.files[0]);

            const resumeInput = document.querySelector('input[name="resume"]') as HTMLInputElement;
            if (resumeInput?.files?.[0]) formData.append('resume_file', resumeInput.files[0]);

            const aadhaarInput = document.querySelector('input[name="aadhaarCard"]') as HTMLInputElement;
            if (aadhaarInput?.files?.[0]) formData.append('aadhaar_card', aadhaarInput.files[0]);

            const collegeIdInput = document.querySelector('input[name="collegeIdCard"]') as HTMLInputElement;
            if (collegeIdInput?.files?.[0]) formData.append('college_id_card', collegeIdInput.files[0]);

            // Submit to local API proxy
            const response = await fetch("/api/student-registration", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setAppId(result.application_id);
                setSubmitted(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                toast({
                    title: "Application Submitted 🎉",
                    description: `Application ID: ${result.application_id}`,
                });
            } else {
                throw new Error(result.message || "Submission failed");
            }
        } catch (error: any) {
            toast({
                title: "Submission Failed",
                description: error.message || "There was an error submitting your application. Please try again.",
                variant: "destructive",
            });
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(appId);
        toast({
            title: "Copied!",
            description: "Application ID copied to clipboard.",
        });
    };

    if (submitted) {
        return (
            <div className="flex flex-col w-full min-h-screen bg-slate-50/30">
                {/* Hero Section (Condensed for Success) */}
                <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 bg-slate-950 text-white overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-60" />
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-32" />
                    </div>
                    <div className="container relative z-10 max-w-screen-xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <Badge className="bg-green-500 hover:bg-green-600 text-white border-none font-bold uppercase tracking-wider text-[10px] px-4 py-1">
                                Submission Successful
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight max-w-4xl mx-auto">
                                Welcome to <span className="text-primary">ITLC India</span>
                            </h1>
                        </motion.div>
                    </div>
                </section>

                <section className="py-16 md:py-24 -mt-12 relative z-20">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="container max-w-lg mx-auto px-6 text-center"
                    >
                        <Card className="border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] rounded-[40px] overflow-hidden bg-white">
                            <div className="bg-green-500 p-12 text-white">
                                <CheckCircle2 className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-3xl font-black tracking-tight">Registration Successful!</h2>
                                <p className="text-green-50/80 font-medium mt-2">Your application has been received.</p>
                            </div>
                            <CardContent className="p-10 space-y-8">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Your Application ID</p>
                                    <div className="flex items-center justify-center gap-4 bg-slate-50 p-6 rounded-3xl border-2 border-dashed border-slate-200">
                                        <span className="text-3xl font-black text-primary font-mono">{appId}</span>
                                        <Button size="icon" variant="ghost" onClick={copyToClipboard} className="hover:bg-primary/10 text-primary">
                                            <Copy className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                                
                                <div className="grid gap-4 pt-4">
                                    <Button asChild className="h-14 rounded-2xl font-black text-lg shadow-xl shadow-primary/10">
                                        <Link href="/verify-certificate">Go to Verification</Link>
                                    </Button>
                                    <Button variant="outline" onClick={() => { setSubmitted(false); form.reset(); }} className="h-14 rounded-2xl font-bold border-slate-200 text-slate-600">
                                        Submit Another
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </section>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full min-h-screen bg-slate-50/30">
            {/* Hero Section */}
            <section className="relative pt-[200px] pb-24 bg-slate-950 text-white overflow-hidden">
                <PolygonHeroBackground />
                <div className="container relative z-10 max-w-screen-xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary bg-primary/10 rounded-full font-bold uppercase tracking-wider text-[10px]">
                            Student Intake 2025
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight max-w-4xl mx-auto">
                            Professional Training & <br /> <span className="text-primary">Internship Registration</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Join ITLC India's official intake program. Get 100% practical training, industry mentorship, and verified certification to launch your career.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 md:py-24 -mt-12 relative z-20">
                <div className="container max-w-screen-xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Side: Information */}
                        <div className="space-y-10 lg:sticky lg:top-32">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 leading-[1.1]">
                                        Start Your <span className="text-primary">Career with ITLC</span>
                                    </h2>
                                    <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                        Register for our official internship and training programs to gain hands-on experience with industry experts.
                                    </p>
                                </div>
                            </motion.div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    { title: "100% Practical", desc: "Work on live enterprise projects.", icon: <CheckCircle2 className="h-5 w-5" /> },
                                    { title: "Expert Mentors", desc: "Learn from 10+ year veterans.", icon: <Users className="h-5 w-5" /> },
                                    { title: "Job Assistance", desc: "Placement support & guidance.", icon: <Briefcase className="h-5 w-5" /> },
                                    { title: "Valid Certification", desc: "Official verified credentials.", icon: <FileText className="h-5 w-5" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-5 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                        <div className="mt-1 flex-shrink-0 p-2 bg-primary/10 rounded-xl text-primary">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-slate-500 leading-tight">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-10 bg-slate-900 text-white rounded-[40px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                                <h3 className="text-2xl font-bold mb-6">Immediate Support?</h3>
                                <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                                    <Button asChild size="lg" className="rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold h-14 px-8">
                                        <Link href="https://wa.me/919532341000" target="_blank">Chat on WhatsApp</Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 hover:bg-white/10 text-white font-bold h-14 px-8">
                                        <Link href="tel:+919532341000">Call Expert</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Registration Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] rounded-[40px] overflow-hidden bg-white">
                                <CardHeader className="bg-primary text-white p-12 text-center">
                                    <CardTitle className="text-3xl font-black tracking-tight">Student Registration</CardTitle>
                                    <p className="text-primary-foreground/80 text-sm font-medium mt-2">Professional Training & Internship Intake</p>
                                </CardHeader>
                                <CardContent className="p-10">
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                                            
                                            {/* Personal Details */}
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 mb-6">
                                                    <div className="h-8 w-1 bg-primary rounded-full" />
                                                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Personal Details</h3>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <FormField control={form.control} name="fullName" render={({ field }) => (
                                                        <FormItem><FormLabel className="text-xs font-bold text-slate-600">Full Name</FormLabel><FormControl><Input placeholder="John Doe" className="h-12 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="fatherName" render={({ field }) => (
                                                        <FormItem><FormLabel className="text-xs font-bold text-slate-600">Father's Name</FormLabel><FormControl><Input placeholder="Father's Name" className="h-12 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                </div>
                                                <FormField control={form.control} name="email" render={({ field }) => (
                                                    <FormItem><FormLabel className="text-xs font-bold text-slate-600">Email Address</FormLabel><FormControl><Input type="email" placeholder="john@example.com" className="h-12 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                                                )} />
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <FormField control={form.control} name="mobileNumber" render={({ field }) => (
                                                        <FormItem><FormLabel className="text-xs font-bold text-slate-600">Mobile Number</FormLabel><FormControl><Input placeholder="9876543210" className="h-12 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="whatsappNumber" render={({ field }) => (
                                                        <FormItem><FormLabel className="text-xs font-bold text-slate-600">WhatsApp Number</FormLabel><FormControl><Input placeholder="9876543210" className="h-12 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <FormField control={form.control} name="dob" render={({ field }) => (
                                                        <FormItem><FormLabel className="text-xs font-bold text-slate-600">Date of Birth</FormLabel><FormControl><Input type="date" className="h-12 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="gender" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-bold text-slate-600">Gender</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl><SelectTrigger className="h-12 rounded-xl"><SelectValue placeholder="Select" /></SelectTrigger></FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="male">Male</SelectItem>
                                                                    <SelectItem value="female">Female</SelectItem>
                                                                    <SelectItem value="other">Other</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>
                                            </div>

                                            {/* Academic Details */}
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 mb-6">
                                                    <div className="h-8 w-1 bg-primary rounded-full" />
                                                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Academic & Course</h3>
                                                </div>
                                                <FormField control={form.control} name="collegeName" render={({ field }) => (
                                                    <FormItem><FormLabel className="text-xs font-bold text-slate-600">College / University Name</FormLabel><FormControl><Input placeholder="Enter your institute name" className="h-12 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                                                )} />
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <FormField control={form.control} name="courseApplied" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-bold text-slate-600">Course Applied For</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={loadingCourses}>
                                                                <FormControl><SelectTrigger className="h-12 rounded-xl">
                                                                    <SelectValue placeholder={loadingCourses ? "Loading courses..." : "Select Course"} />
                                                                </SelectTrigger></FormControl>
                                                                <SelectContent>
                                                                    {courses.map(course => (
                                                                        <SelectItem key={course.id} value={course.id}>{course.course_name}</SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="qualification" render={({ field }) => (
                                                        <FormItem><FormLabel className="text-xs font-bold text-slate-600">Highest Qualification</FormLabel><FormControl><Input placeholder="e.g. B.Tech, BCA, MBA" className="h-12 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                </div>
                                                <FormField control={form.control} name="yearSemester" render={({ field }) => (
                                                    <FormItem><FormLabel className="text-xs font-bold text-slate-600">Current Year / Semester</FormLabel><FormControl><Input placeholder="e.g. 3rd Year / 6th Semester" className="h-12 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                                                )} />
                                            </div>

                                            {/* Communication Address */}
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 mb-6">
                                                    <div className="h-8 w-1 bg-primary rounded-full" />
                                                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Mailing Address</h3>
                                                </div>
                                                <FormField control={form.control} name="address" render={({ field }) => (
                                                    <FormItem><FormLabel className="text-xs font-bold text-slate-600">Full Address</FormLabel><FormControl><Textarea placeholder="House No, Street, Landmark" className="min-h-[100px] rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                                                )} />
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <FormField control={form.control} name="city" render={({ field }) => (
                                                        <FormItem><FormLabel className="text-xs font-bold text-slate-600">City</FormLabel><FormControl><Input placeholder="Lucknow" className="h-12 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="state" render={({ field }) => (
                                                        <FormItem><FormLabel className="text-xs font-bold text-slate-600">State</FormLabel><FormControl><Input placeholder="Uttar Pradesh" className="h-12 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                </div>
                                                <FormField control={form.control} name="pincode" render={({ field }) => (
                                                    <FormItem><FormLabel className="text-xs font-bold text-slate-600">Pincode</FormLabel><FormControl><Input placeholder="226001" className="h-12 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                                                )} />
                                            </div>

                                            {/* Document Uploads */}
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 mb-6">
                                                    <div className="h-8 w-1 bg-primary rounded-full" />
                                                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Document Uploads</h3>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <FormLabel className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Passport Photo</FormLabel>
                                                        <Input type="file" name="passportPhoto" className="h-12 cursor-pointer bg-slate-50 border-slate-200" accept="image/*" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <FormLabel className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Resume (PDF)</FormLabel>
                                                        <Input type="file" name="resume" className="h-12 cursor-pointer bg-slate-50 border-slate-200" accept=".pdf" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <FormLabel className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Aadhaar Card (Opt)</FormLabel>
                                                        <Input type="file" name="aadhaarCard" className="h-12 cursor-pointer bg-slate-50 border-slate-200" accept=".pdf,image/*" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <FormLabel className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">College ID (Opt)</FormLabel>
                                                        <Input type="file" name="collegeIdCard" className="h-12 cursor-pointer bg-slate-50 border-slate-200" accept=".pdf,image/*" />
                                                    </div>
                                                </div>
                                                <p className="text-[9px] text-slate-400 italic">Max file size: 2MB per document. Supported: JPG, PNG, PDF.</p>
                                            </div>

                                            <Button type="submit" size="lg" className="w-full h-16 rounded-2xl text-lg font-black shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95" disabled={form.formState.isSubmitting}>
                                                {form.formState.isSubmitting ? (
                                                    <span className="flex items-center gap-2">
                                                        <Loader2 className="h-5 w-5 animate-spin" />
                                                        Processing Registration...
                                                    </span>
                                                ) : "Complete Registration"}
                                            </Button>
                                        </form>
                                    </Form>
                                    <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                                        <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                                            By registering, you agree to our Terms of Service and Privacy Policy. ITLC India Pvt Ltd will process your application and contact you for the next steps.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
