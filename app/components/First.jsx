"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const First = () => {
  return (
    <>
      <div className="main relative first w-screen h-screen flex items-center justify-center bg-zinc-800">
        <h1
          data-aos="fade-right"
          className="text-white text-[10vw] uppercase cursor-default "
        >
          Hello There👋
        </h1>
        <div className="down absolute w-[54px] h-[54px] bottom-[5px] rounded-full flex justify-center items-center down bg-white">
          <FaAngleDoubleDown className="text-5xl" />
        </div>
      </div>
    </>
  );
};

export default First;
