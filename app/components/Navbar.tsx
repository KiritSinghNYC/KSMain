"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  // Determine if we are on About or Contact for orange links
  const isAboutOrContact = pathname === '/about' || pathname === '/contact';
  return (
    <div className="relative w-full">
      <div className="absolute top-2 md:top-8 left-0 w-full z-20 flex flex-col md:flex-row items-center md:justify-between px-2 md:px-10">
        {/* Logo: hidden on mobile, visible on desktop */}
        <div className="hidden md:flex items-center w-full md:w-auto justify-start">
          <Image
            src="/kirit_singh_logo.png"
            alt="Kirit Singh Logo"
            width={56}
            height={56}
            className="object-contain mr-8"
          />
        </div>
        {/* Nav links: centered on mobile, right on desktop */}
        <div className="flex justify-center space-x-4 md:space-x-6 w-full md:w-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base md:text-lg font-semibold px-3 py-2 rounded transition-colors duration-200 min-h-[40px] 
                ${isAboutOrContact
                  ? pathname === link.href
                    ? 'text-[#eb7b55] bg-[#eb7b55]/10 md:text-white md:bg-[#eb7b55]'
                    : 'text-[#eb7b55] hover:bg-[#eb7b55]/10 md:text-white md:hover:bg-[#eb7b55]/20'
                  : pathname === link.href
                    ? 'text-white bg-[#eb7b55]'
                    : 'text-white hover:bg-[#eb7b55]/20'}
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 