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
  },
  {
    id: "post-2",
    slug: "5-movement-fixes-for-desk-bound-professionals",
    title: "Combatting 'Sitting Disease': 5 Movement Fixes for Desk Professionals in Bengaluru",
    excerpt: "Prolonged sitting shortens hip flexors, shuts down glute activation, and overloads the cervical spine. Here is how targeted movement science reverses the damage.",
    category: "Postural Science",
    coverImage: "/videos/woman_stretching_at_desk.jpeg",
    author: {
      name: "Dr. Govinda Raju S.",
      role: "Founder & Clinical Director",
      avatar: "/dr-govinda-raju.jpg"
    },
    publishedAt: "September 12, 2026",
    readTime: "6 min read",
    tags: ["Postural Science", "Desk Ergonomics", "Neck Pain", "Hip Mobility"],
    socialLinks: {
      youtube: "https://www.youtube.com/@drpilatesbangalore",
      linkedin: "https://www.linkedin.com/company/dr-pilates-bengaluru"
    },
    sections: [
      {
        heading: "The Modern Epidemic of Upper Crossed Syndrome",
        paragraphs: [
          "In Bengaluru's tech and executive corridors, professionals easily log 8 to 12 hours daily seated in front of laptop screens. Over months and years, this sustained posture produces a predictable biomechanical breakdown known clinically as Upper Crossed and Lower Crossed Syndromes.",
          "Pectoral muscles and anterior neck flexors become chronically shortened, while rhomboids, middle traps, and deep cervical flexors weaken. Simultaneously, the iliopsoas (hip flexors) adaptively shorten, inducing gluteal amnesia and placing continuous strain on the lower back."
        ],
        calloutQuote: "Sitting for prolonged periods isn't just a comfort issue—it structurally restructures your fascia and neurological firing patterns unless actively counterbalanced."
      },
      {
        heading: "Five Clinically-Proven Movement Corrections",
        paragraphs: [
          "Reversing sitting-induced postural degeneration requires intentional neuromuscular activation, not just occasional passive stretches. Incorporate these key protocols:"
        ],
        bulletPoints: [
          "Chest Opener & Thoracic Extension: Actively counter forward shoulder hunching by mobilizing the mid-back and opening anterior chest fascia.",
          "Gluteus Medius Activation: Awakening the lateral hip stabilizers through targeted resistance straps restores pelvic stability during walking and standing.",
          "Cervical Spine Retraction: Gentle chin tucks reset the heavy forward-head angle (every inch forward adds roughly 10 lbs of effective skull weight on neck joints).",
          "Hip Flexor Decompression: Dynamic kneeling lunges or Reformer Eve's Lunge lengthen the psoas without overarching the lumbar spine.",
          "Pelvic Neutral Reset: Re-learning to find your neutral pelvis removes excessive shear force from L4-L5 and L5-S1 lumbar discs."
        ]
      },
      {
        heading: "Why 2 Reformer Sessions Per Week Transform Desk Posture",
        paragraphs: [
          "While micro-breaks during the workday are helpful, they cannot structurally rebuild taut fascial chains. Two guided Reformer Pilates sessions per week provide the exact mechanical leverage needed to reset your biomechanical foundation, ensuring you stand taller, breathe easier, and end your workday pain-free."
        ]
      }
    ]
  },
  {
    id: "post-3",
    slug: "physiotherapy-meets-pilates-clinical-rehab",
    title: "Physical Therapy Meets Pilates: The Clinical Path to Pain-Free Movement",
    excerpt: "Why bridging orthopedic physical therapy assessment with the precision of Reformer Pilates delivers sustainable rehabilitation and prevents chronic injury recurrence.",
    category: "Clinical Physiotherapy",
    coverImage: "/images/physiotherapy_treatment.jpg",
    author: {
      name: "Dr. Govinda Raju S.",
      role: "Founder & Clinical Director",
      avatar: "/dr-govinda-raju.jpg"
    },
    publishedAt: "September 05, 2026",
    readTime: "4 min read",
    tags: ["Physiotherapy", "Rehabilitation", "Dry Needling", "Joint Health"],
    socialLinks: {
      youtube: "https://www.youtube.com/@drpilatesbangalore",
      linkedin: "https://www.linkedin.com/company/dr-pilates-bengaluru"
    },
    sections: [
      {
        heading: "The Disconnect Between Physical Therapy and Regular Gyms",
        paragraphs: [
          "A common scenario in modern medicine: a patient develops acute lower back or shoulder pain, undergoes standard clinical physiotherapy, experiences temporary relief, and is then advised to 'start exercising again.'",
          "However, returning to a standard commercial gym without movement guidance frequently triggers a relapse. Heavy weights, machine-guided isolations, and lack of postural supervision place immense shear forces on unhealed tissues. This is precisely why we founded Dr. Pilates—to create an integrative sanctuary where medical precision meets athletic movement."
        ],
        calloutQuote: "Rehabilitation is not a passive therapy; it is a movement education. Our goal is to make your body resilient against future injuries, not just treat current symptoms."
      },
      {
        heading: "The Three-Step Integrative Clinical Process",
        paragraphs: [
          "At our Kalyan Nagar and Kothanur studios, client care follows an evidence-based pathway:"
        ],
        bulletPoints: [
          "Diagnostic Musculoskeletal Assessment: Evaluating joint ranges, kinetic chain deviations, spine curvature, and muscle inhibition.",
          "Targeted Manual Therapy & Dry Needling: When hyper-irritable trigger points or fascial adhesions are identified, ultrafine filiform needles release contractures immediately.",
          "Reformer Progressive Rehabilitation: Loading the released muscles within safe, assisted ranges of motion on Reformer carriages to cement correct movement patterns."
        ]
      },
      {
        heading: "Long-Term Athletic Expression",
        paragraphs: [
          "Patients quickly transition from rehab clients into agile, strong movers. By removing pain and restoring joint biomechanics first, you unlock your body's peak athletic expression with complete confidence."
        ]
      }
    ]
  },
  {
    id: "post-4",
    slug: "ems-training-and-pilates-combined",
    title: "Why Combining EMS Training with Reformer Pilates Delivers Rapid Core Transformation",
    excerpt: "Electro-Muscle Stimulation activates up to 90% of deep muscular fibers in just 20 minutes. Combined with Pilates movement control, the results are unprecedented.",
    category: "EMS Training",
    coverImage: "/videos/ems_suits_displayed.jpeg",
    author: {
      name: "Dr. Govinda Raju S.",
      role: "Founder & Clinical Director",
      avatar: "/dr-govinda-raju.jpg"
    },
    publishedAt: "August 28, 2026",
    readTime: "4 min read",
    tags: ["EMS Training", "Strength Conditioning", "Efficiency", "Metabolism"],
    socialLinks: {
      youtube: "https://www.youtube.com/@drpilatesbangalore",
      linkedin: "https://www.linkedin.com/company/dr-pilates-bengaluru"
    },
    sections: [
      {
        heading: "The Technology Behind Electro-Muscle Stimulation",
        paragraphs: [
          "EMS (Electro-Muscle Stimulation) is an FDA-cleared, medically proven technology that originated in European physical therapy and sports medicine. By sending controlled, low-frequency bio-electrical impulses through specialized technical suits, EMS stimulates involuntary contractions in both agonist and antagonist muscle groups simultaneously.",
          "In a standard voluntary gym workout, the central nervous system typically activates between 30% to 50% of available muscle fibers. With EMS technology, activation reaches up to 90%—including deep, hard-to-target stabilization fibers."
        ],
        calloutQuote: "A 20-minute EMS session recruits more motor units than a grueling 90-minute conventional gym routine—with zero axial load on your joints."
      },
      {
        heading: "The Perfect Synergy with Pilates Movement",
        paragraphs: [
          "When EMS impulses are combined with the mindful, breath-synchronized biomechanics of Reformer Pilates, a powerful compounding effect takes place:"
        ],
        bulletPoints: [
          "Time-Efficient: Ideal for busy entrepreneurs, executives, and active parents who have limited time.",
          "Joint-Safe Intensity: Muscle stimulation occurs without heavy external barbells or joint compression.",
          "Deep Neuromuscular Retraining: Weak, dormant muscle groups (such as underactive glutes or inner core) are forced to wake up and recruit properly.",
          "Accelerated Metabolic Rate: The post-exercise oxygen consumption (EPOC) continues burning energy for up to 48 hours post-session."
        ]
      }
    ]
  },
  {
    id: "post-5",
    slug: "pre-and-postnatal-pilates-safety",
    title: "Pre & Postnatal Pilates: Protecting the Pelvic Floor and Core Safely",
    excerpt: "How gentle, equipment-calibrated Reformer workouts safeguard the sacroiliac joint, prevent diastasis recti, and promote rapid postpartum physical recovery.",
    category: "Pre & Postnatal",
    coverImage: "/videos/professional_woman_stretching.jpeg",
    author: {
      name: "Dr. Govinda Raju S.",
      role: "Founder & Clinical Director",
      avatar: "/dr-govinda-raju.jpg"
    },
    publishedAt: "August 19, 2026",
    readTime: "5 min read",
    tags: ["Pre & Postnatal", "Pelvic Floor", "Women's Health", "Diastasis Recti"],
    socialLinks: {
      youtube: "https://www.youtube.com/@drpilatesbangalore",
      linkedin: "https://www.linkedin.com/company/dr-pilates-bengaluru"
    },
    sections: [
      {
        heading: "Navigating Hormonal Changes & Joint Laxity",
        paragraphs: [
          "During pregnancy and the postnatal fourth trimester, the hormone relaxin softens ligaments and connective tissue throughout the body, particularly around the pelvis and sacroiliac (SI) joints. While essential for childbirth, this increased laxity makes traditional high-impact fitness risky.",
          "Pre- and postnatal Reformer Pilates offers the safest, most supportive exercise format. The adjustable spring resistance gently stabilizes hypermobile joints while keeping the spine supported."
        ],
        calloutQuote: "Pregnancy changes posture week by week. Reformer Pilates acts as an external skeleton, cradling joints while keeping deep core and pelvic slings resilient."
      },
      {
        heading: "Key Focus Areas for Expecting & New Mothers",
        paragraphs: [
          "Our specialized pre- and postnatal sessions are clinically supervised to address the exact physical needs of motherhood:"
        ],
        bulletPoints: [
          "Pelvic Floor Integration: Teaching coordinated relaxation and gentle contraction aligned with natural diaphragmatic breathing.",
          "Diastasis Recti Prevention & Rehab: Avoiding heavy forward abdominal flexion (crunches) in favor of safe transverse abdominis drawing-in maneuvers.",
          "Upper Back Support: Strengthening scapular retractors to counteract the forward hunch that occurs during infant feeding and carrying.",
          "Circulation & Lymphatic Drain: Gentle leg-in-straps movements encourage venous return, reducing third-trimester leg swelling."
        ]
      },
      {
        heading: "Safe Return Postpartum",
        paragraphs: [
          "Following medical clearance from your obstetrician (typically 6 weeks post natural birth, or 10–12 weeks post cesarean), our physiotherapists assess abdominal separation and guide your progressive re-strengthening journey step by step."
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
    .sort((a, b) => (a.category === category ? -1 : 1))
    .slice(0, limit);
}
