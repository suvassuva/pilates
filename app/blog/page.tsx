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
    <div className="pb-0 bg-[#F7F3ED]">
      {/* Hero Banner with Studio Image Background */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#282622] text-white relative overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/reformer_studio_unsplash.jpg"
            alt="Dr Pilates Studio Interior"
            fill
            priority
            quality={95}
            className="object-cover object-[center_60%]"
            sizes="100vw"
          />
          {/* Luminous airy scrim preserving daylight clarity while keeping typography crystal-clear */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#282622]/75 via-[#282622]/40 to-black/20" />
        </div>

        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-normal font-display tracking-tight text-white leading-[1.15]">
              Clinical Insights, Science &amp;{" "}
              <span className="font-serif italic text-white">
                Movement Culture
              </span>
            </h1>
            <p className="text-base sm:text-[17px] text-white/95 font-normal font-body leading-[1.6] max-w-2xl mx-auto">
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
