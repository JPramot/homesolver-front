import { createContext, useState } from "react";

import * as userApi from "../../../apis/auth";
import * as localStorage from "../../../utilitys/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const register = async (userData) => {
    const res = await userApi.register(userData);
    setAuthUser(res.data.newUser);
    localStorage.storeToken(res.data.token);
    console.log(userData);
    console.log(res.data);
  };
  return (
    <AuthContext.Provider value={{ register, authUser }}>
      {children}
    </AuthContext.Provider>
  );
}
