import { useState } from "react";
import PostList from "../features/post/components/PostList";

export default function UserPage() {
  const [page, setPage] = useState(10);
  const handleIncrease = () => {
    setPage((cur) => cur + 10);
  };
  return (
    <div className="py-8">
      <div className="text-2xl font-semibold bg-gray-100 w-[200px] text-center text-[#A03232] mx-[15%] py-2 rounded-lg">
        <h1>All Posts</h1>
      </div>
      <div className="bg-[#A03232] w-[70%] mx-auto rounded-lg p-5 my-4">
        <PostList amount={page} />
      </div>
      <div className="w-[70%] mx-auto text-right text-white hover:text-[#A03232] flex justify-end">
        <div
          className="hover:bg-white w-fit p-2 rounded-md border"
          role="button"
        >
          <h1 onClick={handleIncrease}>see more</h1>
        </div>
      </div>
    </div>
  );
}
