import React from "react";
import imgkids from "../../../../../public/istockphoto-1269500753-612x612.webp";
import Image from "next/image";

const BannerPage = () => {
  return (
    <div>
      <div className="relative">
        <Image
          className="h-60 object-cover w-full object-center"
          src={imgkids}
          alt="page banner imgage"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-950/10 backdrop-blur-md" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="sm:text-3xl text-white font-bold">Kids Zone</h2>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
