"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BlogPost } from "@/data/blogs";
import { X, ExternalLink, Maximize2 } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  layout?: "horizontal" | "vertical";
}

export default function BlogCard({ post, featured = false, layout }: BlogCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isHorizontal = layout === "horizontal" || featured;
  const isSundayChronicle = post.tags?.includes("Sunday Chronicle");

  // Handle ESC key to dismiss modal and disable body scroll when open
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      {isHorizontal ? (
        <article className="group relative rounded-2xl bg-[#FFFFFF] border border-[#DDD3C8] overflow-hidden hover:border-[#C5A990] transition-colors duration-200 grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-xs">
          {/* Infographic / Cover Image Section (Click to zoom) */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="relative lg:col-span-7 w-full aspect-[16/9] lg:aspect-auto lg:h-full min-h-[260px] sm:min-h-[320px] overflow-hidden bg-[#FFFFFF] flex items-center justify-center p-2 sm:p-3 lg:p-4 border-b lg:border-b-0 lg:border-r border-[#DDD3C8] cursor-zoom-in group/img"
            title="Click to expand full infographic"
          >
            <div className="relative w-full h-full min-h-[240px] sm:min-h-[280px]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-contain object-center transition-transform duration-500 group-hover/img:scale-101"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority={post.featured}
              />
            </div>
            {/* Subtle Zoom Badge overlay */}
            <div className="absolute bottom-3 right-3 px-2 py-1 rounded-[6px] bg-[#282622]/80 text-[#FFFFFF] text-[11px] font-body flex items-center gap-1 opacity-0 group-hover/img:opacity-100 transition-opacity backdrop-blur-xs pointer-events-none">
              <Maximize2 className="w-3 h-3" />
              <span>Click to expand</span>
            </div>
          </div>

          {/* Details Content */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-9 flex flex-col justify-between bg-[#FFFFFF]">
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
                {post.externalUrl ? (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-left hover:text-[#5C604E] transition-colors inline-block"
                  >
                    {post.title}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="text-left hover:text-[#5C604E] transition-colors cursor-pointer"
                  >
                    {post.title}
                  </button>
                )}
              </h3>

              <p className="text-[#6E685E] font-body text-sm lg:text-[15px] leading-[1.65] line-clamp-3 mb-6">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-5 border-t border-[#DDD3C8] flex items-center justify-between mt-auto">
              <span className="text-xs font-medium text-[#6E685E] font-body">Dr Pilates Clinical Insights</span>

              {post.externalUrl ? (
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-[#282622] hover:text-[#C5A990] transition-colors group/link font-body cursor-pointer"
                >
                  Read Article
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-[#282622] hover:text-[#C5A990] transition-colors group/link font-body cursor-pointer"
                >
                  {isSundayChronicle ? "View Infographic" : "View Details"}
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </article>
      ) : (
        <article className="group flex flex-col h-full rounded-xl bg-[#FFFFFF] border border-[#DDD3C8] overflow-hidden hover:border-[#C5A990] transition-colors duration-200">
          <div
            onClick={() => setIsModalOpen(true)}
            className="relative aspect-[16/9] w-full overflow-hidden block bg-[#FFFFFF] border-b border-[#DDD3C8] p-2 cursor-zoom-in"
            title="Click to expand full infographic"
          >
            <div className="relative w-full h-full">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-contain object-center transition-transform duration-500 group-hover:scale-101"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-[6px] text-[11px] font-medium font-body bg-[#FFFFFF]/90 backdrop-blur-xs text-[#282622] border border-[#DDD3C8] shadow-xs">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#6E685E] mb-3 font-body">
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="font-display font-normal text-lg lg:text-xl text-[#282622] leading-snug line-clamp-2 mb-3 min-h-[3rem]">
                {post.externalUrl ? (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-left hover:text-[#5C604E] transition-colors inline-block"
                  >
                    {post.title}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="text-left hover:text-[#5C604E] transition-colors cursor-pointer"
                  >
                    {post.title}
                  </button>
                )}
              </h3>

              <p className="text-[#6E685E] font-body text-xs sm:text-sm leading-[1.6] line-clamp-3 mb-5">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#DDD3C8] flex items-center justify-between mt-auto">
              <span className="text-xs font-medium text-[#6E685E] font-body">
                {post.tags?.[0] || post.category}
              </span>

              {post.externalUrl ? (
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#282622] hover:text-[#C5A990] transition-colors font-body cursor-pointer"
                  aria-label={`Read ${post.title} on Deccan Chronicle`}
                >
                  Read Article ↗
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center text-xs font-medium text-[#282622] hover:text-[#C5A990] transition-colors font-body cursor-pointer"
                >
                  {isSundayChronicle ? "View Infographic →" : "View Details →"}
                </button>
              )}
            </div>
          </div>
        </article>
      )}

      {/* High-Resolution Infographic Lightbox Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-3 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-[#DDD3C8]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#DDD3C8] bg-[#F7F3ED]">
              <div className="flex items-center gap-2.5 truncate pr-4">
                <span className="px-2.5 py-0.5 rounded-[6px] text-xs font-medium bg-[#E8DED1] text-[#282622] border border-[#DDD3C8] shrink-0 font-body">
                  {post.category}
                </span>
                <h4 className="font-display text-sm sm:text-base text-[#282622] font-normal truncate">
                  {post.title}
                </h4>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {post.externalUrl && (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-medium bg-[#282622] text-[#FFFFFF] hover:bg-[#4A4E3E] transition-colors font-body cursor-pointer shadow-xs"
                    title="Read official publication on Deccan Chronicle"
                  >
                    <span>Read on Deccan Chronicle</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={post.newspaperScanImage || post.coverImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-medium bg-[#FFFFFF] text-[#282622] border border-[#DDD3C8] hover:bg-[#E8DED1] transition-colors font-body cursor-pointer shadow-xs"
                  title="Open original high-res image in new tab"
                >
                  <span>Open Full Resolution</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-[6px] text-[#6E685E] hover:text-[#282622] hover:bg-[#E8DED1] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="relative flex-1 min-h-[280px] max-h-[75vh] w-full overflow-auto bg-[#FAFAFA] flex items-center justify-center p-3 sm:p-6">
              <div className="relative w-full h-full min-h-[280px] flex items-center justify-center">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={1672}
                  height={941}
                  className="max-h-[72vh] w-auto max-w-full object-contain rounded-md shadow-xs"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-[#DDD3C8] bg-[#F7F3ED] text-xs text-[#6E685E] font-body">
              <span className="truncate pr-2">
                {post.externalUrl ? (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[#282622] font-medium"
                  >
                    Sunday Chronicle / Deccan Chronicle Feature • Dr. Govinda Raju S. ↗
                  </a>
                ) : (
                  "Dr Pilates Clinical Insights • Bengaluru"
                )}
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-3.5 py-1.5 rounded-[6px] bg-[#282622] text-[#FFFFFF] text-xs font-medium hover:bg-[#4A4E3E] transition-colors cursor-pointer shrink-0 shadow-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
