"use client";
import React from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaMedal,
  FaHeart,
  FaTrophy,
  FaHandHoldingUsd,
  FaClipboardList,
  FaExclamationCircle,
} from "react-icons/fa";

const Page = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        
        <div className="box p-8 bg-blue-400 font-semibold hover:shadow-lg rounded border items-center m-1 flex gap-2">
          <span className="text-4xl p-2 bg-white rounded text-teal-400 shadow-lg"><FaBook /></span>
          <div className="w-full">
            <p>Total Read Books</p>
            <p>15</p>
          </div>
        </div>

        <div className="box p-8 bg-green-400 font-semibold hover:shadow-lg rounded border m-1 flex  gap-2 items-center ">
          <span className="text-4xl p-2 bg-white rounded text-blue-400 shadow-lg"><FaHandHoldingUsd /></span>
          <div className="w-full">
            <p>Borrowed Books</p>
            <p>5</p>
          </div>

        </div>

        <div className="box p-8 bg-yellow-400 font-semibold hover:shadow-lg rounded border m-1 flex  gap-2 items-center ">
          <span className="text-4xl p-2 bg-white rounded text-green-400 shadow-lg"><FaClipboardList /></span>
          <div className="w-full">
            <p>Requested Books</p>
            <p>15</p>
          </div>
        </div>

        <div className="box p-8 bg-orange-400 font-semibold hover:shadow-lg rounded border m-1 flex  gap-2 items-center ">
          <span className="text-4xl p-2 bg-white rounded text-yellow-400 shadow-lg" ><FaExclamationCircle /></span>
          <div className="w-full">
            <p>Overdue Books</p>
            <p>2</p>
          </div>
        </div>

        <div className="box p-8 bg-red-400 font-semibold hover:shadow-lg rounded border m-1 flex  gap-2 items-center ">
          <span className="text-4xl p-2 bg-white rounded text-orange-400 shadow-lg" ><FaHeart /></span>
          <div className="w-full">
            <p>Donated Books</p>
            <p>15</p>
          </div>
        </div>


        <div className="box p-8 bg-purple-400 font-semibold hover:shadow-lg rounded border m-1 flex flex-col gap-3 items-start">
          <div>
            <p>Recently Read:Book Name</p>
            <p>Selected For Next:Book Name</p>
          </div>

          <div className="w-full ">
            <h1>Reading:Book Name</h1>
            <div className="flex flex-row items-center gap-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5 my-1 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <span>50%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="box p-8 bg-pink-400 font-semibold hover:shadow-lg rounded border m-1 flex items-center gap-2">
          <span className="text-4xl p-2 bg-white rounded text-purple-400 shadow-lg block w-fit"><FaCalendarAlt /></span>
          <div className="w-full">
            <p>Event Name</p>
            <p>Date</p>
          </div>
        </div>
        <div className="box p-8 bg-teal-400 font-semibold hover:shadow-lg rounded border m-1 flex flex-col gap-3 items-center justify-center">
          <h1>Awards</h1>
          <div className="flex gap-2 text-4xl ">
          <span className="text-4xl p-2 bg-white rounded text-orange-400 shadow-lg"><FaTrophy /></span>
          <span className="text-4xl p-2 bg-white rounded text-orange-400 shadow-lg"><FaMedal /></span>
          <span className="text-4xl p-2 bg-white rounded text-orange-400 shadow-lg"><FaTrophy /></span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
