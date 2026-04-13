"use client";

import { Search, Wrench, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "We audit your current process",
    description:
      "We look at how you currently handle leads and find the gaps where you're losing potential customers.",
  },
  {
    num: "02",
    icon: Wrench,
    title: "We build your automation",
    description:
      "In 48 hours, we set up a custom system that captures, responds to, and follows up with every lead automatically.",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "You start converting more",
    description:
      "Sit back and watch your response rate and conversions increase. We handle the tech, you handle the clients.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="px-6 py-28 md:py-36 bg-[#0A0F1C] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#3B82F6] mb-4 ${visible ? "animate-pop-in" : "opacity-0"}`}>
            How It Works
          </span>
          <h2 className={`font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-white ${visible ? "animate-reveal-up animate-delay-100" : "opacity-0"}`}>
            Three simple steps to
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">never miss a lead again</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative text-center ${visible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 2) * 150}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(50%+56px)] w-[calc(100%-112px)] h-px">
                  <div className="h-full bg-gradient-to-r from-[#3B82F6]/40 to-[#3B82F6]/10" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#3B82F6]/30" />
                </div>
              )}

              <div className="relative inline-flex flex-col items-center">
                {/* Number */}
                <span className="font-[family-name:var(--font-display)] text-7xl font-bold text-white/[0.03] mb-0 select-none">
                  {step.num}
                </span>
                {/* Icon */}
                <div className="mb-8 -mt-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-card text-[#3B82F6] hover:bg-[#3B82F6]/10 transition-all duration-500">
                  <step.icon size={28} />
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/40 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
