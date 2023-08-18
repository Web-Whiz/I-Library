"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/ILibrary.png";
import Link from "next/link";
// import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar";
import useAuth from "@/Utils/useAuth";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Hamburger from "hamburger-react";
const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useAuth();
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
            <Link href="/login">
              <button className="hover:text-indigo-500 text-black hidden lg:block duration-200 font-medium">
                sign in
              </button>
            </Link>
            <button className="text-2xl relative text-black lg:border-l-2 lg:pl-3">
              <FaCartPlus />
              <h2 className="absolute text-[14px] font-medium flex justify-center items-center text-white h-6 w-6 bg-indigo-500 rounded-full -top-2/3 -right-1/2">
                0
              </h2>
            </button>
            <div className="block lg:hidden">
                <Hamburger size={24} toggled={isMenuOpen} toggle={setIsMenuOpen} />

              <div
                className={`fixed top-0 left-0 z-50 w-[65%] md:w-[35%] lg:w-[15%] ${
                  isMenuOpen
                    ? "translate-x-0 origin-right duration-500"
                    : "-translate-x-[101%] lg:translate-x-0 origin-right duration-500"
                }`}
              >
                <BurgerMenu />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
