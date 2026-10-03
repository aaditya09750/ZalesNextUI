import {
  DiamondOval,
  DiamondCushion,
  DiamondRound,
  DiamondPrincess,
  DiamondPear,
} from "@/components/icons";
import type { CategoryItem, ShapeItem } from "@/types/shop";

export const DIAMOND_SHAPES: ShapeItem[] = [
  {
    id: "oval",
    label: "Oval",
    fullName: "Oval Brilliant Cut",
    badge: "Contemporary Poise",
    tagline: "Elongated symmetry accentuating the hand with expanded perceived scale",
    facets: 58,
    fireRating: "Vibrant Fire",
    ratio: "1.35 : 1.50",
    setting: "Hidden Halo & Pavé Band",
    characteristics:
      "A modern classic blending the intense scintillation of a round cut with an elongated profile that creates an exquisite, slimming visual silhouette on the hand.",
    Icon: DiamondOval,
  },
  {
    id: "cushion",
    label: "Cushion",
    fullName: "Cushion Modified Brilliant",
    badge: "Romantic Heritage",
    tagline: "Pillow-soft curved contours producing rich, kaleidoscope rainbow fire",
    facets: 64,
    fireRating: "High Dispersion Fire",
    ratio: "1.00 : 1.05",
    setting: "Vintage Milgrain & Cathedral",
    characteristics:
      "Beloved for centuries, the cushion cut combines soft rounded perimeter contours with large facet windows that generate deep, kaleidoscope-like colorful fire.",
    Icon: DiamondCushion,
  },
  {
    id: "round",
    label: "Round",
    fullName: "Round Brilliant Cut",
    badge: "Benchmark Ideal Cut",
    tagline: "The gold standard of optical fire and timeless scintillation",
    facets: 58,
    fireRating: "Maximum Brilliance",
    ratio: "1.00 : 1.02",
    setting: "Solitaire & 6-Prong Mount",
    characteristics:
      "Engineered with 58 mathematically aligned facets to maximize internal reflection, redirecting over 99% of ambient light directly to the observer.",
    Icon: DiamondRound,
  },
  {
    id: "princess",
    label: "Princess",
    fullName: "Princess Square Brilliant",
    badge: "Architectural Radiance",
    tagline: "Clean contemporary geometry with sharp corners and pyramid refraction",
    facets: 76,
    fireRating: "Geometric Radiance",
    ratio: "1.00 : 1.03",
    setting: "Channel & Bezel Guard",
    characteristics:
      "Featuring a sharp square contour and pyramid pavilion facets, the princess cut delivers bold contemporary elegance with intense multi-facet light return.",
    Icon: DiamondPrincess,
  },
  {
    id: "pear",
    label: "Pear",
    fullName: "Pear Teardrop Cut",
    badge: "Singular Grace",
    tagline: "A dramatic synergy of round brilliance and marquise teardrop flair",
    facets: 58,
    fireRating: "Dramatic Flare",
    ratio: "1.45 : 1.70",
    setting: "East-West & V-Prong",
    characteristics:
      "A dramatic synergy of round brilliance and marquise flair. The teardrop contour draws the gaze along its tapered point, commanding an unmistakable regal look.",
    Icon: DiamondPear,
  },
];

export const CATEGORIES: CategoryItem[] = [
  {
    name: "Earrings",
    items: "168 items",
    img: "https://images.pexels.com/photos/15785528/pexels-photo-15785528.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  },
  {
    name: "Necklaces",
    items: "210 items",
    img: "/images/sunset-necklace.jpg",
  },
  {
    name: "Wedding",
    items: "96 items",
    img: "https://images.pexels.com/photos/6143809/pexels-photo-6143809.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  },
];
