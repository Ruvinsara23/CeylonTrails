'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FilterBar from '../../components/FilterBar';
import TourCard from '../../components/TourCard';
import ScrollReveal from '../../components/ScrollReveal';
import { tourPackages } from '../../../data/mock';

export default function ToursPage() {
  const [activeType, setActiveType] = useState('all');
  const [activeTier, setActiveTier] = useState('all');

  const filteredTours = useMemo(() => {
    return tourPackages.filter((tour) => {
      const matchType = activeType === 'all' || tour.type === activeType;
      const matchTier = activeTier === 'all' || tour.tier === activeTier;
      return matchType && matchTier;
    });
  }, [activeType, activeTier]);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/ella_tea_1789732031029.png"
          alt="Sri Lankan tea plantations at golden hour"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 to-forest-950/90" />
        <div className="relative z-10 text-center px-4 mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-5xl md:text-6xl text-pearl-50 mb-4"
          >
            Curated Journeys
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-pearl-200/90 text-lg max-w-2xl mx-auto font-light"
          >
            Choose from our carefully crafted experiences, from cultural deep-dives to breathtaking wildlife safaris.
          </motion.p>
        </div>
      </section>

      {/* Filters & Cards */}
      <section className="section-padding bg-pearl-100">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <FilterBar
              activeType={activeType}
              onTypeChange={setActiveType}
              activeTier={activeTier}
              onTierChange={setActiveTier}
            />
          </ScrollReveal>

          {/* Results Count */}
          <p className="text-forest-700 font-semibold tracking-wider uppercase text-sm mb-8 mt-10">
            Showing {filteredTours.length} journey{filteredTours.length !== 1 ? 's' : ''}
          </p>

          {/* Tour Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} pkg={tour} />
            ))}
          </motion.div>

          {filteredTours.length === 0 && (
            <div className="text-center py-24">
              <p className="text-forest-400 text-lg font-light">No journeys match your refined selection.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
