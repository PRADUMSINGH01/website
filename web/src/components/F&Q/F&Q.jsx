"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I verify part compatibility with my vehicle?",
      answer: "Use our VIN (Vehicle Identification Number) lookup tool or select your vehicle's make, model, and year. Our system cross-references OEM databases to ensure accurate fitment."
    },
    {
      question: "Are the parts genuine OEM or aftermarket?",
      answer: "We offer both options clearly labeled in product descriptions. OEM parts are sourced directly from manufacturers, while aftermarket alternatives meet or exceed OEM specifications."
    },
    {
      question: "What is your return policy for incompatible parts?",
      answer: "We accept returns within 45 days for full refunds if the part remains uninstalled and in original packaging. A prepaid return label is provided for verified compatibility errors."
    },
    {
      question: "Do you provide installation instructions or torque specifications?",
      answer: "Technical bulletins with manufacturer-recommended installation procedures and torque values are available for download on each product page under 'Technical Resources'."
    },
    {
      question: "How are sensitive electronic components protected during shipping?",
      answer: "ECUs and sensors are shipped in anti-static packaging with humidity-controlled containers. All electronic components undergo pre-shipment diagnostic verification."
    },
    {
      question: "What warranty comes with the parts I purchase?",
      answer: "Most parts include a 24-month limited warranty. Specific coverage details are listed on product pages and included with your order documentation."
    },
    {
      question: "Can I order parts for vintage/classic vehicles?",
      answer: "We maintain an extensive archive of vintage part schematics. Contact our classic parts specialists at classics@autoparts.com for specific requests."
    },
    {
      question: "How do core charges/returns work?",
      answer: "Certain components require core returns for recycling. A refundable core charge will be applied at checkout and refunded when we receive your old part within 30 days."
    },
    {
      question: "What payment security measures do you use?",
      answer: "All transactions are PCI-DSS compliant with 256-bit SSL encryption. We support 3D Secure authentication for added credit card protection."
    },
    {
      question: "Do you offer volume discounts for repair shops?",
      answer: "Commercial accounts receive tiered pricing and dedicated support. Apply for a business account through our B2B portal for wholesale pricing."
    },
    {
      question: "How can I track my international shipment?",
      answer: "Global orders include DDP (Delivered Duty Paid) tracking with real-time customs clearance updates. You'll receive a Track & Trace link upon shipment."
    },
    {
      question: "What certifications do your technicians hold?",
      answer: "Our support team includes ASE-certified master technicians with OEM-specific training. All compatibility checks are verified by at least two qualified specialists."
    },
    {
      question: "Can I cancel or modify my order after placement?",
      answer: "Orders can be modified within 1 hour through your account dashboard. After processing begins, contact our logistics team immediately at logistics@autoparts.com"
    },
    {
      question: "How do I handle incorrect/missing parts in my shipment?",
      answer: "Report discrepancies within 48 hours via our claims portal. We'll expedite replacements and cover return shipping for verified errors."
    },
    {
      question: "Are installation services available?",
      answer: "We partner with certified local installers. Request a quote through our Service Network link or consult our recommended torque specifications for DIY installation."
    },
    {
      question: "How do I verify part authenticity?",
      answer: "All parts include traceable QR codes with manufacturer verification. Scan using our mobile app or enter the code in our online authenticity checker."
    },
    {
      question: "What environmental regulations do you follow?",
      answer: "We comply with ROHS, REACH, and EPA regulations. Hazardous materials are handled according to DOT 49 CFR and IMDG standards for safe disposal."
    },
    {
      question: "Do you offer emergency shipping for repair shops?",
      answer: "Priority 24-hour shipping is available for commercial accounts. Contact our 24/7 support line at 1-800-AUTO-PRT for critical situation handling."
    },
    {
      question: "How are parts protected against corrosion during storage?",
      answer: "All metal components receive VCI (Vapor Corrosion Inhibitor) coating and are sealed in oxygen-barrier packaging for maximum shelf life."
    },
    {
      question: "What's your data privacy policy for vehicle information?",
      answer: "All VIN data is encrypted and never shared. Our GDPR-compliant system automatically purges sensitive information after 90 days of order completion."
    }
  ];
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Technical Inquiry Resolution
          </h2>
          <p className="text-gray-600 text-lg">
            Precision Answers for Automotive Engineering Queries
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900 text-left">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-6 h-6 text-gray-600" />
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-6 pt-2 border-t">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t pt-8">
          <p className="text-gray-600">
            Require technical schematics? Contact engineering support at{" "}
            <a 
              href="mailto:techsupport@autoparts.com" 
              className="text-blue-600 hover:underline font-medium"
            >
              techsupport@partspoint.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;