"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
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
      <div ref={ref} className="mx-auto max-w-2xl text-center">
        <div className={visible ? "animate-fade-in-up" : "opacity-0"}>
          <ShieldCheck size={48} className="text-[#3B82F6] mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Our Guarantee
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/50 leading-relaxed max-w-lg mx-auto">
            If it doesn&apos;t work in 2 weeks, you don&apos;t have to pay anything.
          </p>
          <p className="mt-3 text-sm text-white/30">
            No risk. No long contracts. Just results.
          </p>
        </div>
      </div>
    </section>
  );
}
