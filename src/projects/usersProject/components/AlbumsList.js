import { useFetchAlbumsQuery, useCreateAlbumMutation } from "../store";
import SkeletonLoader from "./SkeletonLoader";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, addAlbumResults] = useCreateAlbumMutation();

  const handleAlbumAdd = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <SkeletonLoader className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl font-bold">Albums for {user.name}</h1>
        <Button onClick={handleAlbumAdd} loading={addAlbumResults.isLoading}>
          + Add Album
        </Button>
        {addAlbumResults.isError && "Error creating album..."}
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
