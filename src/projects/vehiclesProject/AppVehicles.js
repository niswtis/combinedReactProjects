import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

import "bulma/css/bulma.css";
import "./styles.css";

import { Provider } from "react-redux";
import { store } from "./store";

function AppVehicles() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

function AppVehiclesWrapper() {
  return (
    <Provider store={store}>
      <AppVehicles />
    </Provider>
  );
}

export default AppVehiclesWrapper;
