"use client";

import Image from "next/image";
import EdgelifeLogo from '../../assets/images/logos/edgelife.png';
import MyriaLogo from '../../assets/images/logos/myriadusa.png';
import MinistrLogo from '../../assets/images/logos/ugandaministr.png';
import VintageLogo from '../../assets/images/logos/vintage.png';
import TrustedLogo from '../../assets/images/logos/trusted.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  { name: "Vintagecare", image: VintageLogo },
  { name: "My Trusted Companion Inc.", image: TrustedLogo },
  { name: "EdgeLife", image: EdgelifeLogo },
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
    cssEase: "linear"
  };

  return (
    <section id="partners" className="py-2 sm:py-4 bg-[#EFF3ED90]"
    >
      <div className="container mx-auto">
        <div className=" mb-4">
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
