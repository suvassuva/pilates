import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Branch } from "@/data/branches";
import { Button } from "../ui/Button";

interface BranchMapProps {
  branch: Branch;
}

export const BranchMap: React.FC<BranchMapProps> = ({ branch }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-[#121417]/10 bg-[#FAF8F5] shadow-md flex flex-col h-full min-h-[350px]">
      {branch.embedMapUrl ? (
        <iframe
          title={`Google Map location for ${branch.name}`}
          src={branch.embedMapUrl}
          className="w-full h-full min-h-[300px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#F3EEE7]/70">
          <div className="w-14 h-14 rounded-full bg-[#121417] text-[#C5A059] flex items-center justify-center mb-3 shadow-md">
            <MapPin className="w-7 h-7" />
          </div>
          <h4 className="text-lg font-bold text-[#121417] font-display">
            Map View Placeholder
          </h4>
          <p className="text-xs text-[#5C626D] max-w-xs mt-1">
            {branch.statusText || "Location pin map for Branch 02 will update upon official launch."}
          </p>
        </div>
      )}

      {/* Floating Directions overlay bar */}
      <div className="p-4 bg-[#121417] text-[#FAF8F5] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Navigation className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-medium truncate max-w-[200px] sm:max-w-xs">
            {branch.address.area}, {branch.address.city}
          </span>
        </div>

        <Button
          href={branch.mapUrl}
          external
          variant="gold"
          size="sm"
          icon={<ExternalLink className="w-3.5 h-3.5" />}
        >
          Get Directions
        </Button>
      </div>
    </div>
  );
};
