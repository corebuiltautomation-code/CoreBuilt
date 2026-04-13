"use client";

import { Zap, Mail, Database, Bell } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Zap,
    title: "Instant Lead Response",
    description:
      "Every enquiry gets an automatic reply within 10 seconds. Day or night, weekday or weekend.",
  },
  {
    icon: Mail,
    title: "Smart Follow-Up Sequences",
    description:
      "Automated email sequences that follow up with leads until they respond or book a call.",
  },
  {
    icon: Database,
    title: "CRM Setup",
    description:
      "All your leads organised in one place. Track status from new enquiry to closed deal — no more spreadsheets.",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description:
      "Get instant notifications on Slack, email, or SMS the moment a new lead comes in.",
  },
];

export default function Services() {
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
    <section id="services" className="px-6 py-24 md:py-32 bg-[#f8fafc]">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className={`inline-block text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-4 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            What We Do
          </span>
          <h2 className={`font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[#0f172a] ${visible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
            What we build for you
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group rounded-2xl border border-[#e2e8f0] bg-white p-8 hover:border-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/5 transition-all duration-300 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#0f172a] mb-3">
                {service.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
