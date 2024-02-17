import { IoTrashBin } from "react-icons/io5";
import Avartar from "../../../components/Avartar";
import formatTimeAgo from "../../../utilitys/time-ago";

export default function CommentItem({ comment, idx }) {
  console.log(idx);
  return (
    <div className="border-2 border-[#A03232] bg-white rounded-lg">
      <div className="flex justify-between px-10 py-4 text-xl">
        <h2>Comment number {idx + 1}</h2>
        <IoTrashBin className="hover:fill-[#A03232] size-6" role="button" />
      </div>
      <div className="px-10 font-light text-lg">
        <h1>{comment?.content}</h1>
      </div>
      <div className="px-10 my-4 flex gap-4">
        <Avartar size="3" src={comment?.user?.userProfile?.profileImage} />
        <div>
          <h1>{comment?.user?.userProfile?.alias || "Unknown"}</h1>
          <h1>{formatTimeAgo(comment?.createdAt)}</h1>
        </div>
      </div>
    </div>
  );
}
