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
          "Unlike static iron dumbbells that apply maximum resistance at the start or bottom of a movement, Reformer springs provide linear dynamic resistance. As the carriage moves away from the footbar, the tension progressively increases, requiring full motor unit recruitment throughout the eccentric phase of muscle contraction.",
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
    slug: "workout-without-weights-sunday-chronicle",
    title: "WORKOUT Without Weights: Calorie Burning & Zero-Joint Strain",
    excerpt: "Featured in Sunday Chronicle: Dr. Govinda Raju S. outlines a zero-equipment bodyweight training regimen to burn calories and build functional stamina safely without heavy joint compression.",
    category: "Clinical Physiotherapy",
    coverImage: "/images/dr_govind_sunday_chronicle_workout_without_weights.jpeg",
    author: {
      name: "Dr. Govinda Raju S.",
      role: "Founder & Clinical Director",
      avatar: "/goivnd.jpeg"
    },
    publishedAt: "August 4, 2019",
    readTime: "4 min read",
    tags: ["Sunday Chronicle", "Bodyweight Training", "Calorie Burn", "Physiotherapy", "Functional Strength"],
    socialLinks: {
      youtube: "https://www.youtube.com/@drpilatesbangalore",
      linkedin: "https://www.linkedin.com/company/dr-pilates-bengaluru"
    },
    sections: [
      {
        heading: "National Publication: Sunday Chronicle Feature",
        paragraphs: [
          "In a nationally published fitness breakdown for Sunday Chronicle, Dr. Govinda Raju S. tackled the common misconception that building lean muscle tone, torching calories, and advancing stamina requires heavy gym iron and complex machines.",
          "When executed with precise anatomical control, zero-equipment bodyweight training utilizes compound kinetic movement to challenge every major muscle group while safeguarding vulnerable lumbar vertebrae and delicate knee joints from axial load compression."
        ],
        calloutQuote: "Exercise is not about how much external weight you lift; it is about how effectively your neuro-muscular system controls and stabilizes your own body against gravity."
      },
      {
        heading: "Key Physiological Advantages of Bodyweight Regimens",
        paragraphs: [
          "Unlike isolated gym machines that force joints into rigid, unnatural pathways, functional bodyweight exercises mimic authentic human movement patterns. They engage the core continuously as an active stabilizer while moving through multiple anatomical planes.",
          "By manipulating training density—shortening rest periods between sets and pairing lower-body movements with upper-body stability holds—you trigger an elevated post-exercise oxygen consumption (EPOC) effect, burning calories hours after your workout concludes."
        ],
        bulletPoints: [
          "Zero axial spinal compression, drastically lowering disc herniation risk",
          "High-efficiency caloric expenditure through multi-joint functional recruitment",
          "Continuous engagement of deep transverse abdominis and spinal stabilizers",
          "Accelerated metabolic rate and sustained cardiovascular endurance",
          "Total convenience: full workout execution without dedicated equipment or gym dependency"
        ]
      },
      {
        heading: "Clinical Advice on Safe Technique and Progression",
        paragraphs: [
          "Dr. Govinda underscores that form must always take priority over repetition speed. Maintaining neutral pelvis alignment, engaging the pelvic sling, and breathing with intentional rhythm protects connective tissue while yielding maximum muscle activation.",
          "For individuals recovering from injuries or beginning a new fitness phase, starting with controlled bodyweight fundamentals establishes the structural stability necessary for long-term athletic longevity."
        ]
      }
    ]
  },
  {
    id: "post-3",
    slug: "be-toned-to-party-hard-sunday-chronicle",
    title: "Be Toned to Party Hard: Core Stability, BDNF & Festive Posture",
    excerpt: "Featured in Sunday Chronicle: Dr. Govinda Raju S. shares essential clinical strategies to stimulate neurotrophic factors (BDNF), protect posture during long social events, and sustain holiday vitality.",
    category: "Postural Science",
    coverImage: "/images/dr_govind_sunday_chronicle_be_toned_party_hard.jpeg",
    author: {
      name: "Dr. Govinda Raju S.",
      role: "Founder & Clinical Director",
      avatar: "/goivnd.jpeg"
    },
    publishedAt: "December 8, 2019",
    readTime: "4 min read",
    tags: ["Sunday Chronicle", "Postural Science", "Core Conditioning", "BDNF", "Festive Health"],
    socialLinks: {
      youtube: "https://www.youtube.com/@drpilatesbangalore",
      linkedin: "https://www.linkedin.com/company/dr-pilates-bengaluru"
    },
    sections: [
      {
        heading: "National Publication: Sunday Chronicle Feature",
        paragraphs: [
          "During the peak festive and celebratory season, hectic schedules, late evenings, and prolonged standing often take a heavy toll on our physical equilibrium. In Sunday Chronicle, Dr. Govinda Raju S. presented a physician-approved guide on staying toned, vibrant, and injury-free throughout celebrations.",
          "From standing for hours in evening attire or high heels to coping with metabolic fatigue, having conditioned core stabilizers acts as an internal biological shock absorber that keeps back aches and posture slump at bay."
        ],
        calloutQuote: "A well-conditioned core is your body's personal internal armor. It safeguards spinal alignment during hours on your feet, keeping your posture regal and your energy boundless."
      },
      {
        heading: "Activating BDNF and Cellular Energy",
        paragraphs: [
          "One of the standout scientific insights Dr. Govinda emphasizes is the stimulation of Brain-Derived Neurotrophic Factor (BDNF) through rhythmic, intentional movement. BDNF is a specialized neuro-protein responsible for synaptic plasticity, mental sharpness, and stress recovery.",
          "Engaging in brief, focused movement sequences before heading out activates peripheral circulation and accelerates lymphatic clearance, significantly reducing the morning-after lethargy and muscular heaviness."
        ],
        bulletPoints: [
          "Stimulates neurotrophic factors (BDNF) for enhanced mental stamina and mood resilience",
          "Stabilizes the lumbopelvic girdle to prevent lower back exhaustion from standing in heels",
          "Enhances venous return and lymphatic drainage to minimize fluid retention and fatigue",
          "Rebalances spinal curvature, eliminating rounded shoulders and forward head tilt"
        ]
      },
      {
        heading: "Dr. Govind's 10-Minute Pre-Event Alignment Routine",
        paragraphs: [
          "Before stepping out for social gatherings, Dr. Govind advises dedicating 10 to 15 minutes to gentle thoracic mobility openers, pelvic tilt resets, and active plank activations. This brief routine activates dormant stabilizer muscles, ensuring you move gracefully, look radiant, and feel energized from start to finish."
        ]
      }
    ]
  }
];

