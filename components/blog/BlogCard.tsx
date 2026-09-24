"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blogs";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <article className="group relative rounded-2xl bg-white border border-[#E5E0D8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="relative lg:col-span-7 h-72 lg:h-auto min-h-[320px] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          <span className="absolute top-4 left-4 inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111111]/85 text-[#E6D7C3] backdrop-blur-md border border-[#8E7557]/30 shadow-sm">
            Featured Article
          </span>
        </div>

        <div className="lg:col-span-5 p-7 lg:p-10 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4 flex-wrap">
              <span className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E5E0D8] font-medium text-[#8E7557]">
                {post.category}
              </span>
              <span>•</span>
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h3 className="font-display font-semibold text-2xl lg:text-3xl text-neutral-900 group-hover:text-[#8E7557] transition-colors leading-snug tracking-tight mb-4">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h3>

            <p className="text-neutral-600 font-body text-sm lg:text-base leading-relaxed line-clamp-3 mb-6">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
            <span className="text-xs font-medium text-neutral-500">Dr Pilates Clinical Insights</span>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#8E7557] hover:text-[#725c42] transition-colors group/link"
            >
              Read Article
              <svg
                className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col h-full rounded-2xl bg-white border border-[#E5E0D8] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <Link href={`/blog/${post.slug}`} className="relative h-56 w-full overflow-hidden block">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#111111]/80 text-[#E6D7C3] backdrop-blur-md border border-[#8E7557]/20 shadow-xs">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="font-display font-semibold text-lg lg:text-xl text-neutral-900 group-hover:text-[#8E7557] transition-colors leading-snug line-clamp-2 mb-3">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-neutral-600 font-body text-sm leading-relaxed line-clamp-3 mb-5">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-xs font-medium text-neutral-500">{post.readTime}</span>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-xs font-semibold text-[#8E7557] group-hover:translate-x-0.5 transition-transform"
            aria-label={`Read ${post.title}`}
          >
            Read Article →
          </Link>
        </div>
      </div>
    </article>
  );
}
