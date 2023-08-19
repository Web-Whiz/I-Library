import React from "react";
import banner from "@/assets/banner01.jpg";
import Image from "next/image";
import BookCard from "@/Components/BookCard/BookCard";
import AllBookCard from "@/Components/AllBookCard/AllBookCard";
import { FaFilter } from "react-icons/fa";
import PageBanner from "@/Components/PageBanner/PageBanner";
const AllBooks = () => {
  const allBooks = [
    {
      id: 1,
      bookName: "Rich Dad Poor Dad",
      bookImg:
        "https://files.instapdf.in/wp-content/uploads/pdf-thumbnails/2021/04/rich-dad-poor-dad-436.webp",
      category: "Personal finance",
      authorName: "Robert Kiyosaki",
      borrowPrice: 4.04,
      rating: 4.6,
      shelfNo: 404,
    },
    {
      id: 2,
      bookName: "To Kill a Mockingbird",
      bookImg:
        "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
      category: "Fiction",
      authorName: "Harper Lee",
      borrowPrice: 3.99,
      rating: 4.8,
      shelfNo: 102,
    },
    {
      id: 3,
      bookName: "The Great Gatsby",
      bookImg:
        "https://www.oldcastlebooks.co.uk/images/large/9780857304568.jpg",
      category: "Fiction",
      authorName: "F. Scott Fitzgerald",
      borrowPrice: 4.25,
      rating: 4.5,
      shelfNo: 207,
    },
    {
      id: 4,
      bookName: "1984",
      bookImg:
        "https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg",
      category: "Dystopian",
      authorName: "George Orwell",
      borrowPrice: 3.75,
      rating: 4.7,
      shelfNo: 305,
    },
    {
      id: 5,
      bookName: "Pride and Prejudice",
      bookImg:
        "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
      category: "Classic",
      authorName: "Jane Austen",
      borrowPrice: 3.95,
      rating: 4.9,
      shelfNo: 501,
    },
    {
      id: 6,
      bookName: "The Hobbit",
      bookImg:
        "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
      category: "Fantasy",
      authorName: "J.R.R. Tolkien",
      borrowPrice: 4.15,
      rating: 4.7,
      shelfNo: 602,
    },
    {
      id: 7,
      bookName: "The Catcher in the Rye",
      bookImg:
        "https://www.mercurynews.com/wp-content/uploads/2016/08/20100128__jdsalinger3.jpg?w=400",
      category: "Coming-of-age",
      authorName: "J.D. Salinger",
      borrowPrice: 3.85,
      rating: 4.3,
      shelfNo: 701,
    },
    {
      id: 8,
      bookName: "The Alchemist",
      bookImg: "https://dailyasianage.com/library/1661800353_6.jpg",
      category: "Fantasy",
      authorName: "Paulo Coelho",
      borrowPrice: 4.0,
      rating: 4.5,
      shelfNo: 804,
    },
    {
      id: 9,
      bookName: "Harry Potter and the Sorcerer's Stone",
      bookImg:
        "https://media.npr.org/assets/img/2013/02/13/harrynew_custom-1fa12c2215710024d4fb570714431f00ca671dc1-s800-c85.webp",
      category: "Fantasy",
      authorName: "J.K. Rowling",
      borrowPrice: 4.5,
      rating: 4.8,
      shelfNo: 903,
    },
    {
      id: 10,
      bookName: "The Hunger Games",
      bookImg:
        "https://www.thebookshop.es/productimages/1200/the-hunger-games---suzanne-collins_269889.jpg",
      category: "Dystopian",
      authorName: "Suzanne Collins",
      borrowPrice: 3.65,
      rating: 4.4,
      shelfNo: 1001,
    },
    {
      id: 11,
      bookName: "Rich Dad Poor Dad",
      bookImg:
        "https://files.instapdf.in/wp-content/uploads/pdf-thumbnails/2021/04/rich-dad-poor-dad-436.webp",
      category: "Personal finance",
      authorName: "Robert Kiyosaki",
      borrowPrice: 4.04,
      rating: 4.6,
      shelfNo: 404,
    },
    {
      id: 12,
      bookName: "To Kill a Mockingbird",
      bookImg:
        "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
      category: "Fiction",
      authorName: "Harper Lee",
      borrowPrice: 3.99,
      rating: 4.8,
      shelfNo: 102,
    },
    {
      id: 13,
      bookName: "The Great Gatsby",
      bookImg:
        "https://www.oldcastlebooks.co.uk/images/large/9780857304568.jpg",
      category: "Fiction",
      authorName: "F. Scott Fitzgerald",
      borrowPrice: 4.25,
      rating: 4.5,
      shelfNo: 207,
    },
    {
      id: 14,
      bookName: "1984",
      bookImg:
        "https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg",
      category: "Dystopian",
      authorName: "George Orwell",
      borrowPrice: 3.75,
      rating: 4.7,
      shelfNo: 305,
    },
    {
      id: 2,
      bookName: "To Kill a Mockingbird",
      bookImg:
        "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
      category: "Fiction",
      authorName: "Harper Lee",
      borrowPrice: 3.99,
      rating: 4.8,
      shelfNo: 102,
    },
    {
      id: 3,
      bookName: "The Great Gatsby",
      bookImg:
        "https://www.oldcastlebooks.co.uk/images/large/9780857304568.jpg",
      category: "Fiction",
      authorName: "F. Scott Fitzgerald",
      borrowPrice: 4.25,
      rating: 4.5,
      shelfNo: 207,
    },
    {
      id: 4,
      bookName: "1984",
      bookImg:
        "https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg",
      category: "Dystopian",
      authorName: "George Orwell",
      borrowPrice: 3.75,
      rating: 4.7,
      shelfNo: 305,
    },
    {
      id: 5,
      bookName: "Pride and Prejudice",
      bookImg:
        "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
      category: "Classic",
      authorName: "Jane Austen",
      borrowPrice: 3.95,
      rating: 4.9,
      shelfNo: 501,
    },
    {
      id: 6,
      bookName: "The Hobbit",
      bookImg:
        "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
      category: "Fantasy",
      authorName: "J.R.R. Tolkien",
      borrowPrice: 4.15,
      rating: 4.7,
      shelfNo: 605,
    },
    {
      id: 7,
      bookName: "The Catcher in the Rye",
      bookImg:
        "https://www.mercurynews.com/wp-content/uploads/2016/08/20100128__jdsalinger3.jpg?w=400",
      category: "Coming-of-age",
      authorName: "J.D. Salinger",
      borrowPrice: 3.85,
      rating: 4.3,
      shelfNo: 701,
    },
    {
      id: 8,
      bookName: "The Alchemist",
      bookImg: "https://dailyasianage.com/library/1661800353_6.jpg",
      category: "Fantasy",
      authorName: "Paulo Coelho",
      borrowPrice: 4.0,
      rating: 4.5,
      shelfNo: 804,
    },
    {
      id: 9,
      bookName: "Harry Potter and the Sorcerer's Stone",
      bookImg:
        "https://media.npr.org/assets/img/2013/02/13/harrynew_custom-1fa12c2215710024d4fb570714431f00ca671dc1-s800-c85.webp",
      category: "Fantasy",
      authorName: "J.K. Rowling",
      borrowPrice: 4.5,
      rating: 4.8,
      shelfNo: 903,
    },
  ];
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
      id: 10,
      category_name: "Kid's Books",
    },

    {
      id: 11,
      category_name: "Biography",
    },

    {
      id: 12,
      category_name: "Science",
    },
    {
      id: 13,
      category_name: "History",
    },
    {
      id: 14,
      category_name: "Philosophy",
    },
  ];
  return (
    <div>
      <div>
        <PageBanner bannerImg={banner} bannerName="All Books" />
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-8 my-10">
        <div className="col-span-3 hidden lg:block">
          <div className="bg-white w-full h-fit p-4">
            <h2 className="text-lg font-semibold">Category:</h2>
            {categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="flex justify-between ml-4 my-2"
                >
                  <h2 className="hover:text-indigo-600 duration-200 cursor-pointer">
                    {category?.category_name}
                  </h2>
                  <h3 className="text-gray-400">(205)</h3>
                </div>
              );
            })}
          </div>
          <div className="bg-white w-full h-fit my-5 p-4">
            <h2 className="text-lg font-semibold">Author:</h2>
            {categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="flex justify-between ml-4 my-2"
                >
                  <h2 className="hover:text-indigo-600 duration-200 cursor-pointer">
                    {category?.category_name}
                  </h2>
                  <h3 className="text-gray-400">(205)</h3>
                </div>
              );
            })}
          </div>
          <div className="bg-white w-full h-fit p-4">
            <h2 className="text-lg font-semibold">Publisher:</h2>
            {categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="flex justify-between ml-4 my-2"
                >
                  <h2 className="hover:text-indigo-600 duration-200 cursor-pointer">
                    {category?.category_name}
                  </h2>
                  <h3 className="text-gray-400">(205)</h3>
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
          {allBooks.map((book) => {
            return <AllBookCard key={book.id} book={book} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
