import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/layout/Layout';
import ProductModal from '@/components/products/ProductModal';
import { products, categories, Product } from '@/data/products';
import productDiningTable from '@/assets/product-dining-table.jpg';
import productChair from '@/assets/product-chair.jpg';
import productCabinet from '@/assets/product-cabinet.jpg';
import productCoffeeTable from '@/assets/product-coffee-table.jpg';
import productSofa from '@/assets/product-sofa.jpg';
import productWardrobe from '@/assets/product-wardrobe.jpg';

const imageMap: Record<number, string> = {
  1: productDiningTable,
  2: productChair,
  3: productCabinet,
  4: productCoffeeTable,
  5: productSofa,
  6: productWardrobe,
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary grain-overlay">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              Our Collection
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Products & Gallery
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our curated collection of handcrafted furniture pieces designed to elevate your space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background sticky top-[72px] z-30 border-b border-border">
        <div className="container-custom">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-4">
                    <img
                      src={imageMap[product.id] || productDiningTable}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="px-6 py-3 rounded-full bg-primary-foreground text-charcoal font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        View Details
                      </span>
                    </div>

                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground">
                      {product.category}
                    </span>
                  </div>

                  {/* Info */}
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{product.priceRange}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        imageMap={imageMap}
        onClose={() => setSelectedProduct(null)}
      />
    </Layout>
  );
};

export default Products;
