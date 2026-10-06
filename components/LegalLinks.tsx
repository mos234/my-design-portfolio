'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Site-wide links to the legal pages. The home page has its own footer with these links.
export default function LegalLinks() {
    const pathname = usePathname();
    if (pathname === '/') return null;

    return (
        <footer className="bg-black/80 text-white py-4 px-4 text-center text-sm font-bold">
            <nav aria-label="קישורים משפטיים" className="flex justify-center gap-6">
                <Link href="/accessibility" className="underline-offset-4 hover:underline">הצהרת נגישות</Link>
                <Link href="/privacy-policy" className="underline-offset-4 hover:underline">מדיניות פרטיות</Link>
            </nav>
        </footer>
    );
}
