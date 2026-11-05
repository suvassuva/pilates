"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, Layers, MapPin, BookOpen, Camera } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Sparkles },
  { label: "Services", href: "/services", icon: Layers },
  { label: "Studios", href: "/branches", icon: MapPin },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Gallery", href: "/gallery", icon: Camera }
];

export const MobileStickyCTA: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside
      aria-label="Mobile App Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#F7F3ED]/95 backdrop-blur-md border-t border-[#DDD3C8] shadow-[0_-4px_20px_rgba(40,38,34,0.06)] pb-[max(0.35rem,env(safe-area-inset-bottom))]"
    >
      <nav className="grid grid-cols-6 items-center max-w-md mx-auto pt-1 pb-0.5 px-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-0.5 rounded-lg active:scale-95 transition-all duration-150 group ${
                isActive ? "text-[#5C604E]" : "text-[#786D62] hover:text-[#282622]"
              }`}
            >
              <div
                className={`w-9 h-7 rounded-full flex items-center justify-center transition-colors ${
                  isActive
                    ? "bg-[#5C604E]/12 text-[#5C604E]"
                    : "text-[#786D62] group-hover:text-[#282622]"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "stroke-[2.25] text-[#5C604E]" : "stroke-[1.75]"
                  }`}
                />
              </div>
              <span
                className={`text-[10px] sm:text-[11px] font-body tracking-tight mt-0.5 leading-none transition-colors ${
                  isActive
                    ? "font-semibold text-[#5C604E]"
                    : "font-medium text-[#786D62]"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
