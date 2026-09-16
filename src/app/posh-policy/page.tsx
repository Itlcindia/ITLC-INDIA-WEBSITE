import { ShieldCheck, Target, Users, AlertTriangle, UserCheck, FileText, Search, Hammer, ShieldAlert, BookOpen, Mail } from 'lucide-react';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'POSH Policy | ITLC INDIA PVT LTD',
  description: 'Prevention of Sexual Harassment (POSH) Policy of ITLC India Pvt Ltd, ensuring a safe and respectful workplace for all.',
}

export default function PoshPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 flex items-center justify-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                POSH Policy
              </h1>
              <p className="text-lg text-white/80">
                Prevention of Sexual Harassment — Committed to a safe, secure, and respectful workplace for all.
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

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-screen-lg mx-auto px-4 text-gray-700 space-y-12">
          
          <div className="space-y-4">
            <p className="text-lg leading-relaxed italic">
              ITLC India Pvt Ltd, recognized as a No.1 IT Company in Lucknow, India and among the best IT companies in India, is committed to providing a safe, secure, and respectful workplace for all employees. This POSH Policy is established in accordance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Target className="h-6 w-6 text-primary" />Purpose</h2>
            <p>The purpose of this policy is to prevent, prohibit, and address sexual harassment at the workplace and to ensure a safe working environment for all employees, especially women.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Users className="h-6 w-6 text-primary" />Scope</h2>
            <p>This policy applies to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>All employees (permanent, temporary, interns, consultants)</li>
              <li>Visitors, clients, and vendors</li>
              <li>All workplace locations, including office premises and work-related events</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><AlertTriangle className="h-6 w-6 text-primary" />Definition of Sexual Harassment</h2>
            <p>Sexual harassment includes any unwelcome act or behavior, whether directly or by implication, such as:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Physical contact or advances</li>
              <li>Demand or request for sexual favors</li>
              <li>Making sexually colored remarks</li>
              <li>Showing pornography</li>
              <li>Any other unwelcome physical, verbal, or non-verbal conduct of a sexual nature</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><UserCheck className="h-6 w-6 text-primary" />Internal Complaints Committee (ICC)</h2>
            <p>ITLC India Pvt Ltd has established an Internal Complaints Committee (ICC) to address complaints related to sexual harassment.</p>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Composition of ICC</h3>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-green-500" /> <span>Presiding Officer (Senior woman employee)</span></li>
                    <li className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-green-500" /> <span>At least two employee members</span></li>
                    <li className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-green-500" /> <span>One external member (NGO or legal expert)</span></li>
                </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><FileText className="h-6 w-6 text-primary" />Complaint Procedure</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>A written complaint must be submitted within 3 months of the incident</li>
              <li>The ICC will initiate an inquiry within a reasonable timeframe</li>
              <li>Both parties will be given a fair opportunity to be heard</li>
              <li>Confidentiality will be strictly maintained</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Search className="h-6 w-6 text-primary" />Inquiry Process</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>The ICC will conduct a neutral and unbiased investigation</li>
              <li>Evidence and witness statements will be reviewed</li>
              <li>The inquiry will be completed within the legally prescribed timeline</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Hammer className="h-6 w-6 text-primary" />Action and Consequences</h2>
            <p>If the complaint is proven, actions may include:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Written apology</li>
              <li>Warning or reprimand</li>
              <li>Suspension or termination</li>
              <li>Legal action as per applicable laws</li>
            </ul>
            <p className="text-sm italic text-red-500">Note: False complaints made with malicious intent may also lead to disciplinary action.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><ShieldAlert className="h-6 w-6 text-primary" />Protection Against Retaliation</h2>
            <p>ITLC India Pvt Ltd strictly prohibits retaliation against any individual who reports harassment or participates in an investigation.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><BookOpen className="h-6 w-6 text-primary" />Awareness and Training</h2>
            <p>The company conducts regular awareness programs and training sessions to educate employees about workplace safety and POSH compliance.</p>
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
