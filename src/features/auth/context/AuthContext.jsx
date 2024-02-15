import { createContext, useEffect, useState } from "react";

import * as authApi from "../../../apis/auth";
import * as localStorage from "../../../utilitys/local-storage";
import * as userApi from "../../../apis/user";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (localStorage.getToken()) {
  //     const fetchMe = async () => {
  //       try {
  //         const res = await authApi.getMe();
  //         console.log(res.data.user);
  //         setAuthUser(res.data.user);
  //       } catch (err) {
  //         console.log(err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchMe();
  //   }
  //   setLoading(false);
  // }, []);
  useEffect(() => {
    if (localStorage.getToken()) {
      authApi
        .getMe()
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .catch((err) => {
          toast.error(err.response?.data.message);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);
  console.log(authUser);

  const register = async (userData) => {
    try {
      const res = await authApi.register(userData);
      setAuthUser(res.data.user);
      localStorage.storeToken(res.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  const login = async (userData) => {
    try {
      const res = await authApi.login(userData);
      setAuthUser(res.data.user);
      localStorage.storeToken(res.data.token);
    } catch (err) {}
  };
  const logout = () => {
    setAuthUser(null);
    localStorage.removeToken();
  };
  const updateUserProfile = async (userProflle) => {
    try {
      const res = await userApi.updateProfile(userProflle);
      setAuthUser((cur) => ({ ...cur, userProfile: res.data.userProfile }));
      console.log(authUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ register, login, logout, updateUserProfile, authUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
