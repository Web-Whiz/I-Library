import SectionHeader from "@/Components/SectionHeader/SectionHeader";
import Link from "next/link";

const DonateBook = () => {
  return (
    <div className="container mx-auto bg-[#f3f4f6] shadow-lg rounded-lg px-5 py-8">
      <div className="py-4">
        <SectionHeader header="Donate Book" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-600">
          Share the Gift of Knowledge: Donate Books
        </h2>
        <p className="text-gray-600 font-normal mt-3 mb-5">
          Empower Minds and Enrich Lives Through Book Donations
        </p>
        <Link href="/donate-book">
          <button className="text-base ring-2 ring-indigo-600 ring-inset text-gray-900 px-3 py-2 font-medium rounded-md hover:bg-indigo-600 duration-200 hover:text-white">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonateBook;
