import { useState } from "react";
import Button from "../components/Button";
import SignInForm from "../features/auth/components/SignInForm";
import Modal from "../components/Modal";
import SignUpForm from "../features/auth/components/SignUpForm";

export default function LoginPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    // <div className="w-[40%] mx-auto flex flex-col justify-center bg-[#EDEDED] my-40 rounded-lg">
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <Input
    //         label="username"
    //         name="username"
    //         placeholder="username"
    //         value={input.username}
    //         onChange={handleOnchange}
    //         //   error={error?.username}
    //       />
    //     </div>
    //     <div>
    //       <Input
    //         label="password"
    //         name="password"
    //         placeholder="password"
    //         value={input.password}
    //         onChange={handleOnchange}
    //         //   error={error?.password}
    //       />
    //     </div>
    //     <div className="text-right w-[80%] mx-auto my-2 hover:text-[#A03232] cursor-pointer">
    //       <small>Forget password?</small>
    //     </div>
    //     <div className="w-[80%] mx-auto pb-6">
    //       <Button bg={"second"} width={"full"}>
    //         Log in
    //       </Button>
    //     </div>
    //     <div className="flex flex-col justify-end w-[80%] mx-auto gap-1 items-end mb-3">
    //       <span>Don't have account?</span>
    //       <Button bg="second">register</Button>
    //     </div>
    //   </form>
    // </div>
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
