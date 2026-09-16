"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Calendar, Phone, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Branches", href: "/branches" },
  { label: "Gallery", href: "/gallery" },
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
              src="/logo-dark.png"
              alt="Dr Pilates Bengaluru"
              width={200}
              height={60}
              priority
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#EEEDE8] px-3 py-1.5 rounded-full border border-[#E5E0D8] shadow-xs">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                const isServicesActive = pathname.startsWith("/services");
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 inline-flex items-center gap-1 ${
                        isServicesActive
                          ? "bg-[#111111] text-white shadow-xs"
                          : "text-[#4A4641] hover:text-[#111111] hover:bg-[#FAF8F5]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Services Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-56 p-2 bg-[#FFFFFF] border border-[#E5E0D8] rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#B91C1C]">
                        Our Treatments
                      </div>
                      <Link
                        href="/services/reformer-pilates"
                        className="block px-3 py-2 text-xs font-semibold text-[#111111] hover:bg-[#FAF8F5] hover:text-[#B91C1C] rounded-xl transition-colors"
                      >
                        Reformer Pilates
                      </Link>
                      <Link
                        href="/services/physiotherapy"
                        className="block px-3 py-2 text-xs font-semibold text-[#111111] hover:bg-[#FAF8F5] hover:text-[#B91C1C] rounded-xl transition-colors"
                      >
                        Physiotherapy Treatment
                      </Link>
                      <Link
                        href="/services/dry-needling"
                        className="block px-3 py-2 text-xs font-semibold text-[#111111] hover:bg-[#FAF8F5] hover:text-[#B91C1C] rounded-xl transition-colors"
                      >
                        Dry Needling
                      </Link>
                      <div className="pt-1 mt-1 border-t border-[#E5E0D8]">
                        <Link
                          href="/services"
                          className="block px-3 py-1.5 text-[11px] font-medium text-[#7A756D] hover:text-[#111111] rounded-lg transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

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
