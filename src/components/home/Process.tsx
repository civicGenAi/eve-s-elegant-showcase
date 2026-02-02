import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Pencil, Layers, Hammer, CheckCircle, Truck } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Share your vision and requirements with our expert team.',
  },
  {
    icon: Pencil,
    title: 'Design',
    description: 'We create detailed designs tailored to your space.',
  },
  {
    icon: Layers,
    title: 'Material Selection',
    description: 'Choose from our premium range of materials and finishes.',
  },
  {
    icon: Hammer,
    title: 'Crafting',
    description: 'Our artisans bring your design to life with precision.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Check',
    description: 'Rigorous inspection ensures perfection in every detail.',
  },
  {
    icon: Truck,
    title: 'Delivery',
    description: 'Safe delivery and installation at your location.',
  },
];

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding">
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
            Our Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg">
            From initial concept to final delivery, we ensure a seamless experience at every step.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-card border-2 border-accent flex items-center justify-center mb-4 shadow-lg">
                  <step.icon className="w-8 h-8 text-accent" />
                  
                  {/* Step Number */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
