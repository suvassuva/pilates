"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Calendar, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";

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

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-xl py-2.5 sm:py-3 shadow-xs border-b border-[#E5E0D8]"
            : "bg-[#FAF8F5]/90 backdrop-blur-md py-3 sm:py-4 border-b border-[#E5E0D8]/70 shadow-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Logo */}
          <Link href="/" className="group flex items-center py-0.5">
            <Image
              src="/logo.png"
              alt="Dr Pilates Studio Bengaluru"
              width={200}
              height={60}
              priority
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#EEEDE8] px-3 py-1.5 rounded-full border border-[#E5E0D8] shadow-xs">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#111111] text-white shadow-xs"
                      : "text-[#4A4641] hover:text-[#111111] hover:bg-[#FAF8F5]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+918892236442"
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#8E7557] px-3 py-2 rounded-full hover:bg-[#EEEDE8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B59C7D]" />
              <span>088922 36442</span>
            </a>

            <Button
              href="/appointment?branch=kalyan-nagar"
              variant="gold"
              size="sm"
              icon={<Calendar className="w-4 h-4" />}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-full text-[#111111] bg-[#EEEDE8] border border-[#E5E0D8] hover:bg-[#B59C7D] hover:text-white transition-colors focus:outline-none cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
