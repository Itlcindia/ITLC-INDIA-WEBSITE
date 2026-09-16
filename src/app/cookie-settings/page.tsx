import { Settings, Info, ShieldCheck, SlidersHorizontal, Lock, Mail, Clock, ShieldAlert, Monitor, Fingerprint } from 'lucide-react';
import { Metadata } from 'next';
import PolygonHeroBackground from '@/components/ui/polygon-hero-background';

export const metadata: Metadata = {
  title: 'Cookie Settings | ITLC INDIA PVT LTD',
  description: 'Manage and customize your cookie preferences on the ITLC India Pvt Ltd website. Learn about our cookie usage and how to control your personal data.',
  keywords: ['Cookie Settings India', 'Manage Cookies Website India', 'IT Company Cookie Control Policy', 'ITLC India Pvt Ltd Cookie Settings', 'No.1 IT Company in Lucknow', 'Best IT Company in India', 'Website Privacy Controls', 'Data Tracking Preferences India'],
}

export default function CookieSettingsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 flex items-center justify-center text-white overflow-hidden">
        <PolygonHeroBackground />
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Cookie Settings
              </h1>
              <p className="text-lg text-white/80">
                Manage your privacy preferences and control how we use cookies to improve your experience.
              </p>
              <p className="text-sm text-white/60">Last updated: August 01, 2024</p>
            </div>
             <div className="relative flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
                <SlidersHorizontal className="h-48 w-48 text-blue-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-screen-lg mx-auto px-4 text-gray-700 space-y-12">
          
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              ITLC India Pvt Ltd, recognized as a No.1 IT Company in Lucknow, India and among the best IT companies in India, provides users with control over how cookies are used on our website. This Cookie Settings Policy explains how you can manage and customize your cookie preferences.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Info className="h-6 w-6 text-primary" /> What Are Cookie Settings
            </h2>
            <p>
              Cookie settings allow users to control which types of cookies are stored on their devices when browsing our website. These settings help ensure transparency and user control over personal data.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Settings className="h-6 w-6 text-primary" /> Types of Cookies You Can Manage
            </h2>
            <div className="grid gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row gap-6">
                    <div className="h-12 w-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                        <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Essential Cookies</h3>
                        <p className="text-sm">These cookies are necessary for the website to function properly and cannot be disabled. They enable core features such as security, network management, and accessibility.</p>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row gap-6">
                    <div className="h-12 w-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                        <Fingerprint className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Performance Cookies</h3>
                        <p className="text-sm">These cookies help us understand how visitors interact with our website by collecting anonymous data. You can choose to enable or disable these cookies in your browser.</p>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row gap-6">
                    <div className="h-12 w-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                        <Monitor className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Functional Cookies</h3>
                        <p className="text-sm">These cookies remember your preferences and provide enhanced, personalized features such as language selection or theme. These can be managed based on your choice.</p>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row gap-6">
                    <div className="h-12 w-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                        <ShieldAlert className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Advertising Cookies</h3>
                        <p className="text-sm">These cookies are used to deliver relevant advertisements and track marketing performance. You have full control to accept or reject these cookies.</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <SlidersHorizontal className="h-6 w-6 text-primary" /> How to Manage Cookie Settings
            </h2>
            <p>Users can manage cookie preferences through:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Website cookie consent banner (Accept / Reject / Customize)</li>
              <li>Browser settings (Chrome, Firefox, Edge, Safari)</li>
              <li>Third-party tools for privacy control</li>
            </ul>
            <p className="font-medium italic mt-4">You can update your preferences at any time through your browser settings.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" /> Changes to Cookie Preferences
            </h2>
            <p>
              You can modify or withdraw your consent at any time by accessing the Cookie Settings option available via your browser or the tools provided on our website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-primary" /> Impact of Disabling Cookies
            </h2>
            <p className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400 text-orange-800">
              Disabling certain cookies may affect website performance and limit access to some features and functionalities.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-2xl tracking-tight text-gray-800 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-primary" /> Data Protection
            </h2>
            <p>
              All cookie-related data is handled securely and in accordance with our <a href="/data-protection" className="text-primary hover:underline">Data Protection Policy</a> and applicable laws in India.
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
