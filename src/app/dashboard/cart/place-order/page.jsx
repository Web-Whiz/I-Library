"use client";
import useAuth from "@/Utils/useAuth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PlaceOrder = () => {
  const { user } = useAuth();
  const [borrowDate] = useState(new Date().toISOString().substr(0, 10));
 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    // const {name,email,borrowDate,returnDate,duration,shippingAddress} = data

    // const order = {
    //   email: "john@gmail.com",
    //   bookId: 1234,
    //   bookName: "Life is beautiful",
    // };

    // console.log(data); // You can process the form data here
    fetch(`${process.env.NEXT_PUBLIC_BaseURL}/order`, {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data.url);
      });
  };

  const subtotal = 100; // Replace with actual subtotal
  const deliveryCharge = 10; // Replace with actual delivery charge
  const totalAmount = subtotal + deliveryCharge;

  const calculateReturnDate = (duration) => {
    if (borrowDate && duration) {
      const borrowDateTime = new Date(borrowDate).getTime();
      const returnDateTime = borrowDateTime + duration * 24 * 60 * 60 * 1000;
      return new Date(returnDateTime).toISOString().substr(0, 10);
    }
    return "";
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="flex flex-col md:flex-row w-full p-6 gap-4 bg-white shadow-md rounded-md">
          <div className="w-full">
            <h2 className="text-2xl mb-4">Shipping Address</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col md:flex-row w-full gap-4">
                <div className="mb-4 w-full">
                  <label className="block mb-1">Name:</label>
                  <input
                    type="text"
                    value={user?.displayName}
                    readOnly
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-indigo-200"
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="mb-4 w-full">
                  <label className="block mb-1">Email:</label>
                  <input
                    type="email"
                    value={user?.email}
                    readOnly
                    {...register("email", {
                      required: "Email is required",
                      pattern: /^\S+@\S+$/i,
                    })}
                    className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-indigo-200"
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-between md:flex-row w-full gap-4">
                <div className="mb-4 w-full ">
                  <label className="block mb-1">Borrow Date:</label>
                  <input
                    {...register("borrowDate")}
                    type="text"
                    value={borrowDate}
                    readOnly
                    className="w-full px-3 py-2 border rounded-md bg-gray-100 outline-none"
                  />
                </div>

                <div className="mb-4 w-full">
                  <label className="block mb-1">Duration (days):</label>
                  <input
                    {...register("duration", {
                      required: "Duration is required",
                      min: {
                        value: 2,
                        message: "Duration must be at least 1 day",
                      },
                      max: {
                        value: 15,
                        message: "Maximum duration is 15 days",
                      },
                    })}
                    type="number"
                    className="w-full px-3 py-2 border outline-none rounded-md focus:ring focus:ring-indigo-200"
                  />
                  {errors.duration && (
                    <p className="text-red-500 mt-1">
                      {errors.duration.message}
                    </p>
                  )}
                </div>

                <div className="mb-4 w-full">
                  <label className="block mb-1">Return Date:</label>
                  <input
                    {...register("returnDate",{required: "Return Date is required",})}
                    type="text"
                    readOnly
                    value={calculateReturnDate(watch("duration"))}
                    className="w-full px-3 py-2 border rounded-md outline-none bg-gray-100"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-1">Shipping Address:</label>
                <input
                  {...register("shippingAddress", {
                    required: "Address is required",
                  })}
                  className="w-full px-3 py-2 border rounded-md focus:ring outline-none focus:ring-indigo-200"
                />
                {errors.shippingAddress && (
                  <p className="text-red-500 mt-1">
                    {errors.shippingAddress.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
              >
                Place Order
              </button>
            </form>
          </div>

          <div className="w-full md:w-96 pl-4 md:border-l-2">
            <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
            <div className="flex justify-between mb-1">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Delivery Charge:</span>
              <span>${deliveryCharge.toFixed(2)}</span>
            </div>
            <hr className="my-1" />
            <div className="flex justify-between">
              <span>Total:</span>
              <span className="font-semibold">${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
