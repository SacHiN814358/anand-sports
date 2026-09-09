import type { Metadata } from 'next';
import { Inter, Oswald, Syne } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { WhatsAppWidget } from '@/components/ui/whatsapp-widget';
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

export const metadata: Metadata = {
  title: 'Anand Sports — Master Athletic Equipment & Sportswear Distributor Since 1984',
  description: "East India's master distributor for 15+ world-class athletic brands. Serving institutional buyers, tier-1 authorized dealers, and professional athletes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "bg-surface text-on-surface selection:bg-gold-accent selection:text-black min-h-screen flex flex-col antialiased",
          geist.variable,
          oswald.variable,
          syne.variable
        )}
      >
        <CartProvider>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <WhatsAppWidget />
        </CartProvider>
      </body>
    </html>
  );
}