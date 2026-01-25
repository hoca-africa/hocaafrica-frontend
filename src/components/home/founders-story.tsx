'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import MotherImg from "../../assets/images/mother.png";
import { Modal, Button } from 'antd';
import { useState } from "react";

const FoundersStory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
          <p onClick={showModal} className="text-base font-normal font-headline bg-[#8B0000] bg-opacity-5 px-10 py-2 rounded-[2rem] text-[#030229] cursor-pointer ">
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
      <Modal
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={
          <Button type="primary" onClick={handleOk}>
            Close
          </Button>
        }
      >
        <div className="p-4 text-[#030229]">
          <h1 className="font-semibold text-2xl my-4">A Mother’s story - The Birth of a Movement</h1>
          <p className="text-xl">
            I was born in Bugangari, Rukungiri District, Uganda, where I learned the value of community
            and compassion by watching my parents care for my grandparents. That early lesson in dignity
            and family responsibility became the foundation of my life’s work.</p>
          <p className="text-xl mt-4">
            After migrating to the United States, I trained and served as a Registered Nurse in home health,
            hospice, and palliative care for more than 25 years. In Boston, I saw the power of structured
            home-care systems where trained caregivers, ethical standards, and compassion preserve
            independence and dignity for the elderly.
            Yet, each time I looked back home, I saw the opposite reality: families filled with love but
            lacking systems to support ageing with dignity.</p>
          <p className="text-xl mt-4">
            When my mother turned eighty, she began battling chronic illnesses common among ageing
            Africans hypertension, diabetes, arthritis, and frailty.
            Like many elders, she was trapped in a
            cycle of preventable hospitalizations. Together with my siblings we decided to care for her at
            home with consistent, compassionate, and structured support. For four years, she lived
            comfortably and never returned to the hospital until her peaceful passing.
            That experience opened my eyes: <b>organized home care changes lives</b>. It wasn’t just her story it was Africa’s
            story.</p>
          <p className="text-xl mt-4">  In 2021, I founded <b>Vantage Care Limited Uganda</b>, the country’s first structured, professionally
            managed home-care organization. Through Vantage Care, hundreds of young Ugandans have
            been trained and employed as certified caregivers, restoring dignity to elders while creating
            sustainable livelihoods for youth.</p>
          <p className="text-xl mt-4">
            That success led to a greater vision to expand the model beyond Uganda. This became <b>Home
              Care Alliance Africa (HOCA-A)</b> : a Pan-African movement to professionalize compassion,
            systematize care, and dignify ageing across Africa.
            HOCA-A blends Boston’s clinical excellence with Africa’s communal caregiving spirit, creating
            a bridge between personal experience and continental purpose.</p>
          <div className="text-xl mt-4">
            <h2 className="font-semibold text-2xl mb-3">HOCA-A exists to ensure that :</h2>
            <ul className="list-disc pl-5">
              <li>No African elder suffers for lack of care,</li>
              <li>No caregiver serves without recognition,</li>
              <li>No family carries this burden alone.</li>
            </ul></div>
          <i className="text-lg mt-6">
            We envision Africa where older persons age gracefully at home, supported by trained
            caregivers, informed families, and compassionate systems of care.
          </i>
          <p className="text-xl mt-2">Barnabas Nkore, RN</p>
        </div>
      </Modal>
    </section>
  );
};
export default FoundersStory;
