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
      "In 48 hours, we set up a custom system that captures, responds to, and follows up with every lead — automatically.",
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
    <section id="how-it-works" className="px-6 py-24 md:py-32 bg-white">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className={`inline-block text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-4 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            How It Works
          </span>
          <h2 className={`font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[#0f172a] ${visible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
            How it works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative text-center ${visible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+48px)] w-[calc(100%-96px)] h-px bg-gradient-to-r from-[#3B82F6]/30 to-[#e2e8f0]" />
              )}

              <div className="relative inline-flex flex-col items-center">
                {/* Number */}
                <span className="font-[family-name:var(--font-display)] text-6xl font-bold text-[#3B82F6]/10 mb-2">
                  {step.num}
                </span>
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6]">
                  <step.icon size={26} />
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#0f172a] mb-3">
                {step.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
