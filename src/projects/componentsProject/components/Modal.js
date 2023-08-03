import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ children, closeModal, actionBar }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  console.log(ReactDOM);
  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-80"
        onClick={closeModal}
      ></div>
      <div className="fixed inset-40 p-10 bg-white overflow-auto">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end p-5">{actionBar}</div>
        </div>
      </div>
    </div>,

    document.querySelector(".modal-container")
  );
}

export default Modal;
