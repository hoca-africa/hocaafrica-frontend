import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/linkbuton";
import { ArrowRight } from "lucide-react";
import PolicyIcon from '../../assets/icons/services/policy-standards.svg'
import TrainingIcon from '../../assets/icons/services/training-certification.svg'
import GovernmentIcon from '../../assets/icons/services/government-consultancy.svg'
import HospitalIcon from '../../assets/icons/services/transitional-care.svg'
import ResearcIcon from '../../assets/icons/services/research-digital.svg'
import MonitorIcon from '../../assets/icons/services/monitoring-evaluation.svg'

const services = [
  {
    title: "Policy & Standards Development",
    description: "HOCA-A formulates national and institutional frameworks for home care, elderly care, and rehabilitation services.We collaborate with governments and institutions to design home-care policies, standards, and accreditation frameworks tailored to African realities.",
    image: PolicyIcon,
  },
  {
    title: "Training & Certification Systems",
    description: "We develop and implement competency-based training curricula for caregivers, trainers, and training institutions.Our programs are aligned with national qualification frameworks (DIT-UVQF 5772) — strengthening both institutions and individual caregivers to deliver safe, skilled,and dignified care.",
    image: TrainingIcon,
  },
  {
    title: "Government & Institutional Consultancy",
    description: "HOCA-A provides technical assistance to Ministries, universities, and NGOs in the design and quality improvement of geriatric, palliative, and rehabilitation programs. Our experts guide partners in establishing effective systems, policies, and training pathways for sustainable service delivery.",
    image: GovernmentIcon,
  },
  {
    title: "Post-Hospital & Transitional Care Models",
    description: "We pioneer community-based rehabilitation and home-care systems that reduce hospital readmissions and improve recovery outcomes.These models bridge the gap between hospital discharge and home recovery — promoting continuity of care, family engagement, and client independence.",
    image: HospitalIcon,
  },
  {
    title: "Research & Digital Health Integration",
    description: "HOCA-A promotes data systems, telehealth, and applied research to strengthen evidence-based decision-making in community eldercare.Through digital tools and innovation, we advance accessibility, monitoring, and coordination of care across urban and rural settings.",
    image: ResearcIcon,
  },
  {
    title: "Monitoring, Evaluation & Accreditation",
    description: "We conduct quality audits and accreditation reviews for care providers and training institutions.Our monitoring and evaluation framework ensures ongoing assessment of quality, safety, and outcomes, helping organizations maintain excellence and compliance with HOCA-A and national standards.",
    image: MonitorIcon,
  },
  {
    title: "Partnerships & Advocacy",
    description: "HOCA-A builds alliances with local, regional, and global organizations to strengthen Africa’s care workforce and policy environment. Through advocacy and multi-sector collaboration, we champion professionalization of the ageing and long-term care sector across the continent.",
    image: MonitorIcon,
  }
];

const OurServicesPreview = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto">
        <div data-aos="fade-up" className="text-center mb-12" >
          <h2 className="text-lg font-semibold font-headline" >OUR SERVICES</h2>
          <p className="mt-4 text-2xl text-muted-foreground max-w-2xl mx-auto">
            From policy to practice HOCA-A unites systems, skills, and standards to
            build Africa’s future of dignified care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-background">
              <div className="p-3 flex mx-[auto] rounded-full bg-[#8B000010] h-[4rem] w-[4rem] mt-4" >
                <Image
                  src={service.image}
                  alt="Policy & Standards"
                  width={64}
                  height={64}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline !leading-normal">
                  {service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base">{service.description}</p>
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
export default OurServicesPreview;
