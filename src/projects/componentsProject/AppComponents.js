import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import SideBar from "./components/SideBar";
import Route from "../../components/Route";
import { NavigationProvider } from "../../context/Navigation";
import "./AppComponents.css";

function AppComponents() {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-2 mt-4">
      <SideBar />
      <div className="col-span-3">
        <Route path="/components">
          <DropdownPage />
        </Route>
        <Route path="/components/accordion">
          <AccordionPage />
        </Route>
        <Route path="/components/button">
          <ButtonPage />
        </Route>
        <Route path="/components/modal">
          <ModalPage />
        </Route>
        <Route path="/components/table">
          <TablePage />
        </Route>
        <Route path="/components/counter">
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  );
}

function AppComponentsWrapper() {
  return (
    <NavigationProvider>
      <AppComponents />
    </NavigationProvider>
  );
}

export default AppComponentsWrapper;
