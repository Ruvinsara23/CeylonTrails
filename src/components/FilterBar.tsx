'use client';

import { motion } from 'framer-motion';

interface FilterBarProps {
  activeType: string;
  onTypeChange: (type: string) => void;
  activeTier: string;
  onTierChange: (tier: string) => void;
}

const types = [
  { 
    value: 'all', 
    label: 'All Tours',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    value: 'wildlife', 
    label: 'Wildlife',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.923 11a5.001 5.001 0 00-6.108 3.931A12.001 12.001 0 014.28 16.63A1.5 1.5 0 012 15.5v-8a1.5 1.5 0 012.355-1.233A9.99 9.99 0 0010 8.013V4.5a1.5 1.5 0 012.63-1.002l1.65 1.86a2.005 2.005 0 001.077.625l1.045.19c1.076.196 2.083.567 3.003 1.096A1.5 1.5 0 0122 8.5v8a1.5 1.5 0 01-1.5 1.5h-5.013A12.003 12.003 0 0113 15.015v-4.015z" />
      </svg>
    )
  },
  { 
    value: 'cultural', 
    label: 'Cultural',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    value: 'adventure', 
    label: 'Adventure',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
      </svg>
    )
  },
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
            className={`relative px-5 py-2.5 rounded-xl text-sm font-heading font-medium transition-colors duration-300 flex items-center gap-2 ${
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
            <span className="relative z-10 flex items-center gap-2">
              {type.icon} {type.label}
            </span>
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
