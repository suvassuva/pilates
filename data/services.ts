export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroHeadline: string;
  tagline: string;
  image: string;
  iconName: string;
  benefits: string[];
  features: string[];
  whoItIsFor: string[];
  sessionStructure: {
    duration: string;
    intensity: string;
    format: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: "reformer-pilates",
    title: "Reformer Pilates",
    shortDescription: "Strength, flexibility, posture and controlled movement using specialized springs and carriage equipment.",
    fullDescription: "Dr Pilates Reformer Pilates combines precision resistance training with mindful movement principles. Utilizing custom spring-loaded reformer beds, our sessions isolate micro-muscles, enhance core stability, align joint articulation, and build lean, functional strength without high-impact stress on your joints.",
    heroHeadline: "Reformer Pilates in Bengaluru",
    tagline: "Transform your posture, core strength, and body alignment with specialized Reformer machinery.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200",
    iconName: "Activity",
    benefits: [
      "Deep Core & Pelvic Floor Activation",
      "Postural Realignment & Spinal Decompression",
      "Enhanced Joint Mobility & Flexibility",
      "Low-Impact Muscle Sculpting",
      "Balance, Coordination & Mind-Body Awareness"
    ],
    features: [
      "Customized Spring Resistance Settings",
      "Maximum 1-on-1 & Small Group Focus",
      "Certified Master Pilates Instructors",
      "Tailored for All Fitness Levels"
    ],
    whoItIsFor: [
      "Desk professionals suffering from back stiffness & posture issues",
      "Athletes seeking core stability and injury prevention",
      "Pre & post-natal women needing low-impact conditioning",
      "Individuals rebuilding strength after physical rehabilitation"
    ],
    sessionStructure: {
      duration: "50 - 60 Mins",
      intensity: "Adaptable (Beginner to Advanced)",
      format: "1-on-1 Personal or Semi-Private"
    },
    faqs: [
      {
        question: "Do I need prior Pilates experience?",
        answer: "Not at all. Our instructors perform an initial movement analysis and adjust spring resistance to match your current fitness level, making it safe and effective for total beginners."
      },
      {
        question: "What should I wear to a Reformer Pilates session?",
        answer: "We recommend comfortable, form-fitting workout clothing and grip socks. Grip socks ensure traction on the reformer carriage and maintain studio hygiene."
      },
      {
        question: "How often should I practice Reformer Pilates?",
        answer: "For optimal results in posture, core strength, and mobility, we recommend 2 to 3 sessions per week."
      }
    ]
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy Treatment",
    shortDescription: "Personalized clinical support for mobility, pain recovery, postural corrections, and rehabilitation.",
    fullDescription: "Our Physiotherapy Treatment service integrates clinical musculoskeletal diagnostics with active exercise therapy. Led by licensed physiotherapists, we focus on identifying root causes of movement dysfunction, relieving acute or chronic pain, restoring joint range-of-motion, and building long-term physical resilience.",
    heroHeadline: "Move Better. Recover Stronger.",
    tagline: "Evidence-based clinical physiotherapy and movement rehabilitation tailored to your body's needs.",
    image: "/images/physiotherapy_treatment.jpg",
    iconName: "HeartPulse",
    benefits: [
      "Targeted Relief from Back, Neck, Knee & Joint Pain",
      "Comprehensive Biomechanical & Postural Assessment",
      "Post-Surgical & Post-Injury Rehabilitation",
      "Ergonomic Alignment & Spine Decompression",
      "Long-Term Injury Prevention Strategies"
    ],
    features: [
      "Licensed Senior Physiotherapists",
      "Combined Manual Therapy & Reformer Rehab",
      "Private Assessment & Treatment Rooms",
      "Personalized Home Exercise Prescriptions"
    ],
    whoItIsFor: [
      "Individuals suffering chronic cervical/lumbar spine discomfort",
      "Post-operative patients requiring structural rehab",
      "Athletes recovering from muscle tears or joint sprains",
      "Anyone experiencing persistent movement stiffness or pain"
    ],
    sessionStructure: {
      duration: "45 - 60 Mins",
      intensity: "Therapeutic & Restorative",
      format: "Clinical 1-on-1 Session"
    },
    faqs: [
      {
        question: "What happens during the first Physiotherapy consultation?",
        answer: "Your initial session involves a detailed clinical history, posture analysis, joint mobility test, and pain assessment. Your therapist then designs a custom rehabilitation plan combining manual techniques and guided movement."
      },
      {
        question: "Can I combine Physiotherapy with Reformer Pilates?",
        answer: "Absolutely. At Dr Pilates, our physiotherapists integrate Reformer Pilates equipment into active rehab to build stabilizing strength safely."
      }
    ]
  },
  {
    slug: "dry-needling",
    title: "Dry Needling",
    shortDescription: "Targeted myofascial trigger point therapy to release deep muscle tension, relieve pain, and restore mobility.",
    fullDescription: "Dry Needling is an evidence-based clinical therapy performed by licensed physiotherapists. Using ultrafine filiform needles inserted into myofascial trigger points, dry needling stimulates targeted neuromuscular responses, releases persistent muscular knots, diminishes pain signaling, and promotes natural tissue healing.",
    heroHeadline: "Precision Myofascial Trigger Point Therapy",
    tagline: "Release deep muscle knots, alleviate pain, and restore kinetic tissue balance with advanced dry needling.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1200",
    iconName: "Sparkles",
    benefits: [
      "Immediate Decompression of Muscle Knots & Trigger Points",
      "Targeted Chronic Pain Relief (Neck, Lower Back, Shoulders & Sciatica)",
      "Accelerated Muscle Recovery & Tissue Oxygenation",
      "Improved Joint Range of Motion & Neuromuscular Coordination",
      "Complements Reformer Pilates & Active Rehabilitation"
    ],
    features: [
      "Certified Practitioners in Advanced Dry Needling",
      "Sterile Single-Use Ultra-Fine Needles",
      "Comprehensive Pre-Needling Musculoskeletal Audit",
      "Integrated with Active Movement Guidance"
    ],
    whoItIsFor: [
      "Individuals with persistent muscle tightness and painful knots",
      "Desk workers with chronic neck, upper back, and shoulder strain",
      "Athletes recovering from overuse injuries and muscular spasms",
      "Rehabilitation patients requiring myofascial decompression"
    ],
    sessionStructure: {
      duration: "30 - 45 Mins",
      intensity: "Targeted Clinical Therapy",
      format: "Private 1-on-1 Clinical Session"
    },
    faqs: [
      {
        question: "Does Dry Needling hurt?",
        answer: "Most clients feel only a minimal tap upon insertion. When the needle reaches a trigger point, you may experience a brief local twitch response or mild dull ache, which indicates the muscle is releasing tension."
      },
      {
        question: "How is Dry Needling different from traditional acupuncture?",
        answer: "While both use fine needles, traditional acupuncture is based on energy meridians, whereas Dry Needling is rooted in Western clinical medicine, biomechanics, and targeted myofascial trigger point neurology."
      },
      {
        question: "Can Dry Needling be combined with Reformer Pilates?",
        answer: "Yes. In fact, releasing tight myofascial knots with Dry Needling restores muscle flexibility, enabling you to perform Reformer Pilates exercises with greater range, symmetry, and zero compensation."
      }
    ]
  },
  {
    slug: "personal-training",
    title: "Personal Training",
    shortDescription: "One-to-one custom training designed around individual body goals, strength, and endurance.",
    fullDescription: "Dr Pilates Personal Training provides bespoke 1-on-1 fitness coaching tailored specifically to your physiological profile. Whether your goal is body sculpting, athletic conditioning, functional strength, or weight management, our expert trainers build structured programs that evolve with your progress.",
    heroHeadline: "Personal Training Built Around You",
    tagline: "Custom fitness coaching and accountability to achieve sustainable strength, agility, and vitality.",
    image: "/videos/professional_woman_stretching.jpeg",
    iconName: "Dumbbell",
    benefits: [
      "100% Customized Training Routines",
      "Focused Form Correction & Technique Safety",
      "Accelerated Goal Achievement & Progress Tracking",
      "Functional Core, Mobility & Muscle Strength",
      "Nutrition & Lifestyle Accountability"
    ],
    features: [
      "Private Fitness Bay Access",
      "Comprehensive InBody & Fitness Screenings",
      "Certified Fitness & Body Conditioning Coaches",
      "Flexible Scheduling Options"
    ],
    whoItIsFor: [
      "Individuals wanting dedicated 1-on-1 attention and motivation",
      "Beginners wanting to learn proper technique from scratch",
      "Experienced lifters looking to break plateaus safely",
      "Anyone with specific body composition or athletic targets"
    ],
    sessionStructure: {
      duration: "60 Mins",
      intensity: "Tailored to Goals",
      format: "1-on-1 Private Coaching"
    },
    faqs: [
      {
        question: "How is Personal Training structured at Dr Pilates?",
        answer: "Each program starts with a fitness assessment. Your trainer curates a step-by-step roadmap mixing functional resistance, core stability, and cardio conditioning."
      },
      {
        question: "Can I train if I have past injuries?",
        answer: "Yes! Because we have in-house physiotherapists, your personal trainer collaborates with our clinical team to ensure all movements are completely safe for your joints."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
