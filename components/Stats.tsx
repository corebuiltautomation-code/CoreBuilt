"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "< 10 sec", label: "Average response time" },
  { value: "48 hrs", label: "Setup time" },
  { value: "24/7", label: "Always on" },
  { value: "0", label: "Leads missed" },
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
    <section className="px-6 py-20 md:py-28 bg-[#0A0F1C]">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${visible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-sm sm:text-base text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
