"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import ScrollDownArrow from './components/ScrollDownArrow';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const portfolioProjects = [
  {
    title: "Spinbrush",
    thumbnail: "01_Kirit_Singh_spinbrush.png",
    vimeoId: "1091926132",
    aspectRatio: "portrait"
  },
  {
    title: "NBA Clutch",
    thumbnail: "02_Kirit_Singh_CLUTCH.png",
    vimeoId: "1018439522"
  },
  {
    title: "Accenture x Fortune",
    thumbnail: "03_Kirit_Singh_F500.png",
    vimeoId: "1018439454"
  },
  {
    title: "Citadel",
    thumbnail: "04_Kirit_Singh_joon.png",
    vimeoId: "776631005"
  },
  {
    title: "Goldman Sachs",
    thumbnail: "05_Kirit_Singh_marcus.png",
    vimeoId: "731810349"
  },
  {
    title: "Color",
    thumbnail: "06_Kirit_Singh_color.png",
    vimeoId: "969426263"
  },
  {
    title: "Hulu x CNN",
    thumbnail: "07_Kirit_Singh_cnnhulu.jpg",
    vimeoId: "545100710"
  },
  {
    title: "The Greatest Fight",
    thumbnail: "08_Kirit_Singh_BHOP.png",
    vimeoId: "482682027"
  },
  {
    title: "Johnson & Johnson",
    thumbnail: "09_Kirit_Singh_JJ.png",
    vimeoId: "1018439522"
  },
  {
    title: "Great Big Story",
    thumbnail: "10_Kirit_Singh_CNN.png",
    vimeoId: "969404535"
  },
  {
    title: "Citadel",
    thumbnail: "11_Kirit_Singh_citadel.png",
    vimeoId: "792643232"
  },
  {
    title: "Sothebys x WSJ",
    thumbnail: "12_Kirit_Singh_WSJTC.png",
    vimeoId: "312263096"
  },
  {
    title: "Deutsche Bank",
    thumbnail: "13_Kirit_Singh_db.png",
    vimeoId: "314803641"
  },
  {
    title: "FOX Sports",
    thumbnail: "14_Kirit_Singh_pbc.png",
    vimeoId: "482688184"
  },
  {
    title: "NHL",
    thumbnail: "15_Kirit_Singh_NHL.png",
    vimeoId: "362076200"
  },
  // ...more projects
];

function OrangeBarText() {
  return (
    <span className="text-xl md:text-2xl font-medium">
      Senior Producer <span className="text-[#eb7b55]">|</span> Line Producer
    </span>
  );
}

