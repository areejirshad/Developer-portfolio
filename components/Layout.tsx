// components/Layout.tsx
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[var(--color-bg)] text-white">
      <main
        className="
          w-full 
          max-w-7xl 
          mx-auto 
          px-4 
          sm:px-6 
          md:px-10 
          lg:px-16 
          xl:px-24 
          2xl:px-32 
          py-6 
          animate-fade-in
          relative
          before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px]
        "
        style={{
          overflowX: "clip", // ✅ Better than overflow-x-hidden — hides horizontal overflow without breaking top merging
        }}
      >
        {children}
      </main>
    </div>
  );
}
  