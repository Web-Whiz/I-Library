"use client";
import BookCard from "@/Components/BookCard/BookCard";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const PopularBooks = () => {
  const { data: popularBooks = [], refetch } = useQuery({
    queryKey: ["popularBooks"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/popular-books`
      );
      return res.json();
    },
  });

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
