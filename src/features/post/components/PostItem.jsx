import Avartar from "../../../components/Avartar";
import { TfiCommentAlt } from "react-icons/tfi";
import UseAuth from "../../../hook/use-auth";
import PostActionForOwner from "./PostActionForOwner";
import UsePost from "../../../hook/use-post";

export default function PostItem({ post, action }) {
  const { authUser } = UseAuth();
  const { deletePost } = UsePost();

  // const handleDeletePost=async()=>{
  //   await deletePost(post.id)
  // }

  return (
    <div className="w-[90%] bg-white mx-auto rounded-md">
      <div className="flex flex-col gap-3 py-2">
        <div className="flex justify-between">
          <div
            className="px-8 text-lg font-semibold hover:text-[#A03232] w-fit"
            role="button"
          >
            <h1>{post.title}</h1>
          </div>
          <div>
            {action === "me" ? <PostActionForOwner post={post} /> : null}
          </div>
        </div>
        <div className="flex justify-between px-5 items-center font-light">
          <div className="flex gap-4">
            <div>
              <Avartar size={3} src={post.user?.userProfile.profileImage} />
            </div>
            <div>
              <h1>{post.user.userProfile.alias}</h1>
              <h1>{post.createdAt}</h1>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            {post.user.comment || 0} <TfiCommentAlt />
          </div>
        </div>
      </div>
    </div>
  );
}
