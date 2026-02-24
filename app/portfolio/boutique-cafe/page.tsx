import type { Metadata } from 'next';
import ProjectGallery from '@/components/ProjectGallery';

export const metadata: Metadata = {
    title: 'עיצוב פנים לבית קפה בוטיק בצור הדסה | AZ Designs',
    description: 'עיצוב בית קפה בוטיק בצור הדסה – שילוב אווירה חמה עם עיצוב מודרני וייחודי. סטודיו AZ Designs לעיצוב חללים מסחריים.',
    openGraph: {
        title: 'עיצוב פנים לבית קפה בוטיק בצור הדסה | AZ Designs',
        description: 'עיצוב בית קפה בוטיק בצור הדסה – שילוב אווירה חמה עם עיצוב מודרני.',
        images: ['/gallery/boutique-cafe/cover.jpeg'],
    },
};

const images = [
    '/gallery/boutique-cafe/cover.jpeg',
    '/gallery/boutique-cafe/1.jpeg',
    '/gallery/boutique-cafe/2.jpeg',
    '/gallery/boutique-cafe/3.jpeg',
    '/gallery/boutique-cafe/4.jpeg',
    '/gallery/boutique-cafe/5.jpeg',
    '/gallery/boutique-cafe/6.jpeg',
    '/gallery/boutique-cafe/7.jpeg',
    '/gallery/boutique-cafe/8.jpeg',
    '/gallery/boutique-cafe/9.jpeg',
];

export default function BoutiqueCafePage() {
    return (
        <ProjectGallery
            title="בית קפה בוטיק"
            subtitle="צור הדסה"
            images={images}
        />
    );
}
