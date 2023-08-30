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
    <div>
      <div>
        <div className="form-control">
          <div className="flex">
            <input
              type="text"
              onChange={(e) => setsesrch(e.target.value)}
              placeholder="Enter title of books Search… "
              className="w-full md:w-[530px] h-12 rounded"
            />
            <button
              className="hover:bg-indigo-500 text-indigo-500 outline-none focus:border-2 hover:text-white bg-indigo-100 "
              onClick={Handlersearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto md:block hidden">
          <div className="bg-white">
            {Booksdatas.map((booksdata) => (
              <div key={booksdata._id} className="flex space-x-96 border-2 mt-2  ml-10 mr-10 p-7 rounded ">
                <div className="flex space-x-4">
                  <img className="w-12 h-12 rounded-md" src={booksdata.image_url} alt="hello" />
                  <h1 className="overflow-hidden w-40">{booksdata.title}</h1>
                </div>
                <div className="flex items-center  space-x-28">
                  <h1>{booksdata.added_date}</h1>
                  <h1>{booksdata.published_in}</h1>
                  
                </div>
                <div className="flex">
                  <button className="text-[15px] rounded-md font-semibold bg-violet-100 text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-2 py-[6px] uppercase">
                    <Link href={`/all-books/${booksdata._id}`}>
                      view details
                    </Link>
                  </button>

                  <button className="text-[15px] ml-2 rounded-md font-semibold bg-violet-100 text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
                    <Link href={`/dashboard/allbooks/${booksdata._id}`}>
                      update
                    </Link>
                  </button>

                  <button
                    onClick={() => handlerdelete(booksdata._id)}
                    className="text-[15px] ml-2 rounded-md font-semibold bg-violet-100 text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone responsive */}

        <div className="md:hidden block">
          {Booksdatas.map((booksdata) => (
            <div
              key={booksdata._id}
              className="bg-base-100 shadow-xl rounded mb-5"
            >
              <figure>
                <img
                  className="w-[343px]"
                  src={booksdata.image_url}
                  alt="Movie"
                />
              </figure>
              <div className="p-3">
                <h2 className="card-title">{booksdata.title}</h2>
                <p>{booksdata.added_date}</p>
                <div className="flex">
                  <button className="text-[15px] mt-2 rounded-md font-semibold bg-violet-100 text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
                    <Link href={`/all-books/${booksdata._id}`}>
                      view details
                    </Link>
                  </button>

                  <button className="text-[15px] ml-2 rounded-md font-semibold bg-violet-100 text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
                    <Link href={`/dashboard/allbooks/${booksdata._id}`}>
                      update
                    </Link>
                  </button>

                  <button
                    onClick={() => handlerdelete(booksdata._id)}
                    className="text-[15px] ml-2 rounded-md font-semibold bg-violet-100 text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
