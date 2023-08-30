"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Users = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");

  const openModal = (userId) => {
    setSelectedUserId(userId);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedUserId("");
    setShowModal(false);
  };

  const handleWarning = (e) => {
    e.preventDefault();
    const userId = selectedUserId;
    const warning = e.target.elements.text.value;

    fetch(`https://i-library-server-seven.vercel.app/users/warning/${userId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ warning }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });

    closeModal();
    console.log(userId, warning);
  };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://i-library-server-seven.vercel.app/users`
      );
      return res.json();
    },
  });

  const handleChangeRole = (id, role) => {
    let updatedRole;
    if (!role || role === "user") {
      updatedRole = "admin";
    } else {
      updatedRole = "user";
    }

    fetch(`https://i-library-server-seven.vercel.app/users/update-role/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updatedRole }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
    // console.log(updatedRole);
  };

  const handleSuspend = (id, status) => {
    let updatedStatus;
    if (!status || status === "active") {
      updatedStatus = "suspended";
    } else {
      updatedStatus = "active";
    }

    fetch(`https://i-library-server-seven.vercel.app/users/update-status/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updatedStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
    // console.log(updatedStatus);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-lg">
        Total Users:{users.length}
      </h1>
      <hr />
      {users?.map((user) => (
        <div className="my-2 bg-white" key={user?._id}>
          <div className=" flex flex-col sm:flex-row items-center border w-full p-4 gap-4 justify-between">
            <div className="flex flex-col gap-2 md:flex-row ">
              <img
                className="h-[50px] w-[50px] rounded shadow"
                src={user?.image}
                alt=""
              />
              <div className="min-w-[300px]">
                <p>Name:{user?.name}</p>
                <p>Email:{user?.email}</p>
                <p>Role:{user?.role === "admin" ? "Admin" : "User"}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-fit">
              <button
                onClick={() => handleChangeRole(user?._id, user?.role)}
                className="p-2 m-2 bg-green-400 rounded w-full md:max-w-fit"
              >
                Make {user?.role === "admin" ? "User" : "Admin"}
              </button>
              <button
                onClick={() => openModal(user?._id)}
                className="p-2 m-2 bg-green-400 rounded w-full md:max-w-fit"
              >
                Give Warning
              </button>
              <button 
              className="p-2 m-2  bg-red-400 rounded md:max-w-fit w-full"
              onClick={() => handleSuspend(user?._id, user?.status)}
              >
                { user?.status === 'suspended'?'Suspended':'Suspend'}
                
              </button>
            </div>
          </div>
        </div>
      ))}

      {showModal && (
        <div className=" h-[100vh] w-full z-40 p-10 flex items-center justify-center transition-all duration-1000  absolute top-0 left-0 bg-transparent border mx-auto">
          <div className=" rounded max-w-[500px] flex flex-col px-10 py-6 items-center justify-center bg-[#000000b2]">
            <h2 className="text-lg font-semibold text-white">Give Warning</h2>
            <form
              className="flex flex-col justify-center items-center p-4"
              onSubmit={handleWarning}
            >
              <textarea
                className="focus:outline-sky-400 outline-2 p-2 shadow-md  rounded"
                name="text"
                cols="30"
                rows="3"
              ></textarea>

              <div>
                <button
                  className=" p-2  bg-sky-600 text-white font-semibold rounded m-2"
                  type="submit"
                >
                  Update
                </button>
                <button
                  className="p-2 bg-sky-600 text-white font-semibold rounded m-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
