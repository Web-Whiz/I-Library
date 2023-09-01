"use client";
import useAuth from "@/Utils/useAuth";
import { getBookShelf } from "@/Utils/useBookShelf";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const BookShelfModal = ({ book, setAddToBookShelf }) => {
  const { user } = useAuth();
  const [bookShelf] = getBookShelf(user?.email);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(bookShelf[0]?.shelfName);
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleAddToBookShelf = () => {
    console.log(selectedOption);
  };
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <div className="flex items-center gap-5">
              <img
                src={book?.image_url}
                alt={book.title}
                className="w-12 h-16"
              />
              <div>
                <h3 className="text-base md:text-xl font-medium">
                  {book.title}
                </h3>
                <p>Add this book to your virtual bookshelf</p>
              </div>
            </div>
            <button
              className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setAddToBookShelf(false)}
            >
              <span className=" text-red-400 hover:text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none ease-linear transition-all duration-150">
                <AiFillCloseCircle></AiFillCloseCircle>
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <h2 className="my-2 text-lg font-medium">Shelf</h2>
            {/* shelf select */}
            <div className="relative inline-block text-left w-full">
              <div
                className="bg-white w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="mr-1">
                  {selectedOption || "Select a shelf name"}
                </span>
                <span className="ml-1">{isOpen ? "▲" : "▼"}</span>
              </div>
              {isOpen && (
                <div className="absolute w-full mt-2 py-2 bg-white border border-gray-300 rounded-md shadow-sm">
                  {bookShelf.map((option, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                        option.shelfName === selectedOption ? "bg-gray-100" : ""
                      }`}
                      onClick={() => handleOptionChange(option.shelfName)}
                    >
                      {option.shelfName}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* shelf select */}
            <div className="my-4">
              <h2 className="text-lg my-2 font-medium">
                or Create a new shelf
              </h2>
              <input
                type="text"
                placeholder="Type your shelf name"
                className="bg-white w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 outline-none"
              />
            </div>
            <div className="mt-5 text-right w-full">
              <button
                onClick={handleAddToBookShelf}
                className="bg-indigo-500 w-full text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
          {/* body */}
        </div>
      </div>
    </div>
  );
};

export default BookShelfModal;
