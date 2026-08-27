"use client";

import React, { useState } from "react";
import { FAQS, FAQ_CATEGORIES, FAQItem } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/home/CTASection";
import { ChevronDown, HelpCircle, Search, Sparkles } from "lucide-react";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const filteredFaqs = FAQS.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="pt-28 pb-12">
      {/* Page Hero */}
      <section className="py-16 bg-[#121417] text-[#FAF8F5] relative overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1 rounded-full border border-[#C5A059]/20 inline-block">
              Got Questions?
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#FAF8F5]">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-[#8C929D] leading-relaxed">
              Find instant answers regarding Reformer Pilates, EMS bio-suit workouts, Physiotherapy rehab, studio locations, and booking procedures.
            </p>
          </div>
        </Container>
      </section>

      {/* Main FAQ Accordion */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container size="small">
          {/* Search Bar */}
          <div className="relative mb-8 max-w-xl mx-auto">
            <Search className="w-5 h-5 text-[#5C626D] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. Reformer, EMS, Kalyan Nagar)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-[#121417]/15 text-sm text-[#121417] focus:outline-none focus:ring-2 focus:ring-[#C5A059] shadow-xs"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer focus:outline-none ${
                    isActive
                      ? "bg-[#121417] text-[#FAF8F5] shadow-xs border border-[#C5A059]/40"
                      : "bg-[#F3EEE7] text-[#121417] hover:bg-[#FAF8F5]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-3xl border border-[#121417]/10 p-8">
                <HelpCircle className="w-10 h-10 text-[#C5A059] mx-auto mb-2" />
                <h3 className="text-lg font-bold text-[#121417]">No matching questions found</h3>
                <p className="text-xs text-[#5C626D] mt-1">
                  Try searching for another keyword or contact our desk directly via WhatsApp.
                </p>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-[#121417]/10 shadow-xs overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer hover:bg-[#F3EEE7]/30"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-bold font-display text-[#121417] flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-0 text-sm text-[#5C626D] leading-relaxed border-t border-[#121417]/5 animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
