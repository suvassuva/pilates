export interface GalleryItem {
  id: string;
  title: string;
  category: "Studio" | "Reformer Pilates" | "EMS" | "Physiotherapy" | "Training";
  image: string;
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
    title: "Premium Reformer Studio Bay",
    category: "Reformer Pilates",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200",
    alt: "Dr Pilates Reformer Pilates Studio Equipment in Kalyan Nagar Bengaluru"
  },
  {
    id: "gal-2",
    title: "Modern EMS Bio-Suite Equipment",
    category: "EMS",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200",
    alt: "EMS Electrical Muscle Stimulation Workout at Dr Pilates Studio"
  },
  {
    id: "gal-3",
    title: "Physiotherapy & Rehab Assessment Area",
    category: "Physiotherapy",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    alt: "Physiotherapy joint assessment and movement therapy at Dr Pilates"
  },
  {
    id: "gal-4",
    title: "1-on-1 Personal Training Bay",
    category: "Training",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    alt: "Personal Fitness Training Session with Coach at Dr Pilates"
  },
  {
    id: "gal-5",
    title: "Studio Lounge & Reception Aesthetics",
    category: "Studio",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
    alt: "Dr Pilates Kalyan Nagar Reception Lounge Atmosphere"
  },
  {
    id: "gal-6",
    title: "Core Alignment Reformer Carriage Work",
    category: "Reformer Pilates",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1200",
    alt: "Client carrying out Reformer Pilates movement under instructor supervision"
  },
  {
    id: "gal-7",
    title: "High-Efficiency EMS Muscle Activation",
    category: "EMS",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1200",
    alt: "20 Minute EMS Full Body Workout Session"
  },
  {
    id: "gal-8",
    title: "Postural Spine Alignment & Manual Therapy",
    category: "Physiotherapy",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200",
    alt: "Manual therapy and postural realignment session by Physiotherapist"
  }
];
