"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, MessageSquare, Calendar, Navigation, ArrowRight } from "lucide-react";
import { Branch, generateWhatsAppUrl, generateCallUrl } from "@/data/branches";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

interface BranchCardProps {
  branch: Branch;
  onSelect?: (branchId: string) => void;
}

export const BranchCard: React.FC<BranchCardProps> = ({ branch, onSelect }) => {
  return (
    <div className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#121417]/10 shadow-md hover-lift flex flex-col justify-between">
      <div>
        {/* Branch Header Image */}
        <div className="relative h-56 w-full">
          <Image
            src={branch.image}
            alt={branch.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/80 via-transparent to-transparent flex items-end p-6">
            <div className="flex items-center justify-between w-full">
              <Badge variant={branch.isMainBranch ? "gold" : "dark"}>
                {branch.isMainBranch ? "Kalyan Nagar Flagship" : "Branch 02 Location"}
              </Badge>
              {branch.rating > 0 && (
                <span className="text-xs font-bold text-white bg-[#121417]/90 px-3 py-1 rounded-full border border-[#C5A059]/40">
                  {branch.rating} ★ (129+ reviews)
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold font-display text-[#121417]">
            {branch.name}
          </h3>
          <p className="text-xs text-[#5C626D] mt-1 mb-4 leading-relaxed">
            {branch.tagline}
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-[#121417] mb-6 bg-white p-4 rounded-2xl border border-[#121417]/5">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span className="leading-snug">{branch.address.fullText}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
              <a href={generateCallUrl(branch.id)} className="font-semibold hover:text-[#C5A059]">
                {branch.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{branch.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTAs */}
      <div className="p-6 pt-0 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Button
            href={`/appointment?branch=${branch.id}`}
            variant="gold"
            size="sm"
            fullWidth
            icon={<Calendar className="w-4 h-4" />}
          >
            Book
          </Button>

          <Button
            href={generateWhatsAppUrl(branch.id)}
            external
            variant="whatsapp"
            size="sm"
            fullWidth
            icon={<MessageSquare className="w-4 h-4 text-white" />}
          >
            WhatsApp
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            href={generateCallUrl(branch.id)}
            variant="secondary"
            size="sm"
            fullWidth
            icon={<Phone className="w-3.5 h-3.5 text-[#C5A059]" />}
          >
            Call
          </Button>

          <Button
            href={branch.mapUrl}
            external
            variant="outline"
            size="sm"
            fullWidth
            icon={<Navigation className="w-3.5 h-3.5" />}
          >
            Directions
          </Button>
        </div>
      </div>
    </div>
  );
};
