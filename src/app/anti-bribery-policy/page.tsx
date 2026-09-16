import { Target, Users, AlertTriangle, CheckCircle, Gift, Megaphone, ShieldAlert, Settings, Mail, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Anti-Bribery Policy | ITLC INDIA PVT LTD',
  description: 'ITLC India Pvt Ltd Anti-Bribery Policy outlining our zero-tolerance approach towards bribery and corruption.',
}

export default function AntiBriberyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 flex items-center justify-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Anti-Bribery Policy
              </h1>
              <p className="text-lg text-white/80">
                Commitment to integrity, transparency, and the highest ethical standards.
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
            <p className="text-lg leading-relaxed">ITLC India Pvt Ltd, recognized as a No.1 IT Company in Lucknow, India and among the best IT companies in India, is committed to conducting business with integrity, transparency, and the highest ethical standards. This Anti-Bribery Policy outlines our zero-tolerance approach towards bribery and corruption in all forms.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Target className="h-6 w-6 text-primary" />Purpose</h2>
            <p>The purpose of this policy is to ensure compliance with applicable anti-corruption laws and to promote ethical business practices across all operations of ITLC India Pvt Ltd.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Users className="h-6 w-6 text-primary" />Scope</h2>
            <p>This policy applies to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>All employees, directors, and officers</li>
              <li>Consultants, contractors, and third-party partners</li>
              <li>Vendors and service providers associated with ITLC India Pvt Ltd</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><AlertTriangle className="h-6 w-6 text-primary" />What is Bribery</h2>
            <p>Bribery refers to offering, giving, receiving, or soliciting anything of value to influence a business decision improperly. This includes:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Cash payments or kickbacks</li>
              <li>Gifts, hospitality, or favors beyond reasonable limits</li>
              <li>Any advantage intended to secure unfair business benefits</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary" />Our Commitment</h2>
            <p>ITLC India Pvt Ltd strictly prohibits:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Offering or accepting bribes in any form</li>
              <li>Facilitating payments to government officials or private parties</li>
              <li>Engaging in any corrupt business practices</li>
            </ul>
            <p>We ensure that all business dealings are conducted fairly, honestly, and in compliance with applicable laws.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Gift className="h-6 w-6 text-primary" />Gifts and Hospitality</h2>
            <p>Reasonable and lawful gifts or hospitality may be permitted if they:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Are not intended to influence decisions</li>
              <li>Are of nominal value</li>
              <li>Comply with applicable laws and company standards</li>
            </ul>
            <p>Any excessive or inappropriate gifts must be reported.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Megaphone className="h-6 w-6 text-primary" />Reporting Concerns</h2>
            <p>Employees and stakeholders are encouraged to report any suspected bribery or unethical behavior. Reports can be made confidentially without fear of retaliation.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><ShieldAlert className="h-6 w-6 text-primary" />Consequences of Violations</h2>
            <p>Violation of this policy may result in:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Disciplinary action, including termination</li>
              <li>Legal action under applicable laws</li>
              <li>Damage to professional reputation</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3"><Settings className="h-6 w-6 text-primary" />Compliance and Monitoring</h2>
            <p>ITLC India Pvt Ltd regularly reviews and monitors its processes to ensure compliance with this Anti-Bribery Policy and applicable regulations.</p>
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
