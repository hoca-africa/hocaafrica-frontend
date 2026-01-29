"use client";
import Image from "next/image";
import { Users, Clock, Building, Rocket } from "lucide-react";
import ForElders from "../../assets/images/forelders.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import CeoImg from "../../assets/images/team/ceo.png";
import DirectorImg from "../../assets/images/team/director.png";
import FinanceImg from "../../assets/images/team/finance.png";
import Board1Img from "../../assets/images/team/board1.png";
import Board2Img from "../../assets/images/team/board2.png";
import ConsultaImg from "../../assets/images/team/consultant.png";
import AsifImg from "../../assets/images/team/Asif-Merchant-MD.jpg";
import VivianImg from "../../assets/images/team/Vivian.png";
import PageHero from "@/components/PageHero";
import FoundersStory from "@/components/home/founders-story";

const teamMembers = [
  {
    name: "Dr. David M. Wahl, MD, MPH",
    role: "Board Member",
    image: Board1Img,
    description:
      "Dr. David M. Wahl is an American Family Physician and Geriatric Care Advocate dedicated to accessible, patient-centered elder care. Trained at George Washington University and Boston University, he began in community family practice before pioneering house call services for frail elders and extending care to nursing homes and surrounding communities. With an MPH, he has led HIV outreach, diabetes education, and cultural health initiatives, while mentoring medical students and providing CPR/First Aid training. Dr. Wahl is recognized for his compassion, innovation, and commitment to honoring the dignity of older adults across diverse healthcare settings.",
  },
  {
    name: "Patricia M. Anastasia, RN",
    role: "Board Member",
    image: Board2Img,
    description:
      "Patricia M. Anastasia, RN, is a versatile healthcare and spiritual professional with over 30 years of experience as a registered nurse, paramedic, Reiki Master, ordained minister, and massage therapist. She specializes in elder care, wound and continence management, and end-of-life support, integrating clinical expertise with holistic healing. Patricia is the founder of Anastasia’s Health Happenings, where she trains healthcare providers and the public in First Aid, CPR, wound care, and caregiver self-care. Dedicated to both people and animals, she champions dignity, wellness, and empowerment through her unique, integrative approach to caregiving and patient support.",
  },
  {
    name: "Dr. Asif Merchant, MD, FACP, CMD, C.P.E",
    role: "Board Member",
    image: AsifImg,
    description: ' A board-certified physician in Internal Medicine, Geriatric Medicine, and Hospice & Palliative Care, with advanced training in the U.S. after graduating from Bombay University (K.J. Somaiya Medical College). He completed an Internal Medicine residency and Geriatric Medicine fellowship at North Shore University / Long Island Jewish Medical Center (New York), and later earned a Medical Education fellowship at Harvard Medical School—reflecting his commitment to clinical excellence, leadership, and training the next generation of clinicians. As a Board Member of Home Care Alliance Africa (HOCA-A), Dr. Merchant brings deep expertise in elder care quality, post-acute systems, and standards-based practice. Professionally, he is the Chief of Geriatrics and Extended Care Network at Newton-Wellesley Hospital, a Partner at New England Community Medical Services (post-acute care), and Medical Director for multiple nursing homes and a hospice in the Greater Boston area. He holds faculty appointments including Harvard Medical School and serves as an Associate Clinical Professor at Tufts School of Medicine, with multiple publications. A recognized leader in health policy and quality improvement, Dr. Merchant chairs the Geriatrics Committee of the Massachusetts Medical Society, serves on committees within the Massachusetts Health & Hospital Association, and has contributed to public discourse through interviews with major media outlets (e.g., CNN, MSNBC, The Washington Post, Boston Globe). He was appointed in September 2020 to Governor Charlie Baker’s Advisory Group for COVID-19 Vaccination in Massachusetts. With over two decades of leadership in AMDA (The Society for Post-Acute and Long-Term Care Medicine), he helped revive and grow the Massachusetts chapter into the regional Greater New England Society of Post-Acute and Long-Term Care (GNES), where he served as Past President, and he has supported national committees shaping physician competencies, quality metrics, advocacy, and public policy.'
  },
  {
    name: "Barnabas Nkore, RN",
    role: "CEO & Founder",
    image: CeoImg,
    description:
      "Barnabas Nkore, RN, is a healthcare entrepreneur and geriatric care advocate with over 25 yearsof experience in the United States and Africa. He is the President and Board Chair of Vantage Care Limited (Uganda) and the Home Care Alliance Africa (HOCA-A), where he leads efforts to professionalize eldercare across the continent. In Boston, he owns Edgelife Healthcare Inc. and Vantage Care Inc., providing Medicare-accredited skilled nursing, hospice, and palliative care. In Uganda, Barnabas has pioneered structured home care, influenced national health policy, and developed training curricula to empower caregivers and prepare Africa for its rapidly aging population.",
  },
  {
    name: "Dr. Raymond Tweheyo, MBChB, PGDip (PPM), MPH, PhD",
    role: "Executive Director",
    image: DirectorImg,
    description:
      "Dr. Raymond Tweheyo is a Ugandan physician, public health specialist, and academic leader with extensive experience in health systems strengthening, research, and medical education. He has served in senior roles within Uganda’s Ministry of Health and as a lecturer and mentor in medical institutions, advancing both clinical and public health leadership. His work spans policy development, workforce training, and regional collaboration. As Executive Director of the Home Care Alliance Africa (HOCA-A) since 2025, Dr. Tweheyo drives initiatives that expand access to quality healthcare and strengthen eldercare and community-based care across Uganda and the African continent.",
  },
  {
    name: "Mr. Ronald Tumusiime",
    role: "Director of Business Development, Fundraising & Finance",
    image: FinanceImg,
    description:
      "Ronald Tumusiimi is a finance and strategic management expert with 13+ years of experience in grant acquisition, nonprofit finance, and sustainable funding models. As Director of Fundraising and Finance at the Home Care Alliance Africa (HOCA-A), he drives financial strategy to secure long-term sustainability in eldercare services across the continent. Ronald has mobilized and managed over $2 million for organizations in healthcare, education, and agribusiness. He is also founder of ZoeNet Consult and co-founder of ADAI Labz. With an MBA in Finance and PMP certification, he champions youth empowerment, digital innovation, and inclusive development in Africa.",
  },
  {
    name: "Dr. Rosemary Kusaba Byanyima",
    role: "Strategic & Policy Advisor",
    image: ConsultaImg,
    description:
      "Dr. Rosemary Kusaba Byanyima is the Executive Director of Mulago National Referral Hospital, Uganda’s leading public hospital. A physician, radiologist, and seasoned healthcare administrator, she has served Mulago since 1993 in roles including Head of Radiology, Clinical Head of Diagnostics, Deputy Executive Director, and Acting Executive Director before her 2024 appointment by President Yoweri Museveni. She holds medical degrees from Makerere University and an Executive MBA from ESAMI. Beyond Mulago, Dr. Byanyima serves on the boards of the Uganda Heart Institute, Uganda Cancer Institute, and National Drug Authority, and is a Visiting Professor of Radiology at Mbarara University.",
  },
  {
    name: "Vivian Kobusingye Birchall, MSc",
    role: "Consultant, Communications & Strategic Engagement",
    image: VivianImg,
    description: 'Vivian Kobusingye Birchall, MSc is the Founder and CEO of HealthCare Blind Spots Consulting, a strategic communications and advisory firm focused on identifying and addressing overlooked gaps (“blind spots”) in global health systems. A Harvard Medical School graduate with an MSc in Media, Medicine, and Health, she blends evidence-based communication with real-world program leadership to strengthen the intersection of innovation, policy, and public engagement. Vivian serves on the Global Health Catalyst (GHC) team alongside Harvard and Dana-Farber Cancer Institute partners, leading communications that convene governments, academia, and industry to advance equitable access to care. Her work includes UN General Assembly (UNGA)-related dialogues and multi-stakeholder engagement on sustainable health financing and cross-border collaboration. She recently coordinated Uganda’s first Esophageal Cancer Symposium and Stent Insertion Workshop, bringing together the Uganda Cancer Institute, AfrECC, Olympus, Kyabirwa Surgical Center, and the Ugandan Embassy in Washington, D.C., to expand clinical capacity and awareness. She has also supported Uganda’s health security efforts through a technical delegation to the University of Nebraska Medical Center, advancing simulation-based preparedness and implementation partnerships. Through her television programs HealthCare Blind Spots and Africa2U on Acton TV, Vivian elevates conversations with policymakers, clinicians, and scientists translating complex health challenges into practical insight and action. She is driven by a clear purpose: to make health information, innovation, and systems more inclusive, effective, and responsive to the people they serve.'
  },
];

