import type { Metadata } from 'next';
import './globals.css';
// Rebuild trigger: Colors swapped
import SocialButtons from '../components/SocialButtons';

import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'אבי צוובנר - עיצוב פנים',
  description: 'סטודיו לעיצוב פנים המתמחה בחללים מסחריים, מאפיות, ובתים פרטיים.',
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
        {/* Background Image */}
        <div className="fixed inset-0 z-[-1]">
          <Image
            src="/bg.jpg"
            alt="Reference Background"
            fill
            className="object-cover opacity-100" // Adjust opacity if needed later
            priority
          />
        </div>

        <Navbar />
        {children}
        <SocialButtons />
      </body>
    </html>
  );
}
