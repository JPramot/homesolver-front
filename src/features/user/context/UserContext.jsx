import { createContext } from "react";
import * as userApi from "../../../apis/user";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const UpdateUserProfile = async (data) => {
    const res = await userApi.UpdateUserProfile(data);
  };
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
}
