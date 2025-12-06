"use client";

import Link from "next/link";
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

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isAboutUsOpen, setAboutUsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block font-headline">Hoca-africa</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) =>
              link.sublinks ? (
                <DropdownMenu
                  key={link.label}
                  open={isAboutUsOpen}
                  onOpenChange={setAboutUsOpen}
                >
                  <DropdownMenuTrigger
                    className="flex items-center gap-1 outline-none"
                    onPointerEnter={() => setAboutUsOpen(true)}
                    onPointerLeave={() => setAboutUsOpen(false)}
                  >
                    {link.label}
                    {isAboutUsOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
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
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <Button asChild>
            <Link href="/join-us">Join Us</Link>
          </Button>
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
