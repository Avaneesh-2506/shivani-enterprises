export interface LedCategory {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  flyerImage?: string;
  wattageRange: string;
  ipRating: string;
  warranty: string;
  applications: string[];
  features: string[];
  subProducts: string[];
}

export interface LedCatalogItem {
  id: string;
  name: string;
  category: "Outdoor & Solar" | "Commercial & Industrial" | "Indoor & Architectural" | "Decorative & Festive" | "Security & Power";
  description?: string;
  typicalWattage: string;
  popularApplications: string;
  keyHighlight: string;
  tag: string;
}

export const FEATURED_LED_CATEGORIES: LedCategory[] = [
  {
    id: "flood-lights",
    name: "Flood Lights & Stadium Lights",
    badge: "Heavy Duty IP66",
    tagline: "Ultra-High Lumen Outdoor & Sports Illumination",
    description:
      "Engineered with die-cast aluminum housing, surge protection (4kV - 10kV), and high-efficiency SMD/COB chips for sports arenas, building facades, hoardings, and large outdoor industrial yards.",
    image: "/assets/images/led/flood-lights-card.png",
    flyerImage: "/assets/images/led/flood-lights-flyer.png",
    wattageRange: "30W - 500W",
    ipRating: "IP66 / IP67 Waterproof",
    warranty: "2 - 5 Years",
    applications: ["Stadiums & Playgrounds", "Building Facades", "Billboards & Hoardings", "Industrial Compounds", "Toll Plazas"],
    features: ["Toughened Glass Lens", "4kV to 10kV Surge Protection", "130-150 Lumens/Watt", "Corrosion Resistant Powder Coating"],
    subProducts: ["Flood Lights", "Stadium Lights", "High-Mast Flood Fixtures", "Heavy Industrial Floods"]
  },
  {
    id: "street-lights",
    name: "Street Lights & Highway Lights",
    badge: "Commercial Grade",
    tagline: "Municipal, Highway & Colony Road Illumination",
    description:
      "Aerodynamic pressure die-cast street lighting luminaires designed with secondary optics for uniform light distribution on public streets, residential townships, and industrial parks.",
    image: "/assets/images/led/street-light-card.png",
    flyerImage: "/assets/images/led/street-lights-flyer.png",
    wattageRange: "20W - 150W",
    ipRating: "IP65 / IP66 Waterproof",
    warranty: "2 - 5 Years",
    applications: ["Highways & Expressways", "Municipal Streets", "Township Roads", "Factory Perimeters", "Institutions & Campuses"],
    features: ["Optically Designed PMMA Lens", "Auto-Dusk-to-Dawn Driver Option", "Thermal Dissipation Fins", "Wide Voltage Range (140-300V)"],
    subProducts: ["Street Light", "Highway Cobra Head Lights", "Smart Street Lights", "Solar Compatible Fixtures"]
  },
  {
    id: "solar-street-lights",
    name: "Solar Street Lights & Solar Panels",
    badge: "Zero Electricity Bill",
    tagline: "Integrated All-in-One & Split Solar Luminaire Systems",
    description:
      "Green energy standalone lighting systems featuring high-efficiency Mono/Poly solar panels, long-life LiFePO4 lithium batteries, intelligent MPPT charge controllers, and PIR motion sensors.",
    image: "/assets/images/led/solar-street-lights-flyer.png",
    flyerImage: "/assets/images/led/solar-panel-flyer.png",
    wattageRange: "15W - 120W Solar LED",
    ipRating: "IP65 Waterproof",
    warranty: "3 - 5 Years (Panels 25 Yrs)",
    applications: ["Rural Electrification", "Farmhouses & Resorts", "Colonies & Parks", "Highway Pathways", "Eco-Zones"],
    features: ["Built-in LiFePO4 Lithium Battery", "MPPT Intelligent Solar Controller", "PIR Motion Sensor Dimming", "Autonomy for 2-3 Cloudy Days"],
    subProducts: ["Solar Street Light", "All-In-One Solar Lights", "Split Solar Lighting", "Solar Panels (50W - 550W)"]
  },
  {
    id: "high-bay-light",
    name: "High Bay Industrial Lights",
    badge: "Industrial UFO Grade",
    tagline: "Maximum Ceiling Lumens for Warehouses & Factories",
    description:
      "UFO style and linear high-bay fixtures designed for tall ceiling installations (6m - 15m), offering glare-controlled uniform foot-candles for manufacturing lines, warehouses, and logistics hubs.",
    image: "/assets/images/led/high-bay-light-card.png",
    flyerImage: "/assets/images/led/high-bay-light-card.png",
    wattageRange: "50W - 250W",
    ipRating: "IP65 Dust & Water Resistant",
    warranty: "2 - 5 Years",
    applications: ["Warehouses & Logistics Hubs", "Manufacturing Units", "Aircraft Hangars", "Gymnasiums & Indoor Stadiums", "Cold Storage"],
    features: ["Cold Forged Aluminum Heat Sink", "Hook & Bracket Mount", "Flicker-Free Driver", "Low Glare Reflector Options"],
    subProducts: ["High Bay Light", "UFO High Bay", "Linear Industrial Bay", "Crane Flood Lights"]
  },
  {
    id: "panel-lights",
    name: "Panel Lights (Round, Square & 2x2)",
    badge: "Ultra-Slim Architectural",
    tagline: "Concealed, Surface & Commercial Grid False Ceiling Lights",
    description:
      "Sleek edge-lit and back-lit LED panels designed for residential false ceilings, corporate office 2x2 modular grids, hospitals, and educational facilities with ultra-smooth diffuse illumination.",
    image: "/assets/images/led/panel-light-card.png",
    flyerImage: "/assets/images/led/panel-light-card.png",
    wattageRange: "3W - 60W (2x2 ft: 36W/48W)",
    ipRating: "IP20 / IP40 Indoor",
    warranty: "2 Years",
    applications: ["Corporate Offices", "Hospital Wards & Labs", "Showrooms & Banks", "Modern Residential Living", "Schools & Colleges"],
    features: ["No Dark Spots / Uniform Glow", "Ultra Slim 10mm Profile", "Spring Clamps & Surface Rings", "Warm White, Natural White & Cool White"],
    subProducts: ["Commercial Panel Light", "Panel Light Round and Square", "Adjustable Panel Light", "Grace Panel Lights", "PC Surface Lights"]
  },
  {
    id: "led-bulbs",
    name: "LED Bulbs & High-Wattage Commercial Bulbs",
    badge: "Everyday Efficiency",
    tagline: "Standard B22/E27 Household & High-Wattage Commercial Bulbs",
    description:
      "Energy-saving LED retrofit bulbs from 0.5W night bulbs to 80W heavy hammer T-bulbs with high CRI (>80), wide beam angle, and built-in surge protection for everyday Indian power fluctuations.",
    image: "/assets/images/led/led-bulbs-card.png",
    flyerImage: "/assets/images/led/led-bulb-flyer.png",
    wattageRange: "0.5W, 3W, 7W, 9W, 12W, 15W, 18W, 30W - 80W",
    ipRating: "IP20 Indoor",
    warranty: "1 - 2 Years",
    applications: ["Homes & Apartments", "Retail Shops", "High-Ceiling Commercial Shops", "Street Stalls", "Warehouses"],
    features: ["High Color Rendering Index (CRI > 80)", "Wide 220° Light Spread", "Up to 85% Power Saving", "B22 & E27 Base Options"],
    subProducts: ["LED Bulbs", "High Wattage Bulb", "LED Tube Light", "Sensor Tube Light", "Bulk Headlight"]
  },
  {
    id: "cob-downlights",
    name: "COB Downlights & Cylinder Lights",
    badge: "Architectural Focus",
    tagline: "Deep Recessed, Swivel Gimbal & Surface Cylinders",
    description:
      "Precision focused architectural ceiling fixtures designed for mood lighting, spot highlighting, art displays, luxury residences, boutique retail showrooms, and hotel lobbies.",
    image: "/assets/images/led/cob-light-card.png",
    flyerImage: "/assets/images/led/cob-light-card.png",
    wattageRange: "3W - 45W",
    ipRating: "IP20 (Rainproof COB: IP65)",
    warranty: "2 Years",
    applications: ["Showrooms & Retail Outlets", "Art Galleries & Sculptures", "Luxury Living Rooms", "Hotel Corridors & Lobbies", "Balcony Soffits"],
    features: ["Anti-Glare Deep Recessed Baffles", "Tilt & Swivel Gimbal Heads", "Zoomable 15°-60° Beam Angle", "Premium Powder Coated Finish"],
    subProducts: [
      "COB Light",
      "Low Deep COB Light",
      "Wall Washer COB Light",
      "Movable COB Light",
      "Rainproof COB Light",
      "Zoom Round COB Light",
      "360° Surface Cylinder Lights",
      "Surface Cylinder Lights",
      "Movable Cylinder Lights",
      "Mega Surface Cylinder Lights"
    ]
  },
  {
    id: "garden-bollard-lights",
    name: "Garden, Bollard & Landscape Lights",
    badge: "Outdoor Elegance",
    tagline: "Pathways, Lawns, Pillars, Fountains & Facades",
    description:
      "Weatherproof outdoor landscape lighting solutions that enhance architectural curb appeal, garden walkways, swimming pool decks, exterior boundaries, and villa driveways.",
    image: "/assets/images/led/garden-light-card.png",
    flyerImage: "/assets/images/led/bollard-lights-flyer.png",
    wattageRange: "3W - 36W",
    ipRating: "IP65 / IP67 / IP68 (Fountain)",
    warranty: "2 Years",
    applications: ["Villa Gardens & Lawns", "Hotel Resorts & Clubhouses", "Driveways & Walkways", "Fountains & Swimming Pools", "Pillar Gates"],
    features: ["Anti-Rust Die Cast Aluminum / Stainless Steel", "Submersible Underwater Rated Fixtures", "Warm White 3000K & RGB Colors", "Ground Spike & Base Flange Mount"],
    subProducts: ["Garden Light", "Bollard Light", "Designer Gate Light", "Footlight", "In Ground Light", "Fountain Light", "Ball Lights"]
  },
  {
    id: "wall-hanging-designer-lights",
    name: "Wall Lights & Designer Hanging Lights",
    badge: "Contemporary Luxury",
    tagline: "Up-Down Facade, Linear Profile & Modern Chandeliers",
    description:
      "Aesthetic designer lighting fixtures encompassing modern up-down architectural wall sconces, linear aluminum suspended profiles, geometric hexagonal lights, and ring donut halo pendants.",
    image: "/assets/images/led/wall-light-card.png",
    flyerImage: "/assets/images/led/designer-fancy-lights-flyer.png",
    wattageRange: "6W - 90W",
    ipRating: "IP20 Indoor / IP65 Facade",
    warranty: "2 Years",
    applications: ["Modern Residences & Villas", "Conference Rooms & Offices", "Cafes, Restaurants & Lounges", "Exterior Facade Elevation", "Staircases"],
    features: ["Dual Directional Beams", "Customizable Profile Lengths", "Minimalist Scandinavian & Industrial Styling", "Multiple CCT Tones"],
    subProducts: [
      "Wall Light",
      "Curv 3 + 3 Wall Lights",
      "Butterfly Wall Lights",
      "Liner Hanging Profile Lights",
      "Drum Hanging Light",
      "Ring Donut Hanging Light",
      "Hexa Liner Hanging Light",
      "Tridrum Hanging Light",
      "Y Shape Hanging Light",
      "Square Rectangle Hanging Light",
      "Full K+ half K+ Lights"
    ]
  },
  {
    id: "rope-strip-lights",
    name: "Rope Lights, Strip Lights & Jhalar",
    badge: "Cove & Festive",
    tagline: "High-Density Neon, Silicon Coves & Decorative Strings",
    description:
      "Continuous run flexible lighting for false ceiling cove illumination, architectural perimeter outlines, cabinet backlighting, and festive decorative exterior illumination.",
    image: "/assets/images/led/rope-light-card.png",
    flyerImage: "/assets/images/led/rope-lights-flyer.png",
    wattageRange: "8W - 18W per meter",
    ipRating: "IP20 / IP65 / IP67 Silicon Tube",
    warranty: "1 - 2 Years",
    applications: ["Ceiling Cove Lighting", "Under-Cabinet & Wardrobe Accent", "Building Elevation Outlines", "Festive & Wedding Decor", "Bar Counters"],
    features: ["High LED Density (120-240 LEDs/m)", "Seamless Cut & Connect Points", "Warm White, Golden Yellow, RGB", "Flexible Silicon Casing"],
    subProducts: ["Rope Light", "Strip Light", "Designer Jhalar Light", "COB Strip Rolls"]
  },
  {
    id: "poles-cctv-surveillance",
    name: "Designer Street Poles & CCTV Surveillance",
    badge: "Infrastructure & Security",
    tagline: "Octagonal / Cast Poles, HD Surveillance & Security Cameras",
    description:
      "Turnkey outdoor infrastructure solutions including heavy-duty ornamental cast iron and octagonal GI lighting poles, solar panels, and high-definition CCTV security cameras with smart night vision.",
    image: "/assets/images/led/cctv-camera-card.png",
    flyerImage: "/assets/images/led/designer-street-pols-flyer.png",
    wattageRange: "Custom / 12V DC Cameras",
    ipRating: "IP66 Weatherproof",
    warranty: "2 - 5 Years",
    applications: ["Gated Communities & Townships", "Commercial Plazas & Malls", "Highway Intersections", "Government & Institutional Campuses"],
    features: ["Hot-Dip Galvanized & Cast Iron Poles", "Full HD / 4K Night Vision CCTV", "Remote App Viewing & Motion Alerts", "Complete Mounting Accessories"],
    subProducts: ["Designer Street Poles", "Designer Street Pols", "CCTV Camera", "Solar Panel", "Mounting Brackets"]
  }
];

