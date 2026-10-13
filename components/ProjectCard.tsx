'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    href: string;
    priority?: boolean;
}

export default function ProjectCard({ title, subtitle, imageSrc, href, priority = false }: ProjectCardProps) {
    return (
        <Link href={href} className="flex flex-col group w-full max-w-lg mx-auto md:max-w-xl">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl motion-safe:hover:-translate-y-2 border-2 border-[var(--foreground)]/5">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={priority}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90 flex flex-col justify-end p-8 text-right">
                    <h3 className="text-3xl font-black text-white mb-2 translate-y-2 group-hover:translate-y-0 motion-reduce:translate-y-0 transition-transform duration-300">
                        {title}
                    </h3>
                    <p className="text-xl font-medium text-[var(--accent)] opacity-0 translate-y-4 motion-reduce:translate-y-0 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 [@media(hover:none)]:opacity-100 [@media(hover:none)]:translate-y-0 transition-all duration-300 delay-75">
                        {subtitle} &larr;
                    </p>
                </div>
            </div>
        </Link>
    );
}
