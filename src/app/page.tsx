import { WhyChooseUs } from '@/components/home/why-choose-us';
import OurServicesPreview from '@/components/home/ourServices';
import { Testimonials } from '@/components/home/testimonials';
import PartnersCarousel from '@/components/home/partners-carousel';
import LandingPage from '@/components/home/landingpage/page';
import ProblemPage from '@/components/home/problemPage';

export default function Home() {
  return (
    <div className="flex flex-col">
      <LandingPage />
      <ProblemPage />
      <OurServicesPreview />
      <PartnersCarousel />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
