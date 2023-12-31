import useAuth from "@/Utils/useAuth";
import useCart from "@/Utils/useCart";
import React from "react";
import CartItemCard from "../CartItemCard/CartItemCard";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const ShoppingCart = () => {
  const { setIsCartOpen } = useAuth();
  const [carts, refetch] = useCart();
  return (
    <div className="bg-[#F3F4F6] h-screen p-4 overflow-y-auto">
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
          Shopping cart
        </h2>
        <div className="ml-3 flex h-7 items-center">
          <button
            onClick={() => setIsCartOpen(false)}
            type="button"
            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Close panel</span>
            <RxCross2 />
          </button>
        </div>
      </div>
      <div className="mt-8">
        {carts?.map((cart) => (
          <CartItemCard key={cart?._id} cartData={cart} refetch={refetch} />
        ))}
      </div>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${carts.length * 50}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <Link
            href="dashboard/cart"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping
              <span aria-hidden="true"> →</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
