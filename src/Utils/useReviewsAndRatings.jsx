// "use client";
// import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getBook } from "./useBooks";

const useReviewsAndRatings = () => {
  const [book] = getBook();
  const [reviews, setReviews] = useState([]);

  const fetchReviewsAndRatings = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/review/${book._id}`
      );
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  return [reviews, fetchReviewsAndRatings];
};

export default useReviewsAndRatings;

// const useReviewsAndRatings = () => {
//   const { user } = useAuth();
//   const [book] = getBook();
//   const [reviews, setReviews] = useState(() => {
//     // Try to retrieve data from Local Storage
//     const storedReviews = localStorage.getItem("reviews");
//     return storedReviews ? JSON.parse(storedReviews) : [];
//   });

//   const fetchReviewsAndRatings = async () => {
//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BaseURL}/review/${book._id}`
//       );
//       const data = await res.json();
//       setReviews(data);

//       // Store the data in Local Storage
//       localStorage.setItem("reviews", JSON.stringify(data));
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//     }
//   };

//   return [reviews, fetchReviewsAndRatings];
// };

// export default useReviewsAndRatings;
