import UsersList from "./components/UsersList";
import { Provider } from "react-redux";
import { store } from "./store";

function AppUsers() {
  return (
    <div className="container mx-auto">
      <UsersList />
    </div>
  );
}

function AppUsersWrapper() {
  return (
    <Provider store={store}>
      <AppUsers />
    </Provider>
  );
}

export default AppUsersWrapper;
