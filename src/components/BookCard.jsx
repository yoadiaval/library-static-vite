import Modal from "./Modal";
import ContentModal from "./ContentModal";
import { useState } from "react";

function BookCard(value) {
  const book = value.value;
  const [showModal, setShowModal] = useState(false);

  const handleClickModal = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const closeButton = (
    <button
      className="text-white bg-black px-[4px] py-[2px] rounded"
      onClick={handleClose}
    >
      Close
    </button>
  );

  const modal = (
    <Modal onClose={handleClose} closeButton={closeButton}>
      <ContentModal value={book} />
    </Modal>
  );
  return (
    <div className="grid md:grid-col-2 space-y-2 justify-items-center border w-[250px] sm:w-[150px]  p-4 rounded">
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
        <button className="bg-green-500 text-white rounded px-[2px] py-[2px]">
          Add
        </button>
      </div>
    </div>
  );
}

export default BookCard;
