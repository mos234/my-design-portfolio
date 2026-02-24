import type { Metadata } from 'next';
import ProjectGallery from '@/components/ProjectGallery';

export const metadata: Metadata = {
    title: 'עיצוב פנים יוקרתי לדירת מגורים - AZ Designs',
    description: 'עיצוב פנים יוקרתי ומודרני לדירת מגורים – תכנון חללים אלגנטיים ופונקציונליים. סטודיו AZ Designs.',
    openGraph: {
        title: 'עיצוב פנים יוקרתי לדירת מגורים - AZ Designs',
        description: 'עיצוב פנים יוקרתי ומודרני לדירת מגורים – תכנון חללים אלגנטיים ופונקציונליים.',
        images: ['/gallery/residence/cover.jpeg'],
    },
};

const images = [
    '/gallery/residence/cover.jpeg',
    '/gallery/residence/project-gallery%20(1).jpeg',
    '/gallery/residence/project-gallery%20(2).jpeg',
    '/gallery/residence/project-gallery%20(3).jpeg',
    '/gallery/residence/project-gallery%20(4).jpeg',
    '/gallery/residence/project-gallery%20(5).jpeg',
    '/gallery/residence/project-gallery%20(6).jpeg',
    '/gallery/residence/project-gallery%20(7).jpeg',
    '/gallery/residence/project-gallery%20(8).jpeg',
    '/gallery/residence/project-gallery%20(9).jpeg',
    '/gallery/residence/project-gallery%20(10).jpeg',
    '/gallery/residence/project-gallery%20(11).jpeg',
    '/gallery/residence/project-gallery%20(12).jpeg',
    '/gallery/residence/project-gallery%20(13).jpeg',
    '/gallery/residence/project-gallery%20(14).jpeg',
    '/gallery/residence/project-gallery%20(16).jpeg',
    '/gallery/residence/project-gallery%20(17).jpeg',
    '/gallery/residence/project-gallery%20(18).jpeg',
];

export default function ResidenceProjectPage() {
    return (
        <ProjectGallery
            title="דירת מגורים"
            subtitle="עיצוב פנים יוקרתי ומודרני"
            images={images}
        />
    );
}
