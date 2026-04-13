"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0F1C]/80 backdrop-blur-2xl shadow-2xl shadow-black/10 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-[76px]">
        <a href="#" className="inline-flex items-center gap-2.5 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight group">
          <svg width="32" height="32" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-300">
            <rect width="44" height="44" rx="10" fill="#3B82F6"/>
            <rect x="8" y="8" width="12" height="12" rx="3" fill="#FFFFFF" opacity="0.9"/>
            <rect x="24" y="8" width="12" height="12" rx="3" fill="#FFFFFF" opacity="0.5"/>
            <rect x="8" y="24" width="12" height="12" rx="3" fill="#FFFFFF" opacity="0.5"/>
            <rect x="24" y="24" width="12" height="12" rx="3" fill="#FFFFFF" opacity="0.9"/>
            <line x1="20" y1="14" x2="24" y2="14" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="14" y1="20" x2="14" y2="24" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="30" y1="20" x2="30" y2="24" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="20" y1="30" x2="24" y2="30" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-white">Core</span><span className="text-[#3B82F6]">Built</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white/50 hover:text-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#3B82F6] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center justify-center rounded-xl bg-[#3B82F6] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#2563EB] transition-all duration-300 shadow-lg shadow-[#3B82F6]/20 hover:shadow-[#3B82F6]/40 hover:scale-[1.02]"
          >
            Send a Message
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0F1C]/95 backdrop-blur-2xl border-t border-white/5 px-6 pb-6 pt-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-white/50 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center mt-3 rounded-xl bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2563EB] transition-colors"
          >
            Send a Message
          </a>
        </div>
      )}
    </nav>
  );
}
