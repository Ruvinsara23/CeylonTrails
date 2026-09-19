'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useBooking } from '../../context/BookingContext';
import { tourPackages } from '../../../data/mock';

export default function StepSuccess() {
  const { data, resetBooking } = useBooking();
  const selectedPackage = tourPackages.find((p) => p.id === data.packageId);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-8"
    >
      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
        className="w-20 h-20 bg-jungle-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-forest-950"
      >
        <CheckCircleIcon className="w-12 h-12" />
      </motion.div>

      <h2 className="font-heading font-bold text-3xl text-gray-900 mb-3">
        Booking confirmed!
      </h2>
      <p className="text-gray-500 max-w-md mx-auto mb-8">
        Thank you, {data.firstName}! We have received your booking request and will get back to you within 24 hours.
      </p>

      {/* Booking Summary */}
      <div className="bg-sand-100 rounded-2xl p-6 text-left max-w-md mx-auto mb-8">
        <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
          Booking summary
        </h3>
        <div className="space-y-3 text-sm">
          {selectedPackage && (
            <div className="flex justify-between">
              <span className="text-gray-500">Package</span>
              <span className="font-medium text-gray-900">{selectedPackage.title}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-500">Dates</span>
            <span className="font-medium text-gray-900">{data.startDate} to {data.endDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Travelers</span>
            <span className="font-medium text-gray-900">{data.adults} adults, {data.children} children</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Contact</span>
            <span className="font-medium text-gray-900">{data.email}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button onClick={resetBooking} className="btn-secondary">
          Book Another Tour
        </button>
        <Link href="/" className="px-8 py-3.5 rounded-xl text-gray-600 font-medium hover:bg-gray-100 transition-colors">
          Return Home
        </Link>
      </div>
    </motion.div>
  );
}
