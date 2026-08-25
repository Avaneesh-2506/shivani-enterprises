export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  phones: {
    display: string;
    raw: string;
    isPrimary?: boolean;
    isWhatsapp?: boolean;
  }[];
  emails: string[];
  workingHours: {
    weekdays: string;
    sunday: string;
  };
  whatsapp: {
    number: string;
    message: string;
    link: string;
  };
  brands: {
    name: string;
    tagline: string;
    category: string;
  }[];
  stats: {
    label: string;
    value: string;
    suffix?: string;
    description: string;
  }[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "Shivani Enterprises",
  legalName: "Shivani Enterprises Lucknow",
  tagline: "Distributors of Premium LED Lighting & SRIIVA House Cleaning Products",
  description:
    "Shivani Enterprises is Lucknow's trusted authorized wholesale and institutional distributor of high-efficiency Sonshiv LED Lighting Solutions and hospital-grade SRIIVA House Cleaning & Hygiene Essentials. Located in Vibhav Khand, Gomtinagar, we cater to builders, contractors, retail dealers, hotels, hospitals, and commercial establishments across Uttar Pradesh.",
  address: {
    line1: "4/35, Rina Tower Basement",
    line2: "Near Mantri Awas, Vibhav Khand",
    area: "Gomtinagar",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226010",
    full: "4/35, Rina Tower Basement, Near Mantri Awas, Vibhav Khand, Gomtinagar, Lucknow - 226010",
  },
  phones: [
    {
      display: "+91 8601551343",
      raw: "+918601551343",
      isPrimary: true,
      isWhatsapp: true,
    },
    {
      display: "+91 9305848380",
      raw: "+919305848380",
      isPrimary: false,
      isWhatsapp: false,
    },
  ],
  emails: ["shivanienterpriseslko@gmail.com", "info@shivanienterprises.in"],
  workingHours: {
    weekdays: "Monday - Saturday: 9:30 AM to 8:30 PM",
    sunday: "Sunday: Open for Bulk Orders & Dealer Consultation",
  },
  whatsapp: {
    number: "918601551343",
    message:
      "Hello Shivani Enterprises, I would like to inquire about LED Lighting and SRIIVA Cleaning Products wholesale prices.",
    link: "https://wa.me/918601551343?text=Hello%20Shivani%20Enterprises%2C%20I%20would%20like%20to%20inquire%20about%20LED%20Lighting%20and%20SRIIVA%20Cleaning%20Products.",
  },
  brands: [
    {
      name: "SONSHIV",
      tagline: "Lighting A Better Tomorrow",
      category: "Premium Commercial, Industrial, Solar & Architectural LED Lighting",
    },
    {
      name: "SRIIVA",
      tagline: "House Cleaning Products",
      category: "Complete Range of Household & Institutional Hygiene Formulations",
    },
  ],
  stats: [
    {
      label: "LED Varieties",
      value: "100+",
      description: "Industrial, Commercial, Solar & Decorative lighting fixtures",
    },
    {
      label: "SRIIVA Essentials",
      value: "9+",
      description: "Floor, Bathroom, Handwash, Dishwash & Disinfection cleaners",
    },
    {
      label: "Projects & Clients",
      value: "500+",
      description: "Builders, contractors, hotels, institutions & retail dealers",
    },
    {
      label: "Pan-UP Logistics",
      value: "100%",
      description: "Direct dispatch from Gomtinagar, Lucknow warehouse",
    },
  ],
};
