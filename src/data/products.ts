export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  dimensions: string;
  materials: string[];
  finishes: string[];
  features: string[];
  priceRange: string;
  image: string;
  gallery: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Signature Dining Table',
    category: 'Tables',
    description: 'A masterpiece of modern design, this dining table combines solid hardwood craftsmanship with contemporary elegance. Perfect for family gatherings and dinner parties, it seats 6-8 people comfortably.',
    dimensions: '200cm × 100cm × 75cm',
    materials: ['Solid Oak Wood', 'Metal Accents'],
    finishes: ['Natural Oak', 'Walnut Stain', 'Ebony'],
    features: [
      'Handcrafted from sustainable hardwood',
      'Scratch-resistant finish',
      'Extendable design option',
      'Custom sizes available',
    ],
    priceRange: 'From TZS 2,500,000',
    image: '/assets/product-dining-table.jpg',
    gallery: ['/assets/product-dining-table.jpg'],
  },
  {
    id: 2,
    name: 'Nordic Lounge Chair',
    category: 'Chairs',
    description: 'Inspired by Scandinavian design principles, this lounge chair offers exceptional comfort with clean lines. The ergonomic design provides excellent lumbar support while maintaining aesthetic appeal.',
    dimensions: '75cm × 80cm × 85cm',
    materials: ['Walnut Wood Frame', 'Premium Fabric'],
    finishes: ['Light Grey', 'Charcoal', 'Terracotta'],
    features: [
      'Ergonomic lumbar support',
      'High-density foam cushioning',
      'Removable covers for easy cleaning',
      'Matching ottoman available',
    ],
    priceRange: 'From TZS 850,000',
    image: '/assets/product-chair.jpg',
    gallery: ['/assets/product-chair.jpg'],
  },
  {
    id: 3,
    name: 'Modern Storage Cabinet',
    category: 'Cabinets',
    description: 'Sophisticated storage solution that combines functionality with stunning design. Features soft-close drawers and adjustable shelving to accommodate all your storage needs.',
    dimensions: '120cm × 45cm × 180cm',
    materials: ['Solid Wood', 'Tempered Glass'],
    finishes: ['Natural Teak', 'Dark Mahogany', 'White Oak'],
    features: [
      'Soft-close mechanisms',
      'Adjustable interior shelving',
      'Cable management system',
      'Anti-tip wall anchoring included',
    ],
    priceRange: 'From TZS 1,800,000',
    image: '/assets/product-cabinet.jpg',
    gallery: ['/assets/product-cabinet.jpg'],
  },
  {
    id: 4,
    name: 'Minimalist Coffee Table',
    category: 'Tables',
    description: 'A stunning centerpiece for any living room, this coffee table features a floating top design that creates visual lightness. The hidden storage compartment keeps remotes and magazines organized.',
    dimensions: '120cm × 70cm × 40cm',
    materials: ['Solid Walnut', 'Steel Base'],
    finishes: ['Natural Walnut', 'Smoke Grey', 'Black'],
    features: [
      'Hidden storage compartment',
      'Floating top design',
      'Powder-coated steel base',
      'Felt pads to protect floors',
    ],
    priceRange: 'From TZS 950,000',
    image: '/assets/product-coffee-table.jpg',
    gallery: ['/assets/product-coffee-table.jpg'],
  },
  {
    id: 5,
    name: 'Executive Leather Sofa',
    category: 'Sofas',
    description: 'Premium leather sofa that exudes luxury and comfort. Features hand-stitched genuine leather upholstery on a solid hardwood frame. Perfect for executive offices or sophisticated living spaces.',
    dimensions: '220cm × 95cm × 85cm',
    materials: ['Genuine Leather', 'Solid Wood Frame'],
    finishes: ['Cognac Brown', 'Black', 'Olive Green'],
    features: [
      'Genuine full-grain leather',
      'High-resilience foam cushions',
      'Kiln-dried hardwood frame',
      '10-year frame warranty',
    ],
    priceRange: 'From TZS 4,500,000',
    image: '/assets/product-sofa.jpg',
    gallery: ['/assets/product-sofa.jpg'],
  },
  {
    id: 6,
    name: 'Designer Wardrobe',
    category: 'Storage',
    description: 'A beautifully crafted wardrobe that maximizes storage while serving as a statement piece. Features customizable interior configurations with premium soft-close sliding doors.',
    dimensions: '180cm × 60cm × 220cm',
    materials: ['Solid Wood', 'Premium Hardware'],
    finishes: ['Oak', 'Walnut', 'White Matte'],
    features: [
      'Customizable interior layout',
      'Soft-close sliding doors',
      'LED interior lighting option',
      'Full-length mirror available',
    ],
    priceRange: 'From TZS 3,200,000',
    image: '/assets/product-wardrobe.jpg',
    gallery: ['/assets/product-wardrobe.jpg'],
  },
];

export const categories = ['All', 'Tables', 'Chairs', 'Cabinets', 'Sofas', 'Storage', 'Custom'];
