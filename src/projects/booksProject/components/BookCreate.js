import { useState, useContext } from "react";
import BooksContext from "../context/BookContext";

function BookCreate() {
  const [inputValue, setInputValue] = useState('')
  const {createBook} = useContext(BooksContext)

  const onButtonClick = () => {
    createBook(inputValue)
    setInputValue('')
  }

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <input className="input" placeholder="title" onChange={onInputChange} value={inputValue}></input>
      <button className="button" onClick={onButtonClick}>Create</button>
    </div>
  );
}

export default BookCreate;
