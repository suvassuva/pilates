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
    date: "1 month ago",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-krishna-soni",
    author: "Krishna Soni",
    role: "Verified Client",
    branch: "Kalyan Nagar",
    rating: 5,
    content: "Joined Dr. Pilates a few months ago, and I can genuinely see the difference. My posture has improved, I feel more flexible, and even my core feels much stronger. Dr. Govind is extremely observant and makes sure everyone is doing movements correctly. Definitely recommend!",
    date: "2 months ago",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-shazia-ahmed",
    author: "Shazia Ahmed",
    role: "Verified Client",
    branch: "Kalyan Nagar",
    rating: 5,
    content: "This Pilates experience has been absolutely transformative. The instructor's attention to detail is unmatched, with clear and thorough instructions. Every class brings a new challenge and works all muscle groups so you feel balanced and strong. Truly one of the best!",
    date: "4 months ago",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-shalini-saklani",
    author: "Shalini Saklani",
    role: "Verified Client",
    branch: "Kalyan Nagar",
    rating: 5,
    content: "I have had a great experience with Dr Pilates. Both the owner and the trainer (Vinod) are knowledgeable. Vinod emphasizes on slow, controlled movements with proper form rather than rushing through exercises. I highly recommend this place.",
    date: "1 month ago",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-jo-sinha",
    author: "Jo Sinha",
    role: "Verified Client",
    branch: "Kalyan Nagar",
    rating: 5,
    content: "I’ve had an amazing experience with these Pilates classes. The instructor is knowledgeable, patient, and always ensures everyone maintains the correct form. Every session is well-structured, challenging, and suitable for all fitness levels.",
    date: "1 month ago",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-noel-pancras",
    author: "Noel Pancras",
    role: "Verified Client",
    branch: "Kalyan Nagar",
    rating: 5,
    content: "Clean premises, high quality machines and welcoming atmosphere. I met one of the owners and he took time to ensure my experience was as enjoyable as possible. I would recommend this place to anyone who wants to exercise in a relaxed, professional establishment.",
    date: "1 month ago",
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
    date: "1 month ago",
    source: "Google Review",
    verified: true
  }
];
