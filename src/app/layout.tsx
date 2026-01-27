import type { Metadata } from 'next';
import './globals.css';
import HeaderPage from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Poppins, Open_Sans } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Hoca-africa',
    template: "%s | HOCA Africa",
  },
  description:
    "Home Care Alliance Africa (HOCA-A) is a Pan-African, not-for-profit alliance dedicated to developing systems, standards, and regulatory frameworks for home-based and geriatric care across the continent.",

  metadataBase: new URL("https://hoca-africa.org"),
  alternates: {
    canonical: "https://hoca-africa.org",
  },
  openGraph: {
    title: "HOCA Africa",
    description:
      "Building Africa’s Future of Elder Care",
    url: "https://hoca-africa.org",
    siteName: "HOCA Africa",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className={cn(
        'scroll-smooth',
        poppins.variable,
        openSans.variable,
      )} >
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
        <HeaderPage />
        <main className="flex-1 px-[auto] ">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
