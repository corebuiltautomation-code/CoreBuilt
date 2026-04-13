"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, X, Check } from "lucide-react";

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 py-28 md:py-36 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-[150px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] opacity-50" />

      <div ref={ref} className="relative mx-auto max-w-4xl text-center">
        <div className={visible ? "animate-pop-in" : "opacity-0"}>
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-5 py-2.5 text-xs font-semibold text-red-500 uppercase tracking-wider mb-10">
            <AlertTriangle size={14} />
            The Problem
          </div>
        </div>

        <h2 className={`font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f172a] leading-tight ${visible ? "animate-reveal-up animate-delay-100" : "opacity-0"}`}>
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">78%</span> of leads go to the
          <br className="hidden sm:block" /> business that responds first.
        </h2>

        <p className={`mt-8 text-lg sm:text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed ${visible ? "animate-reveal-up animate-delay-300" : "opacity-0"}`}>
          But most small businesses take hours, or even days, to reply.
          By then, your potential customer has already moved on.
        </p>

        {/* Comparison cards */}
        <div className={`mt-16 grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto ${visible ? "animate-reveal-up animate-delay-400" : "opacity-0"}`}>
          {/* Without */}
          <div className="group relative rounded-3xl border-2 border-red-100 bg-gradient-to-b from-red-50/80 to-white p-8 text-center hover:border-red-200 hover:shadow-xl hover:shadow-red-100/50 transition-all duration-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-100 text-red-500 mb-5">
              <X size={28} strokeWidth={3} />
            </div>
            <p className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">Without CoreBuilt</p>
            <p className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl font-bold text-red-500">5 hrs</p>
            <p className="mt-3 text-sm text-[#64748b]">Average response time<br />for small businesses</p>
          </div>

          {/* With */}
          <div className="group relative rounded-3xl border-2 border-[#3B82F6]/20 bg-gradient-to-b from-blue-50/80 to-white p-8 text-center hover:border-[#3B82F6]/40 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6] mb-5">
              <Check size={28} strokeWidth={3} />
            </div>
            <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider mb-3">With CoreBuilt</p>
            <p className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl font-bold text-[#3B82F6]">10 sec</p>
            <p className="mt-3 text-sm text-[#64748b]">Instant automated<br />response to every lead</p>
          </div>
        </div>
      </div>
    </section>
  );
}
