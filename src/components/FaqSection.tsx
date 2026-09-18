'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: "When is the best time to visit Sri Lanka?",
    answer: "Sri Lanka is a year-round destination! The best time for the west and south coasts (like Galle and Yala) is December to April. For the east coast, May to September is ideal. The cultural triangle is great almost all year.",
  },
  {
    question: "Do I need a visa to enter Sri Lanka?",
    answer: "Yes, most nationalities require an Electronic Travel Authorization (ETA) prior to arrival. It's a simple online process that usually takes a few minutes to approve.",
  },
  {
    question: "What should I pack for a wildlife safari?",
    answer: "Pack lightweight, breathable clothing in neutral colors (khaki, olive, brown) to blend in with nature. Don't forget sunscreen, a wide-brimmed hat, insect repellent, and a good pair of binoculars or a zoom lens for your camera!",
  },
  {
    question: "Are your tours family-friendly?",
    answer: "Absolutely! We offer bespoke itineraries tailored specifically for families, ensuring a perfect balance of adventure, education, and relaxation suitable for all ages.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-pearl-50">
      <div className="container-wide px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <div className="sticky top-32">
              <span className="text-gold-500 font-heading tracking-[0.2em] uppercase text-sm mb-4 block">
                Travel Information
              </span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-forest-950 mb-6">
                Frequently Asked <br /> Questions
              </h2>
              <p className="text-forest-500 font-light text-lg leading-relaxed mb-8">
                Preparing for your adventure? Here are some of the most common questions our travelers ask us before embarking on their journey to Ceylon.
              </p>
              
              <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-pearl-200">
                <div className="bg-pearl-100 rounded-full p-3 text-gold-500">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-forest-950">Still have questions?</h4>
                  <p className="text-forest-400 text-sm">Contact our dedicated travel experts.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-pearl-200 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span className="font-heading font-bold text-lg text-forest-950 pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gold-500 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-forest-500 font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
