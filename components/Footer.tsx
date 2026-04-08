"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { scroller } from "react-scroll";


const Footer: React.FC = () => {
  const scrollTo = (target: string) => {
    scroller.scrollTo(target, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="Footer" id="footer">
      {/* SOCIAL */}
      <div className="social">
        <div className="social-block">
          <div className="social-head">
            <h2>{"{finsweet"}</h2>

            <span>
              We are always open to discuss your project and improve your online
              presence.
            </span>

            <div className="social-head-down">
              <div>
                <span>Email me at</span>
                <br />
                <span>contact@website.com</span>
              </div>

              <div>
                <span>Call Us</span>
                <br />
                <span>0927 6677 89075</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="social-tail">
            <h2>Lets Talk!</h2>

            <span>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </span>

            <div className="social-tail-icon">
              {["/images/fb.png", "/images/twitter.png", "images/ig.png", "/images/linkedin.png"].map((icon, i) => (
                <div className="social-icon" key={i}>
                  <Image src="/images/Icon.png" alt="social" width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER NAV */}
      <div className="footer-block">
        <div className="copy">
          <span>Copyright 2022, Finsweet.com</span>
        </div>

        <div className="footnav">
          <ul className="footerul">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li onClick={() => scrollTo("Testimonies")}>About us</li>

            <li onClick={() => scrollTo("features")}>Features</li>

            <li>
              <Link href="/price">Pricing</Link>
            </li>

            <li onClick={() => scrollTo("faq")}>FAQ</li>

            <li onClick={() => scrollTo("blog")}>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;