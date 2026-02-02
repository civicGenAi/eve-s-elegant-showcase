import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Linkedin,
  ArrowUp,
  Send
} from 'lucide-react';
import logoDark from '@/assets/logo-dark.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-primary-foreground grain-overlay">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <img src={logoDark} alt="Eve Furniture" className="h-14 w-auto brightness-0 invert" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting exceptional furniture that transforms spaces and elevates living. 
              Quality craftsmanship, timeless design.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/evefurniture"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted/10 hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/evefurniture"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted/10 hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com/company/evefurniture"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted/10 hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Products', path: '/products' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Request Quote', path: '/quote' },
                { name: 'FAQs', path: '/faqs' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  123 Furniture Street, Dar es Salaam, Tanzania
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+255123456789" className="text-muted-foreground hover:text-primary-foreground text-sm">
                  +255 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:info@evefurniture.co.tz" className="text-muted-foreground hover:text-primary-foreground text-sm">
                  info@evefurniture.co.tz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to receive updates on new collections and exclusive offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg bg-muted/10 border border-muted/20 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="p-3 rounded-lg bg-accent hover:bg-accent/90 transition-colors"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-muted/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Eve Furniture Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary-foreground text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary-foreground text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-card text-card-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
