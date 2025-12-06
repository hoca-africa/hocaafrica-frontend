import LandingPage from '@/components/home/landingpage';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import OurServicesPreview from '@/components/home/ourServices';
import FoundersStory  from '@/components/home/founders-story';
import { Testimonials } from '@/components/home/testimonials';
import PartnersCarousel from '@/components/home/partners-carousel';

export default function Home() {
  return (
    <div className="flex flex-col">
      <LandingPage />
      <OurServicesPreview />
      <PartnersCarousel />
      <WhyChooseUs />
      <FoundersStory />
      <Testimonials />
    </div>
  );
}
