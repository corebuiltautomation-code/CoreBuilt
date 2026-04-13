"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
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
    <section className="px-6 py-24 md:py-32 bg-[#0A0F1C] relative overflow-hidden">
      {/* Glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] animate-glow-pulse" />

      <div ref={ref} className="relative mx-auto max-w-2xl">
        <div className={`text-center p-12 sm:p-16 rounded-3xl glass-card ${visible ? "animate-scale-in" : "opacity-0"}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-500/10 text-emerald-400 mb-8 animate-float" style={{ animationDuration: "4s" }}>
            <ShieldCheck size={40} />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Guarantee
          </h2>
          <p className="mt-6 text-xl sm:text-2xl text-white/60 leading-relaxed max-w-lg mx-auto font-medium">
            If it doesn&apos;t work in 2 weeks, you don&apos;t have to pay anything.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/30">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
              No risk
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
              No long contracts
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
              Just results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
