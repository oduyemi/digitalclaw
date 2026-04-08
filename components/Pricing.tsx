"use client";
import React from "react";

const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Landing Page",
      price: "₦150000",
      desc: "Perfect for startups launching fast",
      highlight: false,
      features: [
        "Custom design",
        "Responsive layout",
        "Basic SEO setup",
        "1 revision",
      ],
    },
    {
      title: "Business Website",
      price: "₦300000",
      desc: "Best for growing brands",
      highlight: true,
      features: [
        "Multi-page website",
        "Advanced UI/UX",
        "SEO optimization",
        "Analytics integration",
        "Priority support",
      ],
    },
    {
      title: "Custom Project",
      price: "₦450000+",
      desc: "For complex & scalable systems",
      highlight: false,
      features: [
        "Full-stack development",
        "Custom integrations",
        "Performance optimization",
        "Ongoing support",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#052161]">
            Simple, transparent pricing
          </h1>

          <p className="text-gray-500 mt-4">
            Choose the perfect plan for your business growth.
          </p>
        </div>

        {/* PLANS */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border transition ${
                plan.highlight
                  ? "bg-[#052161] text-white shadow-xl scale-105"
                  : "bg-white text-black border-gray-200 hover:shadow-lg"
              }`}
            >
              {/* PLAN NAME */}
              <h3 className="text-xl font-semibold mb-2">
                {plan.title}
              </h3>

              <p
                className={`text-sm mb-6 ${
                  plan.highlight ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {plan.desc}
              </p>

              {/* PRICE */}
              <div className="text-4xl font-bold mb-6">
                {plan.price}
              </div>

              {/* FEATURES */}
              <ul className="space-y-3 mb-8 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    ✔ {feature}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className={`w-full py-3 rounded-xl font-medium transition ${
                  plan.highlight
                    ? "bg-white text-black hover:opacity-80"
                    : "bg-[#052161] text-white hover:opacity-80"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;