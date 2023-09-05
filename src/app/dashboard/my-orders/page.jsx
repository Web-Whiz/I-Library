"use client";

import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];
  const arr2 = [1, 2, 3];

  const [accordions, setAccordions] = useState(
    new Array(arr.length).fill(false)
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-indigo-100 p-4 text-center font-semibold">
        <p>Order Id</p>
        <p>Date</p>
        <p>Books</p>
        <p>TrxID</p>
        <p>Total Paid</p>
        <p>Action</p>
      </div>

      {arr.map((item, index) => (
        <div key={index} className="my-4">
          <div
            className={`flex bg-indigo-500  text-white text-center p-4 justify-between cursor-pointer duration-300 transform-gpu ${
              accordions[index]
                ? "bg-indigo-700"
                : "hover:bg-indigo-600"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <p className="w-full px-2">#12345</p>
            <p className="w-full px-2">12/10/2023</p>
            <p className="w-full px-2">3</p>
            <p className="w-full px-2">547854863214852</p>
            <p className="w-full px-2">$15</p>
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
              {arr2.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg text-center"
                >
                  <p>Book img</p>
                  <p>Book Name</p>
                  <p>Author</p>
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
