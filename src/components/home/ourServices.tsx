"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/linkbuton";
import { ArrowRight } from "lucide-react";
import PolicyIcon from "../../assets/icons/services/policy-standards.svg";
import TrainingIcon from "../../assets/icons/services/training-certification.svg";
import GovernmentIcon from "../../assets/icons/services/government-consultancy.svg";
import MonitorIcon from "../../assets/icons/services/monitoring-evaluation.svg";

const services = [
  {
    title: "Elevating Care Standards",
    description:
      "We set high-quality, culturally sensitive care standards tailored to Africa’s diverse needs. Our guidelines ensure safe, effective, and respectful home care services for elders across urban and rural settings.",
    image: PolicyIcon,
  },
  {
    title: "Strengthening the Ecosystem",
    description:
      "We strengthen care across Africa by connecting providers, governments, NGOs, and partners to expand reach, build capacity, and drive collaborative impact.",
    image: GovernmentIcon,
  },
  {
    title: "Enabling Access & Innovation",
    description:
      "We break down financial, geographic, and systemic barriers while using technology to improve training, operations, and patient outcomes..",
    image: TrainingIcon,
  },
  {
    title: "Advocating for Systemic Change",
    description:
      "We advocate for national and regional policies that formally recognize and regulate professional home care.",
    image: MonitorIcon,
  },
];

const OurServicesPreview = () => {
  return (
    <section
      className="py-16 sm:py-24 bg-background text-[#030229]" style={{ paddingTop: '10rem' }}
      id="services"
    >
      <div className="container mx-auto">
        <div data-aos="fade-up" className="text-center mb-12">
          <div className="mx-auto w-fit ">
            <p className="text-base font-normal font-headline bg-[#8B0000] bg-opacity-5 px-10 py-2 rounded-[2rem] ">
              OUR SERVICES
            </p>
          </div>
          <p className="mt-6 text-3xl max-w-3xl mx-auto font-headline capitalize">
            Building a sustainable and high-quality home care ecosystem across
            the continent.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <Card
              key={service.title}
              className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-background"
            >
              <CardHeader>
                <div className="p-3  rounded-full bg-[#8B000010] h-[4rem] w-[4rem] mb-6">
                  <Image
                    src={service.image}
                    alt="Policy-Standards"
                    width={64}
                    height={64}
                  />
                </div>
                <CardTitle className="font-headline !leading-normal">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="cta-button">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default OurServicesPreview;
