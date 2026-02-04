import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { categories, subcategories } from '@/data/products';
import { Sparkles, Award, Clock, Shield, ArrowRight } from 'lucide-react';

// Import product images
import productDiningTable from '@/assets/product-dining-table.jpg';
import productChair from '@/assets/product-chair.jpg';
import productCabinet from '@/assets/product-cabinet.jpg';
import productCoffeeTable from '@/assets/product-coffee-table.jpg';
import productSofa from '@/assets/product-sofa.jpg';
import productWardrobe from '@/assets/product-wardrobe.jpg';
import heroFinished from '@/assets/hero-finished.jpg';

// Hero carousel images and messages
const heroSlides = [
  { image: heroFinished, text: 'Crafted for Excellence' },
  { image: productSofa, text: 'Beyond Expectations' },
  { image: productDiningTable, text: 'Free Consultation' },
  { image: productChair, text: 'Quality Guaranteed' },
  { image: productCabinet, text: 'Timeless Design' },
];

// Category images
const categoryImages: Record<string, string> = {
  'Living Room': productSofa,
  'Kitchen & Dining': productDiningTable,
  'Bedroom': productWardrobe,
  'Office': productCabinet,
  'Entryway': productCoffeeTable,
  'Baby & Kids': productChair,
};

const Products = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Hero slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleCategoryClick = (category: string) => {
    if (category === 'Custom') {
      navigate('/quote');
      return;
    }
    if (category === 'All') {
      setActiveCategory(null);
      return;
    }
    setActiveCategory(category);
  };

  const handleSubcategoryClick = (category: string, subcategory: string) => {
    navigate(`/products/${encodeURIComponent(category)}/${encodeURIComponent(subcategory)}`);
  };

  const mainCategories = categories.filter(
    (c) => !['All', 'Inspiration', 'New Arrivals', 'Custom'].includes(c)
  );

  return (
    <Layout>
      {/* Animated Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
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
                Browse by Category
              </h1>

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

              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { icon: Sparkles, text: 'Premium Quality' },
                  { icon: Clock, text: 'On-Time Delivery' },
                  { icon: Shield, text: 'Guaranteed Work' },
                  { icon: Award, text: 'Free Consultation' },
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

      {/* Category Selection */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <button
              onClick={() => handleCategoryClick('All')}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === null
                  ? 'bg-gradient-to-r from-accent to-primary text-background font-medium shadow-lg'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
              }`}
            >
              All Categories
            </button>
            {mainCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-accent to-primary text-background font-medium shadow-lg'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
            <button
              onClick={() => handleCategoryClick('Custom')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-background font-medium hover:shadow-lg transition-all"
            >
              Custom Order →
            </button>
          </div>

          {/* Show All Categories */}
          {!activeCategory && (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="space-y-16"
            >
              {mainCategories.map((category, categoryIndex) => (
                <div key={category}>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-display text-3xl font-bold text-foreground">
                      {category}
                    </h2>
                    <button
                      onClick={() => setActiveCategory(category)}
                      className="text-accent hover:underline flex items-center gap-2"
                    >
                      View All
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {subcategories[category as keyof typeof subcategories]
                      ?.slice(0, 4)
                      .map((subcategory, index) => (
                        <motion.div
                          key={subcategory}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                          onClick={() => handleSubcategoryClick(category, subcategory)}
                          className="group cursor-pointer"
                        >
                          <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-4">
                            <img
                              src={categoryImages[category]}
                              alt={subcategory}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6">
                              <h3 className="font-display text-xl font-bold text-background">
                                {subcategory}
                              </h3>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Show Selected Category Subcategories */}
          {activeCategory && subcategories[activeCategory as keyof typeof subcategories] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                  {activeCategory}
                </h2>
                <p className="text-muted-foreground">
                  Choose a subcategory to explore our collection
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {subcategories[activeCategory as keyof typeof subcategories].map(
                  (subcategory, index) => (
                    <motion.div
                      key={subcategory}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSubcategoryClick(activeCategory, subcategory)}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-4">
                        <img
                          src={categoryImages[activeCategory]}
                          alt={subcategory}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent flex items-end p-6">
                          <div>
                            <h3 className="font-display text-xl font-bold text-background mb-2">
                              {subcategory}
                            </h3>
                            <div className="flex items-center gap-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                              <span>Explore</span>
                              <ArrowRight size={16} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;