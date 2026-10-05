"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Calendar, MapPin } from "lucide-react";
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
  { label: "Gallery", href: "/gallery" }
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#111110]/98 text-white backdrop-blur-xl animate-in fade-in duration-200">
      {/* Top Header inside Drawer */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10 bg-[#111110]">
        <Link href="/" onClick={onClose} className="flex items-center py-1">
          <Image
            src="/logo.png"
            alt="Dr Pilates"
            width={160}
            height={48}
            priority
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </Link>

        <button
          onClick={onClose}
          className="p-1.5 rounded-full text-white bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none cursor-pointer transition-colors shadow-xs"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 text-white" />
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
                  ? "bg-[#962D2D] text-white font-semibold shadow-xs"
                  : "text-neutral-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Compact Drawer Footer Actions */}
      <div className="p-4 border-t border-white/10 bg-[#181817] space-y-2">
        <Button
          href="/appointment?branch=kalyan-nagar"
          variant="primary"
          size="sm"
          fullWidth
          icon={<Calendar className="w-4 h-4" />}
          onClick={onClose}
        >
          Book Appointment
        </Button>

        <div className="pt-1 text-center text-[10px] text-neutral-400 flex items-center justify-center gap-1">
          <MapPin className="w-3 h-3 text-[#962D2D]" />
          <span>Kalyan Nagar &amp; Kothanur, Hennur Rd • Bengaluru</span>
        </div>
      </div>
    </div>
  );
};
