import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database, UserCheck, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Project details and custom furniture specifications",
        "Payment and billing information",
        "Communication records and correspondence",
        "Website usage data and cookies",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To process and fulfill your custom furniture orders",
        "To communicate about your projects and provide customer support",
        "To send updates about your order status and delivery",
        "To improve our services and website experience",
        "To send promotional materials (with your consent)",
      ],
    },
    {
      icon: Lock,
      title: "Data Protection & Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "SSL encryption for all data transmission",
        "Secure payment processing through trusted providers",
        "Regular security audits and updates",
        "Access to personal data is restricted to authorized personnel only",
      ],
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access your personal data at any time",
        "Request correction of inaccurate information",
        "Request deletion of your data (subject to legal obligations)",
        "Opt-out of marketing communications",
        "Lodge a complaint with the relevant data protection authority",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#A87749] via-[#5D6F70] to-[#A87749] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl mb-6"
            >
              <Shield className="w-10 h-10" />
            </motion.div>

            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Privacy Policy
            </h1>
            <p
              className="text-xl text-white/90 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Your privacy is important to us. This policy explains how Eve Furniture Ltd
              collects, uses, and protects your personal information.
            </p>
            <p className="mt-4 text-white/70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Last Updated: February 2, 2026
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
          className="mb-16 prose prose-lg max-w-none"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-[#5D6F70] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              At Eve Furniture Ltd, we are committed to protecting your privacy and ensuring the
              security of your personal information. This Privacy Policy describes how we collect,
              use, disclose, and safeguard your information when you visit our website or use our
              services. By using our website and services, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </div>
        </motion.div>

        {/* Policy Sections */}
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
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#A87749] to-[#5D6F70] rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2
                    className="text-2xl font-bold text-[#070809] mb-4"
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
                    className="flex items-start gap-3 text-[#5D6F70]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span className="flex-shrink-0 w-2 h-2 bg-[#A87749] rounded-full mt-2" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 mb-16"
        >
          {/* Cookies */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2
              className="text-2xl font-bold text-[#070809] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Cookies and Tracking Technologies
            </h2>
            <p className="text-[#5D6F70] leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We use cookies and similar tracking technologies to enhance your experience on our
              website. Cookies are small data files stored on your device that help us understand
              how you use our site and improve our services.
            </p>
            <p className="text-[#5D6F70] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              You can control cookie settings through your browser preferences. However, disabling
              cookies may limit your ability to use certain features of our website.
            </p>
          </div>

          {/* Third-Party Services */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2
              className="text-2xl font-bold text-[#070809] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Third-Party Services
            </h2>
            <p className="text-[#5D6F70] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We may use third-party service providers to help us operate our business and
              website, such as payment processors, analytics providers, and communication tools
              (e.g., WhatsApp). These providers have access to your information only to perform
              specific tasks on our behalf and are obligated to protect your data.
            </p>
          </div>

          {/* Data Retention */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2
              className="text-2xl font-bold text-[#070809] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Data Retention
            </h2>
            <p className="text-[#5D6F70] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We retain your personal information for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy, unless a longer retention period is required by law.
              Project-related data is retained for record-keeping and warranty purposes.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2
              className="text-2xl font-bold text-[#070809] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Children's Privacy
            </h2>
            <p className="text-[#5D6F70] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our services are not directed to children under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have collected
              information from a child, please contact us immediately.
            </p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#A87749] to-[#5D6F70] text-white rounded-2xl p-8 shadow-xl"
        >
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Us
          </h2>
          <p className="mb-6 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            If you have any questions or concerns about this Privacy Policy or our data practices,
            please contact us:
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <a href="mailto:oscarshayo@hotmail.com" className="hover:underline">
                oscarshayo@hotmail.com
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

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#A87749] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ← Back to Home
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

export default PrivacyPolicy;