import React from "react";
import Image from "next/image";

type Project = {
  id: number;
  featured: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    featured: "Featured Project",
    title: "Example Project",
    subtitle: "Intranet Portal – Hammad Bin Khalifa University",
    description:
      "Developed a centralized digital workplace for faculty, students, and administration to improve internal communication and service access.",
    image: "/Projects/Project1.png",
  },
  {
    id: 2,
    featured: "Featured Project",
    title: "Example Project",
    subtitle: "Intranet Portal – Prime Minister Office (Bahrain)",
    description:
      "Designed a secure, internal collaboration platform for government stakeholders to manage services, documentation, and approvals.",
    image: "/Projects/Project2.png",
  },
];

export default function ProjectsSection(): JSX.Element {
  return (
    <section
      id="projects"
      className="relative w-full py-16 md:py-24 overflow-visible animate-fade-in-up"
    >
      <div className="max-w-[1166px] mx-auto px-4 md:px-0 relative space-y-20">
        {/* --- PROJECT 1 --- */}
        <article className="relative flex flex-col lg:flex-row items-start gap-8 lg:gap-3">
          {/* TEXT COLUMN */}
          <div className="w-full lg:w-1/2 flex justify-start order-2 lg:order-1">
            <div className="max-w-[600px] text-left md:text-left animate-fade-in-up">
              <span className="text-xs text-[#9757d3] font-semibold uppercase tracking-wider">
                {PROJECTS[0].featured}
              </span>

              <h3
                className="text-[28px] sm:text-[32px] md:text-[40px] text-white font-semibold mt-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {PROJECTS[0].title}
              </h3>

              <div className="mt-5 relative w-full">
                {/* Glassy overlay card */}
                <div
                  className="relative z-20 rounded-[14px] px-5 sm:px-6 py-6 text-[#ccd6f6] shadow-[0_10px_30px_rgba(8,6,20,0.6)] w-full bg-gradient-to-r from-[#2b1740]/90 via-[#3b1f5a]/60 to-[#2b114f]/60 md:w-[585]"
                  style={{ backdropFilter: "blur(6px)" }}
                >
                  <h4
                    className="text-base sm:text-lg font-medium mb-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {PROJECTS[0].subtitle}
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed opacity-90">
                    {PROJECTS[0].description}
                  </p>
                </div>

                <div className="flex gap-3 mt-6">
                  <Image
                    src="/Projects/icon.svg"
                    alt="icon"
                    width={26}
                    height={26}
                  />
                  <Image
                    src="/Projects/icon.svg"
                    alt="icon"
                    width={26}
                    height={26}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative order-1 lg:order-2 animate-fade-in-up">
            <div className="relative w-full sm:w-[90%] md:w-[640px] max-w-full">
              {/* Hide gradient & dark cover on mobile */}
              <div className="hidden md:block absolute left-[-24px] top-[-19px] w-[620px] h-[335px] rounded-[12px] -z-10"
                style={{
                  background: "#2a0f33",
                  boxShadow: "0 40px 80px rgba(8,6,20,0.5)",
                  clipPath: "inset(0 50px 0 0 round 12px)",
                }}
              />
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[-35%] w-[750px] h-[520px] -z-20 pointer-events-none">
                <Image
                  src="/Gradient.png"
                  alt="project gradient"
                  fill
                  className="object-cover opacity-95 blur-[28px]"
                  priority
                />
              </div>

              <div className="relative rounded-[10px] overflow-hidden z-10">
                <Image
                  src={PROJECTS[0].image}
                  alt={PROJECTS[0].title}
                  width={640}
                  height={320}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </article>

        {/* --- PROJECT 2 --- */}
        <article className="relative flex flex-col lg:flex-row items-start gap-8 lg:gap-8">
          {/* IMAGE COLUMN */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative animate-fade-in-up">
            <div className="relative w-full sm:w-[90%] md:w-[640px] max-w-full">
              {/* Hide background cover on mobile */}
              <div className="hidden md:block absolute left-[-52px] top-[-17px] w-[618px] h-[335px] rounded-[12px] -z-10"
                style={{
                  background: "#2a0f33",
                  boxShadow: "0 40px 80px rgba(8,6,20,0.5)",
                  clipPath: "inset(0 0 0 50px round 12px)",
                }}
              />
              <div className="hidden md:block absolute left-1/3 -translate-x-1/2 top-[-35%] w-[520px] h-[500px] -z-20 pointer-events-none">
                <Image
                  src="/Gradient.png"
                  alt="project gradient"
                  fill
                  className="object-cover opacity-95 blur-[10px]"
                  priority
                />
              </div>

              <div className="relative rounded-[10px] overflow-hidden z-10">
                <Image
                  src={PROJECTS[1].image}
                  alt={PROJECTS[1].title}
                  width={640}
                  height={320}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* TEXT COLUMN */}
          <div className="w-full lg:w-1/2 flex justify-end animate-fade-in-up">
            <div className="max-w-[540px] text-left lg:text-right lg:mr-6">
              <span className="text-xs text-[#9757d3] font-semibold uppercase tracking-wider">
                {PROJECTS[1].featured}
              </span>

              <h3
                className="text-[28px] sm:text-[32px] md:text-[40px] text-white font-semibold mt-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {PROJECTS[1].title}
              </h3>

              <div className="mt-5 relative">
                <div
                  className="relative z-20 rounded-[14px] px-5 py-6 text-[#ccd6f6] shadow-[0_10px_30px_rgba(8,6,20,0.6)] w-full bg-gradient-to-l from-[#2b1740]/90 via-[#3b1f5a]/60 to-[#2b114f]/60 md:ml-[-40px] md:w-[580px]" 
                  style={{ backdropFilter: "blur(6px)" }}
                >
                  <h4
                    className="text-base sm:text-lg font-medium mb-2 text-center lg:text-center"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {PROJECTS[1].subtitle}
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed opacity-90 text-center lg:text-right">
                    {PROJECTS[1].description}
                  </p>
                </div>

                <div className="flex gap-3 mt-6 justify-start lg:justify-end">
                  <Image
                    src="/Projects/icon.svg"
                    alt="icon"
                    width={26}
                    height={26}
                  />
                  <Image
                    src="/Projects/icon.svg"
                    alt="icon"
                    width={26}
                    height={26}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Learn More Button */}
        <div className="flex justify-start mt-[-50px] lg:justify-end  animate-fade-in-up">
          <button
            type="button"
            className="px-6 py-2 rounded-[10px] border border-[#683a92] text-white text-sm font-medium bg-[#2b114f] hover:bg-[#3d1a66] transition-colors"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}
