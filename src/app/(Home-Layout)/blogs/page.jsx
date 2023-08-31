"use client";
import PageBanner from "@/Components/PageBanner/PageBanner";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import banner from "@/assets/banner01.jpg";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
// import Image from "next/image";
// import blogImage from "@/assets/banner03.jpg";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  const [searchText, setSearchText] = useState("");
  const totalBlogs = allBlogs[1] && allBlogs[1] || 3

  const [blogPerPage, setBlogPerPage] = useState(5);
  const totalPages = Math.ceil(totalBlogs / blogPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  
  const [currentPage, setCurrentPage] = useState(0);

  const options = [5, 10, 20];

  const handleToyPerPage = (event) => {
    setBlogPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_BaseURL}/blogs?page=${currentPage}&limit=${blogPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllBlogs(data);
      });
  }, [currentPage, blogPerPage]);

  return (
    <section>
      {/* <div>
        <PageBanner
          bannerName="Blogs"
          bannerSubTitle="Book Reviews From Book Lovers"
          bannerImg={banner}
        />
      </div> */}

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-6 gap-10">
          <div className="col-span-4">
            {allBlogs[0] && allBlogs[0].filter((blog) => {
                if (searchText == "") {
                  return blog;
                } else if (
                  blog?.book_title
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
                ) {
                  return blog;
                }
              })
              .map((blog) => (
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
                      {blog?.review_text.split(" ").slice(0, 20).join(" ")} . .
                      . {/* <span className="underline">read more</span> */}
                    </p>
                    <button className="btn bg-indigo-700 text-white px-2 py-1">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            {/* Pagination */}
            <div className="text-center p-6">
              <div className="flex justify-center items-center py-3">
                <p className="text-xl uppercase">
                  page {currentPage + 1} of {totalPages} pages
                </p>
                <select
                  value={blogPerPage}
                  onChange={handleToyPerPage}
                  className="border ml-5 mr-2 px-2 py-1 rounded-3xl"
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span>Toys Per Page</span>
              </div>
              {pageNumbers.map((pg) => (
                <button
                  className={currentPage === pg ? "active" : "default"}
                  key={pg}
                  onClick={() => setCurrentPage(pg)}
                >
                  {pg + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-2 bg-white rounded-3xl px-6 shadow-2xl">
            <div className="text-center">
              <label className="text-xl relative right-28 top-10 border-r py-3 pr-3 ">
                Search
              </label>
              <input
                type="text"
                name="search"
                className="border py-3 rounded-3xl pl-28 pr-6"
                placeholder="Type Books Name"
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <FaSearch className="inline text-gray-300 relative left-36 bottom-9 " />
            </div>
            <h4 className="text-indigo-700 font-bold text-center text-2xl underline">
              Review Categories
            </h4>
            <ul className="list-inside list-disc">
              <li className="review_category">Popular Books Reviews</li>
              <li className="review_category">Writters Reviews</li>
              <li className="review_category">Influencer's Reviews</li>
              <li className="review_category">Self Help Books Reviews</li>
              <li className="review_category">Programming Books Reviews</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
