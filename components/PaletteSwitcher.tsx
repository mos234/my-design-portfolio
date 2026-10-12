'use client';

// Temporary: lets the site owner compare color palettes on the preview deploy.
// Remove this component (and the palette-* classes in globals.css) before merging to master.

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'palette-preview';

const PALETTES = [
    { id: '0', label: 'נוכחי', swatches: ['#A26A42', '#804A00', '#98FFD8'] },
    { id: '3', label: 'מקורי מתוקן', swatches: ['#9C6440', '#804A00', '#98FFD8'] },
    { id: '1', label: 'דוגמה 1', swatches: ['#2B1D14', '#F3E9DC', '#98FFD8'] },
    { id: '2', label: 'דוגמה 2', swatches: ['#FAF6F0', '#3F2512', '#1F5F55'] },
] as const;

type PaletteId = (typeof PALETTES)[number]['id'];

function applyPalette(id: PaletteId) {
    const root = document.documentElement;
    root.classList.remove('palette-1', 'palette-2', 'palette-3');
    if (id !== '0') root.classList.add(`palette-${id}`);
}

// Runs before first paint (see layout.tsx) so the chosen palette doesn't flash.
export const paletteBootScript = `try{var p=new URLSearchParams(location.search).get('palette');if(p==='0'||p==='1'||p==='2'||p==='3'){localStorage.setItem('${STORAGE_KEY}',p)}else{p=localStorage.getItem('${STORAGE_KEY}')}if(p==='1'||p==='2'||p==='3'){document.documentElement.classList.add('palette-'+p)}}catch(e){}`;

export default function PaletteSwitcher() {
    const [active, setActive] = useState<PaletteId>('0');

    useEffect(() => {
        const root = document.documentElement;
        const current = PALETTES.find(({ id }) => id !== '0' && root.classList.contains(`palette-${id}`));
        // eslint-disable-next-line react-hooks/set-state-in-effect -- sync with the class set by the boot script
        setActive(current ? current.id : '0');
    }, []);

    function choose(id: PaletteId) {
        setActive(id);
        applyPalette(id);
        try {
            localStorage.setItem(STORAGE_KEY, id);
        } catch {
            // Storage unavailable: the choice applies to this page view only
        }
    }

    return (
        <div
            role="group"
            aria-label="השוואת פלטות צבע (זמני)"
            className="fixed bottom-24 left-4 sm:bottom-6 sm:left-6 z-[90] flex items-center gap-1 max-w-[calc(100vw-2rem)] rounded-full bg-white/95 p-1 sm:pr-3 text-sm text-[#2A2420] shadow-[0_6px_20px_rgba(0,0,0,0.25)] ring-1 ring-black/10 backdrop-blur"
        >
            <span className="hidden sm:inline font-bold text-[#6B6158] pl-1">צבעים:</span>
            {PALETTES.map(({ id, label, swatches }) => (
                <button
                    key={id}
                    type="button"
                    onClick={() => choose(id)}
                    aria-pressed={active === id}
                    className={`flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full px-2.5 sm:px-3 font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A2420] ${
                        active === id ? 'bg-[#2A2420] text-white' : 'hover:bg-black/5'
                    }`}
                >
                    <span aria-hidden="true" className="hidden sm:flex -space-x-1 space-x-reverse">
                        {swatches.map((c) => (
                            <span key={c} className="h-3.5 w-3.5 rounded-full ring-1 ring-black/20" style={{ background: c }} />
                        ))}
                    </span>
                    {label}
                </button>
            ))}
        </div>
    );
}
