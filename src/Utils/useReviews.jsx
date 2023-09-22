// "use client";

// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";

// const useReviews = () => {
//   const { user } = useAuth();
//   const { data: reviews = [], refetch } = useQuery({
//     queryKey: ["reviews", user?.email],
//     queryFn: async () => {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BaseURL}/reviews/${user?.email}`
//       );
//       return res.json();
//     },
//   });
//   return [reviews, refetch];
// };

// export default useReviews;

import { useState } from "react";
import useAuth from "./useAuth";
// import { getBook } from "./useBooks";

const useReviews = () => {
  const { user } = useAuth();
  // const [book] = getBook();
  const [reviews, setReviews] = useState([]);

  const fetchReviewsAndRatings = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/reviews/${user?.email}`
      );
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  return [reviews, fetchReviewsAndRatings];
};

export default useReviews;
