"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Menu, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import "./header.css";
import LogoImg from "../../assets/images/logos/logo_hocaa.png";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "About Us",
    sublinks: [
      { href: "/about#who-we-are", label: "Who We Are" },
      { href: "/about#what-we-do", label: "What We Do" },
      { href: "/about#our-team", label: "Our Team" },
      { href: "/#partners", label: "Our Partners" },
    ],
  },
  { href: "/services", label: "Our Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

const HeaderPage = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isAboutUsOpen, setAboutUsOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <Link href="/">
              <Image className="h-12 w-[9em]" src={LogoImg} alt="logo-image" />
            </Link>
          </div>
          <ul className="nav-links hidden md:flex">
            {navLinks.map((link) =>
              link.sublinks ? (
                <li key={link.label}>
                  <DropdownMenu
                    open={isAboutUsOpen}
                    onOpenChange={setAboutUsOpen}
                  >
                    <DropdownMenuTrigger
                      className="flex items-center gap-1 outline-none"
                      onPointerEnter={() => setAboutUsOpen(true)}
                      onPointerLeave={() => setAboutUsOpen(false)}
                      asChild
                    >
                      <Link href="/about" className="flex items-center">
                        {link.label}
                        {isAboutUsOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      onPointerEnter={() => setAboutUsOpen(true)}
                      onPointerLeave={() => setAboutUsOpen(false)}
                    >
                      {link.sublinks.map((sublink) => (
                        <DropdownMenuItem key={sublink.label} asChild>
                          <Link href={sublink.href}>{sublink.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ) : (
                <li key={link.href}>
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="hidden md:flex">
            <button className="join-btn"><Link href="/join-us">Join Us</Link></button>
          </div>

          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link
                href="/"
                className="flex items-center space-x-2 mb-6"
                onClick={() => setSheetOpen(false)}
              >
                <Heart className="h-6 w-6 text-primary" />
                <span className="font-bold">Hoca-africa</span>
              </Link>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.sublinks ? (
                      <div className="flex flex-col space-y-2">
                        <span className="font-semibold">{link.label}</span>
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.label}
                            href={sublink.href}
                            className="pl-4 text-muted-foreground"
                            onClick={() => setSheetOpen(false)}
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="font-semibold"
                        onClick={() => setSheetOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Button asChild onClick={() => setSheetOpen(false)}>
                  <Link href="/join-us">Join Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}
export default HeaderPage;
