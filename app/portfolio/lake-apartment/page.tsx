import type { Metadata } from 'next';
import ProjectGallery from '@/components/ProjectGallery';

export const metadata: Metadata = {
    title: 'דירה על האגם - פרויקט דירת נופש בכנרת - AZ Designs',
    description: 'עיצוב ותכנון דירת נופש בקו ראשון לאגם הכנרת עם פיצול ליחידת אורחים. נגיעות כפריות לתחושת צימר מפנק, חדר רחצה מרכזי מודרני ויחידת רחצה כפרית ליחידת ההורים. סטודיו AZ Designs לעיצוב פנים.',
    openGraph: {
        title: 'דירה על האגם - AZ Designs',
        description: 'דירת נופש בקו ראשון לאגם הכנרת + פיצול ליחידת אורחים. נגיעות כפריות לתחושת צימר מפנק.',
        images: ['/gallery/lake-apartment/cover.jpeg'],
    },
};

const images = [
    '/gallery/lake-apartment/cover.jpeg',
    '/gallery/lake-apartment/1.jpeg',
    '/gallery/lake-apartment/2.jpeg',
    '/gallery/lake-apartment/3.jpeg',
    '/gallery/lake-apartment/4.jpeg',
    '/gallery/lake-apartment/5.jpeg',
    '/gallery/lake-apartment/6.jpeg',
    '/gallery/lake-apartment/7.jpeg',
    '/gallery/lake-apartment/8.jpeg',
    '/gallery/lake-apartment/9.jpeg',
    '/gallery/lake-apartment/10.jpeg',
    '/gallery/lake-apartment/11.jpeg',
    '/gallery/lake-apartment/12.jpeg',
    '/gallery/lake-apartment/13.jpeg',
    '/gallery/lake-apartment/14.jpeg',
    '/gallery/lake-apartment/15.jpeg',
];

export default function LakeApartmentPage() {
    return (
        <ProjectGallery
            title="דירה על האגם"
            subtitle="עיצוב ותכנון"
            description="פרוייקט דירת נופש בקו ראשון לאגם הכנרת + פיצול ליחידת אורחים. נגיעות כפריות לתחושת צימר מפנק, חדר רחצה מרכזי גדול במיוחד בסגנון מודרני ויחידת רחצה כפרית ליחידה הורים."
            images={images}
        />
    );
}
