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
          <div className="flex lg:ml-48 md:ml-0">
            <input
              type="text"
              onChange={(e) => setsesrch(e.target.value)}
              placeholder="Enter title of books Search… "
              className="w-full md:w-[530px] h-12 rounded border-2 border-b-blue-600 p-4 mb-5 md:mb-2 mt-5"
            />
            <button
              className="bg-indigo-700 text-white outline-none px-2 mb-5 md:mb-2 mt-5"
              onClick={Handlersearch}
            >
              Search...
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="md:hidden lg:block hidden">
          <div>
            <div className="flex w-[1240px] ml-[190px] bg-white mt-5 border-2 p-2">
              <p className="ml-6">Photo</p>
              <p className="ml-[110px]">Title</p>
              <p className="ml-[250px]">Date</p>
              <p className="ml-[100px]">Publish</p>
              <p className="ml-[180px]">Detail</p>
              <p className="ml-[80px]">Update</p>
              <p className="ml-[70px]">Delete</p>
            </div>
            {Booksdatas.map((booksdata) => (
              <div
                key={booksdata._id}
                className="flex rounded mt-7 bg-blue-300 lg:w-[1240px] ml-48 shadow-md"
              >
                <div className="flex items-center p-5 space-x-3">
                  <img
                    className="w-24 h-24 rounded-md"
                    src={booksdata.image_url}
                    alt=""
                  />
                  <h1 className="w-56">{booksdata.title}</h1>
                  <div className="flex space-x-20">
                    <p className="ml-[80px]">{booksdata.added_date}</p>
                    <p>{booksdata.published_in}</p>
                  </div>
                  <div className="flex space-x-10">
                    <button className="ml-[170px] text-[13px]  rounded-md font-semibold bg-white text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 p-2 uppercase">
                      <Link href={`/all-books/${booksdata._id}`}>details</Link>
                    </button>
                    <button className="text-[13px] ml-2 rounded-md font-semibold bg-white text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
                      <Link href={`/dashboard/allbooks/${booksdata._id}`}>
                        update
                      </Link>
                    </button>
                    <button
                      onClick={() => handlerdelete(booksdata._id)}
                      className="text-[13px] ml-2 rounded-md font-semibold bg-white text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* i pad */}

        <div className="md:block hidden lg:hidden">
          {Booksdatas.map((booksdata) => (
            <div
              key={booksdata._id}
              className="bg-base-100 shadow-xl rounded mb-5 flex p-5"
            >
              <figure>
                <img
                  className="w-[43px] rounded"
                  src={booksdata.image_url}
                  alt="Movie"
                />
              </figure>
              <div className="p-3 flex">
                <h2 className="card-title w-36">{booksdata.title}</h2>
                <p className="ml-20">{booksdata.added_date}</p>
                <div className="flex ml-10">
                  <button className="text-[13px]  rounded-md font-semibold bg-white text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
                    <Link href={`/all-books/${booksdata._id}`}>
                      view details
                    </Link>
                  </button>

                  <button className="text-[13px] ml-2 rounded-md font-semibold bg-white text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
                    <Link href={`/dashboard/allbooks/${booksdata._id}`}>
                      update
                    </Link>
                  </button>

                  <button
                    onClick={() => handlerdelete(booksdata._id)}
                    className="text-[13px] ml-2 rounded-md font-semibold bg-white text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phone responsive */}

        <div className="md:hidden lg:hidden block sm:grid sm:grid-cols-2 sm:ml-5  ml-4 w-[328px] sm:w-full">
          {Booksdatas.map((booksdata) => (
            <div
              key={booksdata._id}
              className="shadow-xl rounded mb-5 "
            >
              <figure>
                <img
                  className="w-[343px] h-[300px]"
                  src={booksdata.image_url}
                  alt="Movie"
                />
              </figure>
              <div className="p-3">
                <h2 className="card-title">{booksdata.title}</h2>
                <p>{booksdata.added_date}</p>
                <div className="flex">
                  <button className="text-[13px]  rounded-md font-semibold bg-white text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
                    <Link href={`/all-books/${booksdata._id}`}>
                      view details
                    </Link>
                  </button>

                  <button className="text-[13px] ml-2 rounded-md font-semibold bg-white text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
                    <Link href={`/dashboard/allbooks/${booksdata._id}`}>
                      update
                    </Link>
                  </button>

                  <button
                    onClick={() => handlerdelete(booksdata._id)}
                    className="text-[13px] ml-2 rounded-md font-semibold bg-white text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase"
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
