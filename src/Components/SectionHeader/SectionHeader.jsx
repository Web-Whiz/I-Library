import React from "react";

const SectionHeader = ({ header }) => {
  return (
    <div className="relative">
      <div className=" flex justify-center items-center before:w-[70%] before:bg-gray-400 before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:h-[2px]">
        <h2 className="border-2 z-10 border-gray-400 w-fit capitalize font-bold text-xl text-[#0F86CD] px-7 py-2 mx-auto bg-white md:text-2xl lg:text-3xl">
          {header}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