// const historyEvents = [
//   {
//     icon: <Rocket className="h-5 w-5 text-primary" />,
//     year: "2020",
//     title: "The Idea Was Born",
//     description:
//       "Vantage Care Limited Uganda has established a scalable, accredited, and professional homecare system, rooted in the founder’s personal caregiving experience.",
//   },
//   {
//     icon: <Building className="h-5 w-5 text-primary" />,
//     year: "2022",
//     title: "Founded Hoca-africa",
//     description:
//       "Hoca-africa was officially founded, establishing its mission to create a trusted ecosystem for home care.",
//   },
//   {
//     icon: <Users className="h-5 w-5 text-primary" />,
//     year: "2022",
//     title: "Trained 250+ Home Health Aides (HHAs)",
//     description:
//       "We proudly began serving our first communities, providing essential care and support to 100 families.",
//   },
//   {
//     icon: <Users className="h-5 w-5 text-primary" />,
//     year: "2022",
//     title: "Generates 100+ direct jobs,",
//     description:
//       "We proudly began serving our first communities, providing essential care and support to 100 families.",
//   },
//   {
//     icon: <Users className="h-5 w-5 text-primary" />,
//     year: "2022",
//     title: "First 100 Families Served ",
//     description:
//       "We proudly began serving our first communities, providing essential care and support to 100 families.",
//   },
//   {
//     icon: <Clock className="h-5 w-5 text-primary" />,
//     year: "Present",
//     title: "Expanding Our Reach",
//     description:
//       "We are actively expanding our network of caregivers and partners to bring quality home care to more communities across Africa.",
//   },
// ];

