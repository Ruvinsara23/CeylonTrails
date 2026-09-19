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
  { value: 'standard', label: 'Standard ($60/day)' },
  { value: 'premium', label: 'Premium ($90/day)' },
];

export default function FilterBar({
  activeType,
  onTypeChange,
  activeTier,
  onTierChange,
}: FilterBarProps) {
  return (
    <div className="bg-white rounded-3xl p-2 shadow-sm border border-pearl-200 mb-10 flex flex-col md:flex-row max-w-fit mx-auto">
      {/* Type Filter */}
      <div className="flex items-center gap-1 p-2 bg-pearl-50 rounded-2xl">
        {types.map((type) => (
          <button
            key={type.value}
            onClick={() => onTypeChange(type.value)}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-heading font-medium transition-colors duration-300 ${
              activeType === type.value
                ? 'text-white'
                : 'text-forest-600 hover:text-forest-950'
            }`}
          >
            {activeType === type.value && (
              <motion.div
                layoutId="activeType"
                className="absolute inset-0 bg-forest-950 rounded-xl"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-10">{type.label}</span>
          </button>
        ))}
      </div>

      <div className="hidden md:block w-px bg-pearl-200 mx-4 my-4" />

      {/* Tier Filter */}
      <div className="flex items-center gap-1 p-2 bg-pearl-50 rounded-2xl">
        {tiers.map((tier) => (
          <button
            key={tier.value}
            onClick={() => onTierChange(tier.value)}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-heading font-medium transition-colors duration-300 ${
              activeTier === tier.value
                ? 'text-forest-950'
                : 'text-forest-600 hover:text-forest-950'
            }`}
          >
            {activeTier === tier.value && (
              <motion.div
                layoutId="activeTier"
                className="absolute inset-0 bg-gold-400 rounded-xl"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-10">{tier.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
