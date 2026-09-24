"use client";

import { useState, useMemo } from "react";
import { BlogPost, BLOG_CATEGORIES } from "@/data/blogs";
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
    <div className="space-y-12">
      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#E5E0D8] shadow-xs">
        {/* Articles Count & Description */}
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-semibold text-neutral-900 tracking-tight">All Articles</span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FAF8F5] text-[#8E7557] border border-[#E5E0D8]">
            {filteredPosts.length}
          </span>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles & topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs font-body rounded-full bg-[#FAF8F5] border border-[#E5E0D8] focus:outline-none focus:ring-2 focus:ring-[#8E7557] focus:bg-white text-neutral-900 transition-colors placeholder:text-neutral-400"
          />
        </div>
      </div>

      {/* Featured Article Spotlight (shown on initial view) */}
      {showFeaturedSection && (
        <section aria-label="Featured Article">
          <BlogCard post={featuredPost} featured={true} />
        </section>
      )}

      {/* Article Grid */}
      <section aria-label="Articles Grid">
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gridPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-white border border-[#E5E0D8]">
            <p className="text-base text-neutral-600 mb-2">
              No articles found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <p className="text-xs text-neutral-400">
              Try adjusting your search terms or clearing the category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-[#FAF8F5] text-[#8E7557] border border-[#E5E0D8] hover:bg-[#EEEDE8]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
