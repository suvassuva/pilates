import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Private Pilates Sessions in Bangalore | Kalyan Nagar & Hennur Studios",
  description:
    "Book your 1-on-1 private Pilates sessions in Bangalore. Physiotherapist guided Pilates assessment and trial Reformer Pilates classes at our Kalyan Nagar and Hennur, Kothanur studios. Call 094810 03827.",
  alternates: {
    canonical: "/appointment"
  },
  keywords: [
    "Private Pilates Sessions in Bangalore",
    "Physiotherapist Guided Pilates",
    "Reformer Pilates in Bangalore",
    "Pilates Classes Kalyan Nagar",
    "Pilates Classes Hennur",
    "Pilates Studio in Kalyan Nagar",
    "Pilates Studio in Hennur",
    "Dr Pilates booking"
  ],
  openGraph: {
    title: "Book Private Pilates Sessions in Bangalore | Kalyan Nagar & Hennur Studios",
    description:
      "Book your 1-on-1 private Pilates sessions in Bangalore. Physiotherapist guided Pilates assessment and trial Reformer Pilates classes at our Kalyan Nagar and Hennur, Kothanur studios. Call 094810 03827.",
    url: "https://drpilates.in/appointment",
    images: [
      {
        url: "/images/hero_appointment_luminous.jpg",
        width: 1200,
        height: 630,
        alt: "Book Private Pilates Sessions in Bangalore at Dr Pilates"
      }
    ]
  }
};

export default function AppointmentLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
