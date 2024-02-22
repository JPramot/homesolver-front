import UserDropDown from "../features/user/components/UserDropDown";
import UseAuth from "../hook/use-auth";
import Dropdown from "./Dropdown";

export default function UserContainer() {
  const {
    authUser: { username },
  } = UseAuth();
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl text-white ">Hello</h1>
        <h1 className="text-xl text-white ">{username}</h1>
      </div>
      <Dropdown>
        <UserDropDown />
      </Dropdown>
    </>
  );
}
