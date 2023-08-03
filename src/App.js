import AppAnimals from "./projects/animalsProject/AppAnimals";
import AppBooksWrapper from "./projects/booksProject/AppBooks";
import AppComponentsWrapper from "./projects/componentsProject/AppComponents";
import AppVehicles from "./projects/vehiclesProject/AppVehicles";
import AppUsersWrapper from "./projects/usersProject/AppUsers";
import Route from "./components/Route";
import Link from "./components/Link";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex justify-center">
        <Link to="/" className="mr-3 p-3">
          Show books
        </Link>
        <Link to="/components" className="mr-3 p-3">
          Show components
        </Link>
        <Link to="/vehicles" className="mr-3 p-3">
          Show vehicles
        </Link>
        <Link to="/users" className="mr-3 p-3">
          Show users
        </Link>
        <Link to="/animals" className="mr-3 p-3">
          Show animals
        </Link>
      </div>
      <div className="flex justify-center pl-3 pr-3">
        <Route path="/animals">
          <AppAnimals />
        </Route>
        <Route path="/">
          <AppBooksWrapper />
        </Route>
        <Route path="/components">
          <AppComponentsWrapper />
        </Route>
        <Route path="/vehicles">
          <AppVehicles />
        </Route>
        <Route path="/users">
          <AppUsersWrapper />
        </Route>
      </div>
    </div>
  );
}

export default App;
