import Image from 'next/image';
import AboutGuide from '@/components/AboutGuide';
import EcoPledge from '@/components/EcoPledge';

export default function AboutPage() {
  return (
    <main className="bg-white pt-32 pb-16">
      <div className="container-wide px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-gold-500 font-heading tracking-[0.2em] uppercase text-sm mb-4 block">
            Our Story
          </span>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-forest-950 mb-8">
            Redefining Luxury Travel in Sri Lanka
          </h1>
          <p className="text-forest-500 text-lg md:text-xl font-light leading-relaxed">
            We started with a simple belief: that true luxury lies in authenticity. 
            For over a decade, we have been crafting bespoke journeys that connect discerning travelers 
            with the soul of Ceylon, without leaving a footprint behind.
          </p>
        </div>

        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl mb-24">
          <Image
            src="/images/ella_tea_1789732031029.png"
            alt="Sri Lanka landscape"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <AboutGuide />
      <EcoPledge />
    </main>
  );
}
