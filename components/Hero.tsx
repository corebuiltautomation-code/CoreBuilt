"use client";

import { ArrowRight, ChevronDown, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F1C]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-24 pb-20">
        {/* Badge */}
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-white/70 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Automation systems for small businesses
          </span>
        </div>

        <h1 className="animate-fade-in-up animate-delay-100 font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
          Stop Losing Leads.
          <br />
          <span className="text-[#3B82F6]">Start Converting Them.</span>
        </h1>

        <p className="animate-fade-in-up animate-delay-200 mt-6 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
          We build automation systems that respond to your leads in under 10
          seconds — day or night. So you never miss another opportunity.
        </p>

        <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#3B82F6] px-8 py-4 text-base font-semibold text-white hover:bg-[#2563EB] transition-all shadow-lg shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40"
          >
            Send Us a Message
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/15 px-8 py-4 text-base font-semibold text-white hover:bg-white/5 transition-all"
          >
            See How It Works
            <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Guarantee */}
        <p className="animate-fade-in-up animate-delay-400 mt-5 text-sm text-white/40">
          If it doesn&apos;t work in 2 weeks, you don&apos;t pay anything.
        </p>

        {/* Stat badge */}
        <div className="animate-fade-in-up animate-delay-400 mt-10 inline-flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-5 py-3">
          <Clock size={18} className="text-[#3B82F6]" />
          <span className="text-sm text-white/60">
            Average response time: <span className="font-semibold text-white">&lt; 10 seconds</span>
          </span>
        </div>
      </div>
    </section>
  );
}
