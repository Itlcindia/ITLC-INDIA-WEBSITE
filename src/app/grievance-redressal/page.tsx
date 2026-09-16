import { Target, Users, AlertTriangle, Mail, Search, Lock, ShieldAlert, Settings, CheckCircle, RefreshCcw, Scale } from 'lucide-react';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Grievance Redressal Policy | ITLC INDIA PVT LTD',
  description: 'Grievance Redressal Policy of ITLC India Pvt Ltd, providing a structured mechanism for employees and stakeholders to raise concerns and seek resolution.',
}

export default function GrievanceRedressalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 flex items-center justify-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Grievance Redressal Policy
              </h1>
              <p className="text-lg text-white/80">
                Maintaining a fair, transparent, and supportive work environment for all employees and stakeholders.
              </p>
              <p className="text-sm text-white/60">Last updated: August 01, 2024</p>
            </div>
             <div className="relative flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
                <Scale className="h-48 w-48 text-blue-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-screen-lg mx-auto px-4 text-gray-700 space-y-12">
          
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              ITLC India Pvt Ltd, recognized as a No.1 IT Company in Lucknow, India and among the best IT companies in India, is committed to maintaining a fair, transparent, and supportive work environment. This Grievance Redressal Policy provides a structured mechanism for employees and stakeholders to raise concerns and seek resolution.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" /> Purpose
            </h2>
            <p>The purpose of this policy is to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Provide a clear process for addressing complaints and grievances</li>
              <li>Ensure fair and unbiased resolution of issues</li>
              <li>Promote transparency and accountability</li>
              <li>Enhance employee satisfaction and trust</li>
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
              <li>Vendors, clients, and stakeholders associated with ITLC India Pvt Ltd</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" /> Types of Grievances
            </h2>
            <p>Grievances may include, but are not limited to:</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  "Workplace conflicts or disputes",
                  "Harassment or discrimination concerns",
                  "Unfair treatment or management practices",
                  "Compensation or benefits-related issues",
                  "Policy violations or ethical concerns"
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary" /> Grievance Submission Process
            </h2>
            <p>Employees or stakeholders can submit grievances through:</p>
            <ul className="list-disc list-inside space-y-3 pl-4">
              <li><strong>Email:</strong> <a href="mailto:info@itlcindia.com" className="text-primary hover:underline font-medium">info@itlcindia.com</a></li>
              <li><strong>Written complaint:</strong> Direct submission to the management at the head office</li>
            </ul>
            <p className="text-sm italic text-muted-foreground bg-blue-50 p-4 rounded-lg border border-blue-100">
              The complaint should include relevant details, supporting documents, and a clear description of the issue to facilitate a swift resolution.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Search className="h-6 w-6 text-primary" /> Redressal Process</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>All grievances will be acknowledged within a reasonable time frame.</li>
              <li>A fair and impartial investigation will be conducted by the relevant department or committee.</li>
              <li>Both parties involved in the grievance will be given an opportunity to present their case.</li>
              <li>A formal resolution or decision will be provided within a defined timeframe.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Lock className="h-6 w-6 text-primary" /> Confidentiality
            </h2>
            <p>
              ITLC India Pvt Ltd ensures that all grievances are handled with strict confidentiality to protect the privacy of all involved parties. Information will only be shared with individuals strictly necessary for the investigation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-primary" /> Protection Against Retaliation
            </h2>
            <p>
              The company strictly prohibits retaliation against any individual who raises a grievance in good faith. Any such action will be subject to strict disciplinary measures as per company policy.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Settings className="h-6 w-6 text-primary" /> Escalation Mechanism
            </h2>
            <p>
              If the grievance is not resolved satisfactorily at the initial level, it may be escalated to higher management for further review and a final decision.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary" /> Compliance
            </h2>
            <p>
              ITLC India Pvt Ltd ensures compliance with all applicable labor laws and corporate governance standards in India regarding employee grievances and workplace fairness.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <RefreshCcw className="h-6 w-6 text-primary" /> Amendments
            </h2>
            <p>
              The company reserves the right to update or modify this policy at any time to ensure its effectiveness and compliance with changing regulations.
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
