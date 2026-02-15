import type { Metadata } from 'next';
import './globals.css';
// Rebuild trigger: Colors swapped
import SocialButtons from '../components/SocialButtons';

import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: {
    default: 'אבי צוובנר - עיצוב פנים',
    template: '%s | אבי צוובנר',
  },
  description: 'סטודיו AZ Designs לאדריכלות ועיצוב פנים – מתמחים בעיצוב חללים מסחריים, בתי קפה, מאפיות, מעדניות ודירות מגורים. בוגר לימודי חוץ בטכניון.',
  authors: [{ name: 'אבי צוובנר' }],
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://azdesigns.co.il',
    siteName: 'אבי צוובנר - עיצוב פנים',
    title: 'אבי צוובנר - עיצוב פנים',
    description: 'סטודיו AZ Designs לאדריכלות ועיצוב פנים – מתמחים בעיצוב חללים מסחריים, בתי קפה, מאפיות, מעדניות ודירות מגורים. בוגר לימודי חוץ בטכניון.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אבי צוובנר - עיצוב פנים',
    description: 'סטודיו AZ Designs לאדריכלות ועיצוב פנים – מתמחים בעיצוב חללים מסחריים, בתי קפה, מאפיות, מעדניות ודירות מגורים. בוגר לימודי חוץ בטכניון.',
  },
  metadataBase: new URL('https://azdesigns.co.il'),
};

import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased min-h-screen flex flex-col relative">
        {/* Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-2 focus:z-[100] focus:bg-[var(--accent)] focus:text-[var(--background)] focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          דלג לתוכן הראשי
        </a>

        {/* Background Image */}
        <div className="fixed inset-0 z-[-1]">
          <Image
            src="/bg.jpeg"
            alt=""
            fill
            className="object-cover opacity-100"
            priority
          />
        </div>

        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <SocialButtons />
      </body>
    </html>
  );
}
