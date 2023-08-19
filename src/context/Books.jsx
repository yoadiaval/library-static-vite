import library from "../data.jsx";
const Genres = ["all", ...new Set(library.map((item) => item.book.genre))];
import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState(library);
  const [allGenres, setAllGenre] = useState(Genres);

  const organize = (criteriaSort, value) => {
    const newBookList = [...value];
    if (criteriaSort === "az") {
      newBookList.sort((a, b) => a.book.title.localeCompare(b.book.title));
    } else if (criteriaSort === "za") {
      newBookList.sort((a, b) => b.book.title.localeCompare(a.book.title));
    }
    setBooks(newBookList);
  };


  const FilterBySelection = (value, placeHolder) => {
    //Este if evita que salte error cdo no se selecciona nada, optimizarlo para que muestre una validacion de form en lugar de este truco
    if (placeHolder === "Nothing selected") {
      placeHolder = "title";
    }
    const newBookList = library.filter((book) => {
      return book.book[placeHolder]
        .toString()
        .toUpperCase()
        .match(value.toUpperCase());
    });
    setBooks(newBookList);
  };

  const FilterByPage = (numberOfPage) => {
    const newBookList = library.filter((book) => {
      return book.book.pages <= numberOfPage;
    });
    setBooks(newBookList);
  };

const FilterGenre = (genre) => {
  if (genre === "all") {
    setBooks(library);
    return;
  }
  const newBookList = library.filter((book) => {
    return book.book.genre === genre;
  });
  setBooks(newBookList);
};
const clear = () => {
  setAllGenre(allGenres);
  setBooks(library);
};
  const valueToShare = {
    books,
    allGenres,
    organize,
    FilterByPage,
    FilterBySelection,
    FilterGenre,
    clear,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
