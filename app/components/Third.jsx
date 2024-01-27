"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const Third = () => {
  useEffect(() => {
    // Ensure that AOS is only initialized on the client side
    import("aos").then((AOS) => {
      AOS.init();
    });
  }, []);
  return (
    <>
      <div className="main w-screen overflow-hidden h-screen md:flex-row flex-col flex items-center bg-zinc-800">
        <div className="left flex overflow-hidden cursor-default md:p-24 p-7 flex-col text-white md:w-[50%] w-full h-[50%] md:h-full">
          <h1 className="text-xl">Projects:</h1>
          <h2
            data-aos="zoom-out-left"
            data-aos-anchor-placement="top"
            data-aos-offset="200"
            data-aos-delay="50"
            className="md:text-[10vh] text-[4vh] font-bold"
          >
            THE IPL NEWS
          </h2>
          <p
            data-aos="flip-up"
            data-aos-anchor-placement="top"
            data-aos-offset="200"
            data-aos-delay="50"
            className="text-white/80 tracking-tight leading-5 relative z-[990000]"
          >
            Whether you are a die-hard cricket fan or a casual viewer, "The IPL
            News" web ensures you never miss a moment of the action. From live
            scores to in-depth analysis, we've got you covered with
            comprehensive cricket coverage.
          </p>
          <p
            data-aos="flip-up"
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
          <div className="img relative overflow-hidden h-[350px] w-[200px] md:w-[400px] md:h-[720px] z-20">
            <Image
              src={"/phonesm.webp"}
              width={400}
              height={400}
              alt="phone"
              className="relative z-20 overflow-hidden"
            />
          </div>
          <div className="absolute z-40 md:w-[250px] h-[280px] w-[130px] md:h-[550px] md:ml-2 rounded-2xl mt-6 md:mt-8 scl overflow-auto">
            <a
              href="https://theiplnewst20.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/phonetheipl.jpeg"}
                width={270}
                height={20}
                alt="phone"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Third;
