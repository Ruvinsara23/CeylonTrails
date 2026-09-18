'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { MessageCircle, Mail } from 'lucide-react';
import { BookingProvider, useBooking } from '../../context/BookingContext';
import StepDates from '../../components/booking/StepDates';
import StepTravelers from '../../components/booking/StepTravelers';
import StepContact from '../../components/booking/StepContact';
import StepSuccess from '../../components/booking/StepSuccess';

const steps = [
  { number: 1, label: 'Dates' },
  { number: 2, label: 'Travelers' },
  { number: 3, label: 'Contact' },
  { number: 4, label: 'Confirmed' },
];

function BookingFormContent() {
  const { step, updateData } = useBooking();
  const searchParams = useSearchParams();

  useEffect(() => {
    const pkgId = searchParams.get('package');
    if (pkgId) {
      updateData({ packageId: pkgId });
    }
  }, [searchParams]);

  return (
    <>
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          {steps.map((s, i) => (
            <div key={s.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all duration-300 ${
                    step >= s.number
                      ? step === s.number
                        ? 'bg-gold-500 text-forest-950 shadow-lg shadow-gold-500/30'
                        : 'bg-forest-950 text-gold-400'
                      : 'bg-pearl-300 text-pearl-500'
                  }`}
                >
                  {step > s.number ? '✓' : s.number}
                </div>
                <span
                  className={`text-xs mt-2 font-medium tracking-widest uppercase transition-colors ${
                    step >= s.number ? 'text-forest-950' : 'text-pearl-400'
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-12 sm:w-20 h-0.5 mx-2 mb-6 transition-colors duration-300 ${
                    step > s.number ? 'bg-forest-950' : 'bg-pearl-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-sm p-6 md:p-12 shadow-2xl border border-pearl-200">
        <AnimatePresence mode="wait">
          {step === 1 && <StepDates key="dates" />}
          {step === 2 && <StepTravelers key="travelers" />}
          {step === 3 && <StepContact key="contact" />}
          {step === 4 && <StepSuccess key="success" />}
        </AnimatePresence>
      </div>
    </>
  );
}

export default function BookPage() {
  return (
    <BookingProvider>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/bookinghero/1920/1080"
          alt="Luxury Resort in Sri Lanka"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 to-forest-950/90" />
        <div className="relative z-10 text-center px-4 mt-16">
          <span className="block text-gold-400 font-heading font-semibold tracking-[0.3em] uppercase mb-4 text-sm">
            Begin Your Journey
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-4xl md:text-5xl text-pearl-50 mb-6"
          >
            Reserve Your Experience
          </motion.h1>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-pearl-100">
        <div className="container-wide mx-auto max-w-2xl">
          <Suspense fallback={<div className="text-center py-10 text-forest-400">Loading your reservation form...</div>}>
            <BookingFormContent />
          </Suspense>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-forest-950 text-pearl-50">
        <div className="container-wide mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Prefer a personal touch?</h2>
          <p className="text-forest-200 mb-10 max-w-lg mx-auto font-light">
            Our luxury travel concierges are available via WhatsApp or email to craft your bespoke itinerary.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-forest-950 transition-all duration-300 font-heading font-medium tracking-wide uppercase text-sm"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <a
              href="mailto:concierge@ceylontrails.com"
              className="flex items-center gap-3 px-8 py-4 bg-gold-500 text-forest-950 hover:bg-white transition-all duration-300 font-heading font-medium tracking-wide uppercase text-sm"
            >
              <Mail className="w-5 h-5" /> Send an Email
            </a>
          </div>
        </div>
      </section>
    </BookingProvider>
  );
}
