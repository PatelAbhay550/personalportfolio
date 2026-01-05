"use client";
import Image from "next/image";
import React, { useEffect } from "react"; // Import your MouseFollower component
import MouseFollower from "./MouseFollower";

const Forth = () => {
  return (
    <>
      <MouseFollower />
      <div className="main w-screen overflow-hidden h-screen md:flex-row flex-col flex items-center bg-white">
        <div className="left flex overflow-hidden cursor-default md:p-24 p-7 flex-col text-zinc-800 md:w-[50%] w-full h-[50%] md:h-full">
          <h2
            data-aos="zoom-out-right"
            data-aos-anchor-placement="top"
            data-aos-offset="200"
            data-aos-delay="50"
            className="md:text-[10vh] text-[4vh] font-bold uppercase"
          >
            Vid-Ab
          </h2>
          <p
            data-aos="zoom-out-left"
            data-aos-anchor-placement="top"
            data-aos-offset="200"
            data-aos-delay="50"
            className="text-zinc-800/80 tracking-tight leading-5 relative z-[990000]"
          >
            A casual video player, "Vidab"provides all video streaming features
            like upload share comment and engage!
          </p>
          <p
            data-aos="zoom-out-right"
            data-aos-anchor-placement="top"
            data-aos-offset="200"
            data-aos-delay="50"
            className="mt-12 uppercase tex-xl md:text-3xl"
          >
            Technologies Used
          </p>
          <div className="img flex gap-2 w-full mt-2">
            <Image
              data-aos="flip-up"
              data-aos-anchor-placement="top"
              data-aos-offset="200"
              data-aos-delay="50"
              src={"/react.svg"}
              className="cursor-pointer"
              width={40}
              height={40}
              alt="react"
            />
            <Image
              data-aos="flip-up"
              data-aos-offset="200"
              src={"/firebase.svg"}
              className="cursor-pointer"
              width={40}
              height={40}
              alt="firebase"
            />
            <Image
              data-aos="flip-up"
              data-aos-offset="200"
              src={"/tailwind.svg"}
              width={40}
              className="cursor-pointer"
              height={40}
              alt="tailwindcss"
            />
          </div>
        </div>
        <div className="right md:w-[50%] overflow-hidden w-full h-[50%] flex items-center justify-center md:h-full overflow-y-hidden">
          <div className="img relative mt-96 overflow-hidden h-[650px] w-[200px] md:w-[400px] md:h-[720px] z-20">
            <a
              href="https://vid-ab.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/vidabdeskuse.png"}
                width={900}
                height={700}
                alt="phone"
                className="relative z-20 overflow-hidden"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forth;
