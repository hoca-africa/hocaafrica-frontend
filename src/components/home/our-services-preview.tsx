import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Personal Care",
    description: "Assistance with daily activities like bathing, dressing, and grooming to ensure comfort and dignity.",
    image: PlaceHolderImages.find(img => img.id === 'service-personal-care'),
  },
  {
    title: "Companionship",
    description: "Providing social interaction, emotional support, and engagement in hobbies and activities.",
    image: PlaceHolderImages.find(img => img.id === 'service-companionship'),
  },
  {
    title: "Skilled Nursing",
    description: "Professional medical care at home from licensed nurses for more complex health needs.",
    image: PlaceHolderImages.find(img => img.id === 'service-skilled-nursing'),
  },
];

export function OurServicesPreview() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of personalized care services to meet the unique needs of each individual.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              {service.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image.imageUrl}
                    alt={service.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={service.image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
