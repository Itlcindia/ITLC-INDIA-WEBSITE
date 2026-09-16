import { Target, Users, Briefcase, Scale, Heart, Lock, Monitor, ShieldCheck, Megaphone, AlertTriangle, RefreshCcw } from 'lucide-react';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Code of Conduct | ITLC INDIA PVT LTD',
  description: 'The Code of Conduct of ITLC India Pvt Ltd, outlining our principles of professionalism, ethics, and integrity.',
}

export default function CodeOfConductPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 flex items-center justify-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Code of Conduct
              </h1>
              <p className="text-lg text-white/80">
                Maintaining the highest standards of professionalism, ethics, and integrity in everything we do.
              </p>
              <p className="text-sm text-white/60">Last updated: August 01, 2024</p>
            </div>
             <div className="relative flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
                <Briefcase className="h-48 w-48 text-blue-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-screen-lg mx-auto px-4 text-gray-700 space-y-12">
          
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              ITLC India Pvt Ltd, recognized as a No.1 IT Company in Lucknow, India and among the best IT companies in India, is committed to maintaining the highest standards of professionalism, ethics, and integrity. This Code of Conduct outlines the principles and expectations for all employees and stakeholders.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" /> Purpose
            </h2>
            <p>The purpose of this Code of Conduct is to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Define ethical standards and professional behavior</li>
              <li>Ensure compliance with applicable laws and regulations</li>
              <li>Promote a respectful and inclusive work environment</li>
              <li>Protect the company’s reputation and values</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" /> Scope
            </h2>
            <p>This Code applies to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>All employees (permanent, temporary, interns)</li>
              <li>Directors and management</li>
              <li>Consultants, vendors, and business partners associated with ITLC India Pvt Ltd</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" /> Professional Conduct
            </h2>
            <p>All individuals must:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Act with honesty, integrity, and transparency</li>
              <li>Perform duties responsibly and efficiently</li>
              <li>Avoid conflicts of interest</li>
              <li>Maintain professionalism in all interactions</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Scale className="h-6 w-6 text-primary" /> Compliance with Laws
            </h2>
            <p>
              Employees must comply with all applicable local, national, and international laws, including those related to IT services, data protection, and corporate governance.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Heart className="h-6 w-6 text-primary" /> Workplace Behavior
            </h2>
            <p>ITLC India Pvt Ltd promotes a respectful workplace. The following are strictly prohibited:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Harassment or discrimination of any kind</li>
              <li>Use of abusive or inappropriate language</li>
              <li>Workplace violence or misconduct</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Lock className="h-6 w-6 text-primary" /> Confidentiality and Data Protection</h2>
            <p>Employees must:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Protect confidential company and client information</li>
              <li>Avoid unauthorized disclosure of sensitive data</li>
              <li>Follow all data protection and cybersecurity policies</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Monitor className="h-6 w-6 text-primary" /> Use of Company Assets
            </h2>
            <p>
              Company resources, including systems, devices, and data, must be used responsibly and only for authorized business purposes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-primary" /> Anti-Bribery and Corruption
            </h2>
            <p>
              All employees must adhere to strict anti-bribery standards and must not engage in any form of corruption or unethical practices.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Megaphone className="h-6 w-6 text-primary" /> Reporting Violations
            </h2>
            <p>
              Any violations of this Code of Conduct should be reported through the appropriate channels, including email at <a href="mailto:info@itlcindia.com" className="text-primary hover:underline font-medium">info@itlcindia.com</a>. All reports will be handled confidentially.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" /> Disciplinary Action
            </h2>
            <p>Failure to comply with this Code may result in:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Warning or disciplinary action</li>
              <li>Suspension or termination</li>
              <li>Legal consequences, if applicable</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <RefreshCcw className="h-6 w-6 text-primary" /> Amendments
            </h2>
            <p>
              ITLC India Pvt Ltd reserves the right to update or modify this Code of Conduct at any time.
            </p>
          </div>

          <div className="space-y-4 pt-12 border-t border-slate-100">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800">Contact Information</h2>
            <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Company Name</p>
                    <p className="font-medium">ITLC INDIA PVT LTD</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                    <p className="font-medium"><a href="mailto:info@itlcindia.com" className="text-primary hover:underline">info@itlcindia.com</a></p>
                </div>
                <div className="space-y-1 sm:col-span-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Address</p>
                    <p className="font-medium">G1/0049, Olive Wood Villa, Golf City, Lucknow, Uttar Pradesh – 226030</p>
                </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
