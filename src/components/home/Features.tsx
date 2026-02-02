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
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card hover:shadow-lg transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-accent/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                    className="h-full bg-accent origin-left"
                  />
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
