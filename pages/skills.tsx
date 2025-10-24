import React from "react";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Header from "@/components/Header";

export default function SkillsPage() {
  const skills = [
    { title: "SharePoint Online", description: "Development, Configurations, Maintenance" },
    { title: "SharePoint On-Premises", description: "Installation, Management, Development" },
    { title: "SharePoint Framework", description: "React JS, TypeScript, PNP JS, Microsoft Fabric UI, Tailwind, Bootstrap" },
    { title: "Power Platform", description: "Power Apps, Power Automate, Power Bi, Power Pages" },
    { title: "Programming", description: "C#, JavaScript, jQuery, Ajax, JSON, Camel Query, JSOM, PNP.Js, HTML/CSS" },
    { title: "Integrations", description: "Google Drive, One Drive, Dynamics 365, ERP Systems, Legacy Application" },
    { title: "Scripting", description: "PowerShell Scripts" },
    { title: "Forms", description: "Microsoft Forms, Power App, SharePoint Designer Forms" },
    { title: "Reporting", description: "Power BI, SSRS" },
    { title: "Workflow", description: "SharePoint Designer 2013 Workflows, Power Automate" },
    { title: "Tools", description: "Visual Studio, VS Code, SharePoint Designer, Power BI Desktop, SSRS Report Builder, Copilot Studio, Copilot for Microsoft 365" },
    { title: "Soft Skills", description: "Communication, Problem-Solving, Team Collaboration" },
  ];

  const certifications = [
    "Microsoft Certified: Power Platform App Maker (PL-100)",
    "Microsoft Certified: Power Bi Data Analyst (PL-300)",
    "Microsoft Certified: Power Platform Fundamentals (PL-900)",
    "Microsoft Certified: Dynamic365 CRM Fundamentals",
    "Microsoft Certified: Dynamics365 ERP Fundamentals",
    "Microsoft Certified: Azure AI Fundamentals",
    "Microsoft Build Challenge",
  ];

  const experience = [
    "Applab, Doha, Qatar",
    "Almoayyed Computers Middle East, Manama, Bahrain",
    "Systems Limited, Islamabad, Pakistan",
    "Carbon8 Private Limited, Islamabad, Pakistan",
  ];

  return (
    <>
      {/* Header + Hero */}
      <Header />
      <section className="md:ms-[-45px] animate-fade-in">
        <Hero />
      </section>

      {/* Main Content */}
      <section className="mx-6 sm:mx-10 md:mx-40 animate-fade-up [--animation-delay:0.3s]">
        {/* Skills Section */}
        <section className="py-10 animate-fade-up [--animation-delay:0.4s]">
          <h2 className="text-white text-4xl sm:text-5xl font-[Preahvihear] font-normal mb-3">
            Skills
          </h2>
          <div className="border-t border-white/50 w-full mb-7 border-2" />
          <div className="space-y-5 text-[#ccd6f6] font-[Poppins] leading-relaxed text-[16px] sm:text-[18px]">
            {skills.map((item, index) => (
              <p
                key={index}
                className="animate-slideUp"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <span className="text-white font-medium">{item.title}:</span>{" "}
                {item.description}
              </p>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-8 animate-fade-up [--animation-delay:0.6s]">
          <h2 className="text-[#b37df2] text-3xl sm:text-4xl font-[Preahvihear] font-normal mb-3">
            Certifications
          </h2>
          <div className="border-t border-white/50 w-full mb-7 border-2" />
          <ul className="list-disc list-inside text-[#ccd6f6] space-y-2 font-[Poppins] leading-relaxed text-[16px] sm:text-[18px]">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="animate-slideUp"
                style={{ animationDelay: `${0.05 * index + 0.3}s` }}
              >
                {cert}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience Section */}
        <section className="py-8 animate-fade-up [--animation-delay:0.8s]">
          <h2 className="text-[#b37df2] text-3xl sm:text-4xl font-[Preahvihear] font-normal mb-3">
            Experience
          </h2>
          <div className="border-t border-white/50 w-full mb-7 border-2" />
          <ul className="list-disc list-inside text-[#ccd6f6] space-y-2 font-[Poppins] leading-relaxed text-[16px] sm:text-[18px]">
            {experience.map((exp, index) => (
              <li
                key={index}
                className="animate-slideUp"
                style={{ animationDelay: `${0.05 * index + 0.5}s` }}
              >
                {exp}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
