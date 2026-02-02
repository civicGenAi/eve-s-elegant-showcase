import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Layout from '@/components/layout/Layout';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(20),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/255123456789?text=${encodeURIComponent("Hi Eve Furniture! I'd like to inquire about your services.")}`,
      '_blank'
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary grain-overlay">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions or ready to start your project? We're here to help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-success/10 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for reaching out. We'll get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                      {errors.name && (
                        <p className="text-error text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+255 XXX XXX XXX"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-error text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                    {errors.email && (
                      <p className="text-error text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                    {errors.subject && (
                      <p className="text-error text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-error text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <span className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-whatsapp/10 border border-whatsapp/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-whatsapp flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-whatsapp-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      Quick Chat on WhatsApp
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Get instant responses from our team. We typically respond within minutes!
                    </p>
                    <button
                      onClick={openWhatsApp}
                      className="px-6 py-2 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold text-sm hover:bg-whatsapp/90 transition-colors"
                    >
                      Start Chat
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Details Card */}
              <div className="p-6 rounded-2xl bg-secondary">
                <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground text-sm">
                        123 Furniture Street, Mikocheni<br />
                        Dar es Salaam, Tanzania
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+255123456789" className="text-muted-foreground text-sm hover:text-accent">
                        +255 123 456 789
                      </a>
                      <br />
                      <a href="tel:+255987654321" className="text-muted-foreground text-sm hover:text-accent">
                        +255 987 654 321
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:info@evefurniture.co.tz" className="text-muted-foreground text-sm hover:text-accent">
                        info@evefurniture.co.tz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-medium text-foreground mb-3">Follow Us</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://instagram.com/evefurniture"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="https://facebook.com/evefurniture"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="https://linkedin.com/company/evefurniture"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/5 border border-accent/10">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                <p className="text-sm text-foreground">
                  <span className="font-medium">We typically respond within 2 hours</span> during business hours
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-2xl bg-secondary overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126858.19376923063!2d39.12262555!3d-6.7923501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bae169bd6f1%3A0x940f6b26a086a1dd!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2s!4v1704988321456!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eve Furniture Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
