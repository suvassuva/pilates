"use client";

import React, { useState } from "react";
import { BRANCHES, getBranchById } from "@/data/branches";
import { BranchTabs } from "./BranchTabs";
import { BranchDetails } from "./BranchDetails";

interface BranchSelectorProps {
  defaultBranchId?: string;
  className?: string;
}

export const BranchSelector: React.FC<BranchSelectorProps> = ({
  defaultBranchId = "kalyan-nagar",
  className = ""
}) => {
  const [activeBranchId, setActiveBranchId] = useState<string>(defaultBranchId);

  const selectedBranch = getBranchById(activeBranchId);

  return (
    <section className={`w-full ${className}`}>
      {/* 2-Branch Location Tabs */}
      <BranchTabs
        activeBranchId={activeBranchId}
        onSelectBranch={(id) => setActiveBranchId(id)}
        className="mb-10"
      />

      {/* Selected Branch Active Details UI */}
      <BranchDetails branch={selectedBranch} />
    </section>
  );
};
