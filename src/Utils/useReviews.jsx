"use client";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useReviews = () => {
  const { user } = useAuth();
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/reviews/${user?.email}`);
      return res.json();
    },
  });

  return [reviews, refetch];
};

export default useReviews;
