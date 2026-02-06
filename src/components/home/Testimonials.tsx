import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Kimaro',
    role: 'Interior Designer',
    content: "Eve Furniture transformed my client's vision into reality. The attention to detail and craftsmanship is unmatched. Every piece tells a story of dedication and artistry.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Odhiambo',
    role: 'Hotel Owner',
    content: "We furnished our entire boutique hotel with Eve Furniture. The quality is exceptional, and our guests constantly compliment the unique designs. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: 'Grace Mwangi',
    role: 'Homeowner',
    content: "From the initial consultation to delivery, the experience was seamless. My dining set is now the centerpiece of our home. The team's professionalism exceeded expectations.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-secondary grain-overlay overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <div className="hidden md:flex absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-accent/10 items-center justify-center">
            <Quote className="w-8 h-8 text-accent" />
          </div>

          {/* Mobile Quote Icon - inline */}
          <div className="flex md:hidden items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Quote className="w-6 h-6 text-accent" />
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="relative min-h-[250px] md:min-h-[300px] flex items-center justify-center px-2 md:px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center w-full"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-4 md:mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="font-display text-base sm:text-lg md:text-2xl text-foreground leading-relaxed mb-5 md:mb-8 max-w-2xl mx-auto px-2">
                  "{testimonials[current].content}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground text-base md:text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
            <button
              onClick={prev}
              className="p-2 md:p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} className="md:hidden" />
              <ChevronLeft size={20} className="hidden md:block" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    current === index ? 'w-6 md:w-8 bg-accent' : 'w-2 bg-border hover:bg-accent/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 md:p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} className="md:hidden" />
              <ChevronRight size={20} className="hidden md:block" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
