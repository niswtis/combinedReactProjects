import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/BookContext";

function BookList() {

  const {books, deleteBookById} = useContext(BooksContext)

  const onDelete = (id) => {
    deleteBookById(id)
  }

  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} onDelete={onDelete}/>
  })

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default BookList;
