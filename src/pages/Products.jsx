import BookList from "../components/BookList";
import SelectedList from "../components/SelectedList";
import SideBar from "../components/Sidebar";
import StatusBar from "../components/StatusBar";
import { useEffect, useContext } from "react";
import BooksContext from "../context/Books";
function Products() {

const { fetchSelectedBooks } = useContext(BooksContext);

useEffect(() => {
  fetchSelectedBooks();
}, [fetchSelectedBooks]);


  return (
    <div className="flex flex-col m-[40px] sm:flex-row">
      <section className=" px-[30px] pb-[30px]">
        <SideBar />
      </section>
      <div>
        <section className="pb-[30px]">
          <StatusBar />
        </section>
        <section>
          <BookList />
        </section>
      </div>
      <section className="md:ml-20 md:mt-0 mt-10 ">
        <SelectedList />
      </section>
    </div>
  );
}

export default Products;
