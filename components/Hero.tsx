"use client";

import { ArrowRight, ChevronDown, Clock, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F1C]">
      {/* Animated background */}
      <div className="absolute inset-0 -z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#3B82F6]/15 rounded-full blur-[150px] animate-orb-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[130px] animate-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3B82F6]/5 rounded-full blur-[80px] animate-glow-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24 pb-20">
        {/* Badge */}
        <div className="animate-reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2.5 text-xs font-medium text-white/70 mb-10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Automation systems for small businesses
          </span>
        </div>

        <h1 className="animate-reveal-up animate-delay-200 font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white">
          Stop Losing Leads.
          <br />
          <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#8B5CF6] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
            Start Converting Them.
          </span>
        </h1>

        <p className="animate-reveal-up animate-delay-400 mt-8 text-lg sm:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed">
          We build automation systems that respond to your leads in under 10
          seconds, day or night. So you never miss another opportunity.
        </p>

        <div className="animate-reveal-up animate-delay-500 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="btn-shimmer group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] px-10 py-5 text-base font-semibold text-white hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 shadow-2xl shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50 hover:scale-[1.02]"
          >
            Send Us a Message
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-10 py-5 text-base font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            See How It Works
            <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Guarantee line */}
        <p className="animate-reveal-up animate-delay-600 mt-5 inline-flex items-center gap-2 text-sm text-white/35">
          <ShieldCheck size={14} className="text-emerald-400/60" />
          If it doesn&apos;t work in 2 weeks, you don&apos;t pay anything.
        </p>

        {/* Stat badges */}
        <div className="animate-reveal-up animate-delay-700 mt-14 flex flex-wrap items-center justify-center gap-4">
          <div className="inline-flex items-center gap-3 rounded-2xl glass-card px-6 py-4 hover:border-white/15 transition-all duration-300">
            <Clock size={18} className="text-[#3B82F6]" />
            <span className="text-sm text-white/50">
              Average response time: <span className="font-bold text-white">under 10 seconds</span>
            </span>
          </div>
          <div className="inline-flex items-center gap-3 rounded-2xl glass-card px-6 py-4 hover:border-white/15 transition-all duration-300">
            <span className="text-sm text-white/50">
              Setup in <span className="font-bold text-white">48 hours</span>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-1000">
        <div className="w-6 h-10 rounded-full border-2 border-white/15 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-white/30 animate-float" style={{ animationDuration: "2s" }} />
        </div>
      </div>
    </section>
  );
}
