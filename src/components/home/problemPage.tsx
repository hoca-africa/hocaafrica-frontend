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
        slidesToShow: 3,
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
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

    const challenges = [
        {
            title: "The Elder Care and Health Crisis",
            description:
                "Older adults face growing health needs that communities are not equipped to handle.",
            icon: <FaUserNurse />,
        },
        {
            title: "Heavy burden of chronic illness and disabilities",
            description:
                "Rising noncommunicable diseases (hypertension, diabetes, stroke, cancer) affecting function and independence",
            icon: <FaHeartbeat />,
        },
        {
            title: "Weak Healthcare Systems for Older Adults",
            description:
                "Healthcare systems lack geriatric specialists, trained caregivers, and proper elder-care facilities.",
            icon: <FaHospitalAlt />,
        },
        {
            title: "Urbanization and Family Dynamics",
            description:
                "Urban migration is weakening traditional family support, leaving many elderly people isolated.",
            icon: <FaCity />,
        },
        {
            title: "Economic and Social Challenges",
            description:
                "Many older adults live in poverty, lack pensions, and depend on overstretched family caregivers.",
            icon: <FaMoneyBillWave />,
        },
        {
            title: "Gendered Impact",
            description:
                "Women shoulder unpaid caregiving roles and older women face greater poverty and vulnerability.",
            icon: <FaVenusMars />,
        },
        {
            title: "Mental Health Concerns",
            description:
                "Mental health issues like dementia are rising, but awareness, support, and treatment remain limited.",
            icon: <FaBrain />,
        },
        {
            title: "Increasing Disability & Dependency",
            description:
                "Chronic conditions and disabilities are increasing, leaving untrained families overwhelmed by care.",
            icon: <FaWheelchair />,
        },
        {
            title: "Societal Impact",
            description:
                "Care burdens lower productivity, strain families, deepen gender inequality, and raise national costs.",
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
                                    className="pl-[3rem] border-r-[1px] border-[#030229]  border-opacity-10  h-[15rem]"
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
