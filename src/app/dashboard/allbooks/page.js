"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const page = () => {
  const [Booksdatas, setBooksdatas] = useState([]);
  const [search, setsesrch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooksdatas(data);
      });
  }, []);

  const Handlersearch = () => {
    fetch(`http://localhost:5000/books/${search}`)
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
        fetch(`http://localhost:5000/books/${_id}`, {
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
        <div className="form-control mb-2">
          <div className="input-group">
            <input
              type="text"
              onChange={(e) => setsesrch(e.target.value)}
              placeholder="Enter title of books Search… "
              className="input input-bordered w-full md:w-[530px]"
            />
            <button
              className="btn btn-square hover:bg-indigo-500 text-indigo-500 hover:text-white bg-indigo-100"
              onClick={Handlersearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
        <div className="overflow-x-auto md:block hidden ">
          <table className="table bg-white">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Published</th>
                <th>View Deteles</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {Booksdatas.map((booksdata) => (
                <tr key={booksdata._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className=" rounded w-12 h-12">
                          <img
                            src={booksdata.image_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{booksdata.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{booksdata.added_date}</p>
                  </td>
                  <td>{booksdata.published_in}</td>

                  <th>
                    <button className="text-[15px] mt-2 rounded-md font-semibold bg-violet-100 text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
                      <Link href={`/all-books/${booksdata._id}`}>
                        view details
                      </Link>
                    </button>
                  </th>

                  <th>
                    <button className="text-[15px] mt-2 rounded-md font-semibold bg-violet-100 text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
                      <Link href={`/dashboard/allbooks/${booksdata._id}`}>
                        update
                      </Link>
                    </button>
                  </th>

                  <th>
                    <button
                      onClick={() => handlerdelete(booksdata._id)}
                      className="text-[15px] mt-2 rounded-md font-semibold bg-violet-100 text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Phone responsive */}

        <div className="md:hidden block">
          {Booksdatas.map((booksdata) => (
            <div className="bg-base-100 shadow-xl rounded mb-5">
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

                  <button onClick={() => handlerdelete(booksdata._id)} className="text-[15px] ml-2 rounded-md font-semibold bg-violet-100 text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
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
