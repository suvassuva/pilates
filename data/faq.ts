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
    category: "General",
    question: "What makes Dr Pilates different from a regular gym?",
    answer: "Dr Pilates is a specialized wellness and movement studio focusing on clinical precision, core strength, joint safety, and personalized movement care. Rather than crowded gym floors, we offer private 1-on-1 and small group sessions guided by master instructors and licensed physiotherapists using state-of-the-art Reformer and EMS equipment."
  },
  {
    id: "faq-2",
    category: "Reformer Pilates",
    question: "What is Reformer Pilates and what are its main benefits?",
    answer: "Reformer Pilates utilizes a specialized spring-loaded carriage machine to provide smooth, adjustable resistance. It targets deep core stabilizers, aligns spinal posture, sculpts lean muscle, and improves joint mobility without placing heavy impact on your knees or lower back."
  },
  {
    id: "faq-3",
    category: "Reformer Pilates",
    question: "Do I need previous Pilates experience to join?",
    answer: "No prior experience is necessary! Our instructors conduct a initial movement screen and adjust spring settings specifically to your body's strength and flexibility level."
  },
  {
    id: "faq-4",
    category: "EMS Training",
    question: "What is EMS Training and how does a 20-minute session work?",
    answer: "EMS (Electrical Muscle Stimulation) uses medical-grade bio-impulses to contract over 90% of your muscle fibers simultaneously while you perform gentle functional exercises. A single 20-minute EMS session delivers muscle activation equal to a 90-minute traditional weight workout."
  },
  {
    id: "faq-5",
    category: "Physiotherapy",
    question: "How does your Physiotherapy service integrate with Pilates?",
    answer: "Our licensed physiotherapists perform thorough clinical musculoskeletal evaluations. When beneficial, we combine manual therapy with gentle Reformer Pilates exercises to safely strengthen injured areas, improve posture, and prevent re-injury."
  },
  {
    id: "faq-6",
    category: "Booking & Locations",
    question: "Where are Dr Pilates branches located in Bengaluru?",
    answer: "Our flagship Kalyan Nagar branch is located on the 3rd Floor, Y4 Heights Building, 6th Main Rd (above Starbucks Coffee), HRBR Layout, Kalyan Nagar, Bengaluru. Branch 02 details and opening schedule are coming soon!"
  },
  {
    id: "faq-7",
    category: "Booking & Locations",
    question: "How can I book an appointment or schedule a studio visit?",
    answer: "You can book directly using our website appointment form, call us at 088922 36442, or click the WhatsApp button on any page to message our reception desk directly with your preferred branch and time slot."
  },
  {
    id: "faq-8",
    category: "General",
    question: "What are your studio opening hours?",
    answer: "Our Kalyan Nagar branch is open Monday through Saturday from 6:00 AM to 8:00 PM, and Sundays from 7:00 AM to 1:00 PM."
  }
];
