import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, GripVertical } from 'lucide-react';
import heroFinished from '@/assets/hero-finished.jpg';
import heroWorkshop from '@/assets/hero-workshop.jpg';

const morphWords = ['CRAFT', 'QUALITY', 'ELEGANCE', 'TIMELESS'];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Text morphing for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % morphWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Handle drag for desktop split-screen
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(10, Math.min(90, x)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(10, Math.min(90, x)));
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Mobile Hero - Text Morphing */}
      <div className="md:hidden relative min-h-screen flex flex-col items-center justify-center px-6 grain-overlay">
        {/* Background Images */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
            style={{ backgroundImage: `url(${heroFinished})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
          >
            Evo Furniture Ltd
          </motion.p>

          {/* Morphing Text */}
          <div className="h-32 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentWord}
                initial={{ opacity: 0, y: 40, rotateX: -45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -40, rotateX: 45 }}
                transition={{ duration: 0.5 }}
                className="font-display text-6xl sm:text-7xl font-bold text-foreground"
              >
                {morphWords[currentWord]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg max-w-sm mx-auto mt-4 mb-8"
          >
            Transforming spaces with furniture that tells your story
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/quote"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-foreground/20 text-foreground font-semibold hover:bg-foreground/5 transition-colors"
            >
              Request Quote
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop Hero - Split Screen */}
      <div
        ref={containerRef}
        className="hidden md:block relative h-screen cursor-col-resize"
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* Workshop Side (Left - Grayscale) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center grayscale"
            style={{ backgroundImage: `url(${heroWorkshop})` }}
          />
          <div className="absolute inset-0 bg-charcoal/40" />
          
          {/* Left Content */}
          <div className="absolute inset-0 flex items-center justify-start p-12 lg:p-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-lg"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">
                From Raw Materials
              </p>
              <h2 className="font-display text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                From Vision
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Finished Side (Right - Full Color) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroFinished})` }}
          />
          <div className="absolute inset-0 bg-charcoal/30" />
          
          {/* Right Content */}
          <div className="absolute inset-0 flex items-center justify-end p-12 lg:p-24">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-lg text-right"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">
                To Luxury Living
              </p>
              <h2 className="font-display text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                To Reality
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Draggable Divider */}
        <motion.div
          className="absolute top-0 bottom-0 z-20 flex items-center cursor-col-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          whileHover={{ scale: 1.1 }}
        >
          <div className="relative h-full w-1 bg-primary-foreground/50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center shadow-lg">
              <GripVertical className="text-charcoal" size={24} />
            </div>
          </div>
        </motion.div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-4">
              Evo Furniture Ltd
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-16 bg-primary-foreground/50" />
              <span className="font-display text-2xl text-primary-foreground">→</span>
              <span className="h-px w-16 bg-primary-foreground/50" />
            </div>
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6"
        >
          <Link
            to="/products"
            className="px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg"
          >
            Explore Products
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/quote"
            className="px-8 py-4 rounded-full bg-primary-foreground/90 text-charcoal font-semibold hover:bg-primary-foreground transition-all hover:scale-105 shadow-lg"
          >
            Request Quote
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-primary-foreground/70"
          >
            <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
