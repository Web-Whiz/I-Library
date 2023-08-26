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
  const getStarValue = (e) => {
    console.log(e);
  };
  return (
    <section>
      <div className="container mx-auto bg-white flex justify-between flex-wrap shadow-lg">
        <div className="w-full lg:w-[70%] items-center justify-center grid grid-cols-1 sm:grid-cols-5 gap-10 p-6">
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
        {/* related books */}
        <div className="w-full lg:w-[30%] bg-[#DCDCDC] p-5">
          <h2 className="text-2xl font-semibold mb-3">Related books</h2>
          {/* book card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 justify-center gap-4">
            <div className="flex items-center gap-5 md:gap-2 xl:gap-5">
              <div>
                <Image width={85} src={bookImg} alt="" />
              </div>
              <div>
                <h2 className="text-[15px] font-medium">
                  Rich dad and poor dad
                </h2>
                <h4 className="text-[12px]">
                  by
                  <span className="text-[#0386FF] cursor-pointer">
                    Robert T. Kiyosaki
                  </span>
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <Rating
                    placeholderRating={4.5}
                    readonly
                    emptySymbol={<BsStar className="text-lg" />}
                    placeholderSymbol={
                      <BsStarFill className="text-[#FF9900] text-lg" />
                    }
                    fullSymbol={
                      <BsStarFill className="text-[#FF9900] text-lg" />
                    }
                  />
                  <h3 className="text-sm">(200)</h3>
                </div>
                <div className="space-y-1">
                  <button className="py-[4px] text-sm bg-violet-100 hover:bg-violet-700 hover:text-violet-50 duration-200 rounded-sm text-violet-700 w-[180px] xl:w-[200px] block">
                    add to bag
                  </button>
                  <button className="py-[4px] text-sm bg-violet-100 hover:bg-violet-700 hover:text-violet-50 duration-200 rounded-sm text-violet-700 w-[180px] xl:w-[200px] block">
                    view book
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 md:gap-2 xl:gap-5">
              <div>
                <Image width={85} src={bookImg} alt="" />
              </div>
              <div>
                <h2 className="text-[15px] font-medium">Rich dad poor dad</h2>
                <h4 className="text-[12px]">
                  by
                  <span className="text-[#0386FF] cursor-pointer">
                    Robert T. Kiyosaki
                  </span>
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <Rating
                    placeholderRating={4.5}
                    readonly
                    emptySymbol={<BsStar className="text-lg" />}
                    placeholderSymbol={
                      <BsStarFill className="text-[#FF9900] text-lg" />
                    }
                    fullSymbol={
                      <BsStarFill className="text-[#FF9900] text-lg" />
                    }
                  />
                  <h3 className="text-sm">(200)</h3>
                </div>
                <div className="space-y-1">
                  <button className="py-[4px] text-sm bg-violet-100 hover:bg-violet-700 hover:text-violet-50 duration-200 rounded-sm text-violet-700 w-[180px] xl:w-[200px] block">
                    add to bag
                  </button>
                  <button className="py-[4px] text-sm bg-violet-100 hover:bg-violet-700 hover:text-violet-50 duration-200 rounded-sm text-violet-700 w-[180px] xl:w-[200px] block">
                    view book
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 md:gap-2 xl:gap-5">
              <div>
                <Image width={85} src={bookImg} alt="" />
              </div>
              <div>
                <h2 className="text-[15px] font-medium">Rich dad poor dad</h2>
                <h4 className="text-[12px]">
                  by
                  <span className="text-[#0386FF] cursor-pointer">
                    Robert T. Kiyosaki
                  </span>
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <Rating
                    placeholderRating={4.5}
                    readonly
                    emptySymbol={<BsStar className="text-lg" />}
                    placeholderSymbol={
                      <BsStarFill className="text-[#FF9900] text-lg" />
                    }
                    fullSymbol={
                      <BsStarFill className="text-[#FF9900] text-lg" />
                    }
                  />
                  <h3 className="text-sm">(200)</h3>
                </div>
                <div className="space-y-1">
                  <button className="py-[4px] text-sm bg-violet-100 hover:bg-violet-700 hover:text-violet-50 duration-200 rounded-sm text-violet-700 w-[180px] xl:w-[200px] block">
                    add to bag
                  </button>
                  <button className="py-[4px] text-sm bg-violet-100 hover:bg-violet-700 hover:text-violet-50 duration-200 rounded-sm text-violet-700 w-[180px] xl:w-[200px] block">
                    view book
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* book card */}
        </div>
        {/* related books */}
      </div>
      <div className="container mx-auto bg-white shadow-lg my-16">
        <div className="p-5">
          <h2 className="text-3xl font-medium mb-3">Book specifications</h2>
          {/* book specifications */}
          <div className="w-full">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2 md:w-[30%]">
                    <h2>Title</h2>
                  </td>
                  <td className="border px-4 py-2 md:w-[70%]">
                    Rich dad poor dad
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Author</h2>
                  </td>
                  <td className="border px-4 py-2 text-[#0386FF] cursor-pointer">
                    Robert T. Kiyosaki
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Category</h2>
                  </td>
                  <td className="border px-4 py-2 text-[#0386FF] cursor-pointer">
                    Self development & motivation
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Publisher</h2>
                  </td>
                  <td className="border px-4 py-2 text-[#0386FF] cursor-pointer">
                    Penguin Publication
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Self no</h2>
                  </td>
                  <td className="border px-4 py-2">
                    27
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Translator</h2>
                  </td>
                  <td className="border px-4 py-2 text-[#0386FF] cursor-pointer">
                    N/A
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Edition</h2>
                  </td>
                  <td className="border px-4 py-2">2005</td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Published in</h2>
                  </td>
                  <td className="border px-4 py-2">1996</td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Number of pages</h2>
                  </td>
                  <td className="border px-4 py-2">180</td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Language</h2>
                  </td>
                  <td className="border px-4 py-2">English</td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Country</h2>
                  </td>
                  <td className="border px-4 py-2">Abroad</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* book specifications */}
          {/* reviews and ratings */}
          <div className="my-5 p-5">
            <h2 className="text-2xl font-semibold mb-5">Reviews and Ratings</h2>
            <div className="flex justify-between items-center gap-4 pb-6 border-b-[1px] border-gray-100">
              <div>
                <h2>Rate this book</h2>
                <div className="my-1">
                  <Rating
                    onChange={getStarValue}
                    placeholderRating={0}
                    className="space-x-1 md:space-x-3"
                    emptySymbol={
                      <BsStar className="text-lg md:text-2xl text-[#FF9900]" />
                    }
                    placeholderSymbol={
                      <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                    }
                    fullSymbol={
                      <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                    }
                    fractions={4}
                  />
                </div>
                <button className="px-3 rounded-sm py-2 bg-violet-100 text-violet-700 hover:text-violet-100 hover:bg-violet-700 duration-200 text-[15px]">
                  Write a review
                </button>
              </div>
              <div>
                <h2 className="text-4xl font-bold">4.46</h2>
                <Rating
                  placeholderRating={4.46}
                  className="space-x-1 md:space-x-3"
                  readonly
                  emptySymbol={
                    <BsStar className="text-lg md:text-2xl text-[#FF9900]" />
                  }
                  placeholderSymbol={
                    <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                  }
                  fullSymbol={
                    <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                  }
                />
                <h3 className="text-sm md:text-lg">200 ratings</h3>
              </div>
            </div>
            <div>
              <div className="my-5">
                <div className="flex items-center gap-5">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="../../favicon.ico"
                  />
                  <div>
                    <p>
                      By Hamim,
                      <span className="text-gray-500">20 Aug 2023</span>
                    </p>
                    <Rating
                      placeholderRating={4.46}
                      className="space-x-1 md:space-x-3"
                      readonly
                      emptySymbol={
                        <BsStar className="text-lg md:text-2xl text-[#FF9900]" />
                      }
                      placeholderSymbol={
                        <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                      }
                      fullSymbol={
                        <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                      }
                    />
                  </div>
                </div>
                <p className="my-5 text-justify md:text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  excepturi commodi eos! Laborum libero amet quod laboriosam
                  tenetur animi ducimus quidem, similique dolorem recusandae!
                  Consequuntur mollitia quidem numquam quisquam recusandae!
                </p>
                <hr className="mb-5" />
              </div>
              <div className="my-5">
                <div className="flex items-center gap-5">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="../../favicon.ico"
                  />
                  <div>
                    <p>
                      By Hamim,
                      <span className="text-gray-500">20 Aug 2023</span>
                    </p>
                    <Rating
                      placeholderRating={4.46}
                      className="space-x-1 md:space-x-3"
                      readonly
                      emptySymbol={
                        <BsStar className="text-lg md:text-2xl text-[#FF9900]" />
                      }
                      placeholderSymbol={
                        <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                      }
                      fullSymbol={
                        <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                      }
                    />
                  </div>
                </div>
                <p className="my-5 text-justify md:text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  excepturi commodi eos! Laborum libero amet quod laboriosam
                  tenetur animi ducimus quidem, similique dolorem recusandae!
                  Consequuntur mollitia quidem numquam quisquam recusandae!
                </p>
                <hr className="mb-5" />
              </div>
              <div className="my-5">
                <div className="flex items-center gap-5">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="../../favicon.ico"
                  />
                  <div>
                    <p>
                      By Hamim,
                      <span className="text-gray-500">20 Aug 2023</span>
                    </p>
                    <Rating
                      placeholderRating={4.46}
                      className="space-x-1 md:space-x-3"
                      readonly
                      emptySymbol={
                        <BsStar className="text-lg md:text-2xl text-[#FF9900]" />
                      }
                      placeholderSymbol={
                        <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                      }
                      fullSymbol={
                        <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                      }
                    />
                  </div>
                </div>
                <p className="my-5 text-justify md:text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  excepturi commodi eos! Laborum libero amet quod laboriosam
                  tenetur animi ducimus quidem, similique dolorem recusandae!
                  Consequuntur mollitia quidem numquam quisquam recusandae!
                </p>
                <hr className="mb-5" />
              </div>
            </div>
          </div>
          {/* reviews and ratings */}
        </div>
      </div>
    </section>
  );
};

export default page;
