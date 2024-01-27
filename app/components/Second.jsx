"use client";
import React, { useEffect } from "react";

const Second = () => {
  useEffect(() => {
    // Ensure that AOS is only initialized on the client side
    import("aos").then((AOS) => {
      AOS.init();
    });
  }, []);
  return (
    <>
      <div className="main w-screen flex-col h-screen flex items-center justify-center bg-white">
        <h1
          data-aos="zoom-out-left"
          data-aos-anchor-placement="top"
          data-aos-offset="200"
          data-aos-delay="50"
          className="text-zinc-800 text-[8vw] uppercase cursor-default "
        >
          I am Abhay Patel
        </h1>
        <p
          data-aos="zoom-out-right"
          data-aos-anchor-placement="top"
          data-aos-offset="200"
          data-aos-delay="50"
          className="text-center cursor-default md:text-[2vw] font-bold text-[4vw]"
        >
          Web Developer(part-time) and Cricket Enthusiast🏏(full-time)
        </p>
      </div>
    </>
  );
};

export default Second;
