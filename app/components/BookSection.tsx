import Image from "next/image";
import { BookOpen, Cpu, Zap, Timer, Search, CheckCircle2, Microscope, ExternalLink } from "lucide-react";
import { BorderBeam } from "./ui/BorderBeam";

const BookSection = () => {
  const keyTopics = [
    { title: "Basic I/O Control", icon: <Zap className="w-4 h-4" /> },
    { title: "Circuit Stability", icon: <CheckCircle2 className="w-4 h-4" /> },
    { title: "Non-blocking Timing", icon: <Timer className="w-4 h-4" /> },
    { title: "Signal Processing", icon: <Microscope className="w-4 h-4" /> },
    { title: "Bare Metal Access", icon: <Cpu className="w-4 h-4" /> },
  ];

  return (
    <section id="author" className="space-y-8 sm:space-y-12">
      <div className="flex items-end justify-between border-b-4 border-black pb-4 sm:pb-8">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tighter break-words">
          The Printed Word.
        </h2>
      </div>

      <div className="relative overflow-hidden bg-white border-2 border-black p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_#000] group">
        <BorderBeam size={400} duration={15} delay={0} borderWidth={3} colorFrom="#78B5AA" colorTo="#ECAE5D" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
          {/* Book Cover */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="relative aspect-[3/4] w-full border-4 border-black shadow-[8px_8px_0px_#000] overflow-hidden bg-white group/cover">
              <Image
                src="/Arduino Book/cover.png"
                alt="Zero to Robot Book Cover"
                fill
                className="object-cover transition-transform duration-500 group-hover/cover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-black text-[#f4efe6] p-4 border-2 border-black flex items-center justify-between">
                <span className="font-black uppercase text-sm tracking-widest">Available in Bangla</span>
                <BookOpen className="w-5 h-5 text-[#ECAE5D]" />
              </div>
              <a
                href="https://drive.google.com/file/d/1InUD0Ude8ntxBl721Qc6iG1OOzu7vL1C/view?usp=sharing"
                target="_blank"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-[#ECAE5D] border-2 border-black text-black text-lg font-black uppercase hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_#000]"
              >
                Read Free Preview
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Book Content */}
          <div className="w-full lg:w-2/3 flex flex-col justify-between self-stretch">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ECAE5D] border-2 border-black text-black text-[10px] font-black uppercase tracking-[0.2em] shadow-[2px_2px_0px_#000]">
                  Published Author
                </div>
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black uppercase leading-[0.8] tracking-tighter">
                  Bits To Light <br />
                  <span className="text-[#DD726D]">Zero to Robot</span>
                </h3>
                <p className="text-lg sm:text-xl font-medium text-black max-w-2xl leading-snug text-justify opacity-90">
                  A definitive guidebook designed to demystify Arduino, coding, and electronics through relatable analogies. Completely written in <span className="bg-[#78B5AA] px-1 border-2 border-black font-bold whitespace-nowrap">Bangla</span> for maximum accessibility.
                </p>
              </div>

              {/* Syllabus & Guide Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {/* Syllabus Card */}
                <div className="bg-[#78B5AA]/5 border-2 border-black p-6 shadow-[4px_4px_0px_#000] space-y-4 flex flex-col">
                  <h4 className="font-black uppercase text-lg border-b-2 border-black/20 pb-2 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-[#78B5AA]" /> Detailed Syllabus
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    {keyTopics.map((topic, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white border-2 border-black px-3 py-2 shadow-[2px_2px_0px_#000] text-xs font-black uppercase hover:bg-black hover:text-white transition-colors duration-200 cursor-default group">
                        <div className="shrink-0 text-[#78B5AA] group-hover:text-[#ECAE5D] transition-colors duration-200">
                          {topic.icon}
                        </div>
                        <span className="flex-1">
                          {topic.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detective Card */}
                <div className="bg-[#DD726D]/5 border-2 border-black p-6 shadow-[4px_4px_0px_#000] space-y-4 flex flex-col">
                  <h4 className="font-black uppercase text-lg border-b-2 border-black/20 pb-2 flex items-center gap-2">
                    <Search className="w-5 h-5 text-[#DD726D]" /> Debugging Guide
                  </h4>
                  <div className="space-y-4">
                    <p className="text-base font-medium text-black leading-relaxed text-justify opacity-90 italic">
                      "Master the art of debugging: from deciphering the 'angry language' of compiler errors to using Serial.print() to eavesdrop on the robot's internal thoughts."
                    </p>
                    <div className="pt-2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tagline/Brand */}
            <div className="mt-8 pt-6 border-t-2 border-black/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black flex items-center justify-center font-black text-[#f4efe6] border-2 border-black text-xl">M</div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none">Created By</p>
                  <p className="text-sm font-black uppercase leading-none">M&M Studios</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase text-black/40">
                <Timer className="w-3 h-3" /> Step-by-Step Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
