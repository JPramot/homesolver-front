import React, { useState } from "react";
import PostList from "../features/post/components/PostList";
import UseAuth from "../hook/use-auth";

export default function PostByUser() {
  const { authUser } = UseAuth();
  const [page, setPage] = useState(10);
  const handleIncrease = () => {
    setPage((cur) => cur + 10);
  };
  return (
    <div>
      <div>
        <div>
          <h1>My Posts</h1>
        </div>
        <div className="bg-[#A03232] w-[70%] mx-auto rounded-lg p-5">
          <PostList amount={page} userId={authUser?.id} action="me" />
        </div>
        <div
          className="w-[80%] mx-auto text-right hover:text-[#A03232]"
          role="button"
        >
          <h1 onClick={handleIncrease}>see more</h1>
        </div>
      </div>
    </div>
  );
}
