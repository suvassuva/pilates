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
    <div className="pb-0 bg-[#F7F3ED]">
      {/* Header & Article Meta */}
      <article>
        <header className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-neutral-900 text-white relative overflow-hidden">
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
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E8DED1] hover:text-[#282622] transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Link>

              {/* Badges & Meta */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 mb-4 font-body">
                <span className="px-3 py-1 rounded-[6px] bg-[#282622]/40 border border-white/20 text-[#E8DED1] font-medium uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A990]" />
                  {post.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A990]" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display font-normal text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-[1.2] mb-6">
                {post.title}
              </h1>

              {/* Excerpt Lead */}
              <p className="font-body text-base sm:text-[17px] text-neutral-300 leading-[1.65] border-l-2 border-[#C5A990] pl-4 mb-8">
                {post.excerpt}
              </p>

              {/* Action Bar */}
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-xs text-neutral-400 font-medium font-body tracking-wide">
                  Dr. Pilates Clinical Journal
                </span>

                <div className="flex flex-wrap items-center gap-2 text-neutral-400">
                  {post.socialLinks?.youtube && (
                    <a
                      href={post.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-medium font-body bg-red-950/40 hover:bg-red-900/50 text-white transition-colors border border-red-500/40"
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-medium font-body bg-sky-950/40 hover:bg-sky-900/50 text-white transition-colors border border-sky-500/40"
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-medium font-body bg-white/10 hover:bg-white/20 text-white transition-colors"
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
          <div className="relative h-72 sm:h-96 md:h-[460px] rounded-xl overflow-hidden border border-[#DDD3C8]">
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
                      <h2 className="font-display font-normal text-2xl sm:text-3xl text-[#282622] tracking-tight leading-[1.2]">
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs && section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-[#6E685E] font-body leading-[1.65] text-base sm:text-[17px]">
                        {p}
                      </p>
                    ))}
                    {section.calloutQuote && (
                      <blockquote className="my-6 p-5 sm:p-6 rounded-xl bg-[#E8DED1] border-l-4 border-[#282622] italic text-[#282622] text-base sm:text-lg font-serif">
                        &ldquo;{section.calloutQuote}&rdquo;
                      </blockquote>
                    )}
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="mt-4 space-y-2.5 pl-2">
                        {section.bulletPoints.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-3 text-[#6E685E] font-body text-base leading-[1.6]"
                          >
                            <span className="text-[#282622] font-medium mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Clinical Appointment CTA Box */}
              <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#282622] text-white flex flex-col sm:flex-row gap-6 items-center justify-between border border-[#DDD3C8]">
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-xs uppercase tracking-widest text-[#E8DED1] font-medium font-body">
                    Personalized Clinical Rehabilitation
                  </span>
                  <h4 className="font-display font-normal text-xl sm:text-2xl text-white">
                    Experience Dr. Pilates in Bengaluru
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 font-body max-w-xl leading-[1.6]">
                    Customized Reformer Pilates, EMS bio-suit training, and orthopedic physiotherapy protocols designed for your body.
                  </p>
                </div>
                <Link
                  href="/appointment"
                  className="shrink-0 min-h-[46px] px-6 py-3.5 rounded-[6px] text-xs sm:text-sm font-medium bg-[#F7F3ED] text-[#282622] hover:bg-[#E8DED1] transition-colors font-body"
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
        <section className="py-16 bg-[#FFFFFF] border-t border-[#DDD3C8]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#282622] block mb-1">
                    Keep Reading
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#282622] tracking-tight">
                    Related Movement Insights
                  </h3>
                </div>
                <Link
                  href="/blog"
                  className="text-xs font-semibold uppercase tracking-wider text-[#282622] hover:text-[#3E3B35] transition-colors font-body"
                >
                  View All Articles →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
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
