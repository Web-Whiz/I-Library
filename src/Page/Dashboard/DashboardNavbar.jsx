import useAuth from "@/Utils/useAuth";
import logo from "@/assets/ILibrary.png";
import Image from "next/image";
import Link from "next/link";
import {
  BiBookAlt,
  BiCart,
  BiClipboard,
  BiCreditCard,
  BiGridAlt,
  BiHeart,
  BiHomeHeart,
  BiSolidDashboard,
  BiStar,
  BiTimeFive,
  BiUser,
  BiSolidBookAlt,
} from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
const DashboardNavbar = () => {
  const { setIsDashboardOpen } = useAuth();
  return (
    <div className="w-full h-full relative">
      <button
        className="absolute top-0 right-0 text-lg block lg:hidden text-red-500 bg-red-100 p-[6px] rounded-full"
        onClick={() => setIsDashboardOpen(false)}
      >
        <RxCross2 />
      </button>
      <div className="py-8 flex justify-center px-4">
        <Image width={200} src={logo} alt="logo" />
      </div>
      <ul className="px-4 h-full bg-white text-[#3d3c3c]">
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-4 text-[15px]"
          >
            <BiSolidDashboard /> Dashboard
          </Link>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
          <Link
            href="/dashboard/my-account"
            className="flex items-center gap-4 text-[15px]"
          >
            <BiUser /> My Account
          </Link>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
          <Link
            href="/dashboard/cart"
            className="flex items-center gap-4 text-[15px]"
          >
            <BiCart />
            Cart
          </Link>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
          <a className="flex items-center gap-4 text-[15px]">
            <BiClipboard />
            My Orders
          </a>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
          <a className="flex items-center gap-4 text-[15px]">
            <BiTimeFive /> Order History
          </a>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
          <Link
            href="/dashboard/requested-books"
            className="flex items-center gap-4 text-[15px]"
          >
            <BiSolidBookAlt /> Requested Books
          </Link>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600 my-1  px-2">
          <Link
            href="/dashboard/wish-list"
            className="flex items-center gap-4 text-[15px]"
          >
            <BiHeart />
            Wish LIst{" "}
          </Link>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2 ">
          <a className="flex items-center gap-4 text-[15px]">
            <BiCreditCard /> Payment History{" "}
          </a>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600 my-1  px-2">
          <Link
            href="/dashboard/my-reviews"
            className="flex items-center gap-4 text-[15px]"
          >
            <BiStar /> My Reviews{" "}
          </Link>
        </li>
        <h2 className="text-sm font-semibold text-gray-400 mt-3">
          General Menu
        </h2>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600 my-1  px-2">
          <Link href="/" className="flex items-center gap-4 text-[15px]">
            <BiHomeHeart /> Home
          </Link>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600 my-1  px-2">
          <Link
            href="/all-books"
            className="flex items-center gap-4 text-[15px]"
          >
            <BiBookAlt />
            All Books
          </Link>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600 my-1  px-2">
          <Link
            href="/category"
            className="flex items-center gap-4 text-[15px]"
          >
            <BiGridAlt />
            Category
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNavbar;
