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
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out to ITLC INDIA PVT LTD. We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="container px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-primary">Get In Touch</h2>
        <p className="max-w-[85%] leading-normal text-[#333333] sm:text-lg sm:leading-7">
          Have a project in mind or want to learn more about ITLC India? We'd love to hear from you.
        </p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
            <h3 className="font-headline text-2xl font-semibold">Contact Information</h3>
            <p className="text-[#333333]">Fill out the form, or if you prefer, you can reach us through the channels below. We look forward to connecting with you!</p>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:info.itlcindia@gmail.com" className="hover:underline">info.itlcindia@gmail.com</a>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+919532341000" className="hover:underline">(+91) 953 234 1000</a>
                </div>
                <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>G1/0049,Olive Wood Villa, Golf City, Lucknow, Uttar Pradesh – 226002</span>
                </div>
            </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about your project..." className="min-h-[150px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full rounded-full bg-primary text-white shadow-lg">Send Message</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
