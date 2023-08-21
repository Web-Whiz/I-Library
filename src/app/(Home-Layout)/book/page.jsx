"use client";
import React from "react";
import bookImg from "@/assets/book1.png";
import Image from "next/image";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import { HiMiniCheckBadge } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import { PiSealCheckFill } from "react-icons/pi";
const page = () => {
  return (
    <section>
      <div className="container mx-auto bg-white flex justify-between flex-wrap shadow-lg">
        <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-5 gap-10 p-6">
          {/* book image */}
          <div className="sm:col-span-2">
            <div className="w-full p-6 border-[#EAE6E6] border-[1px]">
              <Image
                className="w-full h-[215px] object-contain object-center"
                src={bookImg}
                alt="book img"
              />
            </div>
            <button className="px-3 mt-6 rounded-sm py-2 bg-violet-100 text-violet-700 hover:text-violet-100 hover:bg-violet-700 duration-200 text-[15px] w-full">
              Add to virtual book self
            </button>
          </div>
          {/* book image */}
          {/* book info */}
          <div className="sm:col-span-3">
            <h2 className="text-2xl font-medium">Rich dad poor dad</h2>
            <h4 className="text-sm">
              by
              <span className="text-[#0386FF] cursor-pointer">
                Robert T. Kiyosaki
              </span>
            </h4>
            <h4 className="mt-7 text-sm">
              Category:
              <span className="text-[#0386FF] cursor-pointer">
                Self development & Motivation
              </span>
            </h4>
            <h4 className="text-sm">
              Self no: <span>32</span>
            </h4>
            <div className="flex items-center gap-3 mt-1">
              <Rating
                placeholderRating={4.5}
                readonly
                emptySymbol={<BsStar className="text-2xl" />}
                placeholderSymbol={
                  <BsStarFill className="text-[#FF9900] text-2xl" />
                }
                fullSymbol={<BsStarFill className="text-[#FF9900] text-2xl" />}
              />
              <h3 className="text-sm">200 Ratings | 121 Reviews</h3>
            </div>
            <div className="mt-2">
              <h3 className="text-[16px]">Availability</h3>
              <ul className="list-none ml-3">
                <li className="flex gap-2 items-center text-sm py-1">
                  <PiSealCheckFill className="text-[#3DB473]" /> Hard copy
                </li>
                <li className="flex gap-2 items-center text-sm py-1">
                  <PiSealCheckFill className="text-[#3DB473]" /> PDF version
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-[70%] lg:w-[65%]">
              <button className="w-full px-3 rounded-sm py-2 bg-violet-100 text-violet-700 hover:text-violet-100 hover:bg-violet-700 duration-200 text-[15px]">
                At a glance
              </button>
              <div className="grid grid-cols-2 w-full gap-2 mt-2">
                <button className="px-3 py-2 bg-violet-600 text-violet-100 hover:bg-violet-100 hover:text-violet-600 duration-200">
                  Read PDF
                </button>
                <button className="px-3 py-2 bg-violet-600 text-violet-100 hover:bg-violet-100 hover:text-violet-600 duration-200">
                  Borrow
                </button>
              </div>
            </div>
          </div>
          {/* book info */}
        </div>
        <div className="w-full lg:w-[30%] bg-[#DCDCDC]"></div>
      </div>
    </section>
  );
};

export default page;
