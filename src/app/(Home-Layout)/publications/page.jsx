"use client";
import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner01.jpg";
import PageBanner from "@/Components/PageBanner/PageBanner";
import { useState } from "react";

const PublicationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllPublications, setShowAllPublications] = useState(false);

  const publications = [
    {
      id: 1,
      name: "Abacas",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 2,
      name: "Alfa",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 3,
      name: "Book Readers",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 4,
      name: "Donika Publishing",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 5,
      name: "Harpwe Black",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 6,
      name: "Islamic Foundation",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 7,
      name: "Loft",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 8,
      name: "Book Readers",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 9,
      name: "Donika Publishing",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 10,
      name: "Harpwe Black",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 11,
      name: "Islamic Foundation",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 12,
      name: "Abacas Publications",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 13,
      name: "Abacas",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 14,
      name: "Alfa",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 15,
      name: "Book Readers",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 16,
      name: "Donika Publishing",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 17,
      name: "Harpwe Black",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
    {
      id: 18,
      name: "Islamic Foundation",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
    },
  ];

  const togglePublicationsVisibility = () => {
    setShowAllPublications(!showAllPublications);
  };

  const filteredPublications = publications.filter((publication) =>
    publication.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const setSearchQueryAndReset = (newQuery) => {
    setSearchQuery(newQuery);
    setShowAllPublications(false); // Reset the showAllPublications state
  };

  return (
    <div>
      {/* Publications Banner */}
      <div>
        <PageBanner bannerName="Publications" bannerImg={banner} />
      </div>
      <section className="container mx-auto mt-20 mb-40">
        {/* Publications Search */}
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

        {filteredPublications.length === 0 && (
          <p className="text-center text-red-500 font-medium mt-4 text-lg">
            No Publications Found.
          </p>
        )}

        {/* All Publications */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 md:gap-y-24">
          {filteredPublications
            .slice(0, showAllPublications ? undefined : 12)
            .map((publication) => (
              <Link
                key={publication?.id}
                href="/"
                className="flex items-center justify-center"
              >
                <div
                  title={publication?.name}
                  style={{
                    width: "140px",
                    height: "140px",
                  }}
                  className="text-center text-gray-900 hover:text-indigo-700 rounded-full mx-auto border-2 border-solid border-gray-500 hover:border-indigo-500 transition-all"
                >
                  <img
                    style={{
                      filter: "grayscale(100%)",
                    }}
                    src={publication?.img}
                    alt={publication?.name}
                    className="mx-auto rounded-full"
                  />
                  <h6 className="text-sm font-medium text-center mt-3">
                    {publication?.name}
                  </h6>
                </div>
              </Link>
            ))}
        </div>
        {/* "See All Publications" button */}
        {searchQuery === "" && (
          <div className="flex items-center justify-center mt-28">
            <button
              onClick={togglePublicationsVisibility}
              type="button"
              className="w-60 h-16 border-solid border border-indigo-400 text-lg font-medium rounded-md text-[#333333] hover:bg-indigo-700 hover:text-white hover:transition-all"
            >
              {showAllPublications ? "Show Less" : "See All Publications"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default PublicationsPage;
