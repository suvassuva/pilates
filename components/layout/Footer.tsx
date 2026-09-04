import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { BRANCHES, generateWhatsAppUrl } from "@/data/branches";

export const Footer: React.FC = () => {
  const mainBranch = BRANCHES[0];

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
                alt="Dr Pilates Studio Bengaluru"
                width={220}
                height={66}
                className="h-11 sm:h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-[#A39E96] text-xs sm:text-sm leading-relaxed max-w-sm">
              Bengaluru's premier Reformer Pilates, EMS Training, Physiotherapy, and Personal Training studio. Dedicated to clinical precision, core strength, joint safety, and personal transformation.
            </p>

            <div className="flex items-center gap-2 sm:gap-3 pt-1">
              <div className="flex items-center text-[#B59C7D] text-xs sm:text-sm">
                {"★".repeat(5)}
              </div>
              <span className="text-[10px] sm:text-xs text-[#FAF8F5] font-semibold">
                4.9 ★ Rating (129+ Google Reviews)
              </span>
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
                { label: "Branches", href: "/branches" },
                { label: "Trainers", href: "/trainers" },
                { label: "Gallery", href: "/gallery" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" }
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
                { label: "Reformer Pilates", href: "/services/reformer-pilates" },
                { label: "EMS Training", href: "/services/ems-training" },
                { label: "Physiotherapy", href: "/services/physiotherapy" },
                { label: "Personal Training", href: "/services/personal-training" }
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

          {/* Col 4: Studio Locations & Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#B59C7D] mb-3 sm:mb-4">
              Visit Our Studios
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#A39E96]">
              {/* Kalyan Nagar */}
              <div className="space-y-1 pb-2 border-b border-white/10">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B59C7D] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#FAF8F5]">Kalyan Nagar:</strong> Y4 Heights (Above Starbucks), HRBR Layout
                  </span>
                </div>
                <div className="flex items-center gap-2 pl-5 sm:pl-6 text-[11px] sm:text-xs">
                  <Phone className="w-3 h-3 text-[#B59C7D] shrink-0" />
                  <a href="tel:+918892236442" className="hover:text-[#B59C7D]">
                    088922 36442
                  </a>
                </div>
              </div>

              {/* Hennur */}
              <div className="space-y-1 pb-2 border-b border-white/10">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B59C7D] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#FAF8F5]">Hennur:</strong> ANR Arcade, 2nd Flr, Doddagubbi Main Rd
                  </span>
                </div>
                <div className="flex items-center gap-2 pl-5 sm:pl-6 text-[11px] sm:text-xs">
                  <Phone className="w-3 h-3 text-[#B59C7D] shrink-0" />
                  <a href="tel:+919481003827" className="hover:text-[#B59C7D]">
                    094810 03827
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-0.5">
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] shrink-0" />
                <a
                  href={generateWhatsAppUrl("kalyan-nagar")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B59C7D]"
                >
                  WhatsApp Booking Desk
                </a>
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
