"use client";
import useAuth from "@/Utils/useAuth";
import usePhotoUpload from "@/Utils/usePhotoUpload";
import login from "@/assets/login.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiHide, BiShow } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  MdOutlineCameraAlt,
  MdOutlineEdit,
  MdOutlineLockOpen,
  MdOutlineMailOutline,
} from "react-icons/md";

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, googleSignIn, facebookSignIn, updateUserProfile } =
    useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const handleRegistration = async (data) => {
    toast.promise(usePhotoUpload(data.photo[0]), {
      loading: "Uploading photo...",
      success: async (imgURL) => {
        try {
          const { email, password, name } = data;
          const result = await createUser(email, password);
          console.log(result.user);

          await updateUserProfile(name, imgURL);

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BaseURL}/users`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ name, email, image: imgURL }),
            }
          );

          const responseData = await response.json();

          if (responseData.insertedId) {
            toast.success("User created successfully");
<<<<<<< HEAD
            router.push("/");
=======
           
>>>>>>> 4492cb5f133f7d7a1aaa6c4c4a05f7b733f91edb
          }
        } catch (error) {
          console.log(error);
          toast.error("An error occurred during registration");
        }
      },
      error: "An error occurred while uploading photo",
    });
  };

  const handleGoogleLogin = async () => {
    try {
      toast.promise(googleSignIn(), {
        loading: "Logging in...",
        success: async (result) => {
          try {
            const loggedInUser = result.user;
            const userData = {
              name: loggedInUser.displayName,
              email: loggedInUser.email,
              image: loggedInUser.photoURL,
            };
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_BaseURL}/users`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
              }
            );
            const responseData = await response.json();
            if (
              responseData.insertedId ||
              responseData.message === "user already exists"
            ) {
              toast.success("Login successful");
              router.push("/");
            }
          } catch (error) {
            console.log(error);
            toast.error("An error occurred during Login");
          }
        },
        error: "Login failed",
      });
    } catch (error) {
      console.log(error);
      toast.error("Google login failed");
    }
  };

  const handleFacebookLogin = async () => {
    toast.promise(facebookSignIn(), {
      loading: "Logging in...",
      success: async (result) => {
        try {
          const loggedInUser = result.user;
          const userData = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            image: loggedInUser.photoURL,
          };
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BaseURL}/users`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            }
          );
          const responseData = await response.json();
          if (
            responseData.insertedId ||
            responseData.message === "user already exists"
          ) {
            return "Login successful";
          }
        } catch (error) {
          console.log(error);
          toast.error("Facebook login failed");
        }
      },
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

          <div>
            <div className="flex items-center relative mt-10 mb-2">
              <span className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <MdOutlineLockOpen className="text-gray-400 text-lg"></MdOutlineLockOpen>
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])/,
                })}
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="************"
              />
              <button
                className="absolute top-1/2 -translate-y-1/2 bottom-0 right-3 cursor-pointer"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <BiShow></BiShow> : <BiHide> </BiHide>}
              </button>
            </div>
            {errors.password && (
              <div className="text-red-600">
                {errors.password.type === "required"
                  ? "Password is required"
                  : errors.password.type === "minLength"
                  ? "Password must be at least 6 characters long"
                  : "Password must contain a capital letter and a special character"}
              </div>
            )}
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
          <button
            onClick={handleFacebookLogin}
            className="flex items-center gap-2 hover:bg-[#f3f4f6] hover:-translate-y-0.5 justify-center text-lg p-2 w-full font-bold bg-white shadow-md text-center "
          >
            <FaFacebookF className="text-[#1877F2] text-2xl" />
            <span>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
