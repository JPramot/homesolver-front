import { toast } from "react-toastify";
import Button from "../../../components/Button";
import UseAuth from "../../../hook/use-auth";
import UsePost from "../../../hook/use-post";
import { useState } from "react";
import Spinner from "../../../components/Spinner";

export default function AppealPostItem({ appealPost }) {
  const { authUser } = UseAuth();
  const { deletePost, getAllAppealPost } = UsePost();

  const [loading, setLoading] = useState(false);

  const handleDeleteAppealPost = async () => {
    try {
      if (authUser.role !== "admin") return toast.error("You're not admin");
      await deletePost(appealPost.postId);
      setLoading(true);
      toast.success("Post was delete");
      getAllAppealPost();
    } catch (err) {
      console.log(err);
      toast.error(err?.response.data.message);
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
          <h1 className="font-semibold">{appealPost?.post?.title}</h1>
          <h1>was appealed by</h1>
          <h1 className="font-semibold">
            {appealPost?.user?.userProfile?.alias}
          </h1>
        </div>
        <div>{appealPost?.content}</div>
        <div className="flex text-lg gap-4 justify-end">
          <Button bg="second">delete appeal</Button>
          <Button bg="second" onClick={handleDeleteAppealPost}>
            delete post
          </Button>
          <Button bg="second">ban user</Button>
        </div>
      </div>
    </>
  );
}
