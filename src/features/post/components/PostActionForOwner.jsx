import { useEffect, useRef, useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import Modal from "../../../components/Modal";
import DeletePostForm from "./DeletePostForm";

export default function PostActionForOwner() {
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

  const handleCloseDropdown = () => {
    setOpenDropdown(false);
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
              >
                <h1>Edit Post</h1>
              </div>
              <div
                role="button"
                className="hover:bg-gray-200 hover:text-[#A03232]"
                onClick={() => setOpenDeleteForm(true)}
              >
                <h1>Delete Post</h1>
              </div>
              {openDeleteForm && (
                <Modal
                  title="Do you sure to delete this post?"
                  onClose={() => setOpenDeleteForm(false)}
                >
                  <DeletePostForm onClose={() => setOpenDeleteForm(false)} />
                </Modal>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
