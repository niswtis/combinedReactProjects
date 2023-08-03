import { useSelector, useDispatch } from "react-redux";
import { changeTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    const value = event.target.value;
    dispatch(changeTerm(value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        ></input>
      </div>
    </div>
  );
}

export default CarSearch;
