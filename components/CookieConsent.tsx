'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'cookie-consent-accepted';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read from localStorage after mount
            if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
        } catch {
            setVisible(true);
        }
    }, []);

    function accept() {
        try {
            localStorage.setItem(STORAGE_KEY, 'true');
        } catch {
            // Storage unavailable: hide for this page view only
        }
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div role="region" aria-label="הודעה על קוקיז" className="fixed bottom-0 inset-x-0 z-50 p-4 bg-[var(--foreground)] text-[var(--background)] shadow-2xl">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
                <p className="text-sm font-medium flex-1 text-[var(--accent)]">
                    האתר אינו משתמש בקוקיז לפרסום או למעקב. נשמרות רק הגדרות טכניות הנדרשות לתפעול האתר.
                    לפרטים ראו את{' '}
                    <Link href="/privacy-policy" className="underline font-bold hover:text-[var(--accent)]">
                        מדיניות הפרטיות
                    </Link>.
                </p>
                <button
                    onClick={accept}
                    className="px-6 py-2 bg-[var(--accent)] text-[var(--foreground)] font-bold rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                    הבנתי
                </button>
            </div>
        </div>
    );
}
