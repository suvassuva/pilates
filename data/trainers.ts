export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specializations: string[];
  bio: string;
  image: string;
  certification: string;
}

export const TRAINERS: Trainer[] = [
  {
    id: "trainer-1",
    name: "Dr. Ananya Rao",
    role: "Lead Physiotherapist & Pilates Specialist",
    experience: "9+ Years Experience",
    specializations: [
      "Clinical Reformer Pilates",
      "Spinal Rehabilitation",
      "Postural Realignment",
      "Pre/Post Natal Care"
    ],
    bio: "Dr. Ananya combines clinical physiotherapy expertise with advanced Reformer Pilates methods to help clients recover from chronic spinal discomfort, rebuild core strength, and achieve posture alignment.",
    image: "https://images.unsplash.com/photo-1594824813570-78a333e1033d?auto=format&fit=crop&q=80&w=800",
    certification: "B.P.T, Certified Stott Pilates Master Practitioner"
  },
  {
    id: "trainer-2",
    name: "Rohan Verma",
    role: "Senior EMS & Performance Coach",
    experience: "7+ Years Experience",
    specializations: [
      "EMS Muscle Stimulation",
      "Metabolic Conditioning",
      "Body Re-composition",
      "Athletic Performance"
    ],
    bio: "Specializing in high-efficiency electrical muscle stimulation, Rohan designs targeted 20-minute protocols that maximize muscle activation, boost metabolism, and protect vulnerable joints.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800",
    certification: "Certified EMS Specialist (Germany), CSCS"
  },
  {
    id: "trainer-3",
    name: "Priya Sharma",
    role: "Reformer Pilates Instructor",
    experience: "6+ Years Experience",
    specializations: [
      "Dynamic Reformer Pilates",
      "Flexibility & Mobility",
      "Core Sculpting",
      "Functional Movement"
    ],
    bio: "Priya brings an empowering, detail-oriented approach to Reformer Pilates, focusing on micro-adjustments, breath control, and graceful fluid movement patterns for ultimate body tone.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    certification: "Certified Comprehensive Pilates Instructor (Polestar)"
  },
  {
    id: "trainer-4",
    name: "Karan Patel",
    role: "Personal Trainer & Strength Coach",
    experience: "8+ Years Experience",
    specializations: [
      "1-on-1 Personal Training",
      "Hypertrophy & Tone",
      "Functional Fitness",
      "Injury Rehabilitation"
    ],
    bio: "Karan works closely with individuals of all fitness backgrounds, customizing resistance and functional training programs focused on safe progression and sustainable life transformations.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    certification: "ACE Certified Personal Trainer, Functional Movement Specialist"
  }
];
