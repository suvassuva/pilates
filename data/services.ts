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
    image: "/videos/Pilates_reformer_machine_in_studio_202608281428.jpeg",
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
    slug: "ems-training",
    title: "EMS Training",
    shortDescription: "Time-efficient full-body training using advanced Electrical Muscle Stimulation technology.",
    fullDescription: "EMS (Electrical Muscle Stimulation) Training delivers a high-efficiency full-body workout in just 20 minutes. By sending low-frequency impulse bio-signals to deep muscle layers while performing functional exercises, EMS activates over 90% of muscle fibers simultaneously—delivering the results of a 90-minute conventional gym workout.",
    heroHeadline: "Power Up Your Workout with EMS Training",
    tagline: "Achieve maximum muscle activation, fat burn, and conditioning in just 20 minutes.",
    image: "/videos/EMS_suits_displayed_in_studio_202608281431.jpeg",
    iconName: "Zap",
    benefits: [
      "20-Minute Ultra-Efficient Full Body Workout",
      "90%+ Simultaneous Muscle Fiber Activation",
      "Metabolic Boost & Accelerated Fat Burning",
      "Zero Joint Strain Resistance",
      "Targeted Core & Deep Stabilizer Engagement"
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
    shortDescription: "Personalized clinical support for mobility, pain recovery, postural corrections, and rehabilitation.",
    fullDescription: "Our Physiotherapy service integrates clinical musculoskeletal diagnostics with active exercise therapy. Led by licensed physiotherapists, we focus on identifying root causes of movement dysfunction, relieving acute or chronic pain, restoring joint range-of-motion, and building long-term physical resilience.",
    heroHeadline: "Move Better. Recover Stronger.",
    tagline: "Evidence-based physiotherapy and movement rehabilitation tailored to your body's needs.",
    image: "/videos/woman_stretching_at_desk.jpeg",
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
        answer: "Absoluty. At Dr Pilates, our physiotherapists often integrate Reformer Pilates equipment into active rehab to build stabilizing strength safely."
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
