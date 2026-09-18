'use client';

import { motion } from 'framer-motion';

interface FilterBarProps {
  activeType: string;
  onTypeChange: (type: string) => void;
  activeTier: string;
  onTierChange: (tier: string) => void;
}

const types = [
  { value: 'all', label: 'All Tours' },
  { value: 'wildlife', label: 'Wildlife' },
  { value: 'cultural', label: 'Cultural' },
  { value: 'adventure', label: 'Adventure' },
];

const tiers = [
  { value: 'all', label: 'All Packages' },
  { value: 'standard', label: 'Standard — $60/day' },
  { value: 'premium', label: 'Premium — $90/day' },
];

export default function FilterBar({
  activeType,
  onTypeChange,
  activeTier,
  onTierChange,
}: FilterBarProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Type Filter */}
        <div className="flex-1">
          <p className="text-sm font-heading font-semibold text-gray-500 mb-3">Tour type</p>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type.value}
                onClick={() => onTypeChange(type.value)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeType === type.value
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {activeType === type.value && (
                  <motion.div
                    layoutId="activeType"
                    className="absolute inset-0 bg-jungle-green-700 rounded-xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-200" />

        {/* Tier Filter */}
        <div className="flex-1">
          <p className="text-sm font-heading font-semibold text-gray-500 mb-3">Package tier</p>
          <div className="flex flex-wrap gap-2">
            {tiers.map((tier) => (
              <button
                key={tier.value}
                onClick={() => onTierChange(tier.value)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTier === tier.value
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {activeTier === tier.value && (
                  <motion.div
                    layoutId="activeTier"
                    className="absolute inset-0 bg-sunrise-orange-500 rounded-xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tier.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
