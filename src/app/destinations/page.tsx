import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { destinations } from '../../../data/mock';

export default function DestinationsPage() {
  return (
    <main className="bg-white pt-32 pb-24 min-h-screen">
      <div className="container-wide px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-gold-500 font-heading tracking-[0.2em] uppercase text-sm mb-4 block">
            Where to Go
          </span>
          <h1 className="font-heading font-bold text-5xl text-forest-950 mb-6">
            Explore Destinations
          </h1>
          <p className="text-forest-500 text-lg font-light leading-relaxed">
            From misty highlands to sun-kissed shores, discover the incredibly diverse landscapes of Sri Lanka. 
            Each destination offers a unique window into the island&apos;s soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link href={`/tours?destination=${dest.id}`} key={dest.id} className="group block">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-pearl-200">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3 h-3 text-forest-950" />
                  <span className="text-xs font-semibold text-forest-950">{dest.tags[0]}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">{dest.name}</h3>
                  <p className="text-pearl-200 text-sm font-light line-clamp-2 mb-4">
                    {dest.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold-400 font-medium text-sm group-hover:text-white transition-colors">
                    Explore Tours <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
