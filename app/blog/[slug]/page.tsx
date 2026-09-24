import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/home/CTASection";
import BlogCard from "@/components/blog/BlogCard";
import {
  getAllBlogs,
  getBlogBySlug,
  getRelatedBlogs,
} from "@/data/blogs";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Dr Pilates Bengaluru",
    };
  }

  return {
    title: `${post.title} | Dr Pilates Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogs(post.slug, post.category, 3);

  return (
    <div className="pt-24 pb-0 bg-[#FAF8F5]">
      {/* Header & Article Meta */}
      <article>
        <header className="py-14 sm:py-20 bg-neutral-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover blur-sm scale-105"
            />
            <div className="absolute inset-0 bg-neutral-950/80" />
          </div>

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto">
              {/* Back to Blog */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E2C79A] hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Link>

              {/* Badges & Meta */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#8E7557]/20 border border-[#8E7557]/40 text-[#E2C79A] font-semibold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#8E7557]" />
                  {post.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#8E7557]" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
                {post.title}
              </h1>

              {/* Excerpt Lead */}
              <p className="font-body text-base sm:text-lg text-neutral-300 leading-relaxed border-l-2 border-[#8E7557] pl-4 mb-8">
                {post.excerpt}
              </p>

              {/* Action Bar */}
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-xs text-neutral-400 font-medium tracking-wide">
                  Dr. Pilates Clinical Journal
                </span>

                <div className="flex flex-wrap items-center gap-2 text-neutral-400">
                  {post.socialLinks?.youtube && (
                    <a
                      href={post.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-red-950/40 hover:bg-red-900/50 text-white transition-colors border border-red-500/40"
                      aria-label="Watch on YouTube"
                    >
                      <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                      <span>YouTube</span>
                    </a>
                  )}

                  {post.socialLinks?.linkedin && (
                    <a
                      href={post.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-sky-950/40 hover:bg-sky-900/50 text-white transition-colors border border-sky-500/40"
                      aria-label="Connect on LinkedIn"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5 text-sky-400" />
                      <span>LinkedIn</span>
                    </a>
                  )}

                  <a
                    href={`https://wa.me/919481003827?text=Hi%20Dr.%20Pilates,%20I%20am%20reading%20"${encodeURIComponent(
                      post.title
                    )}"%20and%20wanted%20to%20learn%20more.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    Share / Inquire
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="relative h-72 sm:h-96 md:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-white/50">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>

        {/* Article Body Content */}
        <div className="py-14 sm:py-20">
          <Container>
            <div className="max-w-3xl mx-auto">
              {/* Sections */}
              <div className="space-y-12">
                {post.sections && post.sections.map((section, idx) => (
                  <section key={idx} className="space-y-5">
                    {section.heading && (
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 tracking-tight">
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs && section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-neutral-700 font-body leading-relaxed text-base sm:text-lg">
                        {p}
                      </p>
                    ))}
                    {section.calloutQuote && (
                      <blockquote className="my-6 p-5 sm:p-6 rounded-2xl bg-[#F5F2EB] border-l-4 border-[#8E7557] italic text-neutral-800 text-base sm:text-lg font-serif">
                        &ldquo;{section.calloutQuote}&rdquo;
                      </blockquote>
                    )}
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="mt-4 space-y-2.5 pl-2">
                        {section.bulletPoints.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-3 text-neutral-700 font-body text-base"
                          >
                            <span className="text-[#8E7557] font-bold mt-1 text-sm">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Clinical Appointment CTA Box */}
              <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-neutral-900 text-white flex flex-col sm:flex-row gap-6 items-center justify-between border border-[#8E7557]/30 shadow-lg">
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-xs uppercase tracking-widest text-[#E2C79A] font-semibold">
                    Personalized Clinical Rehabilitation
                  </span>
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Experience Dr. Pilates in Bengaluru
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 font-body max-w-xl leading-relaxed">
                    Customized Reformer Pilates, EMS bio-suit training, and orthopedic physiotherapy protocols designed for your body.
                  </p>
                </div>
                <Link
                  href="/appointment"
                  className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold bg-[#E2C79A] text-neutral-950 hover:bg-white transition-colors shadow-sm"
                >
                  Book Evaluation →
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-[#E5E0D8]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#8E7557] block mb-1">
                    Keep Reading
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 tracking-tight">
                    Related Movement Insights
                  </h3>
                </div>
                <Link
                  href="/blog"
                  className="text-xs font-semibold uppercase tracking-wider text-[#8E7557] hover:text-neutral-900 transition-colors"
                >
                  View All Articles →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <BlogCard key={related.id} post={related} />
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
