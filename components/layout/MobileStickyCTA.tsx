"use client";

import React from "react";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { BRANCHES } from "@/data/branches";

export const MobileStickyCTA: React.FC = () => {
  const mainBranch = BRANCHES[0];

  return (
    <aside aria-label="Mobile quick actions" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-2.5 bg-[#FAF8F5]/98 backdrop-blur-xl border-t border-[#E5E0D8] shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
        <a
          href={`tel:${mainBranch.rawPhone}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#111111] text-[#FAF8F5] rounded-xl text-xs font-semibold hover:bg-[#262524] active:scale-95 transition-all shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#B59C7D] shrink-0" />
          <span>Call Us</span>
        </a>

        <Link
          href="/appointment?branch=kalyan-nagar"
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#B59C7D] text-white rounded-xl text-xs font-semibold hover:bg-[#9E8364] active:scale-95 transition-all shadow-xs"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span>Book Now</span>
        </Link>
      </div>
    </aside>
  );
};
