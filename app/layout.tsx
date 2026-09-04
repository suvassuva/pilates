import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Dr Pilates | Reformer Pilates, EMS Training & Physiotherapy in Bengaluru",
  description:
    "Premium Reformer Pilates, EMS Training, Physiotherapy and Personal Training studio in Kalyan Nagar & Branch 02, Bengaluru. Call 088922 36442 to book your 1-on-1 session.",
  keywords: [
    "Reformer Pilates Bengaluru",
    "Pilates Kalyan Nagar",
    "EMS Training Bengaluru",
    "Physiotherapy HRBR Layout",
    "Personal Training Bengaluru",
    "Dr Pilates"
  ],
  authors: [{ name: "Dr Pilates" }],
  openGraph: {
    title: "Dr Pilates | Reformer Pilates, EMS Training & Physiotherapy in Bengaluru",
    description:
      "Premium Reformer Pilates, EMS Training, Physiotherapy and Personal Training studio in Kalyan Nagar & Branch 02, Bengaluru.",
    url: "https://drpilates.in",
    siteName: "Dr Pilates",
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable} ${cormorant.variable}`}>
      <body className="font-body antialiased min-h-screen flex flex-col justify-between bg-[#FAF8F5] text-[#111111]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
