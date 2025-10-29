import Cement from "../assets/Cement.jpeg";
import Steel from "../assets/Steelbar.jpeg";
import MSand from "../assets/MSand.jpeg";
import Bricks from "../assets/Bricks.jpeg";
import { Layers, Wrench, Construction,  ToyBrick } from 'lucide-react';

export const products = [
  {
    id: "1",
    name: "Coarse aggregates",
    category: "Concrete & Cement",
    img: [Cement],
    images: [Cement, Cement, Cement],
    price: "₹350 per BAG",
    description: "High-Strength cement for RCC works.",
    icon: Layers,  // Icon for cement
    supplier: "BuildMart Inc.",
    composition: "Portland cement with high durability",
    usage: "For all concrete and masonry works",
    storage: "Keep dry and away from sunlight",
    warranty: "2-year limited warranty",
    keyFeatures: [
      "High Strength",
      "Quick Setting",
      "Durable and long-lasting",
      "Certified Quality"
    ],
    technicalSpecs: [
      { label: "Material Grade", value: "Premium Quality" },
      { label: "Certification", value: "ISO 9001" },
      { label: "Application", value: "Construction" },
      { label: "Origin", value: "India" }
    ]
  },
  {
    id: "2",
    name: "Ready-Mix Concrete (RMC)",
    category: "Steel & Rebar",
    img: [Steel],
    images: [Steel, Steel, Steel],
    price: "₹60 per KG",
    description: "Ductile and strong steel bars for construction.",
    icon: Wrench,  // Icon for steel
    supplier: "SteelCorp",
    composition: "High-carbon steel with anti-corrosion coating",
    usage: "For RCC and structural reinforcement",
    storage: "Store under cover, avoid moisture contact",
    warranty: "5-year structural warranty",
    keyFeatures: [
      "High Ductility",
      "Anti-Corrosive",
      "Excellent Bonding with Concrete",
      "Certified Quality"
    ],
    technicalSpecs: [
      { label: "Grade", value: "Fe 500D" },
      { label: "Diameter", value: "8mm to 32mm" },
      { label: "Standard", value: "IS 1786:2008" },
      { label: "Origin", value: "India" }
    ]
  },
  {
    id: "3",
    name: "M‑Sand (Manufactured Sand)",
    category: "Aggregates & Sand",
    img: [MSand],
    images: [MSand, MSand, MSand],
    price: "₹900 per TON",
    description: "Premium quality manufactured sand for concrete.",
    icon: Construction,  // Icon for sand
    supplier: "SandMakers Ltd.",
    composition: "Crushed stone sand with consistent particle size",
    usage: "For concrete and plastering work",
    storage: "Keep in a dry pile to avoid contamination",
    warranty: "1-year quality assurance",
    keyFeatures: [
      "Uniform Size",
      "Dust Free",
      "High Strength",
      "Eco-Friendly"
    ],
    technicalSpecs: [
      { label: "Particle Size", value: "0-4mm" },
      { label: "Moisture Content", value: "<2%" },
      { label: "Usage", value: "Concrete & Plastering" },
      { label: "Origin", value: "India" }
    ]
  },
  {
    id: "4",
    name: "Plaster Sand (P‑Sand)",
    category: "Roofing Materials",
    img: [Bricks],
    images: [Bricks, Bricks, Bricks],
    price: "₹55 per BLOCK",
    description: "Lightweight and eco-friendly blocks for walling.",
    icon: ToyBrick,  
    supplier: "EcoBlocks Co.",
    composition: "Autoclaved aerated concrete",
    usage: "Wall construction for residential and commercial buildings",
    storage: "Keep covered and dry",
    warranty: "2-year limited warranty",
    keyFeatures: [
      "Lightweight",
      "Fire Resistant",
      "Thermal Insulation",
      "Eco-Friendly"
    ],
  },
    {
    id: "4",
    name: "Plaster Sand (P‑Sand)",
    category: "Roofing Materials",
    img: [Bricks],
    images: [Bricks, Bricks, Bricks],
    price: "₹55 per BLOCK",
    description: "Lightweight and eco-friendly blocks for walling.",
    icon: ToyBrick,  
    supplier: "EcoBlocks Co.",
    composition: "Autoclaved aerated concrete",
    usage: "Wall construction for residential and commercial buildings",
    storage: "Keep covered and dry",
    warranty: "2-year limited warranty",
    keyFeatures: [
      "Lightweight",
      "Fire Resistant",
      "Thermal Insulation",
      "Eco-Friendly"
    ],
    technicalSpecs: [
      { label: "Size", value: "600 x 200 x 100 mm" },
      { label: "Density", value: "550 kg/m³" },
      { label: "Compressive Strength", value: "5-7 N/mm²" },
      { label: "Origin", value: "India" }
    ]
  }
];
