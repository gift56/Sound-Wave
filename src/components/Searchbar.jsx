import { useState } from "react";

const Searchbar = () => {
  return (
    <form
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
    >
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex justify-start items-center"></div>
    </form>
  );
};

export default Searchbar;
