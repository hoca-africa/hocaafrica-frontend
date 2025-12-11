import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import MotherImg from "../../assets/images/mother.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FoundersStory = () => {
  const founderImage = PlaceHolderImages.find(
    (img) => img.id === "founder-image"
  );

  return (
    <section
      className="p-16  container mx-auto rounded-2xl text-[#030229]"
      style={{
        position: "relative",
        background: `
      radial-gradient(circle at 20% 50%, rgba(139, 0, 0, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(139, 0, 0, 0.02) 0%, transparent 50%),
      #ffffff
    `,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <div className="mx-auto w-fit ">
          <p className="text-base font-normal font-headline bg-[#8B0000] bg-opacity-5 px-10 py-2 rounded-[2rem] text-[#030229] ">
            OUR FOUNDER'S STORY
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-around">
            <h2 className="text-xl md:text-3xl !leading-10 font-headline font-medium capitalize text-[#030229] mt-3 md:mt-12">
              What began as my mother’s story has become Africa’s mission to{" "}
              <span className="text-[#8b0000]">
                {" "}
                turn compassion into systems, and love into lasting change.
              </span>
            </h2>
            <span>
              <h1 className="font-medium text-lg">Barnabas Nkore, RN</h1>
              <p className="italic opacity-60">Founder &amp; President, Home Care Alliance Africa (HOCA-A)</p>
            </span>
          </div>

          <div className="flex justify-center ">
            {founderImage && (
              <div className="relative w-[400px] h-[400px] p-6 rounded-full overflow-hidden">
                <svg
                  viewBox="0 0 380 380"
                  className="absolute inset-0 w-full h-full"
                  style={{ padding: "24px" }}
                >
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#f7f0ed", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#e8d5cc", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                  <rect width="380" height="380" fill="url(#grad1)" />
                </svg>
                <div className="absolute inset-0 p-6 flex items-center justify-center">
                  <Image
                    src={MotherImg}
                    alt="Founder Image"
                    width={280}
                    height={280}
                    className="object-contain p-6"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FoundersStory;
