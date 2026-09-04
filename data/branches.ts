export interface Branch {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  isMainBranch: boolean;
  address: {
    building: string;
    street: string;
    landmark: string;
    area: string;
    city: string;
    pincode: string;
    fullText: string;
  };
  phone: string;
  rawPhone: string;
  whatsapp: string;
  email: string;
  hours: string;
  rating: number;
  reviewCount: number;
  mapUrl: string;
  embedMapUrl?: string;
  image: string;
  services: string[];
  features: string[];
  statusText?: string;
}

export const BRANCHES: Branch[] = [
  {
    id: "kalyan-nagar",
    name: "Dr Pilates – Kalyan Nagar",
    shortName: "Kalyan Nagar",
    tagline: "Our Flagship Studio in North Bengaluru",
    isMainBranch: true,
    address: {
      building: "3rd Floor, Y4 Heights Building",
      street: "6th Main Rd, 2nd Block",
      landmark: "Above Starbucks Coffee, HRBR Layout",
      area: "Kalyan Nagar",
      city: "Bengaluru, Karnataka",
      pincode: "560043",
      fullText: "3rd Floor, Y4 Heights Building, 6th Main Rd, above Starbucks Coffee, HRBR Layout, 2nd Block, Kalyan Nagar, Bengaluru, Karnataka 560043"
    },
    phone: "088922 36442",
    rawPhone: "+918892236442",
    whatsapp: "918892236442",
    email: "kalyannagar@drpilates.in",
    hours: "Open · Closes 8 PM (Mon – Sat: 6:00 AM – 8:00 PM, Sun: 7:00 AM – 1:00 PM)",
    rating: 4.9,
    reviewCount: 129,
    mapUrl: "https://maps.google.com/?q=Dr+Pilates+Y4+Heights+Kalyan+Nagar+Bengaluru",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.214436577884!2d77.6436663!3d13.0220677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae173b9e4a3b7d%3A0x6b4f74cf5a0f2b3e!2sHRBR%20Layout%2C%20Kalyan%20Nagar%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    image: "/videos/instructor_welcoming_woman.jpeg",
    services: [
      "Reformer Pilates",
      "EMS Training",
      "Physiotherapy",
      "Personal Training"
    ],
    features: [
      "State-of-the-art Reformer Machines",
      "Certified EMS Technology Suite",
      "Dedicated Rehab & Physio Bay",
      "Private 1-on-1 Training Rooms",
      "Above Starbucks (Parking Available)"
    ]
  },
  {
    id: "hennur",
    name: "Dr Pilates – Hennur",
    shortName: "Hennur",
    tagline: "Premier Studio Opp. Medi Derma Hospital",
    isMainBranch: false,
    address: {
      building: "ANR Arcade, 2nd Floor",
      street: "Doddagubbi Main Road, Hennur",
      landmark: "Opposite Medi Derma Hospital, Near Legacy School",
      area: "Hennur",
      city: "Bengaluru, Karnataka",
      pincode: "560077",
      fullText: "ANR Arcade, 2nd Floor, Doddagubbi Main Road, Opposite Medi Derma Hospital, Near Legacy School, Hennur, Bengaluru, Karnataka 560077"
    },
    phone: "094810 03827",
    rawPhone: "+919481003827",
    whatsapp: "919481003827",
    email: "hennur@drpilates.in",
    hours: "Open · Closes 8 PM (Mon – Sat: 6:00 AM – 8:00 PM, Sun: 7:00 AM – 1:00 PM)",
    rating: 4.9,
    reviewCount: 45,
    mapUrl: "https://maps.google.com/?q=ANR+Arcade+Doddagubbi+Main+Road+Bengaluru+560077",
    image: "/videos/woman_walking_outside.jpeg",
    services: [
      "Reformer Pilates",
      "EMS Training",
      "Physiotherapy",
      "Personal Training"
    ],
    features: [
      "Modern Reformer Equipment",
      "Full Body EMS Suite",
      "Expert Physiotherapist Consultations",
      "Customized Movement Plans",
      "Opposite Medi Derma Hospital (Parking Available)"
    ],
    statusText: "Now Open! Accepting bookings for Reformer Pilates, EMS Training & Physiotherapy."
  }
];

export function getBranchById(id: string): Branch {
  return (
    BRANCHES.find((b) => b.id === id || (id === "doddagubbi" && b.id === "hennur")) ||
    BRANCHES[0]
  );
}

export function generateWhatsAppUrl(branchId: string, customMessage?: string): string {
  const branch = getBranchById(branchId);
  const text = customMessage
    ? customMessage
    : `Hi Dr Pilates, I would like to enquire about an appointment at ${branch.shortName} branch.`;
  return `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function generateCallUrl(branchId: string): string {
  const branch = getBranchById(branchId);
  return `tel:${branch.rawPhone}`;
}
