"use client";

import { useState } from "react";
import { FAQS } from "@/data/faq";
import { Container } from "../ui/Container";

export function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#E5E0D8]">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#B59C7D]/15 text-[#8C7658] border border-[#B59C7D]/30 mb-3">
            Got Questions?
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#111111] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4A4641] text-sm sm:text-base leading-relaxed">
            Everything you need to know about Reformer Pilates, EMS Training, Physiotherapy, and booking your first session at Dr Pilates.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="bg-[#FFFFFF] rounded-2xl border border-[#E5E0D8] transition-all duration-200 shadow-xs hover:border-[#B59C7D]/50 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B59C7D]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-[#111111] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#111111] text-[#E2C79A]"
                        : "bg-[#FAF8F5] text-[#4A4641]"
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
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-[#4A4641] text-sm sm:text-base leading-relaxed border-t border-[#E5E0D8]/60 mt-1">
                    <p className="pt-3.5">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
