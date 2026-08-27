"use client";

import React from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import { BRANCHES, Branch } from "@/data/branches";

interface BranchTabsProps {
  activeBranchId: string;
  onSelectBranch: (branchId: string) => void;
  branches?: Branch[];
  className?: string;
}

export const BranchTabs: React.FC<BranchTabsProps> = ({
  activeBranchId,
  onSelectBranch,
  branches = BRANCHES,
  className = ""
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="text-center mb-3 sm:mb-6">
        <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#1A1D20] px-3 py-0.5 rounded-full border border-[#C5A059]/30 inline-block mb-1">
          Our Locations
        </span>
        <h3 className="text-lg sm:text-3xl font-bold font-display text-[#FAF8F5]">
          Choose Your Preferred Dr Pilates Branch
        </h3>
        <p className="text-xs sm:text-sm text-[#949BA6] mt-0.5 max-w-lg mx-auto">
          Switch tabs below to view studio specs, opening hours, directions, and direct contacts
        </p>
      </div>

      {/* Compact Tabs Container */}
      <div className="inline-flex p-1 bg-[#1A1D20] rounded-full border border-[#282C32] shadow-inner max-w-full overflow-x-auto">
        {branches.map((branch) => {
          const isActive = activeBranchId === branch.id;
          return (
            <button
              key={branch.id}
              onClick={() => onSelectBranch(branch.id)}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-3 rounded-full text-[11px] sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap focus:outline-none ${
                isActive
                  ? "bg-[#C5A059] text-white shadow-md scale-[1.02] border border-[#C5A059]"
                  : "text-[#FAF8F5]/80 hover:text-[#C5A059] hover:bg-[#22262C]"
              }`}
              role="tab"
              aria-selected={isActive}
            >
              <MapPin
                className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors shrink-0 ${
                  isActive ? "text-white" : "text-[#C5A059]"
                }`}
              />
              <span>{branch.shortName}</span>
              {isActive && (
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white ml-0.5 shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
