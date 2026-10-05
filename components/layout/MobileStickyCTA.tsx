"use client";

import React from "react";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { BRANCHES } from "@/data/branches";

export const MobileStickyCTA: React.FC = () => {
  const mainBranch = BRANCHES[0];

  return (
    <aside aria-label="Mobile quick actions" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-2.5 bg-[#111110]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
        <a
          href={`tel:${mainBranch.rawPhone}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white/5 text-white border border-white/10 rounded-xl text-xs font-semibold hover:bg-white/10 hover:text-[#962D2D] active:scale-95 transition-all shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#962D2D] shrink-0" />
          <span>Call Us</span>
        </a>

        <Link
          href="/appointment?branch=kalyan-nagar"
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#962D2D] text-white rounded-xl text-xs font-semibold hover:bg-[#7D1F1F] active:scale-95 transition-all shadow-xs"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span>Book Now</span>
        </Link>
      </div>
    </aside>
  );
};
