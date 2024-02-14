import { createContext, useEffect, useState } from "react";

import * as userApi from "../../../apis/auth";
import * as localStorage from "../../../utilitys/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getToken()) {
      const fetchMe = async () => {
        try {
          const res = await userApi.getMe();
          console.log(res.data.user);
          setAuthUser(res.data.user);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };
      fetchMe();
    }
    setLoading(false);
  }, []);

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
  const logout = () => {
    setAuthUser(null);
    localStorage.removeToken();
  };
  return (
    <AuthContext.Provider
      value={{ register, login, logout, authUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
