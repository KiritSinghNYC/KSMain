"use client";
import React from 'react';
import Image from 'next/image';

export default function ScrollDownArrow() {
  return (
    <div
      className="absolute bottom-8 left-12 z-20 flex flex-col items-center animate-bounce-slow cursor-pointer"
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <Image src="/reel.png" alt="Scroll Down" width={80} height={80} className="opacity-80" />
    </div>
  );
}

// Add the following to your globals.css or tailwind config for the slower bounce:
// @layer utilities {
//   .animate-bounce-slow {
//     animation: bounce 2.5s infinite;
//   }
// } 