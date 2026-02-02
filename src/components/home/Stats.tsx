import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Expert Craftsmen' },
];

interface CounterProps {
  target: number;
  suffix: string;
  isInView: boolean;
}

const Counter = ({ target, suffix, isInView }: CounterProps) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    
    hasAnimated.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-20 bg-charcoal text-primary-foreground grain-overlay overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-accent mb-2">
                <Counter target={stat.value} suffix={stat.suffix} isInView={inView} />
              </div>
              <p className="text-primary-foreground/70 text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
