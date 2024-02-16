import Button from "../../../components/Button";

export default function DeletePostForm({ onClose }) {
  return (
    <div>
      <div className="flex justify-evenly py-4">
        <Button bg="second">Yes</Button>
        <Button bg="second" onClick={onClose}>
          NO
        </Button>
      </div>
    </div>
  );
}
