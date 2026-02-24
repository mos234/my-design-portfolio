'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'cookie-consent-accepted';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            setVisible(true);
        }
    }, []);

    function accept() {
        localStorage.setItem(STORAGE_KEY, 'true');
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 inset-x-0 z-50 p-4 bg-[var(--foreground)] text-[var(--background)] shadow-2xl">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
                <p className="text-sm font-medium flex-1 text-[var(--accent)]">
                    אתר זה משתמש בקוקיז טכניים לשיפור חווית הגלישה.
                    לפרטים נוספים ראו את{' '}
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
