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
                            <li>avi.zvebv@gmail.com</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-text mb-4">ניווט</h4>
                        <div className="flex flex-col gap-2 font-bold text-text">
                            <Link href="/privacy-policy" className="hover:text-primary">מדיניות פרטיות</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
