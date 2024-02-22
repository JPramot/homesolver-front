import React from "react";
import UseAuth from "../../../hook/use-auth";
import { Navigate } from "react-router-dom";
import { getToken } from "../../../utilitys/local-storage";

export default function ProtectAdminRoute({ children }) {
  const { authUser } = UseAuth();
  if (getToken()) {
    if (authUser && authUser?.role !== "admin") return <Navigate to="/home" />;
    return children;
  }
  return <Navigate to="/home" />;
}
