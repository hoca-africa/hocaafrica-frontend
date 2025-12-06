import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartHandshake, Users, Stethoscope, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "Compassionate Care",
    description: "Our caregivers are not only skilled professionals but also kind and empathetic individuals who genuinely care.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Personalized Plans",
    description: "We create customized care plans tailored to the unique needs, preferences, and goals of each client.",
  },
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: "Professional Staff",
    description: "Our team consists of highly trained, certified, and experienced caregivers and nurses.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Trusted & Vetted",
    description: "All our caregivers undergo rigorous background checks and continuous training for your peace of mind.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Hoca-africa?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are committed to providing the highest quality of care, ensuring the well-being and happiness of your loved ones.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-none bg-transparent">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
