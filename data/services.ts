export interface ServiceDetail {
  slug: string;
  title: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  heroHeadline: string;
  tagline: string;
  image: string;
  iconName: string;
  benefits: string[];
  features: string[];
  whoItIsFor: string[];
  howItWorks?: string[];
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
    shortDescription: "Dynamic resistance training utilizing world-class Merrithew equipment to optimize spinal structure, posture, and core control.",
    fullDescription: "Dr Pilates Reformer Pilates combines precision resistance training with mindful movement principles. Utilizing custom spring-loaded reformer beds, our sessions isolate micro-muscles, enhance core stability, align joint articulation, and build lean, functional strength without high-impact stress on your joints.",
    heroHeadline: "Reformer Pilates in Bengaluru",
    tagline: "Dynamic resistance training utilizing world-class Merrithew equipment to optimize spinal structure, posture, and core control.",
    image: "/images/service-1.jpg",
    iconName: "Activity",
    benefits: [
      "Total Body Toning",
      "Stronger Core & Posture",
      "Flexibility & Mobility",
      "Balance & Coordination",
      "Personalized & Safe",
      "Injury Prevention & Rehabilitation",
      "Stress Relief",
      "Long-Term Health Benefits"
    ],
    features: [
      "World-Class Merrithew Apparatus",
      "Customized Spring Resistance Settings",
      "Maximum 1-on-1 & Small Group Focus",
      "Certified Master Pilates Instructors"
    ],
    whoItIsFor: [
      "Beginners",
      "Seasoned athletes",
      "Individuals seeking gentle rehabilitation",
      "Professionals seeking efficient exercise",
      "Seniors wanting greater mobility"
    ],
    howItWorks: [
      "Guided sessions with certified instructors",
      "Individualized modifications for every participant",
      "Supportive studio environment"
    ],
    sessionStructure: {
      duration: "50 - 60 Mins",
      intensity: "Adaptable (Beginner to Advanced)",
      format: "1-on-1 Personal, Semi-Private & Group Sessions"
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
    slug: "ems-training",
    title: "EMS Training",
    badge: "BIO-ELECTRIC",
    shortDescription: "20-minute Electro Muscle Stimulation workouts that trigger deep muscle contraction equivalent to 90 minutes of traditional training.",
    fullDescription: "EMS (Electrical Muscle Stimulation) Training delivers a high-efficiency full-body workout in just 20 minutes. By sending low-frequency impulse bio-signals to deep muscle layers while performing functional exercises, EMS activates over 90% of muscle fibers simultaneously—delivering the results of a 90-minute conventional gym workout.",
    heroHeadline: "Power Up Your Workout with EMS Training",
    tagline: "20-minute Electro Muscle Stimulation workouts that trigger deep muscle contraction equivalent to 90 minutes of traditional training.",
    image: "/images/service-2.jpg",
    iconName: "Zap",
    benefits: [
      "90% Muscle Activation",
      "Fat Loss & Conditioning",
      "Joint-Safe Loading",
      "Metabolic Boost & Accelerated Fat Burning",
      "Zero Joint Strain Resistance"
    ],
    features: [
      "Medical-Grade Wireless EMS Bio-Suits",
      "Individual Impulse Level Calibration",
      "Personal EMS Certified Trainer Guidance",
      "Hygienic Undergarment Gear Provided"
    ],
    whoItIsFor: [
      "Busy executives & entrepreneurs with limited workout time",
      "Individuals wanting rapid body re-composition without lifting heavy weights",
      "People with joint sensitivities or lower back vulnerability",
      "Fitness enthusiasts breaking through training plateaus"
    ],
    howItWorks: [
      "Medical-grade wireless EMS bio-suit fitting & hygiene gear",
      "Individual impulse level calibration to your tolerance",
      "20-minute guided functional workout with certified EMS trainer",
      "Accelerated recovery cool-down & progress tracking"
    ],
    sessionStructure: {
      duration: "20 Mins",
      intensity: "High Efficiency (Impulse Modulated)",
      format: "1-on-1 Dedicated Trainer"
    },
    faqs: [
      {
        question: "Is EMS Training safe?",
        answer: "Yes, EMS utilizes low-frequency electrical impulses that mimic the natural electrical signals sent by your central nervous system to contract muscles. It is gentle on joints and guided 1-on-1 by certified specialists."
      },
      {
        question: "How many sessions of EMS do I need per week?",
        answer: "Because EMS provides intense deep-muscle stimulation, 1 to 2 sessions per week (with at least 48 hours rest between sessions) is optimal."
      },
      {
        question: "Do I need to bring specialized equipment?",
        answer: "No. We supply hygienic cotton EMS innerwear and fit you into our state-of-the-art bio-suit at the studio."
      }
    ]
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    shortDescription: "Evidence-based physical treatment and manipulative programs to manage spinal pathologies, sports injuries, and chronic pain.",
    fullDescription: "Our Physiotherapy service integrates clinical musculoskeletal diagnostics with active exercise therapy. Led by licensed physiotherapists, we focus on identifying root causes of movement dysfunction, relieving acute or chronic pain, restoring joint range-of-motion, and building long-term physical resilience.",
    heroHeadline: "Move Better. Recover Stronger.",
    tagline: "Evidence-based physical treatment and manipulative programs to manage spinal pathologies, sports injuries, and chronic pain.",
    image: "/images/service-3.jpg",
    iconName: "HeartPulse",
    benefits: [
      "Pain Management",
      "Sports Rehabilitation",
      "Kinetic Re-education",
      "Targeted Relief from Back, Neck, Knee & Joint Pain",
      "Post-Surgical & Post-Injury Rehabilitation"
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
    howItWorks: [
      "Initial clinical history & joint biomechanics evaluation",
      "Targeted hands-on manual therapy for rapid pain alleviation",
      "Reformer & kinetic movement therapy for muscle re-education",
      "Personalized home exercise routine to prevent recurrence"
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
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
