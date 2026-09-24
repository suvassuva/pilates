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

        {/* Inquiries Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-semibold text-lg text-white mb-1">
              Have a specific clinical question or rehabilitation concern?
            </h4>
            <p className="text-neutral-400 text-sm font-body">
              Our clinical directors are available to assess your condition and guide your training.
            </p>
          </div>
          <a
            href="https://wa.me/919481003827?text=Hi%20Dr.%20Pilates,%20I%20have%20a%20clinical%20question%20regarding%20reformer%20sessions."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#8E7557] hover:bg-[#725c42] text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Ask Dr. Govinda on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
