import { Shield, FileText, User, Mail, Database, Share2, ShieldCheck, LifeBuoy, Clock } from 'lucide-react';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Privacy Policy | ITLC INDIA PVT LTD',
  description: 'Read ITLC INDIA PVT LTD\'s privacy policy to understand how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 flex items-center justify-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Privacy Policy
              </h1>
              <p className="text-lg text-white/80">
                Your privacy is important to us. It is ITLC INDIA PVT LTD's policy to respect your privacy regarding any information we may collect from you across our website.
              </p>
              <p className="text-sm text-white/60">Last updated: August 01, 2024</p>
            </div>
             <div className="relative flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
                <ShieldCheck className="h-48 w-48 text-blue-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-screen-lg mx-auto px-4 text-gray-700 space-y-12">
          
          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><FileText className="h-6 w-6 text-primary" />1. Introduction</h2>
            <p>We at ITLC INDIA PVT LTD (“we”, “us”, “our”) respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><User className="h-6 w-6 text-primary" />2. Information We Collect</h2>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name when you fill out a contact form.</li>
              <li><strong>Usage Details:</strong> We may automatically collect certain details of your visits to our website, including traffic data, location data, logs, and other communication data.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Mail className="h-6 w-6 text-primary" />3. How We Use Your Information</h2>
            <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>To present our website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our website or any products or services we offer.</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Database className="h-6 w-6 text-primary" />4. Data Security</h2>
            <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Share2 className="h-6 w-6 text-primary" />5. Disclosure of Your Information</h2>
            <p>We do not share any personally identifying information publicly or with third-parties, except when required to by law. We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-primary" />6. Your Rights</h2>
            <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Clock className="h-6 w-6 text-primary" />7. Changes to Our Privacy Policy</h2>
            <p>It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page. The date the privacy policy was last revised is identified at the top of the page.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><LifeBuoy className="h-6 w-6 text-primary" />8. Contact Information</h2>
            <p>To ask questions or comment about this privacy policy and our privacy practices, you can contact us at: <a href="mailto:info.itlcindia@gmail.com" className="text-primary hover:underline">info.itlcindia@gmail.com</a></p>
          </div>

        </div>
      </section>
    </>
  );
}
