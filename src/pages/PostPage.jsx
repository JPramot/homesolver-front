import { useParams } from "react-router-dom";
import CantCommentForm from "../features/comment/CantCommentForm";
import CommentForm from "../features/comment/components/CommentForm";
import CommentList from "../features/comment/components/CommentList";
import SelectedPost from "../features/post/components/SelectedPost";
import UseAuth from "../hook/use-auth";
import UsePost from "../hook/use-post";
import { useEffect } from "react";

export default function PostPage() {
  const { authUser } = UseAuth();
  const { postWithComment, getPostAndComment } = UsePost();
  // const {
  //   postWithComment: { title, content, createdAt, comment, postImage },
  //   getPostAndComment,
  // } = UsePost();

  const { postId } = useParams();

  console.log(postWithComment);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        await getPostAndComment(postId);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, []);
  return (
    <div className="bg-gray-400 py-10">
      <div className="w-[80%] mx-auto flex flex-col gap-10">
        <SelectedPost post={postWithComment} />
        <div className="text-2xl font-semibold">
          <h1>Comment</h1>
        </div>
        <hr />
        {postWithComment?.comments == null ? (
          <CommentList post={postWithComment?.comment} />
        ) : null}
        {authUser ? (
          <div>
            <div className="text-2xl font-semibold">
              <h1>Create comment</h1>
            </div>
            <hr className="my-5" />
            <CommentForm />
          </div>
        ) : (
          <CantCommentForm />
        )}
      </div>
    </div>
  );
}
