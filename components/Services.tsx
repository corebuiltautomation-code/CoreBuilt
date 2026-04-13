"use client";

import { Zap, Mail, Database, Bell, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Zap,
    title: "Instant Lead Response",
    description:
      "Every enquiry gets an automatic reply within 10 seconds. Day or night, weekday or weekend.",
    gradient: "from-yellow-400/20 to-orange-400/20",
    iconBg: "bg-yellow-400/10 text-yellow-500 group-hover:bg-yellow-400 group-hover:text-white",
  },
  {
    icon: Mail,
    title: "Smart Follow Up Sequences",
    description:
      "Automated email sequences that follow up with leads until they respond or book a call.",
    gradient: "from-blue-400/20 to-cyan-400/20",
    iconBg: "bg-blue-400/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
  },
  {
    icon: Database,
    title: "CRM Setup",
    description:
      "All your leads organised in one place. Track status from new enquiry to closed deal. No more spreadsheets.",
    gradient: "from-emerald-400/20 to-green-400/20",
    iconBg: "bg-emerald-400/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white",
  },
  {
    icon: Bell,
    title: "Real Time Notifications",
    description:
      "Get instant notifications on Slack, email, or SMS the moment a new lead comes in.",
    gradient: "from-purple-400/20 to-pink-400/20",
    iconBg: "bg-purple-400/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="px-6 py-28 md:py-36 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#3B82F6] mb-4 ${visible ? "animate-pop-in" : "opacity-0"}`}>
            What We Do
          </span>
          <h2 className={`font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-[#0f172a] ${visible ? "animate-reveal-up animate-delay-100" : "opacity-0"}`}>
            Everything you need to
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">convert more leads</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative rounded-3xl bg-white p-8 sm:p-10 border border-[#e2e8f0] hover:border-transparent hover:shadow-2xl hover:shadow-[#3B82F6]/10 transition-all duration-500 hover:-translate-y-1 cursor-default ${
                visible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 2) * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${service.iconBg} transition-all duration-500`}>
                    <service.icon size={26} />
                  </div>
                  <ArrowUpRight size={20} className="text-[#e2e8f0] group-hover:text-[#3B82F6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0f172a] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#64748b] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
