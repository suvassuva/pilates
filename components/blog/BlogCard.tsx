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
      <article className="group relative rounded-xl bg-[#FFFFFF] border border-[#DDD3C8] overflow-hidden transition-colors duration-200 grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="relative lg:col-span-7 h-72 lg:h-auto min-h-[320px] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-102"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
          <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-[6px] text-[11px] font-medium font-body tracking-wider uppercase bg-[#FFFFFF] text-[#282622] border border-[#DDD3C8]">
            Featured Article
          </span>
        </div>

        <div className="lg:col-span-5 p-6 lg:p-9 flex flex-col justify-between bg-[#FFFFFF]">
          <div>
            <div className="flex items-center gap-3 text-xs text-[#6E685E] mb-3.5 flex-wrap font-body">
              <span className="px-2.5 py-1 rounded-[6px] bg-[#E8DED1] border border-[#DDD3C8] font-medium text-[#282622]">
                {post.category}
              </span>
              <span>•</span>
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h3 className="font-display font-normal text-2xl lg:text-[28px] text-[#282622] leading-[1.25] tracking-tight mb-3">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h3>

            <p className="text-[#6E685E] font-body text-sm lg:text-[15px] leading-[1.6] line-clamp-3 mb-6">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-5 border-t border-[#DDD3C8] flex items-center justify-between mt-auto">
            <span className="text-xs font-medium text-[#6E685E] font-body">Dr Pilates Clinical Insights</span>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-[#282622] hover:text-[#C5A990] transition-colors group/link font-body"
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
    <article className="group flex flex-col h-full rounded-xl bg-[#FFFFFF] border border-[#DDD3C8] overflow-hidden hover:border-[#C5A990] transition-colors duration-200">
      <Link href={`/blog/${post.slug}`} className="relative h-56 w-full overflow-hidden block">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-102"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-[6px] text-[11px] font-medium font-body bg-[#E8DED1] text-[#282622] border border-[#DDD3C8]">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#6E685E] mb-3 font-body">
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="font-display font-normal text-lg lg:text-xl text-[#282622] leading-snug line-clamp-2 mb-3 min-h-[3rem]">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-[#6E685E] font-body text-xs sm:text-sm leading-[1.6] line-clamp-3 mb-5">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-[#DDD3C8] flex items-center justify-between mt-auto">
          <span className="text-xs font-medium text-[#6E685E] font-body">{post.readTime}</span>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-xs font-medium text-[#282622] hover:text-[#C5A990] transition-colors font-body"
            aria-label={`Read ${post.title}`}
          >
            Read Article →
          </Link>
        </div>
      </div>
    </article>
  );
}
