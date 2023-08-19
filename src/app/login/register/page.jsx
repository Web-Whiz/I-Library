"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import {
  MdOutlineMailOutline,
  MdOutlineLockOpen,
  MdOutlineEdit,
  MdOutlineCameraAlt,
} from "react-icons/md";
import login from "@/assets/login.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import useAuth from "@/Utils/useAuth";
const RegisterPage = () => {
  const { createUser, googleSignIn, user } = useAuth();
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    console.log(data);
    const { email, password, photo, name } = data;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-[#f3f4f6]  max-w-[700px] mx-auto border shadow-md">
      {/* register Banner */}
      <div>
        <div className="relative w-full h-[350px]">
          <div className="w-full h-full">
            <Image
              className="w-full h-full object-cover object-center"
              src={login}
              alt="banner Image"
            />
          </div>
          <div className="absolute top-0 w-full h-full flex flex-col bg-[#4ABCFF] bg-opacity-40 items-center justify-center text-white">
            <h1 className="font-bold text-center text-3xl">
              Unlock the Library's Treasures
            </h1>
            <p className=" font-medium text-center text-lg">
              Open the Door to a Realm of Books and Knowledge
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-12">
        <h1 className="text-center my-8 text-3xl font-bold">
          Get Started Here
        </h1>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="flex items-center my-10 ">
            <span className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <MdOutlineEdit className="text-gray-400 text-lg" />
            </span>
            <input
              className="w-full -ml-10 pl-10 bg-white pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              {...register("name", { required: true })}
              placeholder="Type your name"
              type="text"
              required
            />
          </div>

          <div className="flex items-center my-10 ">
            <span className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <MdOutlineCameraAlt className="text-gray-400 text-lg" />
            </span>
            <input
              className="w-full -ml-10 pl-10 bg-white pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="upload your photo"
              {...register("photo", { required: true })}
              type="file"
              required
            />
          </div>

          <div className="flex items-center my-10 ">
            <span className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <MdOutlineMailOutline className="text-gray-400 text-lg" />
            </span>
            <input
              className="w-full -ml-10 bg-white pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="johnsmith@example.com"
              {...register("email", { required: true })}
              type="email"
              required
            />
          </div>

          <div className="flex items-center  my-10">
            <span className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <MdOutlineLockOpen className="text-gray-400 text-lg" />
            </span>
            <input
              className="w-full bg-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="************"
              type="password"
              {...register("password", { required: true })}
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between my-2">
            <p>
              Already Have An Account?
              <Link
                href="/login"
                className="hover:underline text-[#0F86CD] font-bold"
              >
                Login
              </Link>
            </p>
          </div>
          <button className="text-lg p-2 bg-indigo-700 font-semibold w-full text-white">
            Sign Up
          </button>
        </form>
        <div className="flex flex-col sm:flex-row justify-between gap-8 my-8 text-center">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 hover:bg-[#f3f4f6] hover:-translate-y-0.5 justify-center text-lg p-2 w-full font-bold bg-white shadow-md text-center "
          >
            <FcGoogle className="text-2xl" /> <span>Google</span>
          </button>
          <button className="flex items-center gap-2 hover:bg-[#f3f4f6] hover:-translate-y-0.5 justify-center text-lg p-2 w-full font-bold bg-white shadow-md text-center ">
            <FaFacebookF className="text-[#1877F2] text-2xl" />
            <span>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
