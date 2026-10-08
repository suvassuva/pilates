export interface Testimonial {
  id: string;
  author: string;
  role: string;
  branch: string;
  rating: number;
  content: string;
  date: string;
  source: "Google Review" | "Verified Client";
  verified: boolean;
}

export interface BranchReviewStat {
  id: string;
  name: string;
  shortName: string;
  rating: number;
  reviewCount: number;
  googleReviewUrl: string;
  locationText: string;
}

export const BRANCH_REVIEWS: Record<string, BranchReviewStat> = {
  "kalyan-nagar": {
    id: "kalyan-nagar",
    name: "Dr Pilates – Kalyan Nagar",
    shortName: "Kalyan Nagar",
    rating: 4.9,
    reviewCount: 129,
    googleReviewUrl: "https://maps.google.com/?q=Dr+Pilates+Y4+Heights+Kalyan+Nagar+Bengaluru",
    locationText: "Y4 Heights, HRBR Layout"
  },
  "kothanur": {
    id: "kothanur",
    name: "Dr Pilates – Kothanur, Hennur Road",
    shortName: "Kothanur, Hennur Road",
    rating: 4.8,
    reviewCount: 12,
    googleReviewUrl: "https://maps.google.com/?q=Dr+Pilates+ANR+Arcade+Doddagubbi+Main+Road+Kothanur+Bengaluru",
    locationText: "2nd Floor, ANR Arcade, Doddagubbi Main Rd"
  }
};

export const RATING_STATS = {
  rating: 4.9,
  totalReviews: 141,
  locationCount: 2,
  satisfactionRate: "98%"
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-sunita-shroff",
    author: "Sunita Shroff",
    role: "Verified Client",
    branch: "Kalyan Nagar",
    rating: 5,
    content: "Best Pilates studio I've been to in Bangalore! The instructor is incredibly knowledgeable, patient and make sure you do every movement correctly. The studio is spotless, well-equipped and has such a positive energy. It's challenging but never intimidating - perfect for both beginners and regulars. I already see a huge difference in my posture and core strength. So glad I found this place!",
    date: "2 months ago",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-mohana-mondal",
    author: "Mohana Mondal",
    role: "Verified Client",
    branch: "Kalyan Nagar",
    rating: 5,
    content: "I've had a great experience at Dr. Pilates, Kalyan Nagar. Govinda is an excellent trainer who is knowledgeable, patient, and always pays close attention to proper form and technique. Since I started training with him, my posture has improved significantly and my back pain has reduced noticeably. Every session is well guided. Highly recommend Dr. Pilates to anyone looking to improve their strength, posture, and well-being.",
    date: "2 months ago",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-marsha-goveas",
    author: "Marsha Goveas",
    role: "Local Guide",
    branch: "Kalyan Nagar",
    rating: 5,
    content: "Seven months at this studio has completely transformed my strength, flexibility, and posture. Govind is a fantastic instructor who is patient and extremely observant. His sharp attention to detail and posture corrections helps everyone get the maximum benefit from every session. The studio has a wonderful vibe and top-notch equipment. Highly recommend!",
    date: "2 months ago",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-poornima-kamath",
    author: "Poornima Kamath",
    role: "Verified Client",
    branch: "Kothanur, Hennur Road",
    rating: 5,
    content: "I absolutely love this Pilates class! The instructor is amazing—very knowledgeable, attentive, and encouraging. Every session feels effective yet enjoyable, and I always leave feeling stronger, refreshed, and energized. Highly recommend!",
    date: "16 hours ago",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-melisha-charles",
    author: "Melisha Charles",
    role: "Verified Client",
    branch: "Kothanur, Hennur Road",
    rating: 5,
    content: "Excellent Pilates studio with great management. Lingam is an amazing instructor and is able to cater to all levels. Highly recommend if you’re looking for an alternative to the gym and want to get more regular with workouts.",
    date: "2 months ago",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-shalini-saklani",
    author: "Shalini Saklani",
    role: "Verified Client",
    branch: "Kothanur, Hennur Road",
    rating: 5,
    content: "I have had a great experience with Dr Pilates. Both the owner and the trainer (Vinod) are knowledgeable. Vinod emphasizes on slow, controlled movements with proper form rather than rushing through exercises. I highly recommend this place.",
    date: "2 months ago",
    source: "Google Review",
    verified: true
  }
];
