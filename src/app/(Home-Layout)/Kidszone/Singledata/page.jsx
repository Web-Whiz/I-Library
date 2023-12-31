import React from "react";
import Image from "next/image";
import Link from "next/link";

const Singledatapage = ({ KidsZoneBook }) => {
  console.log(KidsZoneBook);
  return (
    <div className="w-full mx-auto group hover:shadow-xl h-[320px] bg-[#f8fafc] duration-500 shadow-slate-100 rounded-md overflow-hidden relative collegeCard flex flex-col">
      <div className="w-full h-[215px] relative">
        <img
          className="w-full h-full hover:scale-120 duration-300 object-cover object-center"
          src={KidsZoneBook?.image_url}
        />
        <div className="absolute bottom-0 left-0 text-center w-full h-fit backdrop-blur-lg duration-200 opacity-0 group-hover:opacity-100">
          <button className="text-white uppercase bg-black/30 text-sm w-full h-full px-4 py-4">
            <Link href={`/all-books/${KidsZoneBook?._id}`}>view details</Link>
          </button>
        </div>
      </div>
      <div className="py-2 sm:py-1 flex-grow text-center z-10">
        <h1 className="font-semibold text-sm "> {KidsZoneBook?.title} </h1>
      </div>
      <div className="flex flex-col pb-2 justify-end items-center z-10">
        <h3 className="text-xs text-gray-600 font-medium">
          Self-Help and Motivation
        </h3>
        <h4 className="text-[10px]">Self no: 23</h4>
      </div>
    </div>
  );
};

export default Singledatapage;
