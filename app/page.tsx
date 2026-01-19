
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { ArrowRight, Trophy, Code2, Heart, ExternalLink, Github, Mail, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy selection:bg-electric selection:text-white dark:selection:bg-lemon dark:selection:text-navy">
      <Navbar />

      <main className="relative pt-32 pb-40 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-20 md:space-y-32 overflow-hidden">
        {/* Background Grids & Colorful Blobs */}
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.2] pointer-events-none -z-10" />
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-20">
             <div className="blob blob-1 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-70"></div>
             <div className="blob blob-2 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-70"></div>
             <div className="blob blob-3 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-70"></div>
        </div>

        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center text-center space-y-8 animate-fade-up pt-12 md:pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate/50 backdrop-blur-md border border-electric/20 text-sm font-medium text-slate dark:text-zinc-300 shadow-sm">
            <Sparkles className="w-4 h-4 text-electric" />
            <span>Based in Bangladesh</span>
            <span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600 mx-1" />
            <span className="text-electric font-bold">Engineer & Creator</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-navy dark:text-white leading-[0.95] md:leading-[0.9]">
            Building <br className="hidden md:block" />
            <span className="text-slate/60 dark:text-white/60">Digital</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-500 to-lemon animate-gradient-x">Lifelines.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate dark:text-zinc-300 max-w-2xl leading-relaxed font-light px-4 md:px-0">
            I craft resilient software for urgent human needs. From accessibility tools to crisis response systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-8 w-full sm:w-auto">
            <Link 
              href="#projects"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-electric text-white rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-electric/25 w-full sm:w-auto"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="mailto:msafwaan30@gmail.com"
              className="text-lg font-medium text-slate dark:text-zinc-400 hover:text-navy dark:hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* Recognition Card - Spans 2 cols */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-white dark:bg-slate/30 border border-zinc-200 dark:border-white/10 p-8 md:p-12 transition-all hover:bg-zinc-50 dark:hover:bg-slate/50 shadow-sm hover:shadow-2xl hover:shadow-electric/10">
            <div className="absolute top-0 right-0 p-8 md:p-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy className="w-40 h-40 md:w-64 md:h-64 rotate-12 text-lemon" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
               <div className="space-y-4">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lemon/10 text-yellow-700 dark:text-lemon text-xs font-bold tracking-widest uppercase border border-lemon/20">
                   World Champion
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold text-navy dark:text-white">
                   e-ICON <span className="text-transparent bg-clip-text bg-gradient-to-r from-lemon to-yellow-600">World Contest</span>
                 </h2>
                 <p className="text-lg text-slate dark:text-zinc-300 max-w-lg">
                   Ranked #1 globally (Ministry of Education Award, Korea). Led team "Han-da" to build SDG-focused solutions.
                 </p>
               </div>
               
               <div className="pt-8">
                <a 
                  href="https://e-icon.or.kr/en/2022%eb%85%84-%ec%a0%9c12%ed%9a%8c-%ea%b3%a0%eb%93%b1%eb%b6%80-1%eb%93%b1-%ea%b5%90%ec%9c%a1%eb%b6%80-%ec%9e%a5%ea%b4%80%ec%83%81/"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-navy dark:text-white font-semibold border-b border-navy dark:border-white pb-0.5 hover:opacity-70 transition-opacity"
                >
                  Verify Achievement <ExternalLink className="w-4 h-4" />
                </a>
               </div>
            </div>
          </div>

          {/* About Card */}
          <div className="relative overflow-hidden rounded-3xl bg-navy dark:bg-white p-8 md:p-10 text-white dark:text-navy shadow-xl">
             <div className="absolute inset-0 bg-gradient-to-br from-electric via-blue-600 to-navy opacity-20 dark:opacity-10" />
             <div className="relative z-10 flex flex-col h-full justify-between">
               <Code2 className="w-12 h-12 mb-6 opacity-80" />
               <div className="space-y-4">
                 <h3 className="text-2xl font-bold">The Code Behind The Cause.</h3>
                 <p className="text-zinc-300 dark:text-slate leading-relaxed font-medium">
                   I debug society. From enabling democratic rights to helping families in financial distress.
                 </p>
               </div>
             </div>
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-12 scroll-mt-32">
          <div className="flex items-end justify-between border-b border-zinc-200 dark:border-white/10 pb-8">
             <h2 className="text-4xl md:text-6xl font-bold text-navy dark:text-white tracking-tighter">
               Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-lemon">Work</span>.
             </h2>
             <Link href="https://github.com/MahirDaiyanSafwaan3399" target="_blank" className="hidden md:flex items-center gap-2 text-slate dark:text-zinc-400 hover:text-navy dark:hover:text-white transition-colors">
               <Github className="w-5 h-5" />
               View GitHub
             </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="ShadhinAI"
              tagline="Accessibility"
              description="Empowering voters with disabilities through an offline-first mobile app. Features AI-driven voter education and a volunteer ride-sharing network."
              role="Mobile App Developer"
              award="Champion: Build4Democracy (SecDev & Canadian High Commission)"
              techStack={["React Native", "AI", "Offline-First"]}
              link="https://shadhinai.com/"
              gradient="from-electric/20 to-blue-400/20"
            />
            <ProjectCard
              title="Help A Remian"
              tagline="Crowdfunding"
              description="A rapid-response community aid platform built for transparency. Facilitated direct donations with real-time tracking and verified documentation."
              role="Full Stack"
              techStack={["Next.js", "Payments", "Real-time"]}
              link="https://help-a-remian.vercel.app/"
              gradient="from-emerald-500/20 to-teal-500/20"
            />
            <ProjectCard
              title="Bishleshok AI"
              tagline="Data Analysis"
              description="An analytical tool leveraging AI to process and visualize complex news data, designed to bring clarity to information overload."
              role="AI Engineer"
              techStack={["NLP", "Python", "Data Viz"]}
              link="https://bishleshok-ai.vercel.app/"
              gradient="from-slate/20 to-indigo-500/20"
            />
          </div>
        </section>

        {/* FOOTER */}
        <section id="contact" className="py-12 md:py-20 flex flex-col items-center justify-center text-center space-y-8 scroll-mt-32">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-navy dark:text-white">
            Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-lemon">impact</span>.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
             <a href="mailto:msafwaan30@gmail.com" className="px-8 py-3 rounded-full bg-navy dark:bg-white text-white dark:text-navy font-medium hover:scale-105 transition-transform shadow-lg shadow-navy/20 dark:shadow-white/20">
               Email Me
             </a>
             <Link href="https://www.linkedin.com/in/safwaan30/" target="_blank" className="px-8 py-3 rounded-full bg-zinc-100 dark:bg-slate text-navy dark:text-white font-medium hover:bg-zinc-200 dark:hover:bg-white dark:hover:text-navy hover:shadow-md transition-all">
               LinkedIn
             </Link>
          </div>
          <p className="pt-12 text-slate/60 dark:text-white/40 text-sm">
            © {new Date().getFullYear()} MAHIR. All rights reserved.
          </p>
        </section>
      </main>
    </div>
  );
}
