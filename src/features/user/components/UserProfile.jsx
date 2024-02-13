import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function UserProfile() {
  return (
    <Link to="/profile">
      <div
        className="flex  text-center gap-3 hover:bg-[#EDEDED] px-3 py-1.5 w-full mx-auto hover:text-[#A03232]"
        role="button"
      >
        <IoPerson className="size-5 " />
        <span>My Profile</span>
      </div>
    </Link>
  );
}
