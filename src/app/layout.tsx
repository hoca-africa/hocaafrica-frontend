import type { Metadata } from 'next';
import './globals.css';
import HeaderPage from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet"></link>
      </head>
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
