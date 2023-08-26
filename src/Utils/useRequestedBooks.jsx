"use client";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const getRequestedBooks = (email) => {
  const { data: requestedBooks = [], refetch } = useQuery({
    queryKey: ["requested books", email],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://ilibrary-server.vercel.app/requested-books?email=${email}`
      );
      return res.json();
    },
  });

  return [requestedBooks, refetch];
};

export const postRequestedBooks = (requestedBook) => {
  fetch(`https://ilibrary-server.vercel.app/requested-books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestedBook),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        toast.success("Book request successful");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
