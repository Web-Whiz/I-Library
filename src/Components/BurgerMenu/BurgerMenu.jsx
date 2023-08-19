import Image from "next/image";
import React from "react";
import logo from "@/assets/ILibrary.png";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import {
  BiHomeHeart,
  BiBookAlt,
  BiGridAlt,
  BiUserCircle,
  BiNews,
  BiMessageRoundedDetail,
  BiPhone,
  BiInfoCircle,
  BiSmile,
} from "react-icons/bi";
const BurgerMenu = () => {
  return (
    <div className="w-full h-screen bg-white text-lg space-y-4 relative">
      <div className="p-3">
        <Image className="w-full h-fit" src={logo} alt="I Library" />
      </div>
      <div className="py-2 px-2 w-full">
        <form className="flex items-center text-sm w-full">
          <input
            type="text"
            className="outline-0 px-2 py-[6px] rounded-l-sm w-full bg-[#EFF3F8] border-b-2 border-indigo-500"
            placeholder="write here to search"
          />
          <button className="bg-indigo-500 p-[6px] text-white w-fit border-b-2 border-indigo-500 rounded-r-sm">
            search
          </button>
        </form>
      </div>
      <div>
        <ul className="px-2 h-full bg-white text-[#3d3c3c]">
          <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-4 text-[15px]"
            >
              <BiHomeHeart /> Home
            </Link>
          </li>
          <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
            <Link
              href="dashboard/cart"
              className="flex items-center gap-4 text-[15px]"
            >
              <BiBookAlt />
              All Books
            </Link>
          </li>
          <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
            <a className="flex items-center gap-4 text-[15px]">
              <BiGridAlt />
              Category
            </a>
          </li>
          <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
            <a className="flex items-center gap-4 text-[15px]">
              <BiUserCircle /> Author
            </a>
          </li>
          <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
            <a className="flex items-center gap-4 text-[15px]">
              <BiNews /> Publication
            </a>
          </li>
          <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600 my-1  px-2">
            <a className="flex items-center gap-4 text-[15px]">
              <BiMessageRoundedDetail /> Blogs
            </a>
          </li>
          <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2 ">
            <a className="flex items-center gap-4 text-[15px]">
              <BiPhone /> Contact
            </a>
          </li>
          <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600 my-1  px-2">
            <a className="flex items-center gap-4 text-[15px]">
              <BiInfoCircle /> About us
            </a>
          </li>
          <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600 my-1  px-2">
            <a className="flex items-center gap-4 text-[15px]">
              <BiSmile /> Kids zone
            </a>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <ul className="list-none flex gap-2 justify-center items-center">
          <li className="w-9 h-8 bg-[#D9D9D9] rounded-full shadow-md flex items-center justify-center">
            <Link href="https://www.google.com/">
              <FaGoogle className="text-[#0F86CD]"></FaGoogle>
            </Link>
          </li>
          <li className="w-9 h-8 bg-[#D9D9D9] rounded-full shadow-md flex items-center justify-center">
            <Link href="https://www.twitter.com/">
              <FaTwitter className="text-[#0F86CD]"></FaTwitter>
            </Link>
          </li>
          <li className="w-9 h-8 bg-[#D9D9D9] rounded-full shadow-md flex items-center justify-center">
            <Link href="https://www.instagram.com/">
              <FaInstagram className="text-[#0F86CD]"></FaInstagram>
            </Link>
          </li>
          <li className="w-9 h-8 bg-[#D9D9D9] rounded-full shadow-md flex items-center justify-center">
            <Link href="https://www.linkedin.com/">
              <FaLinkedin className="text-[#0F86CD]"></FaLinkedin>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
