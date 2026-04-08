"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { scroller } from "react-scroll";
import Testimonies from "./Testimonies";
import Update from "./Update";
import Faq from "./Faq";

type AnimateState = {
  haveLoad: boolean;
  animatee?: string;
};

const Home: React.FC = () => {
  const executeScroll = () => {
    scroller.scrollTo("ourWork", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const [animate, setAnimate] = useState<AnimateState[]>([
    { haveLoad: false, animatee: "fade-animation" },
  ]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate((prev) => [
        ...prev,
        { haveLoad: !prev[0].haveLoad },
      ]);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="Home">
      {/* HERO */}
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            We build digital products that 
            <span className="text-[#A675A1]"> grow your business</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Digital Claw delivers high-performing software, websites, and marketing systems 
            designed to scale startups and modern brands.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#052161] text-white px-6 py-3 rounded-xl">
              Get Started
            </button>

            <button className="border px-6 py-3 rounded-xl border-[#052161] text-[#052161]">
              View Work
            </button>
          </div>
        </div>

        {/* IMAGE */}
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

      {/* TRUST SECTION */}
      <div className="py-20 border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-10">
            Trusted by fast-growing companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
            {[
              "Google",
              "Slack",
              "Shopify",
              "Stripe",
            ].map((brand, i) => (
              <div
                key={i}
                className="text-gray-400 font-semibold text-xl hover:text-black transition duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#052161]">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Software Development",
                desc: "Custom web and mobile applications built for performance and scalability.",
              },
              {
                title: "Web Design",
                desc: "Modern, conversion-focused UI/UX design that elevates your brand.",
              },
              {
                title: "SEO & Digital Marketing",
                desc: "Rank higher, get traffic, and convert users into paying customers.",
              },
              {
                title: "Social Media Ads",
                desc: "Data-driven ad campaigns that generate leads and revenue.",
              },
              {
                title: "Social Media Management",
                desc: "Content, strategy, and growth across all major platforms.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW WE WORK */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#052161]">Our Process</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {["Strategy", "Design", "Development", "Launch"].map((step, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-[#A675A1] mb-3">
                  0{i + 1}
                </div>
                <h4 className="font-semibold">{step}</h4>
                <p className="text-sm text-gray-500 mt-2">
                  We ensure quality at every stage of your product journey.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CASE STUDIES */}
      <div id="work" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#052161]">
            Case Studies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <Image
                  src="/images/Card.png"
                  alt="project"
                  width={600}
                  height={400}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-[#052161]">
                    E-commerce Growth Platform
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Built a scalable platform that increased conversions by 120%.
                  </p>
                  <button className="mt-4 text-[#A675A1] text-sm">
                    View Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR WORK */}
      <div id="ourWork" className="py-24 text-[#052161]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Work
            </h2>
            <button className="text-sm text-gray-500 hover:text-black transition">
              View All →
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "/images/Card.png",
              "/images/Card1.png",
              "/images/Rectangle1313.png",
            ].map((img, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={img}
                  alt="project"
                  width={500}
                  height={400}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      SaaS Dashboard
                    </h3>
                    <p className="text-gray-200 text-sm">
                      Product design & development
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-[#052161]">
            Loved by founders & teams
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition text-left"
              >
                <p className="text-gray-600 mb-6">
                  “Digital Claw transformed our online presence. 
                  Our conversions doubled within months.”
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <span className="text-sm text-gray-500">
                      Founder, Startup Inc.
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Testimonies />
          </div>
        </div>
      </div>

      <Faq />
      <Update />

      {/* BLOG */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#052161]">
              Insights & Articles
            </h2>
            <button className="text-sm text-gray-500 hover:text-black">
              View All →
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "/images/arabic-businessman-standing-on-street-and-using-laptop-9623794.png",
              "/images/office.png",
              "/images/apple-monitors-326518.png",
            ].map((img, i) => (
              <div
                key={i}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={img}
                    width={400}
                    height={300}
                    alt="blog"
                    className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs text-gray-400">
                    Jan 2024 • 5 min read
                  </span>
                  <h3 className="mt-2 font-semibold text-lg group-hover:text-purple-600 transition">
                    How we helped a startup scale to 100k users
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    Learn the strategies we used to design, build, and grow a fast-scaling product.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-[#052161] text-white text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to scale your business?
          </h2>
          <p className="mt-4 text-gray-300">
            Let Digital Claw build your next high-performing product.
          </p>
          <button className="mt-8 bg-white text-black px-8 py-3 rounded-xl">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;