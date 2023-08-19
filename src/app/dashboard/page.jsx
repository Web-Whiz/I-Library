import React from "react";

const page = () => {
  return (
    <div className="w-full bg-white">
      <div className="bg-indigo-700 p-3 rounded-md flex flex-col md:flex-row gap-4 items-center">
        <h1 className="font-bold text-2xl text-white">Personal Information</h1>
        <p className="text-black cursor-pointer font-semibold hover:underline">
          Change Information
        </p>
      </div>

      <div>
        <h4 className="mt-10">Profile Picture</h4>
        <img
          className="avatar w-24 rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=200&q=80"
        />
      </div>

      <form className="text-black flex flex-col gap-4">
        <label htmlFor="name">Name</label>
        <input
          className="w-full p-2 font-bold outline-none bg-white rounded-md"
          type="text"
          name="name"
          id="name"
          defaultValue="John Doe"
        />

        <label htmlFor="email">Email</label>
        <input
          className="w-full p-2 font-bold outline-none bg-white rounded-md"
          type="email"
          name="email"
          id="email"
          defaultValue="john@doe.com"
        />

        <label htmlFor="phone">Phone</label>
        <input
          className="w-full p-2 font-bold outline-none bg-white rounded-md"
          type="number"
          name="phone"
          id="phone"
          defaultValue="01003082245"
        />

        <label htmlFor="dateOfBirth">Date Of Birth</label>
        <input
          className="w-full p-2 font-bold outline-none bg-white rounded-md"
          type="text"
          name="dateOfBirth"
          id="dateOtBirth"
          defaultValue="01.01.01"
        />
        <label htmlFor="name">Name</label>
        <input
          className="w-full p-2 font-bold outline-none bg-white rounded-md"
          type="text"
          name="name"
          id="name"
          defaultValue="John Doe"
        />

        <label htmlFor="email">Email</label>
        <input
          className="w-full p-2 font-bold outline-none bg-white rounded-md"
          type="email"
          name="email"
          id="email"
          defaultValue="john@doe.com"
        />

        <label htmlFor="phone">Phone</label>
        <input
          className="w-full p-2 font-bold outline-none bg-white rounded-md"
          type="number"
          name="phone"
          id="phone"
          defaultValue="01003082245"
        />

        <label htmlFor="dateOfBirth">Date Of Birth</label>
        <input
          className="w-full p-2 font-bold outline-none bg-white rounded-md"
          type="text"
          name="dateOfBirth"
          id="dateOtBirth"
          defaultValue="01.01.01"
        />
        <label htmlFor="name">Name</label>
        <input
          className="w-full p-2 font-bold outline-none bg-white rounded-md"
          type="text"
          name="name"
          id="name"
          defaultValue="John Doe"
        />

        <label htmlFor="email">Email</label>
        <input
          className="w-full p-2 font-bold outline-none bg-white rounded-md"
          type="email"
          name="email"
          id="email"
          defaultValue="john@doe.com"
        />

        <label htmlFor="phone">Phone</label>
        <input
          className="w-full p-2 font-bold outline-none bg-white rounded-md"
          type="number"
          name="phone"
          id="phone"
          defaultValue="01003082245"
        />

        <label htmlFor="dateOfBirth">Date Of Birth</label>
        <input
          className="w-full p-2 font-bold outline-none bg-white rounded-md"
          type="text"
          name="dateOfBirth"
          id="dateOtBirth"
          defaultValue="01.01.01"
        />
      </form>
    </div>
  );
};

export default page;
