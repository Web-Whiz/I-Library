"use client";
import BookCard from "@/Components/BookCard/BookCard";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const PopularBooks = () => {
  // const popularBooks = [
  //   {
  //     id: 1,
  //     bookName: "Rich Dad Poor Dad",
  //     bookImg:
  //       "https://files.instapdf.in/wp-content/uploads/pdf-thumbnails/2021/04/rich-dad-poor-dad-436.webp",
  //     category: "Personal finance",
  //     authorName: "Robert Kiyosaki",
  //     borrowPrice: 4.04,
  //     rating: 4.6,
  //     shelfNo: 404,
  //   },
  //   {
  //     id: 2,
  //     bookName: "To Kill a Mockingbird",
  //     bookImg:
  //       "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
  //     category: "Fiction",
  //     authorName: "Harper Lee",
  //     borrowPrice: 3.99,
  //     rating: 4.8,
  //     shelfNo: 102,
  //   },
  //   {
  //     id: 3,
  //     bookName: "The Great Gatsby",
  //     bookImg:
  //       "https://www.oldcastlebooks.co.uk/images/large/9780857304568.jpg",
  //     category: "Fiction",
  //     authorName: "F. Scott Fitzgerald",
  //     borrowPrice: 4.25,
  //     rating: 4.5,
  //     shelfNo: 207,
  //   },
  //   {
  //     id: 4,
  //     bookName: "1984",
  //     bookImg:
  //       "https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg",
  //     category: "Dystopian",
  //     authorName: "George Orwell",
  //     borrowPrice: 3.75,
  //     rating: 4.7,
  //     shelfNo: 305,
  //   },
  //   {
  //     id: 5,
  //     bookName: "Pride and Prejudice",
  //     bookImg:
  //       "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
  //     category: "Classic",
  //     authorName: "Jane Austen",
  //     borrowPrice: 3.95,
  //     rating: 4.9,
  //     shelfNo: 501,
  //   },
  //   {
  //     id: 6,
  //     bookName: "The Hobbit",
  //     bookImg:
  //       "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
  //     category: "Fantasy",
  //     authorName: "J.R.R. Tolkien",
  //     borrowPrice: 4.15,
  //     rating: 4.7,
  //     shelfNo: 602,
  //   },
  //   {
  //     id: 7,
  //     bookName: "The Catcher in the Rye",
  //     bookImg:
  //       "https://www.mercurynews.com/wp-content/uploads/2016/08/20100128__jdsalinger3.jpg?w=400",
  //     category: "Coming-of-age",
  //     authorName: "J.D. Salinger",
  //     borrowPrice: 3.85,
  //     rating: 4.3,
  //     shelfNo: 701,
  //   },
  //   {
  //     id: 8,
  //     bookName: "The Alchemist",
  //     bookImg: "https://dailyasianage.com/library/1661800353_6.jpg",
  //     category: "Fantasy",
  //     authorName: "Paulo Coelho",
  //     borrowPrice: 4.0,
  //     rating: 4.5,
  //     shelfNo: 804,
  //   },
  //   {
  //     id: 9,
  //     bookName: "Harry Potter and the Sorcerer's Stone",
  //     bookImg:
  //       "https://media.npr.org/assets/img/2013/02/13/harrynew_custom-1fa12c2215710024d4fb570714431f00ca671dc1-s800-c85.webp",
  //     category: "Fantasy",
  //     authorName: "J.K. Rowling",
  //     borrowPrice: 4.5,
  //     rating: 4.8,
  //     shelfNo: 903,
  //   },
  //   {
  //     id: 10,
  //     bookName: "The Hunger Games",
  //     bookImg:
  //       "https://www.thebookshop.es/productimages/1200/the-hunger-games---suzanne-collins_269889.jpg",
  //     category: "Dystopian",
  //     authorName: "Suzanne Collins",
  //     borrowPrice: 3.65,
  //     rating: 4.4,
  //     shelfNo: 1001,
  //   },
  //   {
  //     id: 11,
  //     bookName: "Rich Dad Poor Dad",
  //     bookImg:
  //       "https://files.instapdf.in/wp-content/uploads/pdf-thumbnails/2021/04/rich-dad-poor-dad-436.webp",
  //     category: "Personal finance",
  //     authorName: "Robert Kiyosaki",
  //     borrowPrice: 4.04,
  //     rating: 4.6,
  //     shelfNo: 404,
  //   },
  //   {
  //     id: 12,
  //     bookName: "To Kill a Mockingbird",
  //     bookImg:
  //       "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
  //     category: "Fiction",
  //     authorName: "Harper Lee",
  //     borrowPrice: 3.99,
  //     rating: 4.8,
  //     shelfNo: 102,
  //   },
  //   {
  //     id: 13,
  //     bookName: "The Great Gatsby",
  //     bookImg:
  //       "https://www.oldcastlebooks.co.uk/images/large/9780857304568.jpg",
  //     category: "Fiction",
  //     authorName: "F. Scott Fitzgerald",
  //     borrowPrice: 4.25,
  //     rating: 4.5,
  //     shelfNo: 207,
  //   },
  //   {
  //     id: 14,
  //     bookName: "1984",
  //     bookImg:
  //       "https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg",
  //     category: "Dystopian",
  //     authorName: "George Orwell",
  //     borrowPrice: 3.75,
  //     rating: 4.7,
  //     shelfNo: 305,
  //   },
  // ];

  const {data: popularBooks=[], refetch} = useQuery({
    queryKey: ['popularBooks'],
    queryFn: async() => {
        const res = await fetch(`https://ilibrary-server.vercel.app/popular-books`)
        return res.json();
    }
})
 
  return (
    <div className="container mx-auto">
      <div className="h2 text-center">
        <h1 className="capitalize font-bold text-3xl mb-3 text-[#0F86CD]">
          Popular books
        </h1>
        <h3 className=" max-w-[450px] mx-auto mb-4">
          Explore our most borrowed, loved, and timeless books. Join the
          literary journey today!
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
        {popularBooks?.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default PopularBooks;
