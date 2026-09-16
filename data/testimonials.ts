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
    locationText: "Above Starbucks, HRBR Layout"
  },
  "kothanur": {
    id: "kothanur",
    name: "Dr Pilates – Kothanur",
    shortName: "Kothanur",
    rating: 4.8,
    reviewCount: 12,
    googleReviewUrl: "https://maps.google.com/?q=Dr+Pilates+ANR+Arcade+Doddagubbi+Main+Road+Kothanur+Bengaluru",
    locationText: "ANR Arcade, Doddagubbi Main Rd"
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
    id: "review-1",
    author: "Sneha Reddy",
    role: "IT Professional",
    branch: "Kalyan Nagar",
    rating: 5,
    content: "Dr Pilates Kalyan Nagar has completely transformed my posture and relieved my chronic lower back stiffness from long desk hours. The Reformer machines are top tier and the instructors pay incredible attention to form!",
    date: "Recent Google Review",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-4",
    author: "Ananya Sharma",
    role: "Architect",
    branch: "Kothanur",
    rating: 5,
    content: "So thrilled that Dr Pilates is now open in Kothanur on Doddagubbi Main Road! The studio is peaceful, bright, and the 1-on-1 Reformer guidance has made a world of difference for my core strength and spinal mobility.",
    date: "Recent Google Review",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-3",
    author: "Dr. Meera Nambiar",
    role: "Physician",
    branch: "Kalyan Nagar",
    rating: 5,
    content: "As a doctor myself, I appreciate their clinical approach to movement. The physiotherapy and personalized rehab guidance helped me recover post knee strain safely. Exceptional studio aesthetics and hygiene.",
    date: "Recent Google Review",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-5",
    author: "Karthik Raja",
    role: "Tech Consultant",
    branch: "Kothanur",
    rating: 5,
    content: "EMS training at the Kothanur branch is phenomenal! In just 20 minutes, every muscle group is worked thoroughly without stressing the joints. The personalized attention at ANR Arcade is unmatched.",
    date: "Recent Google Review",
    source: "Google Review",
    verified: true
  },
  {
    id: "review-2",
    author: "Vikram Malhotra",
    role: "Entrepreneur",
    branch: "Kalyan Nagar",
    rating: 5,
    content: "EMS training here is a game changer! Being able to get a thorough, intense full body workout in just 20 minutes fits perfectly into my packed schedule. Highly professional environment above Starbucks Y4 Heights.",
    date: "Recent Google Review",
    source: "Google Review",
    verified: true
  }
];
