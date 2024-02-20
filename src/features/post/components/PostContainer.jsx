import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import PostForm from "./PostForm";
import UseAuth from "../../../hook/use-auth";

export default function PostContainer() {
  const { authUser } = UseAuth();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="my-auto">
        <Button bg="main" onClick={() => setOpen(true)}>
          {authUser?.isBan == true ? "You was banned" : "Create Post"}
        </Button>
      </div>
      {open && authUser?.isBan == false && (
        <Modal
          onClose={() => setOpen(false)}
          title="Let's create post"
          color={"main"}
          width={45}
          bg={"main"}
        >
          <PostForm onClose={handleClose} />
        </Modal>
      )}
    </>
  );
}
