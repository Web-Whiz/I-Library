"use client";
import useAuth from "@/Utils/useAuth";
import useCart from "@/Utils/useCart";
import React from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const BookCard = ({ book }) => {
  const { user, loading } = useAuth();
  const [carts, refetch] = useCart();

  const handleAddToCart = (book) => {
    if (!user) {
      toast.error("Please login first");
      return;
    }

    if (carts.length === 3) {
      toast.error("You can only add three books in your cart");
      return;
    }

    const { image_url, title, author, _id } = book;
    const cartItem = {
      title,
      author,
      bookId: _id,
      image_url,
      userEmail: user?.email,
    };

    fetch(`${process.env.NEXT_PUBLIC_BaseURL}/carts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // todo: have to add swal
          refetch();
          toast.success("Added successfully");
        }
        if (data.message) {
          // todo: have to add swal

          toast.success(`${data.message}`);
        }
      });
  };

  const handleAddToWishList = (book) => {
    if (!user) {
      toast.error("Please login first");
      return;
    }

    const { image_url, title, author, _id } = book;
    const wishLIstItem = {
      title,
      author,
      bookId: _id,
      image_url,
      userEmail: user?.email,
    };

    fetch(`${process.env.NEXT_PUBLIC_BaseURL}/wish-list`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishLIstItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Wishlist added successfully");
        }
        if (data.message) {
          // todo: have to add swal
          toast.success(`${data.message}`);
        }
      });
  };
  return (
    <div className="">
      <div className="w-[158px] sm:w-[180px] mx-auto group h-[320px] p-[3px] bg-[#f8fafc] hover:shadow-md duration-500 shadow-slate-100 rounded-sm overflow-hidden relative collegeCard flex flex-col">
        <div className="w-full h-[215px] relative">
          <img
            className="w-full h-full hover:scale-120 collegeImg duration-300 object-fill"
            src={book?.image_url}
          />
          <div className="absolute z-0 top-0 left-0 -translate-y-full group-hover:-translate-y-0  duration-200 w-full h-full backdrop-blur-md bg-black/60 bg-opacity-30 flex justify-center items-center">
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={() => handleAddToCart(book)}
                className="text-white text-sm w-full hover:bg-indigo-700 duration-200 border-[1px] border-white rounded-full px-4 py-[2px]"
              >
                Add to bag
              </button>
              <button
                onClick={() => handleAddToWishList(book)}
                className="text-white text-sm w-full hover:bg-indigo-700 duration-200 border-[1px] border-white rounded-full px-4 py-[2px]"
              >
                Add to wish list
              </button>
            </div>
          </div>
        </div>
        <div className="py-2 sm:py-1 flex-grow text-center z-10">
          <h1 className="font-semibold text-sm "> {book?.title} </h1>
        </div>
        <div className="flex flex-col pb-2 justify-end items-center z-10">
          <h3 className="text-xs text-gray-600 font-medium">
            {book?.category}
          </h3>
          <h4 className="text-[10px]">Self no: {book?.shelf}</h4>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
