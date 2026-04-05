
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-1 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-1.5 md:gap-4 p-1 md:p-2 bg-[#f4efe6]/95 backdrop-blur-sm border-2 border-black max-w-max shadow-[4px_4px_0px_#000]">
        <Link
          href="/"
          className="px-3 md:px-6 py-1.5 md:py-2 bg-black text-[#f4efe6] font-black tracking-tight hover:bg-[#ECAE5D] hover:text-black transition-colors text-xs md:text-base shrink-0 uppercase"
        >
          MAHIR
        </Link>
        <div className="flex items-center gap-0.5 md:gap-1 px-0 shrink-0">
          <a
            href="#projects"
            className="px-2 md:px-4 py-1.5 md:py-2 text-xs md:text-base font-black text-black hover:text-[#DD726D] transition-colors uppercase shrink-0"
          >
            Work
          </a>
          <a
            href="#contact"
            className="px-2 md:px-4 py-1.5 md:py-2 text-xs md:text-base font-black text-black hover:text-[#DD726D] transition-colors uppercase shrink-0"
          >
            Contact
          </a>
        </div>
        <Link
          href="mailto:msafwaan30@gmail.com"
          target="_blank"
          className="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-2.5 bg-[#78B5AA] text-black border-2 border-transparent hover:border-black font-black transition-all text-[10px] md:text-sm shrink-0 whitespace-nowrap uppercase"
        >
          Let's Talk
        </Link>
      </nav>
    </div>
  );
}
