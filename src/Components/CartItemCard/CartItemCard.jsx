"use client";
import useAuth from "@/Utils/useAuth";
import React from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const CartItemCard = ({ cartData, refetch }) => {
  const { user } = useAuth();

  const handleDeleteFromCart = (bookId) => {
    // todo: have to use real user and user email

    if (!user) {
      alert("log in first");
      return;
    }

    const deleteCartItem = { bookId, userEmail: user?.email };

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.NEXT_PUBLIC_BaseURL}/carts`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(deleteCartItem),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              toast.error("Deleted From Cart")
              refetch();
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="flex p-3 bg-white w-full border my-1">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={cartData?.image_url}
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#">{cartData?.title}</a>
              </h3>
              <p className="ml-4">$50.00</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{cartData?.author}</p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">Qty 1</p>
            <div className="flex">
              <button
                onClick={() => handleDeleteFromCart(cartData?.bookId)}
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
