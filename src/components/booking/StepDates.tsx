'use client';

import { motion } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import { tourPackages } from '../../../data/mock';

export default function StepDates() {
  const { data, updateData, setStep } = useBooking();

  const handleNext = () => {
    if (data.startDate && data.endDate) {
      setStep(2);
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
          Choose your dates
        </h2>
        <p className="text-gray-500">
          Select your preferred travel dates and tour package.
        </p>
      </div>

      {/* Package Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Select a tour package
        </label>
        <select
          value={data.packageId}
          onChange={(e) => updateData({ packageId: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-jungle-green-700/20 focus:border-jungle-green-700 transition-all"
        >
          <option value="">Choose a package...</option>
          {tourPackages.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.title} — ${pkg.price}/day ({pkg.tier})
            </option>
          ))}
        </select>
      </div>

      {/* Date Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Start date
          </label>
          <input
            type="date"
            value={data.startDate}
            onChange={(e) => updateData({ startDate: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-jungle-green-700/20 focus:border-jungle-green-700 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            End date
          </label>
          <input
            type="date"
            value={data.endDate}
            onChange={(e) => updateData({ endDate: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-jungle-green-700/20 focus:border-jungle-green-700 transition-all"
          />
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end pt-4">
        <button
          onClick={handleNext}
          disabled={!data.startDate || !data.endDate}
          className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
        >
          Continue to Travelers
        </button>
      </div>
    </motion.div>
  );
}
