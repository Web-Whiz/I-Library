"use client";
import RequestBookCard from "@/Components/RequestBookCard/RequestBookCard";
import useAuth from "@/Utils/useAuth";
import { getDonatedBooks } from "@/Utils/useDonatedBooks";

const DonatedBook = () => {
  const { user } = useAuth();
  const [donatedBooks] = getDonatedBooks(user?.email);
  console.log(donatedBooks);
  return (
    <div className="bg-white w-full shadow-lg p-5">
      <div className="border-b-[1px] border-gray-200 pb-10">
        <h1 className="text-2xl font-serif font-semibold">Donated Books </h1>
        <h3>Your total Donated books {donatedBooks.length}</h3>
      </div>
      <div>
        {donatedBooks.map((book) => {
          return <RequestBookCard book={book} />;
        })}
      </div>
    </div>
  );
};

export default DonatedBook; // Component names should start with an uppercase letter
