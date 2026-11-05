"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Calendar } from "lucide-react";
import { Button } from "../ui/Button";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? "bg-[#F7F3ED] py-2.5 sm:py-3 border-b border-[#DDD3C8]"
          : "bg-[#F7F3ED] py-3 sm:py-4 border-b border-[#DDD3C8]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Mobile-only Brand Logo in #68645C Box (Hidden on desktop screens) */}
        <Link
          href="/"
          className="flex items-center xl:hidden focus:outline-none py-0.5"
          aria-label="Dr. Pilates Home"
        >
          <div className="bg-[#68645C] px-2.5 py-1 rounded-[6px] flex items-center justify-center shadow-xs">
            <Image
              src="/logo-white.png"
              alt="Dr. Pilates"
              width={100}
              height={28}
              priority
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav (Clean floating editorial text links - hidden on mobile) */}
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
      </div>
    </header>
  );
};
