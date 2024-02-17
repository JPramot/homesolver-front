import { useParams } from "react-router-dom";
import CantCommentForm from "../features/comment/components/CantCommentForm";
import CommentForm from "../features/comment/components/CommentForm";
import CommentList from "../features/comment/components/CommentList";
import SelectedPost from "../features/post/components/SelectedPost";
import UseAuth from "../hook/use-auth";
import UsePost from "../hook/use-post";
import { useEffect, useState } from "react";
import CommentContextProvider from "../features/comment/context/CommentContext";
import Spinner from "../components/Spinner";

export default function PostPage() {
  const { authUser } = UseAuth();
  const { postWithComment, getPostAndComment } = UsePost();
  console.log(postWithComment);
  // const {
  //   postWithComment: { title, content, createdAt, comment, postImage },
  //   getPostAndComment,
  // } = UsePost();

  const { postId } = useParams();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        await getPostAndComment(postId);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  // const handleComment = async(data)=>{
  //   await createC
  // }

  if (loading) return <Spinner />;
  return (
    <CommentContextProvider>
      <div className="bg-gray-400 py-10">
        <div className="w-[80%] mx-auto flex flex-col gap-10">
          <SelectedPost post={postWithComment} />
          <div className="text-2xl font-semibold">
            <h1>Comment</h1>
          </div>
          <hr />
          {postWithComment?.comments ? (
            <CommentList comment={postWithComment?.comments} />
          ) : null}
          {authUser ? (
            <div>
              <div className="text-2xl font-semibold">
                <h1>Create comment</h1>
              </div>
              <hr className="my-5" />
              <CommentForm postId={postId} />
            </div>
          ) : (
            <CantCommentForm />
          )}
        </div>
      </div>
    </CommentContextProvider>
  );
}
