// components/ExperienceSection.tsx
"use client";
import React from "react";
import Image from "next/image";

type Experience = {
  company: string;
  position: string;
  logo: string;
};

const EXPERIENCES: Experience[] = [
  {
    company: "Applab, Doha, Qatar",
    position: "Senior SharePoint Developer",
    logo: "/assets/Work/Applab.png",
  },
  {
    company: "Almoayyed Computers Middle East, Bahrain",
    position: "Consultant SharePoint & Power Platform",
    logo: "/assets/Work/Computers.png",
  },
  {
    company: "Systems Limited, Pakistan",
    position: "Junior Consultant SharePoint",
    logo: "/assets/Work/Systems.png",
  },
  {
    company: "Carbon8 Private Limited, Pakistan",
    position: "SharePoint Developer",
    logo: "/assets/Work/Carbons.png",
  },
];

export default function ExperienceSection(): JSX.Element {
  return (
    <section
      id="experience"
      className="w-full relative pt-20 pb-10 overflow-visible animate-fade-in"
    >
      <div className="max-w-[1166px] mx-auto relative px-4 sm:px-6 md:px-0">
        {/* === Soft Radial Glow === */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[80px] left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] h-[450px] sm:h-[550px] -z-10"
        >
          <div
            className="w-full h-full rounded-full blur-[50px] opacity-90 animate-glow"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(118,60,172,0.48) 0%, rgba(118,60,172,0.28) 68%, rgba(50,15,133,0) 90%)",
            }}
          />
        </div>

        {/* === Section Title === */}
        <h2
          className="text-[32px] sm:text-[36px] md:text-[46px] text-white mb-10 relative z-10 text-center md:text-left animate-slide-up"
          style={{ fontFamily: "Preahvihear, Poppins, sans-serif" }}
        >
          Work Experience
        </h2>

        {/* === Cards Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
          {EXPERIENCES.map((exp, idx) => (
            <article
              key={exp.company}
              className="relative w-full h-auto min-h-[200px] rounded-[15px] overflow-hidden shadow-[4px_7px_26px_rgba(0,0,0,0.12)] p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-gradient-to-br from-[#130428] via-[#281043] to-[#38126D] hover:scale-[1.02] transition-transform duration-300 animate-scale-up"
              style={{
                animationDelay: `${900 + idx * 150}ms`,
              }}
            >
              {/* --- Logo --- */}
              <div className="flex-shrink-0 w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] flex items-center justify-center">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={120}
                  height={120}
                  className="object-contain"
                  priority
                />
              </div>

              {/* --- Text Content --- */}
              <div className="flex flex-col justify-center text-center sm:text-left mt-2 sm:mt-0">
                <h3
                  className="text-[20px] sm:text-[22px] md:text-[24px] text-white font-semibold leading-snug mb-2 break-words"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {exp.company}
                </h3>

                <p className="text-sm sm:text-base md:text-lg font-medium text-white/90 leading-tight mb-4">
                  {exp.position}
                </p>

                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-1.5 rounded-[10px] border border-[rgba(105,59,147,0.6)] text-white text-xs font-medium hover:bg-white/10 transition-colors w-fit mx-auto sm:mx-0"
                  aria-label={`Learn more about ${exp.company}`}
                >
                  LEARN MORE
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
