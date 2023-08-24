"use client";
import useAuth from "@/Utils/useAuth";
import { getRequestedBooks } from "@/Utils/useRequestedBooks";

const RequestedBook = () => {
  const { user } = useAuth();
  const [requestedBooks] = getRequestedBooks(user?.email);
  return (
    <div>
      <h1>This is requested books </h1>
    </div>
  );
};

export default RequestedBook; // Component names should start with an uppercase letter
