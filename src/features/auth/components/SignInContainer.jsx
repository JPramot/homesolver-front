import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
// import SigninForm from "./SigninForm";

export default function SignInContainer() {
  const [open, setOpen] = useState(false);

  const onSubmit = () => {};
  // return (
  //   <>
  //     <Button bg={"main"} onClick={() => setOpen(true)}>
  //       Sign up
  //     </Button>
  //     {open && (
  //       <Modal onClose={() => setOpen(false)} title="Sign in" width={25}>
  //         <SigninForm onSubmit={onSubmit} />
  //       </Modal>
  //     )}
  //   </>
  // );
}
