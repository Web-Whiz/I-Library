"use client";
import { useQuery } from "@tanstack/react-query";

export const getBooks = () => {
  const { data: allBooks = [], refetch } = useQuery({
    queryKey: ["all books"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`https://ilibrary-server.vercel.app/books`);
      return res.json();
    },
  });

  return [allBooks, refetch];
};

export const getBook = (id) => {
  const { data: book = [], refetch } = useQuery({
    queryKey: ["book"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`https://ilibrary-server.vercel.app/book/${id}`);
      return res.json();
    },
  });

  return [book, refetch];
};
