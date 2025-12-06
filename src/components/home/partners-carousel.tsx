import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Hospital, Stethoscope, Users } from "lucide-react";

const partners = [
  { name: "Global Health Inc.", icon: <Hospital className="h-12 w-12 text-muted-foreground" /> },
  { name: "Wellness Foundation", icon: <Heart className="h-12 w-12 text-muted-foreground" /> },
  { name: "Senior Support Services", icon: <Users className="h-12 w-12 text-muted-foreground" /> },
  { name: "Medical Pro Group", icon: <Stethoscope className="h-12 w-12 text-muted-foreground" /> },
  { name: "Community Care Network", icon: <Hospital className="h-12 w-12 text-muted-foreground" /> },
  { name: "LifeWell Partners", icon: <Heart className="h-12 w-12 text-muted-foreground" /> },
];

export function PartnersCarousel() {
  return (
    <section id="partners" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Valued Partners</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We collaborate with leading organizations to provide comprehensive care.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="bg-background">
                    <CardContent className="flex flex-col items-center justify-center p-6 aspect-square">
                      {partner.icon}
                      <span className="text-sm font-medium text-center mt-4">{partner.name}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
