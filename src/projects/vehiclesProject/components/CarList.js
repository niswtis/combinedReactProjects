import { useSelector, useDispatch } from "react-redux";
import { deleteCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    // logic to show cars that match search term
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const deleteCarHandler = (id) => {
    dispatch(deleteCar(id));
  };

  const renderedCarList = cars.map((car) => {
    // DECIDE IF THIS CAR SHOULD BE BOLD
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => deleteCarHandler(car.id)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCarList}
      <hr />
    </div>
  );
}

export default CarList;
