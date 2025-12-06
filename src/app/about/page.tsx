import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Handshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">About Hoca-africa</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We are a dedicated alliance of caregivers, professionals, and partners committed to delivering exceptional home care across Africa.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card id="who-we-are">
          <CardHeader>
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="font-headline">Who We Are</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Hoca-africa is a passionate team of healthcare professionals, compassionate caregivers, and support staff united by a common goal: to provide dignified, respectful, and high-quality care that enables individuals to thrive in the comfort of their own homes.
            </p>
          </CardContent>
        </Card>

        <Card id="what-we-do">
          <CardHeader>
            <Target className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="font-headline">What We Do</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We offer a comprehensive range of non-medical and skilled nursing services. From personal care and companionship to specialized medical support, we create personalized care plans that adapt to the evolving needs of our clients, ensuring their safety, health, and happiness.
            </p>
          </CardContent>
        </Card>

        <Card id="our-team">
          <CardHeader>
            <Handshake className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="font-headline">Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our strength lies in our people. Each member of the Hoca-africa team is carefully selected, thoroughly vetted, and continuously trained. We are proud to have a diverse team of dedicated professionals who lead with empathy and a commitment to excellence.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
