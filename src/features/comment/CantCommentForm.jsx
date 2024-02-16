import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function CantCommentForm() {
  return (
    <div className="bg-white h-[200px] rounded-lg">
      <div className="flex flex-col items-center my-12 gap-3">
        <h1>Please register or login to comment</h1>
        <Link to="/login">
          <Button bg="second">Click here to register / login</Button>
        </Link>
      </div>
    </div>
  );
}
