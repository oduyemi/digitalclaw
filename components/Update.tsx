"use client";

import React, { useContext, useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { TestimonyContext } from "../contexts/TestimonyContext";

// Images
import arrowE from "@/public/img/Arrow 4.png";
import womanWriting from "@/public/img/woman-writing-on-paper-3228878.png";

const Update: React.FC = () => {
  const { updateTestimony } = useContext(TestimonyContext);

  const [formData, setFormData] = useState({
    q: "",
    t: "",
    p: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { className, value } = e.target;

    if (className.includes("inp-quote")) {
      setFormData((prev) => ({ ...prev, q: value }));
    } else if (className.includes("inp-testifier")) {
      setFormData((prev) => ({ ...prev, t: value }));
    } else if (className.includes("inp-position")) {
      setFormData((prev) => ({ ...prev, p: value }));
    }
  };

  const updateQuote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateTestimony(
      [formData.q], // keep your original API shape
      [formData.t],
      [formData.p]
    );

    // optional reset
    setFormData({ q: "", t: "", p: "" });
  };

  return (
    <div className="Update" id="contactus">
      <div className="contact-form">
        <div className="contact-form-block">
          
          {/* LEFT SIDE */}
          <div className="explain">
            <div className="explain-div">
              <h1>
                Building stellar <br /> websites for early startups
              </h1>

              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>

            <Image
              src="/images/woman-writing-on-paper-3228878.png"
              alt="Someone writing"
              width={60}
              height={60}
              className="explain-img"
            />
          </div>

          {/* FORM */}
          <div className="actual-form">
            <div className="actual-form-block">
              <div className="formhead">
                <h3>Update Testimony</h3>
                <p>
                  This is actually a contact page but reused for testimonials.
                </p>
              </div>

              <form className="contact-us-form" onSubmit={updateQuote}>
                <input
                  type="text"
                  placeholder="Enter Testimony"
                  className="inp-quote inp"
                  value={formData.q}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="Enter Testifier Name"
                  className="inp-testifier inp"
                  value={formData.t}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="Enter Testifier Position"
                  className="inp-position inp"
                  value={formData.p}
                  onChange={handleChange}
                />

                <button type="submit" className="update-btn">
                  Update Testimony
                </button>

                <div className="getin-contact">
                  Get in touch with us{" "}
                  <Image src="/images/Arrow4.png" alt="arrow" width={16} height={16} />
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Update;