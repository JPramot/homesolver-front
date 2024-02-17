import { useState } from "react";
import Avartar from "../../../components/Avartar";
import Button from "../../../components/Button";
import UseAuth from "../../../hook/use-auth";
import { toast } from "react-toastify";
import UseComment from "../../../hook/use-comment";

export default function CommentForm({ postId }) {
  const { authUser } = UseAuth();
  const { createComment } = UseComment();

  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleComment = async () => {
    try {
      console.log(postId);
      if (input.trim() === "") setError("please comment something");
      await createComment({ content: input }, postId);
      toast.success("comment success");
    } catch (err) {
      console.log(err);
      toast.error("comment fail");
    }
  };

  return (
    <div>
      <div>
        <textarea
          className="w-full rounded-lg resize-none outline-none focus:border-4 focus:border-[#A03232] p-3"
          name="content"
          cols="30"
          rows="10"
          onChange={(e) => (setInput(e.target.value), setError(""))}
          value={input}
        ></textarea>
        {error && <small className="text-red-500">{error}</small>}
        <div className="flex justify-end gap-4 items-center my-4">
          <Avartar size="3" src={authUser?.userProfile?.profileImage} />
          <h1>{authUser?.userProfile?.alias || "Unknown"}</h1>
          <Button bg="main" onClick={() => setInput("")}>
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
