import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/layout/Layout';
import ProductModal from '@/components/products/ProductModal';
import { products, Product } from '@/data/products';
import { Filter, X, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [showFilters, setShowFilters] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#F8F6F3] grain-overlay">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#A87749] mb-4 block">
              Our Collection
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#070809] mb-4">
              Products & Gallery
            </h1>
            <p className="text-[#5D6F70] text-lg">
              Explore our curated collection of handcrafted furniture pieces designed to elevate your space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section with Sidebar */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex gap-8">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-[#A87749] to-[#5D6F70] text-white shadow-xl flex items-center justify-center"
            >
              <SlidersHorizontal className="w-6 h-6" />
            </button>

            {/* Sidebar Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${
                showFilters ? 'fixed inset-0 z-50 bg-white' : 'hidden'
              } lg:block lg:relative lg:w-80 space-y-6 overflow-y-auto p-6 lg:p-0`}
            >
              {/* Mobile Close Button */}
              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F8F6F3] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="lg:sticky lg:top-24">
                {/* Filter Header */}
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-[#A87749]" />
                  <h3 className="font-display text-xl font-bold text-[#070809]">Filters</h3>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                  <h4 className="font-semibold text-[#070809] mb-4">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl transition-all ${
                          activeCategory === category
                            ? 'bg-gradient-to-r from-[#A87749] to-[#5D6F70] text-white font-medium'
                            : 'bg-[#F8F6F3] text-[#5D6F70] hover:bg-[#E8E6E3]'
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
                  <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                    <h4 className="font-semibold text-[#070809] mb-4">Style</h4>
                    <div className="space-y-2">
                      {subcategories.map((subcategory) => (
                        <button
                          key={subcategory}
                          onClick={() => setActiveSubcategory(subcategory)}
                          className={`w-full text-left px-4 py-2.5 rounded-xl transition-all text-sm ${
                            activeSubcategory === subcategory
                              ? 'bg-[#A87749] text-white font-medium'
                              : 'bg-[#F8F6F3] text-[#5D6F70] hover:bg-[#E8E6E3]'
                          }`}
                        >
                          {subcategory}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price Range */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                  <h4 className="font-semibold text-[#070809] mb-4">Price Range</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        placeholder="Min"
                        className="flex-1 px-3 py-2 border border-[#5D6F70]/20 rounded-lg text-sm focus:outline-none focus:border-[#A87749]"
                      />
                      <span className="text-[#5D6F70]">-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        placeholder="Max"
                        className="flex-1 px-3 py-2 border border-[#5D6F70]/20 rounded-lg text-sm focus:outline-none focus:border-[#A87749]"
                      />
                    </div>
                    <div className="pt-2">
                      <input
                        type="range"
                        min="0"
                        max="10000000"
                        step="100000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full accent-[#A87749]"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-[#5D6F70]">
                      <span>TZS 0</span>
                      <span>TZS 10M+</span>
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
                  className="w-full px-4 py-3 bg-[#F8F6F3] text-[#5D6F70] rounded-xl font-medium hover:bg-[#E8E6E3] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </motion.aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-[#5D6F70]">
                  Showing <span className="font-bold text-[#A87749]">{filteredProducts.length}</span> products
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
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F8F6F3] mb-4">
                        <img
                          src={product.gallery[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#070809]/0 group-hover:bg-[#070809]/40 transition-colors duration-300 flex items-center justify-center">
                          <span className="px-6 py-3 rounded-full bg-white text-[#070809] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                            View Details
                          </span>
                        </div>

                        {/* Category Badge */}
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-[#070809]">
                          {product.subcategory}
                        </span>

                        {/* Gallery Indicator */}
                        {product.gallery.length > 1 && (
                          <div className="absolute bottom-4 right-4 flex gap-1">
                            {product.gallery.slice(0, 4).map((_, i) => (
                              <div
                                key={i}
                                className="w-2 h-2 rounded-full bg-white/60 backdrop-blur-sm"
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <h3 className="font-display text-lg font-semibold text-[#070809] group-hover:text-[#A87749] transition-colors mb-1">
                        {product.name}
                      </h3>
                      <p className="text-[#5D6F70] text-sm mb-2">{product.priceRange}</p>
                      <div className="flex items-center gap-2 text-xs text-[#5D6F70]">
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
                  <div className="w-20 h-20 rounded-full bg-[#F8F6F3] flex items-center justify-center mx-auto mb-4">
                    <Filter className="w-10 h-10 text-[#A87749]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#070809] mb-2">
                    No Products Found
                  </h3>
                  <p className="text-[#5D6F70] mb-6">
                    Try adjusting your filters or browse all products
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory('All');
                      setActiveSubcategory('All');
                      setPriceRange([0, 10000000]);
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-[#A87749] to-[#5D6F70] text-white rounded-xl font-semibold"
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
     
    </Layout>
  );
};

export default Products;