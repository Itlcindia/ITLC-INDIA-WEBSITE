import { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { Poppins } from 'next/font/google';
import { ClientLayout } from '@/components/client-layout';
import { SiteShell } from '@/components/site-shell';
import { NavigationProgress } from '@/components/navigation-progress';
import { Metadata } from 'next';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'ITLC INDIA PVT LTD - Leading IT & AI Solutions Company',
    template: '%s | ITLC INDIA PVT LTD',
  },
  description: 'ITLC INDIA PVT LTD provides enterprise-grade AI automation, custom software development, CRM systems, and digital marketing solutions. Empowering businesses with innovative technology since 2015.',
  keywords: ['ITLC INDIA', 'ITLC INDIA PVT LTD', 'Software Development Lucknow', 'AI Automation', 'CRM Development India', 'Digital Marketing Services', 'Political Campaign Management', 'HR Training with AI'],
  authors: [{ name: 'ITLC INDIA PVT LTD' }],
  creator: 'ITLC INDIA PVT LTD',
  publisher: 'ITLC INDIA PVT LTD',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://itlcindia.com'),
  icons: {
    icon: '/real/1.png',
    shortcut: '/real/1.png',
    apple: '/real/1.png',
  },
  openGraph: {
    title: 'ITLC INDIA PVT LTD - Empowering Your Digital Future',
    description: 'Premier technology partner for AI, SaaS, and Enterprise solutions.',
    url: 'https://itlcindia.com',
    siteName: 'ITLC INDIA PVT LTD',
    images: [
      {
        url: '/real/1.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITLC INDIA PVT LTD',
    description: 'Transforming businesses with AI and Custom Software solutions.',
    images: ['/real/1.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} !scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-5020716602157264" />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-background relative font-body" suppressHydrationWarning>
        <Script
          id="google-adsense"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5020716602157264"
          crossOrigin="anonymous"
        />
        <Script
          id="google-gtag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WQQ3N6DVZZ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WQQ3N6DVZZ');
            `,
          }}
        />
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>
        <SiteShell>
          <ClientLayout>
            {children}
          </ClientLayout>
        </SiteShell>
        <Toaster />
      </body>
    </html>
  );
}
