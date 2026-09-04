"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { BRANCHES, generateWhatsAppUrl } from "@/data/branches";

export const MobileStickyCTA: React.FC = () => {
  const mainBranch = BRANCHES[0];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-2 bg-[#FAF8F5]/98 backdrop-blur-xl border-t border-[#E5E0D8] shadow-2xl">
      <div className="grid grid-cols-3 gap-1.5 max-w-sm mx-auto">
        <a
          href={`tel:${mainBranch.rawPhone}`}
          className="flex items-center justify-center gap-1.5 py-2 px-2 bg-[#111111] text-[#FAF8F5] rounded-xl text-[11px] font-semibold hover:bg-[#262524] active:scale-95 transition-all shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#B59C7D] shrink-0" />
          <span>Call</span>
        </a>

        <a
          href={generateWhatsAppUrl(mainBranch.id)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2 bg-[#25D366] text-white rounded-xl text-[11px] font-semibold hover:opacity-90 active:scale-95 transition-all shadow-xs"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/appointment?branch=kalyan-nagar"
          className="flex items-center justify-center gap-1.5 py-2 px-2 bg-[#B59C7D] text-white rounded-xl text-[11px] font-semibold hover:bg-[#9E8364] active:scale-95 transition-all shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span>Book Now</span>
        </Link>
      </div>
    </div>
  );
};
