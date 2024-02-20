import Avartar from "../../../components/Avartar";
import { TfiCommentAlt } from "react-icons/tfi";
import PostActionForOwner from "./PostActionForOwner";
import { Link } from "react-router-dom";
import UsePost from "../../../hook/use-post";
import formatTimeAgo from "../../../utilitys/time-ago";

export default function PostItem({ post, action }) {
  const { getPostAndComment } = UsePost();

  const handleGetPostWithComment = async () => {
    await getPostAndComment(post.id);
  };

  return (
    <div className="w-[90%] bg-white mx-auto rounded-md">
      <div className="flex flex-col gap-3 py-2">
        <div className="flex justify-between">
          <Link to={`/post/${post?.id}/comment`}>
            <div
              className="px-8 text-lg font-semibold hover:text-[#A03232] w-fit"
              role="button"
              onClick={handleGetPostWithComment}
            >
              <h1>{post?.title}</h1>
            </div>
          </Link>
          <div>
            {action === "me" ? <PostActionForOwner post={post} /> : null}
          </div>
        </div>
        <div className="flex justify-between px-5 items-center font-light">
          <div className="flex gap-4">
            <div>
              <Avartar size={3} src={post.user?.userProfile?.profileImage} />
            </div>
            <div>
              <h1>{post?.user?.userProfile?.alias}</h1>
              <h1>{formatTimeAgo(post?.createdAt)}</h1>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            {post?.comments?.length || 0} <TfiCommentAlt />
          </div>
        </div>
      </div>
    </div>
  );
}
