import Image from "next/image";
import React from "react";
import logo from "@/assets/ILibrary.png";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
const BurgerMenu = () => {
  return (
    <div className="w-full h-screen bg-white p-4 text-lg space-y-4 relative">
      <div>
        <Image className="w-full h-fit" src={logo} alt="I Library" />
      </div>
      <div className="py-2">
        <form className="flex items-center text-sm">
          <label>
            <input
              type="text"
              className="outline-0 px-2 py-[6px] rounded-l-sm w-full bg-[#EFF3F8] border-b-2 border-indigo-500"
              placeholder="write here to search"
            />
          </label>
          <button className="bg-indigo-500 p-[6px] text-white border-b-2 border-indigo-500 rounded-r-sm">
            search
          </button>
        </form>
      </div>
      <div>
        <ul className="list-none py-1 text-center hover:text-indigo-600 font-medium text-[16px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-books">All Books</Link>
          </li>
          <li>
            <Link href="/authors">Authors</Link>
          </li>
          <li>
            <Link href="/category">Categories</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
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
