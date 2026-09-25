import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

export const Footer: React.FC = () => {

  return (
    <footer className="bg-[#141312] text-[#FAF8F5] pt-10 pb-20 sm:pt-16 sm:pb-24 lg:pb-12 border-t border-[#B59C7D]/20 relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#B59C7D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10 mb-8 sm:mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Dr Pilates Bengaluru"
                width={220}
                height={66}
                className="h-11 sm:h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-[#A39E96] text-xs sm:text-sm leading-relaxed max-w-sm">
              Bengaluru&apos;s premier Reformer Pilates, EMS Training, Physiotherapy, and Personal Training. Dedicated to clinical precision, core strength, joint safety, and personal transformation.
            </p>

            <div className="flex items-center gap-2 sm:gap-3 pt-1">
              <div className="flex items-center text-[#B59C7D] text-xs sm:text-sm">
                {"★".repeat(5)}
              </div>
              <span className="text-[10px] sm:text-xs text-[#FAF8F5] font-semibold">
                4.9 ★ Rating (129+ Google Reviews)
              </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#B59C7D] mb-2.5">
                Follow Us
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/drpilatesbangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dr Pilates on Instagram"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-[#FAF8F5] hover:text-[#B59C7D] hover:border-[#B59C7D] hover:bg-[#B59C7D]/10 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/drpilatesbangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dr Pilates on Facebook"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-[#FAF8F5] hover:text-[#B59C7D] hover:border-[#B59C7D] hover:bg-[#B59C7D]/10 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@drpilatesbangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dr Pilates on YouTube"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-[#FAF8F5] hover:text-[#B59C7D] hover:border-[#B59C7D] hover:bg-[#B59C7D]/10 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/dr-pilates-bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dr Pilates on LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-[#FAF8F5] hover:text-[#B59C7D] hover:border-[#B59C7D] hover:bg-[#B59C7D]/10 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-[#B59C7D] uppercase tracking-wider mb-2 sm:mb-4">
              Navigation
            </h3>
            <ul className="space-y-1.5 sm:space-y-2.5 text-xs sm:text-sm text-[#A39E96]">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Blog", href: "/blog" },
                { label: "Studios", href: "/branches" }
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#B59C7D] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-[#B59C7D] uppercase tracking-wider mb-2 sm:mb-4">
              Services
            </h3>
            <ul className="space-y-1.5 sm:space-y-2.5 text-xs sm:text-sm text-[#A39E96]">
              {[
                { label: "Reformer Pilates", href: "/services#reformer-pilates" },
                { label: "EMS Training", href: "/services#ems-training" },
                { label: "Physiotherapy", href: "/services#physiotherapy" }
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#B59C7D] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Locations & Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#B59C7D] mb-3 sm:mb-4">
              Visit Our Studios
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#A39E96]">
              {/* Kalyan Nagar */}
              <div className="space-y-1 pb-2 border-b border-white/10">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B59C7D] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <strong className="text-[#FAF8F5] block">Kalyan Nagar:</strong>
                    <span className="text-[#A39E96]">3rd floor, Y4 Heights Building, 6th Main Rd, HRBR Layout 2nd Block, Bengaluru, Karnataka</span>
                  </div>
                </div>
              </div>

              {/* Kothanur, Hennur Road */}
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B59C7D] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <strong className="text-[#FAF8F5] block">Kothanur:</strong>
                    <span className="text-[#A39E96]">ANR Arcade, Doddagubbi Main Rd, Kothanur, Bengaluru, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 text-center text-[10px] sm:text-xs text-[#7A756D]">
          <p>© 2026 Dr Pilates. All Rights Reserved. Bengaluru, Karnataka, India.</p>
        </div>
      </div>
    </footer>
  );
};
