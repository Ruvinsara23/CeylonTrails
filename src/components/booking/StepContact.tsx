'use client';

import { motion } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';

export default function StepContact() {
  const { data, updateData, setStep } = useBooking();

  const handleSubmit = () => {
    if (data.firstName && data.lastName && data.email) {
      console.log('=== Booking Submitted ===');
      console.log(JSON.stringify(data, null, 2));
      setStep(4);
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
          Contact information
        </h2>
        <p className="text-gray-500">
          How can we reach you to confirm your booking?
        </p>
      </div>

      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            First name
          </label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => updateData({ firstName: e.target.value })}
            placeholder="John"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-jungle-green-700/20 focus:border-jungle-green-700 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Last name
          </label>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => updateData({ lastName: e.target.value })}
            placeholder="Doe"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-jungle-green-700/20 focus:border-jungle-green-700 transition-all"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email address
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-jungle-green-700/20 focus:border-jungle-green-700 transition-all"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone number (optional)
        </label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => updateData({ phone: e.target.value })}
          placeholder="+1 234 567 8900"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-jungle-green-700/20 focus:border-jungle-green-700 transition-all"
        />
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Special requests (optional)
        </label>
        <textarea
          value={data.specialRequests}
          onChange={(e) => updateData({ specialRequests: e.target.value })}
          placeholder="Dietary requirements, accessibility needs, special occasions..."
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-jungle-green-700/20 focus:border-jungle-green-700 transition-all resize-none"
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <button
          onClick={() => setStep(2)}
          className="px-6 py-3 rounded-xl text-gray-600 font-medium hover:bg-gray-100 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!data.firstName || !data.lastName || !data.email}
          className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
        >
          Confirm Booking
        </button>
      </div>
    </motion.div>
  );
}
