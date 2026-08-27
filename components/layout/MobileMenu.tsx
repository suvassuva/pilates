"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Calendar, Phone, MessageSquare, MapPin } from "lucide-react";
import { Button } from "../ui/Button";
import { BRANCHES, generateWhatsAppUrl } from "@/data/branches";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Branches", href: "/branches" },
  { label: "Trainers", href: "/trainers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  const defaultBranch = BRANCHES[0];

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#0D0F12]/98 text-[#FAF8F5] backdrop-blur-xl animate-in fade-in duration-200">
      {/* Top Header inside Drawer */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#C5A059]/20">
        <Link href="/" onClick={onClose} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Dr Pilates"
            width={160}
            height={48}
            priority
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </Link>

        <button
          onClick={onClose}
          className="p-1.5 rounded-full text-[#FAF8F5] hover:bg-[#1A1D22] focus:outline-none cursor-pointer"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 text-[#C5A059]" />
        </button>
      </div>

      {/* Compact Navigation Links */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                isActive
                  ? "bg-[#C5A059] text-white font-semibold shadow-xs"
                  : "text-[#FAF8F5]/90 hover:bg-[#1A1D22] hover:text-[#C5A059]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Compact Drawer Footer Actions */}
      <div className="p-4 border-t border-[#C5A059]/20 bg-[#14171C] space-y-2">
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

        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${defaultBranch.rawPhone}`}
            className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#1A1D22] rounded-lg text-xs font-semibold text-[#FAF8F5] border border-[#C5A059]/20 hover:bg-[#22262C]"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            Call Studio
          </a>
          <a
            href={generateWhatsAppUrl("kalyan-nagar")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#25D366] rounded-lg text-xs font-semibold text-white shadow-xs hover:opacity-90"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp
          </a>
        </div>

        <div className="pt-1 text-center text-[10px] text-[#949BA6] flex items-center justify-center gap-1">
          <MapPin className="w-3 h-3 text-[#C5A059]" />
          <span>Kalyan Nagar & Doddagubbi • Bengaluru</span>
        </div>
      </div>
    </div>
  );
};
