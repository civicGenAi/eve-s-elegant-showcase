import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Ruler, Layers, Check, Share2, Facebook, Link2 } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductModalProps {
  product: Product | null;
  imageMap: Record<number, string>;
  onClose: () => void;
}

const ProductModal = ({ product, imageMap, onClose }: ProductModalProps) => {
  if (!product) return null;

  const openWhatsApp = () => {
    const message = `Hi Eve Furniture! I'm interested in the ${product.name}. Can we discuss the details?`;
    window.open(`https://wa.me/255123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const shareWhatsApp = () => {
    const message = `Check out this beautiful ${product.name} from Eve Furniture: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
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
          <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] bg-card rounded-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2 max-h-[90vh]">
              {/* Image Section */}
              <div className="relative aspect-square md:aspect-auto bg-secondary">
                <img
                  src={imageMap[product.id]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                  {product.category}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {product.name}
                </h2>
                <p className="text-accent font-semibold text-lg mb-4">{product.priceRange}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Dimensions */}
                <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-secondary">
                  <Ruler className="text-accent" size={20} />
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Dimensions</span>
                    <p className="font-medium text-foreground">{product.dimensions}</p>
                  </div>
                </div>

                {/* Materials */}
                <div className="flex items-start gap-3 mb-4 p-3 rounded-lg bg-secondary">
                  <Layers className="text-accent mt-0.5" size={20} />
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Materials</span>
                    <p className="font-medium text-foreground">{product.materials.join(', ')}</p>
                  </div>
                </div>

                {/* Finishes */}
                <div className="mb-4">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Available Finishes</span>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map((finish) => (
                      <span key={finish} className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground">
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Features</span>
                  <ul className="space-y-2">
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
                    className="w-full py-4 rounded-xl bg-whatsapp text-whatsapp-foreground font-semibold hover:bg-whatsapp/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Discuss This Product on WhatsApp
                  </button>
                  <a
                    href="/quote"
                    className="w-full py-4 rounded-xl border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors flex items-center justify-center gap-2"
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
