'use client';

import Image from 'next/image';
import { Leaf, Recycle, Users, Sprout } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const pledgeItems = [
  {
    icon: Leaf,
    title: 'Zero Plastic Journeys',
    desc: 'We provide reusable water bottles and strictly avoid single-use plastics on all our tours.',
  },
  {
    icon: Recycle,
    title: 'Leave No Trace',
    desc: 'Our guides ensure pristine natural environments remain untouched and pristine for future generations.',
  },
  {
    icon: Users,
    title: 'Community First',
    desc: 'We partner directly with local families for homestays and meals, keeping 100% of revenue in the community.',
  },
  {
    icon: Sprout,
    title: 'Wildlife Protection',
    desc: 'Strict ethical guidelines on all safaris. We never disrupt natural behaviors or support captive exploitation.',
  },
];

export default function EcoPledge() {
  return (
    <section className="section-padding bg-pearl-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <span className="text-gold-500 font-heading tracking-[0.2em] uppercase text-sm mb-4 block">
              Our Commitment
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-8 leading-tight text-forest-950">
              Preserving Ceylon&apos;s <br />
              <span className="text-forest-700 font-light italic">Natural Legacy</span>
            </h2>
            <p className="text-forest-500 mb-12 font-light leading-relaxed text-lg">
              Luxury shouldn&apos;t come at the cost of the environment. We believe in sustainable, ethical tourism that enriches both the traveler and the local communities, ensuring Sri Lanka remains breathtaking for generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {pledgeItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <item.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2 text-forest-950">{item.title}</h3>
                    <p className="text-forest-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          
          {/* Image */}
          <ScrollReveal direction="right">
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/yala_safari_1789732000321.png"
                alt="Sustainable travel in Sri Lanka"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
