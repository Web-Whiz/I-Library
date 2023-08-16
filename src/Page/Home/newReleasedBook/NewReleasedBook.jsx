"use client";

import BookCard from "@/Components/BookCard/BookCard";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "./NewReleasedBook.css";
import SectionHeader from "@/Components/SectionHeader/SectionHeader";

// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const NewReleasedBook = () => {
  const newBooks = [
    {
      id: 2,
      bookName: "To Kill a Mockingbird",
      bookImg:
        "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
      category: "Fiction",
      authorName: "Harper Lee",
      borrowPrice: 3.99,
      rating: 4.8,
      shelfNo: 102,
    },
    {
      id: 3,
      bookName: "The Great Gatsby",
      bookImg:
        "https://www.oldcastlebooks.co.uk/images/large/9780857304568.jpg",
      category: "Fiction",
      authorName: "F. Scott Fitzgerald",
      borrowPrice: 4.25,
      rating: 4.5,
      shelfNo: 207,
    },
    {
      id: 4,
      bookName: "1984",
      bookImg:
        "https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg",
      category: "Dystopian",
      authorName: "George Orwell",
      borrowPrice: 3.75,
      rating: 4.7,
      shelfNo: 305,
    },
    {
      id: 5,
      bookName: "Pride and Prejudice",
      bookImg:
        "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
      category: "Classic",
      authorName: "Jane Austen",
      borrowPrice: 3.95,
      rating: 4.9,
      shelfNo: 501,
    },
    {
      id: 6,
      bookName: "The Hobbit",
      bookImg:
        "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
      category: "Fantasy",
      authorName: "J.R.R. Tolkien",
      borrowPrice: 4.15,
      rating: 4.7,
      shelfNo: 605,
    },
    {
      id: 7,
      bookName: "The Catcher in the Rye",
      bookImg:
        "https://www.mercurynews.com/wp-content/uploads/2016/08/20100128__jdsalinger3.jpg?w=400",
      category: "Coming-of-age",
      authorName: "J.D. Salinger",
      borrowPrice: 3.85,
      rating: 4.3,
      shelfNo: 701,
    },
    {
      id: 8,
      bookName: "The Alchemist",
      bookImg: "https://dailyasianage.com/library/1661800353_6.jpg",
      category: "Fantasy",
      authorName: "Paulo Coelho",
      borrowPrice: 4.0,
      rating: 4.5,
      shelfNo: 804,
    },
    {
      id: 9,
      bookName: "Harry Potter and the Sorcerer's Stone",
      bookImg:
        "https://media.npr.org/assets/img/2013/02/13/harrynew_custom-1fa12c2215710024d4fb570714431f00ca671dc1-s800-c85.webp",
      category: "Fantasy",
      authorName: "J.K. Rowling",
      borrowPrice: 4.5,
      rating: 4.8,
      shelfNo: 903,
    },
  ];

  return (
    <div className="container mx-auto bg-[#eff3f8]">
      <div className="my-20">
        <SectionHeader />
        {/* <h1 className="capitalize font-bold text-3xl mt-14 mb-3 text-[#0F86CD]">
          {" "}
          new released books
        </h1>
        <h3 className=" max-w-[450px] mx-auto mb-4">
          Fresh Pages, New Adventures. Discover the latest arrivals in our New
          Releases section
        </h3> */}
      </div>
      <div className="p-4">
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
              <BookCard key={book.id} book={book} />{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewReleasedBook;
