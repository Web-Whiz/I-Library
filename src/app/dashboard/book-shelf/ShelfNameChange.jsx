import { updateShelfName } from "@/Utils/useBookShelf";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const ShelfNameChange = ({ setChangeShelfName, shelf, refetch }) => {
  const [newShelf, setNewShelf] = useState(null);
  const handleEditShelfName = () => {
    updateShelfName(shelf._id, { shelfName: newShelf });
    refetch();
    setChangeShelfName(false);
  };
  return (
    <div className="justify-center duration-300 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <button
              className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setChangeShelfName(false)}
            >
              <span className=" text-red-400 hover:text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none ease-linear transition-all duration-150">
                <AiFillCloseCircle></AiFillCloseCircle>
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            {/* shelf select */}
            {/* shelf select */}
            <div className="my-4">
              <h2 className="text-lg my-2 font-medium">Type new shelf name</h2>
              <input
                type="text"
                onChange={(e) => setNewShelf(e.target.value)}
                defaultValue={shelf.shelfName}
                placeholder="Type your shelf name"
                className="bg-white w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 outline-none"
              />
            </div>
            <div className="mt-5 text-right w-full">
              <button
                onClick={handleEditShelfName}
                className="bg-indigo-500 w-full text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Change
              </button>
            </div>
          </div>
          {/* body */}
        </div>
      </div>
    </div>
  );
};

export default ShelfNameChange;
