"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle } from "lucide-react";

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 py-24 md:py-32 bg-white">
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        <div className={visible ? "animate-fade-in-up" : "opacity-0"}>
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-4 py-2 text-xs font-semibold text-red-500 uppercase tracking-wider mb-8">
            <AlertTriangle size={14} />
            The Problem
          </div>
        </div>

        <h2 className={`font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight ${visible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
          <span className="text-[#3B82F6]">78%</span> of leads go to the business
          <br className="hidden sm:block" /> that responds first.
        </h2>

        <p className={`mt-6 text-lg sm:text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed ${visible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
          But most small businesses take hours — or even days — to reply.
          By then, your potential customer has already moved on.
        </p>

        {/* Visual comparison */}
        <div className={`mt-14 grid sm:grid-cols-2 gap-6 max-w-xl mx-auto ${visible ? "animate-fade-in-up animate-delay-300" : "opacity-0"}`}>
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6 text-center">
            <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-red-500">5 hrs</p>
            <p className="mt-2 text-sm text-[#64748b]">Average response time<br />for small businesses</p>
          </div>
          <div className="rounded-2xl border border-[#3B82F6]/20 bg-[#3B82F6]/5 p-6 text-center">
            <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-[#3B82F6]">10 sec</p>
            <p className="mt-2 text-sm text-[#64748b]">Response time<br />with CoreBuilt</p>
          </div>
        </div>
      </div>
    </section>
  );
}
