import { Target, Users, CheckCircle, Slash, Heart, ShieldAlert, Megaphone, Settings, RefreshCcw, Mail, UserCheck } from 'lucide-react';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Equal Opportunity Policy | ITLC INDIA PVT LTD',
  description: 'ITLC India Pvt Ltd Equal Opportunity Policy outlining our commitment to providing a diverse, inclusive, and merit-based workplace.',
}

export default function EqualOpportunityPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 flex items-center justify-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Equal Opportunity Policy
              </h1>
              <p className="text-lg text-white/80">
                Commitment to providing a diverse, inclusive, and merit-based workplace for all.
              </p>
              <p className="text-sm text-white/60">Last updated: August 01, 2024</p>
            </div>
             <div className="relative flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
                <UserCheck className="h-48 w-48 text-blue-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-screen-lg mx-auto px-4 text-gray-700 space-y-12">
          
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              ITLC India Pvt Ltd, recognized as a No.1 IT Company in Lucknow, India and among the best IT companies in India, is committed to providing equal opportunity in employment and maintaining a diverse, inclusive, and merit-based workplace.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" /> Purpose
            </h2>
            <p>The purpose of this Equal Opportunity Policy is to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Promote fairness and equality in all employment practices</li>
              <li>Ensure a workplace free from discrimination</li>
              <li>Encourage diversity and inclusion</li>
              <li>Support equal growth and development opportunities</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" /> Scope
            </h2>
            <p>This policy applies to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>All employees (permanent, temporary, interns)</li>
              <li>Job applicants and candidates</li>
              <li>Contractors, consultants, and business partners associated with ITLC India Pvt Ltd</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary" /> Equal Opportunity Commitment
            </h2>
            <p>ITLC India Pvt Ltd provides equal opportunity in:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Recruitment and hiring</li>
              <li>Training and development</li>
              <li>Compensation and benefits</li>
              <li>Promotions and career advancement</li>
            </ul>
            <p className="font-medium text-slate-900 italic bg-slate-50 p-4 rounded-lg border-l-4 border-primary">
              All decisions are based on merit, qualifications, and business needs.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Slash className="h-6 w-6 text-primary" /> Non-Discrimination Policy
            </h2>
            <p>The company strictly prohibits discrimination based on:</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  "Gender, sex, or sexual orientation",
                  "Religion or belief",
                  "Caste, race, or ethnicity",
                  "Age or disability",
                  "Marital status or nationality"
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-red-50/50 rounded-xl border border-red-100 flex items-center gap-3">
                    <Slash className="h-4 w-4 text-red-500 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Heart className="h-6 w-6 text-primary" /> Inclusive Workplace
            </h2>
            <p>We are committed to creating a workplace that:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Respects individual differences</li>
              <li>Encourages collaboration and innovation</li>
              <li>Promotes dignity and mutual respect</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-primary" /> Harassment-Free Environment
            </h2>
            <p>Any form of harassment, bullying, or unfair treatment is strictly prohibited and will be addressed as per company policies.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Megaphone className="h-6 w-6 text-primary" /> Reporting Concerns
            </h2>
            <p>Employees and applicants can report any discrimination or unfair treatment to:</p>
            <p className="flex items-center gap-2 font-medium">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:info@itlcindia.com" className="text-primary hover:underline">info@itlcindia.com</a>
            </p>
            <p className="text-sm italic text-muted-foreground">All complaints will be handled confidentially and investigated fairly.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Settings className="h-6 w-6 text-primary" /> Compliance
            </h2>
            <p>ITLC India Pvt Ltd complies with all applicable labor and employment laws related to equal opportunity and non-discrimination in India.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <RefreshCcw className="h-6 w-6 text-primary" /> Amendments
            </h2>
            <p>The company reserves the right to update or modify this policy at any time to ensure compliance and effectiveness.</p>
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
