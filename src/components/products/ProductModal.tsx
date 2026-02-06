import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Ruler, Layers, Check, Share2, Facebook, Link2, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Product } from '@/data/products';

// Subcategory-specific image mapping using public/assets/lv/ images
const subcategoryImageMap: Record<string, Record<string, string[]>> = {
  'Living Room': {
    'TV Stands & Media Consoles': ['/assets/lv/tv.jpg', '/assets/lv/cabinet.jpg', '/assets/lv/display-cabinet.jpg'],
    'Coffee Tables': ['/assets/lv/cof.jpg', '/assets/lv/endsidetbl.jpg', '/assets/lv/console-table.jpg'],
    'Sectionals': ['/assets/lv/section.jpg', '/assets/lv/sofa.jpg', '/assets/lv/living-set.jpg'],
    'Sofas': ['/assets/lv/sofa.jpg', '/assets/lv/section.jpg', '/assets/lv/sleeper-sofa.jpg'],
    'End & Side Tables': ['/assets/lv/endsidetbl.jpg', '/assets/lv/cof.jpg', '/assets/lv/console-table.jpg'],
    'Accent Chairs & Recliners': ['/assets/lv/accent.jpg', '/assets/lv/ottomans.jpg', '/assets/lv/livingr.jpg'],
    'Cabinets & Chests': ['/assets/lv/cabinet.jpg', '/assets/lv/display-cabinet.jpg', '/assets/lv/bookshelf.jpg'],
    'Ottomans & Benches': ['/assets/lv/ottomans.jpg', '/assets/lv/accent.jpg', '/assets/lv/entryway-bench.jpg'],
    'Complete Living Sets': ['/assets/lv/living-set.jpg', '/assets/lv/sofa.jpg', '/assets/lv/section.jpg'],
    'Sleeper Sofas': ['/assets/lv/sleeper-sofa.jpg', '/assets/lv/sofa.jpg', '/assets/lv/section.jpg'],
  },
  'Kitchen & Dining': {
    'Dining Tables': ['/assets/lv/dining-table.jpg', '/assets/lv/dining-set.jpg', '/assets/lv/kitchen-island.jpg'],
    'Dining Chairs & Benches': ['/assets/lv/dining-chairs.jpg', '/assets/lv/dining-set.jpg', '/assets/lv/bar-stools.jpg'],
    'Bar Stools & Counter Stools': ['/assets/lv/bar-stools.jpg', '/assets/lv/bar-table.jpg', '/assets/lv/kitchen-island.jpg'],
    'Kitchen Islands & Carts': ['/assets/lv/kitchen-island.jpg', '/assets/lv/sideboard.jpg', '/assets/lv/bar-table.jpg'],
    'Sideboards & Buffets': ['/assets/lv/sideboard.jpg', '/assets/lv/display-cabinet.jpg', '/assets/lv/wine-cabinet.jpg'],
    'Bar Tables & Pub Sets': ['/assets/lv/bar-table.jpg', '/assets/lv/bar-stools.jpg', '/assets/lv/dining-table.jpg'],
    'Wine & Bar Cabinets': ['/assets/lv/wine-cabinet.jpg', '/assets/lv/bar-table.jpg', '/assets/lv/display-cabinet.jpg'],
    'Display & China Cabinets': ['/assets/lv/display-cabinet.jpg', '/assets/lv/sideboard.jpg', '/assets/lv/cabinet.jpg'],
    'Complete Dining Sets': ['/assets/lv/dining-set.jpg', '/assets/lv/dining-table.jpg', '/assets/lv/dining-chairs.jpg'],
  },
  'Bedroom': {
    'Beds & Bed Frames': ['/assets/lv/bed.jpg', '/assets/lv/bedroom-set.jpg', '/assets/lv/nightstand.jpg'],
    'Nightstands': ['/assets/lv/nightstand.jpg', '/assets/lv/bed.jpg', '/assets/lv/dresser.jpg'],
    'Vanities & Mirrors': ['/assets/lv/vanity.jpg', '/assets/lv/vanity-stool.jpg', '/assets/lv/dresser.jpg'],
    'Dressers': ['/assets/lv/dresser.jpg', '/assets/lv/wardrobe.jpg', '/assets/lv/nightstand.jpg'],
    'Wardrobes & Armoires': ['/assets/lv/wardrobe.jpg', '/assets/lv/dresser.jpg', '/assets/lv/bedroom-set.jpg'],
    'Complete Bedroom Sets': ['/assets/lv/bedroom-set.jpg', '/assets/lv/bed.jpg', '/assets/lv/wardrobe.jpg'],
    'Vanity Stools & Benches': ['/assets/lv/vanity-stool.jpg', '/assets/lv/vanity.jpg', '/assets/lv/ottomans.jpg'],
  },
  'Office': {
    'Desks': ['/assets/lv/desk.jpg', '/assets/lv/office-chair.jpg', '/assets/lv/bookshelf.jpg'],
    'Office Chairs': ['/assets/lv/office-chair.jpg', '/assets/lv/desk.jpg', '/assets/lv/bookshelf.jpg'],
    'Bookshelves': ['/assets/lv/bookshelf.jpg', '/assets/lv/desk.jpg', '/assets/lv/cabinet.jpg'],
  },
  'Entryway': {
    'Console Tables': ['/assets/lv/console-table.jpg', '/assets/lv/entryway-bench.jpg', '/assets/lv/shoe-storage.jpg'],
    'Entryway Benches': ['/assets/lv/entryway-bench.jpg', '/assets/lv/console-table.jpg', '/assets/lv/coat-rack.jpg'],
    'Shoe Storage': ['/assets/lv/shoe-storage.jpg', '/assets/lv/entryway-bench.jpg', '/assets/lv/coat-rack.jpg'],
    'Coat Racks & Hall Trees': ['/assets/lv/coat-rack.jpg', '/assets/lv/garment-rack.jpg', '/assets/lv/entryway-bench.jpg'],
    'Garment Racks': ['/assets/lv/garment-rack.jpg', '/assets/lv/coat-rack.jpg', '/assets/lv/wardrobe.jpg'],
  },
  'Baby & Kids': {
    'Cribs & Bassinets': ['/assets/lv/crib.jpg', '/assets/lv/kids-bed.jpg', '/assets/lv/kids-storage.jpg'],
    'Kids Beds': ['/assets/lv/kids-bed.jpg', '/assets/lv/crib.jpg', '/assets/lv/kids-desk.jpg'],
    'Kids Desks & Chairs': ['/assets/lv/kids-desk.jpg', '/assets/lv/kids-bed.jpg', '/assets/lv/kids-storage.jpg'],
    'Kids Storage': ['/assets/lv/kids-storage.jpg', '/assets/lv/kids-bed.jpg', '/assets/lv/kids-desk.jpg'],
  },
};

