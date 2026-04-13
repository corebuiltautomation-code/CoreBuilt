"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Megaphone, Users, Briefcase } from "lucide-react";

const audiences = [
  { icon: Building2, label: "Real estate agencies" },
  { icon: Megaphone, label: "Marketing & advertising firms" },
  { icon: Users, label: "Recruitment agencies" },
  { icon: Briefcase, label: "Consulting firms" },
];

export default function Testimonial() {
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
        <span className={`inline-block text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-4 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          Who Is This For
        </span>
        <h2 className={`font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[#0f172a] ${visible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
          Built for businesses that can&apos;t afford to miss a lead
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((item, i) => (
            <div
              key={item.label}
              className={`group flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-5 py-4 hover:border-[#3B82F6]/30 hover:shadow-md transition-all duration-300 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 2) * 100}ms` }}
            >
              <item.icon size={20} className="text-[#3B82F6] shrink-0" />
              <span className="text-sm font-medium text-[#0f172a]">{item.label}</span>
            </div>
          ))}
        </div>

        <p className={`mt-10 text-[#64748b] max-w-lg mx-auto ${visible ? "animate-fade-in-up animate-delay-600" : "opacity-0"}`}>
          If your business relies on inbound enquiries, we can help you respond faster and convert more.
        </p>
      </div>
    </section>
  );
}
