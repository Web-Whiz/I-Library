import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { PiPaperPlaneRightBold } from "react-icons/pi";

import ILibrary from "../../assets/ILibrary.png";
const Footer = () => {
  return (
    <footer className="bg-white pt-16">
      <div className="container mx-auto p-8 md:p-16">
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-12 lg:gap-0">
          <div>
            <Image src={ILibrary} alt="I Library" width={256} height={61} />
            <p className="my-5">
              Elevate Your Mind with ILibrary - <br />
              Your Online Portal to Wisdom, <br /> Imagination, and Exploration.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-9 h-8 bg-[#D9D9D9] rounded-full shadow-md flex items-center justify-center">
                <Link href="https://www.google.com/">
                  <FaGoogle className="text-[#0F86CD]"></FaGoogle>
                </Link>
              </div>
              <div className="w-9 h-8 bg-[#D9D9D9] rounded-full shadow-md flex items-center justify-center">
                <Link href="https://www.twitter.com/">
                  <FaTwitter className="text-[#0F86CD]"></FaTwitter>
                </Link>
              </div>
              <div className="w-9 h-8 bg-[#D9D9D9] rounded-full shadow-md flex items-center justify-center">
                <Link href="https://www.instagram.com/">
                  <FaInstagram className="text-[#0F86CD]"></FaInstagram>
                </Link>
              </div>
              <div className="w-9 h-8 bg-[#D9D9D9] rounded-full shadow-md flex items-center justify-center">
                <Link href="https://www.linkedin.com/">
                  <FaLinkedin className="text-[#0F86CD]"></FaLinkedin>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="text-3xl mb-4 md:mb-8">About Us</h5>
            <a href="/">Home</a>
            <a href="/service" className="my-3">
              Service
            </a>
            <a href="/contact">Contact</a>
          </div>
          <div className="flex flex-col">
            <h5 className="text-3xl  mb-4 md:mb-8">Company</h5>
            <a href="/about">Why I Library</a>
            <a href="/about" className="my-3">
              About
            </a>
            <a href="/contact">Contact</a>
          </div>
          <div className="flex flex-col">
            <h5 className="text-3xl mb-4 md:mb-8">Support</h5>
            <a href="/support">Support Center</a>
            <a href="/feedback" className="my-3">
              Feedback
            </a>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
        <div className="flex items-center justify-center my-10 md:my-20">
          <form className="flex items-center py-2">
            <button className="px-2 py-2 bg-indigo-500 text-white text-xl rounded-l-md">
              <IoIosMail />
            </button>
            <input
              required
              type="email"
              placeholder="Write your email"
              className="px-3 md:px-4 py-2 outline-0 border-0 bg-[#EFF3F8] text-base md:text-lg text-gray-950 flex-grow h-full"
            />
            <button className="px-2 md:px-6 py-2 cursor-pointer bg-indigo-500 text-white text-xl rounded-r-md">
              <PiPaperPlaneRightBold />
            </button>
          </form>
        </div>
      </div>
      <div className="w-full h-16 py-6 bg-[#0F86CD]">
        <p className="text-center text-white text-sm md:text-base">
          Copyright 2023 by <b>I Library</b>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;