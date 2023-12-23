"use client";
import FilteredBooksGrid from "@/Components/FilteredBooksGrid/FilteredBooksGrid";
import PageBanner from "@/Components/PageBanner/PageBanner";
import {
  getAuthorFilteredBook,
  getBookAuthor,
  getBookCategory,
  getBookPublisher,
  getBooks,
  getCategoryFilteredBook,
  getPublisherFilteredBook,
} from "@/Utils/useBooks";
import banner from "@/assets/banner01.jpg";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

const AllBooks = () => {
  const [categories] = getBookCategory();
  const [authors] = getBookAuthor();
  const [publishers] = getBookPublisher();
  const [allBooks] = getBooks();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedPublishers, setSelectedPublishers] = useState([]);

  // State variables for sorting
  const [sortBy, setSortBy] = useState("title"); // Default sort by title
  const [sortOrder, setSortOrder] = useState("ascending"); // Default sort in ascending order

  const [categoriesToShow, setCategoriesToShow] = useState(12);
  const categoriesPerPage = 12;

  const [authorsToShow, setAuthorsToShow] = useState(12);
  const authorsPerPage = 12;

  const [publishersToShow, setPublishersToShow] = useState(12);
  const publishersPerPage = 12;

  const [categoryFilteredBook, categoryRefetch] =
    getCategoryFilteredBook(selectedCategories);

  const [authorFilteredBook, authorRefetch] =
    getAuthorFilteredBook(selectedAuthors);

  const [publisherFilteredBook, publisherRefetch] =
    getPublisherFilteredBook(selectedPublishers);

  const handleFilterByCategory = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((category) => category !== categoryName)
      );
    } else {
      setSelectedCategories((prevCategories) => [
        ...prevCategories,
        categoryName,
      ]);
    }
  };
  categoryRefetch();

  const handleFilterByAuthor = (authorName) => {
    if (selectedAuthors.includes(authorName)) {
      setSelectedAuthors((prevAuthors) =>
        prevAuthors.filter((author) => author !== authorName)
      );
    } else {
      setSelectedAuthors((prevAuthors) => [...prevAuthors, authorName]);
    }
  };
  authorRefetch();

  const handleFilterByPublisher = (publisherName) => {
    if (selectedPublishers.includes(publisherName)) {
      setSelectedPublishers((prevPublishers) =>
        prevPublishers.filter((publisher) => publisher !== publisherName)
      );
    } else {
      setSelectedPublishers((prevPublishers) => [
        ...prevPublishers,
        publisherName,
      ]);
    }
  };
  publisherRefetch();

  // Function to handle sorting
  const handleSort = (criteria) => {
    if (criteria === sortBy) {
      // Toggle sorting order if the same criterion is selected again
      setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
    } else {
      // Change the sorting criterion and default to ascending order
      setSortBy(criteria);
      setSortOrder("ascending");
    }
  };

  // Function to sort books based on the selected criterion and order
  const sortBooks = (books) => {
    return [...books].sort((a, b) => {
      if (sortOrder === "ascending") {
        return a[sortBy].localeCompare(b[sortBy]);
      } else {
        return b[sortBy].localeCompare(a[sortBy]);
      }
    });
  };

  return (
    <div>
      <div>
        <PageBanner bannerImg={banner} bannerName="All Books" />
      </div>
      <div className="container mx-auto flex items-start justify-between gap-8 my-10 w-full">
        {/* filter option */}
        <div className="hidden lg:block w-[40%] xl:w-[20%]">
          <div className="bg-white w-full h-fit p-4">
            <h2 className="text-lg font-semibold">Categories :</h2>
            {categories.slice(0, categoriesToShow).map((category) => {
              return (
                <div
                  key={category.category}
                  className="flex justify-between ml-4 my-2"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterByCategory(category.category)}
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
            {categories.length > categoriesToShow && (
              <div className="w-full text-right">
                <button
                  className="text-indigo-700"
                  onClick={() =>
                    setCategoriesToShow(categoriesToShow + categoriesPerPage)
                  }
                >
                  See More
                </button>
              </div>
            )}
          </div>
          <div className="bg-white w-full h-fit my-5 p-4">
            <h2 className="text-lg font-semibold">Authors :</h2>
            {authors.slice(0, authorsToShow).map((author) => {
              return (
                <div
                  key={author.author}
                  className="flex justify-between ml-4 my-2"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterByAuthor(author.author)}
                      id={author.author}
                      name="authorFilter"
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
            {authors.length > authorsToShow && (
              <div className="w-full text-right">
                <button
                  className="text-indigo-700"
                  onClick={() =>
                    setAuthorsToShow(authorsToShow + authorsPerPage)
                  }
                >
                  See More
                </button>
              </div>
            )}
          </div>
          <div className="bg-white w-full h-fit p-4">
            <h2 className="text-lg font-semibold">Publications :</h2>
            {publishers.slice(0, publishersToShow).map((publisher) => {
              return (
                <div
                  key={publisher.publisher}
                  className="flex justify-between ml-4 my-2"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={publisher.publisher}
                      onChange={() =>
                        handleFilterByPublisher(publisher.publisher)
                      }
                      name="publisherFilter"
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
            {publishers.length > publishersToShow && (
              <div className="w-full text-right">
                <button
                  className="text-indigo-700"
                  onClick={() =>
                    setPublishersToShow(publishersToShow + publishersPerPage)
                  }
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </div>
        {/* filter option  */}
        {/* book card */}
        <div className="xl:w-[80%]">
          <div className="bg-white w-full mb-5 h-20 flex items-center justify-between lg:justify-end px-5">
            <button className="bg-[#EFF3F8] gap-2 px-3 py-2 rounded-sm hidden">
              <span>
                <FaFilter />
              </span>
              <span>Filter</span>
            </button>
            <div className="flex items-center gap-2">
              <label htmlFor="sortOption" className="font-medium">
                Sort by :
              </label>
              <select
                name="sortOption"
                className="outline-0 rounded-sm px-3 py-2 bg-[#EFF3F8]"
                id="sortOption"
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="title">Title</option>
                <option value="author">Author</option>
                {/* Add more sorting criteria as needed */}
              </select>
              <span className="font-medium">in</span>
              <button
                className="text-indigo-700 font-medium"
                onClick={() => handleSort(sortBy)} // Toggle sorting order
              >
                {sortOrder === "ascending" ? "Ascending" : "Descending"}
              </button>
            </div>
          </div>

          {/* Filtered Books Grid */}
          <FilteredBooksGrid
            filteredBooks={
              selectedCategories.length > 0
                ? categoryFilteredBook
                : selectedAuthors.length > 0
                ? authorFilteredBook
                : selectedPublishers.length > 0
                ? publisherFilteredBook
                : sortBooks(allBooks) // Apply sorting to all books
            }
            allBooks={allBooks}
          />
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
