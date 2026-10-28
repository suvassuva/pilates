"use client";

import { useState } from "react";
import { BlogFAQItem } from "@/data/blogs";

interface BlogFAQProps {
  faqs: BlogFAQItem[];
}

export default function BlogFAQ({ faqs }: BlogFAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const renderCard = (faq: BlogFAQItem) => {
    const isOpen = openId === faq.id;
    return (
      <div
        key={faq.id}
        className={`bg-[#FFFFFF] rounded-xl border transition-colors duration-200 overflow-hidden ${
          isOpen
            ? "border-[#282622]"
            : "border-[#DDD3C8] hover:border-[#C5A990]"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleFAQ(faq.id)}
          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C604E]"
          aria-expanded={isOpen}
        >
          <span className="font-display font-normal text-sm sm:text-base text-[#282622] leading-snug">
            {faq.question}
          </span>
          <div
            className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-[6px] flex items-center justify-center transition-colors duration-200 ${
              isOpen
                ? "bg-[#5C604E] text-[#FFFFFF]"
                : "bg-[#F7F3ED] text-[#6E685E] border border-[#DDD3C8]"
            }`}
          >
            <svg
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        {isOpen && (
          <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-[#6E685E] font-body text-xs sm:text-[15px] leading-[1.6] border-t border-[#DDD3C8] mt-1">
            <p className="pt-3 sm:pt-3.5">{faq.answer}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-[#E8DED1] border-t border-[#DDD3C8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] text-xs font-medium font-body tracking-widest uppercase bg-[#F7F3ED] text-[#282622] border border-[#DDD3C8] mb-3">
            Dr Pilates — FAQ
          </span>
          <h2 className="font-display font-normal text-2xl sm:text-3xl lg:text-[40px] text-[#282622] tracking-tight leading-[1.2] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6E685E] font-body text-sm sm:text-base leading-[1.6]">
            Personalised movement training, Reformer Pilates, and clinical physiotherapy insights answered by our lead specialists in Bengaluru.
          </p>
        </div>

        {/* 1 Row 2 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-start">
          {faqs.map(renderCard)}
        </div>
      </div>
    </section>
  );
}
