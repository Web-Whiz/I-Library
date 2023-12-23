"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialCard from "./TestimonialCard";
import "./testimonials.css";
const Testimonials = () => {
  return (
    <div className="bg-testimonials-bg relative">
      <div className="bg-black bg-opacity-30 absolute w-full h-full"></div>
      <div className="text-center pt-5 shadow-lg bg-black bg-opacity-30 pb-4">
        <h1 className="capitalize font-extrabold text-4xl mt-12 mb-3 text-white">
          Testimonials
        </h1>
        <h3 className="text-white mb-4 font-medium text-base">
          Celebrating Our Readers Voices
        </h3>
      </div>
      <div className="py-20">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          stopOnHover={true}
          swipeable={true}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          className="container mx-auto"
        >
          <div className="w-[90%] sm:w-2/3 md:w-2/4 lg:w-2/5 mx-auto">
            <TestimonialCard />
          </div>
          <div className="w-[90%] sm:w-2/3 md:w-2/4 lg:w-2/5 mx-auto">
            <TestimonialCard />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
