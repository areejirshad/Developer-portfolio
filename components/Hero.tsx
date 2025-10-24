"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <section
      className={`relative w-full text-white flex flex-col items-start justify-start overflow-hidden transition-all duration-300 animate-fade-in  md:pl-[195px]
      ${isHome ? "pt-40 pb-5" : "pt-40 pb-20"}`}
    >
      {/* === Top Section === */}
      <div
        className="
          flex flex-col md:flex-row items-start justify-start gap-4 md:gap-6 relative 
          md:ms-[225px] sm:ms-8 ms-4 md:mb-16
        "
      >
        {/* --- Profile Section --- */}
        <div className="relative w-[180px] sm:w-[210px] md:w-[250px] h-[180px] sm:h-[210px] md:h-[250px] flex items-center justify-center shrink-0 animate-scale-up mx-auto md:mx-0">
          <div
            className="absolute w-[300px] sm:w-[370px] md:w-[420px] h-[300px] sm:h-[370px] md:h-[420px] rounded-full blur-[9px] scale-105 opacity-100 animate-glow"
            style={{
              background:
                "radial-gradient(circle at center, rgba(113,39,186,0.9) 0%, rgba(26,11,46,0.3) 60%, rgba(26,11,46,0) 100%)",
            }}
          />
          <Image
            src="/Me.png"
            alt="Profile"
            width={230}
            height={230}
            className="relative z-10 object-contain rounded-full"
            priority
          />
        </div>

        {/* --- Text Section --- */}
        <div className="flex flex-col items-start text-left relative animate-slide-up mt-6 md:mt-[-70px] mx-4 md:mx-0">
          {/* Arrow pointing to image (hide on mobile) */}
          <Image
            src="/Arrow.png"
            alt="Arrow pointing to profile"
            width={100}
            height={150}
            className="absolute hidden md:block top-[-16px] left-[-85px] rotate-[-1deg]"
          />

          {/* Greeting */}
          <h2 className="text-base sm:text-lg md:text-xl font-[Preahvihear] tracking-wide md:mb-18 text-center md:text-left w-full">
            Hello! I am{" "}
            <span className="text-[#9757d3] font-semibold font-[Poppins]">
              M. Zaheer Ahmed
            </span>
          </h2>

          {/* Sub-heading */}
          <p className="text-sm sm:text-base md:text-lg font-[Preahvihear] text-gray-120 text-center md:text-left w-full">
            A Developer who
          </p>

          {/* Main Quote */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-[Preahvihear] leading-tight relative text-center md:text-left w-full mt-2">
            Judges a book 
            <br className="hidden md:block xl:block" />
            by its{" "}
            <span className="relative inline-block text-[#7127ba] font-[Preahvihear] ps-2 pe-2">
              cover
              <Image
                src="/Ellipse.png"
                alt="Ellipse highlight"
                width={155}
                height={100}
                className="absolute left-[0px] top-[-1px] w-[120px] sm:w-[160px] h-[30px] sm:h-[65px] z-[-1] opacity-100"
              />
            </span>
            ...
          </h1>

          {/* Tagline */}
          <p className="text-xs sm:text-sm md:text-base text-gray-400 font-[Poppins] mt-2 text-center md:text-left w-full">
            Because if the cover does not impress you, what else can?
          </p>
        </div>
      </div>

      {/* === Bottom Section (Only for Home Page) === */}
      {isHome && (
        <div
          className="
            flex flex-col mt-16 sm:mt-20 max-w-5xl 
            md:ms-[210px] sm:ms-8 ms-4 
            animate-fade-in-delay
          "
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-[Preahvihear] font-normal mb-4 text-center md:text-left">
            I&apos;m a Software Engineer.
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-5 font-[Poppins] text-gray-200 text-center md:text-left">
            SharePoint &amp; Power Platform Developer
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-[Poppins] max-w-4xl text-center text-[12px] px-4 md:text-left mx-auto md:px-0 md:mx-0">
            Senior SharePoint and Power Platform Consultant with 7+ years of
            progressive experience in enterprise solution design and
            implementation. Proven track record of delivering scalable solutions
            that improve operational efficiency by up to 40% and reduce
            processing time by 35%. Expert in SharePoint Framework (SPFx), Power
            Platform suite, and cloud migration strategies. Recognized for
            translating complex business requirements into innovative technical
            solutions that drive digital transformation initiatives.
          </p>
        </div>
      )}
    </section>
  );
}
