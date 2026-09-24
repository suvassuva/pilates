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
      avatar: "/dr-govinda-raju.jpg"
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
    category: "Getting Started",
    question: "Can beginners start Reformer Pilates without any prior fitness background?",
    answer: "Absolutely. In fact, Reformer Pilates is one of the safest environments for true beginners. Every movement is performed on an engineered carriage with calibrated spring resistance that supports your body weight while you learn proper form. Our instructors customize spring tension and movement range for your baseline strength."
  },
  {
    id: "faq-2",
    category: "Methodology",
    question: "How is clinical Pilates at Dr. Pilates different from regular gym fitness?",
    answer: "Conventional gyms typically prioritize moving heavy external weights through standardized machine tracks, which can compress joints and reinforce muscular imbalances. At Dr. Pilates, our programs begin with a detailed postural evaluation led by clinical physiotherapists. We isolate weak intrinsic stabilizers, decompress the spine, and build lean, balanced functional strength without joint impact."
  },
  {
    id: "faq-3",
    category: "Frequency & Results",
    question: "How often should I attend sessions to see lasting postural and core results?",
    answer: "Most clients experience noticeable postural relief, reduced back stiffness, and improved core awareness within 4 to 6 sessions. For sustained physical transformation and muscular symmetry, attending 2 to 3 sessions per week is ideal."
  },
  {
    id: "faq-4",
    category: "Pain & Injuries",
    question: "Is Reformer Pilates safe if I currently have chronic lower back or neck pain?",
    answer: "Yes, provided it is clinically supervised. Because Dr. Pilates was founded by physical therapists, we specialize in rehabilitating conditions such as disc herniations, sciatica, cervical stiffness, and postural scoliosis. We first perform an assessment to identify contraindications, then craft a gentle, decompression-based program."
  },
  {
    id: "faq-5",
    category: "Physiotherapy",
    question: "How does physiotherapy integrate with Pilates at Dr. Pilates?",
    answer: "Our licensed physiotherapists provide thorough clinical evaluations and hands-on treatments—including dry needling, myofascial release, and joint mobilizations. Once tight muscular contractures are released, we immediately transition clients onto Reformer equipment to reprogram neuromuscular movement patterns and prevent pain recurrence."
  },
  {
    id: "faq-6",
    category: "Session Experience",
    question: "What should I wear and bring to my first session?",
    answer: "Wear comfortable, form-fitting workout attire (such as leggings and athletic tops) that allows our instructors to observe your spinal alignment and joint mechanics. Anti-slip grip socks are recommended for hygiene and stability on the Reformer carriage. We provide water, clean towel service, and sanitized studio equipment."
  },
  {
    id: "faq-7",
    category: "Comparison",
    question: "What is the difference between Mat Pilates and Reformer Pilates?",
    answer: "While Mat Pilates relies strictly on your body weight against gravity, Reformer Pilates uses a gliding carriage, pulleys, footbars, and spring-loaded resistance. The springs can either assist you through challenging motions (making it ideal for rehab) or amplify resistance to build deep muscular strength and endurance far beyond what mat work alone can achieve."
  },
  {
    id: "faq-8",
    category: "Classes & Booking",
    question: "How do 1-on-1 private sessions compare to small group classes?",
    answer: "Private 1-on-1 sessions provide 100% dedicated instructor attention, customized spring calibrations, and real-time posture adjustments tailored to your specific biomechanical needs or injuries. Small group classes offer an energizing, community-driven workout while still maintaining a strict cap on student count to guarantee quality supervision."
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
