import { IoTrashBin } from "react-icons/io5";
import Avartar from "../../../components/Avartar";
import formatTimeAgo from "../../../utilitys/time-ago";
import UseAuth from "../../../hook/use-auth";
import { useEffect, useRef, useState } from "react";
import UseComment from "../../../hook/use-comment";
import { toast } from "react-toastify";
import UsePost from "../../../hook/use-post";
import Spinner from "../../../components/Spinner";

export default function CommentItem({ comment, idx }) {
  const { authUser } = UseAuth();
  const { getPostAndComment } = UsePost();
  const { deleteComment } = UseComment();

  const [openDropdown, setOpenDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const dropdownEl = useRef(null);

  useEffect(() => {
    if (openDropdown) {
      const outside = (e) => {
        if (dropdownEl.current && !dropdownEl.current.contains(e.target))
          setOpenDropdown(false);
      };
      document.addEventListener("mouseup", outside);
      return () => document.removeEventListener("mouseup", outside);
    }
  }, [openDropdown]);

  const handleDelete = async () => {
    try {
      console.log(comment);
      console.log(authUser);
      if (
        comment?.user?.id !== authUser?.id &&
        authUser?.id !== comment?.post?.userId
      )
        return toast.error("you can't delete this comment");
      setLoading(true);
      await deleteComment(comment.id, comment.postId);
      toast.success("delete success");
      await getPostAndComment(comment.postId);
    } catch (err) {
      console.log(err);
      toast.error("delete fail");
    } finally {
      setOpenDropdown(false);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div
        className="border-2 border-[#A03232] bg-white rounded-lg"
        ref={dropdownEl}
      >
        <div className="flex justify-between px-10 py-4 text-xl">
          <h2>Comment number {idx + 1}</h2>
          <div>
            <IoTrashBin
              className="hover:fill-[#A03232] size-6"
              role="button"
              onClick={() => setOpenDropdown(!openDropdown)}
            />
            <div className="absolute">
              {openDropdown && (
                <div className="w-28 bg-white shadow[0_0_6px_rgb(0,0,0,0.2)] p-2 rounded-lg left-8 bottom-8 relative border">
                  <div
                    className="hover:text-[#A03232] hover:bg-gray-200 text-lg font-light pl-4"
                    role="button"
                    onClick={handleDelete}
                  >
                    delete
                  </div>
                  <div
                    className="hover:text-[#A03232] hover:bg-gray-200 text-lg font-light pl-4"
                    role="button"
                    onClick={() => setOpenDropdown(false)}
                  >
                    cancel
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="px-10 font-light text-lg">
          <h1>{comment?.content}</h1>
        </div>
        <div className="px-10 my-4 flex gap-4">
          <Avartar
            size="3"
            src={
              comment?.user?.userProfile?.profileImage ||
              authUser?.userProfile?.profileImage
            }
          />
          <div>
            <h1>
              {comment?.user?.userProfile?.alias ||
                authUser?.userProfile?.alias ||
                "Unknown"}
            </h1>
            <h1>{formatTimeAgo(comment?.createdAt)}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
