'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon as ArrowRight, StarIcon as Star, MapPinIcon as MapPin } from '@heroicons/react/24/solid';
import ScrollReveal from './ScrollReveal';
import { destinations } from '../../data/mock';

export default function DestinationsGrid() {
  return (
    <section className="bg-white pt-10 pb-24">
      <div className="container-wide px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <ScrollReveal>
            <span className="text-gold-500 font-heading font-medium tracking-[0.1em] uppercase text-xs mb-2 block">
              Explore The Best
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest-950">
              Popular Destinations
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <Link
              href="/tours"
              className="group flex items-center gap-2 text-forest-500 font-heading text-sm hover:text-forest-950 transition-colors"
            >
              View all destinations
              <div className="border border-forest-200 rounded-full p-1 group-hover:border-forest-950 transition-colors">
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, x: -50 * i, y: 50, rotate: -5 * i }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, type: "spring", bounce: 0.2 }}
            >
              <Link href={`/tours?destination=${dest.id}`} className="block group h-[450px]">
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Bottom Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent opacity-80" />
                  
                  {/* Top Location Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-3 h-3 text-forest-950" />
                    <span className="text-xs font-semibold text-forest-950">{dest.tags[0]}</span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-heading font-bold text-xl text-white mb-1">{dest.name}</h3>
                    <p className="text-pearl-200 text-xs font-light line-clamp-2 mb-3 leading-relaxed">
                      {dest.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-gold-400">
                      <Star className="w-3 h-3 fill-gold-400" />
                      <span className="text-xs font-bold text-white">4.9 <span className="font-light text-pearl-300">(1,230)</span></span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
