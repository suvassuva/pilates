"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "919481003827";
const DISPLAY_NUMBER = "+91 94810 03827";

export const WhatsAppPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [message, setMessage] = useState("");

  // Prompt tooltip after 2.5 seconds to attract attention gently
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = (customText?: string) => {
    const textToSend =
      customText ||
      message.trim() ||
      "Hi Dr. Pilates, I would like to enquire about sessions and appointments.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const quickMessages = [
    "Book an Appointment",
    "Trial Class & Pricing",
    "Reformer Pilates Enquiry",
    "Physiotherapy Consultation"
  ];

  return (
    <div className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      {/* Tooltip Notification Bubble (shown initially when popup is closed) */}
      {!isOpen && showTooltip && (
        <div className="mb-3 mr-1 bg-white text-[#111111] p-3 rounded-2xl shadow-xl border border-[#E5E0D8] max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#7A756D] hover:text-[#111111] p-0.5 rounded-full"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-start gap-2.5 pr-4">
            <div className="w-2 h-2 rounded-full bg-[#25D366] mt-1.5 shrink-0 animate-pulse" />
            <div>
              <p className="text-xs font-bold text-[#111111]">Chat with Dr. Pilates</p>
              <p className="text-[11px] text-[#5A554E] leading-snug mt-0.5">
                Have questions about our sessions? We&apos;re here on WhatsApp!
              </p>
              <button
                onClick={() => {
                  setIsOpen(true);
                  setShowTooltip(false);
                }}
                className="text-[11px] font-semibold text-[#1E7E34] hover:underline mt-1.5 inline-block"
              >
                Open chat →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Chat Card Popup */}
      {isOpen && (
        <div className="mb-3 w-[330px] sm:w-[360px] bg-white rounded-3xl shadow-2xl border border-[#E5E0D8] overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 flex flex-col">
          {/* Card Header (WhatsApp Brand Emerald) */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white p-1 border-2 border-white/30 shrink-0">
                <Image
                  src="/logo-dark.png"
                  alt="Dr Pilates"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#075E54]" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight text-white">Dr. Pilates Bengaluru</h3>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  Online • {DISPLAY_NUMBER}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body Wallpaper */}
          <div className="p-4 bg-[#EFEAE2] flex-1 space-y-3 max-h-[300px] overflow-y-auto">
            {/* Automated Welcome Bubble */}
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs text-xs text-[#262626] max-w-[88%] leading-relaxed border border-[#E0DCD5]">
              <p className="font-medium">Hello & welcome to Dr. Pilates! 👋</p>
              <p className="mt-1 text-[#4A4641]">
                How can we assist you today? Choose a quick question below or type your enquiry:
              </p>
              <span className="text-[9px] text-[#8C877D] block text-right mt-1">Just now</span>
            </div>

            {/* Quick Action Chips */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#7A756D]">
                Quick Questions:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {quickMessages.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOpenChat(`Hi Dr Pilates, I would like to ask about: ${item}`)}
                    className="text-[11px] bg-white hover:bg-[#FAF8F5] text-[#111111] px-2.5 py-1.5 rounded-xl border border-[#D5D0C8] shadow-2xs hover:border-[#25D366] hover:text-[#1E7E34] transition-all text-left font-medium cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Input & Start Button */}
          <div className="p-3 bg-white border-t border-[#E5E0D8] space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleOpenChat();
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 text-xs px-3 py-2 rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-[#25D366] text-[#111111] bg-[#FAF8F5]"
              />
              <button
                onClick={() => handleOpenChat()}
                className="w-8 h-8 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center transition-all cursor-pointer shadow-xs shrink-0"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => handleOpenChat()}
              className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99] cursor-pointer"
            >
              {/* WhatsApp Icon */}
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                strokeWidth="0"
                fill="currentColor"
                className="fill-current w-4 h-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chat on WhatsApp ({DISPLAY_NUMBER})</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
          setShowTooltip(false);
        }}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer focus:outline-none"
        aria-label={isOpen ? "Close WhatsApp popup" : "Open WhatsApp chat popup with 94810 03827"}
      >
        {/* Subtle Pulse Halo */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {isOpen ? (
          <X className="w-6 h-6 text-white relative z-10" />
        ) : (
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            stroke="currentColor"
            strokeWidth="0"
            fill="currentColor"
            className="fill-current w-7 h-7 text-white relative z-10"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}

        {/* Online Status Green Dot */}
        {!isOpen && (
          <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
        )}
      </button>
    </div>
  );
};
