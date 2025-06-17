"use client";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Navbar />

      {/* About Me Section */}
      <section className="w-full flex flex-col md:flex-row items-center md:items-center px-4 pt-24 md:pt-36 md:pb-16 md:gap-12 md:justify-center md:h-[calc(100vh-8rem)]">
        {/* Photo */}
        <div className="w-32 h-32 md:w-96 md:h-96 rounded-full overflow-hidden bg-white shadow-lg mt-2 mb-2 md:mt-0 md:mb-0 md:mr-12 flex-shrink-0 flex items-center justify-center">
          <Image src="/Kirit_Singh-orange-portait.png" alt="Kirit Singh" width={128} height={128} className="object-cover w-full h-full" />
        </div>
        {/* Text */}
        <div className="flex flex-col items-center md:items-start max-w-2xl w-full justify-center">
          <h1 className="text-2xl md:text-5xl font-extrabold text-[#eb7b55] mb-2 md:mb-8 text-center md:text-left">Kirit like spirit.</h1>
          <p className="mb-2 md:mb-6 text-base md:text-2xl text-black text-center md:text-left">
            I specialize in creating compelling non-fiction videos for television, media outlets, and Fortune 500 companies. My work has been showcased on CNN, ESPN, and FOX.
          </p>
          <p className="mb-2 md:mb-6 text-base md:text-2xl text-black text-center md:text-left">
            The projects I work on range from sports documentaries to interviewing CEOs. I love capturing and celebrating human connection through storytelling.
          </p>
          <p className="mb-2 md:mb-6 text-base md:text-2xl text-black text-center md:text-left">
            I am both a creative filmmaker and a logistics expert. My dual expertise allows me to craft visually stunning narratives while ensuring seamless execution of every project. I bring a wealth of knowledge and experience to each project and am a team leader with a holistic approach.
          </p>
          <p className="mb-0 text-base md:text-2xl text-black text-center md:text-left">
            Pushing the envelope in what is possible in any given project through problem solving is my super power.
          </p>
        </div>
      </section>
    </div>
  );
} 