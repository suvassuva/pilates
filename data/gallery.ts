export type GalleryItemType = "video" | "image";

export type GalleryCategory =
  | "All"
  | "Reformer Pilates"
  | "Cadillac & Trapeze"
  | "Stability Chair"
  | "Personal Training"
  | "EMS Training"
  | "Studio & Ambience";

export interface GalleryItem {
  id: string;
  type: GalleryItemType;
  title: string;
  category: "Reformer Pilates" | "Cadillac & Trapeze" | "Personal Training" | "Stability Chair" | "EMS Training" | "Studio & Ambience";
  image: string;
  video?: string;
  alt: string;
}

export const GALLERY_CATEGORIES = [
  "All",
  "Reformer Pilates",
  "Cadillac & Trapeze",
  "Stability Chair",
  "Personal Training",
  "EMS Training",
  "Studio & Ambience"
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-img-1",
    type: "image",
    title: "Reformer Studio Bay & Merrithew Equipment",
    category: "Studio & Ambience",
    image: "/images/studio_interior_reformer_beds.webp",
    alt: "Dr Pilates spacious Kalyan Nagar studio floor with SPX Max Reformer beds and signature arches"
  },
  {
    id: "gal-1",
    type: "video",
    title: "Reformer Pike & Core Flow",
    category: "Reformer Pilates",
    image: "/videos/client_reformer_pike_core_thumb.jpg",
    video: "/videos/client_reformer_pike_core.mp4",
    alt: "Client performing advanced Reformer Pilates pike core conditioning at Dr Pilates Bengaluru"
  },
  {
    id: "gal-img-2",
    type: "image",
    title: "Cadillac Trapeze Inverted Vertical Suspension",
    category: "Cadillac & Trapeze",
    image: "/images/cadillac_trapeze_vertical_inversion.webp",
    alt: "Client performing vertical inverted trapeze suspension and spinal decompression at Dr Pilates"
  },
  {
    id: "gal-2",
    type: "video",
    title: "Reformer Squats with Pilates Ring",
    category: "Reformer Pilates",
    image: "/videos/client_reformer_squats_ring_thumb.jpg",
    video: "/videos/client_reformer_squats_ring.mp4",
    alt: "Client executing Reformer squat pulses with resistance magic circle at Dr Pilates Bengaluru"
  },
  {
    id: "gal-img-3",
    type: "image",
    title: "1-on-1 Guided Reformer High Plank",
    category: "Personal Training",
    image: "/images/reformer_plank_trainer_guidance.webp",
    alt: "Certified instructor coaching client through Reformer carriage high plank form at Dr Pilates"
  },
  {
    id: "gal-3",
    type: "video",
    title: "Reformer Lunges & Glute Alignment",
    category: "Reformer Pilates",
    image: "/videos/client_reformer_lunge_glute_thumb.jpg",
    video: "/videos/client_reformer_lunge_glute.mp4",
    alt: "Reformer carriage lunges for lower-body stability and glute strength at Dr Pilates"
  },
  {
    id: "gal-img-4",
    type: "image",
    title: "Stability Chair Core Balance & Bird-Dog",
    category: "Stability Chair",
    image: "/images/stability_chair_balance_core.webp",
    alt: "Client executing advanced single-leg balance and core extension on Pilates Stability Chair"
  },
  {
    id: "gal-4",
    type: "video",
    title: "Cadillac Trapeze Suspension & Balance",
    category: "Cadillac & Trapeze",
    image: "/videos/client_cadillac_trapeze_suspension_thumb.jpg",
    video: "/videos/client_cadillac_trapeze_suspension.mp4",
    alt: "Cadillac Trapeze Table suspension acrobatics and full body extension at Dr Pilates"
  },
  {
    id: "gal-img-5",
    type: "image",
    title: "Cadillac Trapeze Supported Backbend Arch",
    category: "Cadillac & Trapeze",
    image: "/images/cadillac_trapeze_suspension_arch.webp",
    alt: "Supported spinal backbend suspension arch on Cadillac Trapeze Table overlooking greenery"
  },
  {
    id: "gal-5",
    type: "video",
    title: "1-on-1 Guided Reformer Side Plank",
    category: "Personal Training",
    image: "/videos/client_trainer_side_plank_thumb.jpg",
    video: "/videos/client_trainer_side_plank.mp4",
    alt: "Personal trainer coaching client through Reformer side plank stability at Dr Pilates"
  },
  {
    id: "gal-img-6",
    type: "image",
    title: "Advanced Reformer Backbend Wheel & Extension",
    category: "Reformer Pilates",
    image: "/images/reformer_advanced_backbend_bridge.webp",
    alt: "Advanced Reformer carriage backbend bridge with single leg vertical extension"
  },
  {
    id: "gal-6",
    type: "video",
    title: "Cadillac Inverted Arch & Spinal Decompression",
    category: "Cadillac & Trapeze",
    image: "/videos/client_cadillac_inverted_arch_thumb.jpg",
    video: "/videos/client_cadillac_inverted_arch.mp4",
    alt: "Cadillac Trapeze inverted stretch for spinal decompression and hamstring flexibility"
  },
  {
    id: "gal-img-7",
    type: "image",
    title: "Precision Kneeling Chest Expansion & Alignment",
    category: "Personal Training",
    image: "/images/reformer_kneeling_chest_expansion.webp",
    alt: "Reformer kneeling chest expansion posture training with personal trainer supervision"
  },
  {
    id: "gal-7",
    type: "video",
    title: "Stability Chair & Ring Duo Workout",
    category: "Stability Chair",
    image: "/videos/client_stability_chair_duo_thumb.jpg",
    video: "/videos/client_stability_chair_duo.mp4",
    alt: "Duo client workout on Pilates Stability Chairs with resistance rings at Dr Pilates"
  },
  {
    id: "gal-img-8",
    type: "image",
    title: "Cadillac Trapeze Horizontal Inversion & Core Control",
    category: "Cadillac & Trapeze",
    image: "/images/cadillac_trapeze_horizontal_extension.webp",
    alt: "Cadillac Trapeze horizontal suspension and hamstring extension conditioning"
  },
  {
    id: "gal-img-9",
    type: "image",
    title: "Wireless EMS Bio-Suit & Advanced Stimulation Console",
    category: "EMS Training",
    image: "/images/ems_bio_suit_trainer_device.webp",
    alt: "Certified EMS coach demonstrating wireless bio-electric stimulation suit and station at Dr Pilates"
  },
  {
    id: "gal-img-10",
    type: "image",
    title: "Warm Ambient Studio & Illuminated Arched Bays",
    category: "Studio & Ambience",
    image: "/images/studio_ambient_reformer_room.webp",
    alt: "Luxury ambient lighting, backlit arch mirrors, and reformer stations inside Dr Pilates studio"
  }
];
