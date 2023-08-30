"use client";
import useAuth from "@/Utils/useAuth";
import React from "react";
import Swal from "sweetalert2";

const WishListCard = ({ wishListBook, refetch }) => {
  const { user } = useAuth();

  const handleDeleteFromWishList = (bookId) => {
    const deleteWishListItem = { bookId, userEmail: user?.email };

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.NEXT_PUBLIC_BaseURL}/wish-list`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(deleteWishListItem),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Removed",
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="flex p-3 max-w-lg border my-1">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={wishListBook?.image_url}
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#">{wishListBook?.title}</a>
              </h3>
            </div>
            <p className="mt-1 text-sm text-gray-500">{wishListBook?.author}</p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <div className="flex justify-between">
              <button
                onClick={() => handleDeleteFromWishList(wishListBook?.bookId)}
                type="button"
                className="font-medium  text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
              <button
                type="button"
                className="font-medium ml-6 text-indigo-600 hover:text-indigo-500"
              >
                Add To Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
