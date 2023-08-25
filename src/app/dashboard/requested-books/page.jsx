"use client";
import useAuth from "@/Utils/useAuth";
import { getRequestedBooks } from "@/Utils/useRequestedBooks";

const RequestedBook = () => {
  const { user } = useAuth();
  const [requestedBooks] = getRequestedBooks(user?.email);
  console.log(requestedBooks);
  return (
    <div className="bg-white w-full shadow-lg p-5">
      <h1 className="text-2xl font-serif font-semibold">Requested Books </h1>
      <h3>Your total requested books {requestedBooks.length}</h3>
    </div>
  );
};

export default RequestedBook; // Component names should start with an uppercase letter
