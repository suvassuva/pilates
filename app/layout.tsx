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
  title: "Dr Pilates | Reformer Pilates, EMS Training & Physiotherapy in Bengaluru",
  description:
    "Premium Reformer Pilates, EMS Training, Physiotherapy and Personal Training at Dr Pilates Kalyan Nagar & Kothanur, Hennur Road, Bengaluru. Call 094810 03827 to book your 1-on-1 session.",
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
    "Reformer Pilates Bengaluru",
    "Pilates Kalyan Nagar",
    "Pilates Kothanur Hennur Road",
    "EMS Training Bengaluru",
    "Physiotherapy HRBR Layout",
    "Personal Training Bengaluru",
    "Dr Pilates"
  ],
  authors: [{ name: "Dr Pilates" }],
  openGraph: {
    title: "Dr Pilates | Reformer Pilates, EMS Training & Physiotherapy in Bengaluru",
    description:
      "Premium Reformer Pilates, EMS Training, Physiotherapy and Personal Training at Dr Pilates Kalyan Nagar & Kothanur, Hennur Road, Bengaluru.",
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
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
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
