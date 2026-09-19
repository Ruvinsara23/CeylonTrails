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
    <div className="bg-white rounded-3xl p-3 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-pearl-200 mb-10 flex flex-col xl:flex-row max-w-fit mx-auto items-center">
      {/* Type Filter */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-pearl-50 rounded-2xl w-full xl:w-auto">
        {types.map((type) => (
          <button
            key={type.value}
            onClick={() => onTypeChange(type.value)}
            className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-sm font-heading font-semibold transition-colors duration-300 flex-1 sm:flex-none whitespace-nowrap ${
              activeType === type.value
                ? 'text-white'
                : 'text-forest-600 hover:text-forest-950'
            }`}
          >
            {activeType === type.value && (
              <motion.div
                layoutId="activeType"
                className="absolute inset-0 bg-forest-950 rounded-xl"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{type.label}</span>
          </button>
        ))}
      </div>

      <div className="hidden xl:block w-px h-8 bg-pearl-200 mx-6" />
      <div className="xl:hidden w-full h-px bg-pearl-200 my-4" />

      {/* Tier Filter */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-pearl-50 rounded-2xl w-full xl:w-auto">
        {tiers.map((tier) => (
          <button
            key={tier.value}
            onClick={() => onTierChange(tier.value)}
            className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-sm font-heading font-semibold transition-colors duration-300 flex-1 sm:flex-none whitespace-nowrap ${
              activeTier === tier.value
                ? 'text-forest-950'
                : 'text-forest-600 hover:text-forest-950'
            }`}
          >
            {activeTier === tier.value && (
              <motion.div
                layoutId="activeTier"
                className="absolute inset-0 bg-gold-400 rounded-xl shadow-sm"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tier.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
