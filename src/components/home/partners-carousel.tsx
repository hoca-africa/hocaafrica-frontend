"use client";

import Image from "next/image";
import EdgelifeLogo from '../../assets/images/logos/edgelife.png';
import MyriaLogo from '../../assets/images/logos/myriadusa.png';
import MinistrLogo from '../../assets/images/logos/ugandaministr.png';
import VintageLogo from '../../assets/images/logos/vintage.png';
import TrustedLogo from '../../assets/images/logos/trusted.png';
import AntikyLogo from '../../assets/images/logos/Antikythera_Logo.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  { name: "Vintagecare", image: VintageLogo },
  { name: "My Trusted Companion Inc.", image: TrustedLogo },
  { name: "EdgeLife", image: EdgelifeLogo },
  { name: "Antikythera", image: AntikyLogo },
  { name: "Ministry of Education", image: MinistrLogo },
  { name: "Myriad USA", image: MyriaLogo },
];

const PartnersCarousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 100,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="partners" className="py-6 sm:py-10 bg-[#EFF3ED90]"
    >
      <div className="container mx-auto">
        <div className=" 2mb-4">
          <h1 className="text-2xl text-[#030229]">Thank You to Our Partners</h1>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div className="max-w-[25rem] max-h-[7rem] mx-auto py-4 flex items-center justify-center">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={200}
                  height={100}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section >
  );
}
export default PartnersCarousel;
