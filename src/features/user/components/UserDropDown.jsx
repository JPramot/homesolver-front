import SignOutContainer from "../../auth/components/SignOutContainer";
import UserAllPost from "./UserAllPost";
import UserProfile from "./UserProfile";

export default function UserDropDown() {
  return (
    <>
      <UserProfile />
      <UserAllPost />
      <SignOutContainer />
    </>
  );
}
