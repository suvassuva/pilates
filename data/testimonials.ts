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

export const RATING_STATS = {
  rating: 4.9,
  totalReviews: 129,
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
    id: "review-2",
    author: "Vikram Malhotra",
    role: "Entrepreneur",
    branch: "Kalyan Nagar",
    rating: 5,
    content: "EMS training here is a game changer! Being able to get a thorough, intense full body workout in just 20 minutes fits perfectly into my packed schedule. Highly professional environment above Starbucks Y4 Heights.",
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
  }
];
