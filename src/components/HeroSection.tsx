'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Users, Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-32 pb-24 lg:pt-0 lg:pb-0">
      <div className="lg:h-[85vh] w-full relative flex flex-col justify-center">
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
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/60 via-forest-950/20 to-transparent" />
        </div>

        {/* Hero Text Content (Left aligned like Roamora) */}
        <div className="relative z-10 container-wide px-6 w-full mt-24 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="flex items-center gap-2 text-gold-400 font-heading font-medium uppercase tracking-widest text-sm mb-6">
              It&apos;s time to <ArrowRight className="w-4 h-4" />
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight mb-8">
              Explore <br />
              <span className="font-light text-pearl-100">the Soul of Ceylon</span>
            </h1>
            <p className="text-pearl-100 text-lg md:text-xl font-light max-w-xl mb-10 leading-relaxed">
              Discover breathtaking destinations, unforgettable experiences, and memories that last a lifetime.
            </p>
            
            <Link
              href="/tours"
              className="inline-flex items-center gap-3 px-8 py-4 bg-forest-950 text-white font-heading font-semibold rounded-full hover:bg-gold-500 hover:text-forest-950 transition-all duration-300 shadow-lg"
            >
              Explore Now
              <div className="bg-white text-forest-950 rounded-full p-1">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Booking/Search Bar */}
      <div className="relative z-20 container-wide px-6 -mt-16 hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-4 flex items-center justify-between border border-pearl-200"
        >
          <div className="flex-1 flex items-center gap-4 px-6 border-r border-pearl-200">
            <MapPin className="text-forest-400 w-6 h-6" />
            <div>
              <p className="font-heading font-bold text-forest-950 text-sm">Where to?</p>
              <p className="text-forest-400 text-xs font-light">Search destinations</p>
            </div>
          </div>
          
          <div className="flex-1 flex items-center gap-4 px-6 border-r border-pearl-200">
            <Calendar className="text-forest-400 w-6 h-6" />
            <div>
              <p className="font-heading font-bold text-forest-950 text-sm">Check in</p>
              <p className="text-forest-400 text-xs font-light">Add dates</p>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-4 px-6 border-r border-pearl-200">
            <Calendar className="text-forest-400 w-6 h-6" />
            <div>
              <p className="font-heading font-bold text-forest-950 text-sm">Check out</p>
              <p className="text-forest-400 text-xs font-light">Add dates</p>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-4 px-6">
            <Users className="text-forest-400 w-6 h-6" />
            <div>
              <p className="font-heading font-bold text-forest-950 text-sm">Travelers</p>
              <p className="text-forest-400 text-xs font-light">Add guests</p>
            </div>
          </div>

          <Link href="/book" className="bg-forest-950 text-white px-8 py-4 rounded-xl font-heading font-semibold flex items-center gap-2 hover:bg-gold-500 hover:text-forest-950 transition-colors">
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
