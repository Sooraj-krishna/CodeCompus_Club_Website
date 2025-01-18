import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#27272A] md:h-[400px] py-16 z-30">
      <div className="text-center md:text-[40px] text-[35px] lg:text-[45px] font-bold mb-6 text-white z-30">
        CONTACT
      </div>
      <div className="  flex flex-col md:flex-row flex-1">
        <div className=" w-full flex py-6 flex-col justify-center items-center">
          <div>
            <svg
              className="w-12 h-12 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
              <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
            </svg>
          </div>
          <div className=" text-[26px] font-semibold mb-6 text-white">
            Email
          </div>
          <p className="text-gray-300 underline">shadilrayyan2@gmail.com</p>
        </div>
        <div className=" w-full flex flex-col justify-center items-center py-6">
          <div>
            <svg
              className="w-12 h-12 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
            </svg>
          </div>
          <div className=" text-[26px] font-semibold mb-6 text-white">
            Phone
          </div>
          <p className="text-gray-300 ">+91 99569 5010</p>
        </div>
        <div className=" w-full flex flex-col justify-center items-center py-6">
          <svg
            className="w-12 h-12 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
              clipRule="evenodd"
            />
          </svg>

          <div className=" text-[26px] font-semibold mb-6 text-white">
            Location
          </div>
          <p className="text-gray-300 ">Govt. Engineering College Palakkad</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
