import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products, Product } from '@/data/products';
import { useMemo, useState } from 'react';

// Same subcategory-specific image mapping as ProductModal
const subcategoryImageMap: Record<string, Record<string, string>> = {
  'Living Room': {
    'TV Stands & Media Consoles': '/assets/lv/tv.jpg',
    'Coffee Tables': '/assets/lv/cof.jpg',
    'Sectionals': '/assets/lv/section.jpg',
    'Sofas': '/assets/lv/sofa.jpg',
    'End & Side Tables': '/assets/lv/endsidetbl.jpg',
    'Accent Chairs & Recliners': '/assets/lv/accent.jpg',
    'Cabinets & Chests': '/assets/lv/cabinet.jpg',
    'Ottomans & Benches': '/assets/lv/ottomans.jpg',
    'Complete Living Sets': '/assets/lv/living-set.jpg',
    'Sleeper Sofas': '/assets/lv/sleeper-sofa.jpg',
  },
  'Kitchen & Dining': {
    'Dining Tables': '/assets/lv/dining-table.jpg',
    'Dining Chairs & Benches': '/assets/lv/dining-chairs.jpg',
    'Bar Stools & Counter Stools': '/assets/lv/bar-stools.jpg',
    'Kitchen Islands & Carts': '/assets/lv/kitchen-island.jpg',
    'Sideboards & Buffets': '/assets/lv/sideboard.jpg',
    'Bar Tables & Pub Sets': '/assets/lv/bar-table.jpg',
    'Wine & Bar Cabinets': '/assets/lv/wine-cabinet.jpg',
    'Display & China Cabinets': '/assets/lv/display-cabinet.jpg',
    'Complete Dining Sets': '/assets/lv/dining-set.jpg',
  },
  'Bedroom': {
    'Beds & Bed Frames': '/assets/lv/bed.jpg',
    'Nightstands': '/assets/lv/nightstand.jpg',
    'Vanities & Mirrors': '/assets/lv/vanity.jpg',
    'Dressers': '/assets/lv/dresser.jpg',
    'Wardrobes & Armoires': '/assets/lv/wardrobe.jpg',
    'Complete Bedroom Sets': '/assets/lv/bedroom-set.jpg',
    'Vanity Stools & Benches': '/assets/lv/vanity-stool.jpg',
  },
  'Office': {
    'Desks': '/assets/lv/desk.jpg',
    'Office Chairs': '/assets/lv/office-chair.jpg',
    'Bookshelves': '/assets/lv/bookshelf.jpg',
  },
  'Entryway': {
    'Console Tables': '/assets/lv/console-table.jpg',
    'Entryway Benches': '/assets/lv/entryway-bench.jpg',
    'Shoe Storage': '/assets/lv/shoe-storage.jpg',
    'Coat Racks & Hall Trees': '/assets/lv/coat-rack.jpg',
    'Garment Racks': '/assets/lv/garment-rack.jpg',
  },
  'Baby & Kids': {
    'Cribs & Bassinets': '/assets/lv/crib.jpg',
    'Kids Beds': '/assets/lv/kids-bed.jpg',
    'Kids Desks & Chairs': '/assets/lv/kids-desk.jpg',
    'Kids Storage': '/assets/lv/kids-storage.jpg',
  },
};

// Get the correct image for a product based on its category and subcategory
const getProductImage = (product: Product): string => {
  const categoryImages = subcategoryImageMap[product.category];
  if (categoryImages) {
    const subcategoryImage = categoryImages[product.subcategory];
    if (subcategoryImage) {
      return subcategoryImage;
    }
  }
  // Fallback
  return '/assets/lv/living-set.jpg';
};

// Get unique featured products - one from each unique subcategory across all categories
const getFeaturedProducts = (): Product[] => {
  const featured: Product[] = [];
  const seenSubcategories = new Set<string>();
  
  // Define specific subcategories we want to feature (one per category for variety)
  const targetSubcategories = [
    // Living Room
    'Sofas',
    'Coffee Tables',
    'TV Stands & Media Consoles',
    // Kitchen & Dining  
    'Dining Tables',
    'Bar Stools & Counter Stools',
    // Bedroom
    'Beds & Bed Frames',
    'Wardrobes & Armoires',
    // Office
    'Desks',
    'Office Chairs',
    // Entryway
    'Console Tables',
    'Entryway Benches',
    // Baby & Kids
    'Kids Beds',
    'Cribs & Bassinets',
  ];
  
  // Get one product from each target subcategory
  targetSubcategories.forEach(subcategory => {
    if (!seenSubcategories.has(subcategory)) {
      const product = products.find(p => p.subcategory === subcategory);
      if (product) {
        featured.push(product);
        seenSubcategories.add(subcategory);
      }
    }
  });
  
  return featured;
};

const FeaturedProducts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [isPaused, setIsPaused] = useState(false);
  
  const featuredProducts = useMemo(() => getFeaturedProducts(), []);
  // Duplicate for seamless loop
  const duplicatedProducts = [...featuredProducts, ...featuredProducts];

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              Our Collection
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Featured Products
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-accent font-semibold group"
          >
            View All Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div 
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Track */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: isPaused ? undefined : [0, -50 * featuredProducts.length * 5.5],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: featuredProducts.length * 4,
              ease: "linear",
            },
          }}
          style={{ width: 'max-content' }}
        >
          {duplicatedProducts.map((product, index) => (
            <Link 
              key={`${product.id}-${index}`}
              to={`/products?id=${product.id}`}
              className="group flex-shrink-0 w-[280px] md:w-[320px]"
            >
              {/* Image Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-4">
                <img
                  src={getProductImage(product)}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="px-6 py-3 rounded-full bg-background text-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-90">
                    View Details
                  </span>
                </div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground">
                  {product.category}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-1">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">{product.subcategory}</p>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
