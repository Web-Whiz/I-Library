"use client";

import useAuth from "@/Utils/useAuth";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const MyOrders = () => {
  const {user,loading}= useAuth()

  const { data: myOrders = [], refetch } = useQuery({
    queryKey: ["myOrders", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/my-orders?email=${user?.email}`
      );
      return res.json();
    },
  });

console.log(myOrders)
console.log(user?.email)

  const arr = [1, 2, 3, 4];
  const arr2 = [1, 2, 3];

  const [accordions, setAccordions] = useState(
    new Array(myOrders?.length).fill(false)
  ); // Initialize an array of accordion states

  const toggleAccordion = (index) => {
    const newAccordions = [...accordions];

    // Close all other accordions except the one clicked
    for (let i = 0; i < newAccordions.length; i++) {
      if (i !== index) {
        newAccordions[i] = false;
      }
    }

    // Toggle the clicked accordion
    newAccordions[index] = !newAccordions[index];
    setAccordions(newAccordions);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-semibold text-2xl text-indigo-700 mb-4">
        My Orders List
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between  bg-indigo-100 p-4 text-center font-semibold">
        <p>Order Id</p>
        <p>Date</p>
        <p>Books</p>
        <p>TrxID</p>
        <p>Delivery Status</p>
        
      </div>

      {myOrders.map((order,index) => (
        <div key={order?._id} className="my-4">
          <div
            className={`flex flex-wrap md:flex-nowrap bg-indigo-500   text-white text-center p-4 justify-between items-center cursor-pointer duration-300 transform-gpu ${
              accordions[index]
                ? "bg-indigo-700"
                : "hover:bg-indigo-600"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <p className="w-full px-2">{order?._id}</p>
            <p className="w-full px-2">{order?.borrowDate}</p>
            <p className="w-full px-2">{order?.orderedBooks?.length}</p>
            <p className="w-full px-2">{order?.transactionId}</p>
            <p className="w-full capitalize bg-yellow-500 rounded p-2">{order?.orderStatus}</p>
            <span>
              {accordions[index] ? <MdExpandLess /> : <MdExpandMore />}
            </span>
          </div>

          {accordions[index] && (
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 bg-gray-100 transition-opacity duration-300 ${
                accordions[index] ? "opacity-100" : "opacity-0"
              }`}
            >
              {order?.orderedBooks.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg gap-2 flex  items-start justify-start"
                >
                  <img className="h-[100px]" src={item.image_url} alt="" />
                  <div className="flex flex-col pl-2 w-full">
                  <p>{item.title}</p>
                  <p>{item.author}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
