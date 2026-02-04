export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  dimensions: string;
  materials: string[];
  finishes: string[];
  features: string[];
  priceRange: string;
  priceValue: number;
  gallery: string[];
}

export const products: Product[] = [
  // LIVING ROOM - Sofas
  {
    id: 1,
    name: 'Executive Leather Sofa',
    category: 'Living Room',
    subcategory: '3-Seater Sofas',
    description: 'Premium leather sofa that exudes luxury and comfort. Features hand-stitched genuine leather upholstery on solid hardwood frame.',
    dimensions: '220cm × 95cm × 85cm',
    materials: ['Genuine Leather', 'Solid Wood Frame'],
    finishes: ['Cognac Brown', 'Black', 'Olive Green'],
    features: [
      'Genuine full-grain leather',
      'High-resilience foam',
      'Kiln-dried frame',
      '10-year warranty',
    ],
    priceRange: 'From TZS 4,500,000',
    priceValue: 4500000,
    gallery: [
      '/assets/product-sofa.jpg',
      '/assets/sofa-2.jpg',
      '/assets/sofa-3.jpg',
    ],
  },
  {
    id: 2,
    name: 'Sectional L-Shaped Sofa',
    category: 'Living Room',
    subcategory: 'Sectional Sofas',
    description: 'Spacious L-shaped sectional perfect for large living rooms. Modular design allows for various configurations.',
    dimensions: '280cm × 180cm × 85cm',
    materials: ['Linen Fabric', 'Solid Wood Frame'],
    finishes: ['Light Grey', 'Navy Blue', 'Beige'],
    features: [
      'Modular configuration',
      'Removable cushion covers',
      'Chaise lounge section',
      'Seats 6-7 people',
    ],
    priceRange: 'From TZS 5,800,000',
    priceValue: 5800000,
    gallery: [
      '/assets/sectional-sofa.jpg',
      '/assets/sectional-sofa-2.jpg',
      '/assets/sectional-sofa-3.jpg',
    ],
  },
  {
    id: 3,
    name: 'Loveseat Sofa',
    category: 'Living Room',
    subcategory: '2-Seater Sofas',
    description: 'Compact loveseat perfect for small spaces or as additional seating. Classic design with modern comfort.',
    dimensions: '140cm × 85cm × 85cm',
    materials: ['Velvet Upholstery', 'Hardwood Frame'],
    finishes: ['Burgundy', 'Teal', 'Mustard'],
    features: [
      'Perfect for small spaces',
      'Luxurious velvet fabric',
      'Solid wood legs',
      'Easy maintenance',
    ],
    priceRange: 'From TZS 2,200,000',
    priceValue: 2200000,
    gallery: [
      '/assets/loveseat.jpg',
      '/assets/loveseat-2.jpg',
    ],
  },

  // LIVING ROOM - Coffee Tables
  {
    id: 4,
    name: 'Minimalist Coffee Table',
    category: 'Living Room',
    subcategory: 'Coffee Tables',
    description: 'A stunning centerpiece for any living room, this coffee table features a floating top design that creates visual lightness.',
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
    priceValue: 950000,
    gallery: [
      '/assets/product-coffee-table.jpg',
      '/assets/coffee-table-2.jpg',
      '/assets/coffee-table-3.jpg',
    ],
  },
  {
    id: 5,
    name: 'Glass Top Modern Coffee Table',
    category: 'Living Room',
    subcategory: 'Coffee Tables',
    description: 'Contemporary coffee table featuring tempered glass top on wooden base.',
    dimensions: '110cm × 60cm × 42cm',
    materials: ['Tempered Glass', 'Oak Wood Base'],
    finishes: ['Clear Glass', 'Smoked Glass', 'Bronze Glass'],
    features: [
      '12mm tempered safety glass',
      'Polished edges',
      'Easy to clean surface',
      'Modern minimalist design',
    ],
    priceRange: 'From TZS 750,000',
    priceValue: 750000,
    gallery: [
      '/assets/glass-coffee-table.jpg',
      '/assets/glass-coffee-table-2.jpg',
    ],
  },

  // LIVING ROOM - Accent Chairs
  {
    id: 6,
    name: 'Wingback Accent Chair',
    category: 'Living Room',
    subcategory: 'Accent Chairs',
    description: 'Classic wingback chair with modern upholstery. Perfect statement piece for living rooms or reading nooks.',
    dimensions: '75cm × 85cm × 105cm',
    materials: ['Hardwood Frame', 'Premium Fabric'],
    finishes: ['Mustard Yellow', 'Sage Green', 'Coral'],
    features: [
      'Classic wingback design',
      'Deep comfortable seat',
      'Solid wood legs',
      'Available with ottoman',
    ],
    priceRange: 'From TZS 950,000',
    priceValue: 950000,
    gallery: [
      '/assets/wingback-chair.jpg',
      '/assets/wingback-chair-2.jpg',
      '/assets/wingback-chair-3.jpg',
    ],
  },

  // LIVING ROOM - TV Stands
  {
    id: 7,
    name: 'Modern Media Console',
    category: 'Living Room',
    subcategory: 'TV Stands',
    description: 'Sleek media console with ample storage for electronics and media.',
    dimensions: '180cm × 45cm × 55cm',
    materials: ['Solid Wood', 'Tempered Glass'],
    finishes: ['Walnut', 'White Oak', 'Black'],
    features: [
      'Cable management system',
      'Adjustable shelving',
      'Soft-close drawers',
      'Supports up to 75" TVs',
    ],
    priceRange: 'From TZS 1,600,000',
    priceValue: 1600000,
    gallery: [
      '/assets/tv-stand.jpg',
      '/assets/tv-stand-2.jpg',
    ],
  },

  // KITCHEN & DINING - Dining Tables
  {
    id: 8,
    name: 'Signature Dining Table',
    category: 'Kitchen & Dining',
    subcategory: 'Dining Tables',
    description: 'A masterpiece of modern design, this dining table combines solid hardwood craftsmanship with contemporary elegance.',
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
    priceValue: 2500000,
    gallery: [
      '/assets/product-dining-table.jpg',
      '/assets/product-dining-table-2.jpg',
      '/assets/product-dining-table-3.jpg',
    ],
  },
  {
    id: 9,
    name: 'Round Pedestal Dining Table',
    category: 'Kitchen & Dining',
    subcategory: 'Dining Tables',
    description: 'Elegant round dining table with solid pedestal base.',
    dimensions: '140cm × 140cm × 75cm',
    materials: ['Solid Mahogany', 'Brass Accents'],
    finishes: ['Dark Mahogany', 'Natural Wood', 'Black Satin'],
    features: [
      'Central pedestal design',
      'Seats 4-6 people',
      'No corner legs for comfort',
      'Rotating lazy susan option',
    ],
    priceRange: 'From TZS 2,800,000',
    priceValue: 2800000,
    gallery: [
      '/assets/round-dining-table.jpg',
      '/assets/round-dining-table-2.jpg',
    ],
  },

  // KITCHEN & DINING - Dining Chairs
  {
    id: 10,
    name: 'Nordic Dining Chair',
    category: 'Kitchen & Dining',
    subcategory: 'Dining Chairs',
    description: 'Inspired by Scandinavian design principles, this chair offers exceptional comfort with clean lines.',
    dimensions: '50cm × 55cm × 85cm',
    materials: ['Walnut Wood Frame', 'Premium Fabric'],
    finishes: ['Light Grey', 'Charcoal', 'Terracotta'],
    features: [
      'Ergonomic lumbar support',
      'High-density foam cushioning',
      'Removable covers',
      'Stackable option',
    ],
    priceRange: 'From TZS 450,000',
    priceValue: 450000,
    gallery: [
      '/assets/product-chair.jpg',
      '/assets/chair-2.jpg',
      '/assets/chair-3.jpg',
    ],
  },
  {
    id: 11,
    name: 'Upholstered Dining Chair Set',
    category: 'Kitchen & Dining',
    subcategory: 'Dining Chairs',
    description: 'Elegant upholstered dining chairs with button-tufted backs. Sold in sets of 4.',
    dimensions: '48cm × 60cm × 95cm',
    materials: ['Oak Wood Frame', 'Velvet Upholstery'],
    finishes: ['Navy Blue', 'Emerald Green', 'Blush Pink'],
    features: [
      'Button-tufted backrest',
      'Solid wood legs',
      'Easy-clean fabric',
      'Set of 4 chairs',
    ],
    priceRange: 'From TZS 1,600,000',
    priceValue: 1600000,
    gallery: [
      '/assets/upholstered-chairs.jpg',
      '/assets/upholstered-chairs-2.jpg',
    ],
  },

  // KITCHEN & DINING - Bar Stools
  {
    id: 12,
    name: 'Modern Bar Stool Set',
    category: 'Kitchen & Dining',
    subcategory: 'Bar Stools',
    description: 'Contemporary bar stools with adjustable height and swivel feature.',
    dimensions: '45cm × 45cm × 95-115cm',
    materials: ['Metal Frame', 'Faux Leather'],
    finishes: ['Black', 'White', 'Grey'],
    features: [
      'Height adjustable',
      '360° swivel',
      'Footrest included',
      'Set of 2',
    ],
    priceRange: 'From TZS 680,000',
    priceValue: 680000,
    gallery: [
      '/assets/bar-stools.jpg',
      '/assets/bar-stools-2.jpg',
    ],
  },

  // BEDROOM - Beds
  {
    id: 13,
    name: 'King Size Platform Bed',
    category: 'Bedroom',
    subcategory: 'Beds',
    description: 'Modern platform bed with upholstered headboard and built-in storage.',
    dimensions: '200cm × 200cm × 120cm',
    materials: ['Solid Wood Frame', 'Fabric Upholstery'],
    finishes: ['Grey Linen', 'Beige', 'Navy Blue'],
    features: [
      'Built-in storage drawers',
      'Padded headboard',
      'Strong slat system',
      'Easy assembly',
    ],
    priceRange: 'From TZS 3,800,000',
    priceValue: 3800000,
    gallery: [
      '/assets/platform-bed.jpg',
      '/assets/platform-bed-2.jpg',
    ],
  },
  {
    id: 14,
    name: 'Classic Wooden Bed Frame',
    category: 'Bedroom',
    subcategory: 'Beds',
    description: 'Timeless wooden bed frame with elegant design.',
    dimensions: '180cm × 200cm × 110cm',
    materials: ['Solid Oak', 'Wood Veneer'],
    finishes: ['Natural Oak', 'Walnut', 'White'],
    features: [
      'Solid wood construction',
      'Traditional design',
      'High headboard',
      'Durable finish',
    ],
    priceRange: 'From TZS 2,900,000',
    priceValue: 2900000,
    gallery: [
      '/assets/wooden-bed.jpg',
      '/assets/wooden-bed-2.jpg',
    ],
  },

  // BEDROOM - Wardrobes
  {
    id: 15,
    name: 'Designer Wardrobe',
    category: 'Bedroom',
    subcategory: 'Wardrobes',
    description: 'Beautifully crafted wardrobe that maximizes storage while serving as a statement piece.',
    dimensions: '180cm × 60cm × 220cm',
    materials: ['Solid Wood', 'Premium Hardware'],
    finishes: ['Oak', 'Walnut', 'White Matte'],
    features: [
      'Customizable interior',
      'Soft-close sliding doors',
      'LED lighting option',
      'Full-length mirror available',
    ],
    priceRange: 'From TZS 3,200,000',
    priceValue: 3200000,
    gallery: [
      '/assets/product-wardrobe.jpg',
      '/assets/wardrobe-2.jpg',
      '/assets/wardrobe-3.jpg',
    ],
  },
  {
    id: 16,
    name: 'Walk-In Wardrobe System',
    category: 'Bedroom',
    subcategory: 'Wardrobes',
    description: 'Custom walk-in wardrobe system with modular components.',
    dimensions: 'Custom sizing available',
    materials: ['Solid Wood', 'Metal Organizers'],
    finishes: ['White', 'Grey', 'Natural Wood'],
    features: [
      'Modular design',
      'Hanging rails and shelving',
      'Drawer units included',
      'Lighting integration',
    ],
    priceRange: 'From TZS 5,500,000',
    priceValue: 5500000,
    gallery: [
      '/assets/walk-in-wardrobe.jpg',
      '/assets/walk-in-wardrobe-2.jpg',
    ],
  },

  // BEDROOM - Nightstands
  {
    id: 17,
    name: 'Modern Nightstand',
    category: 'Bedroom',
    subcategory: 'Nightstands',
    description: 'Sleek nightstand with drawer and open shelf.',
    dimensions: '50cm × 40cm × 55cm',
    materials: ['Solid Wood', 'Metal Handles'],
    finishes: ['Walnut', 'White Oak', 'Grey'],
    features: [
      'Soft-close drawer',
      'Open shelf storage',
      'USB charging ports',
      'Compact design',
    ],
    priceRange: 'From TZS 420,000',
    priceValue: 420000,
    gallery: [
      '/assets/nightstand.jpg',
      '/assets/nightstand-2.jpg',
    ],
  },

  // BEDROOM - Dressers
  {
    id: 18,
    name: '6-Drawer Dresser',
    category: 'Bedroom',
    subcategory: 'Dressers',
    description: 'Spacious dresser with six drawers and optional mirror.',
    dimensions: '150cm × 50cm × 85cm',
    materials: ['Solid Wood', 'Metal Runners'],
    finishes: ['Oak', 'Walnut', 'White'],
    features: [
      'Six spacious drawers',
      'Soft-close mechanism',
      'Anti-tip hardware',
      'Mirror available',
    ],
    priceRange: 'From TZS 2,100,000',
    priceValue: 2100000,
    gallery: [
      '/assets/dresser.jpg',
      '/assets/dresser-2.jpg',
    ],
  },

  // OFFICE - Desks
  {
    id: 19,
    name: 'Executive Office Desk',
    category: 'Office',
    subcategory: 'Desks',
    description: 'Professional executive desk with ample workspace and integrated storage.',
    dimensions: '180cm × 90cm × 75cm',
    materials: ['Solid Wood', 'Leather Inlay'],
    finishes: ['Dark Walnut', 'Mahogany', 'Oak'],
    features: [
      'Leather writing surface',
      'Built-in cable management',
      'Lockable drawers',
      'Ergonomic height',
    ],
    priceRange: 'From TZS 3,500,000',
    priceValue: 3500000,
    gallery: [
      '/assets/executive-desk.jpg',
      '/assets/executive-desk-2.jpg',
    ],
  },
  {
    id: 20,
    name: 'Standing Adjustable Desk',
    category: 'Office',
    subcategory: 'Desks',
    description: 'Modern height-adjustable desk promoting healthy work habits.',
    dimensions: '160cm × 80cm × 70-120cm',
    materials: ['Engineered Wood', 'Steel Frame'],
    finishes: ['White', 'Black', 'Natural Wood'],
    features: [
      'Electric height adjustment',
      'Memory presets',
      'Cable tray included',
      'Anti-collision feature',
    ],
    priceRange: 'From TZS 2,200,000',
    priceValue: 2200000,
    gallery: [
      '/assets/standing-desk.jpg',
      '/assets/standing-desk-2.jpg',
    ],
  },

  // OFFICE - Office Chairs
  {
    id: 21,
    name: 'Ergonomic Office Chair',
    category: 'Office',
    subcategory: 'Office Chairs',
    description: 'Premium ergonomic office chair with full adjustability.',
    dimensions: '65cm × 65cm × 115-125cm',
    materials: ['Mesh Back', 'Padded Seat', 'Aluminum Base'],
    finishes: ['Black', 'Grey', 'Blue'],
    features: [
      'Lumbar support adjustment',
      'Seat height and tilt',
      'Breathable mesh back',
      '360° swivel',
    ],
    priceRange: 'From TZS 850,000',
    priceValue: 850000,
    gallery: [
      '/assets/office-chair.jpg',
      '/assets/office-chair-2.jpg',
    ],
  },
  {
    id: 22,
    name: 'Executive Leather Chair',
    category: 'Office',
    subcategory: 'Office Chairs',
    description: 'Luxurious executive chair with genuine leather upholstery.',
    dimensions: '70cm × 70cm × 120cm',
    materials: ['Genuine Leather', 'Solid Wood Arms'],
    finishes: ['Black Leather', 'Brown Leather', 'Burgundy'],
    features: [
      'Genuine leather upholstery',
      'High-back support',
      'Wooden armrests',
      'Heavy-duty gas lift',
    ],
    priceRange: 'From TZS 1,800,000',
    priceValue: 1800000,
    gallery: [
      '/assets/executive-chair.jpg',
      '/assets/executive-chair-2.jpg',
    ],
  },

  // OFFICE - Bookshelves
  {
    id: 23,
    name: 'Floor-to-Ceiling Bookshelf',
    category: 'Office',
    subcategory: 'Bookshelves',
    description: 'Impressive floor-to-ceiling bookshelf system.',
    dimensions: '240cm × 35cm × 280cm',
    materials: ['Solid Wood', 'Metal Brackets'],
    finishes: ['Natural Oak', 'Dark Walnut', 'White'],
    features: [
      'Floor-to-ceiling design',
      'Ladder included',
      'Adjustable shelves',
      'Wall-mounted for safety',
    ],
    priceRange: 'From TZS 2,800,000',
    priceValue: 2800000,
    gallery: [
      '/assets/bookshelf.jpg',
      '/assets/bookshelf-2.jpg',
    ],
  },

  // OFFICE - Filing Cabinets
  {
    id: 24,
    name: 'Modern Filing Cabinet',
    category: 'Office',
    subcategory: 'Storage Cabinets',
    description: 'Sleek filing cabinet with lockable drawers.',
    dimensions: '45cm × 60cm × 75cm',
    materials: ['Metal', 'Wood Top'],
    finishes: ['Black', 'White', 'Grey'],
    features: [
      'Lockable drawers',
      'Full extension slides',
      'Anti-tip mechanism',
      'Wood top surface',
    ],
    priceRange: 'From TZS 980,000',
    priceValue: 980000,
    gallery: [
      '/assets/filing-cabinet.jpg',
      '/assets/filing-cabinet-2.jpg',
    ],
  },

  // ENTRYWAY - Console Tables
  {
    id: 25,
    name: 'Entryway Console Table',
    category: 'Entryway',
    subcategory: 'Console Tables',
    description: 'Elegant console table perfect for entryways and hallways.',
    dimensions: '120cm × 35cm × 80cm',
    materials: ['Solid Wood', 'Metal Base'],
    finishes: ['Natural Oak', 'Walnut', 'White'],
    features: [
      'Slim profile design',
      'Storage drawer',
      'Lower shelf',
      'Decorative metal base',
    ],
    priceRange: 'From TZS 890,000',
    priceValue: 890000,
    gallery: [
      '/assets/console-table.jpg',
      '/assets/console-table-2.jpg',
    ],
  },

  // ENTRYWAY - Coat Racks
  {
    id: 26,
    name: 'Modern Coat Rack Stand',
    category: 'Entryway',
    subcategory: 'Coat Racks',
    description: 'Stylish freestanding coat rack with multiple hooks.',
    dimensions: '45cm × 45cm × 180cm',
    materials: ['Metal', 'Wood Accents'],
    finishes: ['Black', 'White', 'Natural Wood'],
    features: [
      'Multiple hook levels',
      'Stable base',
      'Umbrella holder',
      'Modern design',
    ],
    priceRange: 'From TZS 320,000',
    priceValue: 320000,
    gallery: [
      '/assets/coat-rack.jpg',
      '/assets/coat-rack-2.jpg',
    ],
  },

  // ENTRYWAY - Storage Benches
  {
    id: 27,
    name: 'Entryway Storage Bench',
    category: 'Entryway',
    subcategory: 'Benches',
    description: 'Multi-functional bench with built-in shoe storage.',
    dimensions: '100cm × 40cm × 50cm',
    materials: ['Solid Wood', 'Cushioned Seat'],
    finishes: ['Oak', 'Walnut', 'White'],
    features: [
      'Lift-top storage',
      'Cushioned seating',
      'Shoe organization',
      'Compact design',
    ],
    priceRange: 'From TZS 750,000',
    priceValue: 750000,
    gallery: [
      '/assets/storage-bench.jpg',
      '/assets/storage-bench-2.jpg',
    ],
  },

  // BABY & KIDS - Cribs
  {
    id: 28,
    name: 'Convertible Baby Crib',
    category: 'Baby & Kids',
    subcategory: 'Cribs',
    description: '3-in-1 convertible crib that grows with your child.',
    dimensions: '140cm × 75cm × 110cm',
    materials: ['Solid Wood', 'Non-toxic Finish'],
    finishes: ['White', 'Natural Wood', 'Grey'],
    features: [
      'Converts to toddler bed',
      'Adjustable mattress height',
      'Safety certified',
      'Non-toxic materials',
    ],
    priceRange: 'From TZS 1,450,000',
    priceValue: 1450000,
    gallery: [
      '/assets/baby-crib.jpg',
      '/assets/baby-crib-2.jpg',
    ],
  },

  // BABY & KIDS - Kids Beds
  {
    id: 29,
    name: 'Kids Bunk Bed',
    category: 'Baby & Kids',
    subcategory: 'Kids Beds',
    description: 'Safe and sturdy bunk bed perfect for siblings.',
    dimensions: '100cm × 200cm × 160cm',
    materials: ['Solid Pine Wood', 'Metal Rails'],
    finishes: ['White', 'Natural Pine', 'Grey'],
    features: [
      'Safety rails included',
      'Ladder with wide steps',
      'Solid construction',
      'Space-saving design',
    ],
    priceRange: 'From TZS 2,100,000',
    priceValue: 2100000,
    gallery: [
      '/assets/bunk-bed.jpg',
      '/assets/bunk-bed-2.jpg',
    ],
  },

  // BABY & KIDS - Storage
  {
    id: 30,
    name: 'Kids Toy Storage Unit',
    category: 'Baby & Kids',
    subcategory: 'Storage',
    description: 'Colorful storage unit with multiple bins for toys.',
    dimensions: '90cm × 35cm × 80cm',
    materials: ['Wood Frame', 'Fabric Bins'],
    finishes: ['Multi-color', 'Pastel', 'Neutral'],
    features: [
      'Multiple storage bins',
      'Child-safe design',
      'Easy to clean',
      'Bright colors',
    ],
    priceRange: 'From TZS 580,000',
    priceValue: 580000,
    gallery: [
      '/assets/toy-storage.jpg',
      '/assets/toy-storage-2.jpg',
    ],
  },

  // BABY & KIDS - Desks
  {
    id: 31,
    name: 'Kids Study Desk',
    category: 'Baby & Kids',
    subcategory: 'Desks',
    description: 'Adjustable study desk with ergonomic design for growing children.',
    dimensions: '100cm × 60cm × 75cm',
    materials: ['Engineered Wood', 'Metal Frame'],
    finishes: ['White', 'Pink', 'Blue'],
    features: [
      'Height adjustable',
      'Tilting desktop',
      'Storage drawer',
      'Built-in bookshelf',
    ],
    priceRange: 'From TZS 720,000',
    priceValue: 720000,
    gallery: [
      '/assets/kids-desk.jpg',
      '/assets/kids-desk-2.jpg',
    ],
  },
];

export const categories = [
  'All',
  'Living Room',
  'Kitchen & Dining',
  'Bedroom',
  'Office',
  'Entryway',
  'Baby & Kids',
  'New Arrivals',
  'Custom'
];