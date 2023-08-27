"use client";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
export const getDonatedBooks = (email) => {
  const { data: donatedBook = [], refetch } = useQuery({
    queryKey: ["donated books", email],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/donated-books?email=${email}`
      );
      return res.json();
    },
  });

  return [donatedBook, refetch];
};

export const postDonatedBooks = (DonatedBook) => {
  fetch(`${process.env.NEXT_PUBLIC_BaseURL}/donated-books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(DonatedBook),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        toast.success("Book donate request successful");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
