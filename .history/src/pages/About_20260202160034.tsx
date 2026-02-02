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
  Truck,
  CreditCard,
  Shield,
  MapPin,
  Clock,
  Percent,
  Wallet,
  Banknote,
  Package
} from 'lucide-react';
import heroFinished from '@/assets/hero-finished.jpg';
import heroWorkshop from '@/assets/hero-workshop.jpg';

const values = [
  { icon: Award, title: 'Quality', description: 'Uncompromising standards in every piece we create.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Blending traditional techniques with modern design.' },
  { icon: Heart, title: 'Integrity', description: 'Honest craftsmanship and transparent business practices.' },
  { icon: Users, title: 'Customer-First', description: 'Your vision and satisfaction drive everything we do.' },
];

const paymentMethods = [
  { 
    icon: Banknote, 
    title: 'Bank Transfer', 
    description: 'Direct transfers to our business account - secure and traceable.' 
  },
  { 
    icon: Wallet, 
    title: 'Mobile Money', 
    description: 'M-Pesa, Tigo Pesa, Airtel Money - instant and convenient.' 
  },
  { 
    icon: CreditCard, 
    title: 'Card Payments', 
    description: 'Credit and debit cards accepted for your convenience.' 
  },
  { 
    icon: Percent, 
    title: 'Flexible Plans', 
    description: 'Custom payment schedules available for large orders.' 
  },
];

const deliveryRegions = [
  { 
    region: 'Dar es Salaam', 
    delivery: 'Free Delivery', 
    time: '2-3 Days',
    icon: Package
  },
  { 
    region: 'Arusha & Moshi', 
    delivery: 'Standard Rates', 
    time: '5-7 Days',
    icon: Truck
  },
  { 
    region: 'Mwanza & Lake Zone', 
    delivery: 'Regional Rates', 
    time: '7-10 Days',
    icon: Truck
  },
  { 
    region: 'Dodoma & Central', 
    delivery: 'Regional Rates', 
    time: '5-7 Days',
    icon: Truck
  },
  { 
    region: 'Mbeya & Southern', 
    delivery: 'Regional Rates', 
    time: '7-10 Days',
    icon: Truck
  },
  { 
    region: 'Nationwide Coverage', 
    delivery: 'Custom Quotes', 
    time: 'Contact Us',
    icon: MapPin
  },
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
  const [paymentRef, paymentInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [deliveryRef, deliveryInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F8F6F3] grain-overlay">
        <div className="container-custom">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#A87749] mb-4 block">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#070809] mb-6">
              Crafting Dreams Into Reality
            </h1>
            <p className="text-[#5D6F70] text-lg md:text-xl">
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
              <span className="text-sm uppercase tracking-[0.3em] text-[#A87749] mb-4 block">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#070809] mb-6">
                A Legacy of Excellence
              </h2>
              <div className="space-y-4 text-[#5D6F70] leading-relaxed">
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
      <section className="py-20 bg-[#070809] text-white grain-overlay">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="w-16 h-16 rounded-full bg-[#A87749]/20 flex items-center justify-center mx-auto md:mx-0 mb-6">
                <Target className="w-8 h-8 text-[#A87749]" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
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
              <div className="w-16 h-16 rounded-full bg-[#A87749]/20 flex items-center justify-center mx-auto md:mx-0 mb-6">
                <Eye className="w-8 h-8 text-[#A87749]" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To be East Africa's most trusted furniture brand, recognized for excellence in design, quality, and customer satisfaction, while nurturing the next generation of skilled craftsmen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[#F8F6F3] grain-overlay">
        <div className="container-custom">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#A87749] mb-4 block">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#070809]">
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
                className="text-center p-6 rounded-2xl bg-white hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-[#A87749]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#A87749]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#070809] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#5D6F70] text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            ref={paymentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={paymentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#A87749] mb-4 block">
              Transparent & Flexible
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#070809] mb-4">
              Payment Options
            </h2>
            <p className="text-[#5D6F70] max-w-2xl mx-auto">
              We offer multiple secure payment methods and flexible terms to make your furniture investment easy and convenient.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 40 }}
                animate={paymentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white border border-[#5D6F70]/10 hover:border-[#A87749]/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#A87749] to-[#5D6F70] flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#070809] mb-2">
                  {method.title}
                </h3>
                <p className="text-[#5D6F70] text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Payment Terms Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={paymentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#A87749] to-[#5D6F70] rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Our Payment Terms</h3>
                <p className="text-white/80 mb-6">
                  Fair, transparent, and designed to give you peace of mind throughout your project.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Percent className="w-5 h-5" />
                  Standard Payment Plan
                </h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>25-50% deposit to begin production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>25% upon project completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Balance before delivery</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  For Large Orders
                </h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Custom payment schedules available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Flexible milestone-based payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Special terms for corporate clients</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delivery Coverage Section */}
      <section className="section-padding bg-[#F8F6F3] grain-overlay">
        <div className="container-custom">
          <motion.div
            ref={deliveryRef}
            initial={{ opacity: 0, y: 30 }}
            animate={deliveryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#A87749] mb-4 block">
              Nationwide Service
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#070809] mb-4">
              Delivery Across Tanzania
            </h2>
            <p className="text-[#5D6F70] max-w-2xl mx-auto">
              We deliver high-quality furniture to every corner of Tanzania with professional handling and secure transport.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryRegions.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 40 }}
                animate={deliveryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-[#5D6F70]/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#A87749]/10 flex items-center justify-center">
                    <region.icon className="w-6 h-6 text-[#A87749]" />
                  </div>
                  {region.delivery === 'Free Delivery' && (
                    <span className="text-xs bg-[#A87749] text-white px-3 py-1 rounded-full font-semibold">
                      FREE
                    </span>
                  )}
                </div>
                <h3 className="font-display text-lg font-semibold text-[#070809] mb-2">
                  {region.region}
                </h3>
                <div className="space-y-1 text-sm">
                  <p className="text-[#5D6F70]">
                    <span className="font-medium text-[#070809]">Delivery:</span> {region.delivery}
                  </p>
                  <p className="text-[#5D6F70]">
                    <span className="font-medium text-[#070809]">Timeline:</span> {region.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Delivery Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white rounded-2xl p-8 md:p-10 border-2 border-[#A87749]/20"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#A87749] to-[#5D6F70] flex items-center justify-center flex-shrink-0">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-[#070809] mb-3">
                  Our Delivery Guarantee
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-[#5D6F70]">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A87749] flex-shrink-0 mt-0.5" />
                    <span>Professional movers and handlers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A87749] flex-shrink-0 mt-0.5" />
                    <span>Secure packaging for protection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A87749] flex-shrink-0 mt-0.5" />
                    <span>Real-time delivery tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A87749] flex-shrink-0 mt-0.5" />
                    <span>Installation services available</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-[#070809] text-white grain-overlay">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#A87749] mb-4 block">
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
                <div className="w-16 h-16 rounded-full bg-[#A87749]/20 flex items-center justify-center mb-2">
                  <step.icon className="w-7 h-7 text-[#A87749]" />
                </div>
                <span className="text-sm font-medium">{step.title}</span>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-[#A87749]/30" />
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