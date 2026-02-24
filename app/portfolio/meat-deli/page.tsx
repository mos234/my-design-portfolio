import type { Metadata } from 'next';
import ProjectGallery from '@/components/ProjectGallery';

export const metadata: Metadata = {
    title: 'עיצוב פנים למעדניית בשרים מיובשים - AZ Designs',
    description: 'עיצוב מעדנייה ייחודית לבשרים מיובשים – חלל מסחרי בסגנון תעשייתי עם אלגנטיות מרשימה. סטודיו AZ Designs.',
    openGraph: {
        title: 'עיצוב פנים למעדניית בשרים מיובשים - AZ Designs',
        description: 'עיצוב מעדנייה ייחודית לבשרים מיובשים – חלל מסחרי בסגנון תעשייתי עם אלגנטיות.',
        images: ['/gallery/meat-deli/cover.jpeg'],
    },
};

const images = [
    '/gallery/meat-deli/cover.jpeg',
    '/gallery/meat-deli/1.jpeg',
    '/gallery/meat-deli/2.jpeg',
    '/gallery/meat-deli/4.jpeg',
];

export default function MeatDeliPage() {
    return (
        <ProjectGallery
            title="מעדניית בשרים מיובשים"
            subtitle="עיצוב חלל מסחרי"
            images={images}
        />
    );
}
