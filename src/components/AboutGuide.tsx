'use client';

import Image from 'next/image';
import { LanguageIcon as Languages, ShieldCheckIcon as ShieldCheck, CameraIcon as Camera, MapIcon as Map } from '@heroicons/react/24/solid';
import ScrollReveal from './ScrollReveal';

export default function AboutGuide() {
  const credentials = [
    { icon: Languages, text: 'Fluent in English, Sinhala & Tamil' },
    { icon: ShieldCheck, text: 'Certified Sustainable Tourism' },
    { icon: Camera, text: 'Professional Photography Included' },
    { icon: Map, text: 'Bespoke Curated Itineraries' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <ScrollReveal>
            <span className="text-gold-500 font-heading tracking-[0.2em] uppercase text-sm mb-4 block">
              Meet Your Curator
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-forest-950 mb-6 leading-tight">
              Beyond the Guidebook. <br />
              <span className="text-forest-700 font-light italic">Into the Heart of Ceylon.</span>
            </h2>
            <div className="space-y-6 text-forest-500 font-light leading-relaxed text-lg mb-10">
              <p>
                Hello, I am Amila. Born amidst the tea-draped hills of Nuwara Eliya and raised by the golden coasts of the South, my life has been dedicated to uncovering the hidden luxuries and untold stories of my island home.
              </p>
              <p>
                I don&apos;t just offer tours; I curate deeply personal experiences. Whether it is securing exclusive access to ancient temples at dawn, arranging private dinners under the stars in Yala, or introducing you to the artisans who keep our heritage alive—every detail is meticulously crafted for the discerning traveler.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {credentials.map((cred, i) => (
                <div key={i} className="flex items-center gap-4 bg-pearl-50 p-4 rounded-2xl shadow-sm border border-pearl-200">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <cred.icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <span className="font-heading font-semibold text-sm text-forest-950">{cred.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal direction="right">
            <div className="relative h-[400px] md:h-[700px] w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-pearl-100">
              <Image
                src="/images/sigiriya_rock_1789731969018.png"
                alt="Amila - Premium Tour Curator"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
