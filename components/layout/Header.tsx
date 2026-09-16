"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Calendar, Phone, ChevronDown, MessageSquare } from "lucide-react";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";
import { generateWhatsAppUrl } from "@/data/branches";

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
  const [isCallMenuOpen, setIsCallMenuOpen] = useState(false);
  const [isMobileCallOpen, setIsMobileCallOpen] = useState(false);
  const callMenuRef = useRef<HTMLDivElement>(null);
  const mobileCallMenuRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (callMenuRef.current && !callMenuRef.current.contains(event.target as Node)) {
        setIsCallMenuOpen(false);
      }
      if (mobileCallMenuRef.current && !mobileCallMenuRef.current.contains(event.target as Node)) {
        setIsMobileCallOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
          <div className="hidden sm:flex items-center gap-2.5 lg:gap-3">
            {/* 2-Branch Call & WhatsApp Dropdown */}
            <div className="relative hidden md:block group" ref={callMenuRef}>
              <button
                type="button"
                onClick={() => setIsCallMenuOpen((prev) => !prev)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#EEEDE8] hover:bg-[#FAF8F5] text-xs font-semibold text-[#111111] border border-[#E5E0D8] shadow-2xs hover:border-[#B59C7D]/50 transition-all cursor-pointer"
                aria-expanded={isCallMenuOpen}
                aria-haspopup="true"
              >
                <Phone className="w-3.5 h-3.5 text-[#B59C7D]" />
                <span>Call / WhatsApp</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#7A756D] transition-transform duration-200 group-hover:rotate-180 ${
                    isCallMenuOpen ? "rotate-180 text-[#111111]" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu (opens on hover or click) */}
              <div
                className={`absolute top-full right-0 mt-2 w-80 bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#E5E0D8] p-2.5 z-50 transition-all duration-200 ${
                  isCallMenuOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                }`}
              >
                <div className="px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-widest text-[#8E7557] border-b border-[#E5E0D8]/60 flex items-center justify-between">
                  <span>Call or WhatsApp Studio</span>
                  <span className="text-[9px] font-normal text-[#7A756D]">2 Branches</span>
                </div>

                <div className="p-1 space-y-1.5 mt-1">
                  {/* Branch 1: Kalyan Nagar */}
                  <div className="p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-all border border-[#E5E0D8]/60 bg-[#FAF8F5]/40">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#111111]">
                            Kalyan Nagar
                          </span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#EEEDE8] text-[#8E7557] font-semibold">
                            Flagship
                          </span>
                        </div>
                        <span className="text-xs font-bold text-[#111111] block mt-0.5 tracking-wide">
                          088922 36442
                        </span>
                        <span className="text-[10px] text-[#7A756D] block">
                          Above Starbucks, HRBR Layout
                        </span>
                      </div>

                      {/* Action buttons: Call & WhatsApp */}
                      <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                        <a
                          href="tel:+918892236442"
                          onClick={() => setIsCallMenuOpen(false)}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#EEEDE8] hover:bg-[#111111] text-[#111111] hover:text-white transition-all text-[11px] font-semibold group/btn"
                          title="Call Kalyan Nagar (088922 36442)"
                        >
                          <Phone className="w-3 h-3 text-[#B59C7D] group-hover/btn:text-white transition-colors" />
                          <span>Call</span>
                        </a>

                        <a
                          href={generateWhatsAppUrl("kalyan-nagar", "Hi Dr Pilates Kalyan Nagar, I would like to enquire about appointments and sessions.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsCallMenuOpen(false)}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366] text-[#1E7E34] hover:text-white transition-all text-[11px] font-semibold group/btn"
                          title="WhatsApp Kalyan Nagar"
                        >
                          <MessageSquare className="w-3 h-3 text-[#25D366] group-hover/btn:text-white transition-colors" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Branch 2: Kothanur */}
                  <div className="p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-all border border-[#E5E0D8]/60 bg-[#FAF8F5]/40">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#111111]">
                            Kothanur
                          </span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#EEEDE8] text-[#8E7557] font-semibold">
                            Now Open
                          </span>
                        </div>
                        <span className="text-xs font-bold text-[#111111] block mt-0.5 tracking-wide">
                          094810 03827
                        </span>
                        <span className="text-[10px] text-[#7A756D] block">
                          ANR Arcade, Doddagubbi Main Rd
                        </span>
                      </div>

                      {/* Action buttons: Call & WhatsApp */}
                      <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                        <a
                          href="tel:+919481003827"
                          onClick={() => setIsCallMenuOpen(false)}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#EEEDE8] hover:bg-[#111111] text-[#111111] hover:text-white transition-all text-[11px] font-semibold group/btn"
                          title="Call Kothanur (094810 03827)"
                        >
                          <Phone className="w-3 h-3 text-[#B59C7D] group-hover/btn:text-white transition-colors" />
                          <span>Call</span>
                        </a>

                        <a
                          href={generateWhatsAppUrl("kothanur", "Hi Dr Pilates Kothanur, I would like to enquire about appointments and sessions.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsCallMenuOpen(false)}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366] text-[#1E7E34] hover:text-white transition-all text-[11px] font-semibold group/btn"
                          title="WhatsApp Kothanur"
                        >
                          <MessageSquare className="w-3 h-3 text-[#25D366] group-hover/btn:text-white transition-colors" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button
              href="/appointment?branch=kalyan-nagar"
              variant="gold"
              size="sm"
              icon={<Calendar className="w-4 h-4" />}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Hamburger Menu Button & Mobile Call/WhatsApp Trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            {/* Mobile 2-Branch Call/WhatsApp Dropdown Trigger */}
            <div className="relative md:hidden" ref={mobileCallMenuRef}>
              <button
                onClick={() => setIsMobileCallOpen((prev) => !prev)}
                className="p-2 rounded-full text-[#111111] bg-[#EEEDE8] border border-[#E5E0D8] hover:bg-[#FAF8F5] transition-colors focus:outline-none cursor-pointer"
                aria-label="Call or WhatsApp Dr Pilates Branch"
                title="Call / WhatsApp"
              >
                <Phone className="w-4 h-4 text-[#B59C7D]" />
              </button>

              {isMobileCallOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#E5E0D8] p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-[#8E7557] border-b border-[#E5E0D8]/60 mb-1.5">
                    Select Branch to Call or WhatsApp
                  </div>

                  {/* Kalyan Nagar */}
                  <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8]/60 mb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-[#111111]">
                          Kalyan Nagar
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#EEEDE8] text-[#8E7557] font-semibold">
                          Flagship
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-[#8E7557]">
                        088922 36442
                      </span>
                    </div>
                    <span className="text-[9px] text-[#7A756D] block mb-2">Above Starbucks, HRBR Layout</span>

                    <div className="grid grid-cols-2 gap-1.5">
                      <a
                        href="tel:+918892236442"
                        onClick={() => setIsMobileCallOpen(false)}
                        className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-[#EEEDE8] text-xs font-semibold text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                      >
                        <Phone className="w-3 h-3 text-[#B59C7D]" />
                        <span>Call</span>
                      </a>
                      <a
                        href={generateWhatsAppUrl("kalyan-nagar", "Hi Dr Pilates Kalyan Nagar, I would like to enquire about appointments and sessions.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileCallOpen(false)}
                        className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-[#25D366]/15 text-xs font-semibold text-[#1E7E34] hover:bg-[#25D366] hover:text-white transition-colors"
                      >
                        <MessageSquare className="w-3 h-3 text-[#25D366]" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Kothanur */}
                  <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8]/60">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-[#111111]">
                          Kothanur
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#EEEDE8] text-[#8E7557] font-semibold">
                          Now Open
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-[#8E7557]">
                        094810 03827
                      </span>
                    </div>
                    <span className="text-[9px] text-[#7A756D] block mb-2">ANR Arcade, Doddagubbi Main Rd</span>

                    <div className="grid grid-cols-2 gap-1.5">
                      <a
                        href="tel:+919481003827"
                        onClick={() => setIsMobileCallOpen(false)}
                        className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-[#EEEDE8] text-xs font-semibold text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                      >
                        <Phone className="w-3 h-3 text-[#B59C7D]" />
                        <span>Call</span>
                      </a>
                      <a
                        href={generateWhatsAppUrl("kothanur", "Hi Dr Pilates Kothanur, I would like to enquire about appointments and sessions.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileCallOpen(false)}
                        className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-[#25D366]/15 text-xs font-semibold text-[#1E7E34] hover:bg-[#25D366] hover:text-white transition-colors"
                      >
                        <MessageSquare className="w-3 h-3 text-[#25D366]" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
