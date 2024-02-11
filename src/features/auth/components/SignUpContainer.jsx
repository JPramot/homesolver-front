import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import SignUpForm from "./SignUpForm";

export default function SignUpContainer() {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Button bg={"main"} onClick={() => setOpen(true)}>
        Sign up
      </Button>
      {open && (
        <Modal onClose={() => setOpen(false)} title="Sign in" width={25}>
          <SignUpForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}
