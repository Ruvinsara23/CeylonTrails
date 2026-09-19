'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const SolidMapPin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

const SolidCalendar = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
  </svg>
);

const SolidUsers = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
  </svg>
);

const SolidArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
  </svg>
);

const SolidSearch = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
  </svg>
);

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
              It&apos;s time to <SolidArrowRight className="w-4 h-4" />
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
                <SolidArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
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
          className="bg-white rounded-3xl lg:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-4 flex flex-col lg:flex-row items-stretch justify-between border border-pearl-200 gap-0"
        >
          <div className="w-full lg:flex-1 flex items-center gap-4 px-2 py-4 lg:py-0 lg:px-6 border-b lg:border-b-0 lg:border-r border-pearl-100">
            <SolidMapPin className="text-forest-400 w-5 h-5 lg:w-6 lg:h-6 shrink-0" />
            <div className="flex-1">
              <p className="font-heading font-bold text-forest-950 text-sm">Where to?</p>
              <p className="text-forest-400 text-xs font-light">Search destinations</p>
            </div>
          </div>
          
          <div className="w-full lg:flex-1 hidden md:flex items-center gap-4 px-2 py-4 lg:py-0 lg:px-6 border-b lg:border-b-0 lg:border-r border-pearl-100">
            <SolidCalendar className="text-forest-400 w-5 h-5 lg:w-6 lg:h-6 shrink-0" />
            <div className="flex-1">
              <p className="font-heading font-bold text-forest-950 text-sm">Check in</p>
              <p className="text-forest-400 text-xs font-light">Add dates</p>
            </div>
          </div>

          <div className="w-full lg:flex-1 hidden md:flex items-center gap-4 px-2 py-4 lg:py-0 lg:px-6 border-b lg:border-b-0 lg:border-r border-pearl-100">
            <SolidCalendar className="text-forest-400 w-5 h-5 lg:w-6 lg:h-6 shrink-0" />
            <div className="flex-1">
              <p className="font-heading font-bold text-forest-950 text-sm">Check out</p>
              <p className="text-forest-400 text-xs font-light">Add dates</p>
            </div>
          </div>

          <div className="w-full lg:flex-1 flex items-center gap-4 px-2 py-4 lg:py-0 lg:px-6 mb-4 lg:mb-0">
            <SolidUsers className="text-forest-400 w-5 h-5 lg:w-6 lg:h-6 shrink-0" />
            <div className="flex-1">
              <p className="font-heading font-bold text-forest-950 text-sm">Travelers</p>
              <p className="text-forest-400 text-xs font-light">Add guests</p>
            </div>
          </div>

          <Link href="/book" className="w-full lg:w-auto bg-forest-950 text-white px-6 py-4 lg:px-8 lg:py-4 rounded-2xl lg:rounded-xl font-heading font-semibold flex justify-center items-center gap-2 hover:bg-gold-500 hover:text-forest-950 transition-colors shadow-md">
            Search <SolidSearch className="w-4 h-4 shrink-0" />
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
