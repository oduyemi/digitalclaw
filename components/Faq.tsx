"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What services does Digital Claw offer?",
    answer:
      "We provide end-to-end digital solutions including custom software development, web & mobile apps, UI/UX design, and data-driven digital marketing strategies to help businesses scale.",
  },
  {
    id: 2,
    question: "How long does it take to build a project?",
    answer:
      "Timelines vary based on complexity. Simple websites can take 1–2 weeks, while full-scale applications or marketing campaigns may take several weeks. We always provide a clear roadmap upfront.",
  },
  {
    id: 3,
    question: "Do you work with startups or only established companies?",
    answer:
      "Both. We specialize in helping early-stage startups launch quickly and also partner with growing businesses to scale their digital infrastructure and marketing performance.",
  },
  {
    id: 4,
    question: "What makes Digital Claw different?",
    answer:
      "We combine technical excellence with growth-focused thinking. That means we don’t just build products — we build solutions designed to attract users, drive engagement, and increase revenue.",
  },
  {
    id: 5,
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes. We provide continuous support, updates, and performance optimization to ensure your product or campaign keeps delivering results long after launch.",
  },
  {
    id: 6,
    question: "Can you handle both development and marketing?",
    answer:
      "Absolutely. Our strength lies in bridging the gap between development and marketing — ensuring your product is not only built well but also positioned to succeed in the market.",
  },
];

const Faq: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1); // first open by default

  const toggleFAQ = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="Faq bg-[#052161] text-white" id="faq">
      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Got Questions?
            <br />
            <span className="text-cyan-400">We’ve Got Answers.</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Everything you need to know about working with Digital Claw — from
            product development to scaling your digital presence.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border border-white/10 transition-all duration-300
                ${
                  isOpen
                    ? "bg-white/5 shadow-xl backdrop-blur-lg"
                    : "bg-white/0 hover:bg-white/5"
                }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    
                    {/* NUMBER */}
                    <span className="text-cyan-400 font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* TEXT */}
                    <span className="text-base md:text-lg font-medium">
                      {item.question}
                    </span>
                  </div>

                  {/* ICON */}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-cyan-400" : "text-gray-400"
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed text-sm md:text-base">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Still have questions?
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full transition-all">
            Contact Digital Claw
          </button>
        </div>

      </div>
    </section>
  );
};

export default Faq;