import { useEffect, useRef, useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import Modal from "../../../components/Modal";
import DeletePostForm from "./DeletePostForm";
import EditPostForm from "./EditPostForm";
import UsePost from "../../../hook/use-post";

export default function PostActionForOwner({ post }) {
  const { deletePost } = UsePost();

  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDeleteForm, setOpenDeleteForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);

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

  // const handleCloseDropdown = () => {
  //   setOpenDropdown(false);
  // };

  const handleDeletePost = async () => {
    try {
      await deletePost(post.id);
    } catch (err) {}
  };

  return (
    <div ref={dropdownEl}>
      <div
        className="pr-4 pt-2"
        role="button"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <GoKebabHorizontal className="size-5" />
      </div>
      {openDropdown && (
        <div className="absolute ">
          <div className="w-40  bg-white shadow-[0_0_6px_rgb(0,0,0,0.2)] p-2 rounded-lg">
            <div>
              <div
                role="button"
                className="hover:bg-gray-200 hover:text-[#A03232]"
                onClick={() => setOpenEditForm(true)}
              >
                <h1>Edit Post</h1>
              </div>
              {openEditForm && (
                <Modal
                  bg="main"
                  title="Edit your post"
                  onClose={() => setOpenEditForm(false)}
                  width={45}
                >
                  <EditPostForm />
                </Modal>
              )}
              <div
                role="button"
                className="hover:bg-gray-200 hover:text-[#A03232]"
                onClick={() => setOpenDeleteForm(true)}
              >
                <h1>Delete Post</h1>
              </div>
              {openDeleteForm && (
                <Modal
                  bg="main"
                  color="main"
                  title="Do you sure to delete this post?"
                  onClose={() => setOpenDeleteForm(false)}
                >
                  <DeletePostForm
                    onClose={() => (
                      setOpenDeleteForm(false), setOpenDropdown(false)
                    )}
                    onDelete={handleDeletePost}
                  />
                </Modal>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
