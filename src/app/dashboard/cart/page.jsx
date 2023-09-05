"use client";
import CartItemCard from "@/Components/CartItemCard/CartItemCard";
import useCart from "@/Utils/useCart";
import Link from "next/link";
import React from "react";

const Cart = () => {
  const [carts, refetch] = useCart();
  const postBook = carts.map((cart) => {
    const { bookId, title } = cart;
    const book = {
      title,
      bookId,
    };
    return book;
  });

  return (
    <div className="bg-white w-full shadow-lg p-5">
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-7">
        <div className="space-y-5 md:col-span-3">
          {carts?.map((cart) => (
            <CartItemCard key={cart?._id} cartData={cart} refetch={refetch} />
          ))}
        </div>

        <div className="border p-2 font-semibold md:col-span-2 flex flex-col justify-start items-end ">
          <h1>Total Books: {carts.length}</h1>
          <h1>Delivery charge per Books: $50</h1>
          <h2> Total Charge: ${50 * carts.length}</h2>
          <Link
            href="/dashboard/cart/place-order"
            className="w-fit bg-sky-500 block rounded my-2 p-2"
          >
            Make Payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
