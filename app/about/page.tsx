"use client";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Navbar />

      {/* About Me Section */}
      <section className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-4">
        {/* Photo */}
        <div className="flex items-center justify-center w-full md:w-auto mb-6 md:mb-0 md:mr-16">
          <div className="w-28 h-28 md:w-80 md:h-80 rounded-full overflow-hidden bg-white shadow-lg">
            <Image src="/Kirit_Singh-orange-portait.png" alt="Kirit Singh" width={112} height={112} className="object-cover w-full h-full" />
          </div>
        </div>
        {/* Text */}
        <div className="flex flex-col items-center md:items-start max-w-2xl w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#eb7b55] mb-2 md:mb-6 text-center md:text-left">Kirit like spirit.</h1>
          <p className="mb-2 md:mb-6 text-lg md:text-2xl text-black text-center md:text-left">
            I specialize in creating compelling non-fiction videos for television, media outlets, and Fortune 500 companies. My work has been showcased on CNN, ESPN, and FOX.
          </p>
          <p className="mb-2 md:mb-6 text-lg md:text-2xl text-black text-center md:text-left">
            The projects I work on range from sports documentaries to interviewing CEOs. I love capturing and celebrating human connection through storytelling.
          </p>
          <p className="mb-2 md:mb-6 text-lg md:text-2xl text-black text-center md:text-left">
            I am both a creative filmmaker and a logistics expert. My dual expertise allows me to craft visually stunning narratives while ensuring seamless execution of every project. I bring a wealth of knowledge and experience to each project and am a team leader with a holistic approach.
          </p>
          <p className="mb-0 text-lg md:text-2xl text-black text-center md:text-left">
            Pushing the envelope in what is possible in any given project through problem solving is my super power.
          </p>
        </div>
      </section>
    </div>
  );
} 