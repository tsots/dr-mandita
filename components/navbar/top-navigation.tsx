import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MobileNavbarWrapper, NavLinkItem } from "./index";

const navItems = [
  {
    id: 1,
    href: "/",
    label: "Home",
    isExternal: false,
  },
  {
    id: 2,
    href: "/",
    label: "About",
    isExternal: false,
  },

  {
    id: 3,
    href: "/",
    label: "Blog",
    isExternal: false,
  },
];

export function TopNavigation() {
  return (
    <header className="flex fixed gap-10 py-4 container">
      <div className="flex items-center gap-10">
        <nav className="hidden items-center md:flex justify-end">
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
        <div className="hidden items-center gap-2 md:flex">
          <Button size="lg" asChild className="mt-2 w-full">
            <Link href="/" className="cursor-pointer">
              CTA
            </Link>
          </Button>
        </div>
      </div>
      <MobileNavbarWrapper>
        <div className="rounded-b-lg bg-background py-4 text-foreground shadow-xl">
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
    </header>
  );
}
