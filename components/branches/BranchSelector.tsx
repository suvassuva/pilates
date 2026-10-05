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
      {/* 2 Clean & Compact Studio Cards Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {BRANCHES.map((branch: Branch) => (
          <div
            key={branch.id}
            id={branch.id}
            className="bg-[#FFFFFF] text-[#1E1B18] rounded-2xl sm:rounded-3xl border border-[#EAE4DC] p-5 sm:p-6 shadow-xs hover:border-[#962D2D]/40 hover:shadow-sm transition-all duration-300 flex flex-col justify-between scroll-mt-28"
          >
            <div>
              {/* Card Header: Studio Title & Rating Aligned */}
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#EAE4DC] min-h-[3.75rem] sm:min-h-[4.25rem]">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1E1B18] leading-snug flex-1">
                  {branch.name}
                </h3>

                {branch.rating > 0 && (
                  <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                    <div className="flex items-center gap-1 bg-[#FAF8F5] text-[#1E1B18] text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border border-[#EAE4DC]">
                      <Star className="w-3 h-3 fill-[#962D2D] text-[#962D2D]" />
                      <span>{branch.rating} ★</span>
                      {branch.reviewCount > 0 && (
                        <span className="text-[#78716C] font-normal">
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
                        className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-[#962D2D] hover:text-[#7D1F1F] font-semibold bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#EAE4DC] hover:border-[#962D2D]/40 transition-colors"
                      >
                        <span>Reviews</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Card Info Rows */}
              <div className="py-4 space-y-3">
                {/* Full Address */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF0EE]/40 border border-[#EAE4DC] min-h-[72px]">
                  <MapPin className="w-4 h-4 text-[#962D2D] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-[13px] text-[#524C46] leading-relaxed">
                    <strong className="text-[#1E1B18] font-semibold block mb-0.5">Studio Address:</strong>
                    <span>{branch.address.fullText}</span>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF0EE]/40 border border-[#EAE4DC] min-h-[72px]">
                  <Clock className="w-4 h-4 text-[#962D2D] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-[13px] text-[#524C46] leading-relaxed">
                    <strong className="text-[#1E1B18] font-semibold block mb-0.5">Operating Hours:</strong>
                    <span>{branch.hours}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-1">
                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#962D2D] mb-2">
                    Studio Highlights &amp; Equipment
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {branch.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-[#524C46]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#962D2D] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#EAE4DC] space-y-2.5">
              <Button
                href={`/appointment?branch=${branch.id}`}
                variant="primary"
                size="sm"
                fullWidth
                icon={<Calendar className="w-3.5 h-3.5" />}
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
                  className="px-1.5 sm:px-2 text-[11px] sm:text-xs"
                  icon={<MessageSquare className="w-3.5 h-3.5 text-white" />}
                >
                  WhatsApp
                </Button>

                <Button
                  href={generateCallUrl(branch.id)}
                  variant="outline"
                  size="sm"
                  fullWidth
                  className="px-1.5 sm:px-2 text-[11px] sm:text-xs border-[#EAE4DC] text-[#1E1B18] hover:bg-[#FAF0EE] hover:text-[#962D2D] hover:border-[#962D2D]/35 bg-[#FFFFFF]"
                  icon={<Phone className="w-3.5 h-3.5 text-[#962D2D]" />}
                >
                  Call Now
                </Button>

                <Button
                  href={branch.mapUrl}
                  external
                  variant="outline"
                  size="sm"
                  fullWidth
                  className="px-1.5 sm:px-2 text-[11px] sm:text-xs border-[#EAE4DC] text-[#1E1B18] hover:bg-[#FAF0EE] hover:text-[#962D2D] hover:border-[#962D2D]/35 bg-[#FFFFFF]"
                  icon={<Navigation className="w-3.5 h-3.5 text-[#962D2D]" />}
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
