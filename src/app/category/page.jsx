"use client";
import PopularAuthors from "@/Page/Home/PopularAuthors/PopularAuthors";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import banner from "../../assets/banner01.jpg";

const CategoryPage = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const categories = [
    {
      id: 1,
      category_name: "Fiction",
    },
    {
      id: 3,
      category_name: "Fantasy",
    },
    {
      id: 4,
      category_name: "Mystery",
    },
    {
      id: 5,
      category_name: "Thriller",
    },
    {
      id: 6,
      category_name: "Romance",
    },

    {
      id: 8,
      category_name: "Horror",
    },
    {
      id: 9,
      category_name: "Adventure",
    },

    {
      id: 11,
      category_name: "Kid's Books",
    },

    {
      id: 13,
      category_name: "Biography",
    },

    {
      id: 15,
      category_name: "Science",
    },
    {
      id: 16,
      category_name: "History",
    },
    {
      id: 17,
      category_name: "Philosophy",
    },
    {
      id: 7,
      category_name: "Historical Fiction",
    },
    {
      id: 10,
      category_name: "Young Adult",
    },
    {
      id: 12,
      category_name: "Non-Fiction",
    },
    {
      id: 19,
      category_name: "Cookbooks",
    },
    {
      id: 2,
      category_name: "Science Fiction",
    },
    {
      id: 18,
      category_name: "Travel",
    },
  ];

  const subsetOfCategories = categories.slice(0, 12);

  const toggleCategoriesVisibility = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <div>
      <div className="relative">
        <Image
          className="h-60 object-cover w-full object-center"
          src={banner}
          alt="Category"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-950/10 backdrop-blur-md" />
        <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-white font-bold">
          Category
        </h2>
      </div>
      <section className="container mx-auto p-5 mt-20 mb-40">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
          {showAllCategories
            ? categories.map((category) => (
                <Link key={category?.id} href="/">
                  <div className="w-full h-16 bg-indigo-200 border-solid border border-indigo-400 rounded-md flex items-center justify-center text-[#333333] hover:bg-indigo-500 hover:text-white hover:transition-all">
                    <h6 className="text-lg font-medium">
                      {category?.category_name}
                    </h6>
                  </div>
                </Link>
              ))
            : subsetOfCategories.map((category) => (
                <Link key={category?.id} href="/">
                  <div className="w-full h-16 bg-indigo-200 border-solid border border-indigo-400 rounded-md flex items-center justify-center text-[#333333] hover:bg-indigo-500 hover:text-white hover:transition-all">
                    <h6 className="text-lg font-medium">
                      {category?.category_name}
                    </h6>
                  </div>
                </Link>
              ))}
        </div>
        <div className="flex items-center justify-center mt-12">
          <button
            onClick={toggleCategoriesVisibility}
            type="button"
            className="w-60 h-16 border-solid border border-indigo-400 text-lg font-medium rounded-md text-[#333333] hover:bg-indigo-500 hover:text-white hover:transition-all"
          >
            {showAllCategories ? "Show Less" : "See All"}
          </button>
        </div>
      </section>
      {/* Popular Authors */}
      <PopularAuthors></PopularAuthors>
    </div>
  );
};

export default CategoryPage;
