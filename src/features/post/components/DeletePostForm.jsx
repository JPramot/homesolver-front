import Button from "../../../components/Button";
import UsePost from "../../../hook/use-post";

export default function DeletePostForm({ onClose, onDelete }) {
  //   const { deletePost } = UsePost();
  const handleYesButton = () => {
    onDelete();
    onClose();
  };
  return (
    <div>
      <div className="flex justify-evenly py-4">
        <Button bg="second" onClick={handleYesButton}>
          Yes
        </Button>
        <Button bg="second" onClick={onClose}>
          NO
        </Button>
      </div>
    </div>
  );
}
