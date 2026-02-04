import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import ProductModal from '@/components/products/ProductModal';
import { products, Product, filterOptions } from '@/data/products';
import { 
  Filter, X, SlidersHorizontal, ChevronDown, Grid3x3, 
  LayoutGrid, ArrowLeft 
} from 'lucide-react';

// Import product images
import productDiningTable from '@/assets/product-dining-table.jpg';
import productChair from '@/assets/product-chair.jpg';
import productCabinet from '@/assets/product-cabinet.jpg';
import productCoffeeTable from '@/assets/product-coffee-table.jpg';
import productSofa from '@/assets/product-sofa.jpg';
import productWardrobe from '@/assets/product-wardrobe.jpg';

// Product image map
const imageMap: Record<number, string> = {
  1: productCoffeeTable, 2: productCoffeeTable, 3: productCoffeeTable,
  4: productCoffeeTable, 5: productCoffeeTable, 6: productSofa,
  7: productSofa, 8: productSofa, 9: productCoffeeTable,
  10: productChair, 11: productCabinet, 12: productCoffeeTable,
  13: productDiningTable, 14: productDiningTable, 15: productChair,
  16: productChair, 17: productChair, 18: productCabinet,
  19: productCabinet, 20: productCabinet, 21: productCabinet,
  22: productCabinet, 23: productCabinet, 24: productWardrobe,
  25: productDiningTable, 26: productDiningTable, 27: productChair,
  28: productChair, 29: productCabinet, 30: productCoffeeTable,
  31: productCabinet, 32: productCabinet, 33: productCabinet,
  34: productCabinet, 35: productDiningTable,
};

interface FilterState {
  colors: string[];
  materials: string[];
  sizes: string[];
  tvSizeRanges: string[];
  styles: string[];
  assembly: string[];
  priceRange: [number, number];
}

