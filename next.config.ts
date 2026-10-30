import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

// Ensure high-res bright studio assets are active in public/images
try {
  const imagesDir = path.join(process.cwd(), "public", "images");
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Blog bright banner
  const sourceBlogBanner = "C:\\Users\\Electrobot\\.gemini\\antigravity\\brain\\bab38876-ac06-4b52-bec0-458c53839121\\dr_pilates_luxury_studio_banner_1793362976365.jpg";
  if (fs.existsSync(sourceBlogBanner)) {
    fs.copyFileSync(sourceBlogBanner, path.join(imagesDir, "dr_pilates_bright_studio_banner.jpg"));
    fs.copyFileSync(sourceBlogBanner, path.join(imagesDir, "reformer_studio_unsplash.jpg"));
  }

  // Hero Amanda-style luxury photo
  const sourceHero = "C:\\Users\\Electrobot\\.gemini\\antigravity\\brain\\bab38876-ac06-4b52-bec0-458c53839121\\dr_pilates_hero_banner_1793363484824.jpg";
  if (fs.existsSync(sourceHero)) {
    fs.copyFileSync(sourceHero, path.join(imagesDir, "dr_pilates_hero_amanda_style.jpg"));
    fs.copyFileSync(sourceHero, path.join(imagesDir, "dr_pilates_hero_banner_clean.jpg"));
    fs.copyFileSync(sourceHero, path.join(imagesDir, "reformer_action_unsplash.jpg"));
  }
} catch {
  // Silent fallback
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
