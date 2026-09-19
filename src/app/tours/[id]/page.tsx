'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPinIcon as MapPin, ClockIcon as Clock, CheckCircleIcon as Check, StarIcon as Star, ArrowRightIcon as ArrowRight, BoltIcon as Activity, CameraIcon as Camera, SparklesIcon as Leaf } from '@heroicons/react/24/solid';
import { tourPackages } from '../../../../data/mock';

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const tour = tourPackages.find((pkg) => pkg.id === params.id);

  if (!tour) {
    notFound();
  }

  return (
    <main className="bg-pearl-50 pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 container-wide">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gold-500 text-forest-950 px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider">
                {tour.tier}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-semibold capitalize flex items-center gap-1.5">
                <MapPin className="w-3 h-3" /> {tour.type}
              </span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-4">
              {tour.title}
            </h1>
            <p className="text-pearl-200 text-xl md:text-2xl font-light">
              {tour.subtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="container-wide px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content (Left, 2 columns wide) */}
        <div className="lg:col-span-2 space-y-16">
          {/* Overview */}
          <section>
            <h2 className="font-heading font-bold text-3xl text-forest-950 mb-6">Overview</h2>
            <p className="text-forest-600 text-lg leading-relaxed font-light">
              {tour.description}
            </p>
          </section>

          {/* Highlights */}
          <section>
            <h2 className="font-heading font-bold text-3xl text-forest-950 mb-6">Tour Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tour.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border border-pearl-200">
                  <div className="bg-pearl-50 rounded-full p-2 mt-0.5 text-gold-500">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-forest-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Day by Day Itinerary */}
          {tour.itinerary && (
            <section>
              <h2 className="font-heading font-bold text-3xl text-forest-950 mb-8">Day-by-Day Itinerary</h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-pearl-200 before:to-transparent">
                  {tour.itinerary?.map((day, idx) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      key={day.day} 
                      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-pearl-100 text-forest-950 font-heading font-bold shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-colors group-hover:bg-gold-400 group-hover:text-white">
                        {day.day}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-pearl-200 shadow-sm transition-shadow hover:shadow-md">
                        <h4 className="font-heading font-bold text-forest-950 mb-2">{day.title}</h4>
                        <p className="text-forest-600 font-light text-sm leading-relaxed">{day.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
            </section>
          )}
        </div>

        {/* Sidebar (Right, 1 column wide) */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-pearl-200 p-8">
            <div className="flex items-baseline gap-2 mb-6 border-b border-pearl-100 pb-6">
              <span className="text-sm font-medium text-forest-400 uppercase tracking-wide">From</span>
              <span className="font-heading font-bold text-4xl text-forest-950">${tour.price}</span>
              <span className="text-sm text-forest-500">/ person</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-forest-700">
                <Clock className="w-5 h-5 text-gold-500" />
                <span className="font-medium">{tour.duration}</span>
              </div>
              <div className="flex items-center gap-4 text-forest-700">
                <Activity className="w-5 h-5 text-gold-500" />
                <span className="font-medium capitalize">{tour.type} Difficulty</span>
              </div>
              <div className="flex items-center gap-4 text-forest-700">
                <Star className="w-5 h-5 text-gold-500" />
                <span className="font-medium">4.9/5 (120 Reviews)</span>
              </div>
            </div>

            <h4 className="font-heading font-bold text-forest-950 mb-4">What's Included</h4>
            <ul className="space-y-3 mb-8">
              {tour.included.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-forest-600 font-light">
                  <Check className="w-4 h-4 text-gold-500" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={`/book?package=${tour.id}`}
              className="w-full flex items-center justify-center gap-2 bg-forest-950 text-white py-4 rounded-2xl font-heading font-bold hover:bg-gold-500 hover:text-forest-950 transition-colors shadow-lg"
            >
              Book This Tour <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-center text-xs text-forest-400 mt-4">No payment required to reserve.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
