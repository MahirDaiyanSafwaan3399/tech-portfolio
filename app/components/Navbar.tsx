
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 md:px-0 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-1 sm:gap-2 p-1.5 sm:p-2 bg-[#f4efe6] border-2 border-black w-full max-w-lg md:max-w-max shadow-[4px_4px_0px_#000]">
        <Link
          href="/"
          className="px-3 md:px-6 py-2 bg-black text-[#f4efe6] font-black tracking-tight hover:bg-[#ECAE5D] hover:text-black transition-colors text-xs md:text-base shrink-0 uppercase"
        >
          MAHIR
        </Link>
        <div className="flex items-center gap-0 px-0 sm:px-2 shrink-0">
          <a
            href="#projects"
            className="px-2 md:px-4 py-2 text-xs md:text-base font-black text-black hover:text-[#DD726D] transition-colors uppercase"
          >
            Work
          </a>
          <a
            href="#contact"
            className="px-2 md:px-4 py-2 text-xs md:text-base font-black text-black hover:text-[#DD726D] transition-colors uppercase"
          >
            Contact
          </a>
        </div>
        <Link
          href="mailto:msafwaan30@gmail.com"
          target="_blank"
          className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-[#78B5AA] text-black border-2 border-transparent hover:border-black font-black transition-all text-xs md:text-sm shrink-0 whitespace-nowrap uppercase"
        >
          Let's Talk
        </Link>
      </nav>
    </div>
  );
}
