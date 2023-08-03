import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const getId = async () => {
    const response = await axios.get("http://localhost:3001/id");
    return response.data.id;
  };

  const incrementId = async (id) => {
    await axios.post("http://localhost:3001/id", {
      id: id + 1,
    });
  };

  const createBook = async (title) => {
    const id = await getId();
    const response = await axios.post("http://localhost:3001/books", {
      id,
      title,
    });

    const updatedArr = [...books, { id: response.data.id, title }];
    setBooks(updatedArr);
    incrementId(id);
  };

  const getBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  }, []);

  const deleteBookById = async (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);

    await axios.delete(`http://localhost:3001/books/${id}`);
  };

  const onTitleEdit = (editedBook) => {
    axios.put(`http://localhost:3001/books/${editedBook.id}`, editedBook);
    const updatedBooks = books.map((book) => {
      if (editedBook.id === book.id) {
        return { ...book, title: editedBook.title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    getBooks,
    createBook,
    deleteBookById,
    onTitleEdit,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
