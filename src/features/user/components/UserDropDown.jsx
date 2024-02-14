import { Link } from "react-router-dom";
import SignOutContainer from "../../auth/components/SignOutContainer";
import { IoPerson } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";

export default function UserDropDown() {
  return (
    <>
      <Link to="/profile">
        <div
          className="flex  text-center gap-3 hover:bg-[#EDEDED] px-3 py-1.5 w-full mx-auto hover:text-[#A03232]"
          role="button"
        >
          <IoPerson className="size-5 " />
          <span>My Profile</span>
        </div>
      </Link>
      <Link to="/post">
        <div
          className="flex  text-center gap-3 hover:bg-[#EDEDED] px-3 py-1.5 w-full mx-auto hover:text-[#A03232]"
          role="button"
        >
          <BsPostcard className="size-5 " />
          <span>My Posts</span>
        </div>
      </Link>
      <SignOutContainer />
    </>
  );
}
