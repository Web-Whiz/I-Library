"use client";
import BookCard from "@/Components/BookCard/BookCard";
import { getSpecificAuthor, getSpecificAuthorBook } from "@/Utils/useBooks";
import { useParams } from "next/navigation";

const Author = () => {
  const params = useParams();
  const id = params?.id;

  const [author] = getSpecificAuthor(id);
  const authorName = author?.author;

  const [authorFilteredBook] = getSpecificAuthorBook(authorName);

  return (
    <section className="container mx-auto p-5 my-20">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          style={{ width: "140px", height: "140px" }}
          src={author?.author_img}
          alt={author?.author}
        />
        <div>
          <h2 className="font-medium text-xl mb-3">{author?.author}</h2>
          <p>{author?.description}</p>
        </div>
      </div>
      <h2 className="font-medium text-xl my-10">
        All the books from {author?.author}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-10 md:gap-x-8 md:gap-y-16">
        {authorFilteredBook.map((book) => (
          <BookCard key={book?._id} book={book}></BookCard>
        ))}
      </div>
    </section>
  );
};

export default Author;
