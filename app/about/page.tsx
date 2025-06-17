"use client";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Navbar />

      {/* About Me Section */}
      <section className="w-full flex flex-col items-center px-4 pt-4">
        {/* Photo */}
        <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-lg mt-2 mb-2">
          <Image src="/Kirit_Singh-orange-portait.png" alt="Kirit Singh" width={64} height={64} className="object-cover w-full h-full" />
        </div>
        {/* Text */}
        <div className="flex flex-col items-center max-w-2xl w-full">
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#eb7b55] mb-2 text-center">Kirit like spirit.</h1>
          <p className="mb-2 text-base md:text-2xl text-black text-center">
            I specialize in creating compelling non-fiction videos for television, media outlets, and Fortune 500 companies. My work has been showcased on CNN, ESPN, and FOX.
          </p>
          <p className="mb-2 text-base md:text-2xl text-black text-center">
            The projects I work on range from sports documentaries to interviewing CEOs. I love capturing and celebrating human connection through storytelling.
          </p>
          <p className="mb-2 text-base md:text-2xl text-black text-center">
            I am both a creative filmmaker and a logistics expert. My dual expertise allows me to craft visually stunning narratives while ensuring seamless execution of every project. I bring a wealth of knowledge and experience to each project and am a team leader with a holistic approach.
          </p>
          <p className="mb-0 text-base md:text-2xl text-black text-center">
            Pushing the envelope in what is possible in any given project through problem solving is my super power.
          </p>
        </div>
      </section>
    </div>
  );
} 