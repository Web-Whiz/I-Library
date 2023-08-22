"use client";
import React from "react";
import Overview from "./overview/Overview";
const page = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mb-4">
        <div className="p-8 bg-sky-300 font-semibold hover:shadow-sm rounded border m-1 flex flex-col gap-2 items-center justify-center">
          <img src="/icon1.png" alt="Book Icon" />
          <p>Total Read Books</p>
          <p>15</p>
        </div>
        <div className="p-8 bg-sky-300 font-semibold hover:shadow-sm rounded border m-1 flex flex-col gap-2 items-center justify-center">
          <img src="/icon1.png" alt="Book Icon" />
          <p>Borrowed Books</p>
          <p>3</p>
        </div>
        <div className="p-8 bg-sky-300 font-semibold hover:shadow-sm rounded border m-1 flex flex-col gap-2 items-center justify-center">
          <img src="/icon1.png" alt="Book Icon" />
          <p>Requested Books</p>
          <p>3</p>
        </div>
        <div className="p-8 bg-sky-300 font-semibold hover:shadow-sm rounded border m-1 flex flex-col gap-2 items-center justify-center">
          <img src="/icon1.png" alt="Book Icon" />
          <p>Over Due Books</p>
          <p>1</p>
        </div>
        <div className="p-8 bg-sky-300 font-semibold hover:shadow-sm rounded border m-1 flex flex-col gap-2 items-center justify-center">
          <img src="/icon1.png" alt="Book Icon" />
          <p>Donated Books</p>
          <p>1</p>
        </div>

        <div className="p-8 bg-sky-300  font-semibold hover:shadow-sm rounded border m-1 flex flex-col gap-3 items-start ">
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
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-8 bg-sky-300 font-semibold hover:shadow-sm rounded border m-1 flex flex-col gap-1 ">
          <p>Your Upcoming Event</p>
          <h1>Event Name:</h1>
          <h2>Date:</h2>
        </div>
        <div className="p-8 bg-sky-300 font-semibold hover:shadow-sm rounded border m-1 flex flex-col gap-3 items-center justify-center">
          <h1>Awards</h1>
          <div className="flex gap-2">
            <img src="/icon1.png" alt="Book Icon" />
            <img src="/icon1.png" alt="Book Icon" />
            <img src="/icon1.png" alt="Book Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