// Helper function to get images for a product based on its category/subcategory
const getProductImages = (product: Product): string[] => {
  const categoryImages = subcategoryImageMap[product.category];
  if (categoryImages) {
    const subcategoryImages = categoryImages[product.subcategory];
    if (subcategoryImages && subcategoryImages.length > 0) {
      return subcategoryImages;
    }
  }
  // Fallback to product's gallery if available, or default images
  if (product.gallery && product.gallery.length > 0) {
    return product.gallery;
  }
  return ['/assets/lv/living-set.jpg', '/assets/lv/sofa.jpg'];
};

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  
  if (!product) return null;

  const images = getProductImages(product);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openWhatsApp = () => {
    const message = `Hi Eve Furniture! I'm interested in the ${product.name}. Can we discuss the details?\n\nProduct: ${product.name}\nPrice: ${product.priceRange}\nDimensions: ${product.dimensions}`;
    window.open(`https://wa.me/255655588777?text=${encodeURIComponent(message)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/products?id=${product.id}`);
  };

  const shareWhatsApp = () => {
    const message = `Check out this beautiful ${product.name} from Eve Furniture!\n\nPrice: ${product.priceRange}\n${window.location.origin}/products?id=${product.id}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${window.location.origin}/products?id=${product.id}`)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 hover:bg-background transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2 max-h-[90vh]">
              {/* Image Section with Gallery */}
              <div className="relative bg-secondary">
                {/* Main Image */}
                <div 
                  className="relative aspect-square md:aspect-auto md:h-full cursor-zoom-in"
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={images[currentImageIndex]}
                      alt={`${product.name} - View ${currentImageIndex + 1}`}
                      className={`w-full h-full object-cover transition-transform duration-300 ${isZoomed ? 'scale-150' : ''}`}
                    />
                  </AnimatePresence>
                  
                  {/* Zoom indicator */}
                  <div className="absolute bottom-4 right-4 p-2 rounded-full bg-background/80 text-foreground">
                    <ZoomIn size={18} />
                  </div>
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 hover:bg-background transition-all shadow-lg hover:scale-110"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 hover:bg-background transition-all shadow-lg hover:scale-110"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Category & Subcategory Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                    {product.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-background/90 text-foreground text-xs font-medium">
                    {product.subcategory}
                  </span>
                </div>

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          currentImageIndex === idx 
                            ? 'border-accent scale-110 shadow-lg' 
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                {/* Header */}
                <div className="mb-6">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {product.name}
                  </h2>
                  <p className="text-accent font-bold text-xl">{product.priceRange}</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Dimensions */}
                  <div className="p-4 rounded-xl bg-secondary">
                    <div className="flex items-center gap-2 mb-2">
                      <Ruler className="text-accent" size={18} />
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Dimensions</span>
                    </div>
                    <p className="font-medium text-foreground text-sm">{product.dimensions}</p>
                  </div>

                  {/* Materials */}
                  <div className="p-4 rounded-xl bg-secondary">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="text-accent" size={18} />
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Materials</span>
                    </div>
                    <p className="font-medium text-foreground text-sm">{product.materials[0]}</p>
                  </div>
                </div>

                {/* Finishes */}
                <div className="mb-6">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mb-3 block">Available Finishes</span>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map((finish) => (
                      <span key={finish} className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground hover:bg-accent/10 transition-colors cursor-pointer">
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mb-3 block">Features</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <button
                    onClick={openWhatsApp}
                    className="w-full py-4 rounded-xl bg-whatsapp text-whatsapp-foreground font-semibold hover:bg-whatsapp/90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle size={20} />
                    Place Your Order on WhatsApp
                  </button>
                  <a
                    href="/quote"
                    className="w-full py-4 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center gap-2"
                  >
                    Request Custom Quote
                  </a>
                </div>

                {/* Share */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Share2 size={16} />
                      Share:
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={shareWhatsApp}
                        className="p-2 rounded-full bg-whatsapp/10 hover:bg-whatsapp/20 text-whatsapp transition-colors"
                        aria-label="Share on WhatsApp"
                      >
                        <MessageCircle size={18} />
                      </button>
                      <button
                        onClick={shareFacebook}
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                        aria-label="Share on Facebook"
                      >
                        <Facebook size={18} />
                      </button>
                      <button
                        onClick={copyLink}
                        className="p-2 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                        aria-label="Copy link"
                      >
                        <Link2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
