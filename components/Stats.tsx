"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Rocket, Shield, Target } from "lucide-react";

const stats = [
  { value: "< 10s", label: "Response Time", icon: Clock },
  { value: "48 hrs", label: "Setup Time", icon: Rocket },
  { value: "24/7", label: "Always Running", icon: Shield },
  { value: "0", label: "Leads Missed", icon: Target },
];

export default function Stats() {
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
    <section className="px-6 py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] to-white" />

      <div ref={ref} className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group text-center p-8 rounded-3xl border border-[#e2e8f0] bg-white hover:border-[#3B82F6]/20 hover:shadow-xl hover:shadow-[#3B82F6]/5 transition-all duration-500 hover:-translate-y-1 ${visible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#3B82F6]/5 text-[#3B82F6] mb-5 group-hover:scale-110 transition-transform duration-500">
                <stat.icon size={22} />
              </div>
              <p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] group-hover:text-[#3B82F6] transition-colors duration-300">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[#64748b] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
