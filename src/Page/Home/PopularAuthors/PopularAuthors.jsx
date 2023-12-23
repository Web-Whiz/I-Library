"use client";
import AuthorCard from "@/Components/AuthorCard/AuthorCard";
import { getAuthors } from "@/Utils/useBooks";
import Link from "next/link";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PopularAuthors.css";

// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const PopularAuthors = () => {
  const [authors] = getAuthors();

  return (
    <section className="container mx-auto p-8 md:p-5 2xl:p-0">
      <div className="flex items-center justify-between lg:mt-40">
        <div>
          <h6 className="text-base md:text-xl text-gray-600 mb-3">
            Strong Minds Behind Us
          </h6>
          <h2 className="text-xl md:text-3xl md:tracking-wider text-[#0F86CD] capitalize font-semibold">
            Most Popular Authors
          </h2>
        </div>

        <div>
          <Link href="/authors">
            <button
              type="button"
              className="text-base ring-2 ring-indigo-600 ring-inset text-gray-900 font-medium h-12 w-24 md:w-32 rounded-full hover:bg-indigo-600 duration-200 hover:text-white capitalize"
            >
              View All
            </button>
          </Link>
        </div>
      </div>
      <hr
        className="mt-10"
        style={{ height: "1px", backgroundColor: "#ccc", border: "none" }}
      />

      <div className="lg:mb-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          // centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            350: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {authors.map((author, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <AuthorCard key={author?._id} author={author} />{" "}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularAuthors;
