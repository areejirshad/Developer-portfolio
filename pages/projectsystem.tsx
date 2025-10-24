"use client";
import React from "react";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Header from "@/components/Header";

export default function projectsystem() {
  const systemsExperience = [
    "Develop custom SharePoint solutions, including web parts, workflows, and sites.",
    "Developed and deployed custom web parts and solutions using SharePoint 2019’s supported server-side and client-side development models.",
    "Configured and managed SharePoint farms, including web applications, site collections, service applications, and application pools.",
    "Customized SharePoint 2019 sites using Master Pages, Page Layouts, and Display Templates.",
    "Developed farm or sandboxed solutions as per business needs.",
    "Used HTML, CSS, and JavaScript (including jQuery) for UI enhancements.",
    "Implemented custom permission models and configured user access and group policies for secure and role-based access.",
    "Collaborated with stakeholders and business users to gather requirements and translate them into scalable SharePoint solutions.",
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
                Systems Limited, Pakistan
              </h2>
              <div className="border-t border-white/40 w-full border-2" />
              <div className="flex flex-col md:flex-row justify-between items-start  md:items-start mb-15">
              <h3 className="text-[#b37df2] text-xl mt-2">
                Junior Consultant SharePoint
              </h3>
            
            <p className="text-white text-lg font-[Preahvihear] mt-3 md:mt-2">
              03/2021 – 06/2022
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

