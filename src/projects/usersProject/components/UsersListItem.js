import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import useThunk from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleUserDelete = (user) => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button loading={isLoading} onClick={() => handleUserDelete(user)}>
        <GoTrash />
      </Button>
      {error && <div>Error deleting user.</div>}
      <div className="m-2">{user.name}</div>
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}
export default UsersListItem;
