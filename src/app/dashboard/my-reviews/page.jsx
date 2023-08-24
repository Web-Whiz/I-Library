"use client";
import useAuth from "@/Utils/useAuth";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://i-library-server.vercel.app/reviews/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  return (
    <div className="w-full bg-white shadow-lg p-5 md:p-8">
      <h2 className="text-xl sm:text-2xl font-serif font-semibold">
        Reviews and Ratings
      </h2>
      <p className="text-[16px]">Your review & ratings.</p>
      <hr className="my-10" />
      {reviews.map((review) => (
        <div key={review._id}>
          <div className="flex items-center gap-5">
            <img
              className="h-16 w-16 rounded-full"
              src={user?.photoURL}
              alt={user?.displayName}
            />
            <div>
              <p>
                By {review?.username},{" "}
                <span className="text-gray-500">{review?.date}</span>
              </p>
              <Rating
                readOnly
                style={{ maxWidth: 130 }}
                value={review?.rating}
                className="text-[#FF9900]"
              />
            </div>
          </div>
          <p className="my-5 text-justify md:text-start">{review?.review}</p>
          <hr className="mb-5" />
        </div>
      ))}
    </div>
  );
};

export default MyReviews;
