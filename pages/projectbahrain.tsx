"use client";
import React from "react";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Header from "@/components/Header";

export default function projectbahrain() {
  const systemsExperience = [
    "Designed, customized and executed exceptional SharePoint-developed websites as per the user needs and requirements",
    "Worked on branding and UI customization of classic and modern SharePoint sites using CSS, JavaScript and master page techniques",
    "Participated in requirement gathering, solution design, and user acceptance testing (UAT) with business stakeholders",
    "Created and configured SharePoint sites, lists, libraries, workflows, and web parts",
    "Branding: Implemented SharePoint branding and user interface (UI) enhancements to create visually appealing and user-friendly sites.",
    "Created and maintained SharePoint site templates, master pages, content types, and site columns to ensure consistency and governance.",
    "Developed custom forms and templates using Power Apps and SharePoint Designer.",
    "Designed and recommended modern and user-friendly UX design; increased productivity by 20% in less than 40 days.",
  ];

  

  

  return (
    <div>
      {/* Header and Hero Section */}
      <Header />
      <section className="md:ms-[-45px]">
        <Hero />
      </section>

      {/* Page Content Wrapped in Layout */}
      
        {/* === Systems Limited Experience Section === */}
        <section className="max-w-5xl px-6 sm:mx-10 md:mx-30 pb-16 text-white font-[Poppins]">
          {/* Company Header */}
          
            <div>
              <h2 className="text-[42px] font-[Preahvihear] font-normal text-white leading-tight">
                Almoayyed Computers <br/> Middle East, Bahrain
              </h2>
              <div className="border-t border-white/40 w-full border-2" />
              <div className="flex flex-col md:flex-row justify-between items-start  md:items-start mb-15">
              <h3 className="text-[#b37df2] text-xl mt-2">
                Consultant SharePoint & Power Platform
              </h3>
            
            <p className="text-white text-lg font-[Preahvihear] mt-3 md:mt-2">
              08/2022 – 04/2025
            </p>
            </div>
          </div>

          {/* Divider */}
          

          {/* Bullet Points */}
          <ul className="list-disc list-inside space-y-4 text-[#ccd6f6] text-[18px] leading-relaxed">
            {systemsExperience.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>
      
    </div>
  );
}

