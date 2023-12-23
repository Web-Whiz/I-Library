"use client";

import BookCard from "@/Components/BookCard/BookCard";

import { Swiper, SwiperSlide } from "swiper/react";

import { useQuery } from "@tanstack/react-query";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "./NewReleasedBook.css";

// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const NewReleasedBook = () => {
  const { data: newBooks = [], refetch } = useQuery({
    queryKey: ["newBooks"],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BaseURL}/new-books`);
      return res.json();
    },
  });

  return (
    <div className="container mx-auto bg-[#eff3f8]">
      <div className="text-center mb-10">
        <h1 className="capitalize font-bold text-3xl mb-3 text-[#0F86CD]">
          new released books
        </h1>
        <h3 className=" max-w-[450px] mx-auto ">
          Fresh Pages, New Adventures. Discover the latest arrivals in our New
          Releases section
        </h3>
      </div>
      <div className="">
        <Swiper
          slidesPerView={2}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 6,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 6,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 6,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 6,
            },
            1440: {
              slidesPerView: 7,
              spaceBetween: 6,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper "
        >
          {newBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard key={book?._id} book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewReleasedBook;
