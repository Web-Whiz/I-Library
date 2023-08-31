"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const page = () => {
  const [Booksdatas, setBooksdatas] = useState([]);
  const [search, setsesrch] = useState("");

  useEffect(() => {
    fetch("https://i-library-server-mu.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooksdatas(data);
      });
  }, []);

  const Handlersearch = () => {
    fetch(`https://i-library-server-mu.vercel.app/books/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setBooksdatas(data);
      });
  };

  const handlerdelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://i-library-server-mu.vercel.app/books/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remining = Booksdatas.filter((bok) => bok._id !== _id);
              setBooksdatas(remining);
            }
          });
      }
    });
  };

  return (
    <div className="bg-white w-full shadow-lg p-5">
      <div className="flex items-center my-5">
        <input
          type="text"
          onChange={(e) => setsesrch(e.target.value)}
          className="outline-0 px-3 py-2 rounded-l-sm w-[230px] sm:w-[350px] md:w-[350px] lg:w-[350px] xl:w-[350px] bg-[#EFF3F8] border-b-2 border-indigo-500"
          placeholder="write here to search"
        />
        <button
          className="bg-indigo-700 p-2 text-white border-b-2 border-indigo-500 rounded-r-sm"
          onClick={Handlersearch}
        >
          Search...
        </button>
      </div>

      {Booksdatas.map((booksdata) => (
        <div
          key={booksdata._id}
          className="lg:flex md:flex sm:flex items-center justify-between rounded mt-7 bg-blue-300 shadow-md p-4"
        >
          <div className="lg:flex block items-center gap-5">
            <img
              className="md:w-24 md:h-24 lg:w-24 lg:h-24 sm:w-24 sm:h-24 w-full h-[400px] rounded-md"
              src={booksdata.image_url}
              alt=""
            />
            <h1 className="sm:mt-2 sm:break-words sm:w-40 mt-2">
              <span className="font-semibold ">Name: </span>
              {booksdata.title}
            </h1>
          </div>

          <div className="flex py-2 items-center gap-5 ">
            <p>{booksdata.added_date}</p>
            <p>{booksdata.published_in}</p>
          </div>
          <div className="md:flex lg:block lg:space-x-2 sm:block flex items-center gap-5 sm:space-y-3 md:space-y-0 lg:space-y-0">
            <button className="md:inline-flex block text-[13px] rounded-md font-semibold bg-white text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 p-2 uppercase">
              <Link href={`/all-books/${booksdata._id}`}>details</Link>
            </button>
            <button className="md:inline-flex block text-[13px] rounded-md font-semibold bg-white text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
              <Link href={`/dashboard/allbooks/${booksdata._id}`}>update</Link>
            </button>
            <button
              onClick={() => handlerdelete(booksdata._id)}
              className="md:inline-flex block text-[13px] rounded-md font-semibold bg-white text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
