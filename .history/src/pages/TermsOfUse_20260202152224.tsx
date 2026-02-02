import { motion } from "framer-motion";
import { FileText, AlertCircle, ShieldCheck, Scale, Gavel, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  const sections = [
    {
      icon: ShieldCheck,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the Eve Furniture Ltd website and services, you accept and agree to be bound by these Terms of Use.",
        "If you do not agree to these terms, please do not use our website or services.",
        "We reserve the right to modify these terms at any time. Your continued use constitutes acceptance of any changes.",
        "It is your responsibility to review these terms periodically for updates.",
      ],
    },
    {
      icon: FileText,
      title: "Use of Services",
      content: [
        "You must be at least 18 years old to use our services and place orders.",
        "You agree to provide accurate, current, and complete information when placing orders.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree not to use our services for any illegal or unauthorized purposes.",
        "We reserve the right to refuse service to anyone for any reason at any time.",
      ],
    },
    {
      icon: Gavel,
      title: "Orders and Payments",
      content: [
        "All custom furniture orders are subject to availability and confirmation.",
        "Prices are subject to change without notice, but confirmed orders honor quoted prices.",
        "Payment terms require a deposit before production begins (typically 25-75%).",
        "Full payment must be received before delivery of completed furniture.",
        "We accept payments via bank transfer, mobile money, and other approved methods.",
        "Cancellation policies apply - deposits may be non-refundable after production starts.",
      ],
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        "All content on this website, including designs, logos, images, and text, is owned by Eve Furniture Ltd.",
        "You may not reproduce, distribute, or use our content without written permission.",
        "Custom furniture designs created for clients remain the intellectual property of Eve Furniture Ltd unless otherwise agreed.",
        "Photographs of completed projects may be used for promotional purposes unless client requests otherwise.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#2C2C2C] via-[#3D3D3D] to-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl mb-6"
            >
              <FileText className="w-10 h-10" />
            </motion.div>

            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Terms of Use
            </h1>
            <p
              className="text-xl text-white/90 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Please read these terms carefully before using our website and services.
              These terms govern your access to and use of Eve Furniture Ltd's services.
            </p>
            <p className="mt-4 text-white/70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Effective Date: February 2, 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#D2691E]">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[#D2691E] flex-shrink-0 mt-1" />
              <div>
                <h3
                  className="text-xl font-bold text-[#2C2C2C] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Important Notice
                </h3>
                <p className="text-[#666] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  These Terms of Use constitute a legally binding agreement between you and Eve
                  Furniture Ltd. By using our website, services, or placing an order, you acknowledge
                  that you have read, understood, and agree to be bound by these terms. If you do not
                  agree with any part of these terms, you must discontinue use of our services
                  immediately.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Terms Sections */}
        <div className="space-y-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2C2C2C] to-[#4A4A4A] rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2
                    className="text-2xl font-bold text-[#2C2C2C] mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {section.title}
                  </h2>
                </div>
              </div>

              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-start gap-3 text-[#666]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#2C2C2C] rounded-full mt-2" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 mb-16"
        >
          {/* Product Quality & Warranties */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2
              className="text-2xl font-bold text-[#2C2C2C] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Product Quality & Warranties
            </h2>
            <div className="space-y-3 text-[#666]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <p className="leading-relaxed">
                We take pride in our craftsmanship and use high-quality materials in all our
                furniture. All products come with a warranty covering manufacturing defects and
                workmanship issues.
              </p>
              <p className="leading-relaxed">
                Warranty terms vary by product type and will be specified in your order agreement.
                Normal wear and tear, misuse, or damage from accidents are not covered.
              </p>
              <p className="leading-relaxed">
                Custom furniture is made to your specifications. Please review all design details
                carefully before approving production, as custom orders cannot be returned or
                exchanged.
              </p>
            </div>
          </div>

          {/* Delivery & Installation */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2
              className="text-2xl font-bold text-[#2C2C2C] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Delivery & Installation
            </h2>
            <div className="space-y-3 text-[#666]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <p className="leading-relaxed">
                Delivery timelines are estimates and may vary based on project complexity and
                material availability. We will keep you informed of any delays.
              </p>
              <p className="leading-relaxed">
                Delivery charges are calculated based on location and will be specified in your
                quote. Installation services are available at an additional cost.
              </p>
              <p className="leading-relaxed">
                You are responsible for ensuring adequate access to the delivery location. Any
                special requirements (stairs, elevators, narrow passages) should be communicated
                during the ordering process.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2
              className="text-2xl font-bold text-[#2C2C2C] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Limitation of Liability
            </h2>
            <div className="space-y-3 text-[#666]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, Eve Furniture Ltd shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages arising from
                your use of our services.
              </p>
              <p className="leading-relaxed">
                Our total liability for any claim related to our services shall not exceed the
                amount paid by you for the specific product or service giving rise to the claim.
              </p>
              <p className="leading-relaxed">
                We are not responsible for delays or failures in performance resulting from causes
                beyond our reasonable control, including but not limited to natural disasters,
                labor disputes, or material shortages.
              </p>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2
              className="text-2xl font-bold text-[#2C2C2C] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Dispute Resolution
            </h2>
            <div className="space-y-3 text-[#666]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <p className="leading-relaxed">
                In the event of any dispute arising from these Terms of Use or our services, we
                encourage you to contact us first to resolve the matter informally.
              </p>
              <p className="leading-relaxed">
                If we cannot resolve a dispute informally, any legal action shall be governed by
                the laws of Tanzania and subject to the exclusive jurisdiction of the courts in
                Dar es Salaam.
              </p>
            </div>
          </div>

          {/* Amendments */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2
              className="text-2xl font-bold text-[#2C2C2C] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Amendments to Terms
            </h2>
            <div className="space-y-3 text-[#666]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <p className="leading-relaxed">
                We reserve the right to modify or replace these Terms of Use at any time. Material
                changes will be posted on this page with an updated effective date.
              </p>
              <p className="leading-relaxed">
                Your continued use of our services after any changes constitutes acceptance of the
                new terms. We encourage you to review this page periodically.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#2C2C2C] to-[#1A1A1A] text-white rounded-2xl p-8 shadow-xl"
        >
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Questions About These Terms?
          </h2>
          <p className="mb-6 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            If you have any questions or concerns about these Terms of Use, please don't hesitate
            to contact us:
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <a href="mailto:info@evofurniturelimited.com" className="hover:underline">
                info@evofurniturelimited.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <a href="tel:+255655588777" className="hover:underline">
                +255 655 588 777
              </a>
            </div>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#8B4513] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ← Back to Home
            </motion.button>
          </Link>
          <Link to="/privacy-policy">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#2C2C2C] border-2 border-[#2C2C2C] rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              View Privacy Policy →
            </motion.button>
          </Link>
        </motion.div>
      </div>

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

export default TermsOfUse;