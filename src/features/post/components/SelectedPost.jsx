import { BsBan } from "react-icons/bs";
import Avartar from "../../../components/Avartar";
import ImageList from "./ImageList";
import formatTimeAgo from "../../../utilitys/time-ago";

function SelectedPost({ post }) {
  return (
    <div className=" bg-white border-2 border-[#A03232] px-10 py-6 flex flex-col gap-3 rounded-lg ">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-semibold ">{post?.title}</h1>
        <BsBan
          className="size-5 hover:fill-[#A03232] hover:bg-gray-100 "
          role="button"
        />
      </div>
      <div className="mb-8">
        <h1 className="text-lg font-light">{post?.content}</h1>
      </div>
      <ImageList />

      <div className=" ">
        <div className="flex items-center gap-4">
          <Avartar size="4" />
          <div>
            <h1>{post?.user?.userProfile?.alias || "Unknown"}</h1>
            <h1>{formatTimeAgo(post?.createdAt)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedPost;
