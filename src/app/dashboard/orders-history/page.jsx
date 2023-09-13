"use client";
import useAuth from "@/Utils/useAuth";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const OrderHistory = () => {
  const { user, loading } = useAuth();

  // if(loading){
  //   return 'loading...'
  // }

  const { data: orderHistory = [], refetch } = useQuery({
    queryKey: ["orderHistory", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/orders-history?email=${user?.email}`
      );
      return res.json();
    },
  });



  return (
    <>
    <div>
      <h1 className="text text-center font-bold text-xl py-4">My Order History</h1>
      <hr />
    </div>
      {orderHistory.map((order, index) => (
        <Link href={`/dashboard/orders-history/${order?._id}`}>
        <div key={order?._id} className="my-4">
          <div
            className="flex flex-wrap md:flex-nowrap bg-indigo-500   text-white text-center p-4 justify-between items-center cursor-pointer duration-300 transform-gpu"
          >
            <p className="w-full px-2">{order?._id}</p>
            <p className="w-full px-2">{order?.borrowDate}</p>
            <p className="w-full px-2">{order?.orderedBooks?.length}</p>
            <p className="w-full px-2">{order?.transactionId}</p>
            <p className="w-full  p-2">{order?.paidStatus} </p>
           
          </div>
        </div>
        </Link>
      ))}
    </>
  );
};

export default OrderHistory;
