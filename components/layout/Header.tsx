"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white py-4 px-2 md:px-8 lg:px-12 xl:px-24 2xl:px-40 flex flex-col md:flex-row items-center justify-between sticky top-0 z-50">
      <div className="w-full md:w-auto flex flex-col items-start">
        <Link href="/">
          <Image
            src="/assets/logo-CxaRFLIf.png"
            alt="Bright Cements Logo"
            width={200}
            height={80}
            className="h-20 w-auto hover:cursor-pointer"
            priority
          />
        </Link>
      </div>

      <button
        className="md:hidden absolute right-4 top-6 z-20"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
        type="button"
      >
        <span
          className="block w-7 h-1 bg-purple-800 mb-1 rounded transition-all"
          style={{
            transform: menuOpen
              ? "rotate(45deg) translateY(8px)"
              : "none",
          }}
        />
        <span
          className={`block w-7 h-1 bg-purple-800 mb-1 rounded transition-all ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className="block w-7 h-1 bg-purple-800 rounded transition-all"
          style={{
            transform: menuOpen
              ? "rotate(-45deg) translateY(-8px)"
              : "none",
          }}
        />
      </button>

      <nav
        className={`flex-col md:flex-row gap-8 md:gap-8 md:flex md:static absolute right-0 top-full md:top-auto bg-gradient-to-b from-white to-blue-50 md:bg-none w-full md:w-auto px-4 md:px-0 py-4 md:py-0 shadow-md md:shadow-none z-10 transition-all duration-300 ${
          menuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        {NAV_LINKS.map((link) => {
          const isActive =
            link.to === "/"
              ? pathname === "/"
              : pathname.startsWith(link.to);

          return (
            <Link
              key={link.to}
              href={link.to}
              className={`text-lg font-bold transition-colors duration-200 ${
                isActive ? "text-[#5D187E]" : "text-[#4D4D4D]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
