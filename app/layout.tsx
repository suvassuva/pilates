import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { WhatsAppPopup } from "@/components/ui/WhatsAppPopup";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "serif"]
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drpilates.in"),
  title: {
    default: "Dr Pilates | Reformer Pilates, EMS Training & Physiotherapy in Bengaluru",
    template: "%s | Dr Pilates Bengaluru"
  },
  description:
    "Dr. Pilates offers premier Reformer Pilates in Bangalore, featuring physiotherapist guided Pilates, 1-on-1 private Pilates sessions, and specialized Pilates classes across our Kalyan Nagar and Kothanur, Hennur Road studios. Call 094810 03827 to book your trial.",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" }
    ],
    apple: [
      { url: "/favicon.png" }
    ]
  },
  keywords: [
    "Reformer Pilates in Bangalore",
    "Pilates Classes",
    "Pilates Studio",
    "Physiotherapist Guided Pilates",
    "Private Pilates Sessions in Bangalore",
    "Pilates Kalyan Nagar",
    "Pilates Hennur",
    "Pilates Kothanur",
    "Pilates Studio in Kalyan Nagar",
    "Pilates Studio in Hennur",
    "Pilates Studio Kothanur",
    "Pilates Classes Kalyan Nagar",
    "Pilates Classes Hennur",
    "Reformer Pilates Bangalore",
    "EMS Training Bengaluru",
    "Physiotherapy HRBR Layout",
    "Dr Pilates Bangalore"
  ],
  authors: [{ name: "Dr Pilates" }, { name: "Dr. Govinda Raju" }],
  creator: "Dr Pilates",
  publisher: "Dr Pilates",
  openGraph: {
    title: "Dr Pilates | Reformer Pilates, EMS Training & Physiotherapy in Bengaluru",
    description:
      "Premium doctor-guided Reformer Pilates, EMS Training, Physiotherapy and Personal Training at Dr Pilates Kalyan Nagar & Kothanur, Hennur Road, Bengaluru.",
    url: "https://drpilates.in",
    siteName: "Dr Pilates",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/Taupe Gradient Pilates Studio Workout.png",
        width: 1200,
        height: 630,
        alt: "Dr Pilates Studio Bengaluru - Reformer Pilates & Clinical Movement"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Pilates | Reformer Pilates, EMS Training & Physiotherapy in Bengaluru",
    description:
      "Doctor-guided Reformer Pilates, EMS Training and Physiotherapy at Dr Pilates Kalyan Nagar & Kothanur, Bengaluru.",
    images: ["/images/Taupe Gradient Pilates Studio Workout.png"]
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "13.022068;77.643666",
    "ICBM": "13.022068, 77.643666"
  }
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HealthAndBeautyBusiness", "SportsActivityLocation"],
      "@id": "https://drpilates.in/#kalyan-nagar",
      "name": "Dr Pilates – Kalyan Nagar",
      "url": "https://drpilates.in",
      "logo": "https://drpilates.in/logo-white.png",
      "image": "https://drpilates.in/images/Taupe%20Gradient%20Pilates%20Studio%20Workout.png",
      "description":
        "Doctor-led Reformer Pilates, EMS Training, Clinical Physiotherapy, and Posture Correction studio in HRBR Layout, Kalyan Nagar, Bengaluru.",
      "telephone": "+91 94810 03827",
      "knowsAbout": [
        "Reformer Pilates in Bangalore",
        "Pilates Classes",
        "Pilates Studio in Kalyan Nagar",
        "Physiotherapist Guided Pilates",
        "Private Pilates Sessions in Bangalore"
      ],
      "priceRange": "$$",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, Net Banking",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3rd Floor, Y4 Heights Building, 6th Main Rd, HRBR Layout 2nd Block",
        "addressLocality": "Kalyan Nagar, Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560043",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.022068,
        "longitude": 77.643666
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "06:00",
          "closes": "20:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "141"
      }
    },
    {
      "@type": ["HealthAndBeautyBusiness", "SportsActivityLocation"],
      "@id": "https://drpilates.in/#kothanur",
      "name": "Dr Pilates – Kothanur, Hennur Road",
      "url": "https://drpilates.in/branches",
      "logo": "https://drpilates.in/logo-white.png",
      "image": "https://drpilates.in/images/dr_pilates_bright_studio_banner.jpg",
      "description":
        "World-class Reformer Pilates and EMS fitness studio on Hennur Bagalur Main Road, Kothanur, North Bengaluru.",
      "telephone": "+91 94810 03827",
      "knowsAbout": [
        "Reformer Pilates in Bangalore",
        "Pilates Classes",
        "Pilates Studio in Hennur",
        "Pilates Studio Kothanur",
        "Physiotherapist Guided Pilates",
        "Private Pilates Sessions in Bangalore"
      ],
      "priceRange": "$$",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, Net Banking",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hennur Bagalur Main Road",
        "addressLocality": "Kothanur, Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560077",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0565,
        "longitude": 77.6521
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "06:00",
          "closes": "20:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "98"
      }
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://drpilates.in/#clinical-physio",
      "name": "Dr. Govinda Raju - Clinical Physiotherapy & Pilates",
      "medicalSpecialty": ["Physiotherapy", "SportsMedicine"],
      "founder": {
        "@type": "Person",
        "name": "Dr. Govinda Raju",
        "jobTitle": "Lead Physiotherapist & Pilates Master Instructor"
      }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col justify-between bg-[#F7F3ED] text-[#282622]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <WhatsAppPopup />
      </body>
    </html>
  );
}
