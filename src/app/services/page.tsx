import PageHero from "@/components/PageHero";
import Image from "next/image";
import TrainigImg from "../../assets/images/tranings/trainingimga1.jpeg";
import TrainigImga from "../../assets/images/tranings/trainingimg2.jpeg";
import { PiCertificateThin } from "react-icons/pi";
import "../../components/home/landingpage/landingpage.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Policyimg from "../../assets/images/services/policyimg.jpeg";
import Consultancyimg from "../../assets/images/services/consultimg.jpeg";
import Partnshipimg from "../../assets/images/services/partenshipimg.jpeg";
import Researchimg from "../../assets/images/services/researchimg.jpeg";
import TraningImg from "../../assets/images/tranings/trainingimg.jpeg";

const ServicesPage = () => {
  const services = [
    {
      title: "Policy & Standards Development",
      description:
        "HOCA-A formulates national and institutional frameworks for home care, elderly care, and rehabilitation services.We collaborate with governments and institutions to design home-care policies, standards, and accreditation frameworks tailored to African realities.",
      image: Policyimg,
    },
    {
      title: "Training & Certification Systems",
      description:
        "We develop and implement competency-based training curricula for caregivers, trainers, and training institutions.Our programs are aligned with national qualification frameworks (DIT- UVQF 5772) — strengthening both institutions and individual caregivers to deliver safe, skilled, and dignified care.",
      image: TraningImg,
    },
    {
      title: "Government & Institutional Consultancy",
      description:
        "HOCA-A provides technical assistance to Ministries, universities, and NGOs in the design and quality improvement of geriatric, palliative, and rehabilitation programs. Our experts guide partners in establishing effective systems, policies, and training pathways for sustainable service delivery.",
      image: Consultancyimg,
    },
    {
      title: "Post-Hospital & Transitional Care Models",
      description:
        "We pioneer community-based rehabilitation and home-care systems that reduce hospital readmissions and improve recovery outcomes.These models bridge the gap between hospital discharge and home recovery — promoting continuity of care, family engagement, and client independence.",
      image: Policyimg,
    },
    {
      title: "Research & Digital Health Integration",
      description:
        "HOCA-A promotes data systems, telehealth, and applied research to strengthen evidence-based decision-making in community eldercare.Through digital tools and innovation, we advance accessibility, monitoring, and coordination of care across urban and rural settings.",
      image: Researchimg,
    },
    {
      title: "Monitoring, Evaluation & Accreditation",
      description:
        "We conduct quality audits and accreditation reviews for care providers and training institutions. Our monitoring and evaluation framework ensures ongoing assessment of quality, safety, and outcomes, helping organizations maintain excellence and compliance with HOCA-A and national standards.",
      image: Consultancyimg,
    },
    {
      title: "Partnerships & Advocacy",
      description:
        "HOCA-A builds alliances with local, regional, and global organizations to strengthen Africa’s care workforce and policy environment. Through advocacy and multi-sector collaboration, we champion professionalization of the ageing and long-term care sector across the continent.",
      image: Partnshipimg,
    },
  ];

  return (
    <div className="bg-background text-[#030229]">
      <PageHero
        title="HOCA-A Services"
        currentPage="Hocaa Services"
      // backgroundImage={ForCaregiversImg}
      />
      <div className="container py-8">
        <div className="mx-auto w-fit py-10 ">
          <p className="text-base font-normal font-headline bg-[#8B0000] bg-opacity-5 px-10 py-2 rounded-[2rem] ">
            HOCA-A TECHNICAL PILLARS OF EXCELLENCE
          </p>
        </div>
        <p className="my-6 text-4xl font-headline !leading-[3rem]">
          {" "}
          From policy to practice HOCA-A unites systems, skills, and standards
          to build Africa’s future of dignified care.
        </p>
        <p className="my-4 md:my-12 opacity-80 text-2xl">We envision Africa where older persons age gracefully at home, supported by trained
          caregivers, informed families, and compassionate systems of care.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service) => (
            <Card
              key={service.title}
              className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-background border border-border p-3"
            >
              {service.image && (
                <div className="relative h-[22rem] w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServicesPage;
