import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ForCaregiversImg from "../assets/images/aboutimgs.jpeg";

interface PageHeroProps {
    title: string;
    currentPage: string;
    //   backgroundImage: StaticImageData;
    height?: string;
}

export default function PageHero({
    title,
    currentPage,
    //   backgroundImage,
    height = "h-[40vh]",
}: PageHeroProps) {
    return (
        <section className={`relative ${height} bg-cover bg-center text-white`}>
            <Image
                src={ForCaregiversImg}
                alt={title}
                fill
                priority
                className="object-cover fixed inset-0 w-full h-full"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 container h-full flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-semibold font-headline">
                    {title}
                </h1>

                <div className="font-medium text-xl mt-3">
                    <Link
                        href="/"
                        className="hover:text-[#8b0000] transition-all"
                    >
                        Home
                    </Link>
                    <span className="mx-4">&gt;&gt;</span>
                    <span>{currentPage}</span>
                </div>
            </div>
        </section>
    );
}
