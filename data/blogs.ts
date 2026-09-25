export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  calloutQuote?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Reformer Pilates" | "Clinical Physiotherapy" | "Postural Science" | "EMS Training" | "Pre & Postnatal";
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
  };
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
  sections: BlogSection[];
  socialLinks?: {
    youtube?: string;
    linkedin?: string;
  };
}

export interface BlogFAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const BLOG_CATEGORIES = [
  "All"
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "the-science-of-core-stability-reformer-pilates",
    title: "The Science of Core Stability: How Reformer Pilates Realigns the Spine",
    excerpt: "True core strength is not about surface abdominal crunches—it is about the deep transverse abdominis, multifidus, and pelvic sling stabilizing every vertebra.",
    category: "Reformer Pilates",
    coverImage: "/videos/woman_performing_reformer.jpeg",
    author: {
      name: "Dr. Govinda Raju S.",
      role: "Founder & Clinical Director",
      avatar: "/goivnd.jpeg"
    },
    publishedAt: "September 18, 2026",
    readTime: "5 min read",
    featured: true,
    tags: ["Core Stability", "Spinal Alignment", "Reformer Pilates", "Movement Science"],
    socialLinks: {
      youtube: "https://www.youtube.com/@drpilatesbangalore",
      linkedin: "https://www.linkedin.com/company/dr-pilates-bengaluru"
    },
    sections: [
      {
        heading: "Beyond Conventional Abdominal Workouts",
        paragraphs: [
          "Most fitness enthusiasts associate core training with visible six-pack muscles (the rectus abdominis). In orthopedic physical therapy, however, the rectus abdominis is merely the superficial sheath. The true protectors of the spine are the deep intrinsic stabilizers: the transversus abdominis, the multifidus along each spinal segment, the diaphragm, and the pelvic floor.",
          "When you perform standard floor crunches or high-impact gym drills, excessive intra-abdominal pressure can compress lumbar discs and exacerbate anterior pelvic tilts. Reformer Pilates changes this paradigm completely by introducing progressive spring resistance."
        ],
        calloutQuote: "The spine thrives under decompression and tension balance. By removing gravity's downward shear force, the Reformer carriage lets micro-muscles engage without compressive stress."
      },
      {
        heading: "How Spring Tension Calibrates Muscular Balance",
        paragraphs: [
          "Unlike static iron dumbbells that apply maximum resistance at the start or bottom of a movement, Merrithew Reformer springs provide linear dynamic resistance. As the carriage moves away from the footbar, the tension progressively increases, requiring full motor unit recruitment throughout the eccentric phase of muscle contraction.",
          "This dynamic tension actively lengthens the spine while strengthening postural muscles. For individuals suffering from chronic desk hunch, forward head posture, or asymmetrical hip elevation, Reformer movements guide the skeletal frame back into anatomical equilibrium."
        ],
        bulletPoints: [
          "Decompressed spinal articulation through carriage glide mechanics",
          "Equalized bilateral strength, eliminating left-to-right muscular dominance",
          "Continuous activation of deep pelvic and lumbar stabilizers",
          "Zero impact on weight-bearing joints including knees, hips, and ankles"
        ]
      },
      {
        heading: "Clinical Takeaway: Sustainable Movement Longevity",
        paragraphs: [
          "When core stabilization is built systematically, every daily movement—from sitting through hours of boardroom meetings to running or weekend tennis—becomes effortless and pain-free. At Dr. Pilates, our programs begin with precision postural analysis to map your unique imbalances before setting spring tensions, ensuring every session rebuilds your body safely and sustainably."
        ]
      }
    ]
  }
];

export const BLOG_FAQS: BlogFAQItem[] = [
  {
    id: "faq-1",
    category: "Reformer Pilates",
    question: "What is Reformer Pilates?",
    answer: "Reformer Pilates is a full-body conditioning method performed on a specialized carriage machine that uses springs, pulleys, and straps for resistance. Unlike mat pilates, the reformer offers adjustable resistance, providing both deep support for rehabilitation and high-intensity challenge for athletic performance."
  },
  {
    id: "faq-2",
    category: "Getting Started",
    question: "Who can join Pilates classes?",
    answer: "Anyone can join. Because our sessions are supervised by a clinical physical therapist, we cater to all ages, fitness levels, and rehabilitation needs. Whether you are correcting posture, building core strength, or recovering from a spinal injury, we custom-tailor the spring resistance for you."
  },
  {
    id: "faq-3",
    category: "EMS Training",
    question: "How does EMS training work?",
    answer: "Electro Muscle Stimulation (EMS) sends gentle, low-frequency bio-electric impulses directly to your muscle fibers via a technical suit. This triggers deep muscle contractions that are difficult to reach with standard weights. A 20-minute session activates over 90% of your muscle fibers safely and efficiently."
  },
  {
    id: "faq-4",
    category: "Physiotherapy",
    question: "Do I need physiotherapy before starting Pilates?",
    answer: "Not necessarily, but every client at Dr Pilates starts with a comprehensive physical assessment. If you suffer from active spinal pain, sports injuries, or joint issues, Dr. Govinda Raju will direct a physiotherapy mobilization plan before transitioning you into Reformer work."
  },
  {
    id: "faq-5",
    category: "Booking",
    question: "How do I book a consultation?",
    answer: "Booking is simple. Click any 'Book Assessment' or 'Book Consultation' CTA, fill out your contact details, and choose your service of interest. Our clinic coordinators will reach out within 2 hours to confirm your physical audit slot. You can also call us directly or click the WhatsApp widget."
  }
];

export function getAllBlogs(): BlogPost[] {
  return BLOG_POSTS;
}

export function getFeaturedBlog(): BlogPost {
  return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedBlogs(currentSlug: string, category: string, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aMatches = a.category === category ? 1 : 0;
      const bMatches = b.category === category ? 1 : 0;
      return bMatches - aMatches;
    })
    .slice(0, limit);
}
