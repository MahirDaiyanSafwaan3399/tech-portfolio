
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[#f4efe6]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-6">
            <Link href="/" className="inline-block border-2 border-black px-4 py-2 hover:bg-black hover:text-[#f4efe6] transition-colors">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase">MAHIR.</h2>
            </Link>
            <p className="text-black max-w-sm leading-relaxed text-base sm:text-lg font-medium">
              Building digital lifelines and accessible technology for a world in motion. Based in Bangladesh, coding for humanity.
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-black font-black pt-4 uppercase">
              <div className="flex h-3 w-3 border-2 border-black bg-[#78B5AA]" />
              Available for new opportunities
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-sm font-black text-black uppercase tracking-wider title-stroke">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#projects" className="text-black font-black hover:text-[#DD726D] transition-colors uppercase flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-black bg-[#ECAE5D]"></span>
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-black font-black hover:text-[#DD726D] transition-colors uppercase flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-black bg-[#DD726D]"></span>
                  Academic Foundation.
                </Link>
              </li>
              <li>
                <Link href="#author" className="text-black font-black hover:text-[#DD726D] transition-colors uppercase flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-black bg-black"></span>
                  The Printed Word.
                </Link>
              </li>
              <li>
                <a href="mailto:msafwaan30@gmail.com" className="text-black font-black hover:text-[#DD726D] transition-colors uppercase flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-black bg-white"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-sm font-black text-black uppercase tracking-wider title-stroke">Connect</h3>
            <ul className="space-y-4">
              <li>
                <Link href="https://linkedin.com/in/safwaan30" target="_blank" className="text-black font-black hover:bg-black hover:text-[#f4efe6] inline-block px-2 py-1 border-2 border-black border-transparent hover:border-black transition-colors uppercase text-sm sm:text-base">LinkedIn</Link>
              </li>
              <li>
                <Link href="https://github.com/MahirDaiyanSafwaan3399" target="_blank" className="text-black font-black hover:bg-black hover:text-[#f4efe6] inline-block px-2 py-1 border-2 border-black border-transparent hover:border-black transition-colors uppercase text-sm sm:text-base">GitHub</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-4 border-black flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-black uppercase text-center sm:text-left">
          <p>© {currentYear} MAHIR. All rights reserved.</p>
          <p className="">Designed & Built in Dhaka</p>
        </div>
      </div>
    </footer>
  );
}
