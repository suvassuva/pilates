import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a 1-on-1 Pilates or EMS Consultation | Dr Pilates Bengaluru",
  description:
    "Schedule your private Reformer Pilates assessment or EMS trial session at Dr Pilates Kalyan Nagar or Kothanur, Hennur Road. Call 094810 03827.",
  alternates: {
    canonical: "/appointment"
  },
  keywords: [
    "Book Reformer Pilates trial Kalyan Nagar",
    "Pilates consultation Bangalore",
    "EMS fitness trial appointment",
    "Physiotherapy appointment HRBR Layout",
    "Dr Pilates booking",
    "Pilates classes Hennur Road booking"
  ],
  openGraph: {
    title: "Book a 1-on-1 Pilates or EMS Consultation | Dr Pilates Bengaluru",
    description:
      "Schedule your private Reformer Pilates assessment or EMS trial session at Dr Pilates Kalyan Nagar or Kothanur, Hennur Road. Call 094810 03827.",
    url: "https://drpilates.in/appointment",
    images: [
      {
        url: "/images/hero_appointment_luminous.jpg",
        width: 1200,
        height: 630,
        alt: "Book a Consultation at Dr Pilates Bengaluru"
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

