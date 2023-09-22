"use client";
import PageBanner from "@/Components/PageBanner/PageBanner";
import PopularAuthors from "@/Page/Home/PopularAuthors/PopularAuthors";
import { getBookCategory } from "@/Utils/useBooks";
import banner from "@/assets/banner01.jpg";
import Link from "next/link";
import { useState } from "react";
import './catogry.css'

const CategoryPage = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [categories] = getBookCategory();
  const subsetOfCategories = categories.slice(0, 12);

  const toggleCategoriesVisibility = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <div>
      <div>
        <PageBanner bannerImg={banner} bannerName="Category" />
      </div>
      <section className="container mx-auto p-5 mt-20 mb-40">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {showAllCategories
            ? categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/category?name=${encodeURIComponent(
                    category?.category
                  )}`}
                  as={`/category/${encodeURIComponent(category?.category)}`}
                >
                  <div  className="w-full h-16 bg-indigo-200 border-solid border border-indigo-400 rounded-md flex items-center justify-center text-[#333333] hover:bg-indigo-700 hover:text-white hover:transition-all">
                    <h6 className="text-lg font-medium">
                      {category?.category}
                    </h6>
                  </div>
                </Link>
              ))
            : subsetOfCategories.map((category, index) => (
                <Link
                  key={index}
                  href={`/category?name=${encodeURIComponent(
                    category?.category
                  )}`}
                  as={`/category/${encodeURIComponent(category?.category)}`}
                >
                  <div className="w-full h-16 bg-indigo-200 border-solid border border-indigo-400 rounded-md flex items-center justify-center text-[#333333] hover:bg-indigo-700 hover:text-white hover:transition-all">
                    <h6 className="text-lg font-medium">
                      {category?.category}
                    </h6>
                  </div>
                </Link>
              ))}
        </div>
        <div className="flex items-center justify-center mt-12">
          <button
            onClick={toggleCategoriesVisibility}
            type="button"
            className="w-60 h-16 border-solid border border-indigo-400 text-lg font-medium rounded-md text-[#333333] hover:bg-indigo-700 hover:text-white hover:transition-all"
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
