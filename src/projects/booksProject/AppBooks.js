import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useEffect, useContext } from "react";
import BooksContext from "./context/BookContext";
import { Provider } from "./context/BookContext";
import "./AppBooks.css";

function AppBooks() {
  const { getBooks } = useContext(BooksContext);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <div className="app">
      <div>Reading List</div>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default function AppBooksWrapper() {
  return (
    <Provider>
      <AppBooks />
    </Provider>
  );
}
