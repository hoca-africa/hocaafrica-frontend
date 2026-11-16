"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";
import Select from "react-select";
import { countries } from "countries-list";
import { X } from "lucide-react";
import { SERVER_URL } from "@/utils/constants";
import { on } from "events";
import DonorPage from "./donorPage";

const JoinUsPage = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [showDonorPage, setShowDonorPage] = useState(false);
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
    type: "",
  });
  const [selectedCountry, setSelectedCountry] = useState("");

  // Close other forms when one is opened
  useEffect(() => {
    setPhone("");
  }, [activeForm]);

  const handlePhoneChange = (value: any) => {
    setPhone(value);
  };
  // Prepare country options
  const countryOptions = Object.entries(countries)
    .map(([code, country]) => ({
      value: `${country.name} (${code})`,
      label: country.name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  // Reset form when activeForm changes
  useEffect(() => {
    setPhone("");
    setSelectedCountry("");
    setSubmitStatus({ success: false, message: "", type: "" });
  }, [activeForm]);

  const handleCardClick = (id: any) => {
    if (id === "partner") {
      setShowDonorPage(true);
      setActiveForm(null);
    } else {
      // For individual and institution, show the form
      setActiveForm(id);
      setShowDonorPage(false);
    }
  };

  const handleBackToCards = () => {
    setShowDonorPage(false);
    setActiveForm(null);
  };

  //intergate with backend to fetch country list
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    // Prepare data according to your Mongoose schema
    const submissionData: any = {
      name: formData.get("name"),
      email: formData.get("email"),
      country: formData.get("country"),
      note: formData.get("message") || "",
      phoneNumber: phone,
      joinAs: activeForm,
    };

    // Add optional fields based on joinAs type
    if (activeForm === "institution") {
      submissionData.institweb = formData.get("website") || "";
      const empNum: any = formData.get("employees");
      if (empNum) submissionData.employeenumber = parseInt(empNum);
    } else if (activeForm === "partner") {
      submissionData.organization = formData.get("organization") || "";
    }

    console.log("Submitting:", submissionData);

    try {
      const response = await fetch(`${SERVER_URL}/join-us/join-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message:
            "Application submitted successfully! You will receive a confirmation email shortly.",
          type: "success",
        });

        // Reset form
        e.target.reset();
        setPhone("");
        setSelectedCountry("");

        // Close form after 5 seconds
        setTimeout(() => {
          setActiveForm(null);
          setSubmitStatus({ success: false, message: "", type: "" });
        }, 5000);
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "Submission failed. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        success: false,
        message: "Network error. Please check your connection and try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Custom styles for react-select
  const selectStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? "#8b0000" : "#d1d5db",
      borderRadius: "0.5rem",
      minHeight: "44px",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(139, 0, 0, 0.1)" : "none",
      "&:hover": {
        borderColor: state.isFocused ? "#8b0000" : "#9ca3af",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#fef2f2"
        : state.isFocused
          ? "#f3f4f6"
          : "white",
      color: state.isSelected ? "#991b1b" : "#1f2937",
      "&:hover": {
        backgroundColor: "#f3f4f6",
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#6b7280",
      "&:hover": {
        color: "#374151",
      },
    }),
  };

  const membershipTypes = [
    {
      id: "individual",
      title: "Individual Member",
      description:
        "For nurses, clinicians, caregivers, trainers, and students who want skills, standards, and professional recognition.",
      placeholder:
        "Tell us about your background and interests in home-care...",
      buttonText: "Apply as Individual",
    },
    {
      id: "institution",
      title: "Institutional Member",
      description:
        "For agencies, hospitals, clinics, dioceses, and training schools strengthening quality systems, workforce development, and safeguarding.",
      placeholder: "Tell us about your organization and its needs...",
      buttonText: "Apply as Institution",
    },
    {
      id: "partner",
      title: "Strategic Partner / Sponsor",
      description:
        "For donors, government, insurers, CSR, and foundations funding or scaling national and regional home-care systems.",
    },
  ];

  return (
    <>
      <div>
        {/* Donor Page - Only for Partner/Sponsor */}
        {showDonorPage && <DonorPage handleBackToCards={handleBackToCards} />}
      </div>
      {
        !showDonorPage && (
          <div className="container py-16 sm:py-24 text-[#030229]">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-medium font-headline max-w-[55rem] mx-auto text-[#030229]">
                Join Africa's First Continental Home-Care Alliance
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                HOCA-A membership is designed for individuals, institutions, and
                partners who want to professionalize home-based and geriatric care
                across Africa through standards, training, safeguarding, and
                system-building.
              </p>
            </div>
            {/* Membership Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-8">
              {membershipTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => handleCardClick(type.id)}
                  style={{
                    backgroundImage: "url('/images/abtimg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className={`
              border-2 rounded-xl p-8 flex flex-col justify-center items-center text-center 
              min-h-[220px] cursor-pointer group relative overflow-hidden transition-all duration-300
              ${activeForm === type.id
                      ? "border-[#8b0000]/50 ring-1 ring-[#8b0000]/20 "
                      : "border-[#8b0000]/50 hover:border-[#8b0000]/80 hover:shadow-md"
                    }
            `}
                >
                  {/* Selected indicator */}
                  {activeForm === type.id && (
                    <div className="absolute top-3 right-3 bg-[#8b0000] text-white text-xs px-2 py-1 rounded-full z-10">
                      Selected
                    </div>
                  )}

                  {/* Title - hides on hover */}
                  <h1 className="text-2xl md:text-3xl font-semibold text-[#030229] drop-shadow-lg transition-all duration-300 group-hover:opacity-0">
                    {type.title}
                  </h1>

                  {/* Description - shows on hover */}
                  <p className="font-medium text-base text-[#030229] absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-all duration-300 group-hover:opacity-100 transform scale-95 group-hover:scale-100 drop-shadow-lg">
                    {type.description}
                  </p>

                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 group-hover:bg-black/20 transition-all duration-300 rounded-xl"></div>
                </div>
              ))}
            </div>

            {/* Single Form Section */}
            {activeForm && activeForm !== "partner" && (
              <div className="mt-12 border-t border-gray-200 pt-10">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  {/* Form Header */}
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#030229]">
                        {membershipTypes.find((t) => t.id === activeForm)?.title}{" "}
                        Registration
                      </h2>
                      <p className="text-gray-600 mt-2">
                        Please fill out the form below to apply for membership
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveForm(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="Close form"
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>

                  {/* Status Message */}
                  {submitStatus.message && (
                    <div
                      className={`mb-6 p-4 rounded-lg ${submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                    >
                      <div className="flex items-center">
                        {submitStatus.type === "success" ? (
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        <span>{submitStatus.message}</span>
                      </div>
                    </div>
                  )}

                  {/* Single Form */}
                  <form onSubmit={handleSubmit} className="grid gap-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="grid gap-3">
                        <Label
                          htmlFor="names"
                          className="text-sm font-medium text-gray-700"
                        >
                          {activeForm === "institution"
                            ? "Institution Name"
                            : "Full Name"}
                        </Label>
                        <Input
                          id="names"
                          name="name"
                          required
                          placeholder={
                            activeForm === "institution"
                              ? "Enter institution name"
                              : "Enter your full name"
                          }
                          className="h-12 border-gray-300 focus:border-[#8b0000] focus:ring-[#8b0000]/20 rounded-lg"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="grid gap-3">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700"
                        >
                          {activeForm === "institution"
                            ? "Institution Email"
                            : "Email Address"}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          name="email"
                          placeholder={
                            activeForm === "institution"
                              ? "institution@example.com"
                              : "your@email.com"
                          }
                          className="h-12 border-gray-300 focus:border-[#8b0000] focus:ring-[#8b0000]/20 rounded-lg"
                        />
                      </div>

                      {/* Country Field */}
                      <div className="grid gap-3">
                        <Label
                          htmlFor="country"
                          className="text-sm font-medium text-gray-700"
                        >
                          Country
                        </Label>
                        <Select
                          options={countryOptions}
                          name="country"
                          value={countryOptions.find(
                            (option) => option.value === selectedCountry,
                          )}
                          onChange={(option) =>
                            setSelectedCountry(option ? option.value : "")
                          }
                          placeholder="Select your country"
                          isSearchable
                          styles={selectStyles}
                          className="select-container"
                          classNamePrefix="select"
                        />
                      </div>

                      {/* Phone Field */}
                      <div className="grid gap-3">
                        <Label
                          htmlFor="phone"
                          className="text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </Label>
                        <div className="border border-gray-300 rounded-lg p-2 hover:border-gray-400 focus-within:border-[#8b0000] focus-within:ring-2 focus-within:ring-[#8b0000]/20 transition-all">
                          <PhoneInput
                            name="phoneNumber"
                            required
                            international
                            defaultCountry="UG"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="Enter phone number"
                            className="[&_.PhoneInputInput]:border-none [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:w-full [&_.PhoneInputCountrySelect]:border-none [&_.PhoneInputCountrySelect]:outline-none"
                          />
                        </div>
                      </div>

                      {/* Additional fields based on form type */}
                      {activeForm === "institution" && (
                        <>
                          <div className="grid gap-3 md:col-span-2">
                            <Label
                              htmlFor="website"
                              className="text-sm font-medium text-gray-700"
                            >
                              Website (Optional)
                            </Label>
                            <Input
                              name="website"
                              id="website"
                              type="url"
                              placeholder="https://example.com"
                              className="h-12 border-gray-300 focus:border-[#8b0000] focus:ring-[#8b0000]/20 rounded-lg"
                            />
                          </div>
                          <div className="grid gap-3">
                            <Label
                              htmlFor="employees"
                              className="text-sm font-medium text-gray-700"
                            >
                              Number of Employees
                            </Label>
                            <Input
                              id="employees"
                              name="employees"
                              type="number"
                              placeholder="e.g., 50"
                              className="h-12 border-gray-300 focus:border-[#8b0000] focus:ring-[#8b0000]/20 rounded-lg"
                            />
                          </div>
                        </>
                      )}

                      {/* {activeForm === "partner" && (
              <div className="grid gap-3 md:col-span-2">
                <Label
                  htmlFor="organization"
                  className="text-sm font-medium text-gray-700"
                >
                  Organization Type
                </Label>
                <Select
                  name="organization"
                  options={[
                    { value: "donor", label: "Donor Organization" },
                    { value: "government", label: "Government Agency" },
                    { value: "insurer", label: "Insurance Company" },
                    { value: "foundation", label: "Foundation/CSR" },
                    { value: "other", label: "Other" },
                  ]}
                  placeholder="Select organization type"
                  isSearchable
                  styles={selectStyles}
                />
              </div>
            )} */}
                    </div>

                    {/* Message Field */}
                    <div className="grid gap-3">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700"
                      >
                        Additional Information
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={
                          membershipTypes.find((t) => t.id === activeForm)
                            ?.placeholder
                        }
                        rows={5}
                        className="border-gray-300 focus:border-[#8b0000] focus:ring-[#8b0000]/20 rounded-lg resize-none"
                      />
                    </div>

                    {/* Submit Section */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-12 px-8 bg-[#8b0000] hover:bg-[#700000] text-white rounded-lg font-medium text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          membershipTypes.find((t) => t.id === activeForm)
                            ?.buttonText
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setActiveForm(null);
                          setSubmitStatus({
                            success: false,
                            message: "",
                            type: "",
                          });
                        }}
                        className="h-12 px-8 border-gray-300 hover:border-gray-400 rounded-lg font-medium"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>

                  {/* Additional Info */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Note:</span> After submission,
                      our team will review your application and contact you within
                      3-5 business days. All information provided is confidential.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Style for PhoneInput borders */}
            <style jsx global>{`
          /* Remove borders from PhoneInput */
          .PhoneInput,
          .PhoneInputInput,
          .PhoneInputCountry,
          .PhoneInputCountrySelect {
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            background: transparent !important;
          }

          .PhoneInputInput {
            padding-left: 8px;
            font-size: 0.875rem;
          }

          /* Style react-select focus state */
          .select__control--is-focused {
            border-color: #8b0000 !important;
            box-shadow: 0 0 0 2px rgba(139, 0, 0, 0.1) !important;
          }
        `}</style>
          </div>)
      }
    </>
  );
};
export default JoinUsPage;
