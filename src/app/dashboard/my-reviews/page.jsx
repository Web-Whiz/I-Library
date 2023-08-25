"use client";
import useAuth from "@/Utils/useAuth";
import useReviews from "@/Utils/useReviews";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";

const MyReviews = () => {
  const [reviews] = useReviews();
  const { user } = useAuth();
  return (
    <div className="w-full bg-white shadow-lg p-5 md:p-8">
      <div className="flex flex-col md:flex-row justify-between gap-y-5 md:gap-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-semibold">
            Reviews and Ratings
          </h2>
          <p className="text-[16px]">Your review & ratings.</p>
        </div>
        <h3 className="text-xl font-semibold font-serif">
          Your Total Reviews: {reviews.length}
        </h3>
      </div>
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
          <Link href="/">
            <p className="my-5 font-medium text-gray-900 hover:text-indigo-600">
              <span className="border-b-2 border-indigo-300 hover:bg-indigo-50 p-1 transition-all">
                The Great Gatsby
              </span>
            </p>
          </Link>
          <p className="my-5 text-justify md:text-start">{review?.review}</p>
          <hr className="mb-5" />
        </div>
      ))}
    </div>
  );
};

export default MyReviews;
