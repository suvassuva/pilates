"use client";

import { useState } from "react";
import { BlogFAQItem } from "@/data/blogs";

interface BlogFAQProps {
  faqs: BlogFAQItem[];
}

export default function BlogFAQ({ faqs }: BlogFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-[#FAF8F5] border-t border-[#E5E0D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#8E7557]/10 text-[#8E7557] border border-[#8E7557]/20 mb-3">
            Knowledge Base & Clinical Insights
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 font-body text-sm sm:text-base leading-relaxed">
            Clinical clarifications, training guidelines, and therapeutic insights answered directly by Dr. Govinda Raju S. and our lead movement specialists.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E5E0D8] transition-all duration-300 shadow-xs hover:border-[#8E7557]/40 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7557]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-neutral-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#111111] text-[#E6D7C3]"
                        : "bg-[#FAF8F5] text-neutral-600 group-hover:bg-[#8E7557]/10"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
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
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-neutral-600 font-body text-sm sm:text-base leading-relaxed border-t border-neutral-100/80 mt-1">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
