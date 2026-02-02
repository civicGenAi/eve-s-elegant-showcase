import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import productDiningTable from '@/assets/product-dining-table.jpg';
import productChair from '@/assets/product-chair.jpg';
import productCabinet from '@/assets/product-cabinet.jpg';
import productCoffeeTable from '@/assets/product-coffee-table.jpg';

const products = [
  {
    id: 1,
    name: 'Signature Dining Table',
    category: 'Tables',
    image: productDiningTable,
  },
  {
    id: 2,
    name: 'Nordic Lounge Chair',
    category: 'Chairs',
    image: productChair,
  },
  {
    id: 3,
    name: 'Modern Storage Cabinet',
    category: 'Cabinets',
    image: productCabinet,
  },
  {
    id: 4,
    name: 'Minimalist Coffee Table',
    category: 'Tables',
    image: productCoffeeTable,
  },
];

const FeaturedProducts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding">
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/products?id=${product.id}`}>
                {/* Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="px-6 py-3 rounded-full bg-primary-foreground text-charcoal font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      View Details
                    </motion.span>
                  </div>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground">
                    {product.category}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
