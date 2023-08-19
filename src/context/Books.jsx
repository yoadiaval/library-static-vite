import library from "../data.jsx";
//const allGenre = ["all", ...new Set(library.map((item) => item.book.genre))];
import { createContext, useState } from "react";

const BooksContext = createContext();


function Provider({children}){

const [books, setBooks] = useState(library);

    const valueToShare = {
        books
    }

    console.log(books)
    return (
      <BooksContext.Provider value={valueToShare}>
        {children}
      </BooksContext.Provider>
    );
}

export {Provider}
export default BooksContext