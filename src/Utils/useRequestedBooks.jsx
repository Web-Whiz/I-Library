"use client";
import { useQuery } from "@tanstack/react-query";

export const getRequestedBooks = (email) => {
  const { data: requestedBooks = [], refetch } = useQuery({
    queryKey: ["requested books", email],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://i-library-server-seven.vercel.app/requested-books?email=${email}`
      );
      return res.json();
    },
  });

  return [requestedBooks, refetch];
};

export const postRequestedBooks = (requestedBook) => {
  fetch(`https://i-library-server-seven.vercel.app/requested-books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestedBook),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
