import useAuth from "@/Utils/useAuth";
import logo from "@/assets/ILibrary.png";
import Image from "next/image";
import Link from "next/link";
import {
  BiBookAlt,
  BiGridAlt,
  BiHomeHeart,
  BiSolidBookAdd,
  BiSolidBookAlt,
  BiSolidDashboard,
  BiTimeFive,
  BiUser,
} from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
const AdminNavbar = () => {
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
        <Link href='/'><Image width={200} src={logo} alt="logo" /></Link>
      </div>
      <ul className="px-4 h-full bg-white text-[#3d3c3c]">
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
          <Link
            href="/admin-dashboard"
            className="flex items-center gap-4 text-[15px]"
          >
            <BiSolidDashboard /> Admin-Dashboard
          </Link>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
          <Link
            href="/admin-dashboard/all-users"
            className="flex items-center gap-4 text-[15px]"
          >
            <BiUser />
            All Users
          </Link>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600 my-1  px-2">
          <Link
            href="/admin-dashboard/AddBook"
            className="flex items-center gap-4 text-[15px]"
          >
            <BiSolidBookAdd /> Add Book{" "}
          </Link>
        </li>

        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600 my-1  px-2">
          <Link
            href="/admin-dashboard/allbooks"
            className="flex items-center gap-4 text-[15px]"
          >
            <BiSolidBookAdd /> All Book{" "}
          </Link>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
          <a className="flex items-center gap-4 text-[15px]">
            <BiTimeFive /> Issue Books
          </a>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
          <Link href="#" className="flex items-center gap-4 text-[15px]">
            <BiSolidBookAlt /> Requested Books
          </Link>
        </li>
        <li className="text-gray-900 font-medium cursor-pointer py-[6px] duration-200 text-lg hover:bg-violet-50 rounded-sm hover:text-violet-600  my-1 px-2">
          <Link
            href="/admin-dashboard/questions-answers"
            className="flex items-center gap-4 text-[15px]"
          >
            <BiSolidBookAlt /> Questions & Answers
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

export default AdminNavbar;
