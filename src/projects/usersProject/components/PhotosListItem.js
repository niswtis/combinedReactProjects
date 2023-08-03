import { useDeletePhotoMutation } from "../store";
import { GoTrash } from "react-icons/go";

function PhotosListItem({ photo }) {
  const [deletePhoto, results] = useDeletePhotoMutation();

  const handleDeletePhoto = () => {
    deletePhoto(photo);
  };

  return (
    <div onClick={handleDeletePhoto} className="relative m-2 cursor-pointer">
      <img className="h-20 w-20" src={photo.url} alt="random pic"></img>
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash className="text-3xl" />
      </div>
    </div>
  );
}

export default PhotosListItem;
