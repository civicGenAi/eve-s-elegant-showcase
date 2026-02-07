import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products, Product } from '@/data/products';
import { getProductImage } from '@/data/productImages';
import { useMemo, useState } from 'react';

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
    'Beds',
    'Armoires & Wardrobes',
    // Office
    'Desks',
    'Office Chairs',
    // Entryway
    'Console Tables',
    'Entryway Benches',
    // Baby & Kids
    'Cribs',
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
