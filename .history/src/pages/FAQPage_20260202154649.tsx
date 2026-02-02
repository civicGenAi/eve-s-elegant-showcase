import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Search,
  ChevronDown,
  MessageCircle,
  Award,
  Users,
  Clock,
  CheckCircle,
  TrendingUp,
  Sparkles,
  Tag,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Questions", icon: Sparkles, count: 24 },
    { id: "ordering", name: "Ordering & Pricing", icon: Tag, count: 6 },
    { id: "customization", name: "Customization", icon: Sparkles, count: 5 },
    { id: "delivery", name: "Delivery & Installation", icon: TrendingUp, count: 4 },
    { id: "materials", name: "Materials & Quality", icon: Award, count: 5 },
    { id: "warranty", name: "Warranty & Care", icon: CheckCircle, count: 4 },
  ];

  const faqs = [
    {
      category: "ordering",
      question: "How do I place a custom furniture order?",
      answer:
        "Placing an order is easy! You can either fill out our Request Quote form on the website, contact us via WhatsApp, or visit our showroom. Our team will discuss your requirements, show you material samples, and create a detailed design proposal with pricing. Once you approve, we'll require a deposit (25-75%) to begin production.",
    },
    {
      category: "ordering",
      question: "What payment methods do you accept?",
      answer:
        "We accept multiple payment methods for your convenience: Bank transfers, Mobile money (M-Pesa, Tigo Pesa, Airtel Money), Cash payments at our office, and Credit/Debit cards. For large orders, we offer flexible payment plans with an initial deposit and balance on delivery.",
    },
    {
      category: "ordering",
      question: "Do you offer payment plans or installments?",
      answer:
        "Yes! For orders above a certain amount, we offer flexible payment plans. Typically, we require 25-50% deposit to start production, 25% upon project completion, and the remaining balance before delivery. Custom payment arrangements can be discussed based on your project size.",
    },
    {
      category: "ordering",
      question: "How much does custom furniture cost?",
      answer:
        "Pricing varies based on design complexity, materials chosen, dimensions, and finishing details. We provide detailed quotes after understanding your requirements. As a general guide, custom dining tables start from TZS XXX,XXX, chairs from TZS XX,XXX, and cabinets from TZS XXX,XXX. Contact us for accurate pricing for your specific project.",
    },
    {
      category: "ordering",
      question: "Can I get a discount for bulk orders?",
      answer:
        "Absolutely! We offer competitive pricing for bulk orders such as office furniture sets, restaurant furnishing, or multiple pieces for hotels. The discount varies based on order quantity and complexity. Contact our sales team for a custom quote.",
    },
    {
      category: "ordering",
      question: "Is there a minimum order requirement?",
      answer:
        "No, there's no minimum order requirement. Whether you need a single chair or furnishing for an entire building, we're here to help. However, delivery charges may apply for single-item orders outside Dar es Salaam.",
    },
    {
      category: "customization",
      question: "Can I customize any furniture design?",
      answer:
        "Yes! Customization is our specialty. You can customize dimensions, materials, colors, finishes, and design details. Bring us your ideas, sketches, or inspiration photos, and our designers will work with you to create the perfect piece. We can also modify existing designs to suit your space.",
    },
    {
      category: "customization",
      question: "Do you provide design consultation services?",
      answer:
        "Yes, we offer complimentary design consultations for all custom projects. Our experienced designers will visit your space (within Dar es Salaam), take measurements, discuss your style preferences, and provide professional recommendations. For projects outside the city, virtual consultations are available.",
    },
    {
      category: "customization",
      question: "Can I see samples before ordering?",
      answer:
        "Absolutely! We encourage clients to visit our showroom where you can see completed pieces, touch material samples (wood types, fabrics, finishes), and get a better feel for quality. We can also bring samples to your location for large projects.",
    },
    {
      category: "customization",
      question: "What if I change my mind about the design after ordering?",
      answer:
        "Minor design changes can be accommodated before production begins at no extra cost. Once production starts, changes may incur additional charges depending on the work already completed. We'll always discuss options with you if you need modifications.",
    },
    {
      category: "customization",
      question: "Can you match furniture to my existing pieces?",
      answer:
        "Yes! Bring photos or measurements of your existing furniture, and we'll do our best to match wood types, stains, and design elements. While exact matches aren't always possible (due to wood variations and aging), we can get very close.",
    },
    {
      category: "delivery",
      question: "How long does it take to complete custom furniture?",
      answer:
        "Production time varies by project complexity. Simple pieces (chairs, small tables) typically take 2-3 weeks. Medium complexity items (dining sets, cabinets) take 3-5 weeks. Large or intricate projects may take 6-8 weeks. We'll provide a timeline estimate in your quote and keep you updated throughout production.",
    },
    {
      category: "delivery",
      question: "Do you deliver nationwide?",
      answer:
        "Yes! We deliver throughout Tanzania. Delivery is free within Dar es Salaam for orders above a certain amount. For other regions, delivery charges are calculated based on distance and will be included in your quote. We use professional movers and ensure proper packaging for long-distance transport.",
    },
    {
      category: "delivery",
      question: "Is installation included in the price?",
      answer:
        "Basic furniture placement is included in delivery. Professional installation (for built-in cabinets, wall units, etc.) is available at an additional cost, which will be specified in your quote. Our skilled team ensures proper assembly and placement.",
    },
    {
      category: "delivery",
      question: "What if the furniture doesn't fit through my door?",
      answer:
        "We take detailed measurements during consultation to prevent this. For tight spaces, we design furniture with knock-down construction (assembled on-site). If you're concerned about access, discuss it with us during the planning phase so we can design accordingly.",
    },
    {
      category: "materials",
      question: "What types of wood do you use?",
      answer:
        "We work with a variety of premium woods including Mvule (African teak), Mahogany, Oak, Pine, and various hardwoods. Each wood type has unique characteristics in terms of durability, grain pattern, and color. Our team can recommend the best wood for your specific needs and budget.",
    },
    {
      category: "materials",
      question: "Do you use sustainable/eco-friendly materials?",
      answer:
        "Yes! We're committed to sustainability. We source wood from certified suppliers who practice responsible forestry. We also offer eco-friendly finish options with low VOC content. Additionally, we can work with reclaimed wood for environmentally conscious clients.",
    },
    {
      category: "materials",
      question: "Can I choose the fabric for upholstered furniture?",
      answer:
        "Absolutely! We offer a wide range of upholstery options including leather, linen, cotton, velvet, and performance fabrics. You can choose from our catalog or provide your own fabric. We'll advise on durability and suitability for your intended use.",
    },
    {
      category: "materials",
      question: "How do I know the furniture quality is good?",
      answer:
        "Quality is our top priority. We use solid wood construction (not particle board), reinforced joinery, high-grade hardware, and durable finishes. You're welcome to visit our workshop to see our craftsmanship process. All pieces undergo quality inspection before delivery.",
    },
    {
      category: "materials",
      question: "What finishing options are available?",
      answer:
        "We offer various finishes: Natural oil finish (enhances wood grain), Lacquer/varnish (protective glossy finish), Matte/satin finish, Painted finish (any color), Distressed/antique finish, and Staining (to change wood color). We'll show you samples to help you decide.",
    },
    {
      category: "warranty",
      question: "Do you offer a warranty on custom furniture?",
      answer:
        "Yes! All our furniture comes with a warranty covering manufacturing defects and workmanship issues. Warranty periods vary: 2 years for structural issues, 1 year for hardware and finishes. Normal wear and tear, misuse, or accidental damage are not covered. Warranty terms will be detailed in your purchase agreement.",
    },
    {
      category: "warranty",
      question: "What if there's a problem with my furniture?",
      answer:
        "If you notice any issues, contact us immediately. For warranty-covered problems, we'll repair or replace the item at no cost. We stand behind our work and want you to be completely satisfied. Our team will visit to assess the issue and determine the best solution.",
    },
    {
      category: "warranty",
      question: "How do I care for and maintain my furniture?",
      answer:
        "We provide care instructions with every piece. General tips: Dust regularly with a soft cloth, avoid direct sunlight (causes fading), use coasters and placemats, clean spills immediately, and reapply wood oil/polish every 6-12 months. We also offer maintenance services if needed.",
    },
    {
      category: "warranty",
      question: "Can you repair or restore old furniture?",
      answer:
        "Yes! We offer furniture repair and restoration services for both our pieces and furniture from other sources. Services include refinishing, reupholstering, structural repairs, and hardware replacement. Bring photos or the item for assessment and quote.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#A87749] via-[#5D6F70] to-[#A87749] text-white overflow-hidden py-20">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl mb-6"
            >
              <MessageCircle className="w-10 h-10" />
            </motion.div>

            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Frequently Asked Questions
            </h1>
            <p
              className="text-xl text-white/90 mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Find answers to common questions about our custom furniture services
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative max-w-2xl mx-auto"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#5D6F70] w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-[#070809] bg-white shadow-xl focus:outline-none focus:ring-4 focus:ring-white/20 transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-80 space-y-6"
          >
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3
                className="text-xl font-bold text-[#070809] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-[#A87749] to-[#5D6F70] text-white shadow-lg"
                        : "bg-[#F8F6F3] text-[#5D6F70] hover:bg-[#E8E6E3]"
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span
                      className={`text-sm px-2 py-1 rounded-lg ${
                        selectedCategory === category.id
                          ? "bg-white/20"
                          : "bg-white"
                      }`}
                    >
                      {category.count}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Company Stats */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#A87749] to-[#5D6F70] rounded-2xl p-6 text-white shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8" />
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Why Choose Us
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-white/80 text-sm">Happy Clients</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-white/80 text-sm">Projects Completed</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-white/80 text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Special Offer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative bg-gradient-to-br from-[#070809] to-[#5D6F70] rounded-2xl p-6 text-white shadow-xl overflow-hidden"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-[#A87749] opacity-20 rounded-full blur-3xl"
              />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-6 h-6 text-[#A87749]" />
                  <span className="text-sm font-bold text-[#A87749]">
                    LIMITED OFFER
                  </span>
                </div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Get 15% Off
                </h3>
                <p className="text-white/80 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  On your first custom furniture order this month!
                </p>
                <Link to="/quote">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#A87749] to-[#5D6F70] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    Claim Offer
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Contact Card - WhatsApp Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3
                className="text-lg font-bold text-[#070809] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Still Have Questions?
              </h3>
              <p
                className="text-[#5D6F70] mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our team is here to help you with any queries.
              </p>
              <a
                href="https://wa.me/255655588777"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-semibold shadow-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </motion.button>
              </a>
            </motion.div>
          </motion.aside>

          {/* FAQ List */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6"
            >
              <p
                className="text-[#5D6F70]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Showing{" "}
                <span className="font-bold text-[#A87749]">
                  {filteredFAQs.length}
                </span>{" "}
                {filteredFAQs.length === 1 ? "question" : "questions"}
              </p>
            </motion.div>

            {filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-12 text-center shadow-lg"
              >
                <Search className="w-16 h-16 text-[#A87749] mx-auto mb-4" />
                <h3
                  className="text-2xl font-bold text-[#070809] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  No Results Found
                </h3>
                <p className="text-[#5D6F70]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Try adjusting your search or browse different categories
                </p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <motion.button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-[#F8F6F3] transition-colors"
                      whileHover={{ backgroundColor: "#F8F6F3" }}
                    >
                      <div className="flex-1">
                        <h3
                          className="text-lg font-bold text-[#070809] mb-1"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown
                          className={`w-6 h-6 ${
                            openFAQ === index ? "text-[#A87749]" : "text-[#999]"
                          }`}
                        />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {openFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="h-px bg-gradient-to-r from-[#A87749] to-transparent mb-4" />
                            <p
                              className="text-[#5D6F70] leading-relaxed"
                              style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section - Improved Layout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 pb-16"
      >
        <div className="bg-gradient-to-br from-[#A87749] via-[#5D6F70] to-[#A87749] rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative px-8 py-12 md:px-16 md:py-16">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"
            />
            
            <div className="relative max-w-4xl mx-auto text-center">
              <h2
                className="text-3xl md:text-5xl font-bold mb-4 text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ready to Create Your Dream Furniture?
              </h2>
              <p
                className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Let's discuss your project and bring your vision to life with our expert
                craftsmanship
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/quote">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-[#A87749] rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Request a Quote
                  </motion.button>
                </Link>
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-lg border-2 border-white text-white rounded-xl font-bold hover:bg-white/20 transition-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Browse Products
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grain Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default FAQPage;