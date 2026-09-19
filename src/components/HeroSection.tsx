'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Users, Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-white lg:pt-0 lg:pb-0">
      <div className="min-h-[100svh] lg:min-h-0 lg:h-[85vh] w-full relative flex flex-col justify-center pb-24 lg:pb-0">
        {/* Background Image Container - Massive */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_banner_1789731915028.png"
            alt="Breathtaking view of Sri Lanka Coastline"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Subtle gradient so text is readable if it overlaps */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-forest-950/30 lg:bg-gradient-to-r lg:from-forest-950/60 lg:via-forest-950/20 lg:to-transparent" />
        </div>

        {/* Hero Text Content (Left aligned like Roamora) */}
        <div className="relative z-10 container-wide px-6 w-full mt-auto lg:mt-0 mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="flex items-center gap-2 text-gold-400 font-heading font-medium uppercase tracking-widest text-xs md:text-sm mb-4 lg:mb-6">
              It&apos;s time to <ArrowRight className="w-4 h-4" />
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight mb-6 lg:mb-8">
              Explore <br />
              <span className="font-light text-pearl-100">the Soul of Ceylon</span>
            </h1>
            <p className="text-pearl-100 text-base md:text-xl font-light max-w-xl mb-8 lg:mb-10 leading-relaxed">
              Discover breathtaking destinations, unforgettable experiences, and memories that last a lifetime.
            </p>
            
            <Link
              href="/tours"
              className="inline-flex items-center gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-forest-950 text-white font-heading font-semibold rounded-full hover:bg-gold-500 hover:text-forest-950 transition-all duration-300 shadow-lg"
            >
              Explore Now
              <div className="bg-white text-forest-950 rounded-full p-1 lg:p-2">
                <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Booking/Search Bar */}
      <div className="relative z-20 container-wide px-4 lg:px-6 -mt-12 lg:-mt-16 mb-16 lg:mb-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-3xl lg:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2 lg:p-4 flex flex-col lg:flex-row items-center justify-between border border-pearl-200 gap-2 lg:gap-0"
        >
          <div className="w-full lg:flex-1 flex items-center gap-4 px-4 py-2 lg:py-0 lg:px-6 lg:border-r border-pearl-200">
            <MapPin className="text-forest-400 w-5 h-5 lg:w-6 lg:h-6" />
            <div className="flex-1">
              <p className="font-heading font-bold text-forest-950 text-sm">Where to?</p>
              <p className="text-forest-400 text-xs font-light">Search destinations</p>
            </div>
          </div>
          
          <div className="w-full lg:flex-1 hidden md:flex items-center gap-4 px-4 py-2 lg:py-0 lg:px-6 lg:border-r border-pearl-200">
            <Calendar className="text-forest-400 w-5 h-5 lg:w-6 lg:h-6" />
            <div className="flex-1">
              <p className="font-heading font-bold text-forest-950 text-sm">Check in</p>
              <p className="text-forest-400 text-xs font-light">Add dates</p>
            </div>
          </div>

          <div className="w-full lg:flex-1 hidden md:flex items-center gap-4 px-4 py-2 lg:py-0 lg:px-6 lg:border-r border-pearl-200">
            <Calendar className="text-forest-400 w-5 h-5 lg:w-6 lg:h-6" />
            <div className="flex-1">
              <p className="font-heading font-bold text-forest-950 text-sm">Check out</p>
              <p className="text-forest-400 text-xs font-light">Add dates</p>
            </div>
          </div>

          <div className="w-full lg:flex-1 flex items-center gap-4 px-4 py-2 lg:py-0 lg:px-6">
            <Users className="text-forest-400 w-5 h-5 lg:w-6 lg:h-6" />
            <div className="flex-1">
              <p className="font-heading font-bold text-forest-950 text-sm">Travelers</p>
              <p className="text-forest-400 text-xs font-light">Add guests</p>
            </div>
          </div>

          <Link href="/book" className="w-full lg:w-auto bg-forest-950 text-white px-6 py-4 lg:px-8 lg:py-4 rounded-2xl lg:rounded-xl font-heading font-semibold flex justify-center lg:justify-start items-center gap-2 hover:bg-gold-500 hover:text-forest-950 transition-colors mt-2 lg:mt-0">
            Search <Search className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Trust Badges below floating bar */}
      <div className="container-wide px-6 mt-16 mb-16 hidden lg:grid grid-cols-4 gap-8">
        {[
          { title: "Handpicked Stays", desc: "Stay at the finest places to relax." },
          { title: "Expert Guides", desc: "Local experts to guide your journey." },
          { title: "Best Price Guarantee", desc: "We match the best prices for you." },
          { title: "24/7 Support", desc: "We're here for you anytime, anywhere." }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full border border-forest-200 flex items-center justify-center text-forest-950 flex-shrink-0">
              <span className="font-bold font-heading text-lg">{i + 1}</span>
            </div>
            <div>
              <h4 className="font-heading font-bold text-forest-950 mb-1">{item.title}</h4>
              <p className="text-sm text-forest-500 font-light">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
