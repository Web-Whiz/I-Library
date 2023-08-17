"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import blogImage from "@/assets/banner03.jpg";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("book_reviews.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-6 gap-10">

        <div className="col-span-4">
          {blogs.map((blog) => (
            <div>
                
              <Image
                src={blogImage}
                alt="Picture of the blog post"
                width={400}
                height={""}
                quality={100}
              />

              <h2>{blog?.author}</h2>
              <h4>{blog?.book_title}</h4>

              <p>{blog?.review_text}</p>
            </div>
          ))}
        </div>
        <div className="col-span-2 bg-black"></div>
      </div>
    </div>
  );
};

export default Blogs;
