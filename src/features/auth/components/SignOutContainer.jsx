import { IoIosLogOut } from "react-icons/io";
import UseAuth from "../../../hook/use-auth";

export default function SignOutContainer() {
  const { logout } = UseAuth();
  return (
    <div
      className="flex  text-center gap-3 hover:bg-[#EDEDED] px-3 py-1.5 w-full mx-auto items-center hover:text-[#A03232]"
      role="button"
      onClick={logout}
    >
      <IoIosLogOut className="size-5" />
      <span>Log out</span>
    </div>
  );
}
