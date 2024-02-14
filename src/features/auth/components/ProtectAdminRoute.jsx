import React from "react";
import UseAuth from "../../../hook/use-auth";
import { Navigate } from "react-router-dom";
import { getToken } from "../../../utilitys/local-storage";

export default function ProtectAdminRoute({ children }) {
  const { AuthUser } = UseAuth();
  console.log("test");
  if (getToken()) {
    console.log(AuthUser);
    if (AuthUser && AuthUser?.role === "admin") return <Navigate to="/home" />;
    return children;
  }
  return <Navigate to="/home" />;
}
