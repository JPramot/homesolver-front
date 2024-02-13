import Avartar from "../components/Avartar";
import { IoPerson } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import SignOutContainer from "../features/auth/components/SignOutContainer";
import UserProfile from "../features/user/components/UserProfile";

export default function Dropdown({ children }) {
  return (
    <div className="relative h-[80px]">
      <div role="button">
        <Avartar size={5} />
      </div>
      <div className="absolute right-0">
        <div className="w-52  bg-white shadow-[0_0_6px_rgb(0,0,0,0.2)] p-2 rounded-lg">
          {/* <div
            className="flex  text-center gap-3 hover:bg-[#EDEDED] px-3 py-1.5 w-full mx-auto hover:text-[#A03232]"
            role="button"
          >
            <IoPerson className="size-5 " />
            <span>View My Profile</span>
          </div> */}
          {/* <div
            className="flex  text-center gap-3 hover:bg-[#EDEDED] px-3 py-1.5 w-full mx-auto items-center hover:text-[#A03232]"
            role="button"
          >
            <IoIosLogOut className="size-5" />
            <span>Log out</span>
          </div> */}
          {/* <UserProfile />
          <SignOutContainer /> */}
          {children}
        </div>
      </div>
    </div>
  );
}
