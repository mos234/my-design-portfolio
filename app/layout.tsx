import type { Metadata } from 'next';
import './globals.css';
// Rebuild trigger: Colors swapped
import SocialButtons from '../components/SocialButtons';

import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'אבי צוובנר - עיצוב פנים',
  description: 'סטודיו לעיצוב פנים המתמחה בחללים מסחריים, מאפיות, ובתים פרטיים.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        {children}
        <SocialButtons />
      </body>
    </html>
  );
}
