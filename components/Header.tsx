// components/Header.tsx
"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" }, // clickable top-level Projects link
];

const projectSubmenu = [
  { label: "Systems Limited Project", href: "/projectsystem" },
  { label: "Carbon8 Pvt.Ltd Project", href: "/Projectcarbon" },
  { label: "Qatar project", href: "/projectqatar" },
  { label: "Bahrain project", href: "/projectbahrain" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(true);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  const openDesktop = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setDesktopOpen(true);
  };

  const scheduleCloseDesktop = (delay = 150) => {
    if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
    closeTimeout.current = window.setTimeout(() => {
      setDesktopOpen(false);
      closeTimeout.current = null;
    }, delay);
  };

  return (
    <header className="w-full bg-[var(--color-header)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-[72px] md:h-[80px] flex items-center justify-between px-4 md:px-8">
        {/* Left: logo + mobile menu button */}
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Home" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={36} height={36} priority className="object-contain" />
          </Link>

          {/* Mobile menu open button (left-aligned) */}
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/5 transition"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="stroke-current">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Center nav (desktop) */}
        <nav className="flex-1 flex justify-center">
          <ul className="hidden md:flex items-center gap-40">
            {navItems.map((item) =>
              item.label !== "Projects" ? (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white font-medium text-lg tracking-wide hover:text-[#a678de] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                // Projects: clickable top-level + hoverable dropdown
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={openDesktop}
                  onMouseLeave={() => scheduleCloseDesktop(150)}
                >
                  {/* Top-level Projects clickable link */}
                  <Link
                    href={item.href}
                    onFocus={openDesktop}
                    onBlur={() => scheduleCloseDesktop(100)}
                    className="inline-flex items-center gap-2 text-white font-medium text-lg tracking-wide hover:text-[#a678de] transition-colors duration-200"
                    aria-haspopup="true"
                    aria-expanded={desktopOpen}
                  >
                    <span>Projects</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>

                  {/* Desktop dropdown panel */}
                  <div
                    role="menu"
                    aria-label="Projects submenu"
                    className={`absolute left-1/2 -translate-x-1/2 mt-3 w-60 bg-[var(--color-header)] rounded-lg shadow-lg border border-white/6 ring-1 ring-white/6 py-2 z-40
                      ${desktopOpen ? "opacity-100 visible animate-fade-up" : "opacity-0 invisible pointer-events-none"}`}
                    style={{ transition: "visibility .15s, opacity .2s" }}
                    onMouseEnter={openDesktop}
                    onMouseLeave={() => scheduleCloseDesktop(150)}
                  >
                    {projectSubmenu.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        role="menuitem"
                        className="block px-4 py-2 text-sm text-white hover:bg-white/5 transition"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Right placeholder for desktop spacing */}
        <div className="hidden md:flex items-center w-28 justify-end" />

        {/* Mobile slide-over */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50">
            {/* backdrop */}
            <button aria-label="Close menu backdrop" className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />

            {/* left panel */}
            <aside className="absolute left-0 top-0 bottom-0 w-72 sm:w-80 bg-[var(--color-header)] p-6 overflow-y-auto animate-fade-in" aria-label="Mobile menu">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" aria-label="Home" className="flex items-center">
                  <Image src="/logo.png" alt="Logo" width={32} height={32} />
                </Link>
                <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="p-2 rounded-md text-white hover:bg-white/5 transition">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
                    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <nav aria-label="Mobile navigation" className="space-y-4">
                <Link href="/" onClick={() => setMobileOpen(false)} className="block text-white font-medium text-lg">
                  Home
                </Link>

                <Link href="/skills" onClick={() => setMobileOpen(false)} className="block text-white font-medium text-lg">
                  Skills
                </Link>

                {/* Projects clickable top link in mobile */}
                <Link href="/projects" onClick={() => setMobileOpen(false)} className="block text-white font-medium text-lg">
                  Projects
                </Link>

                {/* Projects sublist (accordion) */}
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={() => setMobileProjectsOpen((s) => !s)}
                    aria-expanded={mobileProjectsOpen}
                    className="w-full flex items-center justify-between text-white font-medium text-base"
                  >
                    Project sites
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={`transition-transform ${mobileProjectsOpen ? "rotate-180" : "rotate-0"}`}>
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div className={`mt-2 space-y-1 pl-3 ${mobileProjectsOpen ? "block" : "hidden"}`}>
                    {projectSubmenu.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-white/90 px-2 py-2 rounded hover:bg-white/5 transition"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>

              <div className="mt-8 border-t border-white/6 pt-4 text-sm text-[#ccd6f6]">
                <div>Doha, Qatar</div>
                <div className="mt-2">• 97477695948</div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </header>
  );
}
