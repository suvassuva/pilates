import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BranchPreview } from "@/components/home/BranchPreview";
import { TrainersPreview } from "@/components/home/TrainersPreview";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <BranchPreview />
      <TrainersPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
