import HeroSection from '@/components/HeroSection';
import DestinationsGrid from '@/components/DestinationsGrid';
import PromoBanner from '@/components/PromoBanner';
import AboutGuide from '@/components/AboutGuide';
import EcoPledge from '@/components/EcoPledge';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import InstagramFeed from '@/components/InstagramFeed';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DestinationsGrid />
      <PromoBanner />
      <AboutGuide />
      <Testimonials />
      <EcoPledge />
      <FaqSection />
      <InstagramFeed />
    </main>
  );
}
