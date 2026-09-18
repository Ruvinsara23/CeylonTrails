'use client';

import { motion } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';

export default function StepTravelers() {
  const { data, updateData, setStep } = useBooking();

  const handleNext = () => {
    if (data.adults >= 1) {
      setStep(3);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div>
        <h2 className="font-heading font-bold text-2xl text-gray-900 mb-2">
          Traveler details
        </h2>
        <p className="text-gray-500">
          Tell us about the travelers joining this adventure.
        </p>
      </div>

      {/* Adults */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Number of adults
        </label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => updateData({ adults: Math.max(1, data.adults - 1) })}
            className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors text-xl"
          >
            −
          </button>
          <span className="font-heading font-bold text-2xl text-gray-900 w-8 text-center">
            {data.adults}
          </span>
          <button
            onClick={() => updateData({ adults: Math.min(10, data.adults + 1) })}
            className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors text-xl"
          >
            +
          </button>
        </div>
      </div>

      {/* Children */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Number of children (under 12)
        </label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => updateData({ children: Math.max(0, data.children - 1) })}
            className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors text-xl"
          >
            −
          </button>
          <span className="font-heading font-bold text-2xl text-gray-900 w-8 text-center">
            {data.children}
          </span>
          <button
            onClick={() => updateData({ children: Math.min(8, data.children + 1) })}
            className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors text-xl"
          >
            +
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <button
          onClick={() => setStep(1)}
          className="px-6 py-3 rounded-xl text-gray-600 font-medium hover:bg-gray-100 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="btn-primary"
        >
          Continue to Contact
        </button>
      </div>
    </motion.div>
  );
}
