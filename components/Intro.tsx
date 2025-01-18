import React from "react";
import Link from "next/link";
const Intro = () => {
  return (
    <div className=" relative flex flex-col lg:flex-row md:h-[450px]  bg-[#27272A] lg:overflow-hidden ">
      <div className=" w-full flex justify-center lg:justify-start items-center lg:p-36 md:p-10">
        <p className=" text-white  lg:text-[50px] lg:w-[45px] md:text-[40px] text-[35px] z-30  font-bold ">INTRODUCING REPETO</p> 
      </div>
      <div className=" lg:w-full text-center flex flex-col justify-center items-center">
        <p className="text-white md:text-[24px] text-[20px] text-center lg:text-left p-10 lg:pt-24 z-30 text-shadow-xl">
          We all know that many events repeat every year like that Scholarship,
          Internship, Hackathon also happen.So we are Introducing Repeto that
          will help you gain all these information at your fingertip.
        </p>
        <button className="z-30">
        <Link href="/repeto">
          <div className="w-[137px] h-[45px]  bg-[#ffffff] lg:mt-12 rounded-xl text-black font-davidLibre flex justify-center items-center text-[18.5px] hover:text-white hover:bg-black font-medium drop-shadow-lg">
          Repeto
          </div>
        </Link>
        </button>
      </div>
      <div className="md:w-[200px] md:h-[430.32px] w-[170px] h-[370px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl shadow-black z-20 absolute md:top-[155.85px] top-[130px] left-[50px] md:left-[221.03px] transform transition-all duration-300 -rotate-[36.17deg] "></div>
      <div className="md:w-[200px] md:h-[200px] w-[260px] h-[170px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl z-10 absolute md:top-[95.85px] top-[80px] md:left-[296.03px] left-[50px] transform transition-all duration-300 -rotate-[36.17deg]"></div>
    </div>
  );
};

export default Intro;
