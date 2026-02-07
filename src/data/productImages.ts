// Unique product-specific images mapped by product ID
// These images are generated specifically for each product to ensure visual uniqueness

export const productImageMap: Record<number, string> = {
  // Living Room
  1: '/assets/products/modern-media-console.jpg',       // Modern Media Console
  2: '/assets/products/minimalist-tv-stand.jpg',         // Minimalist TV Stand
  3: '/assets/products/minimalist-coffee-table.jpg',     // Minimalist Coffee Table
  4: '/assets/products/glass-coffee-table.jpg',          // Glass Top Modern Coffee Table
  5: '/assets/products/nested-coffee-tables.jpg',        // Nested Coffee Table Set
  6: '/assets/products/sectional-sofa.jpg',              // Sectional L-Shaped Sofa
  7: '/assets/products/executive-leather-sofa.jpg',      // Executive Leather Sofa
  8: '/assets/products/loveseat-sofa.jpg',               // Loveseat Sofa
  9: '/assets/products/round-side-table.jpg',            // Round Side Table
  10: '/assets/products/wingback-accent-chair.jpg',      // Wingback Accent Chair
  11: '/assets/products/modern-storage-cabinet.jpg',     // Modern Storage Cabinet
  12: '/assets/products/storage-ottoman.jpg',            // Storage Ottoman

  // Kitchen & Dining
  13: '/assets/products/signature-dining-table.jpg',     // Signature Dining Table
  14: '/assets/products/round-pedestal-dining-table.jpg', // Round Pedestal Dining Table
  15: '/assets/products/nordic-dining-chair.jpg',        // Nordic Dining Chair
  16: '/assets/products/upholstered-dining-chairs.jpg',  // Upholstered Dining Chair Set
  17: '/assets/products/modern-bar-stools.jpg',          // Modern Bar Stool Set
  18: '/assets/products/modern-sideboard.jpg',           // Modern Sideboard
  19: '/assets/products/glass-display-cabinet.jpg',      // Glass Display Cabinet

  // Bedroom
  20: '/assets/products/king-platform-bed.jpg',          // King Size Platform Bed
  21: '/assets/products/classic-wooden-bed.jpg',         // Classic Wooden Bed Frame
  22: '/assets/products/modern-nightstand.jpg',          // Modern Nightstand
  23: '/assets/products/six-drawer-dresser.jpg',         // 6-Drawer Dresser
  24: '/assets/products/designer-wardrobe.jpg',          // Designer Wardrobe

  // Office
  25: '/assets/products/executive-office-desk.jpg',      // Executive Office Desk
  26: '/assets/products/standing-adjustable-desk.jpg',   // Standing Adjustable Desk
  27: '/assets/products/ergonomic-office-chair.jpg',     // Ergonomic Office Chair
  28: '/assets/products/executive-leather-chair.jpg',    // Executive Leather Chair
  29: '/assets/products/floor-ceiling-bookshelf.jpg',    // Floor-to-Ceiling Bookshelf

  // Entryway
  30: '/assets/products/entryway-console-table.jpg',     // Entryway Console Table
  31: '/assets/products/entryway-storage-bench.jpg',     // Entryway Storage Bench
  32: '/assets/products/modern-coat-rack.jpg',           // Modern Coat Rack Stand

  // Baby & Kids
  33: '/assets/products/convertible-baby-crib.jpg',      // Convertible Baby Crib
  34: '/assets/products/kids-bunk-bed.jpg',              // Kids Bunk Bed
  35: '/assets/products/kids-study-desk.jpg',            // Kids Study Desk
};

// Subcategory fallback images (used when product ID not found)
export const subcategoryImages: Record<string, string> = {
  'TV Stands & Media Consoles': '/assets/lv/tv.jpg',
  'Coffee Tables': '/assets/lv/cof.jpg',
  'Sleeper Sofas & Futons': '/assets/lv/sleeper-sofa.jpg',
  'Sectionals': '/assets/lv/section.jpg',
  'Sofas': '/assets/lv/sofa.jpg',
  'Living Room Sets': '/assets/lv/living-set.jpg',
  'End & Side Tables': '/assets/lv/endsidetbl.jpg',
  'Accent Chairs & Recliners': '/assets/lv/accent.jpg',
  'Cabinets & Chests': '/assets/lv/cabinet.jpg',
  'Ottomans & Benches': '/assets/lv/ottomans.jpg',
  'Dining Tables': '/assets/lv/dining-table.jpg',
  'Dining Chairs & Benches': '/assets/lv/dining-chairs.jpg',
  'Kitchen Island & Carts': '/assets/lv/kitchen-island.jpg',
  'Dining Sets': '/assets/lv/dining-set.jpg',
  'Sideboards & Buffets': '/assets/lv/sideboard.jpg',
  'Bar Stools & Counter Stools': '/assets/lv/bar-stools.jpg',
  'Bar Tables': '/assets/lv/bar-table.jpg',
  'Wine Cabinets & Racks': '/assets/lv/wine-cabinet.jpg',
  'Display Cabinets': '/assets/lv/display-cabinet.jpg',
  'Beds': '/assets/lv/bed.jpg',
  'Nightstands': '/assets/lv/nightstand.jpg',
  'Makeup Vanities': '/assets/lv/vanity.jpg',
  'Dressers & Chests': '/assets/lv/dresser.jpg',
  'Bedroom Sets': '/assets/lv/bedroom-set.jpg',
  'Vanity Stools': '/assets/lv/vanity-stool.jpg',
  'Bedroom Benches': '/assets/lv/ottomans.jpg',
  'Armoires & Wardrobes': '/assets/lv/wardrobe.jpg',
  'Clothes & Garment Racks': '/assets/lv/garment-rack.jpg',
  'Desks': '/assets/lv/desk.jpg',
  'Office Chairs': '/assets/lv/office-chair.jpg',
  'Bookshelves & Bookcases': '/assets/lv/bookshelf.jpg',
  'Desk & Chair Sets': '/assets/lv/desk.jpg',
  'Console Tables': '/assets/lv/console-table.jpg',
  'Entryway Benches': '/assets/lv/entryway-bench.jpg',
  'Shoe Storage': '/assets/lv/shoe-storage.jpg',
  'Coat Racks & Hall Trees': '/assets/lv/coat-rack.jpg',
  'Umbrella Stands': '/assets/lv/console-table.jpg',
  'Cribs': '/assets/lv/crib.jpg',
  'Kids Beds': '/assets/lv/kids-bed.jpg',
  'Kids Desks': '/assets/lv/kids-desk.jpg',
  'Kids Storage': '/assets/lv/kids-storage.jpg',
  'Kids Chairs': '/assets/lv/kids-desk.jpg',
  'Storage': '/assets/lv/kids-storage.jpg',
  'Chairs': '/assets/lv/kids-desk.jpg',
};

// Get the unique image for a product by ID, with subcategory fallback
export const getProductImage = (product: { id: number; subcategory: string }): string => {
  return productImageMap[product.id] || subcategoryImages[product.subcategory] || '/assets/lv/livingr.jpg';
};
