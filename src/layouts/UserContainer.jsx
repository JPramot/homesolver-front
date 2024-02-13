import PostContainer from "../features/post/components/PostContainer";
import UserDropDown from "../features/user/components/UserDropDown";
import Dropdown from "./Dropdown";

export default function UserContainer() {
  return (
    <>
      <PostContainer />

      <Dropdown>
        <UserDropDown />
      </Dropdown>
    </>
  );
}
