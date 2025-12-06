import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Daughter of Client",
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-1-avatar'),
    text: "Hoca-africa has been a blessing for our family. The caregiver they provided for my mother is so kind and professional. I finally have peace of mind knowing she's in good hands.",
  },
  {
    name: "Michael B.",
    role: "Client",
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-2-avatar'),
    text: "The team is wonderful. They helped me recover after my surgery, providing excellent nursing care and great companionship. I couldn't have done it without them.",
  },
  {
    name: "The Williams Family",
    role: "Family of Client",
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-3-avatar'),
    text: "Finding trustworthy care was our biggest worry. Hoca-africa's team was thoroughly vetted and incredibly supportive. They treated our father with the utmost respect and dignity.",
  },
];

const StarRating = ({ rating = 5 }) => (
  <div className="flex gap-1 text-yellow-400">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-current" />
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Families Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stories from those who have experienced our care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </CardContent>
              <CardHeader>
                <div className="flex items-center gap-4">
                  {testimonial.avatar && (
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar.imageUrl}
                        alt={testimonial.name}
                        data-ai-hint={testimonial.avatar.imageHint}
                      />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="pt-2">
                  <StarRating />
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
