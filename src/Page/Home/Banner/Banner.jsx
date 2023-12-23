"use client";
import banner1 from "@/assets/banner01.jpg";
import banner2 from "@/assets/banner02.jpg";
import banner3 from "@/assets/banner03.jpg";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        <div className="relative">
          <Image
            className="w-screen h-[calc(100vh-400px)] md:h-[calc(100vh-300px)] lg:h-[calc(100vh-200px)]  bg-cover"
            alt="banner image 1"
            src={banner1}
          ></Image>
          <div className="bg-black bg-opacity-60 absolute top-0 left-0  w-full h-full"></div>
          <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
            <div>
              <h2
                className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-extrabold"
                style={{ lineHeight: 1.25 }}
              >
                Explore, Learn, Discover : <br /> Your Gateway to Knowledge
              </h2>
              <p className="text-[12px] md:text-sm lg:text-lg mt-5 text-slate-200 w-[90%] md:w-[70%] lg:w-[40%] mx-auto">
                Step into a world of endless possibilities. Our library invites
                you to explore captivating stories, unlock knowledge, and ignite
                your imagination. From the classics to the contemporary, embark
                on a journey of discovery with us.
              </p>
              <Link href="/all-books">
                <button className="bg-indigo-700 px-5 py-2 rounded-md mt-4 text-white font-medium hover:bg-white hover:text-indigo-500 duration-200">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            className="w-screen h-[calc(100vh-400px)] md:h-[calc(100vh-300px)] lg:h-[calc(100vh-200px)]  bg-cover"
            alt="banner image 2"
            src={banner2}
          ></Image>
          <div className="bg-black bg-opacity-60 absolute top-0 left-0  w-full h-full"></div>
          <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
            <div>
              <h2
                className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-extrabold"
                style={{ lineHeight: 1.25 }}
              >
                Pages of Enlightenment : <br /> Your Gateway to Wisdom
              </h2>
              <p className="text-[12px] md:text-sm lg:text-lg mt-5 text-slate-200 w-[90%] md:w-[70%] lg:w-[40%] mx-auto">
                Step into a sanctuary of words, where the classics meet the
                cutting edge. Our library service is your passport to
                enlightenment, offering a treasure trove of stories that
                captivate, educate, and inspire.
              </p>
              <Link href="/all-books">
                <button className="bg-indigo-700 px-5 py-2 rounded-md mt-4 text-white font-medium hover:bg-white hover:text-indigo-500 duration-200">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            className="w-screen h-[calc(100vh-400px)] md:h-[calc(100vh-300px)] lg:h-[calc(100vh-200px)]  bg-cover"
            alt="banner image 3"
            src={banner3}
          ></Image>
          <div className="bg-black bg-opacity-60 absolute top-0 left-0  w-full h-full"></div>
          <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
            <div>
              <h2
                className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-extrabold"
                style={{ lineHeight: 1.25 }}
              >
                Infinite Horizons : <br /> Navigate the Seas of Knowledge
              </h2>
              <p className="text-[12px] md:text-sm lg:text-lg mt-5 text-slate-200 w-[90%] md:w-[70%] lg:w-[40%] mx-auto">
                Explore a world where stories unfold like maps, guiding you
                through the vast expanse of human imagination. Our library
                beckons you to set sail on a journey of discovery, where each
                book is a compass pointing to new horizons.
              </p>
              <Link href="/all-books">
                <button className="bg-indigo-700 px-5 py-2 rounded-md mt-4 text-white font-medium hover:bg-white hover:text-indigo-500 duration-200">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
