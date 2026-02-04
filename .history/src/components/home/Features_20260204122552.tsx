import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Paintbrush, Award, Clock, Gem } from 'lucide-react';

const features = [
  {
    icon: Paintbrush,
    title: 'Custom Design',
    description: 'Every piece is crafted to your unique vision and specifications.',
  },
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description: 'Master artisans with decades of experience in fine woodworking.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We respect your time with punctual delivery on every project.',
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    description: 'Only the finest woods, fabrics, and finishes in every piece.',
  },
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-secondary grain-overlay">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Crafting Excellence
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine traditional craftsmanship with modern design to create furniture that stands the test of time.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative h-[200px] group-hover:h-[280px] transition-all duration-500 ease-out">
                {/* Minimal Border Card */}
                <div className="absolute inset-0 rounded-2xl border border-border/50 group-hover:border-accent/30 transition-colors duration-500 overflow-hidden">
                  
                  {/* Expanding Circle Background */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-0 h-0 rounded-full bg-gradient-to-br from-accent/10 to-primary/5 group-hover:w-[500px] group-hover:h-[500px] transition-all duration-700 ease-out" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                    
                    {/* Icon */}
                    <motion.div
                      className="mb-6"
                      animate={{
                        rotate: 0,
                      }}
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <feature.icon className="w-12 h-12 text-accent group-hover:text-primary transition-colors duration-500" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>

                    {/* Description - Fades in on hover */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 0, y: 10 }}
                      className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                    >
                      {feature.description}
                    </motion.p>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;