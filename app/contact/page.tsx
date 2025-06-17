"use client";
import Link from "next/link";
import Navbar from '../components/Navbar';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white font-sans">
      <Navbar />
      {/* Contact Section (restored, no snap scrolling) */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 bg-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#eb7b55] mb-6 text-center">Let's connect!</h1>
        <p className="text-lg md:text-2xl text-gray-800 mb-10 text-center max-w-xl">
          Reach out for collaborations, project inquiries, or just to say hello.
        </p>
        <div className="bg-[#eb7b55] rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-md">
          <div className="mb-6 w-full flex flex-col items-center">
            <span className="text-white text-lg font-semibold">Phone</span>
            <a href="tel:13474598608" className="text-2xl font-bold text-white hover:underline mt-1">347 459 8608</a>
          </div>
          <div className="mb-6 w-full flex flex-col items-center">
            <span className="text-white text-lg font-semibold">Email</span>
            <a href="mailto:hello@kiritsingh.com" className="text-2xl font-bold text-white hover:underline mt-1">hello@kiritsingh.com</a>
          </div>
          <div className="w-full flex flex-col items-center">
            <span className="text-white text-lg font-semibold">LinkedIn</span>
            <a href="https://www.linkedin.com/in/kirit-singh/" target="_blank" rel="noopener noreferrer" className="flex items-center text-2xl font-bold text-white hover:underline mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 mr-2">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
              </svg>
              kirit-singh
            </a>
          </div>
        </div>
      </main>
    </div>
  );
} 