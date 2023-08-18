import SectionHeader from "@/Components/SectionHeader/SectionHeader";
import Link from "next/link";
import React from "react";

const RequestBook = () => {
  return (
    <div className="container mx-auto bg-white shadow-md p-5">
      <div className="py-4">
        <SectionHeader header="Request Book" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold">
          Request a Book: Expand Your Literary Horizons
        </h2>
        <p className="text-gray-400 font-normal mt-3 mb-5">
          Empower Minds and Enrich Lives Through Book Donations
        </p>
        <Link href="/request-book">
          <button className="text-lg border-2 border-gray-700 px-3 py-2 font-medium rounded-md hover:bg-indigo-600 duration-200 hover:text-white">
            Request Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RequestBook;
