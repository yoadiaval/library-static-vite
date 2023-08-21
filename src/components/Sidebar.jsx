import { useContext, useState } from "react";
import BooksContext from "../context/Books";
import Link from "./Link";

function SideBar() {
  const [numPages, setNumPages] = useState(1200);
  const [selection, setSelection] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Nothing selected");

  const { allGenres, FilterByPage, FilterBySelection, FilterGenre, clear } =
    useContext(BooksContext);

  const renderedGenre = allGenres.map((item, index) => {
    return (
      <li className="" key={index} onClick={() => FilterGenre(item)}>
        {item}
      </li>
    );
  });

  const handlChange = (event) => {
    setSelection(event.target.value);
    FilterBySelection(selection, placeHolder);
  };

  const handleSelection = (event) => {
    const newPlaceHolder = event.target.value;
    setPlaceHolder(newPlaceHolder);
  };

  const HandleNumPages = (event) => {
    setNumPages(event.target.value);
    FilterByPage(numPages);
  };

  const handleClear = () => {
    setPlaceHolder("Nothing selected");
    setNumPages(1200);
    clear();
  };

  return (
    <div className="flex min-w-fit flex-col space-y-9 bg-stone-200 p-6 rounded-xl">
      <div>
        <select  onChange={handleSelection}>
          <option value="Nothing selected">Search a book By</option>
          <option value="title">Title</option>
          <option value="year">Year</option>
          <option value="ISBN">ISBN</option>
          <option value="author">Author</option>
        </select>
        <input
          onChange={handlChange}
          placeholder={placeHolder}
          value={selection}
          className="border  bg-gray-100 px-2"
        />
      </div>
      <div>
        <h3>Filter By Page</h3>
        <input
          type="range"
          min="0"
          max="1200"
          value={numPages}
          onChange={HandleNumPages}
        />
        <p>Valor actual: {numPages} </p>
      </div>
      <div>
        <h2 className="font-bold">Filter By Genre</h2>
        <ul className="text-slate-500">{renderedGenre}</ul>
      </div>

      <button
        onClick={handleClear}
        className="bg-black text-white rounded w-fit py-1 px-2"
      >
        Clear All
      </button>
    </div>
  );
}
export default SideBar;
