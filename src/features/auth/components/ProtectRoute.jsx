import { Navigate } from "react-router-dom";
import UseAuth from "../../../hook/use-auth";
import React from "react";
import { getToken } from "../../../utilitys/local-storage";

export default function ProtectRoute({ children }) {
  const { authUser } = UseAuth();
  if (getToken()) {
    if (authUser && authUser?.role !== "user") return <Navigate to="/home" />;
    return children;
  }
  return <Navigate to="/home" />;
}
