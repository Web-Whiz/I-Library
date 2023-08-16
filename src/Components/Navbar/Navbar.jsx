"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/ILibrary.png";
import Link from "next/link";
// import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar";
const Navbar = () => {
  return (
    <>
      <nav className="bg-white">
        <div className="container mx-auto flex justify-between items-center px-2 md:px-0 py-5">
          <div>
            <Link href="/">
              <Image className="w-[150px] md:w-[200px]" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="lg:flex items-center relative hidden">
            <SearchBar />
          </div>
          <div className="flex items-center bg-white rounded-sm shadow-md gap-3 lg:gap-8 px-4 py-2">
            <button className="hover:text-indigo-500 text-black hidden lg:block duration-200 font-medium">
              sign in
            </button>
            <button className="text-2xl relative text-black lg:border-l-2 lg:pl-3">
              <FaCartPlus />
              <h2 className="absolute text-[14px] font-medium flex justify-center items-center text-white h-6 w-6 bg-indigo-500 rounded-full -top-2/3 -right-1/2">
                0
              </h2>
            </button>
            <button className="block lg:hidden text-xl ml-3 ">
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;
