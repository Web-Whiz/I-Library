"use client";
import { getRequestedBooks } from "@/Utils/useRequestedBooks";

const RequestedBook = () => {
  const [requestedBooks] = getRequestedBooks();
  console.log(requestedBooks);
  return (
    <div>
      <h1>This is requested books</h1>
    </div>
  );
};

export default RequestedBook; // Component names should start with an uppercase letter
