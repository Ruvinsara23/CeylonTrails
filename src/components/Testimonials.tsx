'use client';

import Image from 'next/image';
import { Star, ShieldCheck, Leaf, Calendar, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { testimonials, trustBadges } from '../../data/mock';

const IconMap: Record<string, any> = {
  'shield-check': ShieldCheck,
  'leaf': Leaf,
  'star': Star,
  'calendar': Calendar,
};

export default function Testimonials() {
  return (
    <section className="section-padding bg-white border-t border-pearl-100">
      <div className="container-wide px-6">
        
        {/* Trust Badges */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {trustBadges.map((badge, i) => {
              const Icon = IconMap[badge.icon];
              return (
                <div key={i} className="flex flex-col items-center justify-center text-center gap-4">
                  <div className="bg-pearl-50 border border-pearl-200 p-5 rounded-2xl text-gold-500 shadow-sm">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="font-heading font-semibold text-sm text-forest-950 uppercase tracking-wide">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold-500 font-heading tracking-[0.2em] uppercase text-sm mb-4 block">
                Traveler Stories
              </span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-forest-950 mb-6">
                Voices of Our Guests
              </h2>
            </div>
          </ScrollReveal>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <ScrollReveal key={testimonial.id} delay={idx * 0.1} className={idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''}>
                <div className={`bg-pearl-50 p-8 rounded-3xl border border-pearl-200 shadow-sm flex flex-col h-full ${idx === 0 ? 'bg-forest-950 text-white' : ''}`}>
                  <Quote className={`w-8 h-8 mb-6 ${idx === 0 ? 'text-gold-500' : 'text-pearl-300'}`} />
                  <p className={`text-lg font-light leading-relaxed flex-grow mb-8 ${idx === 0 ? 'text-white md:text-2xl' : 'text-forest-700'}`}>
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-pearl-200">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className={`font-heading font-bold text-sm ${idx === 0 ? 'text-white' : 'text-forest-950'}`}>
                        {testimonial.name}
                      </h4>
                      <p className={`text-xs ${idx === 0 ? 'text-pearl-200' : 'text-forest-500'}`}>
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            
            {/* Extra Bento Card for CTA */}
            <ScrollReveal delay={0.2} className="md:col-span-2 lg:col-span-2">
              <div className="bg-gold-400 p-8 rounded-3xl shadow-sm flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                <h3 className="font-heading font-bold text-3xl text-forest-950 mb-4">Ready to Write Your Story?</h3>
                <p className="text-forest-950/80 mb-8 font-light">Join thousands of travelers who have experienced the magic of Sri Lanka.</p>
                <button className="bg-forest-950 text-white px-8 py-3 rounded-full font-heading font-bold hover:bg-white hover:text-forest-950 transition-colors shadow-lg">
                  Start Planning
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
