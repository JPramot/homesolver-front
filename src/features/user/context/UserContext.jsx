import { createContext, useState } from "react";
import * as banApi from "../../../apis/banned";
import * as userApi from "../../../apis/user";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [bannedUsers, setBannedUsers] = useState([]);
  const [userProfileAndPost, setUserProfileAndPost] = useState({});

  const bannedUser = async (userId) => {
    await banApi.bannedUser(userId);
  };

  const unbannedUser = async (userId) => {
    await banApi.unbannedUser(userId);
  };

  const getAllBannedUser = async () => {
    const res = await banApi.getAllBannedUser();
    setBannedUsers(res.data.bannedUser);
  };

  const getUserProfileAndAllPost = async (userId) => {
    const res = await userApi.getUserProfileAndPost(userId);
    setUserProfileAndPost(res.data.userProfile);
  };
  return (
    <UserContext.Provider
      value={{
        bannedUser,
        getAllBannedUser,
        unbannedUser,
        getUserProfileAndAllPost,
        userProfileAndPost,
        bannedUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
