
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  link: string;
  role?: string;
  gradient?: string;
}

export default function ProjectCard({ title, tagline, description, techStack, link, role, gradient = "from-blue-500/20 to-purple-500/20" }: ProjectCardProps) {
  return (
    <Link 
      href={link} 
      target="_blank"
      className="group relative flex flex-col p-8 rounded-[2rem] bg-white dark:bg-slate/10 border border-zinc-200 dark:border-white/5 overflow-hidden transition-all duration-500 hover:border-electric/30 hover:shadow-2xl hover:shadow-electric/5 hover:-translate-y-1"
    >
      {/* Hover Gradient Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl`} />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-3">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse"></span>
                <span className="text-xs font-semibold tracking-wide text-slate dark:text-zinc-400 uppercase">{tagline}</span>
             </div>
            <h3 className="text-2xl font-bold text-navy dark:text-white flex items-center gap-2">
              {title}
            </h3>
          </div>
          <div className="p-3 rounded-full bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5 group-hover:bg-electric group-hover:border-electric transition-colors duration-300">
             <ArrowUpRight className="w-5 h-5 text-slate dark:text-zinc-400 group-hover:text-white transition-colors" />
          </div>
        </div>

        <p className="text-base text-slate/80 dark:text-zinc-400 mb-8 leading-relaxed line-clamp-3 font-light">
          {description}
        </p>

        <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-white/5 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-50 dark:bg-white/5 text-slate dark:text-zinc-400 border border-zinc-100 dark:border-white/5 group-hover:border-electric/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
