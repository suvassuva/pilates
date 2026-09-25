export interface FAQItem {
  id: string;
  category: "General" | "Reformer Pilates" | "EMS Training" | "Physiotherapy" | "Booking & Locations";
  question: string;
  answer: string;
}

export const FAQ_CATEGORIES = [
  "All",
  "General",
  "Reformer Pilates",
  "EMS Training",
  "Physiotherapy",
  "Booking & Locations"
] as const;

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Reformer Pilates",
    question: "What is Reformer Pilates?",
    answer: "Reformer Pilates is a full-body conditioning method performed on a specialized carriage machine that uses springs, pulleys, and straps for resistance. Unlike mat pilates, the reformer offers adjustable resistance, providing both deep support for rehabilitation and high-intensity challenge for athletic performance."
  },
  {
    id: "faq-2",
    category: "General",
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
    category: "Booking & Locations",
    question: "How do I book a consultation?",
    answer: "Booking is simple. Click any 'Book Assessment' or 'Book Consultation' CTA, fill out your contact details, and choose your service of interest. Our clinic coordinators will reach out within 2 hours to confirm your physical audit slot. You can also call us directly or click the WhatsApp widget."
  }
];
