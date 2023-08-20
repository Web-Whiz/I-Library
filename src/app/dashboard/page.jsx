import Image from "next/image";
import React from "react";
import profilePhoto from "@/assets/Author01.jpg";
const page = () => {
  return (
    <div className="w-full bg-white shadow-lg p-5 md:p-8">
      {/* personal information */}
      <div className="grid md:grid-cols-5 gap-4 items-start border-b-[1px] border-gray-200 pb-8">
        <div className="md:col-span-2">
          <h2 className="text-xl sm:text-2xl font-serif font-semibold">
            Personal Information
          </h2>
          <p className="text-[16px]">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div className="md:col-span-3">
          {/* Profile photo */}
          <div className="flex items-center gap-6">
            <Image
              width={100}
              className="rounded-md"
              src={profilePhoto}
              alt="profile photo"
            />
            <div>
              <label
                htmlFor="uploadPhoto"
                className="text-[14px] cursor-pointer font-medium px-3 py-[6px] rounded-md bg-violet-100 text-violet-600"
              >
                Change avatar
              </label>
              <input className="hidden" type="file" id="uploadPhoto" />
              <p className="text-[12px] mt-2">JPG, GIF, or PNG. 1MB Max.</p>
            </div>
          </div>
          {/* profile photo */}
          <form className="mt-4">
            <div>
              <label htmlFor="name" className="text-[16px] font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-[6px] text-[16px] mt-[6px] rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Type your name"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="Email" className="text-[16px] font-medium">
                Email:
              </label>
              <input
                type="text"
                id="Email"
                className="w-full px-3 py-[6px] text-[16px] mt-[6px] rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Type your email"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="phone" className="text-[16px] font-medium">
                Phone:
              </label>
              <input
                type="number"
                id="phone"
                className="w-full px-3 py-[6px] text-[16px] mt-[6px] rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Type your phone number"
              />
            </div>
            <div className="flex justify-end mt-5">
              <button className="text-[15px] rounded-md font-semibold bg-violet-100 text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
                save
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* personal information */}
      {/* change password */}
      <div className="grid md:grid-cols-5 gap-4 items-start border-b-[1px] border-gray-200 py-8">
        <div className="md:col-span-2">
          <h2 className="text-xl sm:text-2xl font-serif font-semibold">
            Change password
          </h2>
          <p className="text-[16px]">
            Update your password associated with your account.
          </p>
        </div>
        <div className="md:col-span-3">
          <form className="mt-4">
            <div>
              <label
                htmlFor="currentPassword"
                className="text-[16px] font-medium"
              >
                Current password:
              </label>
              <input
                type="text"
                id="currentPassword"
                className="w-full px-3 py-[6px] text-[16px] mt-[6px] rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Enter current password"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="newPassword" className="text-[16px] font-medium">
                New password:
              </label>
              <input
                type="text"
                id="newPassword"
                className="w-full px-3 py-[6px] text-[16px] mt-[6px] rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Type new password"
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="confirmPassword"
                className="text-[16px] font-medium"
              >
                Confirm password:
              </label>
              <input
                type="text"
                id="confirmPassword"
                className="w-full px-3 py-[6px] text-[16px] mt-[6px] rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Retype confirm password"
              />
            </div>
            <div className="flex justify-end mt-5">
              <button className="text-[15px] rounded-md font-semibold bg-violet-100 text-violet-600 hover:bg-violet-600 duration-200 hover:text-violet-100 px-4 py-[6px] uppercase">
                change password
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* change password */}
      {/* delete my account */}
      <div className="grid md:grid-cols-5 gap-4 items-center py-8">
        <div className="md:col-span-2">
          <h2 className="text-xl sm:text-2xl font-serif font-semibold">
            Delete account
          </h2>
          <p className="text-[16px]">
            No longer want to use our service? You can delete your account here.
            This action is not reversible. All information related to this
            account will be deleted permanently.
          </p>
        </div>
        <div className="md:col-span-3">
          <button className="text-[15px] rounded-md font-semibold bg-red-100 text-red-600 hover:bg-red-600 duration-200 hover:text-red-100 px-4 py-[6px] uppercase">
            Yes, delete my account
          </button>
        </div>
      </div>
      {/* delete my account */}
    </div>
  );
};

export default page;
