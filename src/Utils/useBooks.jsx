"use client";
import { useQuery } from "@tanstack/react-query";

export const getBooks = () => {
  const { data: allBooks = [], refetch } = useQuery({
    queryKey: ["all books"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`https://i-library-server-seven.vercel.app/books`);
      return res.json();
    },
  });

  return [allBooks, refetch];
};
