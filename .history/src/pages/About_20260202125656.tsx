import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/layout/Layout';
import { 
  Target, 
  Eye, 
  Award, 
  Lightbulb, 
  Heart, 
  Users,
  MessageSquare,
  Pencil,
  Layers,
  Hammer,
  CheckCircle,
  Truck
} from 'lucide-react';
import heroFinished from '@/assets/hero-finished.jpg';
import heroWorkshop from '@/assets/hero-workshop.jpg';

const values = [
  { icon: Award, title: 'Quality', description: 'Uncompromising standards in every piece we create.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Blending traditional techniques with modern design.' },
  { icon: Heart, title: 'Integrity', description: 'Honest craftsmanship and transparent business practices.' },
  { icon: Users, title: 'Customer-First', description: 'Your vision and satisfaction drive everything we do.' },
];

const team = [
  { name: 'James Mwakasege', role: 'Founder & Lead Designer', bio: '20+ years in furniture design and woodworking.' },
  { name: 'Maria Lyimo', role: 'Head of Operations', bio: 'Ensures seamless project execution and delivery.' },
  { name: 'David Kimaro', role: 'Master Craftsman', bio: 'Expert in traditional joinery and wood finishing.' },
  { name: 'Sarah Mosha', role: 'Client Relations', bio: 'Dedicated to creating exceptional client experiences.' },
];

const processSteps = [
  { icon: MessageSquare, title: 'Consultation' },
  { icon: Pencil, title: 'Design' },
  { icon: Layers, title: 'Materials' },
  { icon: Hammer, title: 'Crafting' },
  { icon: CheckCircle, title: 'Quality Check' },
  { icon: Truck, title: 'Delivery' },
];

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary grain-overlay">
        <div className="container-custom">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Crafting Dreams Into Reality
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              For over 15 years, Eve Furniture has been transforming spaces across Tanzania with exceptional craftsmanship and timeless design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={heroWorkshop}
                  alt="Our Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-video rounded-xl overflow-hidden shadow-xl hidden md:block">
                <img
                  src={heroFinished}
                  alt="Finished Products"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Legacy of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009 by master craftsman James Mwakasege, Eve Furniture began as a small workshop with a big vision: to bring world-class furniture craftsmanship to East Africa.
                </p>
                <p>
                  What started as a one-man operation has grown into a team of over 50 skilled artisans, designers, and professionals, all united by our passion for creating furniture that stands the test of time.
                </p>
                <p>
                  Today, we serve homeowners, hotels, offices, and institutions across Tanzania and beyond, always maintaining the same attention to detail and commitment to quality that defined our humble beginnings.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-charcoal text-primary-foreground grain-overlay">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto md:mx-0 mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                To create exceptional furniture that enhances lives and spaces, combining traditional craftsmanship with innovative design, while providing outstanding value and service to our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto md:mx-0 mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                To be East Africa's most trusted furniture brand, recognized for excellence in design, quality, and customer satisfaction, while nurturing the next generation of skilled craftsmen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary grain-overlay">
        <div className="container-custom">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            ref={teamRef}
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              The People Behind the Craft
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Team
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="aspect-square rounded-2xl bg-secondary mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-display text-accent/20">
                    {member.name.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                    <p className="text-primary-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-accent text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-charcoal text-primary-foreground grain-overlay">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              From Concept to Completion
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Our Process
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <span className="text-sm font-medium">{step.title}</span>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-accent/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
