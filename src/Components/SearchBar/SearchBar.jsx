import React from "react";

const SearchBar = () => {
  return (
    <form>
      <label>
        <input
          type="text"
          className="outline-0 px-3 py-2 rounded-l-sm w-[350px] bg-[#EFF3F8] border-b-2 border-indigo-500"
          placeholder="write here to search"
        />
      </label>
      <button className="bg-indigo-700 p-2 text-white border-b-2 border-indigo-500 rounded-r-sm">
        search
      </button>
    </form>
  );
};

export default SearchBar;
