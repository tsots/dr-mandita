"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function activeClassName({ isActive }: { isActive: boolean }) {
  return isActive ? "text-foreground" : "text-muted-foreground";
}

const linkStyle =
  "flex cursor-pointer text-md transition-colors hover:text-foreground uppercase hover:text-[#B8812E]";

interface NavLinkItemProps {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
}
export function NavLinkItem(props: Readonly<NavLinkItemProps>) {
  const pathname = usePathname();
  const { href, children, isExternal = false } = props;
  console.log(pathname, href);
  const isActive = pathname.includes(href);
  return (
    <Link
      href={href}
      className={cn(linkStyle, activeClassName({ isActive }))}
      prefetch
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
    >
      {children}
    </Link>
  );
}
