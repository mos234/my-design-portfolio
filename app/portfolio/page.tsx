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
