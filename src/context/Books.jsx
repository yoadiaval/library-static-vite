import library from "../data.jsx";
const Genres = ["all", ...new Set(library.map((item) => item.book.genre))];
import { createContext, useCallback, useState } from "react";
import axios from "axios";
const BooksContext = createContext();
import PropTypes from "prop-types";

function Provider({ children }) {
  const [books, setBooks] = useState(library);
  const [allGenres, setAllGenre] = useState(Genres);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const fetchSelectedBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/selectedBooks");
    setSelectedBooks(response.data);
  }, []);

  const addListSelected = async (book) => {
    const exist = selectedBooks.some((item) => {
      return item.book.title === book.title;
    });
    if (!exist) {
      const response = await axios.post("http://localhost:3001/selectedBooks", {
        book,
      });

      const updateSelectedBooks = [...selectedBooks, response.data];
      setSelectedBooks(updateSelectedBooks);
    }
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/selectedBooks/${id}`);
    const updatedPerson = selectedBooks.filter((book) => {
      return book.id !== id;
    });
    setSelectedBooks(updatedPerson);
  };

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
    selectedBooks,
    addListSelected,
    fetchSelectedBooks,
    deleteBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.node.isRequired };
export { Provider };
export default BooksContext;
