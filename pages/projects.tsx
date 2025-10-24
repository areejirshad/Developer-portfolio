// components/Projects.tsx
import Header from "@/components/Header";
import React from "react";

type ProjectItem = {
  title: string;
  subtitle?: string;
  purpose: string;
  features: string[];
  techStack: string;
};

const PROJECTS: ProjectItem[] = [
  {
    title: "Intranet Portal – Hammad Bin Khalifa University",
    purpose:
      "Developed a centralized digital workplace for faculty, students, and administration to improve internal communication and service access.",
    features: [
      "Department-wise site collections and hubs",
      "University announcements, service directories, and document repositories",
      "Role-based access and information flow tailored to faculty, students, and admin staff",
      "Tech Stack: SharePoint Online, SPFx, React, PnP JS, Power Automate",
    ],
    techStack: "SharePoint Online, SPFx, React, PnP JS, Power Automate",
  },
  {
    title: "Intranet Portal – Prime Minister Office (Bahrain)",
    purpose:
      "Designed a secure, internal collaboration platform for government stakeholders to manage services, documentation, and approvals.",
    features: [
      "SharePoint 2019-based customized intranet portal",
      "30+ departmental services with individual approval workflows",
      "Custom Visual Web Parts in C#, handling complex logic and dynamic content",
      "Highly secure role-based architecture and content routing",
    ],
    techStack: "SharePoint 2019, ASP.NET, C#, Visual Web Parts, PowerShell",
  },
  {
    title: "Public Facing Portal – Higher Education Commission (HEC) of Pakistan",
    purpose:
      "Revamped the national HEC website to enhance access to academic information for students, faculty, and the general public.",
    features: [
      "Full migration from SharePoint 2013 to SharePoint 2019",
      "Custom branding, responsive design and modern UI",
      "Content structure for universities, scholarships, academic programs, faculty, and FAQs",
    ],
    techStack: "SharePoint 2019, HTML/CSS, JavaScript, C#, PowerShell",
  },
  {
    title: "Enterprise Content Management System – Central Power Purchasing Agency (CPPA)",
    purpose:
      "Built a robust document and records management system to digitize operations and ensure audit-ready workflows.",
    features: [
      "SharePoint Online document libraries managing millions of records",
      "Document approvals and retention processes",
      "Real-time metadata-based search and access control",
    ],
    techStack: "SharePoint Online, Power Automate, PowerShell, PnP",
  },
  {
    title: "Novum Network Intranet Portal",
    purpose:
      "Digitized internal business operations through a centralized intranet with business automation features.",
    features: [
      "Built on SharePoint Online with Power Apps for forms and business apps",
      "Automated flows for approvals and task assignments via Power Automate",
    ],
    techStack: "SharePoint Online, Power Apps, Power Automate, SPFx",
  },
  {
    title: "CMC Microsystems – Strands Intranet Portal",
    purpose:
      "Created a collaborative internal portal to support communication, documentation, and approval workflows.",
    features: [
      "Power Apps-based business apps integrated with SharePoint lists",
      "Automations for task tracking, notifications, and document approvals",
    ],
    techStack: "SharePoint Online, Power Apps, Power Automate",
  },
  {
    title: "Data Exchange Portal – Independent Power Producers (IPPs)",
    purpose:
      "Enabled secure data exchange and invoice management between power producers and the authority.",
    features: [
      "External collaboration features",
      "Invoice lifecycle management and tracking",
      "Document uploads, audit trails, and reports",
    ],
    techStack: "SharePoint Online, Power Automate, C#",
  },
  {
    title: "Receive & Issue (R&I) System",
    purpose:
      "Digital system for document receipt and issuance to replace manual tracking.",
    features: [
      "Log, track and search for issued/received documents",
      "Role-based approvals and real-time access",
    ],
    techStack: "SharePoint Online, Power Automate, Power Apps",
  },
];

export default function Projects(): JSX.Element {
  return (
    <>
      <Header />
      <section className="w-full bg-transparent text-white animate-fade-in">
        <div className="max-w-6xl px -4 sm:px-10 md:px-10 lg:px-23 py-20">
          {/* Heading Section */}
          <header className="mb-10 animate-fade-up [--animation-delay:200ms]">
            <h3
              className="font-[Preahvihear] text-[20px] md:text-[32px] py-5 pb-10 ps-2 md:ps-5 leading-none tracking-tight text-white"
              style={{ lineHeight: 0.9 }}
            >
              Customizations
            </h3>
            <h1
              className="font-[Preahvihear] text-[60px] md:text-[82px] leading-none tracking-tight text-white"
              style={{ lineHeight: 0.9 }}
            >
              PROJECTS
            </h1>
            <div className="mt-4 border-t border-white/20 w-full" />
          </header>

          {/* Projects List */}
          <div className="space-y-12">
            {PROJECTS.map((p, idx) => (
              <article
                key={p.title}
                className="relative animate-fade-up"
                style={{ "--animation-delay": `${300 + idx * 150}ms` } as React.CSSProperties}
              >
                <h2
                  className="text-[#8f53c9] text-[20px] md:text-[22px] font-[Preahvihear] mb-4"
                  style={{ letterSpacing: "0.2px" }}
                >
                  {p.title}
                </h2>

                <p className="mb-4 text-white">
                  <span className="font-semibold">Purpose:</span>{" "}
                  <span className="font-normal text-white/90">{p.purpose}</span>
                </p>

                <div className="mb-4">
                  <h3 className="text-[#8f53c9] font-[Preahvihear] mb-3">
                    Scope &amp; Features:
                  </h3>
                  <ul className="list-disc list-inside text-[#ccd6f6] space-y-2 pl-4 md:pl-6">
                    {p.features.map((f, i) => (
                      <li key={i} className="text-sm md:text-base">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="mt-3 text-sm text-[#ccd6f6]">
                    <span className="font-medium text-white">Tech Stack:</span>{" "}
                    <span className="text-white/90">{p.techStack}</span>
                  </p>
                </div>

                {idx < PROJECTS.length - 1 && (
                  <div className="mt-8 border-t border-white/10" />
                )}
              </article>
            ))}
          </div>

          <div className="mt-20" />
        </div>
      </section>
    </>
  );
}
