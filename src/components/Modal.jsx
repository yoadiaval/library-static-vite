import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ children, closeButton, onClose }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-[50px] md:inset-[100px] p-8 md:p-[60px] bg-white drop-shadow-2xl rounded">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end ">{closeButton}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
