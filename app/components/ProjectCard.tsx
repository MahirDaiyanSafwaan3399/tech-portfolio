import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  link: string;
  role?: string;
  award?: string;
  gradient?: string;
}

const getTechStyle = (tech: string) => {
  const t = tech.toLowerCase();
  
  if (t.includes('react') || t.includes('next') || t.includes('native') || t.includes('typescript') || t.includes('frontend')) {
    return "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20 group-hover/tech:border-cyan-500/50 group-hover/tech:bg-cyan-500/20";
  }
  
  if (t.includes('python') || t.includes('ai') || t.includes('nlp') || t.includes('data') || t.includes('ml')) {
    return "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20 group-hover/tech:border-amber-500/50 group-hover/tech:bg-amber-500/20";
  }
  
  if (t.includes('node') || t.includes('backend') || t.includes('server') || t.includes('api')) {
    return "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20 group-hover/tech:border-violet-500/50 group-hover/tech:bg-violet-500/20";
  }

  if (t.includes('design') || t.includes('ui') || t.includes('ux') || t.includes('figma') || t.includes('css') || t.includes('tailwind')) {
    return "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20 group-hover/tech:border-rose-500/50 group-hover/tech:bg-rose-500/20";
  }

  if (t.includes('database') || t.includes('sql') || t.includes('mongo') || t.includes('firebase') || t.includes('supabase')) {
    return "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20 group-hover/tech:border-orange-500/50 group-hover/tech:bg-orange-500/20";
  }

  if (t.includes('payments') || t.includes('stripe') || t.includes('finance')) {
      return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 group-hover/tech:border-emerald-500/50 group-hover/tech:bg-emerald-500/20";
  }
  
  if (t.includes('mobile') || t.includes('app') || t.includes('android') || t.includes('ios')) {
      return "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20 group-hover/tech:border-indigo-500/50 group-hover/tech:bg-indigo-500/20";
  }

  // Fallback for "offline-first", "real-time" etc to ensure variety
  if (tech.length % 3 === 0) return "bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-500/20 group-hover/tech:border-fuchsia-500/50 group-hover/tech:bg-fuchsia-500/20";
  if (tech.length % 3 === 1) return "bg-lime-500/10 text-lime-700 dark:text-lime-300 border-lime-500/20 group-hover/tech:border-lime-500/50 group-hover/tech:bg-lime-500/20";
  
  return "bg-slate-500/5 text-slate-600 dark:text-slate-300 border-slate-500/10 group-hover/tech:border-electric/30";
};

export default function ProjectCard({ 
  title, 
  tagline, 
  description, 
  techStack, 
  link, 
  role,
  award,
  gradient = "from-electric/20 to-blue-600/20" 
}: ProjectCardProps) {
  return (
    <Link 
      href={link} 
      target="_blank"
      className="group relative flex flex-col h-full overflow-hidden rounded-[2.5rem] bg-white/80 dark:bg-slate/20 backdrop-blur-xl border border-zinc-200 dark:border-white/10 transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-2xl hover:shadow-electric/10 dark:hover:shadow-black/50 transform-gpu"
    >
      {/* Dynamic Animated Gradient Background - Subtle */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl ease-out`} />
      
      {/* Decorative Blobs - Smoother Animation */}
      <div className="absolute -right-20 -top-20 w-72 h-72 bg-electric/10 rounded-full blur-3xl group-hover:bg-electric/20 transition-all duration-1000 group-hover:scale-110 ease-out" />

      <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-4">
             {/* Tagline Badge */}
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 shadow-sm backdrop-blur-sm group-hover:border-electric/30 transition-colors duration-300">
                <Sparkles className="w-3.5 h-3.5 text-electric animate-pulse" />
                <span className="text-xs font-bold tracking-wider text-slate/70 dark:text-zinc-300 uppercase group-hover:text-navy dark:group-hover:text-white transition-colors duration-300">
                  {tagline}
                </span>
             </div>
            
            {/* Title & Role */}
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-navy dark:text-white tracking-tight group-hover:text-electric dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-white dark:group-hover:to-zinc-400 transition-all duration-300">
                {title}
              </h3>
              {role && (
                <p className="mt-2 text-sm font-semibold text-slate/60 dark:text-white/40 uppercase tracking-widest group-hover:text-slate dark:group-hover:text-white/60 transition-colors duration-300">
                  {role}
                </p>
              )}
            </div>
          </div>
          
          {/* Arrow Icon */}
          <div className="relative p-4 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 overflow-hidden group-hover:bg-electric group-hover:border-electric transition-all duration-500 shadow-lg group-hover:shadow-electric/40">
             <ArrowUpRight className="relative z-10 w-6 h-6 text-slate dark:text-white group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-slate/80 dark:text-zinc-400 mb-6 leading-relaxed font-light line-clamp-3 group-hover:text-slate dark:group-hover:text-zinc-200 transition-colors duration-300">
          {description}
        </p>

        {/* Award Badge */}
        {award && (
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-lemon/10 border border-lemon/20 text-yellow-700 dark:text-lemon text-xs font-semibold">
            <Sparkles className="w-3 h-3" />
            {award}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mt-auto pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-wrap gap-2.5">
          {techStack.map((tech, i) => (
            <span 
              key={tech} 
              className={`group/tech px-4 py-2 text-sm font-medium rounded-xl border backdrop-blur-md transition-all duration-300 ${getTechStyle(tech)}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
