"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

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
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <div className={visible ? "animate-fade-in-up" : "opacity-0"}>
          <Quote size={48} className="text-[#3B82F6]/20 mx-auto mb-8" />

          <blockquote className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl font-medium text-[#0f172a] leading-relaxed">
            &ldquo;CoreBuilt completely changed how we handle enquiries. We went from
            missing half our leads to responding instantly. It&apos;s been a game
            changer for our business.&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] font-bold text-sm">
              PA
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#0f172a]">
                Property agency owner
              </p>
              <p className="text-xs text-[#64748b]">London, UK</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
