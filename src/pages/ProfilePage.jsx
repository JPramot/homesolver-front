import UserProfile from "../features/user/components/UserProfile";
import UserContextProvider from "../features/user/context/UserContext";

export default function ProfilePage() {
  return (
    // <UserContextProvider>
    <UserProfile />
    // </UserContextProvider>
  );
}
