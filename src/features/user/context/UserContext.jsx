import { createContext, useState } from "react";
import * as banApi from "../../../apis/banned";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [bannedUsers, setBannedUsers] = useState([]);

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
  return (
    <UserContext.Provider
      value={{ bannedUser, getAllBannedUser, unbannedUser, bannedUsers }}
    >
      {children}
    </UserContext.Provider>
  );
}
