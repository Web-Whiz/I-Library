"use client";
import { useQuery } from "@tanstack/react-query";

export const getBooks = () => {
  const { data: allBooks = [], refetch } = useQuery({
    queryKey: ["all books"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BaseURL}/books`);
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_BaseURL}/book/${id}`);
      return res.json();
    },
  });

  return [book, refetch];
};
