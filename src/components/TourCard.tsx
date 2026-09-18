'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, Check, Star, MapPin } from 'lucide-react';
import { TourPackage } from '../../data/mock';

interface TourCardProps {
  pkg: TourPackage;
}

export default function TourCard({ pkg }: TourCardProps) {
  if (!pkg) return null;
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-pearl-200 flex flex-col h-full relative">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Tier Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider shadow-sm ${
            pkg.tier === 'premium' 
              ? 'bg-forest-950 text-gold-400' 
              : 'bg-white text-forest-950'
          }`}>
            {pkg.tier}
          </span>
        </div>
        {/* Type Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <MapPin className="w-3 h-3 text-forest-950" />
          <span className="text-xs font-semibold text-forest-950 capitalize">{pkg.type}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-gold-500">
            <Star className="w-4 h-4 fill-gold-500" />
            <span className="text-sm font-bold text-forest-950">4.9</span>
          </div>
          <span className="flex items-center gap-1.5 text-forest-500 text-xs font-medium">
            <Clock className="w-4 h-4" /> {pkg.duration}
          </span>
        </div>

        <h3 className="font-heading font-bold text-2xl text-forest-950 mb-2">{pkg.title}</h3>
        <p className="text-forest-500 text-sm font-light leading-relaxed mb-6 flex-grow">
          {pkg.description}
        </p>

        <div className="space-y-3 mb-8">
          {pkg.highlights.slice(0, 3).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="bg-forest-50 rounded-full p-1 mt-0.5">
                <Check className="w-3 h-3 text-forest-600 flex-shrink-0" />
              </div>
              <span className="text-sm text-forest-700 font-light">{highlight}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-pearl-100">
          <div>
            <span className="text-xs text-forest-400 font-medium block mb-0.5">Starting from</span>
            <span className="font-heading font-bold text-2xl text-forest-950">${pkg.price}<span className="text-sm font-light text-forest-400">/day</span></span>
          </div>
          <Link
            href={`/tours/${pkg.id}`}
            className="bg-forest-950 text-white px-6 py-3 rounded-xl font-heading font-semibold hover:bg-gold-500 hover:text-forest-950 transition-colors text-sm text-center"
          >
            View Itinerary
          </Link>
        </div>
      </div>
    </div>
  );
}
