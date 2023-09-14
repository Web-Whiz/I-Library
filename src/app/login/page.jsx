"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import login from "@/assets/login.png";
import { MdOutlineMailOutline, MdOutlineLockOpen } from "react-icons/md";
import Image from "next/image";
import { useForm } from "react-hook-form";
import useAuth from "@/Utils/useAuth";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { Login, googleSignIn, facebookSignIn, user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const password = watch("password", "");

  const handleLogin = async (data) => {
    toast.promise(Login(data.email, data.password), {
      loading: "Logging in...",
      success: (result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        return "Login successful";
      },
      error: (error) => {
        console.log(error);
        throw new Error("Login failed");
      },
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
              return "Login successful";
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
    <div className="bg-[#f3f4f6]  max-w-[700px] mx-auto border md:shadow-md">
      {/* Login Banner */}
      <div>
        <div className="relative w-full h-[350px]">
          <div className="w-full h-full">
            <Image className="w-full h-full" src={login} alt="banner Image" />
          </div>
          <div className="absolute top-0 w-full h-full flex flex-col bg-[#4ABCFF] bg-opacity-40 items-center justify-center text-white">
            <h1 className="font-bold text-center text-3xl">Join Us Again</h1>
            <p className=" font-medium text-center text-lg">
              Reconnect through Your Account Login
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-12">
        <h1 className="text-center my-8 text-3xl font-bold">Login Here </h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="flex items-center my-10 ">
            <span className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <MdOutlineMailOutline className="text-gray-400 text-lg"></MdOutlineMailOutline>
            </span>
            <input
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              {...register("email", { required: true })}
              placeholder="johnsmith@example.com"
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
                {
                  errors.password.type === "required" && "Password is required"
                  // : errors.password.type === "minLength"
                  // ? "Password must be at least 6 characters long"
                  // : "Password must contain a capital letter and a special character"
                }
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-between my-2">
            <p className="hover:underline text-[#0F86CD]">Forgot Password?</p>
            <p>
              Don't Have An Account?
              <Link
                href="/login/register"
                className="hover:underline text-[#0F86CD]"
              >
                Register
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="text-xl text-white p-2 bg-indigo-700 font-semibold w-full"
          >
            Sign in
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

export default LoginPage;
