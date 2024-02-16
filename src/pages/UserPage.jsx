import { useState } from "react";
import PostList from "../features/post/components/PostList";

export default function UserPage() {
  const [page, setPage] = useState(10);
  const handleIncrease = () => {
    setPage((cur) => cur + 10);
  };
  return (
    <div>
      <div>
        <div>
          <h1>All Posts</h1>
        </div>
        <div className="bg-[#A03232] w-[70%] mx-auto rounded-lg p-5">
          <PostList amount={page} />
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
