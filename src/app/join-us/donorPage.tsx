import React from "react";
import Image from "next/image";
import DonateImg1 from "../../assets/images/donate/donateImg1.jpeg";
import DonateImg2 from "../../assets/images/donate/donateImg2.jpeg";
import DonateImg3 from "../../assets/images/donate/donateImg3.jpeg";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { HiOutlineCreditCard } from "react-icons/hi2";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const DonorPage = (props: any) => {
  return (
    <div className="bg-[#EFF3ED]">
      <div className="container py-16 sm:py-24 text-[#030229]">
        {/* Back Button */}
        <button
          onClick={props.handleBackToCards}
          className="group inline-flex items-center gap-2 text-base font-medium text-[#030229] hover:text-[#8b0000] transition-colors"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Membership Options
        </button>
        <div className="text-center my-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-medium font-headline max-w-[55rem] mx-auto text-[#030229]">
            Support Every Elder,Honor Caregivers, Hope for every Family.
          </h1>
        </div>
        <div>
          <div className="flex justify-center items-center my-14">
            <div className="relative flex gap-10 justify-center items-center">
              {/* First Image (Left) */}
              <div className="relative z-10 -mr-8 ">
                <div className="hidden sm:block sm:w-48 sm:h-48 lg:w-80 lg:h-[30rem] rounded-3xl shadow-xl overflow-hidden">
                  <Image
                    src={DonateImg2}
                    alt="Partner 1"
                    className="w-full h-full object-cover"
                    width={224}
                    height={224}
                  />
                </div>
              </div>

              {/* Second Image (Center) */}
              <div className="relative z-20 ">
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-[25rem] lg:h-[35rem] rounded-3xl  shadow-xl overflow-hidden">
                  <Image
                    src={DonateImg1}
                    alt="Partner 2"
                    className="w-full h-full object-cover"
                    width={256}
                    height={256}
                  />
                </div>
              </div>

              {/* Third Image (Right) */}
              <div className="relative z-10 -ml-8 ">
                <div className="hidden sm:block sm:w-48 sm:h-48 lg:w-80 lg:h-[30rem] rounded-3xl  shadow-xl overflow-hidden">
                  <Image
                    src={DonateImg3}
                    alt="Partner 3"
                    className="w-full h-full object-cover"
                    width={224}
                    height={224}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end my-4">
            <button className="text-white bg-[#c39c1d] hover:bg-background hover:text-[#c39c1d] border-[1.5px] border-[#c39c1d] px-6 py-3 rounded-lg text-xl font-semibold transition-all duration-300">
              <Link
                href="https://www.every.org/home-care-alliance-africa-hoca-a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Donate Today</span>
                <MdOutlineKeyboardDoubleArrowRight
                  size={24}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </button>
          </div>
        </div>
        <div className=" my-6">
          <p className="text-[#030229] leading-relaxed mb-6 mt-10">
            Our friends and supporters based in the United States can support
            our activities through a contribution to the{" "}
            <span className="font-semibold text-[#8b0000]">
              Elder Care Fund for Africa
            </span>{" "}
            (the "Fund") at Myriad USA, a U.S. public charity within the meaning
            of Sections 501(c)(3) and 509(a)(1) of the Internal Revenue Code.
          </p>

          <p className="text-[#030229] leading-relaxed mb-8">
            Donors may be eligible for a U.S. income tax deduction for their
            contributions to the extent permitted by U.S. tax law. In accordance
            with U.S. tax law, Myriad USA retains complete control and
            discretion over amounts contributed to the Fund.
          </p>
          <div>
            <h3 className="text-xl font-bold text-[#030229] mb-4">
              How to Contribute:
            </h3>
            <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#8b0000]/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#8b0000]/10 flex items-center justify-center">
                    <span className=" text-xl">
                      <LiaMoneyCheckAltSolid />
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-[#030229]">
                    Gifts by Check
                  </h4>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Make the check out to:
                    </p>
                    <p className="font-mono text-sm bg-white p-2 rounded border border-gray-200 font-bold">
                      Myriad USA
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Write in memo section:
                    </p>
                    <p className="font-mono text-sm bg-white p-2 rounded border border-gray-200 font-bold">
                      Elder Care Fund for Africa
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Send to:</p>
                    <address className="not-italic text-sm bg-white p-3 rounded border border-gray-200">
                      Myriad USA
                      <br />
                      551 Fifth Avenue, Suite 2400
                      <br />
                      New York, NY 10176
                    </address>
                  </div>
                </div>
              </div>
              {/* Other methods */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#8b0000]/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#8b0000]/10 flex items-center justify-center">
                    <span className="text-xl">
                      <HiOutlineCreditCard />
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-[#030229]">
                    Other Methods
                  </h4>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Gifts by credit card:
                    </p>
                    <p className="text-sm bg-white p-2 rounded border border-gray-200">
                      <Link
                        href="https://www.every.org/home-care-alliance-africa-hoca-a?donateTo=home-care-alliance-africa-hoca-a#/donate/card"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full border border-[#8b0000] rounded-lg px-4 py-2 text-[#8b0000] font-semibold hover:bg-[#8b0000] hover:text-white transition-colors duration-300 text-center"
                      >
                        Make a Donation
                      </Link>
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Gifts by wire transfer:
                    </p>
                    <p className="text-sm bg-white p-2 rounded border border-gray-200 text-gray-500 italic">
                      Contact Myriad USA for details
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      To contribute other types of property:
                    </p>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="text-sm">Contact Myriad USA at:</p>
                      <a
                        href="mailto:info@myriadusa.org"
                        className="text-[#8b0000] hover:underline text-sm block mt-1"
                      >
                        info@myriadusa.org
                      </a>
                      <a
                        href="tel:+12127137660"
                        className="text-[#8b0000] hover:underline text-sm block"
                      >
                        (212) 713-7660
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DonorPage;
