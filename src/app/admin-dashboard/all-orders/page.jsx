"use client";
import useAuth from "@/Utils/useAuth";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const AllOrder = () => {
  const { user, loading } = useAuth();

  const { data: allOrders = [], refetch } = useQuery({
    queryKey: ["allOrders", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/all-orders?email=${user?.email}`
      );
      return res.json();
    },
  });

  return (
    <>
      <div>
        <h1 className="text text-center font-bold text-xl py-4">All Orders</h1>
      </div>
      <hr />

      <div>
        <div class="w-full overflow-hidden rounded-lg shadow-md my-4 border">
          <div class="w-full overflow-x-auto">
            <table class="w-full whitespace-nowrap">
              <thead>
                <tr class="bg-blue-400">
                  <th class="px-4 py-3 text-left font-semibold">Order Id</th>
                  <th class="px-4 py-3 text-left font-semibold">Order Date</th>
                  <th class="px-4 py-3 text-left font-semibold">Delivery Status</th>
                  <th class="px-4 py-3 text-left font-semibold">Transaction Id</th>
                  <th class="px-4 py-3 text-left font-semibold">Paid Status</th>
                  <th class="px-4 py-3 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody class="bg-daisy-200">
                {allOrders?.map((order) => (
                  <tr class="hover:bg-blue-200 border-4 ">
                    <td className="p-4 whitespace-nowrap">#{order?._id}</td>
                    <td className="p-4 whitespace-nowrap">{order?.borrowDate}</td>
                    <td className="p-4 whitespace-nowrap capitalize">{order?.orderStatus}</td>
                    <td className="p-4 whitespace-nowrap">{order?.transactionId}</td>
                    <td className="p-4 whitespace-nowrap capitalize">{order?.paidStatus} </td>
                    <td className="p-4 whitespace-nowrap"> <Link className="bg-blue-400 p-2 rounded" href={`/admin-dashboard/all-orders/${order?._id}`}>Manage Order</Link></td> 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOrder;
