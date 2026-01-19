
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-2 p-2 rounded-full bg-white/80 dark:bg-[#0A1930]/80 backdrop-blur-xl border border-zinc-200/50 dark:border-white/10 shadow-2xl shadow-zinc-800/5 dark:shadow-[#246AF3]/10">
        
        <Link 
          href="/" 
          className="px-6 py-2 rounded-full bg-zinc-100 dark:bg-white/5 text-[#0A1930] dark:text-white font-bold tracking-tight hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
        >
          MAHIR
        </Link>

        <div className="flex items-center px-2">
            <Link 
              href="#projects" 
              className="px-4 py-2 text-sm font-medium text-[#25344B] dark:text-zinc-400 hover:text-[#246AF3] dark:hover:text-white transition-colors"
            >
              Work
            </Link>
            <a 
              href="mailto:msafwaan30@gmail.com" 
              className="px-4 py-2 text-sm font-medium text-[#25344B] dark:text-zinc-400 hover:text-[#246AF3] dark:hover:text-white transition-colors"
            >
              Contact
            </a>
        </div>

        <Link 
          href="https://www.linkedin.com/in/safwaan30/" 
          target="_blank"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#246AF3] text-white hover:bg-[#25344B] transition-colors text-sm font-semibold"
        >
          Let's Talk
        </Link>
      </nav>
    </div>
  );
}
