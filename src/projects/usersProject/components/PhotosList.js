import { useFetchPhotosQuery, useCreatePhotoMutation } from "../store";
import PhotosListItem from "./PhotosListItem";
import SkeletonLoader from "./SkeletonLoader";
import Button from "./Button";

function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useCreatePhotoMutation();

  const handlePhotoAdd = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <SkeletonLoader className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading photos.</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl font-bold">Photos for {album.title}</h1>
        <Button onClick={handlePhotoAdd} loading={addPhotoResults.isLoading}>
          + Add Photo
        </Button>
        {addPhotoResults.isError && "Error creating album..."}
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;
