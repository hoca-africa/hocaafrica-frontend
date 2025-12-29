import Image from "next/image";
import TrainigImg from "../../../assets/images/tranings/trainingimga1.jpeg";
import TrainigImga from "../../../assets/images/tranings/trainingimg2.jpeg";
import { PiCertificateThin } from "react-icons/pi";
import "../../../components/home/landingpage/landingpage.css";
import PageHero from "@/components/PageHero";

const TrainingPage = () => {
  const programsAr = [
    {
      // image: ,
      title: "Home Health Aide (HHA) Certificate",
      descr: "Core practical caregiving and personal-care competencies.",
    },
    {
      // image: ,
      title: "Certificate in Elder Care Coordination",
      descr: "Advanced skills in care planning and coordination.",
    },
    {
      // image: ,
      title: "Caregiver Competency Framework",
      descr:
        "Benchmarks and performance standards for caregivers and institutions.",
    },
    {
      // image: ,
      title: "Train-the-Trainer Program",
      descr: "Prepares instructors and supervisors to teach HOCA-A curricula.",
    },
    {
      // image: ,
      title: "Continuing Professional Development (CPD)",
      descr:
        "Short refresher courses in dementia, palliative care, infection control, and tele-health",
    },
  ];
  return (
    <div className="bg-background text-[#030229">
      <PageHero
        title="HOCA-A Services"
        currentPage="Hocaa Services"
      // backgroundImage={ForCaregiversImg}
      />
      <div className="container py-8">
        <div className="mx-auto w-fit py-10 ">
          <p className="text-base font-normal font-headline bg-[#8B0000] bg-opacity-5 px-10 py-2 rounded-[2rem] ">
            TRAINING & CERTIFICATION
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-3">
          <div className="flex items-center">
            <h1 className="text:2xl md:text-4xl font-headline !leading-[3.5rem] font-medium">
              We deliver competency-based training programs that equip
              professional caregivers to provide high-quality, dignified, and
              culturally responsive home care.
            </h1>
          </div>
          <div className="relative w-full h-[350px] md:h-[450px] lg:h-[750px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl hover:shadow-[0_20px_60px_rgba(139,0,0,0.3)] transition-all duration-500 group bg-gradient-to-br from-gray-50 to-gray-100">
            <Image
              src={TrainigImg}
              alt="Training"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
          <div className="relative w-full h-[350px] md:h-[450px] lg:h-[750px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl hover:shadow-[0_20px_60px_rgba(139,0,0,0.3)] transition-all duration-500 group bg-gradient-to-br from-gray-50 to-gray-100">
            <Image
              src={TrainigImga}
              alt="Training"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="flex items-center">
            <h1 className="text:2xl md:text-4xl font-headline !leading-[3.5rem] font-medium">
              Our programs blend practical skills, theoretical knowledge, and
              community engagement, producing a workforce ready to meet the
              continent’s growing elder-care needs.
            </h1>
          </div>
        </div>
        <div className="mb-20">
          <div className="mt-40 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-normal font-headline capitalize">
              Programs We Offer
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 justify-evenly mb-3">
            {programsAr.map((data, index) => (
              <div key={index} className=" max-w-[25rem] p-6">
                <div className="flex gap-3">
                  <div>
                    <PiCertificateThin size={30} color="#8B0000" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-[#030229] font-semibold">
                      {data.title}
                    </h3>
                    <p className="mt-2 text-[#030229] text-lg opacity-80">
                      {data.descr}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="float-right">
            <button className="cta-button">
              <span>Apply Now</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div></div>
  );
};
export default TrainingPage;
