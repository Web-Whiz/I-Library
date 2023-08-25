"use client";

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useReviews = () => {
  const { user } = useAuth();
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://ilibrary-server.vercel.app/reviews/${user?.email}`);
      return res.json();
    },
  });
  return [reviews, refetch];
};

export default useReviews;
