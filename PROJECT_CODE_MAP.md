# מפת פרויקט: my-design-portfolio

## מבנה התיקיות
```
.
├── app
│   ├── about
│   │   └── page.tsx
│   ├── accessibility
│   │   └── page.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── portfolio
│   │   └── page.tsx
│   ├── privacy-policy
│   │   └── page.tsx
│   ├── process
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── SocialButtons.tsx
├── public
│   └── ...
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## קבצי קונפיגורציה ובסיס

### package.json
```json
{
  "name": "my-design-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### app/globals.css
```css
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap');
@import "tailwindcss";

:root {
  --background: #A26A42;
  /* Earth */
  --foreground: #804A00;
  /* Bronze */
  --accent: #98FFD8;
  /* Mint Green */

  --font-rubik: "Rubik", sans-serif;
}

@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);

  --font-sans: "Rubik", sans-serif;
}

body {
  background-color: transparent;
  color: var(--foreground);
  font-family: var(--font-sans);
  direction: rtl;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 900;
  /* Extra Bold / Black for that "Thick Printed" look */
}
```

### app/layout.tsx
```tsx
import type { Metadata } from 'next';
import './globals.css';
// Rebuild trigger: Colors swapped
import SocialButtons from '../components/SocialButtons';

import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'אבי צוובנר - עיצוב פנים',
  description: 'סטודיו לעיצוב פנים המתמחה בחללים מסחריים, מאפיות, ודירות מגורים.',
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
            src="/bg.jpeg"
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
```


### app/page.tsx
```tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
        <div className="max-w-full animate-fade-in-up space-y-8">

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-[var(--foreground)] leading-tight whitespace-nowrap">
            מעצבים לך <span className="text-[var(--accent)]">את הדמיון</span>
          </h1>

          <div className="flex flex-col gap-2 text-lg md:text-xl text-white font-bold max-w-3xl mx-auto leading-relaxed border-r-4 border-[var(--accent)] bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-2xl text-right w-fit">
            <p className="drop-shadow-md">• בוגר לימודי חוץ בטכניון</p>
            <p className="drop-shadow-md">• בעל חברה ותיקה ומוניטין רב</p>
            <p className="drop-shadow-md">• בוגר תעשיית האירועים וההפקה</p>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/process" className="px-10 py-5 bg-[var(--accent)] text-[var(--background)] text-lg font-bold rounded-full hover:bg-[var(--foreground)] transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
              איך זה עובד?
            </Link>
            <Link href="/contact" className="px-10 py-5 border-[2px] border-[var(--accent)] text-[var(--accent)] text-lg font-bold rounded-full hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all duration-300">
              קבע פגישת ייעוץ
            </Link>
          </div>
        </div>
      </main>

      {/* Intro Section */}
      <section className="py-20 px-4 border-t border-[var(--foreground)]/5 backdrop-blur-sm bg-[var(--background)]/80">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-black text-[var(--foreground)]">נעים להכיר, אני אבי</h2>
          <p className="text-xl leading-relaxed font-medium text-[var(--foreground)]/80">
            "אחרי שנים רבות כבעלים של חברת הפקות ואירועים, וביצוע אין סוף אירועים, הגיע הזמן לעיסוק שמוסיף לנפש וליצירה."
          </p>
          <p className="text-lg leading-relaxed text-[var(--foreground)]/80">
            פניתי לתחום עיצוב הפנים כלימודי חוץ של הטכניון בעזריאלי, הקמתי סטודיו ויצאנו לדרך. הסטודיו מתמחה בעיצוב חללים מסחריים, מאפיות, חנויות נוחות ובתים פרטיים.
          </p>
          <Link href="/about" className="inline-block px-8 py-3 mt-4 text-[var(--accent)] font-black text-lg hover:underline underline-offset-4">
            קרא עוד עלי &larr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--foreground)]/10 text-center bg-[var(--accent)] text-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center mb-8">
          <div className="text-right">
            <h3 className="font-black text-xl text-[var(--background)] mb-2">אבי צוובנר</h3>
            <p className="text-sm opacity-90">עיצוב פנים שמתחיל מדמיון.</p>
          </div>
          <div className="flex flex-col gap-2 font-bold text-[var(--background)]">
            <a href="tel:+972504673332" className="hover:text-[var(--foreground)]">050-467-3332</a>
            <a href="mailto:avizvebv@gmail.com" className="hover:text-[var(--foreground)]">avizvebv@gmail.com</a>
          </div>
          <div className="text-left text-sm font-bold flex flex-col gap-2 text-[var(--background)]">
            <Link href="/privacy-policy" className="hover:text-[var(--foreground)]">מדיניות פרטיות</Link>
            <Link href="/accessibility" className="hover:text-[var(--foreground)]">הצהרת נגישות</Link>
          </div>
        </div>
        <p className="text-[var(--background)]/60 text-sm">© 2026 אבי צוובנר - עיצוב פנים. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
}
```

## רכיבים (Components)

### components/Navbar.tsx
```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full px-6 py-2 flex justify-between items-center bg-[var(--background)]/20 sticky top-0 z-50 border-b border-[var(--foreground)]/5 backdrop-blur-md">
            <div className="flex items-center">
                {/* Logo Container */}
                <Link href="/" className="relative h-16 w-40 md:h-20 md:w-52 transition-all duration-300">
                    <Image
                        src="/logo.jpeg"
                        alt="אבי צוובנר - עיצוב פנים"
                        fill
                        className="object-contain object-right"
                        priority
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-10 text-[var(--foreground)] font-bold text-lg tracking-wide">
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">דף הבית</Link>
                <Link href="/about" className="hover:text-[var(--accent)] transition-colors">אודות</Link>
                <Link href="/process" className="hover:text-[var(--accent)] transition-colors">תהליך העבודה</Link>
                <Link href="/portfolio" className="hover:text-[var(--accent)] transition-colors">תיק עבודות</Link>
                <Link href="/contact" className="hover:text-[var(--accent)] transition-colors">צור קשר</Link>
            </div>

            <Link href="/contact" className="hidden md:block px-8 py-3 bg-[var(--accent)] text-[var(--background)] text-sm font-bold rounded-full hover:bg-[var(--foreground)] transition-colors duration-300">
                דברו איתנו
            </Link>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-[var(--foreground)] font-black text-xl"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                ☰
            </button>

            {/* Mobile Menu Dropdown (Basic Implementation) */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--foreground)]/5 flex flex-col p-4 gap-4 md:hidden shadow-xl">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--accent)] font-bold">דף הבית</Link>
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--accent)] font-bold">אודות</Link>
                    <Link href="/process" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--accent)] font-bold">תהליך העבודה</Link>
                    <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--accent)] font-bold">תיק עבודות</Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--accent)] font-bold">צור קשר</Link>
                </div>
            )}
        </nav>
    );
}
```

### components/SocialButtons.tsx
```tsx
'use client';

import React from 'react';

export default function SocialButtons() {
    const whatsappNumber = "972504673332";
    const message = "היי אבי, אשמח לשמוע פרטים על עיצוב פנים";

    return (
        <div className="fixed left-6 bottom-6 flex flex-col gap-4 z-40">

            {/* WhatsApp */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="שלח הודעה ב-WhatsApp"
            >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current stroke-none">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.966-.944 1.164-.173.199-.347.223-.647.075-.299-.15-1.258-.463-2.394-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.418.249-.697.249-1.294.174-1.418-.074-.125-.272-.199-.572-.349z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C10.23 20 8.58 19.46 7.18 18.54L4.85 19.3L5.64 16.99C4.69 15.6 4.14 13.88 4.14 12C4.14 7.66 7.66 4.14 12 4.14C16.34 4.14 19.86 7.66 19.86 12C19.86 16.34 16.34 20 12 20Z" />
                </svg>
            </a>

            {/* Facebook (Placeholder) */}
            <a
                href="#"
                className="w-12 h-12 bg-[#1877F2] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="עקוב בפייסבוק"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>

            {/* Instagram (Placeholder) */}
            <a
                href="#"
                className="w-12 h-12 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="עקוב באינסטגרם"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>

        </div>
    );
}
```


### components/Hero.tsx
```tsx
export default function Hero() {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Content */}
                <div className="text-right space-y-6">
                    <h1 className="text-5xl md:text-7xl font-black text-text leading-tight">
                        Designing Your Imagination
                    </h1>

                    <div className="space-y-2 text-xl md:text-2xl text-text font-bold">
                        <p>בוגר לימודי חוץ בטכניון</p>
                        <p>בעל חברה ותיקה ומוניטין רב</p>
                        <p>בוגר תעשיית האירועים וההפקה</p>
                    </div>

                    <div className="pt-6 flex gap-4">
                        <a
                            href="/contact"
                            className="px-8 py-3 bg-primary text-white font-bold text-lg rounded hover:bg-primary-dark transition-colors"
                        >
                            קבע פגישת ייעוץ
                        </a>
                    </div>
                </div>

                {/* Simple Placeholder Image */}
                <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center border-2 border-primary/10">
                    <span className="text-primary/30 text-8xl font-black">A.Z</span>
                </div>
            </div>
        </section>
    );
}
```

### components/Footer.tsx
```tsx
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-right">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    <div>
                        <h3 className="text-2xl font-black text-primary mb-4">אבי זבנר</h3>
                        <p className="text-text font-medium">
                            עיצוב פנים שמתחיל מדמיון והופך למציאות.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-black text-text mb-4">פרטי קשר</h4>
                        <ul className="space-y-2 text-lg font-medium text-text">
                            <li>050-467333</li>
                            <li>avizvebv@gmail.com</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-text mb-4">ניווט</h4>
                        <div className="flex flex-col gap-2 font-bold text-text">
                            <Link href="/privacy-policy" className="hover:text-primary">מדיניות פרטיות</Link>
                            <Link href="/accessibility" className="hover:text-primary">הצהרת נגישות</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
```

### app/about/page.tsx
```tsx
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] flex flex-col justify-center py-20 px-4">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight">אודות הסטודיו</h1>
                    <p className="text-2xl font-bold text-[var(--accent)]">הסיפור שמאחורי העיצוב</p>
                </div>

                {/* Main Story */}
                <div className="prose prose-xl max-w-none text-[var(--foreground)]/90 font-medium leading-relaxed bg-[#F5F3EE] p-8 md:p-12 rounded-2xl border border-[var(--foreground)]/5 shadow-sm">
                    <p>
                        אחרי שנים רבות כבעלים של חברת הפקות ואירועים, וביצוע אין סוף אירועים, הגיע הזמן לעיסוק שמוסיף לנפש וליצירה.
                        פניתי לתחום עיצוב הפנים כלימודי חוץ של הטכניון בעזריאלי, הקמתי סטודיו ויצאנו לדרך.
                    </p>
                    <p className="mt-6">
                        אני מאמין שעיצוב טוב צריך לשלב בין אסתטיקה בלתי מתפשרת לבין פרקטיקה יום-יומית. כל פרויקט הוא מסע משותף שאנחנו עוברים יחד, מהסקיצה הראשונה ועד להנחת הפריט האחרון בחלל.
                    </p>
                </div>

                {/* Credentials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-10 rounded-2xl border-2 border-[var(--foreground)]/5 hover:border-[var(--accent)] transition-colors">
                        <h3 className="text-3xl font-black mb-6 text-[var(--accent)]">השכלה והכשרה</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <span className="mt-2 w-3 h-3 rounded-full bg-[var(--foreground)] shrink-0"></span>
                                <div>
                                    <strong className="block text-xl font-bold">לימודי חוץ - הטכניון</strong>
                                    <span className="text-lg opacity-70">קמפוס עזריאלי</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="mt-2 w-3 h-3 rounded-full bg-[var(--foreground)] shrink-0"></span>
                                <div>
                                    <strong className="block text-xl font-bold">תעשיית האירועים וההפקה</strong>
                                    <span className="text-lg opacity-70">ניסיון עשיר בניהול פרויקטים מורכבים</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-10 rounded-2xl border-2 border-[var(--foreground)]/5 hover:border-[var(--accent)] transition-colors">
                        <h3 className="text-3xl font-black mb-6 text-[var(--accent)]">תחומי התמחות</h3>
                        <ul className="grid grid-cols-1 gap-4">
                            {['חללים מסחריים', 'מאפיות וקונדיטוריות', 'חנויות נוחות', 'בתים פרטיים'].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <span className="text-[var(--accent)] font-black text-2xl">✓</span>
                                    <span className="text-xl font-bold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

### app/contact/page.tsx
```tsx
export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] py-20 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

                {/* Contact Info */}
                <div className="space-y-12">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">צור קשר</h1>
                        <p className="text-2xl font-bold text-[var(--accent)] leading-relaxed">
                            מוכנים להתחיל את המסע? <br />אשמח לשמוע על החלום שלכם.
                        </p>
                    </div>

                    <div className="space-y-10">
                        <div className="flex items-start gap-6">
                            <div className="bg-[var(--foreground)] text-[var(--background)] p-4 rounded-full">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>
                                <h3 className="font-black text-2xl mb-1">טלפון</h3>
                                <a href="tel:+972504673332" className="block text-xl font-bold hover:text-[var(--accent)] transition-colors" dir="ltr">050-467-332</a>
                                <p className="text-lg opacity-60 font-medium mt-1">זמין לשיחות והודעות WhatsApp</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="bg-[var(--foreground)] text-[var(--background)] p-4 rounded-full">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <h3 className="font-black text-2xl mb-1">אימייל</h3>
                                <a href="mailto:avizvebv@gmail.com" className="block text-xl font-bold hover:text-[var(--accent)] transition-colors">avizvebv@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="bg-[var(--foreground)] text-[var(--background)] p-4 rounded-full">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <h3 className="font-black text-2xl mb-1">שעות פעילות</h3>
                                <p className="text-xl font-bold text-[var(--accent)]">זמינות אונליין 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-[var(--foreground)]/5 mt-8 md:mt-0">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-bold mb-2">שם מלא</label>
                            <input type="text" id="name" className="w-full px-5 py-4 rounded-xl border-2 border-[var(--foreground)]/10 focus:border-[var(--accent)] outline-none transition-all font-medium bg-[var(--background)]" placeholder="ישראל ישראלי" />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-lg font-bold mb-2">טלפון</label>
                            <input type="tel" id="phone" className="w-full px-5 py-4 rounded-xl border-2 border-[var(--foreground)]/10 focus:border-[var(--accent)] outline-none transition-all font-medium bg-[var(--background)]" placeholder="050-0000000" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg font-bold mb-2">כיצד אוכל לעזור?</label>
                            <textarea id="message" rows={4} className="w-full px-5 py-4 rounded-xl border-2 border-[var(--foreground)]/10 focus:border-[var(--accent)] outline-none transition-all font-medium bg-[var(--background)]" placeholder="אני מתעניין בעיצוב..."></textarea>
                        </div>

                        <button type="button" className="w-full bg-[var(--accent)] text-[var(--background)] font-black text-xl py-5 rounded-xl hover:bg-[var(--foreground)] transition-all transform hover:-translate-y-1 shadow-md">
                            שלח הודעה
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
```

### app/process/page.tsx
```tsx
export default function ProcessPage() {
    const steps = [
        {
            id: 1,
            title: "פגישת היכרות והערכת נכס",
            desc: "מפגש ראשוני להכרות, הבנת הצרכים שלכם, וסיור בנכס כדי להבין את הפוטנציאל והאתגרים.",
        },
        {
            id: 2,
            title: "הצעת מחיר",
            desc: "בניית הצעת מחיר מפורטת ושקופה המותאמת להיקף הפרויקט שהוגדר.",
        },
        {
            id: 3,
            title: "הכנת תוכניות מפורטות",
            desc: "יצירת סט תוכניות טכניות מלא: העמדה, חשמל, אינסטלציה, תאורה ונגרות.",
        },
        {
            id: 4,
            title: "גיבוש שפה עיצובית",
            desc: "בחירת סגנון, פלטת צבעים, וחומרים שיתנו את הטון בפרויקט.",
        },
        {
            id: 5,
            title: "תיאום מקצועי",
            desc: "חיבור עם קבלנים, יועצים וספקים. ניהול משא ומתן ובדיקת הצעות מחיר.",
        },
        {
            id: 6,
            title: "בחירת חומרים מלאה",
            desc: "ימי ליווי באולמות תצוגה לבחירת ריצוף, חיפויים, כלים סניטריים, גופי תאורה ועוד.",
        },
        {
            id: 7,
            title: "יצירת לוחות השראה",
            desc: "המחשה ויזואלית (Mood Boards) של החיבור בין כל החומרים והצבעים שנבחרו.",
        },
        {
            id: 8,
            title: "פיקוח עליון (אופציונלי)",
            desc: "ביקורים באתר לוודא שהביצוע תואם את התכנון והסטנדרטים שלנו.",
        }
    ];

    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">תהליך העבודה</h1>
                    <p className="text-xl md:text-2xl font-bold text-[var(--accent)] max-w-3xl mx-auto">
                        כל פרויקט מנוהל בצורה סדורה ומקצועית, כדי להבטיח שקט נפשי ותוצאה מושלמת.
                    </p>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-[var(--foreground)]/10">
                    {steps.map((step) => (
                        <div key={step.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

                            {/* Number Bubble */}
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--foreground)] text-[var(--background)] border-4 border-[var(--background)] text-2xl font-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-lg">
                                {step.id}
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-white p-8 rounded-2xl border-2 border-[var(--foreground)]/5 hover:border-[var(--accent)] shadow-sm transition-all hover:-translate-y-1">
                                <h3 className="font-black text-2xl text-[var(--foreground)] mb-3">{step.title}</h3>
                                <p className="text-[var(--foreground)]/80 text-lg font-medium leading-relaxed">{step.desc}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
```

### app/portfolio/page.tsx
```tsx
export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] py-20 px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-8">תיק עבודות</h1>
            <p className="text-2xl text-[var(--accent)] font-bold mb-16">
                פרויקטים נבחרים בקרוב...
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto opacity-60 pointer-events-none grayscale">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="aspect-[4/3] bg-white rounded-3xl border-2 border-[var(--foreground)]/10 relative overflow-hidden flex items-center justify-center">
                        <div className="text-[var(--foreground)] font-black text-2xl bg-[var(--background)] px-6 py-2 rounded-full">
                            בקרוב
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
```

### app/privacy-policy/page.tsx
```tsx
export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black mb-10 pb-4 border-b-4 border-[var(--accent)] inline-block">מדיניות פרטיות</h1>

                <div className="prose prose-xl max-w-none text-[var(--foreground)]/90 space-y-8 font-medium">
                    <p className="text-lg opacity-70">עדכון אחרון: פברואר 2026</p>

                    <p>
                        ברוכים הבאים לאתר של אבי זבנר עיצוב פנים. אנו מכבדים את הפרטיות שלכם ומחויבים להגן על המידע האישי שאתם משתפים איתנו.
                    </p>

                    <div>
                        <h3 className="text-2xl font-black mb-3">1. איסוף מידע</h3>
                        <p>
                            אנו עשויים לאסוף מידע אישי שאתם מספקים לנו מרצונכם, כגון שם, כתובת אימייל, ומספר טלפון, כאשר אתם יוצרים איתנו קשר דרך הטפסים באתר.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black mb-3">2. שימוש במידע</h3>
                        <p>
                            המידע שנאסף משמש אותנו לצורך מתן השירותים המבוקשים ויצירת קשר עמכם. אנו לא מוכרים את המידע לצדדים שלישיים.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black mb-3">3. יצירת קשר</h3>
                        <p>
                            לכל שאלה בנושא מדיניות הפרטיות, ניתן לפנות בכתובת המייל: <a href="mailto:avizvebv@gmail.com" className="text-[var(--accent)] underline hover:text-[var(--foreground)]">avizvebv@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

### app/accessibility/page.tsx
```tsx
export default function AccessibilityStatement() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black mb-10 pb-4 border-b-4 border-[var(--accent)] inline-block">הצהרת נגישות</h1>

                <div className="prose prose-xl max-w-none text-[var(--foreground)]/90 space-y-8 font-medium">
                    <p>
                        אנו ב"אבי זבנר עיצוב פנים" רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות והגולשים ובשיפור הנגישות באתר האינטרנט שלנו.
                    </p>

                    <div>
                        <h3 className="text-2xl font-black mb-3">התאמות שבוצעו</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>שימוש בפונט קריא ומודגש (Rubik).</li>
                            <li>ניגודיות צבעים גבוהה (טקסט כהה על רקע בהיר).</li>
                            <li>תמיכה בניווט מקלדת.</li>
                            <li>מבנה כותרות ברור.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black mb-3">יצירת קשר בנושא נגישות</h3>
                        <p>
                            אם נתקלתם בבעיה, נשמח לשמוע מכם:
                        </p>
                        <ul className="list-none space-y-2 mt-2">
                            <li><strong>טלפון:</strong> 050-467333</li>
                            <li><strong>אימייל:</strong> <a href="mailto:avizvebv@gmail.com" className="text-[var(--accent)] underline hover:text-[var(--foreground)]">avizvebv@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

