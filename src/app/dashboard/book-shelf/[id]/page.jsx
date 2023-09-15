"use client";
import { getShelfBooks } from "@/Utils/useBookShelf";
import Link from "next/link";

const shelfBooks = ({ params }) => {
  const [shelfBooks, isLoading] = getShelfBooks(params.id);
  console.log(shelfBooks.books);
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div className="bg-white w-full shadow-lg p-5">
      <div className="mb-4">
        <button>
          <Link href="/dashboard/book-shelf">Back</Link>
        </button>
      </div>
      <h2 className="text-3xl font-semibold">{shelfBooks.shelfName}</h2>
      <div className="grid grid-cols-5 gap-8 my-10">
        {shelfBooks?.books.map((book) => {
          return (
            <div>
              <Link href={`/all-books/${book.bookId}`}>
                <img className="w-full" src={book?.bookImg} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default shelfBooks;
