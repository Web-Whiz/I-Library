"use client";
import PageBanner from "@/Components/PageBanner/PageBanner";
import { getAuthors } from "@/Utils/useBooks";
import banner from "@/assets/banner01.jpg";
import Link from "next/link";
import { useState } from "react";

const AuthorPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllAuthors, setShowAllAuthors] = useState(false);

  const [authors] = getAuthors();

  const subsetOfAuthors = authors.slice(0, 12);

  const toggleAuthorsVisibility = () => {
    setShowAllAuthors(!showAllAuthors);
  };

  const filteredAuthors = authors.filter((author) =>
    author.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const setSearchQueryAndReset = (newQuery) => {
    setSearchQuery(newQuery);
    setShowAllAuthors(false);
  };

  return (
    <div>
      <PageBanner bannerName="Author" bannerImg={banner} />

      <section className="container mx-auto p-5 mt-20 mb-40">
        {/* Authors Search */}
        <form className="flex items-center justify-center">
          <div>
            <label>
              <input
                type="text"
                className="outline-0 px-3 py-2 rounded-l-md rounded-r-none w-3/4 md:w-[350px] bg-[#EFF3F8] border-l-2 border-b-2 border-t-2 border-indigo-500 text-sm md:text-base"
                placeholder="Search Your Favorite Publisher"
                value={searchQuery}
                onChange={(e) => setSearchQueryAndReset(e.target.value)}
              />
            </label>
            <button className="bg-indigo-700 p-2 text-white border-2 border-indigo-500 rounded-l-none rounded-r-md text-sm md:text-base">
              Search
            </button>
          </div>
        </form>
        <hr className="mt-6 mb-20 border-black" />

        {filteredAuthors.length === 0 && (
          <p className="text-center text-red-500 font-medium mt-4 text-lg">
            No Authors Found.
          </p>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-8 md:gap-y-16">
          {filteredAuthors
            .slice(0, showAllAuthors ? undefined : 12)
            .map((author) => (
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
        {/* "See All Authors" button */}
        {searchQuery === "" && (
          <div className="flex items-center justify-center mt-16">
            <button
              onClick={toggleAuthorsVisibility}
              type="button"
              className="w-60 h-16 border-solid border border-indigo-400 text-lg font-medium rounded-md text-[#333333] hover:bg-indigo-700 hover:text-white hover:transition-all"
            >
              {showAllAuthors ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default AuthorPage;
