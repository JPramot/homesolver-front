import React from "react";
import UseAuth from "../../../hook/use-auth";
import { Navigate } from "react-router-dom";

export default function ProtectAdminRoute({ children }) {
  const { AuthUser } = UseAuth();
  console.log(AuthUser?.role);
  console.log(AuthUser);
  return AuthUser && AuthUser?.role === "admin" ? (
    children
  ) : (
    <Navigate to="/home" />
  );
}
