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
    href: "/about",
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
    "flex items-center justify-between gap-10 py-4 px-4 sm:px-6 fixed w-full top-0 h-20 z-50 bg-[url('/banner.svg')] border-b-[#B8812E] border-b-2";
  let navBarClasses =
    scrollY > 10
      ? `${defaultClasses} bg-black`
      : `${defaultClasses} bg-tranparent`;

  return (
    <header id="navbar" className={navBarClasses}>
      <div className="flex justify-between items-center w-full max-w-[1160px] mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-heading text-sm">
            <Image
              src="/assets/images/Logo.svg"
              width={238}
              height={34}
              alt="logo"
            />
          </span>
        </Link>
        <div className="flex items-center gap-10">
          <nav className="normal hidden items-center gap-4 text-sm lg:flex justify-end text-white ">
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
          <div className="rounded-b-lg bg-background py-4 container text-white shadow-xl">
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
              <Button
                size="lg"
                asChild
                className="mt-2 w-full bg-black hover:bg-white hover:text-slate-900"
              >
                <Link href="/" className="cursor-pointer">
                  Book an appointment
                </Link>
              </Button>
            </nav>
          </div>
        </MobileNavbarWrapper>
      </div>
    </header>
  );
}
