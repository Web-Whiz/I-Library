"use client";
import { useQuery } from "@tanstack/react-query";

export const getDonatedBooks = (email) => {
  const { data: donatedBook = [], refetch } = useQuery({
    queryKey: ["donated books", email],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://i-library-server.vercel.app/requested-books?email=${email}`
      );
      return res.json();
    },
  });

  return [donatedBook, refetch];
};

export const postDonatedBooks = (DonatedBook) => {
  fetch(`https://i-library-server.vercel.app/requested-books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(DonatedBook),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
