"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MobileNavbarWrapper, NavLinkItem } from "./index";

import { useScrollValue } from "@/hooks/useScrollValue";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  {
    id: 1,
    href: "/",
    label: "Home",
    isExternal: false,
  },
  {
    id: 2,
    href: "/#about",
    label: "About",
    isExternal: false,
  },

  {
    id: 3,
    href: "/#services",
    label: "Services",
    isExternal: false,
  },

  {
    id: 5,
    href: "/contact",
    label: "Contact Us",
    isExternal: false,
  },
  {
    id: 6,
    href: "/blogs",
    label: "Blogs",
    isExternal: false,
  },
];

export function Navbar() {
  const { scrollY } = useScrollValue();
  const [scrolled, setScrolled] = useState(false);

  const defaultClasses =
    "flex items-center justify-between gap-10 py-4 px-4 sm:px-6 md:px-8 fixed w-full top-0 h-20 z-50 bg-[url('/banner.svg')] border-b-[#B8812E] border-b-2";
  let navBarClasses =
    scrollY > 10
      ? `${defaultClasses} bg-black`
      : `${defaultClasses} bg-tranparent`;

  return (
    <header id="navbar" className={navBarClasses}>
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-heading text-xl font-bold">
            <Image
              src="/assets/images/Logo.svg"
              width={284.33}
              height={40.26}
              alt="logo"
            />
          </span>
        </Link>
        <div className="flex items-center gap-10">
          <nav className="normal hidden items-center gap-4 lg:flex md:gap-10 justify-end text-white font-semibold">
            {navItems.map((navItem) => (
              <NavLinkItem
                href={navItem.href}
                isExternal={navItem.isExternal}
                key={navItem.id}
              >
                {navItem.label}
              </NavLinkItem>
            ))}
          </nav>
        </div>
        <MobileNavbarWrapper>
          <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
            <nav className="flex flex-col gap-1 pt-2">
              {navItems.map((navItem) => (
                <NavLinkItem
                  href={navItem.href}
                  isExternal={navItem.isExternal}
                  key={navItem.id}
                >
                  {navItem.label}
                </NavLinkItem>
              ))}
              <Button size="lg" asChild className="mt-2 w-full">
                <Link href="/" className="cursor-pointer">
                  CTA
                </Link>
              </Button>
            </nav>
          </div>
        </MobileNavbarWrapper>
      </div>
    </header>
  );
}
