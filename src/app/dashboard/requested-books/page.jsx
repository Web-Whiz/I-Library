"use client";
import RequestBookCard from "@/Components/RequestBookCard/RequestBookCard";
import useAuth from "@/Utils/useAuth";
import { getRequestedBooks } from "@/Utils/useRequestedBooks";

const RequestedBook = () => {
  const { user } = useAuth();
  const [requestedBooks] = getRequestedBooks(user?.email);
  console.log(requestedBooks);
  return (
    <div className="bg-white w-full shadow-lg p-5">
      <div className="border-b-[1px] border-gray-200 pb-10">
        <h1 className="text-2xl font-serif font-semibold">Requested Books </h1>
        <h3>Your total requested books {requestedBooks.length}</h3>
      </div>
      <div>
        {requestedBooks.map((book) => {
          return <RequestBookCard book={book} />;
        })}
      </div>
    </div>
  );
};

export default RequestedBook; // Component names should start with an uppercase letter
