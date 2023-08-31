"use client";
import banner from "@/assets/banner01.jpg";
import AllBookCard from "@/Components/AllBookCard/AllBookCard";
import { FaFilter } from "react-icons/fa";
import PageBanner from "@/Components/PageBanner/PageBanner";
import {
  getBookAuthor,
  getBookCategory,
  getBookPublisher,
  getBooks,
  getCategoryFilteredBook,
} from "@/Utils/useBooks";
import { useEffect, useState } from "react";
const AllBooks = () => {
  const [categories] = getBookCategory();
  const [authors] = getBookAuthor();
  const [publishers] = getBookPublisher();
  const [allBooks] = getBooks();
  const [books, setBooks] = useState(null);
  let filterCategory = [];
  const [categoryFilteredBook, refetch] =
    getCategoryFilteredBook(filterCategory);

  const handleFilterByCategory = (categoryName) => {
    if (filterCategory.includes(categoryName)) {
      filterCategory = filterCategory.filter(
        (category) => category !== categoryName
      );
    } else {
      filterCategory.push(categoryName);
    }
    refetch();
    console.log(filterCategory);
    console.log(categoryFilteredBook);
  };

  return (
    <div>
      <div>
        <PageBanner bannerImg={banner} bannerName="All Books" />
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-8 my-10">
        <div className="col-span-3 hidden lg:block">
          <div className="bg-white w-full h-fit p-4">
            <h2 className="text-lg font-semibold">Category:</h2>
            {categories.length >= 12 &&
              categories.slice(4, 16).map((category) => {
                return (
                  <div
                    key={category.category}
                    className="flex justify-between ml-4 my-2"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        onChange={() =>
                          handleFilterByCategory(category.category)
                        }
                        id={category.category}
                        name="categoryFilter"
                      />
                      <label
                        htmlFor={category.category}
                        className="hover:text-indigo-600 duration-200 cursor-pointer"
                      >
                        {category.category}
                      </label>
                    </div>
                    <h3 className="text-gray-400">({category.count})</h3>
                  </div>
                );
              })}
            {categories.length >= 10 && (
              <div className="w-full text-right">
                <button className="text-indigo-700">see more</button>
              </div>
            )}
          </div>
          <div className="bg-white w-full h-fit my-5 p-4">
            <h2 className="text-lg font-semibold">Author:</h2>
            {authors.map((author) => {
              return (
                <div
                  key={author.author}
                  className="flex justify-between ml-4 my-2"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={author.author}
                      name="categoryFilter"
                    />
                    <label
                      htmlFor={author.author}
                      className="hover:text-indigo-600 duration-200 cursor-pointer"
                    >
                      {author.author}
                    </label>
                  </div>
                  <h3 className="text-gray-400">({author.count})</h3>
                </div>
              );
            })}
          </div>
          <div className="bg-white w-full h-fit p-4">
            <h2 className="text-lg font-semibold">Publisher:</h2>
            {publishers.map((publisher) => {
              return (
                <div
                  key={publisher.publisher}
                  className="flex justify-between ml-4 my-2"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={publisher.publisher}
                      name="categoryFilter"
                    />
                    <label
                      htmlFor={publisher.publisher}
                      className="hover:text-indigo-600 duration-200 cursor-pointer"
                    >
                      {publisher.publisher}
                    </label>
                  </div>
                  <h3 className="text-gray-400">({publisher.count})</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center lg:justify-self-end gap-4">
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-3 xl:col-span-4 2xl:col-span-5 bg-white w-full h-20 flex items-center justify-between lg:justify-end px-5">
            <button className="bg-[#EFF3F8] flex items-center gap-2 px-3 py-2 rounded-sm lg:hidden">
              <span>
                <FaFilter />
              </span>
              <span>Filter</span>
            </button>
            <div className="flex items-center gap-2">
              <label htmlFor="sortOption" className="font-medium">
                Sorted by:
              </label>
              <select
                name="softOption"
                className="outline-0 rounded-sm px-3 py-2 bg-[#EFF3F8]"
                id="sortOption"
              >
                <option value="Default" defaultValue>
                  Default
                </option>
                <option value="Default">Ascending</option>
                <option value="Default">Descending</option>
              </select>
            </div>
          </div>
          {books
            ? books.map((book) => {
                return <AllBookCard key={book._id} book={book} />;
              })
            : allBooks.map((book) => {
                return <AllBookCard key={book._id} book={book} />;
              })}
        </div>
      </div>

      {/* pagination button */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="container mx-auto">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing
                <span className="font-medium"> 1 </span>
                to
                <span className="font-medium"> 10 </span>
                of
                <span className="font-medium"> 97 </span>
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* pagination button */}
    </div>
  );
};

export default AllBooks;
