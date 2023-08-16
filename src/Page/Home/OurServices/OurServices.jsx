import React from "react";
import Image from "next/image";

import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";

const OurServices = () => {
  return (
    <div className="container mx-auto my-5 px-2 md:px-0">
      <h3 className="text-[#0F86CD] font-extrabold text-4xl text-center">
        Our Services{" "}
      </h3>
      <p className="text-center my-3">
        Fresh Pages, New Adventures. Discover the latest arrivals <br /> in our
        New Releases section
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
        <div className="bg-rose-500 bg-opacity-80 p-8 hover:shadow-lg hover:bg-opacity-100 duration-300 cursor-pointer">
          <Image
            src={icon1}
            alt=""
            className="mx-auto"
            width={50}
            height={50}
            quality={100}
          />
          <h5 className="text-center font-bold text-white text-2xl mb-2">
            Books
          </h5>
          <p>
            Join discussions, share stories, and connect with fellow readers.
          </p>
        </div>

        <div className="bg-green-500 bg-opacity-50  p-8 hover:shadow-lg hover:bg-opacity-100 duration-300 cursor-pointer">
          <Image
            src={icon2}
            alt=""
            className="mx-auto"
            width={50}
            height={50}
            quality={100}
          />
          <h5 className="text-center font-bold text-white text-2xl mb-2">
            eBooks
          </h5>
          <p>
            Join discussions, share stories, and connect with fellow readers.
          </p>
        </div>

        <div className="bg-gray-500 bg-opacity-50  p-8 hover:shadow-lg hover:bg-opacity-100 duration-300 cursor-pointer">
          <Image
            src={icon3}
            alt=""
            className="mx-auto"
            width={50}
            height={50}
            quality={100}
          />
          <h5 className="text-center font-bold text-white text-2xl mb-2">
            Audio Books
          </h5>
          <p>
            Join discussions, share stories, and connect with fellow readers.
          </p>
        </div>

        <div className="bg-fuchsia-600 bg-opacity-50  p-8 hover:shadow-lg hover:bg-opacity-100 duration-300 cursor-pointer">
          <Image
            src={icon1}
            alt=""
            className="mx-auto"
            width={50}
            height={50}
            quality={100}
          />
          <h5 className="text-center font-bold text-white text-2xl mb-2">
            Magazines
          </h5>
          <p>
            Join discussions, share stories, and connect with fellow readers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
