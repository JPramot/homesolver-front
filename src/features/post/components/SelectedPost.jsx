import { BsBan } from "react-icons/bs";
import Avartar from "../../../components/Avartar";
import ImageList from "./ImageList";
import formatTimeAgo from "../../../utilitys/time-ago";
import { useRef, useState } from "react";
import Modal from "../../../components/Modal";
import AppealPostForm from "./AppealPostForm";
import { Link } from "react-router-dom";

function SelectedPost({ post }) {
  const [openModal, setOpenModal] = useState(false);

  const dropdownEl = useRef(null);

  return (
    <div
      className=" bg-white border-2 border-[#A03232] px-10 py-6 flex flex-col gap-3 rounded-lg "
      ref={dropdownEl}
    >
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-semibold ">{post?.title}</h1>
        <div>
          <BsBan
            className="size-5 hover:fill-[#A03232] hover:bg-gray-100 "
            role="button"
            onClick={() => setOpenModal(true)}
          />
          {openModal && (
            <Modal
              title="What wrong with this post?"
              width={35}
              onClose={() => setOpenModal(false)}
              color="main"
            >
              <AppealPostForm
                onClose={() => setOpenModal(false)}
                postId={post?.id}
              />
            </Modal>
          )}
        </div>
      </div>
      <div className="mb-8">
        <h1 className="text-lg font-light">{post?.content}</h1>
      </div>
      <ImageList />

      <div>
        <div className="flex items-center gap-4">
          <Avartar size="4" src={post?.user?.userProfile?.profileImage} />
          <div>
            <Link to={`/user/profile/${post?.userId}`}>
              <h1>{post?.user?.userProfile?.alias || "Unknown"}</h1>
            </Link>
            <h1>{formatTimeAgo(post?.createdAt)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedPost;
