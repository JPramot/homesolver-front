import { useState } from "react";
import Button from "../components/Button";
import SignInForm from "../features/auth/components/SignInForm";
import Modal from "../components/Modal";
import SignUpForm from "../features/auth/components/SignUpForm";

export default function LoginPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="w-[40%] mx-auto flex flex-col justify-center bg-[#EDEDED] my-40 rounded-lg">
        <h1 className="text-5xl font-bold text-center mt-3 text-[#A03232]">
          Log in
        </h1>
        <SignInForm />
        <div className="text-right w-[80%] mx-auto mb-2 -mt-4 ">
          <small className="cursor-pointer hover:text-[#A03232]">
            Forget password?
          </small>
        </div>
        <div className="w-[80%] mx-auto mb-5">
          <span>Don't have account?</span>
          <Button bg="second" width="full" onClick={() => setOpenModal(true)}>
            register
          </Button>
        </div>
        <div className="w-[80%] mx-auto "></div>
      </div>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)} width={30}>
          <SignUpForm closeModal={() => setOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}
