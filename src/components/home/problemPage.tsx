"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    FaUserNurse,
    FaHeartbeat,
    FaHospitalAlt,
    FaCity,
    FaMoneyBillWave,
    FaVenusMars,
    FaBrain,
    FaWheelchair,
    FaUsers,
} from "react-icons/fa";
import { GoArrowLeft, GoArrowRight, GoArrowUpRight } from "react-icons/go";

const ProblemPage: React.FC = () => {
    // Custom Arrow Components
    const CustomPrevArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <button
                className="hidden  lg:block absolute left-[-50px] top-[60%] -translate-y-1/2 z-10 bg-[#8B0000] bg-opacity-5 text-[#8B0000] rounded-full p-2 transition-all duration-300 transform hover:scale-110 focus:outline-none"
                style={style}
                onClick={onClick}
                aria-label="Previous slide"
            >
                <GoArrowLeft size={24} />
            </button>
        );
    };

    const CustomNextArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <button
                className="hidden  lg:block absolute right-[-60px] top-[60%] -translate-y-1/2 z-10 bg-[#8B0000] bg-opacity-5 text-[#8B0000] rounded-full p-2 transition-all duration-300 transform hover:scale-110 focus:outline-none"
                style={style}
                onClick={onClick}
                aria-label="Next slide"
            >
                <GoArrowRight size={24} />
            </button>
        );
    };

    var settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    const challenges = [
        {
            title: "Limited access to dependable long-term care at home",
            description:
                "Families often manage complex needs alone .",
            icon: <FaUserNurse />,
        },
        {
            title: "Heavy burden of chronic illness and disabilities",
            description:
                "Rising noncommunicable diseases (hypertension, diabetes, stroke, cancer) affecting function and independence .",
            icon: <FaHeartbeat />,
        },
        {
            title: "Caregiving is undervalued and under-trained",
            description:
                "Care work is widely informal, with limited training pathways and practical skills—raising safety risks .",
            icon: <FaHospitalAlt />,
        },
        {
            title: "Elder rights and safeguarding gaps",
            description:
                "Risk of neglect, abandonment, Ageism, financial exploitation, and abuse reduce access to dignified, patient-centered care.",
            icon: <FaCity />,
        },
        {
            title: "High out-of-pocket costs that push families into crisis",
            description:
                "Older people may delay care because of cost, transport, or dependence on relatives.",
            icon: <FaMoneyBillWave />,
        },
        {
            title: "Climate and public health shocks hit elders hardest",
            description:
                "Heat, floods, outbreaks, and displacement worsen chronic conditions in countries where systems are strained.",
            icon: <FaVenusMars />,
        },
        {
            title: "Dementia, frailty, and mental health needs go unsupported",
            description:
                "Memory loss, (Dementia) is often misunderstood or stigmatized . Loneliness, grief, depression, and anxiety frequently go untreated .",
            icon: <FaBrain />,
        },
        {
            title: "A rapidly growing older population—without matching care systems",
            description:
                "Africa’s older population is expanding fast, but most countries don’t yet have strong long-term care systems to match the need.",
            icon: <FaWheelchair />,
        },
        {
            title: "Weak continuity between hospitals and the home",
            description:
                "Families receive little training on preventable complications (falls, infections wound care, mobility, nutrition, or medications errors) become common.",
            icon: <FaUsers />,
        },
    ];
    return (
        <section className="py-16 sm:py-24 bg-[#FFFFFF] text-[#030229]">
            <style>{`
                .slider-container .slick-prev,
                .slider-container .slick-next {
                    display: none !important;
                }
                
                .slider-container {
                    position: relative;
                }
            `}</style>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-2">
                    <div className="mt-8 text-[2.5rem] text-[#030229] max-w-[35rem]">
                        <h1>What Africa’s Elders Are Facing ...</h1>
                    </div>
                    <div className="max-w-[55rem] slider-container">
                        <Slider {...settings}>
                            {challenges.map((challenge, index) => (
                                <div
                                    key={index}
                                    className=" p-4  md:pl-[3rem] md:pr-10 border-r-[1px] border-[#030229]  border-opacity-10  h-[15rem]"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#8B0000] p-3 text-white flex items-center justify-center mb-6">
                                        {challenge.icon}
                                    </div>
                                    <h3 className="text-2xl text-[#030229] font-semibold">
                                        {challenge.title}
                                    </h3>
                                    <p className="mt-2 text-[#030229] opacity-70">
                                        {challenge.description}
                                    </p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <a href="#services" className="cta-button1">
                    <span>Our Solutions</span>
                    <span className="arrow">
                        <GoArrowUpRight size={24} />
                    </span>
                </a>
            </div>
        </section>
    );
};
export default ProblemPage;
