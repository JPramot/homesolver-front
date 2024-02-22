import { useState } from "react";
import Button from "../../../components/Button";
import UseAuth from "../../../hook/use-auth";
import { Link } from "react-router-dom";
import UsePost from "../../../hook/use-post";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";

export default function AppealPostForm({ onClose, postId }) {
  const { authUser } = UseAuth();
  const { appealPost } = UsePost();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAppealPost = async () => {
    try {
      if (!input) return setError("You should tell some reason");
      if (authUser?.role === "admin")
        return toast.error("Admin can't appeal post");
      setLoading(true);
      await appealPost({ content: input }, postId);
      onClose();
      toast.success("Post was appealed");
    } catch (err) {
      console.log(err);
      toast.error("fail to appealed post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      {authUser && authUser?.isBan == false ? (
        <div>
          <div className="w-[90%] mx-auto my-2 ">
            <textarea
              className="resize-none border w-full p-2 focus:ring-2 outline-none focus:border-blue-500 overflow-auto"
              rows="10"
              onChange={(e) => (setInput(e.target.value), setError(""))}
            ></textarea>
            {error && <small className="text-red-500">{error}</small>}
          </div>
          <div className="flex justify-end gap-4 my-3 pr-6">
            <Button bg="second" onClick={onClose}>
              Cancel
            </Button>
            <Button bg="second" onClick={handleAppealPost}>
              Appeal
            </Button>
          </div>
        </div>
      ) : authUser ? (
        <div className="text-[#A03232] text-center font-semibold text-2xl py-4">
          <h1>You can't appeal post</h1>
          <h1>Because you was banned by admin</h1>
        </div>
      ) : (
        <div className="text-center text-xl font-semibold my-4">
          <h1>Please Log in for appeal post</h1>
          <Link to="/login">
            <div className="w-[80%] mx-auto my-6 text-lg ">
              <Button bg="second" width="full">
                Click here to log in or register
              </Button>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
