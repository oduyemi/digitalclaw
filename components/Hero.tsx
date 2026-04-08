"use client";
import Image from "next/image";
import Link from "next/link";
import { scroller } from "react-scroll";



export const Hero = () => {
  const executeScroll = () => {
    scroller.scrollTo("ourWork", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          We build digital products that
          <span className="text-[#A675A1]"> grow your business</span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          Digital Claw delivers high-performing software, websites, and marketing systems designed to scale startups and modern brands.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="bg-[#052161] text-white px-6 py-3 rounded-xl">
            Get Started
          </button>
          <Link href="/#work">
          <button
            onClick={executeScroll}
            className="border px-6 py-3 rounded-xl border-[#052161] text-[#052161]"
          >
            View Work
          </button>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/images/Illustration.png"
          alt="hero"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  );
};

