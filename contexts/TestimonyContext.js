"use client";
import React, { createContext, useState } from "react";

export const TestimonyContext = createContext();

const TestimonyContextProvider = (props) => {
  const [testimonies, setTestimonies] = useState([
    {
      quote:
        "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
      testifier: "Jenny Wilson",
      position: "Vice President",
      id: 0,
    },
    {
      quote: "Mad stuff you got here",
      testifier: "Eluagu Eaglet",
      position: "Cleaner",
      id: 1,
    },
    {
      quote: "Alright alright, good job",
      testifier: "Achilike Adindu",
      position: "House boy",
      id: 2,
    },
  ]);

  const updateTestimony = (q, t, p) => {
    let testLength = testimonies.length;

    setTestimonies([
      ...testimonies,
      {
        quote: q,
        testifier: t,
        position: p,
        id: testLength + 1,
      },
    ]);
  };

  return (
    <TestimonyContext.Provider value={{ testimonies, updateTestimony }}>
      {props.children}
    </TestimonyContext.Provider>
  );
};

export default TestimonyContextProvider;