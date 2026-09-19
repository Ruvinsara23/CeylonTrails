'use client';

import Image from 'next/image';
import { HeartIcon as Heart, ChatBubbleLeftRightIcon as MessageCircle } from '@heroicons/react/24/solid';
import ScrollReveal from './ScrollReveal';

const feedImages = [
  { src: '/images/hero_banner_1789731915028.png', likes: 1240, comments: 45 },
  { src: '/images/sigiriya_rock_1789731969018.png', likes: 892, comments: 23 },
  { src: '/images/yala_safari_1789732000321.png', likes: 2100, comments: 120 },
  { src: '/images/ella_tea_1789732031029.png', likes: 1530, comments: 84 },
];

export default function InstagramFeed() {
  return (
    <section className="bg-white pt-10 pb-24">
      <div className="container-wide px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <span className="text-gold-500 font-heading tracking-[0.2em] uppercase text-sm mb-4 block">
              Follow Our Journey
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest-950 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              @CeylonTrails
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {feedImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={img.src}
                  alt={`Instagram feed image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-forest-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2 text-white font-heading font-bold">
                    <Heart className="w-5 h-5 fill-white" />
                    <span>{img.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white font-heading font-bold">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>{img.comments}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
