"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SlLocationPin } from "react-icons/sl";
import { BsEnvelopeAt } from "react-icons/bs";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import PageHero from "@/components/PageHero";

const ContactPage = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState("Select");

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleSelect = (item: { label: string; value: string }) => {
    setSelectedTopic(item.label);
    setOpenDropdown(null);
  };

  const contactAr = [
    {
      icon: <LiaPhoneVolumeSolid size={30} color="#8B0000" />,
      descr: "Call Us",
      value: "+1 781 244 5912",
    },
    {
      icon: <BsEnvelopeAt size={30} color="#8B0000" />,
      descr: "Get in Touch",
      value: "info@hoca-africa.org",
    },
    {
      icon: <SlLocationPin size={30} color="#8B0000" />,
      descr: "Location",
      value: "Kampala, Uganda",
    },
  ];

  const selectDropdown = [
    { label: "General Inquiry", value: "inquiry" },
    { label: "Partnership", value: "partnership" },
    { label: "Membership", value: "membership" },
    { label: "Training", value: "training" },
    { label: "Media", value: "media" },
  ];

  return (
    <div className="bg-background text-[#030229]">
      <PageHero
        title="Contact us"
        currentPage="Contact us"
      // backgroundImage={ForCaregiversImg}
      />

      {/* Hero Section */}
      <div className="relative z-10 bg-background" id="contact-us">
        <div className="container py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-16 items-center">
            <div className="bg-[#EFF3ED] p-4 md:p-10">
              <h3 className="text-2xl font-semibold font-headline mb-2">
                Contact Information
              </h3>
              <p className="my-6 text-lg font-normal">
                Feel free to Reach out to us for partnership, training
                enrollment, or accreditation support.
              </p>
              <div className="flex flex-col  gap-8">
                {contactAr.map((data: any, index: number) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-[1px] rounded-full border-2 border-[#8B0000] h-[60px] w-[60px] flex items-center justify-center">
                      {data.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-sm">{data.descr}</p>
                      <p className="font-semibold text-xl">{data.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#8b0000] text-lg font-medium">WRITE TO US</p>
              <p className="mb-8 mt-3 text-2xl font-headline font-medium capitalize">
                We’re Here to Collaborate
              </p>
              <form className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="names">Your Name</Label>
                    <Input id="names" placeholder="Your Name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" placeholder="Organization" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder=" Your Country" />
                  </div>
                </div>
                <div className="relative">
                  <Label htmlFor="email">Subject</Label>
                  <button
                    type="button"
                    onClick={() => toggleDropdown("topic")}
                    className="flex h-10 w-full  items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-opacity-50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span>{selectedTopic}</span>
                    <TiArrowSortedDown
                      className={`h-4 w-4 opacity-50 transition-transform duration-300 ${openDropdown === "topic" ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {openDropdown === "topic" && (
                    <div className="absolute left-0 mt-2 w-full bg-white px-4 rounded-lg shadow-lg py-1 z-50 border">
                      {selectDropdown.map((item: any) => (
                        <a
                          key={item.value}
                          onClick={() => handleSelect(item)}
                          className="block cursor-pointer px-4 py-2 text-[#030229] hover:bg-[#EFF3ED70] hover:text-foreground transition-colors text-sm rounded-md"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" />
                </div>
                <div>
                  <Button type="submit">Send Message</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full h-[550px] rounded-lg overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4971.554850677381!2d32.59401335463894!3d0.4188143793031394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb906fd1d751%3A0xe6731cd1b69ea220!2sVantage%20Care%20Limited%20Uganda!5e1!3m2!1sen!2srw!4v1765872229650!5m2!1sen!2srw"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
