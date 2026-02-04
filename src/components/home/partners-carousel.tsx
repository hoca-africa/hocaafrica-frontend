"use client";

import Image from "next/image";
import EdgelifeLogo from '../../assets/images/logos/edgelife.png';
import MyriaLogo from '../../assets/images/logos/myriadusa.png';
import MinistrLogo from '../../assets/images/logos/ugandaministr.png';
import MoHLogo from '../../assets/images/logos/moh-ug.png';
import VintageLogo from '../../assets/images/logos/vintage.png';
import TrustedLogo from '../../assets/images/logos/trusted.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersCarousel = () => {
  const partners = [
    {
      name: "Vintagecare",
      title: 'Vantage Care Uganda Ltd',
      site: 'www.vantagecare.co',
      descr: 'Vantage Care Uganda Ltd (VCL) is a Uganda-based home care provider and training platform established to deliver professional home-based care, develop a trained caregiver workforce, and reduce avoidable hospital readmissions through continuity of care after discharge.',
      image: VintageLogo
    },
    {
      name: "My Trusted Companion Inc.",
      title: 'MyTrustedCompanion',
      site: 'www.vantagecareinc.com',
      descr: 'MyTrustedCompanion partners with HOCA-A to benchmark non-medical home care operations against global standards—strengthening quality, safety, and professionalism in the African context.',
      image: TrustedLogo
    },
    {
      name: "EdgeLife",
      title: 'Edgelife Healthcare Inc.',
      site: 'www.edgelifehealth.com',
      descr: 'Through its partnership with Edgelife Healthcare Inc. (U.S., Medicare-accredited), HOCA-A draws on internationally regulated home care standards, policies, and quality systems—contextualized for African implementation and scale.',
      image: EdgelifeLogo
    },
    {
      name: "Ministry of Education",
      title: 'Ministry of Education and Sports(MoES)',
      site: '',
      descr: 'The Ministry of Education and Sports (MoES) is working with HOCA-A, through its strategic implementation partner Vantage Care Limited (VCL), to strengthen the accreditation and quality assurance of home-care training curricula. This partnership supports the development of a professional, standardized home-care workforce aligned with national education requirements and global best practice.',
      image: MinistrLogo
    },
    {
      name: "Myriad USA",
      title: 'Myriad USA',
      site: 'www.myriadusa.org',
      descr: 'Myriad USA partners with HOCA-A under an MoU to mobilize U.S. charitable giving through the “Elder Care Fund for Africa,” supporting HOCA-A projects in compliance with U.S. tax laws.',
      image: MyriaLogo
    },
    {
      name: "MoH-ug",
      title: 'Ministry Of Health- Uganda',
      site: 'www.moh.gov.ug',
      descr: 'THOCA-A has an MoU framework with Uganda’s Ministry of Health, providing technical collaboration to strengthen home-based and geriatric care systems through standards development, workforce training, quality improvement, and evidence-informed implementation.',
      image: MoHLogo
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section id="partners" className="py-6 sm:py-10 bg-[#EFF3ED90]"
    >
      <div className="container mx-auto">
        <div className="mb-4">
          <h1 className="text-2xl text-[#030229] my-10">Thanks to Our Local and Global Partners</h1>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="px-3">
                <div

                  className="rounded-xl border bg-[#ffffff80]  h-full px-4 py-6 cursor-pointer"
                >
                  <div className="flex gap-2">
                    <div className="w-24 h-16 flex items-center justify-center">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={96}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-2">
                      <h1 className="font-medium  text-base">{partner.title}</h1>
                      <a className="text-sm text-blue-500 hover:underline" href={`https://${partner.site}`} target="_blank" rel="noopener noreferrer">{partner.site}</a>
                    </div>
                  </div>
                  <p className="mt-4 opacity-70 text-sm font-normal line-clamp-4 hover:line-clamp-none transition-all">{partner.descr}</p></div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
export default PartnersCarousel;
