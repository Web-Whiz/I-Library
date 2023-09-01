"use client";

import useAuth from "@/Utils/useAuth";
import { getBookShelf } from "@/Utils/useBookShelf";
import Link from "next/link";
import { BiSolidEdit, BiSolidEditAlt } from "react-icons/bi";
import { GiBookshelf } from "react-icons/gi";
import { MdDeleteForever, MdSearch } from "react-icons/md";

const BookShelf = () => {
  const { user } = useAuth();
  const [bookShelf] = getBookShelf(user?.email);
  const handleDeleteShelf = (id) => {
    
  };
  return (
    <div className="bg-white w-full shadow-lg p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Book shelf page</h2>
        <div className="flex items-center">
          <span className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <MdSearch className="text-gray-400 text-lg"></MdSearch>
          </span>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="Search your book shelf"
            type="email"
            required
          />
        </div>
      </div>
      <div className="my-10 grid grid-cols-4 gap-8">
        {bookShelf.map((shelf) => {
          return (
            <Link
              href={`/dashboard/book-shelf/${shelf._id}`}
              key={shelf._id}
              className="bg-gray-100 shadow-md p-6 rounded-md"
            >
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <GiBookshelf className="text-xl" />
                  <h2 className="text-xl font-semibold">{shelf.shelfName}</h2>
                </div>
                <div className="space-x-4">
                  <button
                    onClick={() => handleDeleteShelf(shelf._id)}
                    className="text-2xl text-gray-400 hover:text-indigo-700 duration-150"
                  >
                    <MdDeleteForever />
                  </button>
                  <button className="text-2xl text-gray-400 hover:text-indigo-700 duration-150">
                    <BiSolidEditAlt />
                  </button>
                </div>
              </div>
              <h3 className="mt-4">Total Books: {shelf.books.length}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BookShelf;
