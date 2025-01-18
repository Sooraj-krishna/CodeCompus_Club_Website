import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-zinc-800 min-h-[300px] flex flex-col p-4 md:p-10">
      <div className="w-full flex flex-col md:flex-row md:justify-between pb-8  border-b border-white gap-8 md:gap-0">
        {/* Logo and Navigation Links */}
        <div className="flex flex-col gap-4 md:items-start items-center">
          <div className="text-white font-bold text-2xl md:text-[26px]">Logo</div>
          <div className="flex flex-wrap gap-4 lg:gap-10 text-white text-sm lg:text-base">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/" className="hover:underline">Contact Us</Link>
            <Link href="/" className="hover:underline">Repeto</Link>
            <Link href="/" className="hover:underline">Whatsapp</Link>
            <Link href="/" className="hover:underline">LinkedIn</Link>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col gap-4 md:items-start items-center">
          <div className="text-white font-semibold text-xl md:text-[22px]">Subscribe</div>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-10 text-white md:items-start items-center">
            <input
              placeholder="Enter Your Email"
              type="email"
              className="p-3 text-black rounded-full text-sm md:text-[15px]  lg:w-[330px] w-[300px] outline-none"
            />
            <button className="text-black bg-white lg:px-6 px-3 py-2 rounded-full hover:text-white hover:bg-black transition-colors duration-300  md:w-[100px] lg:w-[130px]">
              Subscribe
            </button>
          </div>
          <p className="text-white text-sm lg:text-base">
            By subscribing you agree to with our{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-6 md:pt-10 w-full flex flex-col md:flex-row md:justify-between text-white gap-6 md:gap-0 items-center">
        <div className="flex flex-wrap gap-4 md:gap-10 text-sm lg:text-base">
          <Link href="/" className="underline">Privacy Policy</Link>
          <Link href="/" className="underline">Terms of Service</Link>
          <Link href="/" className="underline">Cookies Settings</Link>
        </div>
        <div className="text-sm lg:text-base">@2024 Code Compass. All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;