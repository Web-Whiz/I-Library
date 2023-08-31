"use client";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getBook } from "./useBooks";

const useReviewsAndRatings = () => {
  const { user } = useAuth();
  const [book] = getBook();
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["review", book._id],
    queryFn: async () => {
      const res = await fetch(
        `https://i-library-server.vercel.app/review/${book._id}`
      );
      return res.json();
    },
  });
  return [reviews, refetch];
};

export default useReviewsAndRatings;
