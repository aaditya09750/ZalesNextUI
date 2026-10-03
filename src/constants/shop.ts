import type { CategoryItem, ShapeItem } from "@/types/shop";

export const DIAMOND_SHAPES: ShapeItem[] = [
  {
    id: "round",
    label: "Round",
    tagline: "The gold standard of unmatched optical fire and timeless brilliance",
    description:
      "Engineered with 58 mathematically aligned facets to maximize total internal reflection. The round brilliant cut captures and returns over 99% of ambient light for unmatched scintillation.",
    facets: 58,
    fireRating: "Maximum Scintillation",
    ratio: "1.00 : 1.02",
    popularSetting: "Classic 6-Prong Solitaire & Pavé",
    startingPrice: "$1,450",
    img: "https://images.pexels.com/photos/1458872/pexels-photo-1458872.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=700",
  },
  {
    id: "oval",
    label: "Oval",
    tagline: "Elongated silhouette maximizing perceived carat weight and finger poise",
    description:
      "A modern classic blending the intense scintillation of a round cut with an elongated profile that creates an exquisite, slimming visual on the wearer's hand.",
    facets: 58,
    fireRating: "Exceptional Sparkle",
    ratio: "1.35 : 1.50",
    popularSetting: "Hidden Halo & Delicate Platinum Band",
    startingPrice: "$1,380",
    img: "https://images.pexels.com/photos/9883375/pexels-photo-9883375.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=700",
  },
  {
    id: "cushion",
    label: "Cushion",
    tagline: "Vintage romantic pillow cut renowned for rich, colorful dispersion",
    description:
      "Beloved for centuries, the cushion cut combines soft rounded perimeter contours with large facet windows that generate deep, kaleidoscope-like colorful fire.",
    facets: 64,
    fireRating: "High Dispersion Fire",
    ratio: "1.00 : 1.05",
    popularSetting: "Vintage Milgrain & Cathedral Setting",
    startingPrice: "$1,290",
    img: "https://images.pexels.com/photos/18092913/pexels-photo-18092913.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=700",
  },
  {
    id: "princess",
    label: "Princess",
    tagline: "Clean architectural geometry with striking modern multi-facet radiance",
    description:
      "Featuring a sharp square contour and pyramid pavilion facets, the princess cut delivers bold contemporary elegance with intense pyramid light refraction.",
    facets: 76,
    fireRating: "Geometric Radiance",
    ratio: "1.00 : 1.03",
    popularSetting: "Channel-Set Shoulders & Bezel Guard",
    startingPrice: "$1,320",
    img: "https://images.pexels.com/photos/6143809/pexels-photo-6143809.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=700",
  },
  {
    id: "pear",
    label: "Pear",
    tagline: "Distinctive teardrop silhouette expressing graceful, singular luxury",
    description:
      "A dramatic synergy of round brilliance and marquise flair. The teardrop contour draws the gaze along its tapered point, commanding immediate attention.",
    facets: 58,
    fireRating: "Vibrant Flare",
    ratio: "1.45 : 1.70",
    popularSetting: "V-Prong Halo & East-West Setting",
    startingPrice: "$1,410",
    img: "https://images.pexels.com/photos/24815712/pexels-photo-24815712.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=700",
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
