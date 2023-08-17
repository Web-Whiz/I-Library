import SectionHeader from "@/Components/SectionHeader/SectionHeader";
import React from "react";

const DonateBook = () => {
  return (
      <div className="container mx-auto bg-white shadow-md p-5">
        <div className="py-4">
          <SectionHeader header="Donate Book" />
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-semibold">
          Share the Gift of Knowledge: Donate Books
          </h2>
          <p className="text-gray-400 font-normal mt-3 mb-5">
          Empower Minds and Enrich Lives Through Book Donations
          </p>
          <button className="text-lg border-2 border-gray-700 px-3 py-2 font-medium rounded-md hover:bg-indigo-600 duration-200 hover:text-white">
            Donate Now
          </button>
        </div>
      </div>
  );
};

export default DonateBook;
