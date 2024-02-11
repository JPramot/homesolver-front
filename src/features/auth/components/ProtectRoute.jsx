import { Navigate } from "react-router-dom";
import UseAuth from "../../../hook/use-auth";
import React from "react";

export default function ProtectRoute({ children }) {
  const { authUser } = UseAuth();
  return authUser && authUser.role === "admin" ? (
    <Navigate to="/admin" />
  ) : authUser && authUser.role === "user" ? (
    children
  ) : (
    <Navigate to="/" />
  );
}
