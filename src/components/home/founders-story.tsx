import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function FoundersStory() {
  const founderImage = PlaceHolderImages.find(img => img.id === 'founder-image');

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            {founderImage && (
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl">
                <Image
                  src={founderImage.imageUrl}
                  alt={founderImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={founderImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Our Founder's Story</h2>
            <Card className="bg-background/80 backdrop-blur">
              <CardContent className="p-8 space-y-4 text-muted-foreground">
                <p>
                  "Hoca-africa was born from a personal experience. When my own grandmother needed home care, I saw firsthand the challenges families face in finding reliable, compassionate, and trustworthy support. It was difficult to find care that truly respected her dignity and independence."
                </p>
                <p>
                  "This journey inspired me to create a home care alliance that I would want for my own family. An organization built on a foundation of empathy, professionalism, and a genuine commitment to improving the lives of those we serve. We are more than just a service; we are a community of care."
                </p>
                <p className="font-semibold text-foreground">- Jane Doe, Founder of Hoca-africa</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
