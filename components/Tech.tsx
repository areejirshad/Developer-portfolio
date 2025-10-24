import React from "react";
import Image from "next/image";

export default function Tech(): JSX.Element {
  return (
    <section
      id="tech"
      className="relative w-full text-white py-12 sm:py-16 md:py-24 overflow-hidden transition-all duration-500 animate-fade-in-up"
      aria-labelledby="tech-heading"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 text-center relative">
        {/* --- Subtle Background Glow (reduced visibility on mobile) --- */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] md:w-[900px] h-[250px] sm:h-[400px] md:h-[500px] -z-10 opacity-40 md:opacity-70"
        >
          <div
            className="w-full h-full rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(144,76,211,0.25) 0%, rgba(72,32,150,0.15) 40%, rgba(20,8,60,0.05) 80%)",
            }}
          />
        </div>

        {/* --- Section Text --- */}
        <h2
          id="tech-heading"
          className="text-[15px] sm:text-[18px] md:text-[22px] leading-snug font-[Preahvihear] text-center mb-8 sm:mb-10 md:mb-14 transition-all duration-500"
          style={{ maxWidth: 900, margin: "0 auto" }}
        >
          I’m currently looking to join a{" "}
          <span className="text-[#9757d3] font-semibold">
            cross-functional team
          </span>{" "}
          that values improving people’s lives through accessible design
        </h2>

        {/* --- Tech Stack Image --- */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[850px]">
            <Image
              src="/tech.png"
              alt="Technology Stack"
              width={850}
              height={350}
              className="object-contain mx-auto w-full h-auto transition-transform duration-700 ease-in-out hover:scale-[1.02]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
