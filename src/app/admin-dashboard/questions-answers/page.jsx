// "use client";
// import AnswerModal from "@/Components/AnswerModal/AnswerModal";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const QuestionsAnswers = () => {
//   const [qas, setQas] = useState([]);
//   const [showAnswerModal, setShowAnswerModal] = useState(false);

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_BaseURL}/qa`)
//       .then((res) => res.json())
//       .then((data) => setQas(data));
//   }, []);

//   return (
//     <div className="w-full bg-white shadow-lg p-5 md:p-8">
//       <div className="flex flex-col md:flex-row justify-between gap-y-5 md:gap-y-0">
//         <div>
//           <h2 className="text-xl sm:text-2xl font-semibold">
//             Questions and Answers
//           </h2>
//           <p className="text-base font-medium">
//             All the questions from users based on specific book.
//           </p>
//         </div>
//         <h3 className="text-xl font-semibold">
//           Total Questions : {qas.length}
//         </h3>
//       </div>
//       <hr className="my-10" />
//       {qas.map((qa) => (
//         <div key={qa?._id}>
//           <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-y-5 md:gap-y-0">
//             <div className="flex items-center gap-5">
//               <Link
//                 href={`/all-books/${qa["book-id"]}`}
//                 title={qa["book-name"]}
//               >
//                 <img
//                   className="h-20 w-16"
//                   src={qa["book-img"]}
//                   alt={qa["book-name"]}
//                 />
//               </Link>
//               <div>
//                 <p>
//                   <span className="text-lg font-semibold">Question : </span>
//                   <span> {qa?.question}</span>
//                   <span className="text-neutral-400"> {qa?.date}</span>
//                 </p>
//                 <p>
//                   <span className="text-neutral-400"> Questioned by</span>
//                   <span className="font-semibold"> {qa?.username}</span>
//                 </p>
//               </div>
//             </div>
//             <div>
//               <button
//                 className="px-3 rounded-sm py-2 bg-violet-100 text-violet-700 hover:text-violet-100 hover:bg-violet-700 duration-200 text-[15px]"
//                 onClick={() => setShowAnswerModal(true)}
//               >
//                 {qa.answer === "" ? "Answer this question" : "Answer Given"}
//               </button>
//               {showAnswerModal ? (
//                 <AnswerModal
//                   showAnswerModal={showAnswerModal}
//                   setShowAnswerModal={setShowAnswerModal}
//                   bookImg={qa["book-img"]}
//                   bookTitle={qa["book-name"]}
//                   bookId={qa._id}
//                   question={qa.question}
//                 ></AnswerModal>
//               ) : null}
//             </div>
//           </div>
//           <hr className="my-5" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionsAnswers;

"use client";
import AnswerModal from "@/Components/AnswerModal/AnswerModal";
import useAnswers from "@/Utils/useAnswers";
import Link from "next/link";
import { useEffect, useState } from "react";

const QuestionsAnswers = () => {
  const [answers, fetchAnswers] = useAnswers();

  // Create a state to manage the visibility of modals for each question
  const [showAnswerModals, setShowAnswerModals] = useState({});

  useEffect(() => {
    fetchAnswers();
  }, []);

  // Function to toggle the modal visibility for a specific question
  const toggleModal = (questionId) => {
    setShowAnswerModals((prevState) => ({
      ...prevState,
      [questionId]: !prevState[questionId],
    }));
  };

  return (
    <div className="w-full bg-white shadow-lg p-5 md:p-8">
      <div className="flex flex-col md:flex-row justify-between gap-y-5 md:gap-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">
            Questions and Answers
          </h2>
          <p className="text-base font-medium">
            All the questions from users based on a specific book.
          </p>
        </div>
        <h3 className="text-xl font-semibold">
          Total Questions : {answers.length}
        </h3>
      </div>
      <hr className="my-10" />
      {answers.map((qa) => (
        <div key={qa?._id}>
          <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-y-5 md:gap-y-0">
            <div className="flex items-center gap-5">
              <Link
                href={`/all-books/${qa["book-id"]}`}
                title={qa["book-name"]}
              >
                <img
                  className="h-20 w-16"
                  src={qa["book-img"]}
                  alt={qa["book-name"]}
                />
              </Link>
              <div>
                <p>
                  <span className="text-lg font-semibold">Question : </span>
                  <span> {qa?.question}</span>
                  <span className="text-neutral-400"> {qa?.date}</span>
                </p>
                <p>
                  <span className="text-neutral-400"> Questioned by</span>
                  <span className="font-semibold"> {qa?.username}</span>
                </p>
              </div>
            </div>
            <div>
              <button
                className="px-3 rounded-sm py-2 bg-violet-100 text-violet-700 hover:text-violet-100 hover:bg-violet-700 duration-200 text-[15px]"
                onClick={() => toggleModal(qa._id)}
              >
                {qa.answer === "" ? "Answer this question" : "Answer Given"}
              </button>
              {showAnswerModals[qa._id] ? (
                <AnswerModal
                  showAnswerModal={showAnswerModals[qa._id]}
                  setShowAnswerModal={(value) => toggleModal(qa._id)}
                  bookImg={qa["book-img"]}
                  bookTitle={qa["book-name"]}
                  bookId={qa._id}
                  question={qa.question}
                  fetchAnswers={fetchAnswers}
                ></AnswerModal>
              ) : null}
            </div>
          </div>
          <hr className="my-5" />
        </div>
      ))}
    </div>
  );
};

export default QuestionsAnswers;
