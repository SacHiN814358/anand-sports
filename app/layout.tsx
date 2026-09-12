import React, { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Oswald, Syne, Bebas_Neue, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';
import { WhatsAppWidget } from '@/components/ui/whatsapp-widget';
import { RouteProgress } from '@/components/layout/route-progress';
import { CartProvider } from '@/context/cart-context';
import { cn } from '@/lib/utils';

const geist = Inter({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['300', '400', '500', '600', '700'],
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['500', '600', '700'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['500', '600', '700', '800'],
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: ['400'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['600', '700', '800', '900'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://anandsports.com'),
  title: 'Anand Sports — Master Athletic Equipment & Sportswear Distributor Since 1984',
  description: "East India's master distributor for 15+ world-class athletic brands. Serving institutional buyers, tier-1 authorized dealers, and professional athletes.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Anand Sports — Master Athletic Equipment & Sportswear Distributor Since 1984',
    description: "East India's master distributor for 15+ world-class athletic brands. Serving institutional buyers, tier-1 authorized dealers, and professional athletes.",
    url: 'https://anandsports.com',
    siteName: 'Anand Sports',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anand Sports Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anand Sports — Master Athletic Equipment & Sportswear Distributor Since 1984',
    description: "East India's master distributor for 15+ world-class athletic brands. Serving institutional buyers, tier-1 authorized dealers, and professional athletes.",
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "bg-surface text-on-surface selection:bg-gold-accent selection:text-black min-h-screen flex flex-col antialiased pb-16 lg:pb-0",
          geist.variable,
          oswald.variable,
          syne.variable,
          bebas.variable,
          montserrat.variable
        )}
      >
        <CartProvider>
          <Suspense fallback={null}>
            <RouteProgress />
          </Suspense>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <WhatsAppWidget />
          <MobileBottomNav />
        </CartProvider>
      </body>
    </html>
  );
}