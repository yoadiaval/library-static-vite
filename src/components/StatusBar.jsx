import { useContext, useState } from "react";
import BooksContext from "../context/Books";


function StatusBar() {
  const { organize, books } = useContext(BooksContext);
 
  const handleClick = (event) => {
    organize(event.target.value, books);
  };

  return (
    <div className="flex w-full justify-between place-items-center">
      <div> 10 pages shown</div>
      <div className="w-[250px] h-[1px] bg-gray-300"></div>
      <select onChange={handleClick}>
        <option value="az">Title(A-Z)</option>
        <option value="za">Title(Z-A)</option>
      </select>
    </div>
  );
}

export default StatusBar;
