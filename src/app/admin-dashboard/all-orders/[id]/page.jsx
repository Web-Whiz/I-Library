"use client";

import { useQuery } from "@tanstack/react-query";
import {
  FaCalendar,
  FaInfoCircle,
  FaTruck,
  FaUser,
} from "react-icons/fa";

const OrderDetail = ({ params }) => {
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

  const handleChangeOrderStatus = (event) => {
    event.preventDefault();
    const form = event.target;
    const selectedStatus = form.selected_option.value;
    if (!selectedStatus) {
      console.log("No Selected Status");
      return;
    }
    fetch(`${process.env.NEXT_PUBLIC_BaseURL}/update-order-status/${params.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ selectedStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
    console.log();
  };

  console.log(orderDetails);
  return (
    <div className="p-0 md:p-4 lg:px-8 lg:py-5">
      <div className="my-4">
        <h1 className="font-semibold text-lg ">Orders Details</h1>
        <div className="flex flex-col md:flex-row  md:items-center justify-between">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span><FaCalendar className="text-blue-400" /></span>
             <span>Date:{orderDetails?.borrowDate}</span>
            </div>
            <p>Order Id: {orderDetails?._id}</p>
            <p>TrxId Id: {orderDetails?.transactionId}</p>
          </div>

          <form onSubmit={handleChangeOrderStatus} className="flex gap-4 ">
            <select
              className="bg-slate-200 px-4 py-2 rounded-md"
              name="selected_option"
            >
              <option value="" disabled selected>
                Change Status
              </option>
              <option value="processing">Processing</option>
              <option value="delivered">Delivered</option>
            </select>
            <button
              className="bg-slate-200 px-4 py-2 rounded-md"
              type="submit"
              disabled={orderDetails?.orderStatus == 'delivered'}             
            >Save</button>
          </form>
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4 text-sm">
        <div className=" flex items-start gap-2 border p-4 bg-white rounded-md">
          <div className="p-3 bg-slate-200 rounded-full">
            <FaUser className="text-blue-400" />
          </div>
          <div>
            <p className="mb-2 font-semibold">Customer info</p>
            <p>Name:{orderDetails?.name}</p>
            <p>Email:{orderDetails?.email}</p>
            <p>Phone:0140142454</p>
          </div>
        </div>

        <div className="flex items-start gap-2 border p-4 bg-white rounded-md">
          <div className="p-3 bg-slate-200 rounded-full">
            <FaInfoCircle className="text-blue-400" />
          </div>
          <div>
            <p className="mb-2 font-semibold">Order Info</p>
            <p>Shipping: Cargo Express</p>
            <p>Payment Method : Card</p>
            <p className="mt-1">
              Status :
              {orderDetails?.orderStatus && (
                <span className="bg-blue-400 p-1 ml-1 font-semibold capitalize rounded">
                  {orderDetails?.orderStatus}
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2 border p-4 bg-white rounded-md">
          <div className="p-3 bg-slate-200 rounded-full">
            <FaTruck className="text-blue-400" />
          </div>
          <div>
            <p className="mb-2 font-semibold">Deliver To</p>
            <p>Address: {orderDetails?.shippingAddress}</p>
          </div>
        </div>
      </div>
      <hr />

      <div class="w-full overflow-hidden rounded-lg shadow-md my-4 border">
        <h1 className="font-semibold  ml-4 ">Ordered Books</h1>
        <div class="w-full overflow-x-auto">
          <table class="w-full whitespace-nowrap">
            <thead>
              <tr class="bg-blue-200">
                <th class="px-4 py-3 text-left font-semibold">Image</th>
                <th class="px-4 py-3 text-left font-semibold">Book Name</th>
                <th class="px-4 py-3 text-left font-semibold">Author</th>
              </tr>
            </thead>
            <tbody class="bg-daisy-200">
              {orderDetails?.orderedBooks?.map((book) => (
                <tr class="hover:bg-daisy-100 border">
                  <td class="p-2 whitespace-nowrap">
                    <img
                      className="w-[50px] h-[50px] rounded"
                      src={book?.image_url}
                      alt="BooK Img"
                    />
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap">{book?.title}</td>
                  <td class="px-2 py-4 whitespace-nowrap">{book?.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className="border p-2 font-semibold md:col-span-2 flex flex-col justify-start items-end ">
          <h1>Delivery charge per Books: $50</h1>
          <h2> Total Charge: ${orderDetails?.orderedBooks?.length * 50}</h2>
          <div className="w-fit bg-blue-400 block rounded my-2 p-2">Paid</div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
