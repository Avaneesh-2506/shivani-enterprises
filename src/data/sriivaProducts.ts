export interface SriivaProduct {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  accentColor: string;
  sizes: string[];
  fragranceOrFlavor?: string;
  keyBenefits: string[];
  targetSurfaces: string[];
  usageInstructions: string;
  institutionalBulkAvailable: boolean;
}

export const SRIIVA_PRODUCTS: SriivaProduct[] = [
  {
    id: "toilet-cleaner",
    name: "Sriiva Toilet Cleaner",
    category: "Sanitary Hygiene",
    subtitle: "10X Power Stain & Germ Removal",
    tagline: "Thick Power Formula with Angled Precision Neck",
    description:
      "Formulated with an advanced thick cling formula that adheres to ceramic toilet bowl surfaces, effortlessly dissolving tough yellow scale, rust deposits, and eradicating 99.9% of disease-causing germs with long-lasting deodorizing freshness.",
    image: "/assets/images/sriiva/toilet-cleaner.png",
    accentColor: "from-blue-600 to-indigo-700",
    sizes: ["500 ml", "1000 ml (1L)", "5 Litre Can (Institutional)"],
    fragranceOrFlavor: "Ocean Fresh & Sanitizing Pine",
    keyBenefits: [
      "10X Tough Stain & Limescale Removal",
      "Kills 99.9% Bacteria, Viruses & Odor-Causing Fungi",
      "Thick Viscous Formula for Better Cling & Less Consumption",
      "Safe on Ceramic Bowls, Urinals, and Septic Tanks"
    ],
    targetSurfaces: ["Western Closets", "Indian Toilet Pans", "Commercial Urinals", "Ceramic Sanitaryware"],
    usageInstructions: "Twist nozzle cap to open. Squeeze liquid under the rim and all around the bowl. Leave for 15-20 minutes, brush lightly, and flush.",
    institutionalBulkAvailable: true
  },
  {
    id: "bathroom-cleaner",
    name: "Sriiva Bathroom Cleaner",
    category: "Bathroom & Tile Care",
    subtitle: "Trigger Spray Heavy-Duty Limescale Buster",
    tagline: "Sparkling Clean Tiles, Taps, Sinks & Shower Glasses",
    description:
      "All-in-one bathroom surface specialist spray engineered to cut through stubborn soap scum, water hard spots, faucet limescale, and grime without damaging delicate chrome fittings or ceramic glaze.",
    image: "/assets/images/sriiva/bathroom-cleaner.png",
    accentColor: "from-cyan-500 to-blue-600",
    sizes: ["500 ml Trigger Spray", "1 Litre Refill", "5 Litre Bulk Can"],
    fragranceOrFlavor: "Aqua Breeze & Citrus Zest",
    keyBenefits: [
      "Dissolves Tough Soap Scum & Hard Water Scale Instantly",
      "Restores Chrome Faucet & Stainless Steel Mirror Shine",
      "Non-Abrasive Safe Formula for Vitrified & Ceramic Tiles",
      "Convenient Foam / Stream Adjustable Spray Head"
    ],
    targetSurfaces: ["Wall & Floor Tiles", "Chrome CP Fittings & Taps", "Wash Basins", "Glass Shower Partitions", "Bathtubs"],
    usageInstructions: "Spray directly onto the soiled surface. Wait for 2-3 minutes for formula activation. Wipe clean with a damp sponge and rinse with clean water.",
    institutionalBulkAvailable: true
  },
  {
    id: "floor-cleaner",
    name: "Sriiva Floor Cleaner",
    category: "Surface Disinfection",
    subtitle: "Citrus Herbal Multi-Surface Surface Protector",
    tagline: "Streak-Free Gleam with Long-Lasting Citrus Freshness",
    description:
      "High-performance concentrated disinfectant floor cleaner suitable for marble, vitrified tiles, granite, and epoxy flooring. Leaves a streak-free brilliant shine and a welcoming aromatic freshness that repels flies and pests.",
    image: "/assets/images/sriiva/floor-cleaner.png",
    accentColor: "from-emerald-500 to-green-700",
    sizes: ["500 ml", "1000 ml (1L)", "5 Litre Can (Hotel & Hospital Pack)"],
    fragranceOrFlavor: "Zesty Lemon & Pine Fresh",
    keyBenefits: [
      "99.9% Germ Shield & Anti-Bacterial Sanitization",
      "No Residue or Sticky Film on Premium Marble & Granite",
      "Natural Insect & Fly Repelling Herbal Extracts",
      "Cost-Effective Dilution Ratio (1 cap in half bucket of water)"
    ],
    targetSurfaces: ["Italian Marble", "Vitrified Tiles", "Granite", "Hardwood", "Epoxy Flooring", "Hospital Corridors"],
    usageInstructions: "Add 1 cap (approx 20ml) into 4-5 liters of water in a bucket. Mop floor gently. No need to rinse.",
    institutionalBulkAvailable: true
  },
  {
    id: "phenyl",
    name: "Sriiva White Phenyl",
    category: "Floor Disinfection",
    subtitle: "Herbal Concentrated White Phenyl Emulsion",
    tagline: "Traditional High-Strength Germicidal Floor Cleanser",
    description:
      "Rich white pine herbal emulsion manufactured with superior quality natural pine oils and emulsifiers. Delivers unmatched germicidal efficiency, natural mosquito/fly deterrence, and the timeless hygienic cleanliness trusted by hospitals, offices, and households.",
    image: "/assets/images/sriiva/phenyl.png",
    accentColor: "from-slate-400 to-slate-600",
    sizes: ["1000 ml (1L)", "5 Litre Economy Can", "20 Litre Drum (Commercial)"],
    fragranceOrFlavor: "Authentic Herbal Pine",
    keyBenefits: [
      "High-Stability Pure White Emulsion (No Oil Separation)",
      "Potent Antimicrobial Action against Airborne & Floor Pathogens",
      "Natural Fly & Mosquito Repelling Properties",
      "Ideal for Heavy Footfall Commercial & Institutional Areas"
    ],
    targetSurfaces: ["Hospital Wards", "School & College Floors", "Office Corridors", "Residential Courtyards", "Public Washrooms"],
    usageInstructions: "Dilute 50ml of Sriiva White Phenyl in 4-5 liters of water. Mix well until homogeneous white liquid forms, then mop thoroughly.",
    institutionalBulkAvailable: true
  },
  {
    id: "hand-wash",
    name: "Sriiva Hand Wash",
    category: "Personal Hygiene",
    subtitle: "Rose & Freesia Soft Moisturizing Foam",
    tagline: "Tough on Germs, Gentle and Nourishing on Hands",
    description:
      "Enriched with skin-conditioning moisturizers, natural floral essences, and antibacterial agents. Gently cleanses dirt, oils, and bacteria without drying hands even after frequent daily washes.",
    image: "/assets/images/sriiva/hand-wash.png",
    accentColor: "from-pink-500 to-rose-600",
    sizes: ["250 ml Pump Dispenser", "500 ml Refill Pouch", "5 Litre Institutional Can"],
    fragranceOrFlavor: "Floral Rose & Delicate Freesia",
    keyBenefits: [
      "pH 5.5 Skin-Balanced Dermatologically Gentle Formula",
      "Contains Glycerin & Vitamin E for Velvety Soft Hands",
      "Rich Creamy Lather that Rinses Off Easily Without Sticky Feel",
      "Refreshing Natural Floral Aromatherapy Scent"
    ],
    targetSurfaces: ["Hands & Skin", "Restaurant & Hotel Washrooms", "Office Pantries", "Home Restrooms"],
    usageInstructions: "Press pump to dispense 1-2 drops onto wet hands. Rub thoroughly including fingernails and back of hands for 20 seconds, then rinse with water.",
    institutionalBulkAvailable: true
  },
  {
    id: "dish-wash",
    name: "Sriiva Dish Wash Gel",
    category: "Kitchen & Utensil Care",
    subtitle: "Concentrated Lemon Oil Grease Release Liquid",
    tagline: "One Spoon Power Cuts Through Burnt Ghee & Heavy Oil",
    description:
      "Super-concentrated dishwashing liquid infused with real lemon citrus enzymes. Effortlessly dissolves thick oil, burnt curry residues, and foul food odors from stainless steel, non-stick cookware, bone china, and glassware without leaving white chalky scratch marks.",
    image: "/assets/images/sriiva/dish-wash.png",
    accentColor: "from-lime-500 to-green-600",
    sizes: ["250 ml", "500 ml Squeeze Bottle", "1000 ml (1L)", "5 Litre Kitchen Can"],
    fragranceOrFlavor: "Real Citrus Lime & Green Apple",
    keyBenefits: [
      "Ultra Grease-Cutting Power with Pure Lemon Extract",
      "Leaves Zero White Film or Powdery Scratches on Utensils",
      "Neutralizes Odors like Egg, Fish, Garlic & Heavy Masalas",
      "Skin-Friendly Formulation that Prevents Rough Hands"
    ],
    targetSurfaces: ["Stainless Steel Cookware", "Non-Stick Teflon Pans", "Crockery & Melamine", "Glassware", "Pressure Cookers"],
    usageInstructions: "Mix 1 teaspoon (5ml) of Sriiva Dish Wash Gel in a small bowl of water. Dip scrubber and wash utensils for gleaming sparkle.",
    institutionalBulkAvailable: true
  },
  {
    id: "dish-bar",
    name: "Sriiva Dish Bar",
    category: "Kitchen & Utensil Care",
    subtitle: "Anti-Bacterial Lemon Power Bar",
    tagline: "Long-Lasting Solid Bar with Active Scour Power",
    description:
      "Solid dishwashing bar created with active scrub granules and lemon grease-dissolving boosters. Resists soggy melting in water tubs, providing longer wash cycles and crystal clean pots, pans, and cutlery.",
    image: "/assets/images/sriiva/dish-bar.png",
    accentColor: "from-emerald-600 to-teal-700",
    sizes: ["200g Bar Pack", "300g Value Pack", "Multi-Bar Family Saver Pack"],
    fragranceOrFlavor: "Refreshing Lemon Power",
    keyBenefits: [
      "Anti-Soggy Formula Lasts Longer Without Dissolving Away",
      "Deep Stain Scouring Action for Burnt Bottom Vessels & Kadhai",
      "Contains Anti-Bacterial Sanitizing Agents",
      "Economical & Easy to Grip Solid Bar"
    ],
    targetSurfaces: ["Aluminium & Brass Vessels", "Cast Iron Kadhais", "Steel Plates & Thalis", "Daily Utensils"],
    usageInstructions: "Rub damp scrubber on Sriiva Dish Bar. Scrub oily utensil surfaces and wash thoroughly with running water.",
    institutionalBulkAvailable: true
  },
  {
    id: "room-freshener",
    name: "Sriiva Room Freshener",
    category: "Air Care & Aromatherapy",
    subtitle: "French Lavender Long-Lasting Aerosol Mist",
    tagline: "Instant Odor Neutralizer & Soothing Ambiance Creator",
    description:
      "Fine aerosol mist infused with natural lavender botanical oils and odor-capturing molecules. Instantly eliminates dampness, smoke, food, and restroom odors, converting indoor air into a calming sanctuary of freshness.",
    image: "/assets/images/sriiva/room-freshener.png",
    accentColor: "from-purple-500 to-indigo-600",
    sizes: ["250 ml Aerosol Can (Automated / Manual Spray)"],
    fragranceOrFlavor: "Soothing French Lavender & Herbal Mist",
    keyBenefits: [
      "Dual Action: Neutralizes Bad Odors + Releases Fragrance",
      "Gas-Controlled Ultra-Fine Mist that Floats Longer in Air",
      "Non-Staining on Curtains, Sofas & Bed Linens",
      "Great for Living Rooms, Hotels, Cars, Meeting Rooms & Restrooms"
    ],
    targetSurfaces: ["Indoor Room Air", "Car Interiors", "Hotel Lobbies", "Conference Rooms", "Upholstery & Curtains"],
    usageInstructions: "Shake well before use. Hold can upright and spray 2-3 times towards the center of the room.",
    institutionalBulkAvailable: true
  },
  {
    id: "multipurpose-spray",
    name: "Sriiva Multipurpose Spray",
    category: "All-Surface Disinfection",
    subtitle: "Universal Antibacterial Surface Cleanser",
    tagline: "Instant One-Step Clean & Disinfect for All Hard Surfaces",
    description:
      "Versatile ready-to-use spray sanitizer for dining tables, kitchen slabs, glass windows, computer desks, plastic chairs, refrigerator doors, and high-touch everyday handles. Cuts dust, grease, fingerprints, and smudges in seconds.",
    image: "/assets/images/sriiva/multipurpose-spray.png",
    accentColor: "from-blue-500 to-cyan-600",
    sizes: ["500 ml Trigger Spray", "1 Litre Refill", "5 Litre Institutional Can"],
    fragranceOrFlavor: "Fresh Clean Breeze",
    keyBenefits: [
      "99.9% Antibacterial Sanitization on High-Touch Surfaces",
      "Streak-Free Shine on Glass, Acrylic, Laminates & Steel",
      "Cuts Fingerprints, Dust, Light Grease & Sticky Spills",
      "Quick Evaporating Formula – No Sticky Residue"
    ],
    targetSurfaces: ["Dining & Office Tables", "Glass Windows & Mirrors", "Kitchen Countertops", "Refrigerator Doors", "Door Handles & Switches"],
    usageInstructions: "Spray directly onto target surface from 15-20cm distance. Wipe clean with a dry microfiber cloth.",
    institutionalBulkAvailable: true
  }
];
