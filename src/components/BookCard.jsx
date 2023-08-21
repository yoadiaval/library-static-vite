import Modal from "./Modal";
import ContentModal from "./ContentModal";
import { useState, useContext } from "react";
import BooksContext from "../context/Books";

function BookCard(value) {
  const book = value.value;
  const { selectedBooks, addListSelected } = useContext(BooksContext);
  const [showModal, setShowModal] = useState(false);

  const handleClickModal = () => {
    setShowModal(true);
  };
  const handleAdd = () => {
    addListSelected(book);
  };

  const exist = selectedBooks.some((item) => {
    return item.book.title === book.title;
  });

  const style = "bg-green-500 text-white rounded px-[2px] py-[2px]";

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal onClose={handleClose}>
      <ContentModal value={book} />
    </Modal>
  );
  return (
    <div className="transition duration-500 ease-in-out hover:drop-shadow-2xl drop-shadow-lg bg-amber-300 grid md:grid-col-2 space-y-2 justify-items-center border w-[250px] sm:w-[150px]  p-4 rounded">
      {showModal && modal}
      <div>
        <figure>
          <img className="w-full h-auto" src={book.cover} />
        </figure>
        <h2 className="font-bold">{book.title}</h2>
      </div>

      <div className=" h-[20px] grid grid-cols-2 gap-2 ">
        <button
          onClick={handleClickModal}
          className="bg-black text-white rounded px-[2px] py-[2px]"
        >
          Details
        </button>
        <button
          onClick={handleAdd}
          className={exist ? `${style} + opacity-50 ` : style}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default BookCard;
