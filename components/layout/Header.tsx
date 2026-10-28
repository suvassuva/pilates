"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Calendar } from "lucide-react";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Studios", href: "/branches" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" }
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
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isScrolled
            ? "bg-[#F7F3ED] py-2.5 sm:py-3 border-b border-[#DDD3C8]"
            : "bg-[#F7F3ED] py-3 sm:py-4 border-b border-[#DDD3C8]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Logo with dark charcoal container for crystal-clear contrast */}
          <Link
            href="/"
            className="group flex items-center px-3 sm:px-3.5 py-1.5 rounded-[8px] bg-[#282622] hover:bg-[#1E1C18] transition-colors"
          >
            <Image
              src="/logo.png"
              alt="Dr Pilates Bengaluru"
              width={200}
              height={60}
              priority
              className="h-7 sm:h-8 w-auto object-contain group-hover:opacity-95 transition-opacity"
            />
          </Link>

          {/* Desktop Nav (Clean floating editorial text links) */}
          <nav className="hidden xl:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium font-body transition-colors duration-150 relative py-1 tracking-normal ${
                    isActive
                      ? "text-[#5C604E] font-semibold"
                      : "text-[#282622]/85 hover:text-[#5C604E]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5C604E] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 lg:gap-3">
            <Button
              href="/appointment?branch=kalyan-nagar"
              variant="primary"
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
              className="p-2 rounded-lg text-[#282622] bg-[#E8DED1] hover:bg-[#DDD3C8] border border-[#DDD3C8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#282622] cursor-pointer"
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
