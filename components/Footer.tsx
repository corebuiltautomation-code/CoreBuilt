import { Mail } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1C] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
              <svg width="28" height="28" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="10" fill="#3B82F6"/>
                <rect x="8" y="8" width="12" height="12" rx="3" fill="#FFFFFF" opacity="0.9"/>
                <rect x="24" y="8" width="12" height="12" rx="3" fill="#FFFFFF" opacity="0.5"/>
                <rect x="8" y="24" width="12" height="12" rx="3" fill="#FFFFFF" opacity="0.5"/>
                <rect x="24" y="24" width="12" height="12" rx="3" fill="#FFFFFF" opacity="0.9"/>
                <line x1="20" y1="14" x2="24" y2="14" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="14" y1="20" x2="14" y2="24" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="30" y1="20" x2="30" y2="24" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="20" y1="30" x2="24" y2="30" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-white">Core</span>
              <span className="text-[#3B82F6]">Built</span>
            </a>
          </div>

          <div className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:contact@corebuilt.co.uk"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
          >
            <Mail size={14} />
            contact@corebuilt.co.uk
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center text-xs text-white/30">
          &copy; 2026 CoreBuilt. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
