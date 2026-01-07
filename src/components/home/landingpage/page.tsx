import Link from "next/link";
import "./landingpage.css";
import Image from "next/image";
import ForEldersImg from "../../../assets/images/forelders.png";
import ForCaregiversImg from "../../../assets/images/forcaregiver.png";
import ForFamiliesImg from "../../../assets/images/forfamilies.png";

const AfricaMap = () => (
    <svg
        className="africa-map"
        viewBox="0 0 400 500"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            className="africa-shape"
            d="M200 50 
            C220 50 240 60 250 80 
            L260 100 
            C270 120 280 140 280 160 
            L285 200 
            C285 220 280 240 270 260 
            L260 280 
            C250 300 240 320 230 340 
            L220 360 
            C210 380 200 400 190 420 
            L180 440 
            C170 450 160 460 150 450 
            L140 440 
            C130 420 120 400 110 380 
            L100 360 
            C90 340 80 320 70 300 
            L60 280 
            C50 260 45 240 45 220 
            L40 180 
            C40 160 45 140 55 120 
            L65 100 
            C75 80 90 60 110 50 
            L130 45 
            C150 40 170 40 190 45 
            Z"
        />
    </svg>
);

const CirclePhoto1 = () => (
    <div className="relative w-[280px] h-[280px]">
        <svg viewBox="0 0 280 280" className="absolute inset-0 w-full h-full">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#f7f0ed", stopOpacity: 1 }} />
                    <stop
                        offset="100%"
                        style={{ stopColor: "#e8d5cc", stopOpacity: 1 }}
                    />
                </linearGradient>
            </defs>
            <rect width="280" height="280" fill="url(#grad1)" />
        </svg>
        <Image
            src={ForEldersImg}
            alt="Founder Image"
            fill
            className="object-contain"
        />
    </div>
);

const CirclePhoto2 = () => (
    <div className="relative w-[220px] h-[220px]">
        <svg viewBox="0 0 220 220" className="absolute inset-0 w-full h-full">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#f7f0ed", stopOpacity: 1 }} />
                    <stop
                        offset="100%"
                        style={{ stopColor: "#e8d5cc", stopOpacity: 1 }}
                    />
                </linearGradient>
            </defs>
            <rect width="280" height="280" fill="url(#grad1)" />
        </svg>
        <Image
            src={ForCaregiversImg}
            alt="Founder Image"
            fill
            className="object-contain"
        />
    </div>
);

const CirclePhoto3 = () => (
    <div className="relative w-[260px] h-[260px]">
        <svg viewBox="0 0 280 280" className="absolute inset-0 w-full h-full">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#f7f0ed", stopOpacity: 1 }} />
                    <stop
                        offset="100%"
                        style={{ stopColor: "#e8d5cc", stopOpacity: 1 }}
                    />
                </linearGradient>
            </defs>
            <rect width="260" height="260" fill="url(#grad1)" />
        </svg>
        <Image
            src={ForFamiliesImg}
            alt="Founder Image"
            fill
            className="object-contain"
        />
    </div>
);

export default function LandingPage() {
    return (
        <>
            <section className="hero">
                <div className="pattern-overlay"></div>

                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Transforming Elder  <span className="text-[#8b0000]">Care Across Africa</span>
                        </h1>
                        <p className="hero-subtitle">
                            Building professional, compassionate, and accredited systems of
                            home-based and geriatric care — driven by African values and
                            global standards.
                        </p>
                        <Link href="/join-us" className="cta-button">
                            <span>Join Us Today</span>
                            <span className="arrow">→</span>
                        </Link>
                    </div>

                    <div className="hero-visual">
                        <AfricaMap />
                        <div className="photo-circles">
                            <div className="deco-ring ring-1"></div>
                            <div className="deco-ring ring-2"></div>
                            <div className="deco-ring ring-3"></div>

                            <div className="circle-photo circle-1">
                                <CirclePhoto1 />
                            </div>

                            <div className="circle-photo circle-2">
                                <CirclePhoto2 />
                            </div>

                            <div className="circle-photo circle-3">
                                <CirclePhoto3 />
                            </div>

                            <div className="accent-shape shape-1"></div>
                            <div className="accent-shape shape-2"></div>
                            <div className="accent-shape shape-3"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
