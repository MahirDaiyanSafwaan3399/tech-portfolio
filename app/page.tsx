
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer/Footer";
import { ArrowRight, Trophy, Code2, Heart, ExternalLink, Github, Mail, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4efe6] selection:bg-black selection:text-[#f4efe6]">
      <Navbar />

      <main className="relative pt-24 md:pt-32 pb-40 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto space-y-20 md:space-y-32 overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-start space-y-8 pt-12 md:pt-20 border-l-4 border-black pl-4 sm:pl-6 md:pl-10 ml-2 sm:ml-0">
          <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 px-4 py-3 sm:py-2 border-2 border-black bg-white text-xs sm:text-sm text-black shadow-[4px_4px_0px_#000]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#DD726D]" />
              <span className="font-bold uppercase tracking-widest leading-none">Based in Bangladesh</span>
            </div>
            <span className="hidden sm:block w-2 h-2 bg-black rounded-full shrink-0" />
            <span className="font-black uppercase tracking-widest text-[#78B5AA] leading-none">Technopreneur & Developer</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-black uppercase leading-[0.9] md:leading-[0.9]">
            Building <br className="hidden sm:block" />
            Digital <span className="bg-[#ECAE5D] px-2 border-2 border-black mt-2 inline-block shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000]">Lifelines.</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-black max-w-3xl leading-snug font-medium">
            I craft resilient software bridging real-world gaps. From accessibility tools for democratic rights to avionics & propulsion systems.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-4 max-w-3xl">
            {["React Native", "React.js", "Node.js", "Express", "Firebase", "Python", "Kalman Filters", "PID Control", "STM32"].map(skill => (
              <span key={skill} className="px-4 py-2 border-2 border-black bg-[#f4efe6] text-sm font-black text-black uppercase shadow-[2px_2px_0px_#000] hover:bg-black hover:text-[#f4efe6] transition-colors">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8 w-full sm:w-auto">
            <Link
              href="#projects"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#78B5AA] border-2 border-black text-black text-lg font-black uppercase hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_#000] w-full sm:w-auto"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:msafwaan30@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-black text-black text-lg font-black uppercase hover:bg-black hover:text-[#f4efe6] transition-colors shadow-[4px_4px_0px_#000] w-full sm:w-auto"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(300px,auto)]">
          {/* Recognition Card - Spans 2 cols */}
          <div className="lg:col-span-2 relative overflow-hidden bg-white border-2 border-black p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_#000]">
            <div className="flex flex-col md:flex-row gap-12 items-center h-full">
              <div className="w-full md:w-1/2 flex flex-col justify-between h-full z-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ECAE5D] border-2 border-black text-black text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_#000]">
                    <Trophy className="w-4 h-4" /> World Champion
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase leading-none break-words">
                    e-ICON World Contest
                  </h2>
                  <p className="text-xl font-medium text-black max-w-lg leading-snug">
                    Ranked #1 globally (Ministry of Education Award, Korea). Led team "Han-da" to build SDG-focused solutions.
                  </p>
                </div>

                <div className="pt-8 mt-auto">
                  <a
                    href="https://e-icon.or.kr/en/2022%eb%85%84-%ec%a0%9c12%ed%9a%8c-%ea%b3%a0%eb%93%b1%eb%b6%80-1%eb%93%b1-%ea%b5%90%ec%9c%a1%eb%b6%80-%ec%9e%a5%ea%b4%80%ec%83%81/"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-[#f4efe6] font-black uppercase border-2 border-transparent hover:bg-[#DD726D] hover:text-black hover:border-black transition-colors"
                  >
                    Verify Achievement <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 sm:gap-4 relative z-10 mt-8 md:mt-0">
                <div className="relative h-40 sm:h-64 md:h-80 border-2 border-black shadow-[4px_4px_0px_#000] overflow-hidden bg-black md:translate-y-4">
                  <Image src="/E-Icon World Contest/E icon.jpg" alt="E-ICON World Contest" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="relative h-40 sm:h-64 md:h-80 border-2 border-black shadow-[4px_4px_0px_#000] overflow-hidden bg-black md:-translate-y-4">
                  <Image src="/E-Icon World Contest/E-icon world contest.jpg" alt="E-ICON World Contest" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            </div>
          </div>

          {/* About Card */}
          <div className="relative overflow-hidden bg-[#111111] border-2 border-black p-6 sm:p-8 md:p-10 text-[#f4efe6] shadow-[4px_4px_0px_#000] sm:shadow-[8px_8px_0px_#000] flex flex-col justify-between hover:-translate-y-2 transition-transform">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <Code2 className="w-12 h-12 sm:w-16 sm:h-16 mb-6 text-[#78B5AA]" />
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-none break-words">The Code Behind The Cause.</h3>
                <p className="text-lg font-medium leading-snug opacity-90">
                  I debug society. From enabling democratic rights to helping families in financial distress.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <section className="space-y-8 sm:space-y-12 pb-10">
          <div className="flex items-end justify-between border-b-4 border-black pb-4 sm:pb-8">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tighter break-words">
              Professional Journey.
            </h2>
          </div>

          <div className="space-y-12">
            {/* Gigalogy */}
            <div className="relative overflow-hidden bg-[#78B5AA] border-2 border-black p-6 sm:p-8 md:p-12 shadow-[4px_4px_0px_#000] sm:shadow-[8px_8px_0px_#000]">
              <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start md:items-center">
                <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 z-10">
                  <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-[#f4efe6] text-[10px] sm:text-xs font-black uppercase tracking-widest border-2 border-black self-start">
                    Jan 2026 – Apr 2026
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase leading-none break-words hyphens-auto">Gigalogy Technopreneurship Program</h3>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-black bg-white inline-block px-2 py-1 border-2 border-black uppercase font-black">Program Finalist</p>
                  </div>
                  <p className="text-xl font-medium text-black leading-snug">
                    Completed a rigorous full-stack technical track crafting high-fidelity UI/UX, robust API architecture, and custom AI implementations. Formulated a comprehensive business model through deep-dive market fit analysis, successfully navigating 5 elimination rounds.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {['Business Model', 'AI Implementation', 'API Architecture', 'Venture Dev'].map(t => (
                      <span key={t} className="px-3 py-1.5 bg-[#f4efe6] shadow-[2px_2px_0px_#000] border-2 border-black text-xs font-black text-black uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Gallery */}
                <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 sm:gap-4 relative z-10 mt-8 md:mt-0">
                  <div className="space-y-2 sm:space-y-4 md:translate-y-8">
                    <div className="relative h-32 sm:h-48 md:h-64 border-2 border-black shadow-[4px_4px_0px_#000] overflow-hidden bg-black">
                      <Image src="/Gigalogy/KHL  (83).jpg" alt="Gigalogy" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    <div className="relative h-32 sm:h-40 md:h-56 border-2 border-black shadow-[4px_4px_0px_#000] overflow-hidden bg-black">
                      <Image src="/Gigalogy/SHS (166).jpg" alt="Gigalogy" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-4 pb-0 md:pb-8">
                    <div className="relative h-32 sm:h-40 md:h-56 border-2 border-black shadow-[4px_4px_0px_#000] overflow-hidden bg-black">
                      <Image src="/Gigalogy/SHS (178).jpg" alt="Gigalogy" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    <div className="relative h-32 sm:h-48 md:h-64 border-2 border-black shadow-[4px_4px_0px_#000] overflow-hidden bg-black">
                      <Image src="/Gigalogy/SHS (20).jpg" alt="Gigalogy" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AERD + Dhumketu side-by-side */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* AERD */}
              <div className="relative overflow-hidden bg-white border-2 border-black p-6 sm:p-8 md:p-10 shadow-[4px_4px_0px_#000] sm:shadow-[8px_8px_0px_#000] flex flex-col hover:-translate-y-1 transition-transform">
                <div className="space-y-4 sm:space-y-6 flex flex-col h-full">
                  <div className="inline-flex items-center px-3 py-1.5 bg-[#DD726D] border-2 border-black text-black text-[10px] sm:text-xs font-black uppercase tracking-widest self-start">
                    Aug 2024 – Present
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-black uppercase leading-none break-words">Amateur Experimental Rocketry BD</h3>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#f4efe6] bg-black inline-block px-3 py-1 font-black uppercase border-2 border-black">
                      Avionics & GNC Specialist
                    </p>
                  </div>
                  <p className="text-black leading-snug font-medium text-lg">
                    Designed custom Ground Control Systems (GCS) for real-time telemetry and engine gimbaling based on precision Cartesian servos. Integrated NASA's OPEN MCT for real-time high-fidelity data visualization via MQTT protocols under high-vibration scenarios.
                  </p>
                </div>
              </div>

              {/* Dhumketu */}
              <div className="relative overflow-hidden bg-white border-2 border-black p-6 sm:p-8 md:p-10 shadow-[4px_4px_0px_#000] sm:shadow-[8px_8px_0px_#000] flex flex-col hover:-translate-y-1 transition-transform">
                <div className="space-y-4 sm:space-y-6 flex flex-col h-full">
                  <div className="inline-flex items-center px-3 py-1.5 bg-[#ECAE5D] border-2 border-black text-black text-[10px] sm:text-xs font-black uppercase tracking-widest self-start">
                    Apr 2024 – Oct 2024
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-black uppercase leading-none break-words">Dhumketu Exploration Co. Ltd</h3>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#f4efe6] bg-black inline-block px-3 py-1 font-black uppercase border-2 border-black">
                      Embedded Systems Intern
                    </p>
                  </div>
                  <p className="text-black leading-snug font-medium text-lg">
                    Engineered a custom 2-layer STM32 PCB using Altium Designer optimized for high-density routing. Developed and tuned PID control loops and Particle Filters for attitude estimation, significantly reducing flight sensor noise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8 sm:space-y-12 scroll-mt-32">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b-4 border-black pb-4 sm:pb-8 gap-4">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tighter break-words">
              Selected Work.
            </h2>
            <Link href="https://github.com/MahirDaiyanSafwaan3399" target="_blank" className="hidden md:flex items-center gap-2 text-black font-black uppercase border-2 border-black px-4 py-2 hover:bg-black hover:text-[#f4efe6] transition-colors shadow-[4px_4px_0px_#000]">
              <Github className="w-5 h-5" />
              View GitHub
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="ShadhinAI"
              tagline="Accessibility"
              description="Empowering voters with disabilities through an offline-first mobile app. Features AI-driven voter education, WCAG 2.1 screen-reader capability, and a volunteer network."
              role="Founder & CEO"
              award="Champion: Build4Democracy (SecDev & Canadian High Commission)"
              techStack={["React Native", "Firebase", "Accessibility"]}
              link="https://shadhinai.com/"
              images={[
                "/ShadhinAI/1.jpeg",
                "/ShadhinAI/2.jpeg",
                "/ShadhinAI/3.jpeg",
                "/ShadhinAI/7.JPG"
              ]}
            />
            <ProjectCard
              title="UntilTheEU"
              tagline="Health Tech"
              description="A cross-platform application utilizing psychological behavioral tracking to provide early intervention and personalized mental health solutions."
              role="Full Stack Dev"
              techStack={["React Native", "Psychology", "Cross-Platform"]}
              link="https://drive.google.com/file/d/19IlUdYPhDMskcOL8mlaIB4m7f8zrl41P/view"
              images={[
                "/E-Icon World Contest/until the eu.png"
              ]}
            />
            <ProjectCard
              title="Help A Remian"
              tagline="Crowdfunding"
              description="A rapid-response community aid platform built for transparency. Facilitated direct donations with real-time tracking and verified documentation."
              role="Full Stack Dev"
              techStack={["Next.js", "Payments", "Real-time"]}
              link="https://help-a-remian.vercel.app/"
            />
            <ProjectCard
              title="Bishleshok AI"
              tagline="Data Analysis"
              description="An AI-powered Business Intelligence tool for local SMEs, providing predictive sales analytics and inventory optimization (Solvio Hackathon Top 50)."
              role="AI Engineer"
              techStack={["NLP", "Python", "Data Viz"]}
              link="https://bishleshok-ai.vercel.app/"
            />
          </div>
        </section>

        {/* FOOTER */}
        <div id="contact" className="w-full border-t-4 border-black mt-32">
          <Footer />
        </div>
      </main>
    </div>
  );
}
