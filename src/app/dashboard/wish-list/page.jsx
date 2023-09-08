"use client";
import WishListCard from "@/Components/WishListCard/WishListCard";
import useWishList from "@/Utils/useWishList";
import React from "react";

const page = () => {
  const [wishListBooks, refetch] = useWishList();

  return (
    <div className="w-full bg-white shadow-lg p-5">
      <h1>Total Wish List Books:{wishListBooks?.length}</h1>
      <div className="space-y-4 my-5 w-full">
        {wishListBooks?.map((wishListBook) => (
          <WishListCard
            key={wishListBook?._id}
            wishListBook={wishListBook}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
