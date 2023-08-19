import BookList from "../components/BookList";
import SideBar from "../components/Sidebar";

function Products() {
  return (
    <div className="flex">
      <SideBar />

      <BookList />
    </div>
  );
}

export default Products;
