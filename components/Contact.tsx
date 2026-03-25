"use client";

import { useEffect, useRef, useState } from "react";

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
    <section id="contact" className="px-6 py-24 md:py-32 bg-[#f8fafc]">
      <div ref={ref} className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <span className={`inline-block text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-4 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            Get In Touch
          </span>
          <h2 className={`font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[#0f172a] ${visible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
            Ready to stop losing leads?
          </h2>
          <p className={`mt-4 text-[#64748b] ${visible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
            Send us a message and we&apos;ll get back to you within 24 hours
            with a free automation audit.
          </p>
        </div>

        <div className={`rounded-2xl border border-[#e2e8f0] bg-white p-8 sm:p-10 ${visible ? "animate-fade-in-up animate-delay-300" : "opacity-0"}`}>
          <iframe
            data-tally-src="https://tally.so/embed/oboRr5?alignLeft=1&hideTitle=1&transparentBackground=1"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder="0"
            title="CoreBuilt Contact Form"
          />
        </div>

        <p className={`mt-6 text-center text-sm text-[#64748b] ${visible ? "animate-fade-in-up animate-delay-400" : "opacity-0"}`}>
          We respond within 24 hours. No spam, ever.
        </p>
      </div>
    </section>
  );
}
