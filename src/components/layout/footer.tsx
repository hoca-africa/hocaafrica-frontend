import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../assets/images/logos/logo_hocaa.png";
import { BsWhatsapp, BsTwitterX, BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export function Footer() {
  return (
    <footer className="border-t bg-[#EFF3ED] text-[#030229]">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col space-y-6 max-w-[29.4rem]">
            <div className="logo">
              <Link href="/">
                <Image
                  className="h-12 w-[8em]"
                  src={LogoImg}
                  alt="logo-image"
                />
              </Link>
            </div>
            <p className="opacity-90 text-lg font-normal ">
              HOCA-A creates a future of compassionate, reliable, and dignified
              care for every older person. We are building Africa’s care
              economy—one caregiver, one family, one community at a time.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4 font-headline text-[20px]">
              Quick Link
            </h3>
            <ul className="space-y-4 text-[16px]">
              <li>
                <Link href="/about" className=" hover:text-primary font-normal flex gap-2">
                  < MdOutlineKeyboardDoubleArrowRight size={20} /> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className=" hover:text-primary  flex gap-2">
                  < MdOutlineKeyboardDoubleArrowRight size={20} />  Our Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary  flex gap-2">
                  < MdOutlineKeyboardDoubleArrowRight size={20} />  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary  flex gap-2">
                  < MdOutlineKeyboardDoubleArrowRight size={20} /> Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 font-headline text-[20px]">
              Contact Us
            </h3>
            <ul className="space-y-4 text-[16px]">
              <li>
                <Link href="/about" className=" hover:text-primary font-normal">
                  +256759861818 | hocaafrica@gmail.com
                </Link>
              </li>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="hover:text-primary font-normal opacity-90"
                >
                  <BsWhatsapp color="#030229" size={22} />
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary font-normal opacity-90"
                >
                  <BsTwitterX color="#030229" size={20} />
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary font-normal opacity-90"
                >
                  <BiLogoLinkedin color="#030229" size={24} />
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary font-normal opacity-90"
                >
                  <BsInstagram color="#030229" size={21} />
                </Link>
              </div>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t  text-base font-normal opacity-70 grid grid-cols-1 md:grid-cols-2">
          <div className=" flex gap-3 md:gap-8">
            <li className="list-none">
              <Link href="#" className="hover:text-primary font-normal">
                Privacy Policy
              </Link>
            </li>
            <li className="list-none">
              <Link href="#" className="hover:text-primary font-normal">
                Terms of Service
              </Link>
            </li>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Hoca-africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
