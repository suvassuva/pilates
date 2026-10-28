"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/data/blogs";
import BlogCard from "./BlogCard";
import { Search } from "lucide-react";

interface BlogListProps {
  posts: BlogPost[];
  featuredPost?: BlogPost;
}

export default function BlogList({ posts, featuredPost }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Non-featured posts for the grid when showing all without search query
  const gridPosts = useMemo(() => {
    if (selectedCategory === "All" && searchQuery.trim() === "" && featuredPost) {
      return filteredPosts.filter((p) => p.id !== featuredPost.id);
    }
    return filteredPosts;
  }, [filteredPosts, selectedCategory, searchQuery, featuredPost]);

  const showFeaturedSection =
    selectedCategory === "All" && searchQuery.trim() === "" && featuredPost;

  return (
    <div className="space-y-10">
      {/* Search and Filters Bar (Clean 12px rounded card) */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-[#FFFFFF] border border-[#DDD3C8]">
        {/* Articles Count & Description */}
        <div className="flex items-center gap-2.5">
          <span className="text-base font-normal font-display text-[#282622] tracking-tight">All Articles</span>
          <span className="px-2.5 py-0.5 rounded-[6px] text-xs font-medium bg-[#E8DED1] text-[#282622] border border-[#DDD3C8] font-body">
            {filteredPosts.length}
          </span>
        </div>

        {/* Search Input (Restrained 6px radius) */}
        <div className="relative w-full md:w-80 shrink-0">
          <Search className="w-4 h-4 text-[#6E685E] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles & topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm font-body rounded-[6px] bg-[#F7F3ED] border border-[#DDD3C8] focus:outline-none focus:ring-2 focus:ring-[#282622] focus:bg-[#FFFFFF] text-[#282622] transition-colors placeholder:text-[#6E685E]"
          />
        </div>
      </div>

      {/* Featured Article Spotlight (shown on initial view) */}
      {showFeaturedSection && (
        <section aria-label="Featured Article">
          <BlogCard post={featuredPost} featured={true} />
        </section>
      )}

      {/* Article Grid - items-stretch guarantees equal-height rows */}
      {gridPosts.length > 0 && (
        <section aria-label="Articles Grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {gridPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {gridPosts.length === 0 && searchQuery.trim() !== "" && (
        <div className="text-center py-14 px-4 rounded-xl bg-[#FFFFFF] border border-[#DDD3C8]">
          <p className="text-base text-[#6E685E] font-body mb-2">
            No articles found matching &ldquo;{searchQuery}&rdquo;.
          </p>
          <p className="text-xs sm:text-sm text-[#6E685E] font-body">
            Try adjusting your search terms or clearing the category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-4 min-h-[44px] px-5 py-2.5 rounded-[6px] text-xs sm:text-sm font-medium bg-[#5C604E] text-[#FFFFFF] hover:bg-[#4A4E3E] transition-colors cursor-pointer font-body shadow-xs"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
