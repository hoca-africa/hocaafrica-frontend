import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import MotherImg from '../../assets/images/mother.png'
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FoundersStory = () => {
  const founderImage = PlaceHolderImages.find(
    (img) => img.id === "founder-image"
  );

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center ">
            {founderImage && (
              <div className="border-l-[20px] border-[#FFD700] bg-[#8B0000] relative w-[300px] h-[300px] md:w-[600px] md:h-[500px] rounded-full p-4 overflow-hidden shadow-2xl">
                <Image
                  src={MotherImg}
                  alt={founderImage.description}
                  fill
                  className="object-contain"
                  data-ai-hint={founderImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-lg font-semibold mb-4 font-headline">
              Founder's Story
            </h2>
            <p className=" text-2xl text-muted-foreground max-w-2xl mb-4">
              A Mother’s Story — The Birth of a Movement
            </p>
            <Card className="bg-background/80 backdrop-blur">
              <CardContent className="p-8 space-y-4 text-muted-foreground">
                <p>
                  I was born and raised in the deep rural village of Bugangari, Rukungiri District, Uganda,
                  where my belief in community, compassion, and the African value of caring for our elders was
                  nurtured early as I watched my parents care for my grandparents.
                </p>
                <p> Years later, I trained and worked as a Registered Nurse in Boston, USA, where I have spent
                  over 25 years in geriatric, home health, palliative and hospice care. There, I witnessed the
                  power of structured home-care systems where trained caregivers, ethical standards, and
                  compassion work together to preserve dignity, independence, and quality of life for older
                  adults.
                  Yet every time I looked back home, I saw a painful contrast. In Uganda and across Africa,
                  ageing remains a silent crisis driven not by lack of love, but by lack of systems....</p>
                <Link href="/about" className="text-primary hover:underline mt-3 font-semibold flex items-center justify-center lg:justify-start">
                  Read More  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-semibold text-foreground">
                    Barnabas Nkore
                  </p>
                  <p className="italic text-base font-normal">Founder &amp; President – Home Care Alliance Africa (HOCA-A)</p>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FoundersStory;
