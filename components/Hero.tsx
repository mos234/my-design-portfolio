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
