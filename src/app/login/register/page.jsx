import Link from "next/link";
import { BsGoogle } from "react-icons/bs";
import { FaCamera, FaFacebookF, FaUserAlt } from "react-icons/fa";
import { MdLock, MdEmail } from "react-icons/md";
import login from "@/assets/login.png";
import Image from "next/image";
const RegisterPage = () => {
  return (
    <div className="bg-white  max-w-[700px] mx-auto border shadow-md">
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
        <form>
          <div className="flex items-center my-10 ">
            <span className="bg-slate-100 p-[14px]">
              <FaUserAlt className="w-full text-[#0F86CD] text-2xl" />
            </span>
            <input
              className="text-lg p-3 bg-slate-300 font-normal w-full outline-none"
              type="Text"
              placeholder="Name"
              required
            />
          </div>

          <div className="flex items-center my-10 ">
            <span className="bg-slate-100 p-[14px]">
              <FaCamera className="w-full text-[#0F86CD] text-2xl" />
            </span>
            <input
              className="text-lg p-[9px] bg-slate-300 font-normal w-full outline-none"
              type="file"
              required
            />
          </div>

          <div className="flex items-center my-10 ">
            <span className="bg-slate-100 p-[14px]">
              <MdEmail className="w-full text-[#0F86CD] text-2xl" />
            </span>
            <input
              className="text-lg p-3 bg-slate-300 font-normal w-full outline-none"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="flex items-center  my-10">
            <span className="bg-slate-100 p-[14px]">
              <MdLock className="w-full text-[#0F86CD] text-2xl" />
            </span>
            <input
              className="text-lg p-3 bg-slate-300 font-normal w-full outline-none"
              type="password"
              placeholder="Password"
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
          <button className="text-lg p-2 bg-[#0F86CD] font-bold w-full text-white">
            Sign Up
          </button>
        </form>
        <div className="flex flex-col sm:flex-row justify-between gap-8 my-8 text-center">
          <button className="flex items-center justify-center text-lg p-2 w-full font-bold bg-blue-950 text-center ">
            <BsGoogle className="text-white text-3xl " />
          </button>
          <button className="flex items-center justify-center text-lg p-2 w-full font-bold bg-blue-950 text-center ">
            <FaFacebookF className="text-white text-3xl " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
