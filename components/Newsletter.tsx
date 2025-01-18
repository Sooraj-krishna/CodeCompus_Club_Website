import React from "react";
import Link from "next/link";

const Newsletter = () => {
  return (
    <div className="bg-zinc-800 min-h-[450px] flex flex-col lg:flex-row p-4 md:p-8 gap-8 lg:gap-16 items-center justify-between py-20">
      {/* Text Content Section */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2 max-w-2xl lg:items-start items-center z-30">
        <h2 className="text-white font-bold   lg:text-[45px] md:text-[40px] text-[35px] text-center lg:text-left text-shadow-xl">
          NEWSLETTER
        </h2>
        <p className="text-white md:text-[24px] text-[20px] text-center lg:text-left">
          Do you want to stay updated about internships, hackathons,
          fellowships, and scholarship news during your college days? Sign up
          for our newsletter to get all these updates at your fingertips.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email Address"
            className="p-3  sm:w-[320px] h-[45px] w-[300px] rounded-xl bg-transparent border-white border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            aria-label="Sign up for the newsletter"
            className=" w-[137px] h-[45px] bg-white rounded-2xl text-black font-medium text-lg hover:text-white hover:bg-black transition-colors duration-300 drop-shadow-lg"
          >
            Sign Up
          </button>
        </div>
        <p className="text-gray-400 text-sm md:text-base text-center lg:text-left lg:ml-0   w-[320px]">
          By clicking Sign Up you're confirming that you agree with our{" "}
          <Link href="/" className="underline hover:text-gray-300">
            Terms and Conditions
          </Link>
          .
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[500px] h-[300px] md:h-[400px] lg:flex justify-center items-center hidden">
        <img
          src="/Mailimg.png"
          alt="Newsletter Illustration"
          className="object-contain w-full h-full max-w-[400px] lg:max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default Newsletter;