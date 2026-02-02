import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide on scroll down, show on scroll up (mobile optimization)
      if (window.innerWidth < 768) {
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/255123456789?text=${encodeURIComponent("Hi Eve Furniture! I'd like to inquire about your products.")}`,
      '_blank'
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
              >
                <div className="bg-charcoal text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                  Chat with us!
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-charcoal" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.button
            onClick={openWhatsApp}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg hover:shadow-xl flex items-center justify-center"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
            <MessageCircle size={28} className="relative z-10" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
