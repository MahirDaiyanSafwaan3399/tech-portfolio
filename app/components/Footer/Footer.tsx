
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-6">
              <Link href="/" className="inline-block">
                <h2 className="text-3xl font-bold tracking-tighter text-navy dark:text-white">MAHIR<span className="text-electric">.</span></h2>
              </Link>
              <p className="text-slate/80 dark:text-zinc-400 max-w-sm leading-relaxed text-lg">
                Building digital lifelines and accessible technology for a world in motion. Based in Bangladesh, coding for humanity.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-slate dark:text-zinc-500 pt-4">
                  <div className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  Available for new opportunities
              </div>
            </div>

            {/* Links Column */}
            <div className="md:col-span-3 md:col-start-7 space-y-6">
               <h3 className="text-sm font-semibold text-navy dark:text-white uppercase tracking-wider">Navigation</h3>
               <ul className="space-y-4">
                  <li>
                    <Link href="#projects" className="text-slate dark:text-zinc-400 hover:text-electric dark:hover:text-white transition-colors">Selected Work</Link>
                  </li>
                  <li>
                    <Link href="#about" className="text-slate dark:text-zinc-400 hover:text-electric dark:hover:text-white transition-colors">About Me</Link>
                  </li>
                  <li>
                    <a href="mailto:msafwaan30@gmail.com" className="text-slate dark:text-zinc-400 hover:text-electric dark:hover:text-white transition-colors">Contact</a>
                  </li>
               </ul>
            </div>

            {/* Socials Column */}
            <div className="md:col-span-3 space-y-6">
               <h3 className="text-sm font-semibold text-navy dark:text-white uppercase tracking-wider">Connect</h3>
               <ul className="space-y-4">
                  <li>
                    <Link href="https://linkedin.com/in/safwaan30" target="_blank" className="text-slate dark:text-zinc-400 hover:text-electric dark:hover:text-white transition-colors">LinkedIn</Link>
                  </li>
                  <li>
                    <Link href="https://github.com/MahirDaiyanSafwaan3399" target="_blank" className="text-slate dark:text-zinc-400 hover:text-electric dark:hover:text-white transition-colors">GitHub</Link>
                  </li>
               </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-zinc-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate/60 dark:text-zinc-500">
            <p>© {currentYear} MAHIR. All rights reserved.</p>
            {/* <div className="flex items-center gap-8">
               <span className="hover:text-navy dark:hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
               <span className="hover:text-navy dark:hover:text-white transition-colors cursor-pointer">Terms</span>
            </div> */}
            <p className="text-xs">Designed & Built with <span className="text-red-500">❤</span> in Dhaka</p>
          </div>
        </div>
    </footer>
  );
}
