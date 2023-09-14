"use client";

import { useQuery } from "@tanstack/react-query";
import { FaCalendar, FaCheckCircle, FaClock, FaEnvelope, FaTruck, FaUser } from 'react-icons/fa';
import { MdDateRange } from "react-icons/md";


const OrderDetails = ({ params }) => {

    const { data: orderDetails = [], refetch } = useQuery({
      queryKey: ["orderDetails"],
      // enabled: !loading,
      queryFn: async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BaseURL}/order-details/${params.id}` // Fix URL construction
        );
        return res.json();
      },
    });

  return (
    <div>
      <h1 className="text-center font-semibold text-lg m:text-2xl">
        Details For Order Id: 
        <span className="font-bold text-blue-400">{orderDetails?._id}</span>
      </h1>
      <hr />
      <div className="flex flex-col item-center justify-center mt-10">
        <div className=" flex flex-col items-center justify-center ">
          <div className="border p-4 ">
            <div className="flex flex-row items-center gap-2"><FaUser className="text-blue-400" />{orderDetails?.name}</div>
            <div className="flex flex-row items-center gap-2"><FaEnvelope className="text-blue-400" />   {orderDetails?.email}</div>
            <div className="flex flex-row items-center gap-2"><FaCheckCircle className="text-blue-400" />  {orderDetails?.paidStatus}</div>
            <div className="flex flex-row items-center gap-2"><FaCalendar className="text-blue-400" />  {orderDetails?.borrowDate}</div>
            <div className="flex flex-row items-center gap-2"> <FaClock className="text-blue-400" />  {orderDetails?.duration} Day(s)</div>
            <div className="flex flex-row items-center gap-2"><MdDateRange className="text-blue-400" />  {orderDetails?.returnDate}</div>
            <div className="flex flex-row items-center gap-2"><FaTruck className="text-blue-400" /> {orderDetails?.orderStatus}</div>
          </div>
        </div>

        <div className="my-6 ">
          <p className="text-lg font-semibold pl-2 text-blue-500">Ordered Books</p>
          <hr />

          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-2 ">
            {orderDetails?.orderedBooks?.map((book) => (
              <div
                className="flex bg-white rounded  p-2 border shadow-sm"
                key={book?.bookId}
              >
                <img
                  className="w-[50px] h-[75px] "
                  src={book?.image_url}
                  alt="BooK Img"
                />
                <div className="pl-4">
                  <p className="text-blue-400 font-semibold">{book?.title}</p>
                  <p>{book?.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
