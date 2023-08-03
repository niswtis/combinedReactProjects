import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import useThunk from "../hooks/use-thunk";
import SkeletonLoader from "./SkeletonLoader";
import Button from "./Button";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, createUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users; // {data: []}
  });

  const handleUserAdd = () => {
    doCreateUser();
  };

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  let content;
  if (isLoadingUsers) {
    content = <SkeletonLoader times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data</div>;
  } else
    content = data.map((user) => {
      return <UsersListItem user={user} key={user.id} />;
    });

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl font-bold">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {createUserError && "Error creating user..."}
      </div>

      {content}
    </div>
  );
}

export default UsersList;
