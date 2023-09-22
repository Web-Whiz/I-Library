"use client";
import useAuth from "@/Utils/useAuth";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillCloseCircle } from "react-icons/ai";

const AnswerModal = ({
  showAnswerModal,
  setShowAnswerModal,
  bookImg,
  bookTitle,
  bookId,
  question,
  fetchAnswers,
}) => {
  const { user } = useAuth();
  const [answer, setAnswer] = useState("");

  // console.log(bookTitle);

  // Create a new Date object representing the current date and time
  const currentDate = new Date();

  // Extract the components of the date (year, month, day)
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
  const day = currentDate.getDate();

  // Format the date components as a string in the desired format
  const formattedDate = `${day}-${month}-${year}`;

  // console.log(formattedDate);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      answer,
      date: formattedDate,
      name: user?.displayName,
    };

    // console.log(data);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/qa/${bookId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Answer given successfully!");
        event.target.reset();
        setShowAnswerModal(false);
        fetchAnswers();
      } else {
        toast.error("Failed to give answer.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <div className="flex items-center gap-5">
                <img src={bookImg} alt={bookTitle} className="w-12 h-16" />
                <div>
                  <h3 className="text-base md:text-xl font-medium">
                    {bookTitle}
                  </h3>
                  <p>Give Your Answer</p>
                </div>
              </div>
              <button
                className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowAnswerModal(false)}
              >
                <span className=" text-red-400 hover:text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none ease-linear transition-all duration-150">
                  <AiFillCloseCircle></AiFillCloseCircle>
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form onSubmit={handleSubmit}>
                <div className="my-1">
                  <p className="text-base md:text-lg font-medium text-gray-900">
                    Q: {question}
                  </p>
                </div>
                <textarea
                  required
                  value={answer}
                  onChange={(event) => setAnswer(event.target.value)}
                  name=""
                  id=""
                  cols="5"
                  rows="3"
                  placeholder="Provide your answer here!"
                  className="my-4 text-slate-500 text-base leading-relaxed w-full md:w-96 border border-gray-400 p-2 rounded outline-none"
                ></textarea>
                {/*footer*/}
                <div className="flex items-center justify-end px-6 py-6 md:px-0 md:py-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowAnswerModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-5 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default AnswerModal;
