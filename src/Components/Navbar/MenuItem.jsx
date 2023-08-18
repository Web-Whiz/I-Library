import Link from "next/link";
import React from "react";

const MenuItem = () => {
  return (
    <div className="bg-[#eff3f8]">
      <ul className="container mx-auto list-none flex text-black items-center divide-x-[1px] divide-indigo-200">
        <Link href="/all-books">
          <li className="hover:text-white hover:bg-indigo-500 px-2 py-2 cursor-pointer duration-200 font-medium">
            All Books
          </li>
        </Link>
        <Link href="/category">
          <li className="hover:text-white hover:bg-indigo-500 px-2 py-2 cursor-pointer duration-200 font-medium">
            Category
          </li>
        </Link>
        <Link href="/author">
          <li className="hover:text-white hover:bg-indigo-500 px-2 py-2 cursor-pointer duration-200 font-medium">
            Author
          </li>
        </Link>
        <li className="hover:text-white hover:bg-indigo-500 px-2 py-2 cursor-pointer duration-200 font-medium">
          <Link href="/publications">Publications</Link>
        </li>
        <li className="hover:text-white hover:bg-indigo-500 px-2 py-2 cursor-pointer duration-200 font-medium">
          Blogs
        </li>
        <Link href="/contact">
          <li className="hover:text-white hover:bg-indigo-500 px-2 py-2 cursor-pointer duration-200 font-medium">
            Contact
          </li>
        </Link>
        <li className="hover:text-white hover:bg-indigo-500 px-2 py-2 cursor-pointer duration-200 font-medium">
          About us
        </li>
        <li className="hover:text-white hover:bg-indigo-500 px-2 py-2 cursor-pointer duration-200 font-medium">
          Kids zone
        </li>
      </ul>
    </div>
  );
};

export default MenuItem;