export default function Home() {
  const pathname = usePathname();
  const [reelHover, setReelHover] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVimeoId, setSelectedVimeoId] = useState<string | null>(null);
  const selectedProject = portfolioProjects.find(p => p.vimeoId === selectedVimeoId);
  const heroRef = React.useRef<HTMLDivElement>(null);
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory w-full overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex items-center justify-center h-screen w-full overflow-hidden bg-[#eb7b55] snap-start">
        <div className="absolute top-2 md:top-8 left-0 w-full z-20 flex flex-row items-center justify-between px-2 md:px-10">
          {/* Remove logo on mobile, keep on desktop */}
          <div className="flex items-center justify-center md:justify-start w-auto md:w-full">
            <Image 
              src="/kirit_singh_logo.png" 
              alt="Kirit Singh Logo" 
              width={56} 
              height={56} 
              className="object-contain mr-8 hidden md:block"
            />
          </div>
          {/* Center nav links on mobile, keep original on desktop */}
          <div className="flex justify-center md:justify-end space-x-4 md:space-x-6 w-auto md:w-full">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-base md:text-lg font-semibold px-3 py-2 rounded transition-colors duration-200 min-h-[40px] ${pathname === link.href ? 'text-white bg-[#eb7b55]' : 'text-white hover:bg-[#eb7b55]/20'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <Image src="/Kirit_singh_nyc-skyline.jpg" alt="NYC Skyline" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-7xl font-heading font-bold mb-4 tracking-tight">KIRIT SINGH</h1>
          <OrangeBarText />
        </div>
        {/* Custom Reel Arrow with hover swap */}
        <div
          className="absolute bottom-8 left-12 z-20 flex flex-col items-center animate-bounce-slow cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          onMouseEnter={() => setReelHover(true)}
          onMouseLeave={() => setReelHover(false)}
        >
          <Image
            src={reelHover ? "/Kirit_singh_orange_reel.png" : "/Kirit_singh_reel.png"}
            alt="Scroll Down"
            width={80}
            height={80}
            className="opacity-80"
          />
        </div>
      </section>
      {/* Video Reel Section */}
      <section className="flex flex-col items-center justify-center h-screen w-full px-2 md:px-4 py-4 gap-2 md:gap-4 bg-[#eb7b55] snap-start overflow-hidden">
        <Image
          src="/kiritsingh_awards.png"
          alt="Awards"
          width={0}
          height={80}
          className="object-contain w-4/5 md:w-3/4 h-auto mb-2"
          sizes="(max-width: 768px) 90vw, 75vw"
        />
        <div className="w-full max-w-6xl aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-white p-2 md:p-8 flex items-center justify-center relative">
          <iframe
            src="https://player.vimeo.com/video/1036458739?h=dde68b6347&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="1920"
            height="900"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Kirit_Showreel_2025"
            className="w-full h-full rounded-xl md:rounded-2xl"
            allowFullScreen
          />
        </div>
      </section>
      {/* About & Logos Section */}
      <section className="flex flex-col items-center justify-center h-screen w-full bg-[#eb7b55] px-4 py-12 md:py-20 snap-start relative">
        {/* Awards image - mobile only, edge-to-edge, top third */}
        <div className="block md:hidden absolute top-[10vh] left-0 w-full z-10">
          <Image
            src="/kiritsingh_awards.png"
            alt="Awards"
            width={0}
            height={80}
            className="w-full h-auto object-cover m-0 p-0"
            sizes="100vw"
            priority
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 w-full max-w-7xl mx-auto h-full">
          {/* Headshot */}
          <div className="flex flex-col items-center">
            <div className="w-[140px] h-[140px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden bg-[#1ed6b5] shadow-lg mb-0">
              <Image 
                src="/Kirit_Singh-orange-portait.png" 
                alt="Kirit Singh" 
                width={380} 
                height={380} 
                className="object-cover w-full h-full" 
              />
            </div>
          </div>
          {/* Text and Logos */}
          <div className="flex flex-col items-center md:items-start max-w-2xl w-full px-4 md:px-0">
            <p className="text-base md:text-3xl font-medium text-white leading-relaxed md:leading-snug mb-8 md:mb-12 text-center md:text-left">
              I produce high-impact content for television networks and Fortune 500 companies, featured on CNN, ESPN, and FOX. From branded content to documentaries, I lead international productions from pitch to delivery, combining creative vision with flawless execution to deliver work that resonates.
            </p>
            <Image 
              src="/kiritsingh_logos.png" 
              alt="Company Logos" 
              width={720} 
              height={144} 
              className="object-contain max-w-full md:max-w-2xl w-full" 
              sizes="(max-width: 768px) 90vw, 50vw"
            />
          </div>
        </div>
      </section>
      {/* Portfolio Grid Section */}
      <section className="w-full bg-white px-4 py-20 snap-start relative">
        {/* Mobile-only scroll-to-top button */}
        <button
          type="button"
          className="fixed bottom-6 right-6 z-40 block md:hidden bg-[#eb7b55] text-white rounded-full shadow-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#eb7b55] transition-opacity"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 md:mb-10 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioProjects.map((project, i) => (
              <div key={project.vimeoId} className="flex flex-col items-center">
                <div
                  className="w-full aspect-square bg-gray-100 overflow-hidden shadow group cursor-pointer relative rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => {
                    setSelectedVimeoId(project.vimeoId);
                    setModalOpen(true);
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open video for ${project.title}`}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setSelectedVimeoId(project.vimeoId); setModalOpen(true); } }}
                  style={{ minHeight: 120 }}
                >
                  <div className="relative w-full h-0 pb-[100%]">
                    <Image
                      src={`/website_thumbnails/${project.thumbnail}`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 90vw, 33vw"
                    />
                  </div>
                </div>
                <div className="mt-0 pb-2 text-center font-semibold text-base md:text-base text-gray-800 w-full">
                  {project.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Lightbox Modal */}
      {modalOpen && selectedVimeoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setModalOpen(false)}>
          <div className="relative w-full max-w-3xl mx-auto px-4" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-4xl md:text-3xl font-bold z-10 bg-black bg-opacity-40 rounded-full w-12 h-12 md:w-10 md:h-10 flex items-center justify-center"
              onClick={() => setModalOpen(false)}
              aria-label="Close video modal"
            >
              &times;
            </button>
            <div className={`
              ${selectedProject?.aspectRatio === 'portrait' 
                ? 'aspect-[9/16] max-h-[60vh] mx-auto' 
                : 'aspect-video'}
              w-full bg-black rounded-xl overflow-hidden
            `}>
              <iframe
                src={`https://player.vimeo.com/video/${selectedVimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Vimeo Video"
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 