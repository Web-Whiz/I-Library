"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "@/assets/banner01.jpg";
import banner2 from "@/assets/banner02.jpg";
import banner3 from "@/assets/banner03.jpg";
import Image from "next/image";
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
            src={banner1}
          ></Image>
          <div className="bg-black bg-opacity-60 absolute top-0 left-0  w-full h-full"></div>
          <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
            <div>
              <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-extrabold">
                Explore, Learn, Discover: <br /> Your Gateway to Knowledge
              </h2>
              <p className="text-[12px] md:text-sm lg:text-lg mt-5 text-slate-200 w-[90%] md:w-[70%] lg:w-[40%] mx-auto">
                Step into a world of endless possibilities. Our library invites
                you to explore captivating stories, unlock knowledge, and ignite
                your imagination. From the classics to the contemporary, embark
                on a journey of discovery with us.
              </p>
              <button className="bg-indigo-500 px-5 py-2 rounded-md mt-4 text-white font-medium hover:bg-white hover:text-indigo-500 duration-200">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            className="w-screen h-[calc(100vh-400px)] md:h-[calc(100vh-300px)] lg:h-[calc(100vh-200px)]  bg-cover"
            src={banner2}
          ></Image>
          <div className="bg-black bg-opacity-60 absolute top-0 left-0  w-full h-full"></div>
          <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
            <div>
              <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-extrabold">
                Explore, Learn, Discover: <br /> Your Gateway to Knowledge
              </h2>
              <p className="text-[12px] md:text-sm lg:text-lg mt-5 text-slate-200 w-[90%] md:w-[70%] lg:w-[40%] mx-auto">
                Step into a world of endless possibilities. Our library invites
                you to explore captivating stories, unlock knowledge, and ignite
                your imagination. From the classics to the contemporary, embark
                on a journey of discovery with us.
              </p>
              <button className="bg-indigo-500 px-5 py-2 rounded-md mt-4 text-white font-medium hover:bg-white hover:text-indigo-500 duration-200">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            className="w-screen h-[calc(100vh-400px)] md:h-[calc(100vh-300px)] lg:h-[calc(100vh-200px)]  bg-cover"
            src={banner3}
          ></Image>
          <div className="bg-black bg-opacity-60 absolute top-0 left-0  w-full h-full"></div>
          <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
            <div>
              <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-extrabold">
                Explore, Learn, Discover: <br /> Your Gateway to Knowledge
              </h2>
              <p className="text-[12px] md:text-sm lg:text-lg mt-5 text-slate-200 w-[90%] md:w-[70%] lg:w-[40%] mx-auto">
                Step into a world of endless possibilities. Our library invites
                you to explore captivating stories, unlock knowledge, and ignite
                your imagination. From the classics to the contemporary, embark
                on a journey of discovery with us.
              </p>
              <button className="bg-indigo-500 px-5 py-2 rounded-md mt-4 text-white font-medium hover:bg-white hover:text-indigo-500 duration-200">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
