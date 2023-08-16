import React from "react";

const SectionHeader = () => {
  return (
    <div className="relative">
      <div className=" flex justify-center items-center before:w-[70%] before:bg-gray-400 before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:h-[2px]">
        <h2 className="border-2 z-10 border-gray-400 w-fit px-7 py-2 mx-auto bg-white text-indigo-500 font-semibold text-xl md:text-3xl lg:text-4xl">
          New Released Books
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
