import { Navigate } from "react-router-dom";
import UseAuth from "../../../hook/use-auth";
import React from "react";
import Homepage from "../../../pages/HomePage";

export default function ProtectRoute({ children }) {
  const { authUser } = UseAuth();
  console.log(authUser);
  return authUser && authUser?.role === "user" ? (
    children
  ) : authUser && authUser?.role === "admin" ? (
    <Navigate to="/admin" />
  ) : (
    <Navigate to="/home" />
  );
}
