import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/home/CTASection";
import BlogList from "@/components/blog/BlogList";
import BlogFAQ from "@/components/blog/BlogFAQ";
import { getAllBlogs, getFeaturedBlog, BLOG_FAQS } from "@/data/blogs";

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
    <div className="pt-24 pb-0 bg-[#FAF8F5]">
      {/* Hero Banner with Studio Image Background */}
      <section className="py-20 sm:py-28 bg-[#141312] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/pilates_studio_interior.jpeg"
            alt="Dr Pilates Studio Interior"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-black/30 to-black/50" />
        </div>

        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E2C79A] bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#B59C7D]/50 shadow-sm inline-block">
              Dr. Pilates Knowledge Hub
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Clinical Insights, Science &amp;{" "}
              <span className="font-serif italic font-normal text-[#E2C79A]">
                Movement Culture
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-200 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Evidence-based rehabilitation, biomechanics breakdowns, and reformer training advice curated by Dr. Govinda Raju S. and our elite clinical faculty.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Articles Listing */}
      <main className="py-16 sm:py-20">
        <Container>
          <BlogList posts={blogs} featuredPost={featured} />
        </Container>
      </main>

      {/* Integrated Blog FAQ Section */}
      <BlogFAQ faqs={BLOG_FAQS} />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
