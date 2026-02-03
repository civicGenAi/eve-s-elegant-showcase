import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/layout/Layout';
import ProductModal from '@/components/products/ProductModal';
import { products, Product } from '@/data/products';
import { Filter, X, SlidersHorizontal, Sparkles, Award, Clock, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import product images
import productDiningTable from '@/assets/product-dining-table.jpg';
import productChair from '@/assets/product-chair.jpg';
import productCabinet from '@/assets/product-cabinet.jpg';
import productCoffeeTable from '@/assets/product-coffee-table.jpg';
import productSofa from '@/assets/product-sofa.jpg';
import productWardrobe from '@/assets/product-wardrobe.jpg';
import heroFinished from '@/assets/hero-finished.jpg';

// Product image map
const imageMap: Record<number, string> = {
  1: productDiningTable,
  2: productDiningTable,
  3: productDiningTable,
  4: productCoffeeTable,
  5: productCoffeeTable,
  6: productCoffeeTable,
  7: productDiningTable,
  8: productDiningTable,
  9: productChair,
  10: productChair,
  11: productChair,
  12: productChair,
  13: productChair,
  14: productCabinet,
  15: productCabinet,
  16: productWardrobe,
  17: productWardrobe,
  18: productCabinet,
  19: productSofa,
  20: productSofa,
  21: productSofa,
  22: productSofa,
};

// Hero carousel images and messages
const heroSlides = [
  { image: heroFinished, text: "Crafted for Excellence" },
  { image: productSofa, text: "Beyond Expectations" },
  { image: productDiningTable, text: "Free Consultation" },
  { image: productChair, text: "Quality Guaranteed" },
  { image: productCabinet, text: "Timeless Design" },
];

const Products = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Hero slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  
  // Get subcategories for selected category
  const getSubcategories = (category: string) => {
    if (category === 'All') return ['All'];
    const subs = products
      .filter(p => p.category === category)
      .map(p => p.subcategory)
      .filter((v, i, a) => a.indexOf(v) === i);
    return ['All', ...subs];
  };

  const subcategories = getSubcategories(activeCategory);

  // Filter products
  const filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === 'All' || product.category === activeCategory;
    const subcategoryMatch = activeSubcategory === 'All' || product.subcategory === activeSubcategory;
    const priceMatch = product.priceValue >= priceRange[0] && product.priceValue <= priceRange[1];
    return categoryMatch && subcategoryMatch && priceMatch;
  });

  const handleCategoryClick = (category: string) => {
    if (category === 'Custom') {
      navigate('/quote');
      return;
    }
    setActiveCategory(category);
    setActiveSubcategory('All');
  };

  const formatPrice = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
    return value.toString();
  };

  return (
    <Layout>
      {/* Animated Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentHeroSlide].image}
              alt="Products showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
                Our Collection
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
                Products & Gallery
              </h1>
              
              {/* Animated Text */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentHeroSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-display text-accent mb-6"
                >
                  {heroSlides[currentHeroSlide].text}
                </motion.p>
              </AnimatePresence>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { icon: Sparkles, text: "Premium Quality" },
                  { icon: Clock, text: "On-Time Delivery" },
                  { icon: Shield, text: "Guaranteed Work" },
                  { icon: Award, text: "Free Consultation" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm text-background text-sm"
                  >
                    <item.icon size={16} className="text-accent" />
                    {item.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentHeroSlide ? 'w-8 bg-accent' : 'w-2 bg-background/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Products Section with Sidebar */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex gap-8">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-accent to-primary text-background shadow-xl flex items-center justify-center"
            >
              <SlidersHorizontal className="w-6 h-6" />
            </button>

            {/* Sidebar Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${
                showFilters ? 'fixed inset-0 z-50 bg-card' : 'hidden'
              } lg:block lg:relative lg:w-80 space-y-6 overflow-y-auto p-6 lg:p-0`}
            >
              {/* Mobile Close Button */}
              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="lg:sticky lg:top-24">
                {/* Filter Header */}
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-accent" />
                  <h3 className="font-display text-xl font-bold text-foreground">Filters</h3>
                </div>

                {/* Categories */}
                <div className="bg-card rounded-2xl p-6 shadow-lg mb-6 border border-border">
                  <h4 className="font-semibold text-foreground mb-4">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl transition-all ${
                          activeCategory === category
                            ? 'bg-gradient-to-r from-accent to-primary text-background font-medium'
                            : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                        }`}
                      >
                        {category}
                        {category === 'Custom' && (
                          <span className="ml-2 text-xs">→</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subcategories */}
                {activeCategory !== 'All' && activeCategory !== 'Custom' && subcategories.length > 1 && (
                  <div className="bg-card rounded-2xl p-6 shadow-lg mb-6 border border-border">
                    <h4 className="font-semibold text-foreground mb-4">Style</h4>
                    <div className="space-y-2">
                      {subcategories.map((subcategory) => (
                        <button
                          key={subcategory}
                          onClick={() => setActiveSubcategory(subcategory)}
                          className={`w-full text-left px-4 py-2.5 rounded-xl transition-all text-sm ${
                            activeSubcategory === subcategory
                              ? 'bg-accent text-background font-medium'
                              : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                          }`}
                        >
                          {subcategory}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price Range */}
                <div className="bg-card rounded-2xl p-6 shadow-lg mb-6 border border-border">
                  <h4 className="font-semibold text-foreground mb-4">Price Range</h4>
                  <div className="space-y-6">
                    {/* Price Display */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="px-3 py-1.5 rounded-lg bg-secondary text-foreground font-medium">
                        TZS {formatPrice(priceRange[0])}
                      </span>
                      <span className="text-muted-foreground">to</span>
                      <span className="px-3 py-1.5 rounded-lg bg-secondary text-foreground font-medium">
                        TZS {formatPrice(priceRange[1])}
                      </span>
                    </div>
                    
                    {/* Range Slider */}
                    <div className="relative pt-2">
                      <input
                        type="range"
                        min="0"
                        max="10000000"
                        step="100000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-accent"
                        style={{
                          background: `linear-gradient(to right, hsl(var(--accent)) 0%, hsl(var(--accent)) ${(priceRange[1] / 10000000) * 100}%, hsl(var(--secondary)) ${(priceRange[1] / 10000000) * 100}%, hsl(var(--secondary)) 100%)`
                        }}
                      />
                    </div>
                    
                    {/* Quick Price Buttons */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: '<1M', value: 1000000 },
                        { label: '<3M', value: 3000000 },
                        { label: 'All', value: 10000000 },
                      ].map((btn) => (
                        <button
                          key={btn.label}
                          onClick={() => setPriceRange([0, btn.value])}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                            priceRange[1] === btn.value
                              ? 'bg-accent text-background'
                              : 'bg-secondary text-muted-foreground hover:bg-accent/20'
                          }`}
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    setActiveSubcategory('All');
                    setPriceRange([0, 10000000]);
                  }}
                  className="w-full px-4 py-3 bg-secondary text-muted-foreground rounded-xl font-medium hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </motion.aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-bold text-accent">{filteredProducts.length}</span> products
                </p>
              </div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
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
                      {/* Image Container with Gallery Preview */}
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-4">
                        <img
                          src={imageMap[product.id] || productDiningTable}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                          <span className="px-6 py-3 rounded-full bg-background text-foreground font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                            View Details
                          </span>
                        </div>

                        {/* Category Badge */}
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
                          {product.subcategory}
                        </span>

                        {/* Gallery Indicator */}
                        {product.gallery.length > 1 && (
                          <div className="absolute bottom-4 right-4 flex gap-1">
                            {product.gallery.slice(0, 4).map((_, i) => (
                              <div
                                key={i}
                                className="w-2 h-2 rounded-full bg-background/60 backdrop-blur-sm"
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">{product.priceRange}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{product.materials[0]}</span>
                        <span>•</span>
                        <span>{product.dimensions.split('×')[0].trim()}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <Filter className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    No Products Found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or browse all products
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory('All');
                      setActiveSubcategory('All');
                      setPriceRange([0, 10000000]);
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-accent to-primary text-background rounded-xl font-semibold"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </Layout>
  );
};

export default Products;
