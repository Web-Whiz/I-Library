"use client";
import AuthorCard from "@/Components/AuthorCard/AuthorCard";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PopularAuthors.css";

// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const PopularAuthors = () => {
  const authors = [
    {
      id: 1,
      author_img:
        "https://www.writermag.com/wp-content/uploads/2015/09/russell-banks.jpg",
      author_name: "Enoch Gallion",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 2,
      author_img:
        "https://blog.workman.com/wp-content/uploads/2018/10/Jim-Mustich-Color-%C2%A9-Trisha-Keeler-Photography-200x300.jpg",
      author_name: "Enoch Gallion",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 3,
      author_img:
        "https://septemberpublishing.org/wp-content/uploads/2021/03/Bruce-Fogle-3.jpg",
      author_name: "Enoch Gallion",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 4,
      author_img:
        "https://www.writermag.com/wp-content/uploads/2015/09/russell-banks.jpg",
      author_name: "Enoch Gallion",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 5,
      author_img:
        "https://images.squarespace-cdn.com/content/v1/5784b8d1b8a79b20f4381bc5/1627468750772-OTVPYEWT5VGUTREJOHNM/Glenn+Adamson+c.John+Michael+Kohler.jpg",
      author_name: "Enoch Gallion",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 6,
      author_img:
        "https://library.nashville.org/sites/default/files/images/blog/rashad_rayford_civil_freestyle.jpg",
      author_name: "Enoch Gallion",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 7,
      author_img:
        "https://www.writermag.com/wp-content/uploads/2015/09/russell-banks.jpg",
      author_name: "Enoch Gallion",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 8,
      author_img:
        "https://blog.workman.com/wp-content/uploads/2018/10/Jim-Mustich-Color-%C2%A9-Trisha-Keeler-Photography-200x300.jpg",
      author_name: "Enoch Gallion",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 9,
      author_img:
        "https://septemberpublishing.org/wp-content/uploads/2021/03/Bruce-Fogle-3.jpg",
      author_name: "Enoch Gallion",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 10,
      author_img:
        "https://www.writermag.com/wp-content/uploads/2015/09/russell-banks.jpg",
      author_name: "Enoch Gallion",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 11,
      author_img:
        "https://images.squarespace-cdn.com/content/v1/5784b8d1b8a79b20f4381bc5/1627468750772-OTVPYEWT5VGUTREJOHNM/Glenn+Adamson+c.John+Michael+Kohler.jpg",
      author_name: "Enoch Gallion",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 12,
      author_img:
        "https://library.nashville.org/sites/default/files/images/blog/rashad_rayford_civil_freestyle.jpg",
      author_name: "Enoch Gallion",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
  ];

  return (
    <section className="container mx-auto p-8 md:p-5 2xl:p-0 my-20">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-base md:text-xl font-medium text-[#777777] mb-1">
            Strong Minds Behind Us
          </h6>
          <h2 className="text-xl md:text-3xl md:tracking-wider">
            Most Popular Authors
          </h2>
        </div>

        <div>
          <button
            type="button"
            className="text-[#B8B8B8] font-medium h-12 w-24 md:w-32 text-base rounded-full border border-[#B8B8B8] hover:bg-indigo-500 transition hover:text-white"
          >
            View all
          </button>
        </div>
      </div>
      <hr className="my-8  border border-black" />
      <div className="">
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
                <AuthorCard key={author.id} author={author} />{" "}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularAuthors;
