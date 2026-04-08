"use client";
import React from "react";
import Image from "next/image";
import Faq from "./Faq";

const Pricing: React.FC = () => {
  const plans = [
    {
      price: "$299",
      desc: "Per Design",
      title: "Landing Page",
      dark: false,
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
      ],
      disabled: ["Optimize hashtags", "Unlimited users"],
    },
    {
      price: "$399",
      desc: "Multi Design",
      title: "Website Page",
      dark: true,
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
    },
    {
      price: "$499 +",
      desc: "Per Design",
      title: "Complex Project",
      dark: false,
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
        "Assist and help",
      ],
    },
  ];

  return (
    <div className="Pricing">
      <div className="pricing">
        <div className="pricing-block">
          
          {/* HEADER */}
          <div className="pricing-head">
            <h1>Our Pricing Plans</h1>
            <span>
              When you’re ready to go beyond prototyping in Figma, Webflow is ready to help.
            </span>
          </div>

          {/* PLANS */}
          <div className="pricing-tail">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={plan.dark ? "pricing-darkblck" : "pricing-whiteblck"}
              >
                <div className="price-space">
                  
                  {/* PRICE */}
                  <div className="amount-block">
                    <span className="amount">{plan.price}</span>
                    <span
                      className={
                        plan.dark ? "amount-des-drk" : "amount-des"
                      }
                    >
                      {plan.desc}
                    </span>
                  </div>

                  {/* TITLE */}
                  <div className="price-type">
                    <span className="type-name">{plan.title}</span>
                    <span className="type-des">
                      When you're ready to go beyond prototyping in Figma.
                    </span>
                  </div>

                  {/* FEATURES */}
                  <div className="price-features">
                    {plan.features.map((feature, idx) => (
                      <div className="each-feature" key={idx}>
                        <Image
                          src="/images/Pointer.png"
                          alt="Pointer"
                          width={16}
                          height={16}
                        />
                        <div>{feature}</div>
                      </div>
                    ))}

                    {plan.disabled?.map((feature, idx) => (
                      <div
                        className="each-feature"
                        key={idx}
                        style={{ opacity: 0.4 }}
                      >
                        <Image
                          src="/images/Pointer1.png"
                          alt="Pointer"
                          width={16}
                          height={16}
                        />
                        <div>{feature}</div>
                      </div>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <div
                    className={
                      plan.dark ? "price-btn-drk" : "price-btn-whi"
                    }
                  >
                    Get Started
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Faq />
      <br />
      <br />
    </div>
  );
};

export default Pricing;