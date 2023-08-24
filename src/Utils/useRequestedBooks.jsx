"use client";
import { useQuery } from "@tanstack/react-query";

export const getRequestedBooks = (email) => {
  const { data: requestedBooks = [], refetch } = useQuery({
    queryKey: ["requested books", email],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/requested-books?email=${email}`
      );
      return res.json();
    },
  });

  return [requestedBooks, refetch];
};

export const postRequestedBooks = (requestedBook) => {
  const { data: postReqBook = [], refetch } = useQuery({
    queryKey: ["post requestedBooks"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/requested-books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestedBook),
      });
    },
  });
};
