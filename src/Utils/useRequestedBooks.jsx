"use client";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
const { user } = useAuth();
export const getRequestedBooks = () => {
  const { data: requestedBooks = [], refetch } = useQuery({
    queryKey: ["requested books"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/requested-books?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [requestedBooks, refetch];
};
