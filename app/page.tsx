import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Dr Pilates | Reformer Pilates in Bangalore | Studios in Kalyan Nagar & Hennur",
  description:
    "Top-rated Pilates studio in Kalyan Nagar and Hennur, Kothanur. Experience physiotherapist guided Pilates, world-class Reformer Pilates classes, and 1-on-1 private Pilates sessions in Bangalore.",
  alternates: {
    canonical: "/"
  },
  keywords: [
    "Reformer Pilates in Bangalore",
    "Pilates Classes",
    "Pilates Studio",
    "Physiotherapist Guided Pilates",
    "Private Pilates Sessions in Bangalore",
    "Pilates Studio in Kalyan Nagar",
    "Pilates Studio in Hennur",
    "Pilates Classes Kalyan Nagar",
    "Pilates Classes Hennur",
    "Pilates Kothanur",
    "Dr Pilates Bangalore"
  ],
  openGraph: {
    title: "Dr Pilates | Reformer Pilates in Bangalore | Studios in Kalyan Nagar & Hennur",
    description:
      "Top-rated Pilates studio in Kalyan Nagar and Hennur, Kothanur. Experience physiotherapist guided Pilates, world-class Reformer Pilates classes, and 1-on-1 private Pilates sessions in Bangalore.",
    url: "https://drpilates.in",
    images: [
      {
        url: "/images/Taupe Gradient Pilates Studio Workout.png",
        width: 1200,
        height: 630,
        alt: "Dr Pilates - Reformer Pilates in Bangalore & Pilates Studio Kalyan Nagar, Hennur"
      }
    ]
  }
};

export default function HomePage() {
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
