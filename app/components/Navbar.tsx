
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 md:pl-4 md:pr-16 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 bg-[#f4efe6] border-2 border-black max-w-[90vw] sm:max-w-none overflow-x-auto">
        <Link
          href="/"
          className="px-4 sm:px-6 py-2 bg-black text-[#f4efe6] font-black tracking-tight hover:bg-[#ECAE5D] hover:text-black transition-colors text-sm sm:text-base shrink-0 uppercase"
        >
          MAHIR
        </Link>
        <div className="flex items-center gap-1 sm:gap-0 px-1 sm:px-2 shrink-0">
          <a
            href="#projects"
            className="px-3 sm:px-4 py-2 text-base font-black text-black hover:text-[#DD726D] transition-colors uppercase"
          >
            Work
          </a>
          <a
            href="#contact"
            className="px-3 sm:px-4 py-2 text-base font-black text-black hover:text-[#DD726D] transition-colors uppercase"
          >
            Contact
          </a>
        </div>
        <Link
          href="mailto:msafwaan30@gmail.com"
          target="_blank"
          className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#78B5AA] text-black border-2 border-transparent hover:border-black font-black transition-all text-xs sm:text-sm shrink-0 whitespace-nowrap uppercase"
        >
          Let's Talk
        </Link>
      </nav>
    </div>
  );
}
