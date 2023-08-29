"use client";
import Modal from "@/Components/Modal/Modal";
import QAModal from "@/Components/QAModal/QAModal";
import useAuth from "@/Utils/useAuth";
import { getBook } from "@/Utils/useBooks";
import useQA from "@/Utils/useQA";
import useReviewsAndRatings from "@/Utils/useReviewsAndRatings";
import bookImg from "@/assets/book1.png";
import Image from "next/image";
import { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { PiSealCheckFill } from "react-icons/pi";
import Rating from "react-rating";

const Book = ({ params }) => {
  const [book] = getBook(params.id);
  // console.log(book);
  const { user } = useAuth();
  const [showPdf, setShowPdf] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showQAModal, setShowQAModal] = useState(false);
  const [reviews] = useReviewsAndRatings();
  const [qas] = useQA();

  const togglePdfViewer = () => {
    setShowPdf(true);
    console.log(showPdf);
  };
  const getStarValue = (e) => {
    console.log(e);
  };
  return (
    <section>
      <div className="container mx-auto bg-white flex justify-between flex-col lg:flex-row shadow-lg">
        <div className="w-full lg:w-[70%] items-center justify-center grid grid-cols-1 sm:grid-cols-5 gap-10 p-6">
          {/* book image */}
          <div className="sm:col-span-2">
            <div className="w-full p-6 border-[#EAE6E6] border-[1px]">
              <img
                className="w-full h-[215px] object-contain object-center hover:scale-150 duration-500"
                src={book.image_url}
                alt="book img"
              />
            </div>
            <button className="px-3 mt-6 rounded-sm py-2 bg-violet-100 text-violet-700 hover:text-violet-100 hover:bg-violet-700 duration-200 text-[15px] w-full">
              Add to virtual book self
            </button>
          </div>
          {/* book image */}
          {/* book info */}
          <div className="sm:col-span-3">
            <h2 className="text-2xl font-medium">{book.title}</h2>
            <h4 className="text-sm">
              by
              <span className="text-[#0386FF] cursor-pointer">
                {book.author}
              </span>
            </h4>
            <h4 className="mt-7 text-sm">
              Category:
              <span className="text-[#0386FF] cursor-pointer">
                {book.category}
              </span>
            </h4>
            <h4 className="text-sm">
              Self no: <span>{book.shelf}</span>
            </h4>
            <div className="flex items-center gap-3 mt-1">
              <Rating
                placeholderRating={book.ratings}
                className="space-x-1"
                readonly
                emptySymbol={
                  <BsStar className="text-lg sm:text-2xl text-[#FF9900]" />
                }
                placeholderSymbol={
                  <BsStarFill className="text-[#FF9900] text-lg sm:text-2xl" />
                }
                fullSymbol={
                  <BsStarFill className="text-[#FF9900] text-lg sm:text-2xl" />
                }
              />
              <h3 className="text-sm">200 Ratings | 121 Reviews</h3>
            </div>
            <div className="mt-2">
              <h3 className="text-[16px]">Availability</h3>
              <ul className="list-none ml-3">
                <li className="flex gap-2 items-center text-sm py-1">
                  <PiSealCheckFill className="text-[#3DB473]" /> Hard copy
                </li>
                <li className="flex gap-2 items-center text-sm py-1">
                  <PiSealCheckFill className="text-[#3DB473]" /> PDF version
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-[70%] lg:w-[65%]">
              <button className="w-full px-3 rounded-sm py-2 bg-violet-100 text-violet-700 hover:text-violet-100 hover:bg-violet-700 duration-200 text-[15px]">
                At a glance
              </button>
              <div className="grid grid-cols-2 w-full gap-2 mt-2">
                <button
                  onClick={togglePdfViewer}
                  className="px-3 py-2 bg-violet-600 text-violet-100 hover:bg-violet-100 hover:text-violet-600 duration-200"
                >
                  Read PDF
                </button>
                {/* pdf components */}
                {/* pdf components */}

                <button className="px-3 py-2 bg-violet-600 text-violet-100 hover:bg-violet-100 hover:text-violet-600 duration-200">
                  Borrow
                </button>
              </div>
            </div>
          </div>
          {/* book info */}
        </div>
        {/* related books */}
        <div className="w-full lg:w-[30%] bg-[#EFF3F8] p-5">
          <h2 className="text-2xl font-semibold mb-3">Related books</h2>
          {/* book card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 justify-center gap-4">
            <div className="flex items-center gap-5 md:gap-2 xl:gap-5 bg-white p-2 rounded-sm">
              <div>
                <Image width={60} src={bookImg} alt="" />
              </div>
              <div>
                <h2 className="text-[15px] font-medium">
                  Rich dad and poor dad
                </h2>
                <h4 className="text-[12px]">
                  by
                  <span className="text-[#0386FF] cursor-pointer">
                    Robert T. Kiyosaki
                  </span>
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <Rating
                    placeholderRating={4.5}
                    className="space-x-1"
                    readonly
                    emptySymbol={
                      <BsStar className="text-[#FF9900] text-[15px]" />
                    }
                    placeholderSymbol={
                      <BsStarFill className="text-[#FF9900] text-[15px]" />
                    }
                    fullSymbol={
                      <BsStarFill className="text-[#FF9900] text-[15px]" />
                    }
                  />
                  <h3 className="text-sm">(200)</h3>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 md:gap-2 xl:gap-5 bg-white p-2 rounded-sm">
              <div>
                <Image width={60} src={bookImg} alt="" />
              </div>
              <div>
                <h2 className="text-[15px] font-medium">
                  Rich dad and poor dad
                </h2>
                <h4 className="text-[12px]">
                  by
                  <span className="text-[#0386FF] cursor-pointer">
                    Robert T. Kiyosaki
                  </span>
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <Rating
                    placeholderRating={4.5}
                    className="space-x-1"
                    readonly
                    emptySymbol={
                      <BsStar className="text-[#FF9900] text-[15px]" />
                    }
                    placeholderSymbol={
                      <BsStarFill className="text-[#FF9900] text-[15px]" />
                    }
                    fullSymbol={
                      <BsStarFill className="text-[#FF9900] text-[15px]" />
                    }
                  />
                  <h3 className="text-sm">(200)</h3>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 md:gap-2 xl:gap-5 bg-white p-2 rounded-sm">
              <div>
                <Image width={60} src={bookImg} alt="" />
              </div>
              <div>
                <h2 className="text-[15px] font-medium">
                  Rich dad and poor dad
                </h2>
                <h4 className="text-[12px]">
                  by
                  <span className="text-[#0386FF] cursor-pointer">
                    Robert T. Kiyosaki
                  </span>
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <Rating
                    placeholderRating={4.5}
                    className="space-x-1"
                    readonly
                    emptySymbol={
                      <BsStar className="text-[#FF9900] text-[15px]" />
                    }
                    placeholderSymbol={
                      <BsStarFill className="text-[#FF9900] text-[15px]" />
                    }
                    fullSymbol={
                      <BsStarFill className="text-[#FF9900] text-[15px]" />
                    }
                  />
                  <h3 className="text-sm">(200)</h3>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 md:gap-2 xl:gap-5 bg-white p-2 rounded-sm">
              <div>
                <Image width={60} src={bookImg} alt="" />
              </div>
              <div>
                <h2 className="text-[15px] font-medium">
                  Rich dad and poor dad
                </h2>
                <h4 className="text-[12px]">
                  by
                  <span className="text-[#0386FF] cursor-pointer">
                    Robert T. Kiyosaki
                  </span>
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <Rating
                    placeholderRating={4.5}
                    className="space-x-1"
                    readonly
                    emptySymbol={
                      <BsStar className="text-[#FF9900] text-[15px]" />
                    }
                    placeholderSymbol={
                      <BsStarFill className="text-[#FF9900] text-[15px]" />
                    }
                    fullSymbol={
                      <BsStarFill className="text-[#FF9900] text-[15px]" />
                    }
                  />
                  <h3 className="text-sm">(200)</h3>
                </div>
              </div>
            </div>
          </div>
          {/* book card */}
        </div>
        {/* related books */}
      </div>
      <div className="container mx-auto bg-white shadow-lg my-16">
        <div className="p-5">
          <h2 className="text-3xl font-medium mb-3">Book specifications</h2>
          {/* book specifications */}
          <div className="w-full">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2 md:w-[30%]">
                    <h2>Title</h2>
                  </td>
                  <td className="border px-4 py-2 md:w-[70%]">{book.title}</td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Author</h2>
                  </td>
                  <td className="border px-4 py-2 text-[#0386FF] cursor-pointer">
                    {book.author}
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Category</h2>
                  </td>
                  <td className="border px-4 py-2 text-[#0386FF] cursor-pointer">
                    {book.category}
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Publisher</h2>
                  </td>
                  <td className="border px-4 py-2 text-[#0386FF] cursor-pointer">
                    {book.publisher}
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Self no</h2>
                  </td>
                  <td className="border px-4 py-2">{book.shelf}</td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Translator</h2>
                  </td>
                  <td className="border px-4 py-2 text-[#0386FF] cursor-pointer">
                    {book.translator ? book.translator : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Edition</h2>
                  </td>
                  <td className="border px-4 py-2">{book.edition}</td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Published in</h2>
                  </td>
                  <td className="border px-4 py-2">{book.published_in}</td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Number of pages</h2>
                  </td>
                  <td className="border px-4 py-2">{book.number_of_pages}</td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Language</h2>
                  </td>
                  <td className="border px-4 py-2">{book.language}</td>
                </tr>
                <tr>
                  <td className="bg-[#F1F2F4] border px-4 py-2">
                    <h2>Country</h2>
                  </td>
                  <td className="border px-4 py-2">{book.country}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* book specifications */}
          {/* reviews and ratings */}
          <div className="my-5 mt-10">
            <h2 className="text-2xl font-semibold mb-5">Reviews and Ratings</h2>
            <div className="flex justify-between items-center gap-4 pb-6 border-b-[1px] border-gray-100">
              <div>
                <h2>Rate this book</h2>
                <div className="my-1">
                  <Rating
                    onChange={getStarValue}
                    placeholderRating={0}
                    className="space-x-1 md:space-x-3"
                    emptySymbol={
                      <BsStar className="text-lg md:text-2xl text-[#FF9900]" />
                    }
                    placeholderSymbol={
                      <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                    }
                    fullSymbol={
                      <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                    }
                    fractions={4}
                  />
                </div>
                <button
                  className="px-3 rounded-sm py-2 bg-violet-100 text-violet-700 hover:text-violet-100 hover:bg-violet-700 duration-200 text-[15px]"
                  onClick={() => setShowModal(true)}
                >
                  Write a review
                </button>
                {showModal ? (
                  <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    bookImg={book.image_url}
                    bookTitle={book.title}
                    bookId={book._id}
                  ></Modal>
                ) : null}
              </div>
              <div>
                <h2 className="text-4xl font-bold">4.46</h2>
                <Rating
                  placeholderRating={4.46}
                  className="space-x-1 md:space-x-3"
                  readonly
                  emptySymbol={
                    <BsStar className="text-lg md:text-2xl text-[#FF9900]" />
                  }
                  placeholderSymbol={
                    <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                  }
                  fullSymbol={
                    <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                  }
                />
                <h3 className="text-sm md:text-lg">200 ratings</h3>
              </div>
            </div>
            <div>
              {reviews.map((review) => (
                <div key={review._id} className="my-5">
                  <div className="flex items-center gap-5">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={user?.photoURL}
                      alt={user?.displayName}
                    />
                    <div>
                      <p>
                        By {review?.username},{" "}
                        <span className="text-gray-500">{review?.date}</span>
                      </p>

                      <Rating
                        // value={review?.rating}
                        initialRating={review?.rating}
                        // placeholderRating={4.46}
                        className="space-x-1 md:space-x-3"
                        readonly
                        emptySymbol={
                          <BsStar className="text-lg md:text-2xl text-[#FF9900]" />
                        }
                        placeholderSymbol={
                          <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                        }
                        fullSymbol={
                          <BsStarFill className="text-[#FF9900] text-lg md:text-2xl" />
                        }
                      />
                    </div>
                  </div>
                  <p className="my-5 text-justify md:text-start">
                    {review?.review}
                  </p>
                  <hr className="mb-5" />
                </div>
              ))}
            </div>
          </div>
          {/* reviews and ratings */}

          {/* Ask a question */}
          <div className="my-5 mt-10">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pb-6 border-b-[1px] border-gray-100">
              <div>
                <h2 className="text-2xl font-bold">Book Q/A</h2>
                <h3>Have a question regarding the book?</h3>
                <h4>Ask a Question</h4>
              </div>
              <div>
                <button
                  className="px-3 rounded-sm py-2 bg-violet-100 text-violet-700 hover:text-violet-100 hover:bg-violet-700 duration-200 text-[15px]"
                  onClick={() => setShowQAModal(true)}
                >
                  Ask a question
                </button>
                {showQAModal ? (
                  <QAModal
                    showQAModal={showQAModal}
                    setShowQAModal={setShowQAModal}
                    bookImg={book.image_url}
                    bookTitle={book.title}
                    bookId={book._id}
                  ></QAModal>
                ) : null}
              </div>
            </div>
            <div className="mt-5">
              {qas.map((qa) => (
                <ul
                  key={qa._id}
                  className="list-none py-4 border-b-[1px] border-gray-100"
                >
                  <li>
                    <span className="text-lg font-semibold">Question: </span>
                    <span> {qa?.question}</span>
                    <span className="text-neutral-400"> Questioned by</span>
                    <span className="font-semibold"> {qa?.username}</span>
                    <span className="text-neutral-400"> {qa?.date}</span>
                  </li>
                  <li className="ml-2 md:ml-6 mt-2">
                    <span className="text-lg font-semibold">Answer: </span>
                    <span> {qa?.answer}</span>
                    <span className="text-neutral-400"> Answered by</span>
                    <span className="font-semibold"> {qa["answered-by"]}</span>
                    <span className="text-neutral-400">
                      {" "}
                      {qa["answered-date"]}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          {/* Ask a question */}
        </div>
      </div>
    </section>
  );
};

export default Book;
