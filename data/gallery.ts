export interface GalleryItem {
  id: string;
  title: string;
  category: "Reformer Pilates" | "Cadillac & Trapeze" | "Personal Training" | "Stability Chair";
  image: string;
  video: string;
  alt: string;
}

export const GALLERY_CATEGORIES = [
  "All",
  "Reformer Pilates",
  "Cadillac & Trapeze",
  "Personal Training",
  "Stability Chair"
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Reformer Pike & Core Flow",
    category: "Reformer Pilates",
    image: "/videos/client_reformer_pike_core_thumb.jpg",
    video: "/videos/client_reformer_pike_core.mp4",
    alt: "Client performing advanced Reformer Pilates pike core conditioning at Dr Pilates Bengaluru"
  },
  {
    id: "gal-2",
    title: "Reformer Squats with Pilates Ring",
    category: "Reformer Pilates",
    image: "/videos/client_reformer_squats_ring_thumb.jpg",
    video: "/videos/client_reformer_squats_ring.mp4",
    alt: "Client executing Reformer squat pulses with resistance magic circle at Dr Pilates Bengaluru"
  },
  {
    id: "gal-3",
    title: "Reformer Lunges & Glute Alignment",
    category: "Reformer Pilates",
    image: "/videos/client_reformer_lunge_glute_thumb.jpg",
    video: "/videos/client_reformer_lunge_glute.mp4",
    alt: "Reformer carriage lunges for lower-body stability and glute strength at Dr Pilates"
  },
  {
    id: "gal-4",
    title: "Cadillac Trapeze Suspension & Balance",
    category: "Cadillac & Trapeze",
    image: "/videos/client_cadillac_trapeze_suspension_thumb.jpg",
    video: "/videos/client_cadillac_trapeze_suspension.mp4",
    alt: "Cadillac Trapeze Table suspension acrobatics and full body extension at Dr Pilates"
  },
  {
    id: "gal-5",
    title: "1-on-1 Guided Reformer Side Plank",
    category: "Personal Training",
    image: "/videos/client_trainer_side_plank_thumb.jpg",
    video: "/videos/client_trainer_side_plank.mp4",
    alt: "Personal trainer coaching client through Reformer side plank stability at Dr Pilates"
  },
  {
    id: "gal-6",
    title: "Cadillac Inverted Arch & Spinal Decompression",
    category: "Cadillac & Trapeze",
    image: "/videos/client_cadillac_inverted_arch_thumb.jpg",
    video: "/videos/client_cadillac_inverted_arch.mp4",
    alt: "Cadillac Trapeze inverted stretch for spinal decompression and hamstring flexibility"
  },
  {
    id: "gal-7",
    title: "Stability Chair & Ring Duo Workout",
    category: "Stability Chair",
    image: "/videos/client_stability_chair_duo_thumb.jpg",
    video: "/videos/client_stability_chair_duo.mp4",
    alt: "Duo client workout on Pilates Stability Chairs with resistance rings at Dr Pilates"
  }
];
