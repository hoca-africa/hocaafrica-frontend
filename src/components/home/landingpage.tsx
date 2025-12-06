import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import BackgroundImg from '../../assets/images/bgimg.png'

const LandingPage = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section className="relative h-[91vh] w-full">
      {heroImage && (
        <div className="w-full h-full absolute inset-0 -z-10 overflow-hidden">
          <Image
            src={BackgroundImg}
            alt={heroImage.description}
            fill
            priority
            style={{
              objectFit: 'cover'
            }}
            data-ai-hint={heroImage.imageHint}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 container mx-auto flex flex-col items-start justify-center h-full text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold  mb-6 font-headline !leading-normal">
            Transforming Elder  Care Across Africa
          </h1>
          <div className="w-[75%] mb-16 ">
            <p className="text-lg text-slate-200 animate-fade-in-up">
              Building professional, compassionate, and accredited systems of home-based and
              geriatric care — driven by African values and global standards.
            </p></div>
          <div >
            <Button size="lg" asChild className="font-semibold">
              <Link href="/services">
                Explore More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LandingPage;
