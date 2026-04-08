"use client";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Digital Claw
            </h2>

            <p className="text-gray-400 text-sm">
              We build high-performing digital products and growth systems
              for startups and modern businesses.
            </p>
          </div>
          {/* SERVICES */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Software Development</li>
              <li>Web Design</li>
              <li>SEO & Marketing</li>
              <li>Social Media Ads</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/price">Pricing</Link></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#work">Work</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>hello@digitalclaw.com</li>
              <li>+234 XXX XXX XXXX</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <span>© {new Date().getFullYear()} Digital Claw</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Twitter</span>
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;