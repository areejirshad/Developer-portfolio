"use client";
import React from "react";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Header from "@/components/Header";

export default function ProjectCarbon() {
  const systemsExperience = [
    "Developed and customized SharePoint Online sites using modern web parts, site pages, and custom lists/libraries to support various business functions.",
    "Built Power Apps forms connected to SharePoint lists to enhance user interaction and replace manual processes..",
    "Automated workflows using Power Automate (Flow) to streamline approval processes, notifications, and data updates.",
    "Customized SharePoint list views using JSON formatting to improve data presentation and usability for end users.",
    "Created communication and team sites with proper structure, navigation, and branding as per business requirements.",
    "Worked with SharePoint REST APIs and PnP PowerShell to automate site provisioning and bulk operations",
    "Used HTML, CSS, and JavaScript (including jQuery) for UI enhancements",
    " Implemented custom permission models and configured user access and group policies for secure and role-based access",
    "Created MS Flows for Approvals and Reminders.",
    "Supported users by troubleshooting issues related to permissions, workflows, and list",
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
                Carbon8 Private Limited, Pakistan
              </h2>
              <div className="border-t border-white/40 w-full border-2" />
              <div className="flex flex-col md:flex-row justify-between items-start  md:items-start mb-15">
              <h3 className="text-[#b37df2] text-xl mt-2">
                Junior Consultant SharePoint
              </h3>
            
            <p className="text-white text-lg font-[Preahvihear] mt-3 md:mt-2">
              09/2018 – 01/2021
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

