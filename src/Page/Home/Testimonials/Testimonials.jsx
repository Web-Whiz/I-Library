"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./testimonials.css";
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
  const headingStyle = {
    color: "#0F86CD", // Text color
  };
  return (
    <div className="bg-testimonials-bg">
      <div className="text-center pt-5">
        <h1 className="capitalize font-bold text-4xl mt-14 mb-3 text-[#0F86CD]">
          Testimonials
        </h1>
        <h3 className=" max-w-[450px] text-slate-200 mx-auto mb-4">
          Celebrating Our Readers' Voices
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
