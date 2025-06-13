"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {/* White Navbar */}
      <div className="relative w-full">
        <div className="absolute top-8 left-0 w-full z-20 flex flex-row items-center justify-between px-10">
          <div className="flex items-center">
            <Image src="/kirit_singh_logo.png" alt="Kirit Singh Logo" width={56} height={56} className="object-contain mr-8" />
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-lg font-semibold px-3 py-1 rounded transition-colors duration-200 text-[#eb7b55] hover:bg-[#eb7b55]/10">Home</Link>
            <Link href="/about" className="text-lg font-semibold px-3 py-1 rounded transition-colors duration-200 text-[#eb7b55] hover:bg-[#eb7b55]/10">About</Link>
            <Link href="/contact" className="text-lg font-semibold px-3 py-1 rounded transition-colors duration-200 text-[#eb7b55] hover:bg-[#eb7b55]/10">Contact</Link>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-4">
        {/* Photo */}
        <div className="flex items-center justify-center w-full md:w-auto mb-10 md:mb-0 md:mr-16">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-white shadow-lg">
            <Image src="/Kirit_Singh-orange-portait.png" alt="Kirit Singh" width={320} height={320} className="object-cover w-full h-full" />
          </div>
        </div>
        {/* Text */}
        <div className="flex flex-col items-center md:items-start max-w-2xl w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#eb7b55] mb-6 text-center md:text-left">Kirit like spirit.</h1>
          <p className="mb-6 text-lg md:text-2xl text-black text-center md:text-left">
            I specialize in creating compelling non-fiction videos for television, media outlets, and Fortune 500 companies. My work has been showcased on CNN, ESPN, and FOX.
          </p>
          <p className="mb-6 text-lg md:text-2xl text-black text-center md:text-left">
            The projects I work on range from sports documentaries to interviewing CEOs. I love capturing and celebrating human connection through storytelling.
          </p>
          <p className="mb-6 text-lg md:text-2xl text-black text-center md:text-left">
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