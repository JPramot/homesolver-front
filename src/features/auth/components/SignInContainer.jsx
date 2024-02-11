import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import SignInForm from "./SignInForm";

export default function SignInContainer() {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);

  return (
    <>
      <Button bg={"main"} onClick={() => setOpen(true)}>
        Sign in
      </Button>
      {open && (
        <Modal onClose={() => setOpen(false)} title="Sign in" width={25}>
          <SignInForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}
