import { createContext, useState } from "react";

import * as userApi from "../../../apis/auth";
import * as localStorage from "../../../utilitys/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const register = async (userData) => {
    const res = await userApi.register(userData);
    setAuthUser(res.data.user);
    localStorage.storeToken(res.data.token);
  };

  const login = async (userData) => {
    const res = await userApi.login(userData);
    setAuthUser(res.data.user);
    localStorage.storeToken(res.data.token);
  };
  return (
    <AuthContext.Provider value={{ register, login, authUser }}>
      {children}
    </AuthContext.Provider>
  );
}
