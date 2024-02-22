import { useState } from "react";
import Avartar from "../../../components/Avartar";
import Button from "../../../components/Button";
import UseAuth from "../../../hook/use-auth";
import { toast } from "react-toastify";
import UseComment from "../../../hook/use-comment";
import UsePost from "../../../hook/use-post";
import Spinner from "../../../components/Spinner";

export default function CommentForm({ postId }) {
  const { authUser } = UseAuth();
  const { createComment } = UseComment();
  const { getPostAndComment, getAllPosts } = UsePost();

  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleComment = async () => {
    try {
      if (input.trim() == "") return setError("please comment something");
      setLoading(true);
      await createComment({ content: input }, postId);
      setInput("");
      await getPostAndComment(postId);
      toast.success("comment success");
      await getAllPosts();
    } catch (err) {
      console.log(err);
      toast.error("comment fail");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Spinner />}
      <div>
        <textarea
          className="w-full rounded-lg resize-none outline-none focus:border-4 focus:border-[#A03232] p-3 mb-2"
          name="content"
          cols="30"
          rows="10"
          onChange={(e) => (setInput(e.target.value), setError(""))}
          value={input}
        ></textarea>
        {error && (
          <small className="text-red-500 bg-white p-2 rounded-md">
            {error}
          </small>
        )}
        <div className="flex justify-end gap-4 items-center my-4">
          <Avartar size="3" src={authUser?.userProfile?.profileImage} />
          <h1>{authUser?.userProfile?.alias || "Unknown"}</h1>
          <Button bg="main" onClick={() => (setInput(""), setError(""))}>
            Cancel
          </Button>
          <Button bg="main" onClick={handleComment}>
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
}
