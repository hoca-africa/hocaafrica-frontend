"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TiStar } from "react-icons/ti";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Testimonial from '../../assets/images/testimonial.png';

var settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

const testimonials = [
  {
    name: "Sarah L.",
    text: "Hoca-africa has been a blessing for our family. The caregiver they provided for my mother is so kind and professional. I finally have peace of mind knowing she's in good hands.",
  },
  {
    name: "Michael B.",
    text: "The team is wonderful. They helped me recover after my surgery, providing excellent nursing care and great companionship. I couldn't have done it without them.",
  },
  {
    name: "The Williams Family",
    text: "Finding trustworthy care was our biggest worry. Hoca-africa's team was thoroughly vetted and incredibly supportive. They treated our father with the utmost respect and dignity.",
  },
];

const StarRating = ({ rating = 5 }) => (
  <div className="flex gap-1 text-yellow-300">
    {Array.from({ length: rating }).map((_, i) => (
      <TiStar key={i} className="h-6 w-6 fill-current" />
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24  text-[#030229] bg-white">
      <div className="container mx-auto">
        <div className="container mx-auto">
          <div className="mx-auto w-fit ">
            <h1 className="text-[2.5rem] text-[#030229] font-normal font-headline capitalize ">
              what our families say
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 ">
          <div className="max-w-[30rem] h-[40vh] bg-[#EFF3ED] rounded-xl">
            <Image
              src={Testimonial}
              alt={"testimonial"}
              className="mt-[3.2wrem h-[35vh] max-w-[25rem] mx-auto]"
            />
          </div>
          <div className="max-w-[55rem] slider-container bg-slate-40c0 border-r-[1px] border-[#030229] rounded-2xl border-opacity-20">
            <Slider {...settings}>
              {testimonials.map((challenge, index) => (
                <div
                  key={index}
                  className="  "
                >
                  <div className="pt-2 my-6">
                    <StarRating />
                  </div>
                  <h3 className="text-2xl text-[#030229] font-semibold">
                    {challenge.name}
                  </h3>
                  <p className="mt-2 text-[#030229] opacity-70 text-lg">
                    {challenge.text}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
