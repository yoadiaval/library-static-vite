import BookCard from "./BookCard";
import { useContext } from "react";
import BooksContext from "../context/Books";

function BookList() {

    const {books}= useContext(BooksContext)
  const renderedList = books.map((item, index) => {
    return <BookCard key={index} value={item.book} />;
  });

  return (
    <div className="grid grid-cols-1 gap-y-6 justify-items-center sm:gap-x-5 sm:grid-cols-2 md:grid-cols-3">
      {renderedList}
    </div>
  );
}

export default BookList;