const SubcategoryPage = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  const navigate = useNavigate();
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid-3' | 'grid-4'>('grid-3');
  const [sortBy, setSortBy] = useState('featured');
  
  const [filters, setFilters] = useState<FilterState>({
    colors: [],
    materials: [],
    sizes: [],
    tvSizeRanges: [],
    styles: [],
    assembly: [],
    priceRange: [0, 10000000],
  });

  // Decode URL parameters
  const decodedCategory = decodeURIComponent(category || '');
  const decodedSubcategory = decodeURIComponent(subcategory || '');

  // Filter products by category and subcategory
  const categoryProducts = products.filter(
    (p) => p.category === decodedCategory && p.subcategory === decodedSubcategory
  );

  // Apply filters
  const filteredProducts = categoryProducts.filter((product) => {
    // Color filter
    if (filters.colors.length > 0) {
      const hasColor = product.colors?.some((c) => filters.colors.includes(c));
      if (!hasColor) return false;
    }

    // Material filter
    if (filters.materials.length > 0) {
      const hasMaterial = product.materials?.some((m) => filters.materials.includes(m));
      if (!hasMaterial) return false;
    }

    // Size filter
    if (filters.sizes.length > 0 && product.size) {
      if (!filters.sizes.includes(product.size)) return false;
    }

    // TV Size Range filter
    if (filters.tvSizeRanges.length > 0 && product.tvSizeRange) {
      if (!filters.tvSizeRanges.includes(product.tvSizeRange)) return false;
    }

    // Style filter
    if (filters.styles.length > 0 && product.style) {
      if (!filters.styles.includes(product.style)) return false;
    }

    // Assembly filter
    if (filters.assembly.length > 0 && product.assembly) {
      if (!filters.assembly.includes(product.assembly)) return false;
    }

    // Price filter
    if (product.priceValue < filters.priceRange[0] || product.priceValue > filters.priceRange[1]) {
      return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.priceValue - b.priceValue;
      case 'price-high':
        return b.priceValue - a.priceValue;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const toggleFilter = (filterType: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const current = prev[filterType] as string[];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [filterType]: updated };
    });
  };

  const clearAllFilters = () => {
    setFilters({
      colors: [],
      materials: [],
      sizes: [],
      tvSizeRanges: [],
      styles: [],
      assembly: [],
      priceRange: [0, 10000000],
    });
  };

  const formatPrice = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
    return value.toString();
  };

  const hasActiveFilters = 
    filters.colors.length > 0 ||
    filters.materials.length > 0 ||
    filters.sizes.length > 0 ||
    filters.tvSizeRanges.length > 0 ||
    filters.styles.length > 0 ||
    filters.assembly.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 10000000;

  // Get available filter values from current products
  const availableColors = Array.from(new Set(categoryProducts.flatMap(p => p.colors || [])));
  const availableMaterials = Array.from(new Set(categoryProducts.flatMap(p => p.materials || [])));
  const availableSizes = Array.from(new Set(categoryProducts.map(p => p.size).filter(Boolean)));
  const availableTvSizes = Array.from(new Set(categoryProducts.map(p => p.tvSizeRange).filter(Boolean)));
  const availableStyles = Array.from(new Set(categoryProducts.map(p => p.style).filter(Boolean)));

  return (
    <Layout>
      {/* Breadcrumb & Header */}
      <section className="bg-secondary py-8">
        <div className="container-custom">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 text-muted-foreground hover:text-accent mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>Home</span>
            <span>/</span>
            <span>{decodedCategory}</span>
            <span>/</span>
            <span className="text-accent font-medium">{decodedSubcategory}</span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            {decodedSubcategory}
          </h1>
          <p className="text-muted-foreground">
            {categoryProducts.length} products available
          </p>
        </div>
      </section>

      {/* Products Section */}
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
                showFilters ? 'fixed inset-0 z-50 bg-card overflow-y-auto' : 'hidden'
              } lg:block lg:relative lg:w-80 p-6 lg:p-0`}
            >
              {/* Mobile Close Button */}
              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Filter Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-accent" />
                    <h3 className="font-display text-xl font-bold text-foreground">Filters</h3>
                  </div>
                  {hasActiveFilters && (
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-accent hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* Price Range */}
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-4">Price Range</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="px-3 py-1.5 rounded-lg bg-secondary text-foreground font-medium">
                        TZS {formatPrice(filters.priceRange[0])}
                      </span>
                      <span className="text-muted-foreground">to</span>
                      <span className="px-3 py-1.5 rounded-lg bg-secondary text-foreground font-medium">
                        TZS {formatPrice(filters.priceRange[1])}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10000000"
                      step="100000"
                      value={filters.priceRange[1]}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          priceRange: [prev.priceRange[0], Number(e.target.value)],
                        }))
                      }
                      className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-accent"
                    />
                  </div>
                </div>

                {/* Colors */}
                {availableColors.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-4">Colors</h4>
                    <div className="flex flex-wrap gap-2">
                      {availableColors.map((color) => (
                        <button
                          key={color}
                          onClick={() => toggleFilter('colors', color)}
                          className={`px-3 py-2 rounded-lg text-sm transition-all ${
                            filters.colors.includes(color)
                              ? 'bg-accent text-background'
                              : 'bg-secondary text-muted-foreground hover:bg-accent/20'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Materials */}
                {availableMaterials.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-4">Materials</h4>
                    <div className="space-y-2">
                      {availableMaterials.map((material) => (
                        <label
                          key={material}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={filters.materials.includes(material)}
                            onChange={() => toggleFilter('materials', material)}
                            className="w-4 h-4 rounded border-border accent-accent"
                          />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground">
                            {material}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sizes */}
                {availableSizes.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-4">Size</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {availableSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => toggleFilter('sizes', size)}
                          className={`px-3 py-2 rounded-lg text-sm transition-all ${
                            filters.sizes.includes(size)
                              ? 'bg-accent text-background'
                              : 'bg-secondary text-muted-foreground hover:bg-accent/20'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* TV Size Range */}
                {availableTvSizes.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-4">TV Size Range</h4>
                    <div className="space-y-2">
                      {availableTvSizes.map((tvSize) => (
                        <label
                          key={tvSize}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={filters.tvSizeRanges.includes(tvSize)}
                            onChange={() => toggleFilter('tvSizeRanges', tvSize)}
                            className="w-4 h-4 rounded border-border accent-accent"
                          />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground">
                            {tvSize}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Styles */}
                {availableStyles.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-4">Style</h4>
                    <div className="flex flex-wrap gap-2">
                      {availableStyles.map((style) => (
                        <button
                          key={style}
                          onClick={() => toggleFilter('styles', style)}
                          className={`px-3 py-2 rounded-lg text-sm transition-all ${
                            filters.styles.includes(style)
                              ? 'bg-accent text-background'
                              : 'bg-secondary text-muted-foreground hover:bg-accent/20'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Assembly */}
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-4">Assembly</h4>
                  <div className="space-y-2">
                    {['Assembled', 'Requires Assembly'].map((assembly) => (
                      <label
                        key={assembly}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={filters.assembly.includes(assembly)}
                          onChange={() => toggleFilter('assembly', assembly)}
                          className="w-4 h-4 rounded border-border accent-accent"
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground">
                          {assembly}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <p className="text-muted-foreground">
                  Showing <span className="font-bold text-accent">{sortedProducts.length}</span> of{' '}
                  {categoryProducts.length} products
                </p>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2 rounded-lg bg-secondary text-foreground border border-border appearance-none pr-10 cursor-pointer"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name: A-Z</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>

                  {/* View Mode */}
                  <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid-3')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'grid-3'
                          ? 'bg-accent text-background'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Grid3x3 size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('grid-4')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'grid-4'
                          ? 'bg-accent text-background'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <LayoutGrid size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`grid ${
                  viewMode === 'grid-3' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                } gap-6`}
              >
                <AnimatePresence mode="popLayout">
                  {sortedProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-4">
                        <img
                          src={imageMap[product.id] || productDiningTable}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                          <span className="px-6 py-3 rounded-full bg-background text-foreground font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                            View Details
                          </span>
                        </div>

                        {product.colors && product.colors.length > 0 && (
                          <div className="absolute top-4 left-4 flex gap-1">
                            {product.colors.slice(0, 3).map((color, i) => (
                              <div
                                key={i}
                                className="w-6 h-6 rounded-full border-2 border-background shadow-sm"
                                style={{ backgroundColor: color.toLowerCase() }}
                                title={color}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">{product.priceRange}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {product.size && <span>{product.size}</span>}
                        {product.size && product.materials[0] && <span>•</span>}
                        {product.materials[0] && <span>{product.materials[0]}</span>}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <Filter className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    No Products Found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-3 bg-gradient-to-r from-accent to-primary text-background rounded-xl font-semibold"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </Layout>
  );
};

export default SubcategoryPage;