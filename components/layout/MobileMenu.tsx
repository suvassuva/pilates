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
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#F7F3ED] text-[#282622] animate-in fade-in duration-200">
      {/* Top Header inside Drawer */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#DDD3C8] bg-[#E8DED1]/60">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center px-3 py-1.5 rounded-[8px] bg-[#282622] hover:bg-[#1E1C18] transition-colors"
        >
          <Image
            src="/logo.png"
            alt="Dr Pilates"
            width={160}
            height={48}
            priority
            className="h-7 w-auto object-contain"
          />
        </Link>

        <button
          onClick={onClose}
          className="p-2 rounded-lg text-[#282622] bg-[#FFFFFF] hover:bg-[#E8DED1] border border-[#DDD3C8] focus:outline-none focus:ring-2 focus:ring-[#282622] cursor-pointer transition-colors"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 text-[#282622]" />
        </button>
      </div>

      {/* Navigation Links (Clean editorial text) */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
        {navLinks.map((link) => {
          const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`block py-2.5 text-base font-medium font-body transition-colors ${
                isActive
                  ? "text-[#5C604E] font-semibold border-l-2 border-[#5C604E] pl-3"
                  : "text-[#282622]/85 hover:text-[#5C604E] pl-3.5"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Drawer Footer Actions */}
      <div className="p-4 border-t border-[#DDD3C8] bg-[#E8DED1]/40 space-y-3">
        <Button
          href="/appointment?branch=kalyan-nagar"
          variant="primary"
          size="md"
          fullWidth
          icon={<Calendar className="w-4 h-4" />}
          onClick={onClose}
        >
          Book Appointment
        </Button>

        <div className="pt-1 text-center text-xs text-[#6E685E] font-body flex items-center justify-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#C5A990]" />
          <span>Kalyan Nagar &amp; Kothanur, Hennur Rd • Bengaluru</span>
        </div>
      </div>
    </div>
  );
};
