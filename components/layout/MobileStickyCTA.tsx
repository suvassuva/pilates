"use client";

import React from "react";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { BRANCHES } from "@/data/branches";

export const MobileStickyCTA: React.FC = () => {
  const mainBranch = BRANCHES[0];

  return (
    <aside aria-label="Mobile quick actions" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-2.5 bg-[#F7F3ED] border-t border-[#DDD3C8]">
      <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
        <a
          href={`tel:${mainBranch.rawPhone}`}
          className="min-h-[46px] flex items-center justify-center gap-2 px-4 py-3 bg-[#F7F3ED] text-[#282622] border border-[#282622] rounded-[6px] text-xs sm:text-sm font-medium font-body hover:bg-[#E8DED1] active:scale-[0.99] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#282622] shrink-0" />
          <span>Call Us</span>
        </a>

        <Link
          href="/appointment?branch=kalyan-nagar"
          className="min-h-[46px] flex items-center justify-center gap-2 px-4 py-3 bg-[#5C604E] text-[#FFFFFF] rounded-[6px] text-xs sm:text-sm font-medium font-body hover:bg-[#4A4E3E] active:scale-[0.99] transition-colors shadow-xs"
        >
          <Calendar className="w-4 h-4 text-white shrink-0" />
          <span>Book Now</span>
        </Link>
      </div>
    </aside>
  );
};
