"use client";

import { Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";

import { useLockBody } from "@/lib/hooks/use-lock-body";

function MobileMenu({
  onClose,
  children,
}: Readonly<{ onClose: () => void; children: ReactNode }>) {
  useLockBody();

  return (
    <button
      className="fixed bg-blue-950 left-0 top-16 w-full z-50 animate-in lg:hidden"
      onClick={onClose}
    >
      {children}
    </button>
  );
}

export function MobileNavbarWrapper({
  children,
}: {
  readonly children: ReactNode;
}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <button
        className="flex lg:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <X /> : <Menu className="text-white" />}
      </button>
      {showMobileMenu && (
        <MobileMenu onClose={() => setShowMobileMenu(false)}>
          {children}
        </MobileMenu>
      )}
    </>
  );
}
