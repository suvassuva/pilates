"use client";

import React from "react";
import { Container } from "../ui/Container";
import { BranchSelector } from "../branches/BranchSelector";

export const BranchPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF8F5] relative overflow-hidden border-t border-[#121417]/10" id="locations-section">
      <Container>
        <BranchSelector defaultBranchId="kalyan-nagar" />
      </Container>
    </section>
  );
};
