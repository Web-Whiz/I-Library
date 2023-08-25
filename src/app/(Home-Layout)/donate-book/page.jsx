"use client";
import PageBanner from "@/Components/PageBanner/PageBanner";
import React from "react";
import banner from "@/assets/banner01.jpg";
import useAuth from "@/Utils/useAuth";
import { useForm } from "react-hook-form";
const DonateBook = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <div>
        <PageBanner bannerName="Donate book" bannerImg={banner} />
      </div>
      <section className="bg-[#f3f4f6] shadow-lg p-4 max-w-4xl mx-auto my-20">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <label htmlFor="userName" className="text-lg mb-1">
              Name:
            </label>
            <input
              type="text"
              id="userName"
              defaultValue={user?.displayName}
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="userEmail" className="text-lg mb-1">
              Email:
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              id="userEmail"
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="bookName" className="text-lg mb-1">
              Book Name:
            </label>
            <input
              type="text"
              id="bookName"
              {...register("bookName")}
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Enter the book name"
            />
          </div>
          <div>
            <label htmlFor="authorName" className="text-lg mb-1">
              Author Name:
            </label>
            <input
              type="text"
              id="authorName"
              {...register("authorName")}
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Enter the author name"
            />
          </div>
          <div>
            <label htmlFor="bookPhoto" className="text-lg mb-1">
              Photo:
            </label>
            <input
              type="file"
              id="bookPhoto"
              {...register("bookPhoto")}
              className="w-full px-3 py-[6px] bg-white rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Enter the author name"
            />
          </div>
          <div>
            <label htmlFor="publicationName" className="text-lg mb-1">
              Publisher:
            </label>
            <input
              type="text"
              id="publicationName"
              {...register("publicationName")}
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Enter the publisher name"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="publicationName" className="text-lg mb-1">
              Message:
            </label>
            <textarea
              id="publicationName"
              {...register("message")}
              className="w-full px-3 h-40 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Write any message you want to share"
            />
          </div>
          <div className="md:col-span-2 mb-4">
            <button type="submit" className="w-full py-2 bg-indigo-600 text-white">
              Submit Request
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default DonateBook;
