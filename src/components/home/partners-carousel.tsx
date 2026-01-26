"use client";

import Image from "next/image";
import EdgelifeLogo from '../../assets/images/logos/edgelife.png';
import MyriaLogo from '../../assets/images/logos/myriadusa.png';
import MinistrLogo from '../../assets/images/logos/ugandaministr.png';
import MoHLogo from '../../assets/images/logos/moh-ug.png';
import VintageLogo from '../../assets/images/logos/vintage.png';
import TrustedLogo from '../../assets/images/logos/trusted.png';
import AntikyLogo from '../../assets/images/logos/Antikythera_Logo.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersCarousel = () => {
  const partners = [
    {
      name: "Vintagecare",
      title: 'Vantage Care Uganda Ltd (VCL)',
      descr: 'Across Africa, policy without an operating model can fail to deliver impact. HOCA-A’s approach\nis to pair standards development with tested implementation pathways so governments,\ndonors, and providers can see what quality home care looks like in practice.',
      image: VintageLogo
    },
    {
      name: "My Trusted Companion Inc.",
      title: 'MyTrustedCompanion',
      descr: 'MyTrustedCompanion partners with HOCA-A to benchmark non-medical home care operations against global standards—strengthening quality, safety, and professionalism in the African context.',
      image: TrustedLogo
    },
    { name: "EdgeLife", image: EdgelifeLogo },
    { name: "Antikythera", image: AntikyLogo },
    { name: "Ministry of Education", image: MinistrLogo },
    { name: "Myriad USA", image: MyriaLogo },
    { name: "MoH-ug", image: MoHLogo },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          <h1 className="text-2xl text-[#030229] my-10">Thank You to Our Partners</h1>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="rounded-xl bg-white  h-[30vh] px-8 flex flex-col"
                style={{
                  boxShadow: "0 8px 16px rgba(3, 2, 41, 0.2), 0 4px 8px rgba(3, 2, 41, 0.15)",
                  transition: "box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(3, 2, 41, 0.2), 0 4px 8px rgba(3, 2, 41, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(3, 2, 41, 0.15), 0 2px 4px rgba(3, 2, 41, 0.1)";
                }}
              >
                <div>
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={200}
                    height={100}
                  />
                </div>
                <div className="py-6 ">
                  <h1 className="font-semibold">{partner.title}</h1>
                  <p className="mt-4 opacity-70">{partner.descr}</p></div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
export default PartnersCarousel;
