import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Dr Pilates | Best Reformer Pilates & EMS Studio in Bengaluru",
  description:
    "Doctor-guided Reformer Pilates, EMS Training, Clinical Physiotherapy & Postural Alignment in Kalyan Nagar & Kothanur, Hennur Road, Bengaluru. Book your 1-on-1 trial session.",
  alternates: {
    canonical: "/"
  },
  keywords: [
    "Reformer Pilates Bangalore",
    "Pilates studio Kalyan Nagar",
    "Pilates classes Hennur Road",
    "Best Pilates in North Bangalore",
    "EMS training Bangalore",
    "Physiotherapy HRBR Layout",
    "Pilates near Kammanahalli",
    "Dr Pilates"
  ],
  openGraph: {
    title: "Dr Pilates | Best Reformer Pilates & EMS Studio in Bengaluru",
    description:
      "Doctor-guided Reformer Pilates, EMS Training, Clinical Physiotherapy & Postural Alignment in Kalyan Nagar & Kothanur, Hennur Road, Bengaluru.",
    url: "https://drpilates.in",
    images: [
      {
        url: "/images/Taupe Gradient Pilates Studio Workout.png",
        width: 1200,
        height: 630,
        alt: "Dr Pilates - Reformer Pilates & EMS Studio Bengaluru"
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
