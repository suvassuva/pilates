"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Calendar, Phone, MapPin } from "lucide-react";
import { Button } from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Studios", href: "/branches" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FAF8F5]/98 text-[#111111] backdrop-blur-xl animate-in fade-in duration-200">
      {/* Top Header inside Drawer */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#E5E0D8]">
        <Link href="/" onClick={onClose} className="flex items-center">
          <Image
            src="/logo-dark.png"
            alt="Dr Pilates"
            width={160}
            height={48}
            priority
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </Link>

        <button
          onClick={onClose}
          className="p-1.5 rounded-full text-[#111111] hover:bg-[#EEEDE8] focus:outline-none cursor-pointer"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 text-[#B59C7D]" />
        </button>
      </div>

      {/* Compact Navigation Links */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
        {navLinks.map((link) => {
          const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                isActive
                  ? "bg-[#111111] text-white font-semibold shadow-xs"
                  : "text-[#3A3A3A] hover:bg-[#EEEDE8] hover:text-[#111111]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Compact Drawer Footer Actions */}
      <div className="p-4 border-t border-[#E5E0D8] bg-[#EEEDE8] space-y-2">
        <Button
          href="/appointment?branch=kalyan-nagar"
          variant="gold"
          size="sm"
          fullWidth
          icon={<Calendar className="w-4 h-4" />}
          onClick={onClose}
        >
          Book Appointment
        </Button>

        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:+919481003827"
              className="flex flex-col items-center justify-center py-2 px-2 bg-[#FAF8F5] rounded-xl text-[11px] font-semibold text-[#111111] border border-[#E5E0D8] hover:bg-[#E2DFD7] text-center transition-colors"
            >
              <div className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#B59C7D] shrink-0" />
                <span>Kalyan Nagar</span>
              </div>
              <span className="text-[10px] text-[#8E7557] font-bold mt-0.5">+91 94810 03827</span>
            </a>
            <a
              href="tel:+919481003827"
              className="flex flex-col items-center justify-center py-2 px-2 bg-[#FAF8F5] rounded-xl text-[11px] font-semibold text-[#111111] border border-[#E5E0D8] hover:bg-[#E2DFD7] text-center transition-colors"
            >
              <div className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#B59C7D] shrink-0" />
                <span>Kothanur, Hennur Rd</span>
              </div>
              <span className="text-[10px] text-[#8E7557] font-bold mt-0.5">+91 94810 03827</span>
            </a>
          </div>
        </div>

        <div className="pt-1 text-center text-[10px] text-[#7A756D] flex items-center justify-center gap-1">
          <MapPin className="w-3 h-3 text-[#B59C7D]" />
          <span>Kalyan Nagar &amp; Kothanur, Hennur Rd • Bengaluru</span>
        </div>
      </div>
    </div>
  );
};
