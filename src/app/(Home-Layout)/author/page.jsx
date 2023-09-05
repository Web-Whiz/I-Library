"use client";
import PageBanner from "@/Components/PageBanner/PageBanner";
import { getAuthors } from "@/Utils/useBooks";
import banner from "@/assets/banner01.jpg";
import Link from "next/link";
import { useState } from "react";

const AuthorPage = () => {
  const [showAllAuthors, setShowAllAuthors] = useState(false);

  const [authors] = getAuthors();

  const subsetOfAuthors = authors.slice(0, 12);

  const toggleAuthorsVisibility = () => {
    setShowAllAuthors(!showAllAuthors);
  };

  return (
    <div>
      <PageBanner bannerName="Author" bannerImg={banner} />

      <section className="container mx-auto p-5 mt-20 mb-40">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-8 md:gap-y-16">
          {showAllAuthors
            ? authors.map((author) => (
                <Link
                  key={author?._id}
                  // href={`/author/${author?._id}`}
                  href={`/author?id=${encodeURIComponent(author?._id)}`}
                  as={`/author/${encodeURIComponent(author?._id)}`}
                  className="flex items-center justify-center"
                >
                  <div className="text-center text-gray-900 hover:text-indigo-700">
                    <img
                      style={{ width: "140px", height: "140px" }}
                      src={author?.author_img}
                      alt={author?.author}
                      className="rounded-full mx-auto border-2 border-solid border-gray-500 hover:border-indigo-500 transition-all"
                    />
                    <h6 className="text-lg font-medium text-center mt-5">
                      {author?.author}
                    </h6>
                  </div>
                </Link>
              ))
            : subsetOfAuthors.map((author) => (
                <Link
                  key={author?._id}
                  // href={`/author/${author?._id}`}
                  href={`/author?id=${encodeURIComponent(author?._id)}`}
                  as={`/author/${encodeURIComponent(author?._id)}`}
                  className="flex items-center justify-center"
                >
                  <div className="text-center text-gray-900 hover:text-indigo-700">
                    <img
                      style={{ width: "140px", height: "140px" }}
                      src={author?.author_img}
                      alt={author?.author}
                      className="rounded-full mx-auto border-2 border-solid border-gray-500 hover:border-indigo-500 transition-all"
                    />
                    <h6 className="text-lg font-medium text-center mt-5">
                      {author?.author}
                    </h6>
                  </div>
                </Link>
              ))}
        </div>
        <div className="flex items-center justify-center mt-16">
          <button
            onClick={toggleAuthorsVisibility}
            type="button"
            className="w-60 h-16 border-solid border border-indigo-400 text-lg font-medium rounded-md text-[#333333] hover:bg-indigo-700 hover:text-white hover:transition-all"
          >
            {showAllAuthors ? "Show Less" : "View All"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AuthorPage;
