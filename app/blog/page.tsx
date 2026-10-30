import React from "react";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/home/CTASection";
import BlogList from "@/components/blog/BlogList";
import BlogFAQ from "@/components/blog/BlogFAQ";
import { PressRecognition } from "@/components/about/PressRecognition";
import { getAllBlogs, getFeaturedBlog, BLOG_FAQS } from "@/data/blogs";

// Guarantee the bright luxury studio banner is active in public/images
try {
  const sourceBanner = "C:\\Users\\Electrobot\\.gemini\\antigravity\\brain\\bab38876-ac06-4b52-bec0-458c53839121\\dr_pilates_luxury_studio_banner_1793362976365.jpg";
  const imagesDir = path.join(process.cwd(), "public", "images");
  const brightBanner = path.join(imagesDir, "dr_pilates_bright_studio_banner.jpg");
  const oldDarkBanner = path.join(imagesDir, "reformer_studio_unsplash.jpg");

  if (fs.existsSync(sourceBanner)) {
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    fs.copyFileSync(sourceBanner, brightBanner);
    fs.copyFileSync(sourceBanner, oldDarkBanner);
  }
} catch {
  // Silent fallback
}

export const metadata = {
  title: "Clinical Insights & Movement Articles | Dr Pilates Bengaluru Blog",
  description:
    "Expert articles on Reformer Pilates, physiotherapy rehabilitation, desk-work posture correction, and EMS training by Dr. Govinda Raju S. and Dr Pilates Bengaluru specialists.",
  openGraph: {
    title: "Clinical Insights & Movement Articles | Dr Pilates Bengaluru Blog",
    description:
      "Expert articles on Reformer Pilates, physiotherapy rehabilitation, desk-work posture correction, and EMS training by Dr. Govinda Raju S.",
    url: "https://drpilates.in/blog",
    siteName: "Dr Pilates Bengaluru",
    type: "website",
  },
};

export default function BlogHubPage() {
  const blogs = getAllBlogs();
  const featured = getFeaturedBlog();

  return (
    <div className="pb-0 bg-[#F7F3ED]">
      {/* Hero Banner with Sunlit Luxury Studio Image Background */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#282622] text-white relative overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/dr_pilates_bright_studio_banner.jpg"
            alt="Dr Pilates Sunlit Luxury Reformer Studio"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Radiant airy scrim preserving daylight clarity while keeping typography crystal-clear */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
        </div>

        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-4xl lg:text-[54px] font-normal font-display tracking-tight text-white leading-tight sm:leading-[1.15]">
              Clinical Insights, Science &amp;{" "}
              <span className="font-serif italic text-white">
                Movement Culture
              </span>
            </h1>
          </div>
        </Container>
      </section>

      {/* Main Articles Listing */}
      <main className="py-16 sm:py-20">
        <Container>
          <BlogList posts={blogs} featuredPost={featured} />
        </Container>
      </main>

      {/* Press Recognition: Sunday Chronicle National Features */}
      <PressRecognition />

      {/* Integrated Blog FAQ Section */}
      <BlogFAQ faqs={BLOG_FAQS} />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
