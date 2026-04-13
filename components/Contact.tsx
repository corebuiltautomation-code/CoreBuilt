"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Contact() {
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
    <section id="contact" className="px-6 py-28 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3B82F6]/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative mx-auto max-w-2xl">
        <div className="text-center mb-14">
          <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#3B82F6] mb-4 ${visible ? "animate-pop-in" : "opacity-0"}`}>
            Get In Touch
          </span>
          <h2 className={`font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-[#0f172a] ${visible ? "animate-reveal-up animate-delay-100" : "opacity-0"}`}>
            Ready to stop
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">losing leads?</span>
          </h2>
          <p className={`mt-5 text-lg text-[#64748b] ${visible ? "animate-reveal-up animate-delay-200" : "opacity-0"}`}>
            Send us a message and we&apos;ll get back to you within 24 hours
            with a free automation audit.
          </p>
        </div>

        <div className={`gradient-border rounded-3xl ${visible ? "animate-reveal-up animate-delay-300" : "opacity-0"}`}>
          <div className="rounded-3xl bg-white p-8 sm:p-12">
            <iframe
              data-tally-src="https://tally.so/embed/oboRr5?alignLeft=1&hideTitle=1&transparentBackground=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              title="CoreBuilt Contact Form"
            />
          </div>
        </div>

        <div className={`mt-8 text-center ${visible ? "animate-reveal-up animate-delay-500" : "opacity-0"}`}>
          <p className="text-sm text-[#64748b] mb-4">
            We respond within 24 hours. No spam, ever.
          </p>
          <a
            href="mailto:alex@corebuilt.services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#3B82F6] hover:text-[#2563EB] transition-colors group"
          >
            Or email us directly at alex@corebuilt.services
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
