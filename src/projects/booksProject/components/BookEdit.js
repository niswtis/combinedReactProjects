import { useContext } from "react"
import BooksContext from "../context/BookContext"

function BookEdit({book, onTitleChange}) {
  const {onTitleEdit} = useContext(BooksContext)
  var titleTemp = book.title
  
  const onChange = (event) => {
    titleTemp = event.target.value
  }

  const onClick = () => {
    onTitleEdit({id: book.id, title: titleTemp})
    onTitleChange()
  }
  
  return (
    <div>
      <div>Title</div>
      <input onChange={onChange}></input>
      <button onClick={onClick}>Save</button>
    </div>
  );
}

export default BookEdit;
