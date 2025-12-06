import { HeroSection } from '@/components/home/hero-section';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { OurServicesPreview } from '@/components/home/our-services-preview';
import { FoundersStory } from '@/components/home/founders-story';
import { Testimonials } from '@/components/home/testimonials';
import { PartnersCarousel } from '@/components/home/partners-carousel';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <OurServicesPreview />
      <WhyChooseUs />
      <FoundersStory />
      <Testimonials />
      <PartnersCarousel />
    </div>
  );
}
