import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/BookContext";

function BookShow({book}) {
  const [showEdit, setShowEdit] = useState(false)
  const {deleteBookById} = useContext(BooksContext)

  const editClick = () => {
    setShowEdit(!showEdit)
  }

  const onTitleChange = () => {
    setShowEdit(false)
  }

  const deleteClick = () => {
    deleteBookById(book.id)
  }

  let content = <h3>{book.title}</h3>
  if(showEdit) {
    content = <BookEdit book={book} onTitleChange={onTitleChange}/>
  }

  return (
    <div className="book-show">
      <button className="edit" onClick={editClick}></button>
      <button className="delete" onClick={deleteClick}></button>
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
      <div>{content}</div>
    </div>
  );
}

export default BookShow;
