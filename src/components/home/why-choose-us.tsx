import Image from "next/image";
import StatsImg from "../../assets/images/whyus.png";
import { IoCheckmarkOutline } from "react-icons/io5";

const features = [
  { title: "Africa’s First Home Care Accreditation & Standards Body" },
  { title: "A Mission Rooted in Dignity, Culture & Community" },
  { title: "Transforming Elder Care Through Workforce Development" },
  { title: "Technical Expertise from Global Leaders" },
  { title: "Workforce Development That Elevates Home-Care Quality" },
  { title: "Evidence-Backed Standards, Tools & Accountability" },
  { title: "A Trusted Partner for Governments, NGOs & Investors" },
  { title: "Impact That Reaches Families, Communities & the Nation" }
];
export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-[#EFF3ED]">
      <div className="container mx-auto">
        <div data-aos="fade-up" className="text-center mb-12">
          <div className="mx-auto w-fit ">
            <p className="text-base font-normal font-headline bg-[#8B0000] bg-opacity-5 px-10 py-2 rounded-[2rem] ">
              WHY CHOOSE <span className="text-[#8B0000]">HOCA-A</span>
            </p>
          </div>
          <p className="mt-6 text-3xl max-w-3xl mx-auto font-headline capitalize">
            Raising the Standard of Home Care for Every Family.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 items-center">
          <div className="flex flex-col justify-center gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-3">
                <div className="p-[2px]  rounded-full bg-[#8B000020] h-[28px] w-[28px] flex items-center justify-center">
                  <IoCheckmarkOutline color="#8B0000" size={22} />
                </div>
                <p className="text-xl font-normal text-[#030229]">{feature.title}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={StatsImg}
              alt={"Why Choose Us"}
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
