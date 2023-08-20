import { useContext, useState } from "react";
import BooksContext from "../context/Books";


function StatusBar() {
  const { organize, books } = useContext(BooksContext);
 const totalBook = books.length;
  const handleClick = (event) => {
    organize(event.target.value, books);
  };

  return (
    <div className="flex w-full justify-between px-8 place-items-center">
      <div> {totalBook} pages shown</div>
      <div className="w-[250px] h-[1px] bg-gray-300"></div>
      <select onChange={handleClick}>
        <option value="az">Title(A-Z)</option>
        <option value="za">Title(Z-A)</option>
      </select>
    </div>
  );
}

export default StatusBar;
