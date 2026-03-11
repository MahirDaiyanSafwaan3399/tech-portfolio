'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  link: string;
  role?: string;
  award?: string;
  images?: string[];
}

const getTechStyle = (tech: string) => {
  const t = tech.toLowerCase();

  if (t.includes('react') || t.includes('next') || t.includes('native') || t.includes('typescript') || t.includes('frontend')) {
    return "bg-[#78B5AA] text-black border-2 border-black";
  }

  if (t.includes('python') || t.includes('ai') || t.includes('nlp') || t.includes('data') || t.includes('ml')) {
    return "bg-[#ECAE5D] text-black border-2 border-black";
  }

  if (t.includes('node') || t.includes('backend') || t.includes('server') || t.includes('api')) {
    return "bg-[#DD726D] text-black border-2 border-black";
  }

  if (t.includes('design') || t.includes('ui') || t.includes('ux') || t.includes('figma') || t.includes('css') || t.includes('tailwind')) {
    return "bg-[#78B5AA] text-black border-2 border-black";
  }

  if (t.includes('database') || t.includes('sql') || t.includes('mongo') || t.includes('firebase') || t.includes('supabase')) {
    return "bg-[#ECAE5D] text-black border-2 border-black";
  }

  if (t.includes('payments') || t.includes('stripe') || t.includes('finance')) {
    return "bg-[#DD726D] text-black border-2 border-black";
  }

  if (t.includes('mobile') || t.includes('app') || t.includes('android') || t.includes('ios')) {
    return "bg-[#78B5AA] text-black border-2 border-black";
  }

  return "bg-white text-black border-2 border-black";
};

export default function ProjectCard({
  title,
  tagline,
  description,
  techStack,
  link,
  role,
  award,
  images
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="h-full">
      <Link
        href={link}
        target="_blank"
        className="group relative flex flex-col h-full overflow-hidden bg-[#f4efe6] border-2 border-black transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000]"
      >
        {images && images.length > 0 && (
          <div className="relative w-full h-56 md:h-64 overflow-hidden border-b-2 border-black shrink-0 bg-black">
            {images.map((img, idx) => (
              <Image
                key={img}
                src={img}
                alt={`${title} snapshot ${idx + 1}`}
                fill
                className={`object-cover transition-opacity duration-1000 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
          </div>
        )}

        <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="space-y-4 max-w-[80%]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-[#f4efe6] font-black uppercase text-xs">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#ECAE5D]" />
                <span>{tagline}</span>
              </div>

              <div>
                <h3 className="text-2xl xs:text-3xl md:text-4xl font-black text-black tracking-tighter uppercase leading-none break-words">
                  {title}
                </h3>
                {role && (
                  <p className="mt-2 text-sm font-black text-[#DD726D] uppercase tracking-widest">
                    {role}
                  </p>
                )}
              </div>
            </div>

            <div className="relative p-3 bg-[#ECAE5D] border-2 border-black overflow-hidden group-hover:bg-[#78B5AA] transition-colors shrink-0">
              <ArrowRight className="relative z-10 w-6 h-6 text-black group-hover:rotate-[-45deg] transition-transform" />
            </div>
          </div>

          <p className="text-lg text-black mb-6 leading-snug font-medium line-clamp-4">
            {description}
          </p>

          {award && (
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 bg-[#f4efe6] border-2 border-black font-black uppercase text-xs text-black shadow-[4px_4px_0px_#000]">
              <Sparkles className="w-3 h-3 shrink-0" />
              <span className="line-clamp-2">{award}</span>
            </div>
          )}

          <div className="mt-auto pt-6 border-t-2 border-black flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_#000] ${getTechStyle(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
