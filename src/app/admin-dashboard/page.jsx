"use client";
import React from "react";
import { BiSolidBook, BiTimeFive, BiUser } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";
const AdminHome = () => {
  return (
    <div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4  mb-4">
        <div className="px-8 py-8 sm:py-4 bg-white font-semibold hover:shadow-sm rounded border m-1 flex flex-col md:flex-row  gap-2 items-center justify-between">        
          <span className="bg-sky-500 p-4 rounded shadow"><BiUser className="text-white text-5xl" /></span>
          <div className="text-center md:text-right">
          <p>Total Users</p>
          <p>15</p>
          </div>
        </div>
        <div className="px-8 py-8 sm:py-4 bg-white font-semibold hover:shadow-sm rounded border m-1 flex flex-col md:flex-row  gap-2 items-center justify-between">        
          <span className="bg-yellow-500 p-4 rounded shadow"><FaBookOpen className="text-white text-5xl" /></span>
          <div className="text-center md:text-right">
          <p>Total Books</p>
          <p>15</p>
          </div>
        </div>
        <div className="px-8 py-8 sm:py-4 bg-white font-semibold hover:shadow-sm rounded border m-1 flex flex-col md:flex-row  gap-2 items-center justify-between">        
          <span className="bg-pink-500 p-4 rounded shadow"><BiTimeFive className="text-white text-5xl" /></span>
          <div className="text-center md:text-right">
          <p>Issue Books</p>
          <p>15</p>
          </div>
        </div>

      </div>



    </div>
  );
};

export default AdminHome;
