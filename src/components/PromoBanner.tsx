'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Plane } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function PromoBanner() {
  return (
    <section className="bg-white pb-24">
      <div className="container-wide px-6">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center min-h-[300px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/ella_tea_1789732031029.png"
                alt="Promo Banner"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-forest-950/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-10 md:p-16 flex flex-col items-start w-full">
              <span className="text-gold-400 font-heading font-medium tracking-[0.1em] text-sm mb-4">
                Limited Time Offer
              </span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-2 flex flex-wrap items-center gap-2 md:gap-4">
                Get up to <span className="text-gold-400 text-5xl md:text-7xl">30%</span> OFF
              </h2>
              <p className="text-pearl-100 text-lg md:text-xl font-light mb-8">
                on your next curated Sri Lankan adventure
              </p>

              <Link
                href="/book"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-forest-950 rounded-full font-heading font-bold hover:bg-gold-500 transition-colors shadow-lg"
              >
                Explore Deals <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Plane className="absolute top-10 right-1/3 text-white/20 w-24 h-24 -rotate-45" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
