import React from "react";
import bannerPhoto from "@/assets/banner01.jpg";
import Image from "next/image";
const PageBanner = ({ bannerImg, bannerName, bannerSubTitle }) => {
  return (
    <div className="relative">
      <Image
        className="h-60 object-cover w-full object-center"
        src={bannerImg ? bannerImg : bannerPhoto}
        alt="page banner imgage"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-950/10 backdrop-blur-md" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="sm:text-3xl text-white font-bold">{bannerName}</h2>
        <p className="font-normal text-gray-200 text-center text-lg">
          {bannerSubTitle}
        </p>
      </div>
    </div>
  );
};

export default PageBanner;
