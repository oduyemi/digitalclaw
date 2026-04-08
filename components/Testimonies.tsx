"use client";

import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { TestimonyContext } from "../contexts/TestimonyContext";

type Testimony = {
  quote: string;
  testifier: string;
  position: string;
};

const Testimonies: React.FC = () => {
  const { testimonies } = useContext(TestimonyContext);

  const [current, setCurrent] = useState<number>(0);

  const [shw, setShw] = useState<Testimony>({
    quote: "",
    testifier: "",
    position: "",
  });

  const count = useRef(0);

  // Set initial testimony
  useEffect(() => {
    if (testimonies.length > 0) {
      setShw(testimonies[0]);
    }
  }, [testimonies]);

  const setTestimony = (id: number) => {
    const item = testimonies[id];
    if (!item) return;

    setShw({
      quote: item.quote,
      testifier: item.testifier,
      position: item.position,
    });
  };

  // Auto slider
  useEffect(() => {
    if (testimonies.length === 0) return;

    const interval = setInterval(() => {
      if (count.current < testimonies.length - 1) {
        count.current += 1;
      } else {
        count.current = 0;
      }

      setCurrent(count.current);
      setTestimony(count.current);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonies]);

  const nextTestimony = () => {
    if (count.current < testimonies.length - 1) {
      count.current += 1;
    } else {
      count.current = 0;
    }

    setCurrent(count.current);
    setTestimony(count.current);
  };

  const previousTestimony = () => {
    if (count.current > 0) {
      count.current -= 1;
    } else {
      count.current = testimonies.length - 1;
    }

    setCurrent(count.current);
    setTestimony(count.current);
  };

  return (
    <div className="Testimonies">
      <div className="the-testimonies">
        
        {/* QUOTE */}
        <div className="each-testimony">
          <h3 className="testimony-quote">
            "{shw.quote}"
          </h3>
        </div>

        {/* TESTIFIER */}
        <div className="each-testifier">
          <div className="each-testifier-sec">
            
            <div className="testify-img">
              <Image
                src="/images/woman-in-collared-shirt-774909.png"
                alt="Person"
                width={50}
                height={50}
                className="testifier-pic"
              />
            </div>

            <div className="testifier-details">
              <span className="testifier-name">
                {shw.testifier}
              </span>
              <br />
              <span className="testifier-position">
                {shw.position}
              </span>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="next-testifier">
            <div className="angle" onClick={previousTestimony}>
              <span className="the-angle">
                <i className="fa fa-angle-left"></i>
              </span>
            </div>

            <div className="angle" onClick={nextTestimony}>
              <span className="the-angle">
                <i className="fa fa-angle-right"></i>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonies;