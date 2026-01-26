'use client';

import Image from "next/image";
import MotherImg from "../../assets/images/mother.png";

const FoundersStory = () => {

  return (
    <section
      className="container mx-auto text-[#030229]" id="our-journey">
      <div className="text-xl">
        <div>
          <div className=" w-[300px] h-[300px] p-6 rounded-full overflow-hidden" style={{
            float: "right", marginLeft: "1rem",
            marginBottom: "1rem"
          }}>
            <div className="inset-0 flex items-center justify-center">
              <Image
                src={MotherImg}
                alt="Founder Image"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
          <p className="">
            Born and raised in the rural village of <b>Bugangari, Rukungiri District, Uganda</b> , I learned early
            that caring for elders is not charity it is <b>duty, identity, and love</b>. I watched my parents care for
            my grandparents with patience, respect, and the quiet strength that defines African family life.
          </p>
          <p>
            Years later, I trained and worked as a  <b>Registered Nurse in Boston, USA</b> , spending over <b> 26
              years</b> in geriatric care, home health, palliative, and hospice practice. In that system, I saw what
            happens when compassion is supported by structure: <b> trained caregivers, clear standards,
              strong ethics, and coordinated care </b> that protects dignity and independence.</p>
        </div>
        <p className="text-xl mt-4">
          But every time I looked back home, I saw the painful contrast. In Uganda and across Africa
          ageing remains a silent crisis, not because families do not care, but because families are asked to
          manage complex care <b>without guidance, systems, or support</b>. </p>
        <p className="text-xl mt-4">
          That reality became deeply personal when my mother entered her eighties and began living with
          multiple chronic conditions <b>hypertension, diabetes, arthritis, recurrent infections</b>  and the
          frailty that can turn small problems into repeated hospital admissions. Each hospitalization
          revealed something bigger than illness: the absence of geriatric home-care structures, the heavy
          burden on women caregivers, and the ethical gap that often removes elders from decisions about
          their own lives.</p>
        <p className="text-xl mt-4">
          I knew something had to change. So I brought care home simple, consistent, dignity-centered
          support delivered with professionalism. The results were profound. My mother lived <b>four more years without a single hospitalization</b> , surrounded by comfort, respect, and love, until her final
          years without a single hospitalization, surrounded by comfort, respect, and love, until her final
          breath. That outcome was not luck. It was the power of organized home care.</p>
        <p className="text-xl mt-4">
          In 2021, I founded <b>Vantage Care Limited</b> to prove this model can work in Uganda at scale
          training caregivers, strengthening families, and restoring dignity to elders. What began at my
          mother’s bedside soon revealed a larger mission: Africa does not need more crisis care alone it
          needs a <b>home-care system.</b></p>
        <p className="text-xl mt-4">
          That vision became <b>Home Care Alliance Africa (HOCA-A)</b> a pan-African movement to
          professionalize compassion by building standards, workforce systems, safeguards, and
          partnerships that make quality home-based elder care possible across the continent.
          Today, HOCA-A is transforming elder care in Africa</p>
        <p className="text-xl mt-4">
          Because the promise is simple:
          <ul className="list-disc pl-5 my-2 font-medium">
            <li>No African elder should suffer for lack of care.</li>
            <li>No caregiver should serve without recognition.</li>
            <li>No family should carry this burden alone.</li>
          </ul>
          <p className="font-medium mt-6">Barnabas Nkore, RN</p>
          <ul className="text-lg">
            <li>Founder &amp; President, Home Care Alliance Africa (HOCA-A)</li>
            <li>Founder &amp; CEO, Vantage Care Limited (Uganda)</li>
            <li>Boston – Kampala</li>
          </ul>
        </p>
      </div>
      {/* <div className="grid lg:grid-cols-2 gap-12">
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
        </div> */}
    </section >
  );
};
export default FoundersStory;