const coreValues = [
  {
    title: "Dignity",
    descr:
      "We affirm the inherent worth of every individual — especially older persons, caregivers, and community members — ensuring that all actions, services, and communications promote respect, compassion, and human value.",
  },
  {
    title: "Integrity",
    descr:
      "We operate with honesty, transparency, and accountability in all decisions and partnerships, maintaining public trust and upholding the highest ethical standards in leadership and financial management.",
  },
  {
    title: "Innovation",
    descr:
      "We encourage creativity and the use of new ideas, technologies, and models of care to improve the quality, accessibility, and sustainability of elder-care systems in Africa.",
  },
  {
    title: "Service Excellence",
    descr:
      "We strive for quality, professionalism, and continuous improvement in all programs and operations, ensuring that every service reflects commitment, empathy, and competence.",
  },
  {
    title: "Value for Money",
    descr:
      "We pursue efficiency and prudent use of resources, guaranteeing that every shilling and dollar invested in HOCA-A yields measurable social and health impact for African communities.",
  },
  {
    title: "Equitable Partnerships",
    descr:
      "We believe in collaboration built on mutual respect, fairness, and shared benefit — engaging governments, institutions, communities, and the private sector as co-creators of Africa’s care future.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-background text-[#030229]">
      {/* Hero Section */}
      <PageHero
        title="About us"
        currentPage="About us"
      // backgroundImage={ForCaregiversImg}
      />
      <div className="relative z-10 bg-background" id="whoweare">
        {/* Who We Are*/}
        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="relative aspect-video rounded-lg overflow-hidden bg-center bg-cover fmd:mt-12"
                  style={{ backgroundImage: `url(${ForElders.src})` }}
                  data-ai-hint="caregiver elderly"
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="relative z-10 flex items-end p-4 h-full">
                    <audio
                      src="/audios/ttsreader_home-care.mp3"
                      controls
                      autoPlay
                      className="w-full bg-white/70 rounded-3xl"
                    />
                  </div>
                </div>
                <p className="text-lg font-normal mt-4 md:mt-12 opacity-90">
                  We envision a continent where every older persons can age with
                  dignity, supported by skilled caregivers and strong community
                  systems.
                </p>
              </div>

              <div id="who-we-are">
                <p className="text-[#8b0000] text-lg font-medium">WHO WE ARE</p>
                <h2 className="text-3xl md:text-4xl font-semibold font-headline my-4 text-[#030229] !leading-[3rem]">
                  Strengthening the Future of Eldercare in Africa
                </h2>
                <p className="text-lg font-normal opacity-90">
                  Homecare Alliance Africa (HOCA-A) is a pan African, not-for-profit alliance
                  dedicated to developing systems, standards, and regulatory frameworks for the home-based and
                  geriatric care industry across the African Continent.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4 md:mt-16">
                  <div>
                    <h3 className="text-2xl font-semibold font-headline mb-2 flex gap-3">
                      <IoIosCheckmarkCircle size={28} color="#8b0000" /> Our
                      Mission
                    </h3>
                    <p className="text-lg opacity-90">
                      Build capacity for governments, partners and professionals
                      for quality elderly and homecare services in Africa .
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold font-headline mb-2 flex gap-3">
                      <IoIosCheckmarkCircle size={28} color="#8b0000" /> Our
                      Vision
                    </h3>
                    <p className="text-lg opacity-90">
                      Universal access to quality home care services in Africa .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-u4">
          <div className="container">
            <div>
              <h3 className="text-2xl text-center items-center justify-center  font-semibold font-headline mb-2 flex gap-3">
                <IoIosCheckmarkCircle size={28} color="#8b0000" />
                Our Core Values
              </h3>
              <div className="flex flex-wrap gap-2 justify-evenly mb-3">
                {coreValues.map((data, index) => (
                  <div key={index} className=" max-w-[25rem] p-6">
                    <div className="flex gap-3">
                      <div>
                        <h3 className="text-[1.3rem] text-[#030229] font-semibold">
                          {data.title}
                        </h3>
                        <p className="mt-2 text-[#030229] text-[1rem] opacity-70 border-l-[1px] rounded-lg border-[#03022950] pl-4">
                          {data.descr}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 sm:py-32" id="our-team">
          <div className="container">
            <div className="mb-12">
              <p className="text-[#8b0000] text-lg font-medium mb-6 text-center ">
                OUR TEAM
              </p>
              <p className="my-4 text-xl">
                HOCA-A’s leadership brings{" "}
                <b className="font-medium">
                  26+ years of combined local and international experience
                </b>{" "}
                in geriatric care, hospice and palliative care, research,
                education, administration, finance, and communications—with
                representation from policy makers, diplomats, and senior citizens
                to ensure credible, practical, and culturally grounded solutions.
              </p>
              <div className="font-medium font-headline bg-[#8B0000] bg-opacity-5 rounded-[2rem] text-xl text-center w-fit mx-auto px-6 py-6 my-20 max-w-[75%]">
                <p className="font-medium my-2">OUR GOAL</p>
                <p className=" opacity-80">
                  {" "}
                  Build a credible home-care ecosystem that supports families,
                  strengthens health systems, and ensures older Africans age with
                  dignity wherever they live. We build the systems that make home
                  care trustworthy: standards, workforce development, quality
                  assurance, and government collaboration.
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold font-headline capitalize text-center my-4 text-[#030229] !leading-[3rem]">
                Meet Our Leadership Expertise
              </h2>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3 lg:mt-10">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group relative rounded-lg overflow-hidden"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex flex-col justify-end">
                    <h4 className="text-xl font-bold text-white">
                      {member.name}
                    </h4>
                    <p className="text-primary-foreground/80">{member.role}</p>
                  </div>
                  <div className="absolute inset-0 bg-[#EFF3ED] p-6 flex flex-col overflow-y-auto text-[#030229] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-left">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-12 bg-[#EFF3ED]" id="our-journey">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-[#8b0000] text-lg font-medium mb-6">
                OUR JOURNEY
              </p>
              <p className=" mt-3 text-2xl font-headline font-medium capitalize">
                A Mother’s <span className="text-[#8b0000]"> Story</span> — The
                Birth of a <span className="text-[#8b0000]">Movement</span>
              </p>
            </div>
            {/* <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border hidden md:block"></div>
              <div className="space-y-12">
                {historyEvents.map((event, index) => (
                  <div
                    key={event.title}
                    className="grid md:grid-cols-2 items-center gap-8 relative"
                  >
                    <div
                      className={`md:text-right ${index % 2 === 0 ? "md:order-1" : "md:order-2"
                        }`}
                    >
                      <div className="inline-block">
                        <p className="text-primary font-bold">{event.year}</p>
                        <h4 className="text-xl font-semibold mt-1">
                          {event.title}
                        </h4>
                        <p className="text-muted-foreground mt-2">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex items-center justify-center md:justify-normal ${index % 2 === 0
                        ? "md:order-2 md:justify-start"
                        : "md:order-1 md:justify-end"
                        }`}
                    >
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary border-4 border-secondary"></div>
                      <div className="flex md:hidden h-8 w-8 rounded-full bg-primary border-4 border-secondary items-center justify-center text-white">
                        {event.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
            <FoundersStory />
          </div>
        </section>
      </div>
    </div>
  );
};
export default AboutPage;
