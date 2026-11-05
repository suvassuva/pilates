import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Gallery & Workout Videos | Dr Pilates Bengaluru",
  description:
    "Take a virtual tour of Dr Pilates studios in Kalyan Nagar and Kothanur, Hennur Road. View our clinical Reformer Pilates equipment, EMS training suits, and spacious workout spaces.",
  alternates: {
    canonical: "/gallery"
  },
  keywords: [
    "Dr Pilates studio photos",
    "Reformer Pilates studio Bengaluru pictures",
    "Pilates reformer equipment Kalyan Nagar",
    "EMS training video Bangalore",
    "Pilates studio interior Hennur"
  ],
  openGraph: {
    title: "Studio Gallery & Workout Videos | Dr Pilates Bengaluru",
    description:
      "Take a virtual tour of Dr Pilates studios in Kalyan Nagar and Kothanur, Hennur Road. View our clinical Reformer Pilates equipment, EMS training suits, and spacious workout spaces.",
    url: "https://drpilates.in/gallery",
    images: [
      {
        url: "/images/hero_gallery_luminous.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Pilates Studio Gallery Bengaluru"
      }
    ]
  }
};

export default function GalleryLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

