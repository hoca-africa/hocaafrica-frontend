'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Menu } from 'lucide-react';
import LogoImg from "../../assets/images/logos/logo_hocaa.png";
import "./header.css";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const aboutUsMenuItems = [
    { label: 'Who we are', href: '/about#who-we-are' },
    { label: 'Our team', href: '/about/#our-team' },
    { label: 'our journey', href: '/about/#our-journey' },
  ];

  const servicesMenuItems = [
    { label: 'Policy, Systems & Advisory', href: '/services' },
    { label: 'Training & Certification', href: '/services/training' },
  ];
  const blogMenuItems = [
    { label: 'Newsroom', href: '/blog#' },
    { label: 'Articles', href: '/blog' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm text-[#030229]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <Image className="h-12 w-[8em]" src={LogoImg} alt="logo-image" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Home */}
            <Link
              href="/"
              className="hover:text-[#8B0000] transition-colors font-medium text-base"
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <Link
                href="/about"
                className="flex items-center gap-1  hover:text-[#8B0000] transition-colors font-medium text-base group/about"
              >
                About Us
                <TiArrowSortedDown
                  size={16}
                  className="transition-transform"
                />
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-6 w-48 p-2 bg-white rounded-lg shadow-lg opacity-0 invisible  group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                {aboutUsMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-[#030229] font-medium hover:bg-[#EFF3ED60] hover:text-[#8B0000] transition-colors text-base rounded-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Our Services Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className="flex items-center gap-1 hover:text-[#8B0000] transition-colors font-medium text-base group/services"
              >
                Our Services
                <TiArrowSortedDown
                  size={16}
                  className="transition-transform"
                />
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-6 p-2 w-[17rem] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                {servicesMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-[#030229] font-medium hover:bg-[#EFF3ED60] hover:text-[#8B0000] transition-colors text-base rounded-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Blog */}
            <div className="relative group">
              <Link
                href="/blog"
                className="flex items-center gap-1 hover:text-[#8B0000] transition-colors font-medium text-base group/services"
              >
                Blog
                <TiArrowSortedDown
                  size={16}
                  className="transition-transform"
                />
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-6 w-48 p-2 bg-[#F7F7F5] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                {blogMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-[#030229] font-medium  hover:bg-[#EFF3ED60] hover:text-[#8B0000] transition-colors text-base rounded-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <Link
              href="/contact"
              className=" hover:text-[#8B0000] transition-colors font-medium text-base"
            >
              Contact Us
            </Link>
            <div className="hidden md:flex">
              <button className="join-btn"><Link href="/join-us">Join Us</Link></button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-[#030229]" />
            ) : (
              <Menu size={24} className="text-[#030229]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-[#030229] hover:bg-gray-100 hover:text-[#8B0000] transition-colors rounded-lg"
            >
              Home
            </Link>

            {/* About Us Mobile */}
            <div>
              <button
                onClick={() => toggleDropdown('about')}
                className="w-full text-left px-4 py-2 text-[#030229] hover:bg-gray-100 hover:text-[#8B0000] transition-colors rounded-lg flex items-center justify-between"
              >
                About Us
                <TiArrowSortedDown
                  size={16}
                  className={`transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {openDropdown === 'about' && (
                <div className="bg-[#F7F7F5] rounded-lg mt-2">
                  {aboutUsMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-2 text-[#030229] hover:text-[#8B0000] transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Our Services Mobile */}
            <div>
              <button
                onClick={() => toggleDropdown('services')}
                className="w-full text-left px-4 py-2 text-[#030229] hover:bg-gray-100 hover:text-[#8B0000] transition-colors rounded-lg flex items-center justify-between"
              >
                Our Services
                <TiArrowSortedDown
                  size={16}
                  className={`transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {openDropdown === 'services' && (
                <div className="bg-[#F7F7F5] rounded-lg mt-2">
                  {servicesMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-2 text-[#030229] hover:text-[#8B0000] transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="block px-4 py-2 text-[#030229] hover:bg-gray-100 hover:text-[#8B0000] transition-colors rounded-lg"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="block px-4 py-2 text-[#030229] hover:bg-gray-100 hover:text-[#8B0000] transition-colors rounded-lg"
            >
              Contact Us
            </Link>
            <div className="block">
              <button className="join-btn"><Link href="/join-us">Join Us</Link></button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
