import { Navigate } from "react-router-dom";
import UseAuth from "../../../hook/use-auth";
import React from "react";
// import Homepage from "../../../pages/HomePage";
import { getToken } from "../../../utilitys/local-storage";

export default function ProtectRoute({ children }) {
  const { authUser } = UseAuth();
  console.log(authUser);
  if (getToken()) {
    console.log(authUser);
    if (authUser && authUser?.role !== "user") return <Navigate to="/home" />;
    // else if (authUser?.role === "admin") return <Navigate to="/admin" />;
    return children;
  }
  return <Navigate to="/home" />;
  // return authUser && authUser?.role === "user" ? (
  //   children
  // ) : authUser && authUser?.role === "admin" ? (
  //   <Navigate to="/admin" />
  // ) : (
  //   <Navigate to="/home" />
  // );
}
