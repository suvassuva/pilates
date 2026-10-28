"use client";

import React from "react";
import {
  Phone,
  Clock,
  Star,
  CheckCircle2,
  MessageSquare,
  Navigation,
  Calendar,
  MapPin,
  ExternalLink
} from "lucide-react";
import { BRANCHES, Branch, generateWhatsAppUrl, generateCallUrl } from "@/data/branches";
import { Button } from "../ui/Button";

interface BranchSelectorProps {
  className?: string;
  defaultBranchId?: string;
}

export const BranchSelector: React.FC<BranchSelectorProps> = ({
  className = ""
}) => {
  return (
    <section className={`w-full ${className}`}>
      {/* 2 Clean & Compact Studio Cards Side-by-Side (Clean rectangular, 12px restrained radius) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {BRANCHES.map((branch: Branch) => (
          <div
            key={branch.id}
            id={branch.id}
            className="bg-[#FFFFFF] text-[#282622] rounded-xl border border-[#DDD3C8] p-5 sm:p-7 hover:border-[#C5A990] transition-colors duration-200 flex flex-col justify-between scroll-mt-28 h-full"
          >
            <div className="flex-1 flex flex-col">
              {/* Card Header: Studio Title & Rating Aligned */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-[#DDD3C8] min-h-[4.5rem] lg:min-h-[5rem]">
                <h3 className="text-xl sm:text-2xl font-normal font-display text-[#282622] leading-snug flex-1">
                  {branch.name}
                </h3>

                {branch.rating > 0 && (
                  <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                    <div className="flex items-center gap-1 bg-[#F7F3ED] text-[#282622] text-[11px] sm:text-xs font-medium font-body px-2.5 py-1 rounded-[6px] border border-[#DDD3C8]">
                      <Star className="w-3 h-3 fill-[#C5A990] text-[#C5A990]" />
                      <span>{branch.rating} ★</span>
                      {branch.reviewCount > 0 && (
                        <span className="text-[#6E685E] font-normal">
                          ({branch.reviewCount})
                        </span>
                      )}
                    </div>
                    {branch.googleReviewUrl && (
                      <a
                        href={branch.googleReviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Google Reviews"
                        className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-[#282622] font-medium font-body bg-[#F7F3ED] px-2.5 py-1 rounded-[6px] border border-[#DDD3C8] hover:border-[#282622] transition-colors"
                      >
                        <span>Reviews</span>
                        <ExternalLink className="w-2.5 h-2.5 text-[#6E685E]" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Card Info Rows */}
              <div className="py-4 space-y-3 flex-1 flex flex-col">
                {/* Full Address (Warm Ivory, 8px radius) */}
                <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#F7F3ED] border border-[#DDD3C8] min-h-[82px] sm:min-h-[86px]">
                  <MapPin className="w-4 h-4 text-[#C5A990] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-[13px] text-[#6E685E] leading-relaxed font-body">
                    <strong className="text-[#282622] font-medium block mb-0.5">Studio Address:</strong>
                    <span>{branch.address.fullText}</span>
                  </div>
                </div>

                {/* Timings (Warm Ivory, 8px radius) */}
                <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#F7F3ED] border border-[#DDD3C8] min-h-[76px] sm:min-h-[80px]">
                  <Clock className="w-4 h-4 text-[#C5A990] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-[13px] text-[#6E685E] leading-relaxed font-body">
                    <strong className="text-[#282622] font-medium block mb-0.5">Operating Hours:</strong>
                    <span>{branch.hours}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-2 mt-auto">
                  <h4 className="text-[11px] font-medium font-body uppercase tracking-wider text-[#282622] mb-2.5">
                    Studio Highlights &amp; Equipment
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {branch.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-[#6E685E] font-body"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A990] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#DDD3C8] space-y-2.5">
              <Button
                href={`/appointment?branch=${branch.id}`}
                variant="primary"
                size="md"
                fullWidth
                icon={<Calendar className="w-4 h-4" />}
              >
                Book Appointment
              </Button>

              <div className="grid grid-cols-3 gap-2">
                <Button
                  href={generateWhatsAppUrl(branch.id)}
                  external
                  variant="whatsapp"
                  size="sm"
                  fullWidth
                  className="px-1.5 sm:px-2 text-xs"
                  icon={<MessageSquare className="w-3.5 h-3.5 text-white" />}
                >
                  WhatsApp
                </Button>

                <Button
                  href={generateCallUrl(branch.id)}
                  variant="outline"
                  size="sm"
                  fullWidth
                  className="px-1.5 sm:px-2 text-xs"
                  icon={<Phone className="w-3.5 h-3.5 text-[#282622]" />}
                >
                  Call Now
                </Button>

                <Button
                  href={branch.mapUrl}
                  external
                  variant="outline"
                  size="sm"
                  fullWidth
                  className="px-1.5 sm:px-2 text-xs"
                  icon={<Navigation className="w-3.5 h-3.5 text-[#282622]" />}
                >
                  Directions
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
