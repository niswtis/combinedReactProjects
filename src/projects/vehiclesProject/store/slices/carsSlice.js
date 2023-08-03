import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [], //cars
  },
  reducers: {
    changeTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    deleteCar(state, action) {
      state.data = state.data.filter(function (car) {
        return car.id !== action.payload; // action.payload must be the id string of the car we want to delete
      });
    },
  },
});

export const { changeTerm, addCar, deleteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
