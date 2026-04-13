"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Megaphone, Users, Briefcase } from "lucide-react";

const audiences = [
  { icon: Building2, label: "Real Estate Agencies", color: "from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20", iconColor: "text-blue-500" },
  { icon: Megaphone, label: "Marketing & Advertising Firms", color: "from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20", iconColor: "text-purple-500" },
  { icon: Users, label: "Recruitment Agencies", color: "from-emerald-500/10 to-green-500/10 hover:from-emerald-500/20 hover:to-green-500/20", iconColor: "text-emerald-500" },
  { icon: Briefcase, label: "Consulting Firms", color: "from-orange-500/10 to-yellow-500/10 hover:from-orange-500/20 hover:to-yellow-500/20", iconColor: "text-orange-500" },
];

export default function Testimonial() {
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
    <section className="px-6 py-28 md:py-36 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative mx-auto max-w-5xl text-center">
        <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#3B82F6] mb-4 ${visible ? "animate-pop-in" : "opacity-0"}`}>
          Who Is This For
        </span>
        <h2 className={`font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-[#0f172a] ${visible ? "animate-reveal-up animate-delay-100" : "opacity-0"}`}>
          Built for businesses that can&apos;t
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">afford to miss a lead</span>
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((item, i) => (
            <div
              key={item.label}
              className={`group flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-b ${item.color} p-8 border border-transparent hover:border-[#e2e8f0] hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-default ${
                visible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 2) * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/80 ${item.iconColor} shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                <item.icon size={26} />
              </div>
              <span className="text-sm font-semibold text-[#0f172a]">{item.label}</span>
            </div>
          ))}
        </div>

        <p className={`mt-12 text-lg text-[#64748b] max-w-xl mx-auto leading-relaxed ${visible ? "animate-reveal-up animate-delay-700" : "opacity-0"}`}>
          If your business relies on inbound enquiries, we can help you respond faster and convert more.
        </p>
      </div>
    </section>
  );
}
