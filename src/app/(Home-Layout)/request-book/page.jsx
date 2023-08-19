import PageBanner from "@/Components/PageBanner/PageBanner";
import React from "react";
import banner from "@/assets/banner01.jpg";
const RequestBook = () => {
  return (
    <div>
      <div>
        <PageBanner bannerName="Request a book" bannerImg={banner} />
      </div>
      <section className="bg-white p-4 max-w-4xl mx-auto my-20">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <label htmlFor="userName" className="text-lg mb-1">
              Name:
            </label>
            <input
              type="text"
              id="userName"
              className="w-full px-3 py-[6px] bg-[#EFF3F8] outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="userEmail" className="text-lg mb-1">
              Email:
            </label>
            <input
              type="email"
              id="userEmail"
              className="w-full px-3 py-[6px] bg-[#EFF3F8] outline-none"
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
              className="w-full px-3 py-[6px] bg-[#EFF3F8] outline-none"
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
              className="w-full px-3 py-[6px] bg-[#EFF3F8] outline-none"
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
              className="w-full px-3 py-[6px] bg-[#EFF3F8] outline-none"
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
              className="w-full px-3 py-[6px] bg-[#EFF3F8] outline-none"
              placeholder="Enter the publisher name"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="publicationName" className="text-lg mb-1">
              Message:
            </label>
            <textarea
              id="publicationName"
              className="w-full px-3 h-40 py-[6px] bg-[#EFF3F8] outline-none"
              placeholder="Write any message you want to share"
            />
          </div>
          <div className="col-span-2 mb-4">
            <button className="w-full py-2 bg-indigo-600 text-white">Request now</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default RequestBook;