export const BLOG_FAQS: BlogFAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is Dr Pilates?",
    answer: "Dr Pilates is a professional Pilates and physiotherapy centre in Bengaluru, offering personalised movement training, Reformer Pilates, and exercise-based rehabilitation to help clients improve strength, mobility, posture, and overall well-being."
  },
  {
    id: "faq-2",
    category: "Reformer Pilates",
    question: "What is Reformer Pilates?",
    answer: "Reformer Pilates is a low-impact exercise method performed on specialised equipment with springs and a moving carriage. It helps improve core strength, flexibility, balance, coordination, and body control."
  },
  {
    id: "faq-3",
    category: "Getting Started",
    question: "Is Pilates suitable for beginners?",
    answer: "Yes! Pilates is suitable for beginners when exercises are adapted to their fitness level, movement ability, and goals. Our instructors guide clients through the exercises with proper technique and control."
  },
  {
    id: "faq-4",
    category: "Sessions",
    question: "What is the difference between group and private Pilates sessions?",
    answer: "Group sessions offer instructor-guided workouts in a shared class setting. Private sessions provide one-to-one attention and a programme tailored to your individual goals, abilities, and movement needs."
  },
  {
    id: "faq-5",
    category: "Rehabilitation",
    question: "Can Pilates help with back pain and poor posture?",
    answer: "Pilates can help improve strength, movement control, flexibility, and postural awareness. If you have back pain or a diagnosed condition, we recommend an appropriate assessment to determine which exercises are suitable for you."
  },
  {
    id: "faq-6",
    category: "General",
    question: "Is Pilates only for women?",
    answer: "Absolutely not! Pilates is for everyone. Men and women can benefit from improved core strength, mobility, balance, flexibility, and movement efficiency."
  },
  {
    id: "faq-7",
    category: "Physiotherapy",
    question: "Do you offer physiotherapy and rehabilitation?",
    answer: "Yes. Dr Pilates combines Pilates-based movement training with physiotherapy-informed care. Treatment and rehabilitation plans depend on individual needs and should be guided by an appropriate assessment."
  },
  {
    id: "faq-8",
    category: "Frequency",
    question: "How many times a week should I practise Pilates?",
    answer: "For many people, two to three sessions per week is a reasonable starting point. The ideal frequency depends on your goals, fitness level, recovery, and any medical considerations."
  },
  {
    id: "faq-9",
    category: "Results",
    question: "When will I see results from Pilates?",
    answer: "Results vary from person to person. With consistent practice, some people notice improvements in movement awareness, coordination, and mobility within a few weeks. Strength and fitness improvements generally require ongoing practice."
  },
  {
    id: "faq-10",
    category: "Pre & Postnatal",
    question: "Is Reformer Pilates safe during pregnancy or after childbirth?",
    answer: "It may be appropriate with suitable modifications and guidance from a qualified professional. Pregnant and postpartum clients should obtain individual medical clearance where appropriate, especially following a C-section or when experiencing pain or complications."
  },
  {
    id: "faq-11",
    category: "Equipment",
    question: "What equipment do you use at Dr Pilates?",
    answer: "Our studio features professional Merrithew Pilates equipment and specialised apparatus to support a range of exercises, from foundational movement to more advanced training."
  },
  {
    id: "faq-12",
    category: "Preparation",
    question: "What should I wear for my first Pilates class?",
    answer: "Wear comfortable, stretchable, well-fitted workout clothing that allows free movement. Grip socks are recommended for hygiene and traction; please confirm the studio's requirements when booking."
  },
  {
    id: "faq-13",
    category: "Booking",
    question: "How do I book a session at Dr Pilates?",
    answer: "Contact our team to enquire about group or private sessions, available timings, pricing, and the most suitable programme for your goals."
  },
  {
    id: "faq-14",
    category: "Locations",
    question: "Where is Dr Pilates located?",
    answer: "Visit our Kalyan Nagar studio in Bengaluru, located in the HRBR Layout area and Kothanur studio located off Hennur Road. Contact our team for directions and current availability."
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
