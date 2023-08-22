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
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { BiLogOut, BiSolidDashboard, BiUserCheck } from "react-icons/bi";
const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen, isCartOpen, logOut, setIsCartOpen, user } =
    useAuth();
  const [isUserOpen, setIsUserOpen] = useState(false);
  return (
    <>
      <nav className="bg-white">
        <div className="container mx-auto flex justify-between items-center px-2 md:px-0 py-5">
          <div>
            <Link href="/">
              <Image className="w-[150px] " src={logo} alt="logo" />
            </Link>
          </div>
          <div className="lg:flex items-center relative hidden">
            <SearchBar />
          </div>
          <div className="flex items-center gap-1 lg:gap-8">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="text-2xl relative text-black mr-4"
            >
              <FaCartPlus />
              <h2 className="absolute text-[14px] font-medium flex justify-center items-center text-white h-6 w-6 bg-indigo-700 rounded-full -top-2/3 -right-1/2">
                0
              </h2>
            </button>
            {user?.email ? (
              // profile option
              <div className="relative">
                <img
                  onClick={() => setIsUserOpen(!isUserOpen)}
                  className="w-10 h-10 p-1 cursor-pointer rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={user?.photoURL}
                  alt="Bordered avatar"
                />
                <div
                  className={`absolute top-14 z-50 right-0 rounded-md ${
                    isUserOpen ? "scale-y-100" : "scale-y-0"
                  } duration-200 origin-top bg-white shadow-lg p-2`}
                >
                  <ul className="list-none px-2 w-full">
                    <li className="text-gray-900 font-medium text-[15px] cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-4">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-4"
                      >
                        {" "}
                        <BiSolidDashboard /> Dashboard
                      </Link>
                    </li>
                    <li className="text-gray-900 font-medium text-[15px] cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-4">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-4"
                      >
                        <BiUserCheck /> Profile
                      </Link>
                    </li>
                    <li
                      onClick={() => logOut()}
                      className="text-gray-900 font-medium text-[15px] cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-4 flex items-center gap-4"
                    >
                      <BiLogOut /> Sign out
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              // profile option
              <Link href="/login">
                <button className="px-3 py-2 bg-indigo-700 text-indigo-100 hover:bg-indigo-100 hover:text-indigo-700 duration-200 hidden lg:block rounded-sm uppercase text-[15px] font-medium">
                  sign in
                </button>
              </Link>
            )}
            {/* shopping cart */}
            <div
              className={`fixed top-0 right-0 z-20 w-[70%] sm:w-[65%] md:w-[45%] lg:w-[35%] duration-500 ${
                isCartOpen
                  ? "-translate-x-0 origin-left"
                  : "translate-x-[101%] origin-left"
              }`}
            >
              <ShoppingCart />
            </div>
            {/* shopping cart */}
            {/* mobile navbar */}
            <div className="block lg:hidden">
              <Hamburger
                size={24}
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
              />

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
            {/* mobile navbar */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
