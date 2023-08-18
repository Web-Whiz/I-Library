"use client";
import PageBanner from "@/Components/PageBanner/PageBanner";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import banner from '@/assets/banner01.jpg'
import moment from "moment";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import blogImage from "@/assets/banner03.jpg";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("book_reviews.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
   <section>
    <div>
      <PageBanner bannerName="Blogs" bannerImg={banner} />
    </div>

     <div className="container mx-auto">
      <div className="grid lg:grid-cols-6 gap-10">
        <div className="col-span-4">
          {blogs.map((blog) => (
            <div className="flex gap-10 my-6 m-12 bg-white shadow-xl rounded-xl">
              <div className="w-1/2 relative">
                <img
                  className="rounded-l-xl w-full"
                  src={blog?.blog_post_image_url}
                />
                <div className="absolute inset-0 bg-black opacity-70 rounded-l-xl"></div>
                <div className="absolute inset-0 text-white flex flex-col items-center justify-start mt-4">
                  <strong className=" text-2xl mb-6 text-center">
                    {blog?.book_title}
                  </strong>
                  <div></div>
                  <span className="font-extrabold text-sm">
                    Author : {blog?.author}
                  </span>
                  <span className="font-extrabold text-sm">
                    Genre : {blog?.genre}
                  </span>
                  <span className="font-extrabold text-sm">
                    Publication Year : {blog?.publication_year}
                  </span>
                  <br />

                  <span className="font-extrabold text-sm flex items-center gap-1">
                    World Wide Rating:
                    <Rating
                      value={blog?.rating}
                      emptySymbol={
                        <span className="text-gray-300">&#9734;</span>
                      }
                      fullSymbol={
                        <span className="text-yellow-400">&#9733;</span>
                      }
                      readonly
                      style={{ color: "yellow", maxWidth: "100px" }}
                    />
                    
                  </span>
                </div>
              </div>
              <div className="w-1/2 p-6">
                <div className="flex items-center justify-start gap-3">
                  <div>
                    <img
                      className="rounded-full w-10 inline"
                      src={blog?.reviewer?.profile_image_url}
                    />
                  </div>

                  {/* <Image
                    className="rounded-full"
                    src={blog?.reviewer?.profile_image_url}
                    alt="Picture of the blog post"
                    width={40}
                    height={40}
                    quality={100}
                  /> */}
                  <div className="">
                    <strong className="">{blog?.reviewer?.username}</strong>{" "}
                    <br />
                    <em className="text-xs">
                      {moment(blog?.timestamp).format("LL")}
                    </em>{" "}
                    -<em className="text-sm">{blog?.reviewer?.location}</em>
                  </div>
                </div>
                <p className="text-xs my-2 leading-relaxed">
                  {blog?.review_text.split(" ").slice(0, 25).join(" ")} . . .
                  more
                </p>
                <button className="btn bg-[#0F86CD] text-white px-2 py-1">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>  
        <div className="col-span-2 bg-black"></div>
      </div>
    </div>
   </section>
  );
};

export default Blogs;
