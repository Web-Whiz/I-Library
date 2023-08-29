"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Users = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      return res.json();
    },
  });

  return (
    <div>
      <h1 className="text-center font-bold text-lg">
        Total Users:{users.length}
      </h1>
      <hr />
      {users?.map((user) => (
        <div className="my-2" key={user?._id}>
          <div className="flex  border w-full p-4 gap-4">
            <img className="h-[50px] w-[50px] rounded shadow" src={user?.image} alt="" />
            <div className="min-w-[300px]">
            <p>Name:{user?.name}</p>
            <p>Email:{user?.email}</p>
            </div>
            <div>
                <button className="p-2 bg-green-400 rounded">Change Role</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;

{
  /* <div key={user?._id}>

</div>; */
}
