"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  CheckCircle2,
  MessageSquare,
  Navigation,
  Calendar,
  Info
} from "lucide-react";
import { Branch, generateWhatsAppUrl, generateCallUrl } from "@/data/branches";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { BranchMap } from "./BranchMap";

interface BranchDetailsProps {
  branch: Branch;
}

export const BranchDetails: React.FC<BranchDetailsProps> = ({ branch }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Status Alert */}
      {branch.statusText && (
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-start gap-2.5 text-xs sm:text-sm text-[#FAF8F5]">
          <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-[#C5A059]">Location Notice:</strong>{" "}
            {branch.statusText}
          </div>
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Left Side: Branch Specs & Info */}
        <div className="lg:col-span-7 bg-[#1A1D20] text-[#FAF8F5] rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-[#282C32] shadow-md flex flex-col justify-between">
          <div>
            {/* Header badges */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
              <div className="flex items-center gap-2">
                <Badge variant={branch.isMainBranch ? "gold" : "outline"}>
                  {branch.isMainBranch ? "Flagship Studio" : "Doddagubbi Studio"}
                </Badge>
                {branch.rating > 0 && (
                  <div className="flex items-center gap-1 bg-[#0D0F12] text-[#FAF8F5] text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border border-[#C5A059]/30">
                    <Star className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
                    <span>{branch.rating} ★</span>
                    {branch.reviewCount > 0 && (
                      <span className="text-[#949BA6] font-normal">
                        ({branch.reviewCount}+)
                      </span>
                    )}
                  </div>
                )}
              </div>
              <span className="text-[10px] sm:text-xs text-[#949BA6] font-medium flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#C5A059]" />
                {branch.hours}
              </span>
            </div>

            {/* Title & Tagline */}
            <h3 className="text-xl sm:text-3xl font-bold font-display text-[#FAF8F5] mb-1">
              {branch.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#949BA6] mb-4 leading-relaxed">
              {branch.tagline}
            </p>

            {/* Contact Details List */}
            <div className="space-y-3 mb-6 bg-[#14171C] p-3.5 sm:p-5 rounded-2xl border border-[#282C32]">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#0D0F12] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[#949BA6]">
                    Studio Address
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-[#FAF8F5] leading-snug mt-0.5">
                    {branch.address.fullText}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#0D0F12] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[#949BA6]">
                    Desk Direct Phone
                  </h4>
                  <a
                    href={generateCallUrl(branch.id)}
                    className="text-xs sm:text-base font-bold text-[#FAF8F5] hover:text-[#C5A059] transition-colors"
                  >
                    {branch.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Branch Features / Highlights */}
            <div className="mb-6">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#C5A059] mb-2">
                Branch Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {branch.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-[#FAF8F5] font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span className="text-[#FAF8F5]/90">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#282C32] grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
            <Button
              href={`/appointment?branch=${branch.id}`}
              variant="gold"
              size="sm"
              className="col-span-2 sm:flex-1"
              icon={<Calendar className="w-3.5 h-3.5" />}
            >
              Book Appointment
            </Button>

            <Button
              href={generateWhatsAppUrl(branch.id)}
              external
              variant="whatsapp"
              size="sm"
              icon={<MessageSquare className="w-3.5 h-3.5" />}
            >
              WhatsApp
            </Button>

            <Button
              href={generateCallUrl(branch.id)}
              variant="outline"
              size="sm"
              className="border-[#FAF8F5]/30 text-[#FAF8F5] hover:bg-[#FAF8F5] hover:text-[#121417]"
              icon={<Phone className="w-3.5 h-3.5 text-[#C5A059]" />}
            >
              Call Now
            </Button>

            <Button
              href={branch.mapUrl}
              external
              variant="ghost"
              size="sm"
              className="col-span-2 sm:col-auto text-[#C5A059]"
              icon={<Navigation className="w-3.5 h-3.5" />}
            >
              Directions
            </Button>
          </div>
        </div>

        {/* Right Side: Image & Map View */}
        <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
          {/* Branch Image */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md h-48 sm:h-72 border border-[#282C32] group">
            <Image
              src={branch.image}
              alt={branch.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12]/90 via-transparent to-transparent flex items-end p-4 sm:p-6">
              <div>
                <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest">
                  Studio View
                </span>
                <h4 className="text-base sm:text-xl font-bold font-display text-white">
                  {branch.shortName} Studio
                </h4>
              </div>
            </div>
          </div>

          {/* Branch Map Embed */}
          <div className="flex-1 min-h-[250px]">
            <BranchMap branch={branch} />
          </div>
        </div>
      </div>
    </div>
  );
};
