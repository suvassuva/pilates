export interface GalleryItem {
  id: string;
  title: string;
  category: "Studio" | "Reformer Pilates" | "EMS" | "Physiotherapy" | "Training";
  image: string;
  video?: string;
  alt: string;
}

export const GALLERY_CATEGORIES = [
  "All",
  "Studio",
  "Reformer Pilates",
  "EMS",
  "Physiotherapy",
  "Training"
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Reformer Pilates Training Session",
    category: "Reformer Pilates",
    image: "/videos/woman_performing_reformer.jpeg",
    alt: "Dr Pilates Reformer Pilates Studio Equipment in Kalyan Nagar Bengaluru"
  },
  {
    id: "gal-2",
    title: "Entering Dr Pilates Studio",
    category: "Studio",
    image: "/videos/woman_walking_outside.jpeg",
    video: "/videos/woman_enters_studio.mp4",
    alt: "Client entering Dr Pilates studio in Kalyan Nagar"
  },
  {
    id: "gal-3",
    title: "Physiotherapy & Ergonomic Stretching",
    category: "Physiotherapy",
    image: "/videos/woman_stretching_at_desk.jpeg",
    alt: "Physiotherapy posture assessment and desk stretch guidance"
  },
  {
    id: "gal-4",
    title: "1-on-1 Personal Training Session",
    category: "Training",
    image: "/videos/professional_woman_stretching.jpeg",
    alt: "Personal Fitness Training Session with Coach at Dr Pilates"
  },
  {
    id: "gal-5",
    title: "Studio Welcome & Reception",
    category: "Studio",
    image: "/videos/instructor_welcoming_woman.jpeg",
    alt: "Dr Pilates Kalyan Nagar Reception Welcome Atmosphere"
  },
  {
    id: "gal-6",
    title: "Wellness & Transformation Training",
    category: "Reformer Pilates",
    image: "/videos/woman_performing_reformer.jpeg",
    video: "/videos/woman_performing_wellness.mp4",
    alt: "Wellness transformation Reformer Pilates workout video"
  },
  {
    id: "gal-7",
    title: "Post-Workout Hydration & EMS Recovery",
    category: "EMS",
    image: "/videos/woman_holding_water_bottle.jpeg",
    video: "/videos/woman_drinking_water.mp4",
    alt: "Post-workout hydration and EMS recovery session"
  },
  {
    id: "gal-8",
    title: "Spine & Desk Mobility Stretch",
    category: "Physiotherapy",
    image: "/videos/woman_stretching_at_desk.jpeg",
    video: "/videos/woman_closes_laptop.mp4",
    alt: "Spinal stretch and desk mobility realignment video"
  },
  {
    id: "gal-9",
    title: "Precision Reformer Studio Bed",
    category: "Reformer Pilates",
    image: "/videos/pilates_reformer_machine.jpeg",
    alt: "State-of-the-art Reformer Pilates machine at Dr Pilates studio"
  },
  {
    id: "gal-10",
    title: "German EMS Bio-Suit Suite",
    category: "EMS",
    image: "/videos/ems_suits_displayed.jpeg",
    alt: "Advanced EMS Wireless Bio-Suits displayed inside Dr Pilates studio"
  },
  {
    id: "gal-11",
    title: "Dr Pilates Studio Interior Bay",
    category: "Studio",
    image: "/videos/pilates_studio_interior.jpeg",
    alt: "Spacious luxury interior view of Dr Pilates studio"
  }
];
