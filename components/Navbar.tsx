"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { scroller } from "react-scroll";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (target: string) => {
    scroller.scrollTo(target, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <Image src="/images/logo/logo.png" alt="logo" width={40} height={40} />
          <span className="text-[#052161]">Digital Claw</span>
        </div>

        {/* DESKTOP */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <span onClick={() => scrollTo("services")} className="cursor-pointer hover:text-black">Services</span>
          <span onClick={() => scrollTo("work")} className="cursor-pointer hover:text-black">Work</span>
          <Link href="/price">Pricing</Link>
          <span onClick={() => scrollTo("faq")} className="cursor-pointer hover:text-black">FAQ</span>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("contact")}
            className="bg-[#052161] text-white px-5 py-2 rounded-full hover:opacity-80 transition"
          >
            Get Started
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4 shadow-lg">
          <div onClick={() => scrollTo("services")}>Services</div>
          <div onClick={() => scrollTo("work")}>Work</div>
          <Link href="/price">Pricing</Link>
          <div onClick={() => scrollTo("faq")}>FAQ</div>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full bg-black text-white py-3 rounded-xl"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;