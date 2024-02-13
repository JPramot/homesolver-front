import React from "react";
import { BsPostcard } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function UserAllPost() {
  return (
    <Link to="/post">
      <div
        className="flex  text-center gap-3 hover:bg-[#EDEDED] px-3 py-1.5 w-full mx-auto hover:text-[#A03232]"
        role="button"
      >
        <BsPostcard className="size-5 " />
        <span>My Posts</span>
      </div>
    </Link>
  );
}
