import React from "react";
import fs from "node:fs";
import path from "node:path";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  // Ensure hero image assets are populated in public/images on request
  try {
    const imagesDir = path.join(process.cwd(), "public", "images");
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    const sourceHero = "C:\\Users\\Electrobot\\.gemini\\antigravity\\brain\\bab38876-ac06-4b52-bec0-458c53839121\\dr_pilates_hero_banner_1793363484824.jpg";
    if (fs.existsSync(sourceHero)) {
      fs.copyFileSync(sourceHero, path.join(imagesDir, "dr_pilates_hero_amanda_style.jpg"));
      fs.copyFileSync(sourceHero, path.join(imagesDir, "dr_pilates_hero_banner_clean.jpg"));
      fs.copyFileSync(sourceHero, path.join(imagesDir, "reformer_action_unsplash.jpg"));
    }

    const demoHero = "C:\\Users\\Electrobot\\.gemini\\antigravity\\brain\\bab38876-ac06-4b52-bec0-458c53839121\\.user_uploaded\\media_1793369253171_f6cb87bf.jpg";
    if (fs.existsSync(demoHero)) {
      fs.copyFileSync(demoHero, path.join(imagesDir, "dr_pilates_reformer_action_demo.jpg"));
    }
  } catch {
    // Silent fallback
  }

  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
