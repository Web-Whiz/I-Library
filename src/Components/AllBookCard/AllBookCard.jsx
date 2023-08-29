import React from "react";

const AllBookCard = ({ book }) => {
  return (
    <div className="">
      <div className="w-full mx-auto group h-[320px] p-[3px] bg-[#f8fafc] hover:shadow-md duration-500 shadow-slate-100 rounded-sm overflow-hidden relative collegeCard flex flex-col">
        <div className="w-full h-[215px] relative">
          <img
            className="w-full h-full hover:scale-120 duration-300 object-cover object-center"
            src={book?.image_url}
          />
          <div className="absolute z-0 top-0 left-0 -translate-y-[105%] group-hover:-translate-y-0  duration-200 w-full h-full backdrop-blur-md bg-black/60 bg-opacity-30 flex justify-center items-center">
            <button className="text-white text-sm hover:bg-indigo-700 duration-200 border-[1px] border-white rounded-full px-4 py-[2px]">
              Add to bag
            </button>
          </div>
        </div>
        <div className="py-2 sm:py-1 flex-grow text-center z-10">
          <h1 className="font-semibold text-sm "> {book?.title} </h1>
        </div>
        <div className="flex flex-col pb-2 justify-end items-center z-10">
          <h3 className="text-xs text-gray-600 font-medium">
            Self-Help and Motivation
          </h3>
          <h4 className="text-[10px]">Self no: 23</h4>
        </div>
      </div>
    </div>
  );
};

export default AllBookCard;
