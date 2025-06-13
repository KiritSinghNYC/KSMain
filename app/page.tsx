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
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex items-center justify-center h-screen w-full overflow-hidden snap-start bg-[#eb7b55]">
        <div className="absolute top-8 left-0 w-full z-20 flex flex-row items-center justify-between px-10">
          <div className="flex items-center">
            <Image src="/kirit_singh_logo.png" alt="Kirit Singh Logo" width={56} height={56} className="object-contain mr-8" />
          </div>
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-lg font-semibold px-3 py-1 rounded transition-colors duration-200 ${pathname === link.href ? 'text-white bg-[#eb7b55]' : 'text-white hover:bg-[#eb7b55]/20'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <Image src="/nyc-skyline.jpg" alt="NYC Skyline" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-tight">KIRIT SINGH</h1>
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
            src={reelHover ? "/Kirit_singh_orange_reel.png" : "/reel.png"}
            alt="Scroll Down"
            width={80}
            height={80}
            className="opacity-80"
          />
        </div>
      </section>
      {/* Video Reel Section */}
      <section className="flex flex-col items-center justify-center h-screen w-full px-4 py-4 gap-4 snap-start bg-[#eb7b55]">
        <Image
          src="/kiritsingh_awards.png"
          alt="Awards"
          width={0}
          height={80}
          className="object-contain w-3/4 h-auto mb-2"
          sizes="75vw"
        />
        <div className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white p-8 flex items-center justify-center relative">
          <iframe
            src="https://player.vimeo.com/video/1036458739?h=dde68b6347&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="1920"
            height="900"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Kirit_Showreel_2025"
            className="w-full h-full rounded-2xl"
            allowFullScreen
          />
        </div>
      </section>
      {/* About & Logos Section */}
      <section className="flex flex-col items-center justify-center h-screen w-full bg-[#eb7b55] px-4 py-20 snap-start">
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 w-full max-w-7xl mx-auto">
          {/* Headshot */}
          <div className="flex flex-col items-center">
            <div className="w-[380px] h-[380px] rounded-full overflow-hidden bg-[#1ed6b5] shadow-lg mb-0">
              <Image src="/Kirit_Singh-orange-portait.png" alt="Kirit Singh" width={380} height={380} className="object-cover w-full h-full" />
            </div>
          </div>
          {/* Text and Logos */}
          <div className="flex flex-col items-center md:items-start max-w-2xl w-full">
            <p className="text-2xl md:text-3xl font-medium text-white leading-snug mb-12 text-center md:text-left">
              I produce high-impact content for television networks and Fortune 500 companies, featured on CNN, ESPN, and FOX. From branded content to documentaries, I lead international productions from pitch to delivery, combining creative vision with flawless execution to deliver work that resonates.
            </p>
            <Image src="/kiritsingh_logos.png" alt="Company Logos" width={720} height={144} className="object-contain max-w-2xl w-full" />
          </div>
        </div>
      </section>
      {/* Portfolio Grid Section */}
      <section className="w-full bg-white px-4 py-20 snap-start">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            {portfolioProjects.map((project, i) => (
              <div key={project.vimeoId} className="flex flex-col items-center">
                <div
                  className="w-full aspect-square bg-gray-100 overflow-hidden shadow group cursor-pointer relative"
                  onClick={() => {
                    setSelectedVimeoId(project.vimeoId);
                    setModalOpen(true);
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open video for ${project.title}`}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setSelectedVimeoId(project.vimeoId); setModalOpen(true); } }}
                >
                  <div className="relative w-full h-0 pb-[100%]">
                    <Image
                      src={`/website_thumbnails/${project.thumbnail}`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
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
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10 bg-black bg-opacity-40 rounded-full w-10 h-10 flex items-center justify-center"
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