export const ALL_LED_VARIETIES_CATALOG: LedCatalogItem[] = [
  { id: "v-1", name: "Flood Lights", category: "Outdoor & Solar", typicalWattage: "30W - 500W", popularApplications: "Grounds, Hoardings, Facades", keyHighlight: "IP66, Toughened Glass, 10kV Surge", tag: "Industrial" },
  { id: "v-2", name: "Stadium Lights", category: "Outdoor & Solar", typicalWattage: "400W - 1000W", popularApplications: "Cricket / Football Arenas, High-mast", keyHighlight: "Ultra-high throw, Narrow Beam Optics", tag: "Heavy Duty" },
  { id: "v-3", name: "High Bay Light", category: "Commercial & Industrial", typicalWattage: "50W - 250W", popularApplications: "Warehouses, Factories, Sheds", keyHighlight: "UFO Cold Forged Aluminum, 140 lm/W", tag: "Industrial" },
  { id: "v-4", name: "Street Light", category: "Outdoor & Solar", typicalWattage: "20W - 150W", popularApplications: "Municipal Roads, Highways, Societies", keyHighlight: "Die-cast body, Wide Lens Distribution", tag: "Municipal" },
  { id: "v-5", name: "Solar Street Light", category: "Outdoor & Solar", typicalWattage: "15W - 100W", popularApplications: "Colonies, Farmhouses, Highways", keyHighlight: "LiFePO4 Battery + MPPT Controller", tag: "Solar" },
  { id: "v-6", name: "Commercial Panel Light", category: "Commercial & Industrial", typicalWattage: "36W - 60W (2x2 ft)", popularApplications: "Offices, Hospitals, Banks", keyHighlight: "Backlit & Edge-lit, Zero Flickering", tag: "Commercial" },
  { id: "v-7", name: "Panel Light Round and Square", category: "Indoor & Architectural", typicalWattage: "3W - 24W", popularApplications: "Home False Ceilings, Corridors", keyHighlight: "Ultra Slim, Concealed & Surface Fit", tag: "Residential" },
  { id: "v-8", name: "Adjustable Panel Light", category: "Indoor & Architectural", typicalWattage: "6W - 18W", popularApplications: "Universal False Ceiling Cutouts", keyHighlight: "Sliding spring clips fit any hole size", tag: "Versatile" },
  { id: "v-9", name: "Concealed Light", category: "Indoor & Architectural", typicalWattage: "3W - 9W", popularApplications: "Deep False Ceiling Baffles", keyHighlight: "Anti-glare recessed optics, Warm/White", tag: "Architectural" },
  { id: "v-10", name: "Deep Light", category: "Indoor & Architectural", typicalWattage: "5W - 15W", popularApplications: "Accent Lighting, Wall Washing", keyHighlight: "Deeply recessed COB for zero eye glare", tag: "Premium" },
  { id: "v-11", name: "Spotlight", category: "Indoor & Architectural", typicalWattage: "3W - 18W", popularApplications: "Niches, Artifacts, Wardrobes", keyHighlight: "Sharp focused 24°/36° beam angle", tag: "Focused" },
  { id: "v-12", name: "LED Tube Light", category: "Commercial & Industrial", typicalWattage: "10W - 40W (T5/T8)", popularApplications: "Offices, Kitchens, Garages", keyHighlight: "Polycarbonate shatterproof batten", tag: "Everyday" },
  { id: "v-13", name: "Sensor Tube Light", category: "Commercial & Industrial", typicalWattage: "18W / 20W", popularApplications: "Basement Parking, Stairwells", keyHighlight: "Auto Microwave motion detection (dims to 20%)", tag: "Smart" },
  { id: "v-14", name: "Bulk Headlight", category: "Commercial & Industrial", typicalWattage: "12W - 24W", popularApplications: "Balconies, Industrial Staircases, Damp Areas", keyHighlight: "IP65 Impact resistant enclosure", tag: "Heavy Duty" },
  { id: "v-15", name: "High Wattage Bulb", category: "Commercial & Industrial", typicalWattage: "30W - 80W (T-Bulb)", popularApplications: "High-ceiling Shops, Godowns", keyHighlight: "High lumen output with B22 base", tag: "Commercial" },
  { id: "v-16", name: "LED Bulbs", category: "Indoor & Architectural", typicalWattage: "0.5W, 3W, 7W, 9W, 12W, 15W", popularApplications: "Household Lamps, Fixtures", keyHighlight: "Surge protected up to 4kV, CRI > 80", tag: "Essential" },
  { id: "v-17", name: "Wall Track Light", category: "Indoor & Architectural", typicalWattage: "10W - 30W per head", popularApplications: "Fashion Boutiques, Retail Showrooms", keyHighlight: "Magnetic & Linear 1m/2m rails, 360° adjust", tag: "Retail" },
  { id: "v-18", name: "Designer Gate Light", category: "Decorative & Festive", typicalWattage: "10W - 25W (B22/E27)", popularApplications: "Boundary Wall Pillars, Main Gates", keyHighlight: "Classic Heritage & Sleek Modern designs", tag: "Decorative" },
  { id: "v-19", name: "Bollard Light", category: "Outdoor & Solar", typicalWattage: "7W - 20W", popularApplications: "Garden Walkways, Resort Pathways", keyHighlight: "Cast Aluminum 1ft/2ft/3ft height, IP65", tag: "Landscape" },
  { id: "v-20", name: "Garden Light", category: "Outdoor & Solar", typicalWattage: "5W - 15W", popularApplications: "Lawns, Flower Beds, Tree Uplighting", keyHighlight: "Ground spike with angle tilt, waterproof", tag: "Landscape" },
  { id: "v-21", name: "Footlight", category: "Indoor & Architectural", typicalWattage: "1W - 3W", popularApplications: "Staircase Steps, Night Corridors", keyHighlight: "Recessed wall step illumination, warm glow", tag: "Safety" },
  { id: "v-22", name: "In Ground Light", category: "Outdoor & Solar", typicalWattage: "3W - 18W", popularApplications: "Driveways, Pavements, Trees", keyHighlight: "Walkover & Driveover toughened glass, IP67", tag: "Burial" },
  { id: "v-23", name: "Fountain Light", category: "Outdoor & Solar", typicalWattage: "6W - 36W (RGB/Warm)", popularApplications: "Water Fountains, Swimming Pools", keyHighlight: "IP68 Submersible Stainless Steel 316", tag: "Underwater" },
  { id: "v-24", name: "Rope Light", category: "Decorative & Festive", typicalWattage: "10W - 14W / meter", popularApplications: "Ceiling Coves, Building Outlines, Diwali", keyHighlight: "Flexible AC 220V PVC pipe, 50m rolls", tag: "Decorative" },
  { id: "v-25", name: "Strip Light", category: "Indoor & Architectural", typicalWattage: "10W - 24W / meter", popularApplications: "Modern Coves, Cabinets, Shelves", keyHighlight: "Dotless COB & 2835 SMD 12V/24V high CRI", tag: "Architectural" },
  { id: "v-26", name: "COB Light", category: "Indoor & Architectural", typicalWattage: "7W - 30W", popularApplications: "Living Rooms, Boutiques, Showrooms", keyHighlight: "Sharp punchy light beam, aluminum heatsink", tag: "Architectural" },
  { id: "v-27", name: "Low Deep COB Light", category: "Indoor & Architectural", typicalWattage: "6W - 20W", popularApplications: "Luxury Residences, Hotels", keyHighlight: "Deep anti-glare reflector for visual comfort", tag: "Luxury" },
  { id: "v-28", name: "Wall Washer COB Light", category: "Indoor & Architectural", typicalWattage: "12W - 30W", popularApplications: "Texture Walls, Feature Walls, Artwork", keyHighlight: "Asymmetric beam illuminates full wall evenly", tag: "Accent" },
  { id: "v-29", name: "Movable COB Light", category: "Indoor & Architectural", typicalWattage: "7W - 25W", popularApplications: "Galleries, Display Windows", keyHighlight: "Dual-axis gimbal swivel 360° tilt", tag: "Flexible" },
  { id: "v-30", name: "Rainproof COB Light", category: "Outdoor & Solar", typicalWattage: "10W - 20W", popularApplications: "Balcony Ceilings, Porch Soffits", keyHighlight: "IP65 Sealed gasket against moisture & rain", tag: "Outdoor" },
  { id: "v-31", name: "Lexus Pro Series Light", category: "Indoor & Architectural", typicalWattage: "12W - 36W", popularApplications: "High-end Architect Projects", keyHighlight: "Ultra high efficiency > 150 lm/W, low THD", tag: "Pro Series" },
  { id: "v-32", name: "Grace Panel Lights", category: "Indoor & Architectural", typicalWattage: "6W - 24W", popularApplications: "Modern Designer Interiors", keyHighlight: "Frameless edge-to-edge glowing surface", tag: "Modern" },
  { id: "v-33", name: "Curv Spot Light", category: "Indoor & Architectural", typicalWattage: "5W - 12W", popularApplications: "Niche Ceilings, Bedroom Corners", keyHighlight: "Curved aesthetic casing with warm focus", tag: "Aesthetic" },
  { id: "v-34", name: "PC Surface Lights", category: "Commercial & Industrial", typicalWattage: "12W - 24W", popularApplications: "Low False Ceilings, Basements", keyHighlight: "Direct RCC ceiling mount, Polycarbonate", tag: "Surface" },
  { id: "v-35", name: "Zoom Round COB Light", category: "Indoor & Architectural", typicalWattage: "10W - 25W", popularApplications: "Jewelry Stores, Art Museums", keyHighlight: "Manual twist zoom from 15° spot to 60° flood", tag: "Precision" },
  { id: "v-36", name: "360° Surface Cylinder Lights", category: "Indoor & Architectural", typicalWattage: "10W - 30W", popularApplications: "Cafes, Industrial Lofts, Staircases", keyHighlight: "360° omni-directional glowing cylinder body", tag: "Designer" },
  { id: "v-37", name: "Surface Cylinder Lights", category: "Indoor & Architectural", typicalWattage: "7W - 35W", popularApplications: "RCC Ceilings, Dining Areas", keyHighlight: "Clean architectural cylinder (Black / White)", tag: "Architectural" },
  { id: "v-38", name: "Movable Cylinder Lights", category: "Indoor & Architectural", typicalWattage: "10W - 20W", popularApplications: "Retail Showrooms, Lounge Ceilings", keyHighlight: "Directional tilt cylinder on surface base", tag: "Directional" },
  { id: "v-39", name: "Fusion Reflector Light", category: "Indoor & Architectural", typicalWattage: "10W - 30W", popularApplications: "Meeting Rooms, Reception Desks", keyHighlight: "Multi-cell dark reflector with zero glare (UGR<19)", tag: "Anti-Glare" },
  { id: "v-40", name: "Mega Surface Cylinder Lights", category: "Commercial & Industrial", typicalWattage: "30W - 50W", popularApplications: "Double-height Atriums, Hotel Lobbies", keyHighlight: "Heavy-duty commercial surface cylinder", tag: "High Output" },
  { id: "v-41", name: "Ball Lights", category: "Decorative & Festive", typicalWattage: "10W - 30W", popularApplications: "Landscape Lawns, Terrace Patios", keyHighlight: "Frosted spherical glowing orb (IP65)", tag: "Landscape" },
  { id: "v-42", name: "Curv 3 + 3 Wall Lights", category: "Indoor & Architectural", typicalWattage: "6W - 12W", popularApplications: "Facade Elevation, Boundary Pillars", keyHighlight: "3 beams up + 3 beams down geometric projection", tag: "Facade" },
  { id: "v-43", name: "Full K+ half K+ Lights", category: "Indoor & Architectural", typicalWattage: "10W - 24W", popularApplications: "Modern Designer Elevation", keyHighlight: "Dual-color CCT tunable & architectural geometric shapes", tag: "Modern" },
  { id: "v-44", name: "Butterfly Wall Lights", category: "Decorative & Festive", typicalWattage: "6W - 12W", popularApplications: "Feature Walls, Balconies, Lounges", keyHighlight: "Aesthetic wing-shaped light pattern spread", tag: "Decorative" },
  { id: "v-45", name: "Liner Hanging Profile Lights", category: "Commercial & Industrial", typicalWattage: "20W - 60W", popularApplications: "Corporate Workstations, Dining Islands", keyHighlight: "Extruded aluminum profile with wire suspension", tag: "Office" },
  { id: "v-46", name: "Drum Hanging Light", category: "Decorative & Festive", typicalWattage: "20W - 45W", popularApplications: "Dining Tables, Conference Rooms", keyHighlight: "Fabric & metallic drum chandelier style", tag: "Designer" },
  { id: "v-47", name: "Ring Donut Hanging Light", category: "Decorative & Festive", typicalWattage: "36W - 72W", popularApplications: "Double Height Ceilings, Receptions", keyHighlight: "Circular halo ring with inward/outward glow", tag: "Statement" },
  { id: "v-48", name: "Hexa Liner Hanging Light", category: "Commercial & Industrial", typicalWattage: "36W - 60W", popularApplications: "Tech Offices, Gyms, Studio Ceilings", keyHighlight: "Geometric 6-sided suspended honeycomb profile", tag: "Modern" },
  { id: "v-49", name: "Tridrum Hanging Light", category: "Decorative & Festive", typicalWattage: "30W - 60W", popularApplications: "Hotel Lobbies, Staircase Voids", keyHighlight: "3-tier cascading cylindrical pendant cluster", tag: "Luxury" },
  { id: "v-50", name: "Y Shape Hanging Light", category: "Commercial & Industrial", typicalWattage: "36W - 54W", popularApplications: "Co-working spaces, Designer studios", keyHighlight: "3-way Y-profile seamless aluminum luminaire", tag: "Modern" },
  { id: "v-51", name: "Square Rectangle Hanging Light", category: "Commercial & Industrial", typicalWattage: "36W - 72W", popularApplications: "Boardrooms, Modern Living", keyHighlight: "Minimalist rectilinear aluminum suspended frame", tag: "Office" },
  { id: "v-52", name: "Designer Street Poles", category: "Outdoor & Solar", typicalWattage: "3m - 12m Heights", popularApplications: "Townships, Parks, Resorts, VIP Roads", keyHighlight: "Octagonal GI & Cast iron ornamental poles", tag: "Infrastructure" },
  { id: "v-53", name: "Designer Jhalar Light", category: "Decorative & Festive", typicalWattage: "10W - 50W (Strings)", popularApplications: "Festivals, Weddings, Facade Drops", keyHighlight: "Heavy-duty waterproof curtain & pixel strings", tag: "Festive" },
  { id: "v-54", name: "Solar Panel", category: "Security & Power", typicalWattage: "50W - 550W (Mono/Poly PERC)", popularApplications: "Rooftops, Solar Streetlights, Inverters", keyHighlight: "High-efficiency Tier 1 cells, 25-Year Performance Warranty", tag: "Solar Power" },
  { id: "v-55", name: "CCTV Camera", category: "Security & Power", typicalWattage: "12V DC / PoE", popularApplications: "Commercial Premises, Societies, Homes", keyHighlight: "HD & 4K Smart Color Night Vision, Remote Mobile Access", tag: "Surveillance" }
];
