export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQ_CATEGORIES = [
  "All",
  "General",
  "Reformer Pilates",
  "Getting Started",
  "Sessions",
  "Rehabilitation",
  "Physiotherapy",
  "Pre & Postnatal",
  "Booking & Locations"
] as const;

export const FAQS: FAQItem[] = [
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
    question: "Do You offer physiotherapy and rehabilitation?",
    answer: "Yes. Dr Pilates combines Pilates-based movement training with physiotherapy-informed care. Treatment and rehabilitation plans depend on individual needs and should be guided by an appropriate assessment."
  },
  {
    id: "faq-8",
    category: "Sessions",
    question: "How many times a week should I practise Pilates?",
    answer: "For many people, two to three sessions per week is a reasonable starting point. The ideal frequency depends on your goals, fitness level, recovery, and any medical considerations."
  },
  {
    id: "faq-9",
    category: "General",
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
    category: "General",
    question: "What equipment do you use at Dr Pilates?",
    answer: "Our studio features professional Merrithew Pilates equipment and specialised apparatus to support a range of exercises, from foundational movement to more advanced training."
  },
  {
    id: "faq-12",
    category: "Getting Started",
    question: "What should I wear for my first Pilates class?",
    answer: "Wear comfortable, stretchable, well-fitted workout clothing that allows free movement. Grip socks are recommended for hygiene and traction; please confirm the studio's requirements when booking."
  },
  {
    id: "faq-13",
    category: "Booking & Locations",
    question: "How do I book a session at Dr Pilates?",
    answer: "Contact our team to enquire about group or private sessions, available timings, pricing, and the most suitable programme for your goals."
  },
  {
    id: "faq-14",
    category: "Booking & Locations",
    question: "Where is Dr Pilates located?",
    answer: "Visit our Kalyan Nagar studio in Bengaluru, located in the HRBR Layout area and Kothanur studio located off Hennur Road. Contact our team for directions and current availability."
  }
];
