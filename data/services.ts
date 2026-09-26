export interface ServicePillar {
  title: string;
  description: string;
  iconName: string;
  tag?: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  badge?: string;
  sectionNumber?: string;
  shortDescription: string;
  fullDescription: string;
  heroHeadline: string;
  tagline: string;
  image: string;
  iconName: string;
  pillarsHeading?: string;
  pillarsSubheading?: string;
  pillars?: ServicePillar[];
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
    badge: "WORLD-CLASS APPARATUS",
    sectionNumber: "01 / CLINICAL REFORMER",
    shortDescription: "Precision resistance training utilizing world-class Merrithew SPX Max equipment to optimize posture, spinal integrity, and functional core strength.",
    fullDescription: "Our signature program utilizes high-performance apparatus to provide resistance and support, focusing on structural alignment, core activation, and spinal decompression.",
    heroHeadline: "Reformer Pilates in Bengaluru",
    tagline: "Precision Resistance & Postural Sculpting on World-Class Merrithew Systems.",
    image: "/images/reformer_plank_trainer_guidance.webp",
    iconName: "Layers",
    pillarsHeading: "Merrithew Reformer Systems",
    pillarsSubheading: "Our signature program utilizes high-performance apparatus to provide resistance and support, focusing on structural alignment, core activation, and spinal decompression.",
    pillars: [
      {
        title: "Posture Restoration",
        description: "Corrects spinal chains and imbalances through segmental centric loading and joint de-compression.",
        iconName: "Shield",
        tag: "ALIGNMENT"
      },
      {
        title: "Core Optimization",
        description: "Activating deep stabilizing musculature (transversus abdominis, multifidus) beyond superficial layers.",
        iconName: "Layers",
        tag: "CORE STRENGTH"
      },
      {
        title: "Muscular Longevity",
        description: "Developing lean, powerful muscle fibers while maintaining joint integrity and globally restoring flexibility.",
        iconName: "Activity",
        tag: "TONING"
      },
      {
        title: "Neuromuscular Logic",
        description: "Refining the brain-body connection for improved spatial awareness and organic, fluid movement patterns.",
        iconName: "RotateCcw",
        tag: "NEUROMUSCULAR"
      }
    ],
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
      duration: "50 – 60 Mins",
      intensity: "All Fitness Levels (Beginner to Advanced)",
      format: "1-on-1 Private, Semi-Private & Group Sessions"
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
    badge: "BIO-ELECTRIC FIT",
    sectionNumber: "02 / BIO-ELECTRONIC STIMULATION",
    shortDescription: "20-minute Electro Muscle Stimulation workouts that trigger deep muscle contraction equivalent to 90 minutes of traditional weight training.",
    fullDescription: "Maximize physiological efficiency. A 20-minute session that delivers the impact of 90 minutes of traditional weight training through targeted impulse technology, activating 90% of muscle fibers.",
    heroHeadline: "Power Up Your Workout with EMS Training",
    tagline: "20-Minute Bio-Electric Stimulation Delivering 90 Minutes of Training Output.",
    image: "/images/ems_bio_suit_trainer_device.webp",
    iconName: "Zap",
    pillarsHeading: "Electro Muscle Stimulation (EMS)",
    pillarsSubheading: "Maximize physiological efficiency. A 20-minute session that delivers the impact of 90 minutes of traditional weight training through targeted impulse technology, activating 90% of muscle fibers.",
    pillars: [
      {
        title: "+90% Muscle Activation",
        description: "Stimulating deep agonists and antagonists muscle groups simultaneously with medical-grade electric impulses.",
        iconName: "Zap",
        tag: "90% ACTIVATION"
      },
      {
        title: "Accelerated Metabolic Rate",
        description: "Optimizes fat burning and EPOC (excess post-exercise oxygen consumption) response for up to 48 hours post conditioning.",
        iconName: "Heart",
        tag: "METABOLIC BOOST"
      },
      {
        title: "Joint-Safe Hypertrophy",
        description: "Achieves muscle contraction and growth without the mechanical stress and compression of heavy weights on joints.",
        iconName: "Target",
        tag: "JOINT-SAFE"
      }
    ],
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
      duration: "20 Minutes Total",
      intensity: "Impulse-Modulated Intensity",
      format: "Dedicated 1-on-1 Certified Coach"
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
    badge: "CLINICAL RESTORATIVE",
    sectionNumber: "03 / CLINICAL THERAPEUTICS",
    shortDescription: "Evidence-based physical treatment and manipulative programs to manage spinal pathologies, sports injuries, and chronic pain.",
    fullDescription: "Evidence-based clinical intervention for restorative physical health, chronic pain relief, and athletic rehabilitation.",
    heroHeadline: "Move Better. Recover Stronger.",
    tagline: "Clinical Diagnosis & Evidence-Based Recovery for Pain Relief and Peak Function.",
    image: "/images/physiotherapy_treatment.jpg",
    iconName: "HeartPulse",
    pillarsHeading: "Advanced Therapeutics",
    pillarsSubheading: "Evidence-based clinical intervention for restorative physical health, chronic pain relief, and athletic rehabilitation.",
    pillars: [
      {
        title: "Structural Spinal Care",
        description: "Specialized decompression and mobilization protocols for chronic lower back pain, neck strain, herniated discs, and scoliosis posture correction.",
        iconName: "Activity",
        tag: "SPINAL CARE"
      },
      {
        title: "Sports Traumatology",
        description: "Clinical recovery protocols for joint sprains, ligament tears (ACL, meniscus), tendonitis, and shoulder impingement, assuring safe return to sport.",
        iconName: "ShieldCheck",
        tag: "ATHLETIC REHAB"
      },
      {
        title: "Kinetic Re-education",
        description: "Manual therapy (dry needling, myofascial release) combined with movement re-patterning to resolve long-standing postural compensation.",
        iconName: "Sparkles",
        tag: "KINETIC RESET"
      }
    ],
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
      duration: "45 – 60 Mins",
      intensity: "Restorative & Therapeutic",
      format: "Clinical 1-on-1 Consultation"
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
