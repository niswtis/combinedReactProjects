import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeCost, changeName } from "./slices/formSlice";
import { carsReducer, changeTerm, addCar, deleteCar } from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store, changeCost, changeName, changeTerm, addCar, deleteCar };
