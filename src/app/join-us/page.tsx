"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";

const JoinUsPage = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState("Select");

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleSelect = (item: { label: string; value: string }) => {
    setSelectedTopic(item.label);
    setOpenDropdown(null);
  };

  const selectDropdown = [
    { label: "Trainee", value: "training" },
    { label: "Partner", value: "partnership" },
    { label: "Member", value: "member" },
  ];

  return (
    <div className="container py-16 sm:py-24 text-[#030229]">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-medium font-headline max-w-[55rem] mx-auto text-[#030229]">
          {" "}
          Join Africa’s First Continental Home-Care Alliance
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          We invite you to join us in shaping the future of care in Africa. Your
          expertise, resources, and influence are critical to our shared
          success.
        </p>
      </div>
      <div className="mt-16 max-w-3xl mx-auto">
        <form className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="names">Names</Label>
              <Input id="names" placeholder="Your Name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
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
            <Label htmlFor="email">Join As</Label>
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
            <Textarea id="message" placeholder="Type here ..." />
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default JoinUsPage;
