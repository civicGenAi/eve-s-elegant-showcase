import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import heroFinished from '@/assets/hero-finished.jpg';

const CTABanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/255123456789?text=${encodeURIComponent("Hi Eve Furniture! I'd like to discuss transforming my space.")}`,
      '_blank'
    );
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroFinished}
          alt="Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
            Start Your Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Let's create something extraordinary together. Contact us today and bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold hover:bg-whatsapp/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
