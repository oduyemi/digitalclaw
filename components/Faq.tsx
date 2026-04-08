"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What services does Digital Claw offer?",
    answer:
      "We provide end-to-end digital solutions including software development, web design, and growth-focused marketing strategies.",
  },
  {
    id: 2,
    question: "How long does a project take?",
    answer:
      "Timelines depend on complexity. Websites take 1–2 weeks, while full platforms may take several weeks with clear milestones.",
  },
  {
    id: 3,
    question: "Do you work with startups?",
    answer:
      "Yes. We help startups launch fast and scale efficiently, while also supporting growing businesses.",
  },
  {
    id: 4,
    question: "What makes Digital Claw different?",
    answer:
      "We combine development + marketing — so your product is built to perform, not just exist.",
  },
];

const Faq: React.FC = () => {
  const [active, setActive] = useState<number | null>(1);

  return (
    <section id="faq" className="py-24 bg-[#052161]">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl text-white md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-4">
            Everything you need to know about working with Digital Claw.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = active === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white border border-gray-200 rounded-2xl transition"
              >
                <button
                  onClick={() =>
                    setActive(isOpen ? null : faq.id)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-medium text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 px-6 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">
            Still have questions?
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-xl">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;