import { toast } from "react-toastify";
import Button from "../../../components/Button";
import UseAuth from "../../../hook/use-auth";
import UsePost from "../../../hook/use-post";
import { useState } from "react";
import Spinner from "../../../components/Spinner";
import { Link } from "react-router-dom";
import UseUser from "../../../hook/use-user";

export default function AppealPostItem({ appealPost }) {
  const { authUser } = UseAuth();
  const { deletePost, getAllAppealPost, deleteAppealPost } = UsePost();
  const { bannedUser, getAllBannedUser } = UseUser();

  const [loading, setLoading] = useState(false);

  console.log(appealPost);

  const handleDeletePost = async () => {
    try {
      if (authUser.role !== "admin") return toast.error("You're not admin");
      await deletePost(appealPost.postId);
      setLoading(true);
      toast.success("Post was delete");
      await getAllAppealPost();
    } catch (err) {
      console.log(err);
      toast.error(err?.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAppealPost = async () => {
    try {
      if (authUser.role !== "admin") return toast.error("You're not admin");
      await deleteAppealPost(appealPost?.id);
      setLoading(true);
      toast.success("Appeal post was delete");
      await getAllAppealPost();
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || "delete appeal post fail");
    } finally {
      setLoading(false);
    }
  };

  const handleBannedUser = async () => {
    try {
      if (authUser.role != "admin") return toast.error("You're not admin");
      if (appealPost?.post?.userId?.isBan == true)
        return toast.error("User already banned");
      await bannedUser(appealPost?.post?.userId);
      setLoading(true);
      toast.success("User was banned");
      await getAllBannedUser();
    } catch (err) {
      toast.error(err?.response?.data.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="w-[90%] bg-white mx-auto rounded-md px-5 text-[#A03232] text-xl font-light py-3 my-6">
        <div className="flex gap-3">
          <h1>Post</h1>
          <Link to={`/post/${appealPost.postId}/comment`}>
            <h1 className="font-semibold hover:text-[#b84b4bd5]">
              {appealPost?.post?.title}
            </h1>
          </Link>
          <h1> by </h1>
          <Link to={`/user/profile/${appealPost?.post?.userId}`}>
            <h1 className="font-semibold hover:text-[#b84b4bd5]">
              {appealPost?.post?.user?.username}
            </h1>
          </Link>
        </div>
        <div className="flex gap-3">
          <h1>was appealed by</h1>
          <Link to={`/user/profile/${appealPost?.userId}`}>
            <h1 className="font-semibold hover:text-[#b84b4bd5]">
              {appealPost?.user?.username || "Unknown"}
            </h1>
          </Link>
        </div>
        <div>{appealPost?.content}</div>
        <div className="flex text-lg gap-4 justify-end">
          <Button bg="second" onClick={handleDeleteAppealPost}>
            delete appeal
          </Button>
          <Button bg="second" onClick={handleDeletePost}>
            delete post
          </Button>
          <Button bg="second" onClick={handleBannedUser}>
            ban user
          </Button>
        </div>
      </div>
    </>
  );
}
